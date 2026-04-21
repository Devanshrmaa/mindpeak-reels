/**
 * Dynamic sitemap route: /sitemap.xml
 * Lean sitemap — ~370 high-quality indexed URLs only.
 * Individual question pages, topic pages, study guides, notes, location pages,
 * and subject-city pages are excluded (noindexed or redirected).
 */

import { NextResponse } from 'next/server';
import { getKeptBlogSlugs } from '@/lib/programmaticBlogs';
import { CHAPTER_SLUGS } from '@/data/chapterData';
import { competitors } from '@/data/comparisonData';
import { examRegistry } from '@/data/examRegistry';
import { getAllExamInfoSlugs } from '@/data/examInfoData';
import { getAllDifferenceSlugs } from '@/data/differenceBetweenData';
import { getAllCounsellingSlugs } from '@/data/counsellingData';
import { getAllExamEventBlogSlugs } from '@/lib/examEventBlogs';
import { getAllAuthors } from '@/data/authorData';

const IMPORTANT_Q_SLUGS = [
  'jee-physics-important-questions',
  'jee-chemistry-important-questions',
  'jee-mathematics-important-questions',
  'neet-physics-important-questions',
  'neet-chemistry-important-questions',
  'neet-biology-important-questions',
];

const BASE = 'https://mindpeakinstitute.com';

/**
 * Deterministic lastmod based on slug hash.
 * Spreads dates over the last 14 days to avoid Google's "all same lastmod" penalty.
 * Static/high-priority pages always get TODAY.
 */
function staggeredLastmod(slug: string, today: Date): string {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = ((hash << 5) - hash + slug.charCodeAt(i)) | 0;
  }
  const daysAgo = Math.abs(hash) % 14; // 0–13 days ago
  const d = new Date(today);
  d.setDate(d.getDate() - daysAgo);
  return d.toISOString().slice(0, 10);
}

