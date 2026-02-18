/**
 * update-sitemap.mjs
 * Run: node scripts/update-sitemap.mjs
 *
 * Auto-updates lastmod dates in sitting public/sitemap.xml and
 * public/sitemap-topics.xml to the current date.
 *
 * This keeps the sitemap fresh for Google without regenerating
 * the full structure. Run monthly (or add to CI/CD / Vercel build).
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const today = new Date().toISOString().split('T')[0];

/**
 * Replace all <lastmod>YYYY-MM-DD</lastmod> entries with today's date.
 */
function updateSitemapDates(filePath) {
  try {
    let content = readFileSync(filePath, 'utf-8');
    const original = content;

    // Replace all lastmod dates
    content = content.replace(
      /<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g,
      `<lastmod>${today}</lastmod>`,
    );

    if (content !== original) {
      writeFileSync(filePath, content);
      const count = (content.match(/<lastmod>/g) || []).length;
      console.log(`✅ Updated ${count} <lastmod> entries in ${filePath}`);
    } else {
      console.log(`ℹ️  No changes needed for ${filePath}`);
    }
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log(`⚠️  File not found: ${filePath} — skipping`);
    } else {
      throw err;
    }
  }
}

// Update both sitemaps
updateSitemapDates(join(ROOT, 'public/sitemap.xml'));
updateSitemapDates(join(ROOT, 'public/sitemap-topics.xml'));

// Ping Google Search Console (optional, non-blocking)
const sitemapUrl = 'https://mindpeakinstitute.com/sitemap.xml';
const pingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;

try {
  const res = await fetch(pingUrl);
  if (res.ok) {
    console.log(`✅ Pinged Google: ${pingUrl}`);
  } else {
    console.log(`⚠️  Google ping returned ${res.status}`);
  }
} catch {
  console.log(`⚠️  Could not ping Google (network error) — sitemap still updated locally`);
}

console.log(`\n📅 Sitemaps updated to ${today}`);
