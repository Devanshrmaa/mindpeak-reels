/**
 * Sitemap URL groups — single source of truth for every indexable URL.
 * ─────────────────────────────────────────────────────────────────────
 * /sitemap.xml is a SITEMAP INDEX (the structure large ed-tech sites use)
 * pointing at four segmented children, so GSC reports coverage per content
 * type instead of one opaque number:
 *
 *   /sitemap-core.xml      → commercial pages, cities, hubs, comparisons
 *   /sitemap-chapters.xml  → chapter hub pages
 *   /sitemap-blog.xml      → curated blog posts + exam-event posts
 *   /sitemap-exams.xml     → exam-info + difference-between reference pages
 *
 * LASTMOD POLICY (spam-update recovery critical): lastmod must be TRUTHFUL
 * or Google learns to ignore it. The previous implementation anchored the
 * stagger to `new Date()`, silently rolling every URL's lastmod forward
 * every day — a soft version of the fake-freshness signal the June 2026
 * audit purged from the legacy sitemap farm. Dates are now anchored to
 * CONTENT_ANCHOR, which only moves when we ship a real content release.
 * Only genuinely time-sensitive URLs (breaking pages, live exam-event
 * posts) carry today's date.
 *
 * Bump CONTENT_ANCHOR when a deploy meaningfully changes indexable content
 * (new pages, rewritten sections/metadata) — not for refactors.
 */

import { getKeptBlogSlugs } from '@/lib/programmaticBlogs';
import { CHAPTER_SLUGS } from '@/data/chapterData';
import { buildAllPracticeHubSlugs } from '@/data/practice';
import { buildAllPYQHubSlugs } from '@/data/pyq';
import { competitors } from '@/data/comparisonData';
import { examRegistry } from '@/data/examRegistry';
import { getAllExamInfoSlugs } from '@/data/examInfoData';
import { getAllDifferenceSlugs } from '@/data/differenceBetweenData';
import { getAllCounsellingSlugs } from '@/data/counsellingData';
import { getAllExamEventBlogSlugs } from '@/lib/examEventBlogs';
import { ONE_YEAR_TARGET, TWO_YEAR_TARGET } from '@/lib/examYears';
import { STATE_HUB_SLUGS } from '@/data/stateHubData';
import { buildAllNEETPYQHubSlugs } from '@/data/neet-pyq/hierarchy';
import { getPYQChapterEnrichment } from '@/data/neet-pyq/chapterEnrichments';

export const BASE = 'https://mindpeakinstitute.com';

/**
 * Last real content release.
 *
 * scripts/sitemap-sync.mjs bumps the DATE below automatically, but only when
 * the indexable URL *set* changes — it fingerprints `[...new Set(urls)]`, so a
 * release that rewrites existing pages without adding or removing any URL is
 * invisible to it and still needs a manual bump. Keep this comment describing
 * the policy rather than a specific release, so it cannot drift out of sync
 * with the date the way it did between 2026-08-06 and 2026-08-17.
 *
 * 2026-08-29: merged 8 duplicate chapter entries in the JEE practice banks,
 * which recovered 225 previously unreachable questions and turned 180 leaf
 * pages from soft 404s into real question pages. Same URL count, materially
 * different content — exactly the case the fingerprint cannot detect.
 */
export const CONTENT_ANCHOR = '2026-09-06';

/**
 * Deterministic, STABLE lastmod: CONTENT_ANCHOR minus a slug-hashed 0–27 day
 * offset. Spreads dates naturally but never moves until the anchor moves.
 */
export function stableLastmod(slug: string): string {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = ((hash << 5) - hash + slug.charCodeAt(i)) | 0;
  }
  const d = new Date(CONTENT_ANCHOR);
  d.setDate(d.getDate() - (Math.abs(hash) % 28));
  return d.toISOString().slice(0, 10);
}

