/**
 * serve.mjs
 * Static file server — serves project root at http://localhost:3000
 * Usage: node serve.mjs
 */

import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('.', import.meta.url));
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

const MIME = {
  '.html' : 'text/html; charset=utf-8',
  '.css'  : 'text/css; charset=utf-8',
  '.js'   : 'text/javascript; charset=utf-8',
  '.mjs'  : 'text/javascript; charset=utf-8',
  '.json' : 'application/json; charset=utf-8',
  '.png'  : 'image/png',
  '.jpg'  : 'image/jpeg',
  '.jpeg' : 'image/jpeg',
  '.gif'  : 'image/gif',
  '.webp' : 'image/webp',
  '.svg'  : 'image/svg+xml',
  '.ico'  : 'image/x-icon',
  '.woff' : 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf'  : 'font/ttf',
  '.otf'  : 'font/otf',
  '.mp4'  : 'video/mp4',
  '.webm' : 'video/webm',
};

const server = createServer(async (req, res) => {
  // Strip query string, decode URI
  let pathname = decodeURIComponent(req.url.split('?')[0]);

  // Default to index.html
  if (pathname === '/') pathname = '/index.html';

  // Prevent directory traversal
  const safePath = normalize(join(ROOT, pathname));
  if (!safePath.startsWith(ROOT)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }

  try {
    // If directory requested, serve index.html inside it
    const info = await stat(safePath);
    const filePath = info.isDirectory()
      ? join(safePath, 'index.html')
      : safePath;

    const data = await readFile(filePath);
    const ext  = extname(filePath).toLowerCase();
    const type = MIME[ext] ?? 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type'  : type,
      'Cache-Control' : 'no-cache',
    });
    res.end(data);

  } catch (err) {
    if (err.code === 'ENOENT') {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end(`404 — Not found: ${pathname}`);
    } else {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(`500 — Server error: ${err.message}`);
    }
  }
});

server.listen(PORT, () => {
  console.log(`\n  ByCorazonada dev server`);
  console.log(`  http://localhost:${PORT}\n`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\n  Port ${PORT} is already in use.`);
    console.error(`  Kill the existing process or change PORT.\n`);
  } else {
    console.error(err);
  }
  process.exit(1);
});
