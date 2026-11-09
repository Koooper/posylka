import { cp, mkdir, readFile, writeFile, rm, lstat } from 'node:fs/promises';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { catalog } from './locale-catalog.mjs';
import { courseFragments } from './course-fragments.mjs';

export const root = fileURLToPath(new URL('../', import.meta.url));
export const output = join(root, 'dist');
const source = join(root, 'src');
const read = file => readFile(join(source, file), 'utf8');
const escape = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const render = (template, values) => template.replace(/\{\{(\w+)\}\}/g, (_, key) => {
  if (!(key in values)) throw new Error(`Unknown template placeholder: ${key}`);
  return values[key];
});

export async function build() {
  const ukrainian = await catalog();
  const fragments = await courseFragments();
  // Reload route metadata when the preview watcher rebuilds after a config edit.
  const { pages } = await import(new URL(`../src/site.js?build=${Date.now()}`, import.meta.url));
  const [layout, header, footer] = await Promise.all([
    read('layouts/base.html'), read('partials/header.html'), read('partials/footer.html'),
  ]);
  const allPages = [...pages, {
    path: '/404.html', title: 'Page not found · Posylka',
    description: 'This address does not exist on Posylka. Return to the educational site about Nova Post.',
  }];
  const documents = await Promise.all(allPages.map(async (page, index) => {
    const file = page.path.endsWith('.html') ? page.path.slice(1) : `${page.path.slice(1)}index.html`;
    const content = render(await read(`pages/${file}`),fragments);
    const topPages=pages.filter(item=>!item.parent);
    const nav = topPages.slice(1).map(item => `<a href="${item.path}"${item.path === page.path ? ' aria-current="page"' : item.path===page.parent ? ' aria-current="location"' : ''}>${escape(item.label)}</a>`).join('\n      ');
    const siblings=page.parent?pages.filter(item=>item.parent===page.parent):topPages;
    const siblingIndex=siblings.findIndex(item=>item.path===page.path);
    const next=siblingIndex<0?null:siblings[siblingIndex+1] || (page.parent?pages.find(item=>item.path===page.parent):null);
    const html = render(layout, {
      title: escape(page.title), description: escape(page.description),
      script: page.module ? `<script type="module" src="/assets/js/${page.module}.js"></script>` : '',
      header: render(header, { nav }), footer, content,
      sectionNav:page.parent?`<nav class="lesson-breadcrumb wrap" aria-label="Lesson navigation"><a href="${page.parent}">Language corner</a><span aria-hidden="true">/</span><span>${escape(page.label)}</span></nav>`:'',
      next: index > 0 && next ? `<nav class="next-page wrap" aria-label="Continue exploring"><span>Next stop</span><a href="${next.path}">${escape(next.label)} <span aria-hidden="true">→</span></a><a class="back-home" href="/">All topics</a></nav>` : '',
    });
    return { file, html };
  }));

  // Only the generated dist directory inside this checkout may be cleared.
  if (resolve(output) !== resolve(root, 'dist')) throw new Error('Unexpected output directory');
  const existing = await lstat(output).catch(error => {
    if (error.code !== 'ENOENT') throw error;
  });
  if (existing?.isSymbolicLink()) throw new Error('Refusing to replace a linked dist directory');
  await rm(output, { recursive: true, force: true });
  await mkdir(output, { recursive: true });
  await cp(join(source, 'assets'), join(output, 'assets'), { recursive: true });
  await cp(join(source, '_headers'), join(output, '_headers'));
  await mkdir(join(output, 'assets/js/i18n'), { recursive: true });
  await writeFile(join(output, 'assets/js/i18n/catalog.js'), `// Generated from src/locales/uk. Edit the source catalogs.\nexport default ${JSON.stringify(ukrainian)};\n`);
  await Promise.all(documents.map(async ({ file, html }) => {
    const target = join(output, file);
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, html);
  }));
  console.log(`Built ${documents.length} HTML pages in dist/`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await build();
}