export function urlEntry(path: string, priority: string, changefreq: string, lastmod: string): string {
  return `  <url>\n    <loc>${BASE}${path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}

/**
 * De-duplicate a path list, preserving first-seen order, optionally excluding
 * paths a higher-precedence child sitemap already emitted.
 *
 * A URL listed twice — within one child or across two — wastes crawl budget and
 * reports as a duplicate submission in GSC. Two such cases existed as of the
 * 2026-08-17 crawl audit (759 <loc> entries, 750 unique):
 * `/jee-physics-thermodynamics` sat in both getStaticPaths() (core) and
 * CHAPTER_SLUGS (chapters), and eight JEE practice hubs were emitted twice
 * because their chapters were declared twice in the practice banks.
 */
export function uniquePaths(paths: string[], exclude: Iterable<string> = []): string[] {
  const seen = new Set(exclude);
  const out: string[] = [];
  for (const p of paths) {
    if (seen.has(p)) continue;
    seen.add(p);
    out.push(p);
  }
  return out;
}

export function wrapUrlset(comment: string, entries: string[]): string {
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    `<!-- ${comment} -->`,
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries,
    '</urlset>',
  ].join('\n');
}

/* ═══ URL groups ═══ */

/** Breaking / time-sensitive pages — the only core URLs stamped with today. */
export const BREAKING_PATHS = ['/neet-ug-2026-cancelled', '/neet-cbt-2027-guide'];

export function getStaticPaths(): string[] {
  return [
    '/', '/jee-coaching', '/neet-coaching', '/courses', '/pricing', '/free-trial',
    '/study-plan', '/contact', '/blog', '/about', '/methodology', '/mentors',
    '/jee-main-coaching', '/jee-advanced-coaching', '/neet-ug-coaching',
    '/jee-dropper-coaching', '/neet-dropper-coaching', '/foundation-coaching',
    '/jee-crash-course', '/neet-crash-course',
    '/jee-physics-coaching', '/jee-chemistry-coaching', '/jee-mathematics-coaching',
    '/neet-biology-coaching', '/neet-physics-coaching', '/neet-chemistry-coaching',
    '/batch-vs-personal-coaching',
    '/one-to-one-jee-coaching', '/one-to-one-neet-coaching',
    '/jee-mentorship-by-iitians', '/neet-mentorship',
    '/jee-physics-mechanics', '/jee-physics-electrodynamics', '/jee-physics-optics',
    '/jee-physics-thermodynamics', '/jee-physics-waves',
    '/jee-chemistry-physical', '/jee-chemistry-organic', '/jee-chemistry-inorganic',
    '/jee-math-algebra', '/jee-math-calculus', '/jee-math-trigonometry', '/jee-math-geometry',
    '/jee-practice', '/jee-pyq', '/neet-practice', '/neet-pyq',
    '/kota-coaching-alternative', '/online-vs-offline-jee-coaching',
    '/best-jee-coaching-in-india',
    '/best-online-jee-neet-coaching-platforms',
    '/best-1-on-1-neet-coaching-compared',
    '/best-jee-coaching-reddit', '/best-neet-coaching-reddit',
    '/mindpeak-institute-faq', '/one-to-one-exam-mentorship',
    '/how-to-choose-a-1-on-1-mentor',
    '/online-tuition-himachal-pradesh',
    '/jee-rank-predictor', '/neet-rank-predictor',
    '/jee-physics-formulas', '/jee-chemistry-formulas', '/jee-maths-formulas',
    '/neet-biology-formulas', '/neet-physics-formulas', '/neet-chemistry-formulas',
    '/jee-physics-preparation', '/jee-chemistry-preparation', '/jee-mathematics-preparation',
    '/neet-biology-preparation', '/neet-physics-preparation', '/neet-chemistry-preparation',
    '/jee-mock-test-strategy', '/neet-mock-test-strategy',
    `/course/jee-main-target-${TWO_YEAR_TARGET}`, `/course/neet-target-${TWO_YEAR_TARGET}`,
    `/course/jee-target-${ONE_YEAR_TARGET}`, `/course/neet-target-${ONE_YEAR_TARGET}`,
    '/course/subject-crash-course', '/course/1-on-1-crash-program',
    '/course/6th-foundation', '/course/7th-foundation', '/course/8th-foundation',
    '/course/9th-foundation', '/course/10th-foundation',
    '/course/bitsat-target', '/course/isi-entrance-target', '/course/olympiad-coaching',
    // /terms-and-conditions and /refund-policy are intentionally NOT listed:
    // they serve `noindex, follow`, so listing them produced "Submitted URL
    // marked noindex" errors in GSC (found in the 2026-07-18 crawl audit).
    ...examRegistry.map((e) => `/${e.slug}-coaching`),
  ];
}

export const getComparisonPaths = (): string[] => competitors.map((c) => `/${c.slug}`);
export const getChapterPaths = (): string[] => CHAPTER_SLUGS.map((s) => `/${s}`);

/**
 * JEE practice + PYQ chapter hubs (`/jee-practice-<subject>-<chapter>`,
 * `/jee-pyq-<subject>-<chapter>`).
 *
 * These pages already existed and rendered — QuestionSlugRouter routes them to
 * <JEEPracticeChapterHub> / <JEEPYQChapterHub>, each listing every question in
 * the chapter with its worked solution — but they were advertised in NO
 * sitemap. The ~35-word leaf question pages were the only thing pointed at,
 * while the substantive aggregations sat orphaned. NEET PYQ already did this
 * correctly via getNeetPyqHubPaths(); this brings the JEE banks in line.
 *
 * Feeds /sitemap-chapters.xml. See docs/geo-llm-strategy.md §6.1.
 */
export const getQuestionHubPaths = (): string[] => [
  ...buildAllPracticeHubSlugs(),
  ...buildAllPYQHubSlugs(),
].map((s) => `/${s}`);
export const getKeptBlogPaths = (): string[] => getKeptBlogSlugs().map((s) => `/${s}`);
export const getExamEventBlogPaths = (): string[] => getAllExamEventBlogSlugs().map((s) => `/${s}`);
export const getExamInfoPaths = (): string[] => getAllExamInfoSlugs().map((s) => `/${s}`);
export const getDifferencePaths = (): string[] => getAllDifferenceSlugs().map((s) => `/${s}`);
export const getCounsellingPaths = (): string[] => getAllCounsellingSlugs().map((s) => `/${s}`);
export const getStateHubPaths = (): string[] => STATE_HUB_SLUGS.map((s) => `/${s}`);

/**
 * NEET PYQ hub tranche for the sitemap (feeds /sitemap-pyq.xml).
 *
 * These hubs are already indexable (resolveSlugMetadata gives NEET PYQ hub
 * slugs real metadata, no noindex) and render real content — verified live
 * 2026-07-18 — but were orphaned from every sitemap and internal link.
 *
 * TRANCHED promotion (penalty-recovery caution): we list the RICH aggregating
 * hubs — every unit hub (spans many chapters) and class hub (spans a year) —
 * plus only those chapter hubs that carry hand-written editorial enrichment.
 * Bare chapter hubs stay out until enriched; enriching a chapter in
 * chapterEnrichments.ts automatically promotes it here (the weekly loop's
 * standing task), so the indexed set grows only as real content is added.
 */
export function getNeetPyqHubPaths(): string[] {
  const hubs = buildAllNEETPYQHubSlugs();
  return hubs
    .filter((h) => {
      if (h.type === 'unit' || h.type === 'class') return true;
      if (h.type === 'chapter' && h.chapterSlug) {
        return !!getPYQChapterEnrichment(h.subjectSlug, h.chapterSlug);
      }
      return false;
    })
    .map((h) => `/${h.slug}`);
}

export const IMPORTANT_Q_PATHS = [
  '/jee-physics-important-questions',
  '/jee-chemistry-important-questions',
  '/jee-mathematics-important-questions',
  '/neet-physics-important-questions',
  '/neet-chemistry-important-questions',
  '/neet-biology-important-questions',
];

/** T1 city coaching pages (indexed, hand-curated, genuinely unique content). */
export const CITY_PATHS = [
  '/jee-coaching-in-bangalore', '/neet-coaching-in-bangalore',
  '/jee-coaching-in-mangalore', '/neet-coaching-in-mangalore',
  '/jee-coaching-in-chennai', '/neet-coaching-in-chennai',
  '/jee-coaching-in-coimbatore', '/neet-coaching-in-coimbatore',
  '/jee-coaching-in-hyderabad', '/neet-coaching-in-hyderabad',
  '/jee-coaching-in-vijayawada', '/neet-coaching-in-vijayawada',
  '/jee-coaching-in-visakhapatnam', '/neet-coaching-in-visakhapatnam',
  '/jee-coaching-in-kochi', '/neet-coaching-in-kochi',
  '/jee-coaching-in-delhi', '/neet-coaching-in-delhi',
  '/jee-coaching-in-mumbai', '/neet-coaching-in-mumbai',
];

export const SITEMAP_HEADERS = {
  'Content-Type': 'application/xml; charset=utf-8',
  'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
};
