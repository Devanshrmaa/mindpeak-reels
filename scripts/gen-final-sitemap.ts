/**
 * Generate final.xml — comprehensive sitemap with ALL URLs
 * Run: npx tsx scripts/gen-final-sitemap.ts
 */

import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/* ─── Import all slug builders ─── */
import { buildAllPracticeSlugs } from '../src/data/practice/index';
import { TOPIC_PATHS } from '../src/data/chapterData';
import { buildAllPYQSlugs } from '../src/data/pyq/index';
import { buildAllNEETPracticeSlugs } from '../src/data/neet-practice/index';
import { buildAllNEETPYQSlugs } from '../src/data/neet-pyq/index';
import { ONE_YEAR_TARGET, TWO_YEAR_TARGET } from '../src/lib/examYears';

/* ─── Config ─── */
const BASE = 'https://mindpeakinstitute.com';
const TODAY = new Date().toISOString().slice(0, 10);

/* ═══════════════════════════════════════════════════
   1. Static / core pages
   ═══════════════════════════════════════════════════ */
const STATIC_PAGES: { path: string; priority: string; changefreq: string }[] = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/jee-coaching', priority: '0.95', changefreq: 'weekly' },
  { path: '/neet-coaching', priority: '0.95', changefreq: 'weekly' },
  { path: '/courses', priority: '0.90', changefreq: 'weekly' },
  { path: '/pricing', priority: '0.90', changefreq: 'weekly' },
  { path: '/free-trial', priority: '0.90', changefreq: 'weekly' },
  { path: '/study-plan', priority: '0.85', changefreq: 'monthly' },
  { path: '/contact', priority: '0.80', changefreq: 'monthly' },
  { path: '/blog', priority: '0.80', changefreq: 'daily' },

  /* SEO Landing Pages */
  { path: '/about', priority: '0.70', changefreq: 'monthly' },
  { path: '/success-stories', priority: '0.70', changefreq: 'monthly' },
  { path: '/methodology', priority: '0.70', changefreq: 'monthly' },
  { path: '/mentors', priority: '0.70', changefreq: 'monthly' },
  { path: '/jee-main-coaching', priority: '0.80', changefreq: 'monthly' },
  { path: '/jee-advanced-coaching', priority: '0.80', changefreq: 'monthly' },
  { path: '/neet-ug-coaching', priority: '0.80', changefreq: 'monthly' },
  { path: '/jee-dropper-coaching', priority: '0.75', changefreq: 'monthly' },
  { path: '/neet-dropper-coaching', priority: '0.75', changefreq: 'monthly' },
  { path: '/foundation-coaching', priority: '0.75', changefreq: 'monthly' },
  { path: '/jee-crash-course', priority: '0.75', changefreq: 'monthly' },
  { path: '/neet-crash-course', priority: '0.75', changefreq: 'monthly' },
  { path: '/jee-physics-coaching', priority: '0.70', changefreq: 'monthly' },
  { path: '/jee-chemistry-coaching', priority: '0.70', changefreq: 'monthly' },
  { path: '/jee-mathematics-coaching', priority: '0.70', changefreq: 'monthly' },
  { path: '/neet-biology-coaching', priority: '0.70', changefreq: 'monthly' },
  { path: '/neet-physics-coaching', priority: '0.70', changefreq: 'monthly' },
  { path: '/neet-chemistry-coaching', priority: '0.70', changefreq: 'monthly' },
  { path: '/batch-vs-personal-coaching', priority: '0.65', changefreq: 'monthly' },

  /* JEE Chapter Category Pages */
  { path: '/jee-physics-mechanics', priority: '0.65', changefreq: 'monthly' },
  { path: '/jee-physics-electrodynamics', priority: '0.65', changefreq: 'monthly' },
  { path: '/jee-physics-optics', priority: '0.65', changefreq: 'monthly' },
  { path: '/jee-physics-thermodynamics', priority: '0.65', changefreq: 'monthly' },
  { path: '/jee-physics-waves', priority: '0.65', changefreq: 'monthly' },
  { path: '/jee-chemistry-physical', priority: '0.65', changefreq: 'monthly' },
  { path: '/jee-chemistry-organic', priority: '0.65', changefreq: 'monthly' },
  { path: '/jee-chemistry-inorganic', priority: '0.65', changefreq: 'monthly' },
  { path: '/jee-math-algebra', priority: '0.65', changefreq: 'monthly' },
  { path: '/jee-math-calculus', priority: '0.65', changefreq: 'monthly' },
  { path: '/jee-math-trigonometry', priority: '0.65', changefreq: 'monthly' },
  { path: '/jee-math-geometry', priority: '0.65', changefreq: 'monthly' },

  /* Hubs */
  { path: '/jee-practice', priority: '0.80', changefreq: 'weekly' },
  { path: '/jee-pyq', priority: '0.80', changefreq: 'weekly' },
  { path: '/neet-practice', priority: '0.80', changefreq: 'weekly' },
  { path: '/neet-pyq', priority: '0.80', changefreq: 'weekly' },

  /* Comparisons */
  { path: '/kota-coaching-alternative', priority: '0.70', changefreq: 'monthly' },
  { path: '/online-vs-offline-jee-coaching', priority: '0.70', changefreq: 'monthly' },
  { path: '/mindpeak-vs-allen', priority: '0.70', changefreq: 'monthly' },
  { path: '/mindpeak-vs-resonance', priority: '0.70', changefreq: 'monthly' },
  { path: '/mindpeak-vs-fiitjee', priority: '0.70', changefreq: 'monthly' },
  { path: '/mindpeak-vs-byjus', priority: '0.70', changefreq: 'monthly' },

  /* Tools */
  { path: '/jee-rank-predictor', priority: '0.75', changefreq: 'monthly' },
  { path: '/neet-rank-predictor', priority: '0.75', changefreq: 'monthly' },

  /* Formula Sheets */
  { path: '/jee-physics-formulas', priority: '0.65', changefreq: 'monthly' },
  { path: '/jee-chemistry-formulas', priority: '0.65', changefreq: 'monthly' },
  { path: '/jee-maths-formulas', priority: '0.65', changefreq: 'monthly' },
  { path: '/neet-biology-formulas', priority: '0.65', changefreq: 'monthly' },
  { path: '/neet-physics-formulas', priority: '0.65', changefreq: 'monthly' },

  /* Subject Preparation */
  { path: '/jee-physics-preparation', priority: '0.70', changefreq: 'monthly' },
  { path: '/jee-chemistry-preparation', priority: '0.70', changefreq: 'monthly' },
  { path: '/jee-mathematics-preparation', priority: '0.70', changefreq: 'monthly' },
  { path: '/neet-biology-preparation', priority: '0.70', changefreq: 'monthly' },
  { path: '/neet-physics-preparation', priority: '0.70', changefreq: 'monthly' },
  { path: '/neet-chemistry-preparation', priority: '0.70', changefreq: 'monthly' },
  { path: '/jee-mock-test-strategy', priority: '0.65', changefreq: 'monthly' },
  { path: '/neet-mock-test-strategy', priority: '0.65', changefreq: 'monthly' },

  /* Course slugs (auto-derived from examYears.ts) */
  { path: `/course/jee-main-target-${TWO_YEAR_TARGET}`, priority: '0.80', changefreq: 'monthly' },
  { path: `/course/neet-target-${TWO_YEAR_TARGET}`, priority: '0.80', changefreq: 'monthly' },
  { path: `/course/jee-target-${ONE_YEAR_TARGET}`, priority: '0.80', changefreq: 'monthly' },
  { path: `/course/neet-target-${ONE_YEAR_TARGET}`, priority: '0.80', changefreq: 'monthly' },
  { path: '/course/subject-crash-course', priority: '0.75', changefreq: 'monthly' },
  { path: '/course/1-on-1-crash-program', priority: '0.75', changefreq: 'monthly' },
  { path: '/course/6th-foundation', priority: '0.65', changefreq: 'monthly' },
  { path: '/course/7th-foundation', priority: '0.65', changefreq: 'monthly' },
  { path: '/course/8th-foundation', priority: '0.65', changefreq: 'monthly' },
  { path: '/course/9th-foundation', priority: '0.65', changefreq: 'monthly' },
  { path: '/course/10th-foundation', priority: '0.65', changefreq: 'monthly' },

  /* Blog Posts */
  { path: '/blog/top-10-jee-preparation-tips-2026', priority: '0.60', changefreq: 'monthly' },
  { path: '/blog/neet-biology-preparation-guide', priority: '0.60', changefreq: 'monthly' },
  { path: '/blog/time-management-for-competitive-exams', priority: '0.60', changefreq: 'monthly' },
  { path: '/blog/chemistry-organic-reaction-mechanisms', priority: '0.60', changefreq: 'monthly' },
  { path: '/blog/neet-physics-numerical-shortcuts', priority: '0.60', changefreq: 'monthly' },
  { path: '/blog/effective-revision-strategies-for-exam', priority: '0.60', changefreq: 'monthly' },
  { path: '/blog/choosing-between-jee-and-neet', priority: '0.60', changefreq: 'monthly' },

  /* Legal */
  { path: '/terms-and-conditions', priority: '0.30', changefreq: 'yearly' },
  { path: '/refund-policy', priority: '0.30', changefreq: 'yearly' },
];

