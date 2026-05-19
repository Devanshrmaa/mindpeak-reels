/**
 * Keyword-frequency targets per SEO landing page.
 *
 * Targets are expressed as a *density window* (occurrences per 1,000 words of
 * visible body text). The audit script reads the page's actual body word count
 * from `seoPageData.ts` and computes the effective `min`/`max` count for that
 * specific page. This means a single target set works for both our 300-word
 * sub-pages and our 2,000-word flagship hubs without keyword stuffing.
 *
 * Density numbers were derived from the SERP-leader analysis documented in
 * KEYWORD_STRATEGY.md (Aakash, PW, Vedantu, Allen): we divided each
 * competitor's term count by their measured body length to get a per-1,000
 * baseline, then took the inter-quartile band as the recommended window.
 *
 * Each target keyword:
 *   - `term`         word or short phrase (case-insensitive, word-boundary match)
 *   - `per1k`        { min, max } density window per 1,000 words
 *   - `floor`        optional absolute minimum count regardless of page length
 *                    (use for must-appear-once terms on very short pages)
 *   - `priority`     'primary' | 'secondary' | 'semantic'
 *
 * Run `node scripts/keyword-audit.mjs` to validate pages against these targets.
 */

export type KeywordPriority = 'primary' | 'secondary' | 'semantic';

export interface KeywordDensity {
  /** Min occurrences per 1,000 words of body text. */
  min: number;
  /** Max occurrences per 1,000 words of body text. */
  max: number;
}

export interface KeywordTarget {
  term: string;
  per1k: KeywordDensity;
  floor?: number;
  priority: KeywordPriority;
}

export interface PageKeywordTargets {
  slug: string;
  tier: 1 | 2 | 3 | 4 | 5;
  notes?: string;
  keywords: KeywordTarget[];
}

// ── Shared keyword sets ────────────────────────────────────────────────────
// Density windows are tuned so a 700-word page lands ~25-50% inside the band
// and a 1,500-word page stays at the upper end without tipping into stuffing.

const jeeCommon: KeywordTarget[] = [
  { term: 'JEE',            per1k: { min: 25, max: 50 }, floor: 8, priority: 'primary' },
  { term: 'online',         per1k: { min: 10, max: 25 }, floor: 3, priority: 'primary' },
  { term: 'coaching',       per1k: { min: 15, max: 30 }, floor: 4, priority: 'primary' },
  { term: 'course',         per1k: { min: 4,  max: 14 },           priority: 'primary' },
  { term: 'preparation',    per1k: { min: 4,  max: 12 },           priority: 'secondary' },
  { term: 'IIT',            per1k: { min: 4,  max: 12 },           priority: 'secondary' },
  { term: 'live',           per1k: { min: 3,  max: 10 },           priority: 'secondary' },
  { term: 'doubt',          per1k: { min: 3,  max: 10 },           priority: 'secondary' },
  { term: 'mentor',         per1k: { min: 4,  max: 12 }, floor: 2, priority: 'secondary' },
  { term: 'test series',    per1k: { min: 1,  max: 6  },           priority: 'secondary' },
  { term: 'study material', per1k: { min: 1,  max: 6  },           priority: 'secondary' },
  { term: 'Class 11',       per1k: { min: 1,  max: 6  },           priority: 'semantic' },
  { term: 'Class 12',       per1k: { min: 1,  max: 6  },           priority: 'semantic' },
  { term: 'faculty',        per1k: { min: 1,  max: 6  },           priority: 'semantic' },
  { term: 'Physics',        per1k: { min: 2,  max: 10 },           priority: 'semantic' },
  { term: 'Chemistry',      per1k: { min: 2,  max: 10 },           priority: 'semantic' },
  { term: 'Mathematics',    per1k: { min: 2,  max: 10 },           priority: 'semantic' },
  { term: 'India',          per1k: { min: 1,  max: 6  },           priority: 'semantic' },
];