function urlEntry(path: string, priority: string, changefreq: string, lastmod: string): string {
  return `  <url>\n    <loc>${BASE}${path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}

export async function GET() {
  const now = new Date();
  const TODAY = now.toISOString().slice(0, 10);

  /* ═══ 1. Static / core commercial pages ═══ */
  const STATIC = [
    '/', '/jee-coaching', '/neet-coaching', '/courses', '/pricing', '/free-trial',
    '/study-plan', '/contact', '/blog', '/about', '/methodology', '/mentors',
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
    '/best-jee-coaching-in-india',
    '/jee-rank-predictor', '/neet-rank-predictor',
    '/jee-physics-formulas', '/jee-chemistry-formulas', '/jee-maths-formulas',
    '/neet-biology-formulas', '/neet-physics-formulas', '/neet-chemistry-formulas',
    '/jee-physics-preparation', '/jee-chemistry-preparation', '/jee-mathematics-preparation',
    '/neet-biology-preparation', '/neet-physics-preparation', '/neet-chemistry-preparation',
    '/jee-mock-test-strategy', '/neet-mock-test-strategy',
    '/course/jee-main-target-2027', '/course/neet-target-2027',
    '/course/jee-target-2026', '/course/neet-target-2026',
    '/course/subject-crash-course', '/course/1-on-1-crash-program',
    '/course/6th-foundation', '/course/7th-foundation', '/course/8th-foundation',
    '/course/9th-foundation', '/course/10th-foundation',
    '/course/bitsat-target', '/course/isi-entrance-target', '/course/olympiad-coaching',
    '/terms-and-conditions', '/refund-policy',
    // Exam landing pages from registry
    ...examRegistry.map(e => `/${e.slug}-coaching`),
  ];

  /* ═══ 2. Comparison pages ═══ */
  const comparisonPaths = competitors.map(c => `/${c.slug}`);

  /* ═══ 3. Chapter hub pages (absorb topics, notes, study guides) ═══ */
  const chapterPaths = CHAPTER_SLUGS.map(s => `/${s}`);

  /* ═══ 4. Curated blog posts (kept generators only) ═══ */
  const blogSlugs = getKeptBlogSlugs().map(s => `/${s}`);

  /* ═══ 5. Exam event blog posts (timely, auto-published) ═══ */
  const examEventBlogSlugs = getAllExamEventBlogSlugs().map(s => `/${s}`);

  /* ═══ 6. Exam info pages ═══ */
  const examInfoSlugs = getAllExamInfoSlugs().map(s => `/${s}`);

  /* ═══ 7. Difference Between pages ═══ */
  const differenceSlugs = getAllDifferenceSlugs().map(s => `/${s}`);

  /* ═══ 8. Important Questions hubs ═══ */
  const importantQSlugs = IMPORTANT_Q_SLUGS.map(s => `/${s}`);

  /* ═══ 9. Counselling & college pages ═══ */
  const counsellingSlugs = getAllCounsellingSlugs().map(s => `/${s}`);

  /* ═══ 10. Individual author/mentor pages (E-E-A-T) ═══ */
  const authorPages = getAllAuthors().map(a => `/mentors/${a.slug}`);

  /* ═══ 11. T1 city coaching pages (indexed, hand-curated) ═══ */
  const CITY_PAGES = [
    // South India — Karnataka
    '/jee-coaching-in-bangalore', '/neet-coaching-in-bangalore',
    '/jee-coaching-in-mangalore', '/neet-coaching-in-mangalore',
    // South India — Tamil Nadu
    '/jee-coaching-in-chennai', '/neet-coaching-in-chennai',
    '/jee-coaching-in-coimbatore', '/neet-coaching-in-coimbatore',
    // South India — Telangana / Andhra Pradesh
    '/jee-coaching-in-hyderabad', '/neet-coaching-in-hyderabad',
    '/jee-coaching-in-vijayawada', '/neet-coaching-in-vijayawada',
    '/jee-coaching-in-visakhapatnam', '/neet-coaching-in-visakhapatnam',
    // South India — Kerala
    '/jee-coaching-in-kochi', '/neet-coaching-in-kochi',
    // Pan-India T1 anchors
    '/jee-coaching-in-delhi', '/neet-coaching-in-delhi',
    '/jee-coaching-in-mumbai', '/neet-coaching-in-mumbai',
  ];

  /*
   * REMOVED from sitemap (noindexed or redirected):
   * - Location pages (~640 remaining) → noindexed, canonical → /best-jee-coaching-in-india
   * - Subject-city pages (~3,600) → noindexed, canonical → /best-jee-coaching-in-india
   * - Topic pages (~1,490) → 301 redirect to parent chapter
   * - Study guide pages (~1,490) → 301 redirect to parent chapter
   * - Notes pages (~149) → 301 redirect to parent chapter
   * - Individual practice questions (~4,000+) → noindexed
   * - Individual PYQ questions (~2,500+) → noindexed
   * - Individual NEET practice (~3,000+) → noindexed
   * - Individual NEET PYQ (~1,500+) → noindexed
   * - Thin blog posts (~600+) → killed generators return []
   */

  /* ═══ Build XML ═══ */
  const lines: string[] = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    `<!-- MindPeak Institute — Lean Sitemap v6 — Generated ${TODAY} -->`,
  ];

  const counts = {
    static: STATIC.length,
    comparisons: comparisonPaths.length,
    chapters: chapterPaths.length,
    blogs: blogSlugs.length,
    examEvents: examEventBlogSlugs.length,
    examInfo: examInfoSlugs.length,
    difference: differenceSlugs.length,
    importantQ: importantQSlugs.length,
    counselling: counsellingSlugs.length,
    authors: authorPages.length,
    cities: CITY_PAGES.length,
  };
  const total = Object.values(counts).reduce((a, b) => a + b, 0);

  lines.push(`<!-- Total URLs: ${total} | Static: ${counts.static} | Chapters: ${counts.chapters} | Blogs: ${counts.blogs} | ExamInfo: ${counts.examInfo} | Difference: ${counts.difference} -->`);
  lines.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');

  // Static pages → always TODAY
  for (const p of STATIC) lines.push(urlEntry(p, '0.80', 'weekly', TODAY));
  for (const p of comparisonPaths) lines.push(urlEntry(p, '0.75', 'monthly', TODAY));

  // Chapter hub pages → high priority (absorb topics + notes)
  for (const p of chapterPaths) lines.push(urlEntry(p, '0.70', 'monthly', staggeredLastmod(p, now)));

  // Blog posts (curated subset)
  for (const p of blogSlugs) lines.push(urlEntry(p, '0.60', 'weekly', staggeredLastmod(p, now)));
  for (const p of examEventBlogSlugs) lines.push(urlEntry(p, '0.80', 'daily', TODAY));

  // Reference pages
  for (const p of examInfoSlugs) lines.push(urlEntry(p, '0.75', 'weekly', staggeredLastmod(p, now)));
  for (const p of differenceSlugs) lines.push(urlEntry(p, '0.60', 'monthly', staggeredLastmod(p, now)));
  for (const p of importantQSlugs) lines.push(urlEntry(p, '0.65', 'weekly', TODAY));
  for (const p of counsellingSlugs) lines.push(urlEntry(p, '0.65', 'monthly', staggeredLastmod(p, now)));

  // Author/mentor pages — E-E-A-T trust signals
  for (const p of authorPages) lines.push(urlEntry(p, '0.70', 'monthly', staggeredLastmod(p, now)));

  // T1 city coaching pages — high commercial intent, genuinely unique content
  for (const p of CITY_PAGES) lines.push(urlEntry(p, '0.85', 'monthly', staggeredLastmod(p, now)));

  lines.push('</urlset>');

  const xml = lines.join('\n');

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
    },
  });
}