/* ═══════════════════════════════════════════════════
   2. Location Pages
   ═══════════════════════════════════════════════════ */
const CITY_SLUGS = [
  'delhi', 'mumbai', 'bangalore', 'hyderabad', 'chennai', 'kolkata',
  'pune', 'ahmedabad', 'jaipur', 'kochi', 'indore', 'chandigarh',
  'nagpur', 'coimbatore', 'surat', 'vadodara', 'dehradun', 'mysore',
  'rajkot', 'udaipur',
];
const EXAMS = ['jee', 'neet'];
const locationPaths = CITY_SLUGS.flatMap(city =>
  EXAMS.map(exam => `/${exam}-coaching-in-${city}`)
);

/* ═══════════════════════════════════════════════════
   3. Dynamic question pages (SEO-friendly slugs)
   ═══════════════════════════════════════════════════ */
const practiceSlugs = buildAllPracticeSlugs().map(s => `/${s.slug}`);
const pyqSlugs = buildAllPYQSlugs().map(s => `/${s.slug}`);
const neetPracticeSlugs = buildAllNEETPracticeSlugs().map(s => `/${s.slug}`);
const neetPyqSlugs = buildAllNEETPYQSlugs().map(s => `/${s.slug}`);

// Topic SEO URLs
const topicPaths = TOPIC_PATHS.map(path => `/${path}`);

