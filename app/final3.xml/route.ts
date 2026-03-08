/**
 * Dynamic sitemap route: /final3.xml
 * Comprehensive sitemap covering ALL pages including new blog categories,
 * new competitor comparisons, expanded city pages, and topic study guides.
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

const BASE = 'https://mindpeakinstitute.com';

function urlEntry(path: string, priority: string, changefreq: string, today: string): string {
  return `  <url>\n    <loc>${BASE}${path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}

export async function GET() {
  const TODAY = new Date().toISOString().slice(0, 10);

  /* ═══ 1. Static pages ═══ */
  const STATIC = [
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
    // Exam landing pages
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

  /* ═══ 5. Blog posts (expanded: 900+ posts) ═══ */
  const blogSlugs = getAllProgrammaticBlogSlugs().map(s => `/${s}`);

  /* ═══ 6. Topic pages ═══ */
  const topicPaths = TOPIC_PATHS.map(p => `/${p}`);

  /* ═══ 7. Chapter pages ═══ */
  const chapterPaths = CHAPTER_SLUGS.map(s => `/${s}`);

  /* ═══ 8. Study guide pages (~800) ═══ */
  const studyGuideSlugs = getAllStudyGuideSlugs().map(s => `/${s}`);

  /* ═══ 9. Question pages ═══ */
  const practiceSlugs = buildAllPracticeSlugs().map(s => `/${s.slug}`);
  const pyqSlugs = buildAllPYQSlugs().map(s => `/${s.slug}`);
  const neetPracticeSlugs = buildAllNEETPracticeSlugs().map(s => `/${s.slug}`);
  const neetPyqSlugs = buildAllNEETPYQSlugs().map(s => `/${s.slug}`);

  /* ═══ Build XML ═══ */
  const lines: string[] = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    `<!-- MindPeak Institute — Comprehensive Sitemap v3 — Generated ${TODAY} -->`,
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
  };
  const total = Object.values(counts).reduce((a, b) => a + b, 0);

  lines.push(`<!-- Static: ${counts.static} | Comparisons: ${counts.comparisons} | Locations: ${counts.locations} | Subject-City: ${counts.subjectCity} | Blogs: ${counts.blogs} | Topics: ${counts.topics} | Chapters: ${counts.chapters} | Study Guides: ${counts.studyGuides} | JEE Practice: ${counts.jeePractice} | JEE PYQ: ${counts.jeePyq} | NEET Practice: ${counts.neetPractice} | NEET PYQ: ${counts.neetPyq} | TOTAL: ${total} -->`);
  lines.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');

  for (const p of STATIC) lines.push(urlEntry(p, '0.80', 'weekly', TODAY));
  for (const p of comparisonPaths) lines.push(urlEntry(p, '0.75', 'monthly', TODAY));
  for (const p of locationPaths) lines.push(urlEntry(p, '0.65', 'monthly', TODAY));
  for (const p of subjectCitySlugs) lines.push(urlEntry(p, '0.60', 'monthly', TODAY));
  for (const p of blogSlugs) lines.push(urlEntry(p, '0.60', 'weekly', TODAY));
  for (const p of chapterPaths) lines.push(urlEntry(p, '0.60', 'monthly', TODAY));
  for (const p of topicPaths) lines.push(urlEntry(p, '0.55', 'monthly', TODAY));
  for (const p of studyGuideSlugs) lines.push(urlEntry(p, '0.55', 'monthly', TODAY));
  for (const p of practiceSlugs) lines.push(urlEntry(p, '0.50', 'monthly', TODAY));
  for (const p of pyqSlugs) lines.push(urlEntry(p, '0.50', 'monthly', TODAY));
  for (const p of neetPracticeSlugs) lines.push(urlEntry(p, '0.50', 'monthly', TODAY));
  for (const p of neetPyqSlugs) lines.push(urlEntry(p, '0.50', 'monthly', TODAY));

  lines.push('</urlset>');

  const xml = lines.join('\n');

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
    },
  });
}
