/**
 * Dynamic sitemap route: /final3.xml
 * Single comprehensive sitemap — the ONLY one referenced in robots.txt.
 * Uses staggered lastmod dates (slug-hash based) instead of identical dates.
 * Designed for 50,000+ URL scale.
 */

import { NextResponse } from 'next/server';
import { buildAllPracticeSlugs } from '@/data/practice/index';
import { buildAllPYQSlugs } from '@/data/pyq/index';
import { buildAllNEETPracticeSlugs } from '@/data/neet-practice/index';
import { buildAllNEETPYQSlugs } from '@/data/neet-pyq/index';
import { allCities } from '@/data/cityData';
import { getAllSubjectCitySlugs } from '@/data/subjectCityData';
import { getAllProgrammaticBlogSlugs } from '@/lib/programmaticBlogs';
import { TOPIC_PATHS, CHAPTER_SLUGS } from '@/data/chapterData';
import { competitors } from '@/data/comparisonData';
import { getAllStudyGuideSlugs } from '@/lib/topicStudyGuides';
import { examRegistry } from '@/data/examRegistry';
import { getAllExamInfoSlugs } from '@/data/examInfoData';
import { getAllDifferenceSlugs } from '@/data/differenceBetweenData';
import { getAllCounsellingSlugs } from '@/data/counsellingData';

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

  /* ═══ 1. Static pages (always get TODAY lastmod) ═══ */
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

  /* ═══ 3. Location pages ═══ */
  const locationPaths: string[] = [];
  for (const city of allCities) {
    for (const exam of city.exams) {
      locationPaths.push(`/${exam}-coaching-in-${city.slug}`);
    }
  }

  /* ═══ 4. Subject-city pages ═══ */
  const subjectCitySlugs = getAllSubjectCitySlugs().map(s => `/${s}`);

  /* ═══ 5. Blog posts ═══ */
  const blogSlugs = getAllProgrammaticBlogSlugs().map(s => `/${s}`);

  /* ═══ 6. Topic pages ═══ */
  const topicPaths = TOPIC_PATHS.map(p => `/${p}`);

  /* ═══ 7. Chapter pages ═══ */
  const chapterPaths = CHAPTER_SLUGS.map(s => `/${s}`);

  /* ═══ 8. Study guide pages ═══ */
  const studyGuideSlugs = getAllStudyGuideSlugs().map(s => `/${s}`);

  /* ═══ 9. Question pages ═══ */
  const practiceSlugs = buildAllPracticeSlugs().map(s => `/${s.slug}`);
  const pyqSlugs = buildAllPYQSlugs().map(s => `/${s.slug}`);
  const neetPracticeSlugs = buildAllNEETPracticeSlugs().map(s => `/${s.slug}`);
  const neetPyqSlugs = buildAllNEETPYQSlugs().map(s => `/${s.slug}`);

  /* ═══ 10. Exam info hub pages ═══ */
  const examInfoSlugs = getAllExamInfoSlugs().map(s => `/${s}`);

  /* ═══ 11. Difference Between pages ═══ */
  const differenceSlugs = getAllDifferenceSlugs().map(s => `/${s}`);

  /* ═══ 12. Important Questions hubs ═══ */
  const importantQSlugs = IMPORTANT_Q_SLUGS.map(s => `/${s}`);

  /* ═══ 13. Counselling & college pages ═══ */
  const counsellingSlugs = getAllCounsellingSlugs().map(s => `/${s}`);

  /* ═══ 14. Revision notes pages ═══ */
  const notesSlugs = CHAPTER_SLUGS.map(s => `/${s}/notes`);

  /* ═══ Build XML ═══ */
  const lines: string[] = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    `<!-- MindPeak Institute — Comprehensive Sitemap v4 — Generated ${TODAY} -->`,
  ];

  const counts = {
    static: STATIC.length,
    comparisons: comparisonPaths.length,
    locations: locationPaths.length,
    subjectCity: subjectCitySlugs.length,
    blogs: blogSlugs.length,
    topics: topicPaths.length,
    chapters: chapterPaths.length,
    studyGuides: studyGuideSlugs.length,
    jeePractice: practiceSlugs.length,
    jeePyq: pyqSlugs.length,
    neetPractice: neetPracticeSlugs.length,
    neetPyq: neetPyqSlugs.length,
    examInfo: examInfoSlugs.length,
    difference: differenceSlugs.length,
    importantQ: importantQSlugs.length,
    counselling: counsellingSlugs.length,
    notes: notesSlugs.length,
  };
  const total = Object.values(counts).reduce((a, b) => a + b, 0);

  lines.push(`<!-- Total URLs: ${total} | Static: ${counts.static} | Locations: ${counts.locations} | Subject-City: ${counts.subjectCity} | Blogs: ${counts.blogs} | Topics: ${counts.topics} | Chapters: ${counts.chapters} | JEE Practice: ${counts.jeePractice} | JEE PYQ: ${counts.jeePyq} | NEET Practice: ${counts.neetPractice} | NEET PYQ: ${counts.neetPyq} -->`);
  lines.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');

  // Static pages → always TODAY (high-priority, frequently updated)
  for (const p of STATIC) lines.push(urlEntry(p, '0.80', 'weekly', TODAY));
  for (const p of comparisonPaths) lines.push(urlEntry(p, '0.75', 'monthly', TODAY));

  // Location, blog, chapter pages → staggered lastmod
  for (const p of locationPaths) lines.push(urlEntry(p, '0.65', 'monthly', staggeredLastmod(p, now)));
  for (const p of subjectCitySlugs) lines.push(urlEntry(p, '0.60', 'monthly', staggeredLastmod(p, now)));
  for (const p of blogSlugs) lines.push(urlEntry(p, '0.60', 'weekly', staggeredLastmod(p, now)));
  for (const p of chapterPaths) lines.push(urlEntry(p, '0.60', 'monthly', staggeredLastmod(p, now)));
  for (const p of topicPaths) lines.push(urlEntry(p, '0.55', 'monthly', staggeredLastmod(p, now)));
  for (const p of studyGuideSlugs) lines.push(urlEntry(p, '0.55', 'monthly', staggeredLastmod(p, now)));
  for (const p of practiceSlugs) lines.push(urlEntry(p, '0.50', 'monthly', staggeredLastmod(p, now)));
  for (const p of pyqSlugs) lines.push(urlEntry(p, '0.50', 'monthly', staggeredLastmod(p, now)));
  for (const p of neetPracticeSlugs) lines.push(urlEntry(p, '0.50', 'monthly', staggeredLastmod(p, now)));
  for (const p of neetPyqSlugs) lines.push(urlEntry(p, '0.50', 'monthly', staggeredLastmod(p, now)));
  for (const p of examInfoSlugs) lines.push(urlEntry(p, '0.75', 'weekly', staggeredLastmod(p, now)));
  for (const p of differenceSlugs) lines.push(urlEntry(p, '0.60', 'monthly', staggeredLastmod(p, now)));
  for (const p of importantQSlugs) lines.push(urlEntry(p, '0.65', 'weekly', TODAY));
  for (const p of counsellingSlugs) lines.push(urlEntry(p, '0.65', 'monthly', staggeredLastmod(p, now)));
  for (const p of notesSlugs) lines.push(urlEntry(p, '0.55', 'monthly', staggeredLastmod(p, now)));

  lines.push('</urlset>');

  const xml = lines.join('\n');

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
    },
  });
}