/* ═══════════════════════════════════════════════════
   Build XML
   ═══════════════════════════════════════════════════ */
function urlEntry(path: string, priority: string, changefreq: string, lastmod: string): string {
  return `  <url>
    <loc>${BASE}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const lines: string[] = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  `<!-- MindPeak Institute — Final Comprehensive Sitemap — Generated ${TODAY} -->`,
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  '',
  '  <!-- ═══ Core & Static Pages ═══ -->',
];

for (const p of STATIC_PAGES) {
  lines.push(urlEntry(p.path, p.priority, p.changefreq, TODAY));
}

lines.push('', '  <!-- ═══ Location Pages ═══ -->');
for (const lp of locationPaths) {
  lines.push(urlEntry(lp, '0.65', 'monthly', TODAY));
}

lines.push('', '  <!-- ═══ Topic SEO Pages ═══ -->');
for (const tp of topicPaths) {
  lines.push(urlEntry(tp, '0.55', 'monthly', TODAY));
}

lines.push('', '  <!-- ═══ JEE Practice Questions ═══ -->');
for (const s of practiceSlugs) {
  lines.push(urlEntry(s, '0.50', 'monthly', TODAY));
}

lines.push('', '  <!-- ═══ JEE Previous Year Questions ═══ -->');
for (const s of pyqSlugs) {
  lines.push(urlEntry(s, '0.50', 'monthly', TODAY));
}

lines.push('', '  <!-- ═══ NEET Practice Questions ═══ -->');
for (const s of neetPracticeSlugs) {
  lines.push(urlEntry(s, '0.50', 'monthly', TODAY));
}

lines.push('', '  <!-- ═══ NEET Previous Year Questions ═══ -->');
for (const s of neetPyqSlugs) {
  lines.push(urlEntry(s, '0.50', 'monthly', TODAY));
}

lines.push('', '</urlset>');

/* ─── Write to public/final.xml ─── */
const outPath = resolve(__dirname, '..', 'public', 'final.xml');
writeFileSync(outPath, lines.join('\n'), 'utf-8');

const totalUrls =
  STATIC_PAGES.length +
  locationPaths.length +
  practiceSlugs.length +
  pyqSlugs.length +
  neetPracticeSlugs.length +
  neetPyqSlugs.length;

console.log(`✅ final.xml generated at: ${outPath}`);
console.log(`   Static pages:         ${STATIC_PAGES.length}`);
console.log(`   Location pages:       ${locationPaths.length}`);
console.log(`   JEE Practice:         ${practiceSlugs.length}`);
console.log(`   JEE PYQ:              ${pyqSlugs.length}`);
console.log(`   NEET Practice:        ${neetPracticeSlugs.length}`);
console.log(`   NEET PYQ:             ${neetPyqSlugs.length}`);
console.log(`   ────────────────────────────────`);
console.log(`   TOTAL URLs:           ${totalUrls}`);
