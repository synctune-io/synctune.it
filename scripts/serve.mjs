// Local preview that serves the published files the way GitHub Pages does.
// Node built-ins only.
//   node scripts/serve.mjs              http://127.0.0.1:8080
//   node scripts/serve.mjs --port 3000
//
//   /foo         serves foo.html
//   /dir/        serves dir/index.html
//   /dir         redirects (301) to /dir/ when only dir/index.html exists
//   /foo.html    is still served
//   anything else returns 404.html with status 404
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const portArg = process.argv.indexOf('--port');
const port = Number(portArg === -1 ? process.env.PORT || 8080 : process.argv[portArg + 1]);
const host = '127.0.0.1';
if (!Number.isInteger(port) || port < 0 || port > 65535) {
  console.error(`Invalid port: ${portArg === -1 ? process.env.PORT : process.argv[portArg + 1]}`);
  process.exit(1);
}

// Mirrors the public files packaged by .github/workflows/pages.yml.
const publishedDirs = ['assets'];
const publishedRootFiles = ['robots.txt', 'sitemap.xml', 'CNAME', '.nojekyll'];
const isPublished = (rel) => {
  const [first, ...rest] = rel.split('/');
  if (rest.length) return publishedDirs.includes(first);
  return first.endsWith('.html') || publishedRootFiles.includes(first);
};

const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ttf': 'font/ttf',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
};

async function publishedFile(rel) {
  if (!rel || !isPublished(rel)) return null;
  try {
    return (await stat(path.join(root, rel))).isFile() ? rel : null;
  } catch {
    return null;
  }
}

async function resolve(pathname) {
  const segments = pathname.split('/').slice(1);
  if (segments.some((segment) => segment === '..' || segment === '.' || segment.includes('\\') || segment.includes('\0'))) {
    return { status: 404 };
  }
  const rel = segments.join('/');
  if (rel === '' || rel.endsWith('/')) {
    const file = await publishedFile(`${rel}index.html`);
    return file ? { status: 200, file } : { status: 404 };
  }
  const exact = await publishedFile(rel);
  if (exact) return { status: 200, file: exact };
  const page = await publishedFile(`${rel}.html`);
  if (page) return { status: 200, file: page };
  if (await publishedFile(`${rel}/index.html`)) return { status: 301, location: `${pathname}/` };
  return { status: 404 };
}

const server = createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host || host}`);
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { allow: 'GET, HEAD' }).end();
    return;
  }
  let pathname;
  try {
    pathname = decodeURIComponent(url.pathname);
  } catch {
    pathname = null;
  }
  const result = pathname ? await resolve(pathname) : { status: 404 };
  if (result.status === 301) {
    response.writeHead(301, { location: `${encodeURI(result.location)}${url.search}` }).end();
    console.log(`301 ${url.pathname}`);
    return;
  }
  const file = result.file ?? '404.html';
  let body;
  try {
    body = await readFile(path.join(root, file));
  } catch (error) {
    response.writeHead(500).end();
    console.error(`500 ${url.pathname}: ${error.message}`);
    return;
  }
  response.writeHead(result.status, {
    'content-type': types[path.extname(file).toLowerCase()] ?? 'application/octet-stream',
    'content-length': body.length,
    'cache-control': 'no-store',
  });
  response.end(request.method === 'HEAD' ? undefined : body);
  console.log(`${result.status} ${url.pathname}`);
});

server.on('error', (error) => {
  console.error(`Preview server failed: ${error.message}`);
  process.exitCode = 1;
});

server.listen(port, host, () => console.log(`Previewing on http://${host}:${port}/ (Ctrl+C to stop)`));
