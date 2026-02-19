/**
 * update-sitemap.mjs
 * Run: node scripts/update-sitemap.mjs
 *
 * Auto-updates lastmod dates across all sitemaps in the enterprise
 * sitemap index architecture (public/sitemap.xml + public/sitemaps/**).
 *
 * Run monthly (or add to CI/CD / Vercel build).
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
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

/**
 * Recursively find all sitemap.xml files under a directory.
 */
function findSitemaps(dir) {
  const results = [];
  try {
    for (const entry of readdirSync(dir)) {
      const full = join(dir, entry);
      const stat = statSync(full);
      if (stat.isDirectory()) {
        results.push(...findSitemaps(full));
      } else if (entry === 'sitemap.xml' || entry.endsWith('-sitemap.xml') || entry.startsWith('sitemap')) {
        results.push(full);
      }
    }
  } catch { /* ignore */ }
  return results;
}

// Update master sitemap index
updateSitemapDates(join(ROOT, 'public/sitemap.xml'));

// Update all sub-sitemaps
const subSitemaps = findSitemaps(join(ROOT, 'public/sitemaps'));
for (const file of subSitemaps) {
  updateSitemapDates(file);
}

// Update legacy topic sitemap if it exists
updateSitemapDates(join(ROOT, 'public/sitemap-topics.xml'));

// Ping Google Search Console
const sitemapUrl = 'https://mindpeakinstitute.com/sitemap.xml';
const pingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;

try {
  const res = await fetch(pingUrl);
  if (res.ok) {
    console.log(`\n✅ Pinged Google: ${pingUrl}`);
  } else {
    console.log(`\n⚠️  Google ping returned ${res.status}`);
  }
} catch {
  console.log(`\n⚠️  Could not ping Google (network error) — sitemaps still updated locally`);
}

console.log(`\n📅 All sitemaps updated to ${today}`);
console.log(`📊 Updated ${subSitemaps.length + 1} sitemap files total`);
