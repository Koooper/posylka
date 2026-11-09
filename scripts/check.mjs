import assert from 'node:assert/strict';
import { readdir, readFile, stat } from 'node:fs/promises';
import { dirname, extname, join, relative, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { build, output, root } from './build.mjs';
import { pages } from '../src/site.js';
import { PARCELS, STOPS_UA } from '../src/assets/js/data/parcels.js';
import { QS2, REFS } from '../src/assets/js/data/questions.js';
import { catalog } from './locale-catalog.mjs';
import { WORDS,UPDATES,DIALOGUES,READINGS } from '../src/assets/js/data/course.js';
import { VOCAB } from '../src/assets/js/data/vocabulary.js';

async function filesIn(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => entry.isDirectory() ? filesIn(join(directory, entry.name)) : join(directory, entry.name)))).flat();
}

await build();
const files = await filesIn(output);
const html = new Map(await Promise.all(files.filter(file => extname(file) === '.html').map(async file => [file, await readFile(file, 'utf8')])));
let links = 0;
for (const [file, text] of html) {
  const name = relative(output, file);
  assert.equal((text.match(/<h1(?:\s|>)/g) || []).length, 1, `${name}: expected one h1`);
  assert.match(text, /<title>[^<]+<\/title>/, `${name}: missing title`);
  assert.match(text, /<html lang="en">/, `${name}: missing document language`);
  assert.ok(!/\{\{\w+\}\}/.test(text), `${name}: unfilled template`);
  assert.ok(!/<script(?![^>]*\bsrc=)[^>]*>/i.test(text), `${name}: inline script conflicts with CSP`);
  const ids = [...text.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length, `${name}: duplicate IDs`);
  for (const [, href] of text.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    if (/^(https?:|data:|mailto:)/.test(href)) continue;
    const url = new URL(href, 'https://posylka.invalid/' + relative(output, file).replaceAll('\\', '/'));
    let target = resolve(output, '.' + decodeURIComponent(url.pathname));
    if (url.pathname.endsWith('/')) target = join(target, 'index.html');
    assert.ok((await stat(target).catch(() => null))?.isFile(), `${name}: missing ${href}`);
    if (url.hash && html.has(target)) {
      assert.ok(html.get(target).includes(`id="${url.hash.slice(1)}"`), `${name}: missing anchor ${href}`);
    }
    links++;
  }
}
const scripts = [...files.filter(file => extname(file) === '.js'), ...(await filesIn(join(root, 'scripts'))).filter(file => extname(file) === '.mjs'), join(root, 'src/site.js')];
for (const file of scripts) {
  const result = spawnSync(process.execPath, ['--check', file], { encoding: 'utf8' });
  assert.equal(result.status, 0, `${relative(root, file)}: ${result.stderr}`);
  const text = await readFile(file, 'utf8');
  for (const [, dependency] of text.matchAll(/(?:from\s*|import\s*)['"](\.[^'"]+)['"]/g)) {
    assert.ok((await stat(resolve(dirname(file), dependency)).catch(() => null))?.isFile(), `Missing import: ${file} → ${dependency}`);
  }
}
assert.equal(new Set(pages.map(page => page.path)).size, pages.length, 'Duplicate routes');
for(const page of pages)if(page.parent)assert.ok(pages.some(parent=>parent.path===page.parent),`Missing parent route: ${page.path}`);
assert.equal(new Set(WORDS.map(word=>word.key)).size,WORDS.length,'Duplicate word cards');
for(const word of WORDS)assert.ok(VOCAB[word.key]&&word.uk&&word.en,`Invalid word card: ${word.key}`);
for(const group of [DIALOGUES,READINGS])assert.equal(new Set(group.map(item=>item.id)).size,group.length,'Duplicate lesson scene IDs');
const exercises=[UPDATES,...DIALOGUES.map(scene=>scene.turns),...READINGS.map(reading=>reading.questions)];
for(const questions of exercises){
  assert.ok(questions.length,'Empty language exercise');
  for(const q of questions){
    assert.ok(q.question&&q.explanation,'Practice question needs a prompt and explanation');
    assert.ok(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<q.options.length,'Practice answer is out of range');
    assert.equal(new Set(q.options.map(option=>option.uk)).size,q.options.length,'Duplicate practice choices');
    assert.ok(q.options.every(option=>option.uk&&option.en),'Practice choices need Ukrainian text and an English hint');
  }
}
assert.equal(new Set(PARCELS.map(parcel => parcel.num)).size, PARCELS.length, 'Duplicate tracking numbers');
for (const parcel of PARCELS) {
  assert.equal(STOPS_UA[parcel.id].length, parcel.stops.length, `${parcel.id}: route labels differ`);
  assert.ok(parcel.steps.some(step => step.start) && parcel.steps.some(step => step.done), `${parcel.id}: incomplete journey`);
}
for (const question of QS2) {
  for (const [, reference] of JSON.stringify(question).matchAll(/\[\[cite:([A-Za-z0-9]+)\]\]/g)) {
    assert.ok(REFS[reference], `Missing research reference: ${reference}`);
  }
}
const headers = await readFile(join(output, '_headers'), 'utf8');
assert.match(headers, /script-src 'self'/, 'CSP must allow the extracted modules');
const ukrainian = await catalog();
for (const [english,translation] of Object.entries(ukrainian)) {
  assert.ok(translation.trim(), `Empty Ukrainian translation: ${english}`);
  assert.ok(/[А-ЯІЇЄҐа-яіїєґ]/.test(translation) || translation === english || /^[\s.,:;!?0-9]+$/.test(translation), `Translation needs Ukrainian text: ${english}`);
}
// Visible static prose must have a translation. Publication names/dates, brand
// names, and the Latin spellings taught in the alphabet examples are retained.
const normalize=value=>value.replace(/\s+/g,' ').trim();
for(const file of (await filesIn(join(root,'src/pages'))).concat(await filesIn(join(root,'src/partials')))) {
  if(extname(file)!=='.html')continue;
  const text=await readFile(file,'utf8');
  for(const fragment of text.split(/<[^>]*>/g)) {
    const value=normalize(fragment);
    if(!/[A-Za-z]{3}/.test(value) || /[А-ЯІЇЄҐа-яіїєґ]/.test(value) || value.includes('{{'))continue;
    if(ukrainian[value] || value==='Posylka' || value==='np-dostavka.example')continue;
    if(/^[A-Za-z .(),-]+(?:\d{4})$/.test(value))continue;
    if(value==='“Your parcel has been held because of a wrong postcode. Confirm your address:”')continue;
    assert.fail(`Missing static Ukrainian translation in ${relative(root,file)}: ${value}`);
  }
}
console.log(`Checked ${html.size} HTML pages, ${links} local links/assets, ${scripts.length} JS files, parcel routes, research references and ${Object.keys(ukrainian).length} Ukrainian messages.`);