const neetCommon: KeywordTarget[] = [
  { term: 'NEET',           per1k: { min: 25, max: 50 }, floor: 8, priority: 'primary' },
  { term: 'online',         per1k: { min: 8,  max: 22 }, floor: 3, priority: 'primary' },
  { term: 'coaching',       per1k: { min: 12, max: 28 }, floor: 4, priority: 'primary' },
  { term: 'course',         per1k: { min: 4,  max: 14 },           priority: 'primary' },
  { term: 'preparation',    per1k: { min: 4,  max: 12 },           priority: 'secondary' },
  { term: 'live',           per1k: { min: 3,  max: 10 },           priority: 'secondary' },
  { term: 'doubt',          per1k: { min: 3,  max: 10 },           priority: 'secondary' },
  { term: 'mentor',         per1k: { min: 4,  max: 12 }, floor: 2, priority: 'secondary' },
  { term: 'test series',    per1k: { min: 1,  max: 6  },           priority: 'secondary' },
  { term: 'study material', per1k: { min: 1,  max: 6  },           priority: 'secondary' },
  { term: 'NCERT',          per1k: { min: 2,  max: 28 },           priority: 'secondary' },
  { term: 'Biology',        per1k: { min: 4,  max: 14 },           priority: 'secondary' },
  { term: 'Physics',        per1k: { min: 2,  max: 10 },           priority: 'semantic' },
  { term: 'Chemistry',      per1k: { min: 2,  max: 10 },           priority: 'semantic' },
  { term: 'Class 11',       per1k: { min: 1,  max: 6  },           priority: 'semantic' },
  { term: 'Class 12',       per1k: { min: 1,  max: 6  },           priority: 'semantic' },
  { term: 'AIIMS',          per1k: { min: 1,  max: 5  },           priority: 'semantic' },
  { term: 'MBBS',           per1k: { min: 1,  max: 5  },           priority: 'semantic' },
  { term: 'India',          per1k: { min: 1,  max: 6  },           priority: 'semantic' },
];

