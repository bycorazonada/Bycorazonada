/**
 * screenshot.mjs
 * Capture screenshots of the site using Puppeteer.
 * Saves to ./temporary_screenshots/ with auto-incremented filenames.
 *
 * Usage:
 *   node screenshot.mjs                          → http://localhost:3000, full page
 *   node screenshot.mjs http://localhost:3000     → same
 *   node screenshot.mjs http://localhost:3000 hero → screenshot-N-hero.png
 *
 * Screenshots are never overwritten (N always increments).
 */

import puppeteer from 'puppeteer';
import { mkdir, readdir } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT           = fileURLToPath(new URL('.', import.meta.url));
const SCREENSHOTS_DIR = join(ROOT, 'temporary_screenshots');

const url   = process.argv[2] ?? 'http://localhost:3000';
const label = process.argv[3] ?? '';

/** Returns the next available screenshot number (never overwrites). */
async function nextN(dir) {
  try {
    const files = await readdir(dir);
    const nums  = files
      .filter(f => f.startsWith('screenshot-') && extname(f) === '.png')
      .map(f => {
        const m = f.match(/^screenshot-(\d+)/);
        return m ? parseInt(m[1], 10) : NaN;
      })
      .filter(n => !isNaN(n));
    return nums.length ? Math.max(...nums) + 1 : 1;
  } catch {
    return 1;
  }
}

(async () => {
  // Ensure output folder exists
  await mkdir(SCREENSHOTS_DIR, { recursive: true });

  const n        = await nextN(SCREENSHOTS_DIR);
  const filename = label ? `screenshot-${n}-${label}.png` : `screenshot-${n}.png`;
  const outPath  = join(SCREENSHOTS_DIR, filename);

  console.log(`\n  Launching browser…`);
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  // Viewport — default desktop 1440px, or pass ?mobile to get 390px
  const isMobile = url.includes('mobile') || (process.argv[3] ?? '').includes('mobile');
  await page.setViewport({
    width:            isMobile ? 390 : 1440,
    height:           isMobile ? 844 : 900,
    deviceScaleFactor: 1,
    isMobile,
  });

  // Log failed requests so we can diagnose
  const failed = [];
  page.on('requestfailed', req => failed.push(req.url()));

  console.log(`  Navigating to ${url}`);
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 60_000 });

  // Disable scroll animations so images render in place
  await page.addStyleTag({ content: '*, *::before, *::after { transition: none !important; animation: none !important; }' });

  // Scroll slowly through the page to trigger every lazy-loaded image
  console.log(`  Scrolling to trigger lazy loads…`);
  const pageHeight = await page.evaluate(() => document.body.scrollHeight);
  for (let pos = 0; pos < pageHeight; pos += 400) {
    await page.evaluate(y => window.scrollTo(0, y), pos);
    await new Promise(r => setTimeout(r, 120));
  }

  // Wait for any newly kicked-off image loads to settle
  await page.waitForNetworkIdle({ idleTime: 1000, timeout: 20_000 }).catch(() => {});

  // Scroll back to top, then wait for everything to fully render
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 1500));

  if (failed.length) {
    console.log(`  ⚠  ${failed.length} request(s) failed (first 3):`);
    failed.slice(0, 3).forEach(u => console.log(`     ${u}`));
  }

  // viewport-only when label contains 'viewport'
  const fullPage = !label.includes('viewport');
  console.log(`  Capturing ${fullPage ? 'full-page' : 'viewport'} screenshot…`);
  await page.screenshot({ path: outPath, fullPage });

  await browser.close();

  console.log(`  Saved → ${outPath}\n`);
})().catch(err => {
  console.error('\n  Screenshot failed:', err.message, '\n');
  process.exit(1);
});
