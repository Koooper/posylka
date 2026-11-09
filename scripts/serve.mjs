import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { watch } from 'node:fs';
import { extname, resolve, sep, join } from 'node:path';
import { build, root, output } from './build.mjs';

await build();
const args = process.argv.slice(2);
const portIndex = args.indexOf('--port');
const port = Number(portIndex === -1 ? 4173 : args[portIndex + 1]);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.json': 'application/json' };
let building = Promise.resolve();

createServer(async (request, response) => {
  try {
    await building;
    // Match the global Pages headers locally, including CSP.
    const headerFile = await readFile(join(output, '_headers'), 'utf8');
    for (const line of headerFile.split('\n')) {
      const match = line.match(/^\s+([^:]+):\s*(.+)$/);
      if (match) response.setHeader(match[1], match[2]);
    }
    response.setHeader('Cache-Control', 'no-store');
    if (!['GET', 'HEAD'].includes(request.method)) {
      response.writeHead(405, { Allow: 'GET, HEAD' }).end();
      return;
    }
    const url = new URL(request.url, 'http://localhost');
    const pathname = decodeURIComponent(url.pathname);
    let file = resolve(output, '.' + pathname);
    if (!(file === output || file.startsWith(output + sep)) || pathname.includes('\\') || pathname.includes('\0') || pathname === '/_headers') {
      response.writeHead(404).end();
      return;
    }
    let info = await stat(file).catch(() => null);
    if (info?.isDirectory()) {
      if (!pathname.endsWith('/')) {
        response.writeHead(301, { Location: url.pathname + '/' + url.search }).end();
        return;
      }
      file = join(file, 'index.html');
      info = await stat(file).catch(() => null);
    }
    let status = 200;
    if (!info?.isFile()) {
      file = join(output, '404.html');
      status = 404;
    }
    const content = await readFile(file);
    response.writeHead(status, { 'Content-Type': types[extname(file)] || 'application/octet-stream' });
    response.end(request.method === 'HEAD' ? undefined : content);
  } catch (error) {
    console.error(error.message);
    response.writeHead(error instanceof URIError ? 400 : 500).end();
  }
}).listen(port, '127.0.0.1', () => console.log(`Posylka: http://127.0.0.1:${port}${args.includes('--watch') ? ' (watching src/)' : ''}`));

if (args.includes('--watch')) {
  let timer;
  watch(join(root, 'src'), { recursive: true }, () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      building = building.then(build).catch(error => console.error(`Build failed: ${error.message}`));
    }, 100);
  });
}