export const keywordTargets: PageKeywordTargets[] = [
  // ─── Tier 1 — Flagship pages ──────────────────────────────────
  {
    slug: 'jee-coaching',
    tier: 1,
    notes: 'Top-of-funnel JEE hub. Competes with Aakash/Allen/Vedantu /jee pages.',
    keywords: [
      ...jeeCommon,
      { term: 'best',     per1k: { min: 3, max: 9  }, floor: 2, priority: 'primary' },
      { term: '1-on-1',   per1k: { min: 4, max: 14 }, floor: 2, priority: 'primary' },
      { term: 'Advanced', per1k: { min: 4, max: 14 },           priority: 'secondary' },
      { term: 'Main',     per1k: { min: 4, max: 14 },           priority: 'secondary' },
      { term: 'dropper',  per1k: { min: 2, max: 8  },           priority: 'semantic' },
    ],
  },
  {
    slug: 'neet-coaching',
    tier: 1,
    notes: 'Top-of-funnel NEET hub. Competes with Aakash/PW /neet pages.',
    keywords: [
      ...neetCommon,
      { term: 'best',     per1k: { min: 3, max: 9  }, floor: 2, priority: 'primary' },
      { term: '1-on-1',   per1k: { min: 4, max: 14 }, floor: 2, priority: 'primary' },
      { term: 'UG',       per1k: { min: 2, max: 8  },           priority: 'secondary' },
      { term: 'dropper',  per1k: { min: 2, max: 8  },           priority: 'semantic' },
    ],
  },
  {
    slug: 'best-jee-coaching-in-india',
    tier: 1,
    notes: 'Exact-match landing page for "best JEE coaching in India" query.',
    keywords: [
      ...jeeCommon,
      { term: 'best',  per1k: { min: 4, max: 12 }, floor: 4, priority: 'primary' },
      { term: 'India', per1k: { min: 4, max: 12 }, floor: 4, priority: 'primary' },
      { term: 'top',   per1k: { min: 2, max: 8  },           priority: 'secondary' },
    ],
  },
  {
    slug: 'jee-main-coaching',
    tier: 1,
    keywords: [
      ...jeeCommon,
      { term: 'Main',       per1k: { min: 12, max: 30 }, floor: 4, priority: 'primary' },
      { term: 'NTA',        per1k: { min: 2,  max: 8  },           priority: 'secondary' },
      { term: 'rank',       per1k: { min: 2,  max: 8  },           priority: 'secondary' },
      { term: 'percentile', per1k: { min: 1,  max: 5  },           priority: 'semantic' },
    ],
  },
  {
    slug: 'jee-advanced-coaching',
    tier: 1,
    keywords: [
      ...jeeCommon,
      { term: 'Advanced', per1k: { min: 12, max: 30 }, floor: 4, priority: 'primary' },
      { term: 'AIR',      per1k: { min: 2,  max: 8  },           priority: 'secondary' },
      { term: 'rank',     per1k: { min: 2,  max: 8  },           priority: 'secondary' },
      { term: 'IIT',      per1k: { min: 6,  max: 18 }, floor: 3, priority: 'secondary' },
    ],
  },
  {
    slug: 'neet-ug-coaching',
    tier: 1,
    keywords: [
      ...neetCommon,
      { term: 'UG',   per1k: { min: 8, max: 20 }, floor: 3, priority: 'primary' },
      { term: 'rank', per1k: { min: 2, max: 8  },           priority: 'secondary' },
    ],
  },
  {
    slug: 'jee-dropper-coaching',
    tier: 1,
    notes: 'Competes with Vedantu /jee-repeater-course.',
    keywords: [
      ...jeeCommon,
      { term: 'dropper',   per1k: { min: 10, max: 25 }, floor: 4, priority: 'primary' },
      { term: 'repeater',  per1k: { min: 4,  max: 14 }, floor: 2, priority: 'primary' },
      { term: 'Main',      per1k: { min: 6,  max: 18 },           priority: 'secondary' },
      { term: 'Advanced',  per1k: { min: 3,  max: 12 },           priority: 'secondary' },
      { term: 'mock test', per1k: { min: 2,  max: 8  },           priority: 'secondary' },
    ],
  },
  {
    slug: 'neet-dropper-coaching',
    tier: 1,
    keywords: [
      ...neetCommon,
      { term: 'dropper',   per1k: { min: 10, max: 25 }, floor: 4, priority: 'primary' },
      { term: 'repeater',  per1k: { min: 4,  max: 14 }, floor: 2, priority: 'primary' },
      { term: 'mock test', per1k: { min: 2,  max: 8  },           priority: 'secondary' },
    ],
  },
  {
    slug: 'jee-crash-course',
    tier: 1,
    keywords: [
      ...jeeCommon,
      { term: 'crash',    per1k: { min: 10, max: 25 }, floor: 4, priority: 'primary' },
      { term: 'Main',     per1k: { min: 4,  max: 14 },           priority: 'secondary' },
      { term: 'days',     per1k: { min: 2,  max: 8  },           priority: 'secondary' },
      { term: 'revision', per1k: { min: 2,  max: 8  },           priority: 'semantic' },
    ],
  },
  {
    slug: 'neet-crash-course',
    tier: 1,
    keywords: [
      ...neetCommon,
      { term: 'crash',    per1k: { min: 10, max: 25 }, floor: 4, priority: 'primary' },
      { term: 'days',     per1k: { min: 2,  max: 8  },           priority: 'secondary' },
      { term: 'revision', per1k: { min: 2,  max: 8  },           priority: 'semantic' },
    ],
  },
  {
    slug: 'foundation-coaching',
    tier: 1,
    keywords: [
      { term: 'foundation', per1k: { min: 8, max: 20 }, floor: 4, priority: 'primary' },
      { term: 'coaching',   per1k: { min: 8, max: 20 }, floor: 4, priority: 'primary' },
      { term: 'online',     per1k: { min: 6, max: 16 }, floor: 3, priority: 'primary' },
      { term: 'Class 6',    per1k: { min: 1, max: 5  },           priority: 'semantic' },
      { term: 'Class 7',    per1k: { min: 1, max: 5  },           priority: 'semantic' },
      { term: 'Class 8',    per1k: { min: 1, max: 5  },           priority: 'semantic' },
      { term: 'Class 9',    per1k: { min: 1, max: 6  },           priority: 'semantic' },
      { term: 'Class 10',   per1k: { min: 1, max: 6  },           priority: 'semantic' },
      { term: 'JEE',        per1k: { min: 3, max: 10 },           priority: 'secondary' },
      { term: 'NEET',       per1k: { min: 3, max: 10 },           priority: 'secondary' },
      { term: 'Olympiad',   per1k: { min: 1, max: 5  },           priority: 'semantic' },
      { term: 'mentor',     per1k: { min: 2, max: 8  },           priority: 'secondary' },
    ],
  },

  // ─── Tier 2 — Subject hubs ────────────────────────────────────
  {
    slug: 'jee-physics-coaching',
    tier: 2,
    keywords: [
      { term: 'Physics',         per1k: { min: 25, max: 55 }, floor: 8, priority: 'primary' },
      { term: 'JEE',             per1k: { min: 20, max: 45 }, floor: 6, priority: 'primary' },
      { term: 'coaching',        per1k: { min: 10, max: 25 }, floor: 4, priority: 'primary' },
      { term: 'online',          per1k: { min: 5,  max: 16 }, floor: 2, priority: 'primary' },
      { term: 'IIT',             per1k: { min: 4,  max: 14 },           priority: 'secondary' },
      { term: 'Mechanics',       per1k: { min: 2,  max: 8  },           priority: 'semantic' },
      { term: 'Electrodynamics', per1k: { min: 1,  max: 6  },           priority: 'semantic' },
      { term: 'Optics',          per1k: { min: 1,  max: 6  },           priority: 'semantic' },
      { term: 'Thermodynamics',  per1k: { min: 1,  max: 6  },           priority: 'semantic' },
      { term: 'mentor',          per1k: { min: 2,  max: 10 },           priority: 'secondary' },
      { term: 'doubt',           per1k: { min: 2,  max: 8  },           priority: 'secondary' },
    ],
  },
  {
    slug: 'jee-chemistry-coaching',
    tier: 2,
    keywords: [
      { term: 'Chemistry', per1k: { min: 25, max: 55 }, floor: 8, priority: 'primary' },
      { term: 'JEE',       per1k: { min: 20, max: 45 }, floor: 6, priority: 'primary' },
      { term: 'coaching',  per1k: { min: 10, max: 25 }, floor: 4, priority: 'primary' },
      { term: 'online',    per1k: { min: 5,  max: 16 }, floor: 2, priority: 'primary' },
      { term: 'Organic',   per1k: { min: 2,  max: 10 },           priority: 'semantic' },
      { term: 'Inorganic', per1k: { min: 2,  max: 8  },           priority: 'semantic' },
      { term: 'Physical',  per1k: { min: 2,  max: 8  },           priority: 'semantic' },
      { term: 'mentor',    per1k: { min: 2,  max: 10 },           priority: 'secondary' },
      { term: 'doubt',     per1k: { min: 2,  max: 8  },           priority: 'secondary' },
    ],
  },
  {
    slug: 'jee-mathematics-coaching',
    tier: 2,
    keywords: [
      { term: 'Mathematics',  per1k: { min: 15, max: 40 }, floor: 6, priority: 'primary' },
      { term: 'Maths',        per1k: { min: 6,  max: 22 }, floor: 2, priority: 'primary' },
      { term: 'JEE',          per1k: { min: 20, max: 45 }, floor: 6, priority: 'primary' },
      { term: 'coaching',     per1k: { min: 10, max: 25 }, floor: 4, priority: 'primary' },
      { term: 'online',       per1k: { min: 5,  max: 16 }, floor: 2, priority: 'primary' },
      { term: 'Calculus',     per1k: { min: 2,  max: 10 },           priority: 'semantic' },
      { term: 'Algebra',      per1k: { min: 2,  max: 10 },           priority: 'semantic' },
      { term: 'Geometry',     per1k: { min: 1,  max: 8  },           priority: 'semantic' },
      { term: 'Trigonometry', per1k: { min: 1,  max: 8  },           priority: 'semantic' },
      { term: 'mentor',       per1k: { min: 2,  max: 10 },           priority: 'secondary' },
    ],
  },
  {
    slug: 'neet-physics-coaching',
    tier: 2,
    keywords: [
      { term: 'Physics',  per1k: { min: 25, max: 55 }, floor: 8, priority: 'primary' },
      { term: 'NEET',     per1k: { min: 20, max: 45 }, floor: 6, priority: 'primary' },
      { term: 'coaching', per1k: { min: 10, max: 25 }, floor: 4, priority: 'primary' },
      { term: 'online',   per1k: { min: 5,  max: 16 }, floor: 2, priority: 'primary' },
      { term: 'NCERT',    per1k: { min: 2,  max: 30 },           priority: 'secondary' },
      { term: 'mentor',   per1k: { min: 2,  max: 10 },           priority: 'secondary' },
      { term: 'doubt',    per1k: { min: 2,  max: 8  },           priority: 'secondary' },
    ],
  },
  {
    slug: 'neet-chemistry-coaching',
    tier: 2,
    keywords: [
      { term: 'Chemistry', per1k: { min: 25, max: 55 }, floor: 8, priority: 'primary' },
      { term: 'NEET',      per1k: { min: 20, max: 45 }, floor: 6, priority: 'primary' },
      { term: 'coaching',  per1k: { min: 10, max: 25 }, floor: 4, priority: 'primary' },
      { term: 'online',    per1k: { min: 5,  max: 16 }, floor: 2, priority: 'primary' },
      { term: 'NCERT',     per1k: { min: 2,  max: 12 },           priority: 'secondary' },
      { term: 'mentor',    per1k: { min: 2,  max: 10 },           priority: 'secondary' },
      { term: 'doubt',     per1k: { min: 2,  max: 8  },           priority: 'secondary' },
    ],
  },
  {
    slug: 'neet-biology-coaching',
    tier: 2,
    notes: 'Biology is the highest-volume subject keyword for NEET.',
    keywords: [
      { term: 'Biology',  per1k: { min: 25, max: 55 }, floor: 8, priority: 'primary' },
      { term: 'NEET',     per1k: { min: 20, max: 45 }, floor: 6, priority: 'primary' },
      { term: 'coaching', per1k: { min: 10, max: 25 }, floor: 4, priority: 'primary' },
      { term: 'online',   per1k: { min: 5,  max: 16 }, floor: 2, priority: 'primary' },
      { term: 'NCERT',    per1k: { min: 4,  max: 50 }, floor: 2, priority: 'primary' },
      { term: 'Botany',   per1k: { min: 1,  max: 10 },           priority: 'semantic' },
      { term: 'Zoology',  per1k: { min: 1,  max: 6  },           priority: 'semantic' },
      { term: 'mentor',   per1k: { min: 2,  max: 10 },           priority: 'secondary' },
      { term: 'doubt',    per1k: { min: 2,  max: 8  },           priority: 'secondary' },
    ],
  },
];

/** Lookup a target set by slug */
export const getKeywordTargets = (slug: string): PageKeywordTargets | undefined =>
  keywordTargets.find((t) => t.slug === slug);

/**
 * Resolve a keyword target's effective min/max counts for a given page word
 * count. Used by the audit script and by any UI that wants to surface the
 * concrete numeric window for a page.
 */
export function resolveTargetWindow(
  target: KeywordTarget,
  wordCount: number,
): { min: number; max: number } {
  const scale = Math.max(0, wordCount) / 1000;
  const rawMin = Math.round(target.per1k.min * scale);
  const rawMax = Math.round(target.per1k.max * scale);
  const min = Math.max(rawMin, target.floor ?? 0);
  // Always keep max ≥ min + 1 so a "min hit" is never simultaneously OVER.
  const max = Math.max(rawMax, min + 1);
  return { min, max };
}
