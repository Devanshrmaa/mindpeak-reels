/**
 * Generate final2.xml — comprehensive sitemap with ALL URLs (20,000+)
 * Run: npx tsx scripts/gen-final2-sitemap.ts
 */

import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

import { buildAllPracticeSlugs } from '../src/data/practice/index';
import { TOPIC_PATHS } from '../src/data/chapterData';
import { buildAllPYQSlugs } from '../src/data/pyq/index';
import { buildAllNEETPracticeSlugs } from '../src/data/neet-practice/index';
import { buildAllNEETPYQSlugs } from '../src/data/neet-pyq/index';
import { allCities } from '../src/data/cityData';
import { getAllSubjectCitySlugs } from '../src/data/subjectCityData';
import { getAllProgrammaticBlogSlugs } from '../src/lib/programmaticBlogs';

const BASE = 'https://mindpeakinstitute.com';
const TODAY = new Date().toISOString().slice(0, 10);

function urlEntry(path: string, priority: string, changefreq: string): string {
  return `  <url>\n    <loc>${BASE}${path}</loc>\n    <lastmod>${TODAY}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}

/* ═══ 1. Static pages ═══ */
const STATIC: string[] = [
  '/', '/jee-coaching', '/neet-coaching', '/courses', '/pricing', '/free-trial',
  '/study-plan', '/contact', '/blog', '/about', '/success-stories', '/methodology', '/mentors',
  '/jee-main-coaching', '/jee-advanced-coaching', '/neet-ug-coaching',
  '/jee-dropper-coaching', '/neet-dropper-coaching', '/foundation-coaching',
  '/jee-crash-course', '/neet-crash-course',
  '/jee-physics-coaching', '/jee-chemistry-coaching', '/jee-mathematics-coaching',
  '/neet-biology-coaching', '/neet-physics-coaching', '/neet-chemistry-coaching',
  '/batch-vs-personal-coaching',
  '/jee-physics-mechanics', '/jee-physics-electrodynamics', '/jee-physics-optics',
  '/jee-physics-thermodynamics', '/jee-physics-waves',
  '/jee-chemistry-physical', '/jee-chemistry-organic', '/jee-chemistry-inorganic',
  '/jee-math-algebra', '/jee-math-calculus', '/jee-math-trigonometry', '/jee-math-geometry',
  '/jee-practice', '/jee-pyq', '/neet-practice', '/neet-pyq',
  '/kota-coaching-alternative', '/online-vs-offline-jee-coaching',
  '/mindpeak-vs-allen', '/mindpeak-vs-resonance', '/mindpeak-vs-fiitjee', '/mindpeak-vs-byjus',
  '/jee-rank-predictor', '/neet-rank-predictor',
  '/jee-physics-formulas', '/jee-chemistry-formulas', '/jee-maths-formulas',
  '/neet-biology-formulas', '/neet-physics-formulas',
  '/jee-physics-preparation', '/jee-chemistry-preparation', '/jee-mathematics-preparation',
  '/neet-biology-preparation', '/neet-physics-preparation', '/neet-chemistry-preparation',
  '/jee-mock-test-strategy', '/neet-mock-test-strategy',
  '/course/jee-main-target-2027', '/course/neet-target-2027',
  '/course/jee-target-2026', '/course/neet-target-2026',
  '/course/subject-crash-course', '/course/1-on-1-crash-program',
  '/course/6th-foundation', '/course/7th-foundation', '/course/8th-foundation',
  '/course/9th-foundation', '/course/10th-foundation',
  '/terms-and-conditions', '/refund-policy',
];

/* ═══ 2. Location pages (ALL cities) ═══ */
const locationPaths: string[] = [];
for (const city of allCities) {
  for (const exam of city.exams) {
    locationPaths.push(`/${exam}-coaching-in-${city.slug}`);
  }
}

/* ═══ 3. Subject-city pages ═══ */
const subjectCitySlugs = getAllSubjectCitySlugs().map(s => `/${s}`);

/* ═══ 4. Blog posts (programmatic + static) ═══ */
const blogSlugs = getAllProgrammaticBlogSlugs().map(s => `/${s}`);

/* ═══ 5. Question pages ═══ */
const practiceSlugs = buildAllPracticeSlugs().map(s => `/${s.slug}`);
const pyqSlugs = buildAllPYQSlugs().map(s => `/${s.slug}`);
const neetPracticeSlugs = buildAllNEETPracticeSlugs().map(s => `/${s.slug}`);
const neetPyqSlugs = buildAllNEETPYQSlugs().map(s => `/${s.slug}`);

/* ═══ 6. Topic pages ═══ */
const topicPaths = TOPIC_PATHS.map(p => `/${p}`);

/* ═══ Build XML ═══ */
const lines: string[] = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  `<!-- MindPeak Institute — Comprehensive Sitemap — Generated ${TODAY} -->`,
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
];

for (const p of STATIC) lines.push(urlEntry(p, '0.80', 'weekly'));
for (const p of locationPaths) lines.push(urlEntry(p, '0.65', 'monthly'));
for (const p of subjectCitySlugs) lines.push(urlEntry(p, '0.60', 'monthly'));
for (const p of blogSlugs) lines.push(urlEntry(p, '0.60', 'weekly'));
for (const p of topicPaths) lines.push(urlEntry(p, '0.55', 'monthly'));
for (const p of practiceSlugs) lines.push(urlEntry(p, '0.50', 'monthly'));
for (const p of pyqSlugs) lines.push(urlEntry(p, '0.50', 'monthly'));
for (const p of neetPracticeSlugs) lines.push(urlEntry(p, '0.50', 'monthly'));
for (const p of neetPyqSlugs) lines.push(urlEntry(p, '0.50', 'monthly'));

lines.push('</urlset>');

const outPath = resolve(__dirname, '..', 'public', 'final2.xml');
writeFileSync(outPath, lines.join('\n'), 'utf-8');

const total = STATIC.length + locationPaths.length + subjectCitySlugs.length + blogSlugs.length + topicPaths.length + practiceSlugs.length + pyqSlugs.length + neetPracticeSlugs.length + neetPyqSlugs.length;

console.log(`✅ final2.xml generated at: ${outPath}`);
console.log(`   Static:              ${STATIC.length}`);
console.log(`   Location pages:      ${locationPaths.length}`);
console.log(`   Subject-city pages:  ${subjectCitySlugs.length}`);
console.log(`   Blog posts:          ${blogSlugs.length}`);
console.log(`   Topic pages:         ${topicPaths.length}`);
console.log(`   JEE Practice:        ${practiceSlugs.length}`);
console.log(`   JEE PYQ:             ${pyqSlugs.length}`);
console.log(`   NEET Practice:       ${neetPracticeSlugs.length}`);
console.log(`   NEET PYQ:            ${neetPyqSlugs.length}`);
console.log(`   ────────────────────────────────`);
console.log(`   TOTAL URLs:          ${total}`);
