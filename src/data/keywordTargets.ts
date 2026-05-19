/**
 * Keyword-frequency targets per SEO landing page.
 *
 * Numbers are derived from the SERP-leader analysis documented in
 * KEYWORD_STRATEGY.md (Aakash, PW, Vedantu, Allen). Each entry is the
 * recommended occurrence count for the *visible body text* of the page —
 * title, description, H1, hero subtitle, section content + bullets, and FAQs.
 *
 * Each target keyword:
 *   - `term`         word or short phrase (case-insensitive, word-boundary match)
 *   - `min` / `max`  acceptable frequency window
 *   - `priority`     'primary' | 'secondary' | 'semantic'
 *
 * Run `node scripts/keyword-audit.mjs` to validate pages against these targets.
 */

export type KeywordPriority = 'primary' | 'secondary' | 'semantic';

export interface KeywordTarget {
  term: string;
  min: number;
  max: number;
  priority: KeywordPriority;
}

export interface PageKeywordTargets {
  slug: string;
  tier: 1 | 2 | 3 | 4 | 5;
  notes?: string;
  keywords: KeywordTarget[];
}

const jeeCommon: KeywordTarget[] = [
  { term: 'JEE', min: 80, max: 120, priority: 'primary' },
  { term: 'online', min: 40, max: 70, priority: 'primary' },
  { term: 'coaching', min: 30, max: 50, priority: 'primary' },
  { term: 'course', min: 30, max: 50, priority: 'primary' },
  { term: 'preparation', min: 20, max: 35, priority: 'secondary' },
  { term: 'IIT', min: 15, max: 25, priority: 'secondary' },
  { term: 'live', min: 15, max: 25, priority: 'secondary' },
  { term: 'doubt', min: 6, max: 12, priority: 'secondary' },
  { term: 'mentor', min: 8, max: 15, priority: 'secondary' },
  { term: 'test series', min: 5, max: 10, priority: 'secondary' },
  { term: 'study material', min: 5, max: 10, priority: 'secondary' },
  { term: 'Class 11', min: 4, max: 12, priority: 'semantic' },
  { term: 'Class 12', min: 4, max: 12, priority: 'semantic' },
  { term: 'faculty', min: 5, max: 10, priority: 'semantic' },
  { term: 'Physics', min: 4, max: 12, priority: 'semantic' },
  { term: 'Chemistry', min: 4, max: 12, priority: 'semantic' },
  { term: 'Mathematics', min: 4, max: 12, priority: 'semantic' },
  { term: 'India', min: 2, max: 8, priority: 'semantic' },
];

const neetCommon: KeywordTarget[] = [
  { term: 'NEET', min: 70, max: 110, priority: 'primary' },
  { term: 'online', min: 25, max: 50, priority: 'primary' },
  { term: 'coaching', min: 25, max: 45, priority: 'primary' },
  { term: 'course', min: 20, max: 45, priority: 'primary' },
  { term: 'preparation', min: 15, max: 30, priority: 'secondary' },
  { term: 'live', min: 10, max: 18, priority: 'secondary' },
  { term: 'doubt', min: 5, max: 12, priority: 'secondary' },
  { term: 'mentor', min: 8, max: 15, priority: 'secondary' },
  { term: 'test series', min: 4, max: 10, priority: 'secondary' },
  { term: 'study material', min: 5, max: 10, priority: 'secondary' },
  { term: 'NCERT', min: 4, max: 10, priority: 'secondary' },
  { term: 'Biology', min: 8, max: 15, priority: 'secondary' },
  { term: 'Physics', min: 4, max: 12, priority: 'semantic' },
  { term: 'Chemistry', min: 4, max: 12, priority: 'semantic' },
  { term: 'Class 11', min: 4, max: 12, priority: 'semantic' },
  { term: 'Class 12', min: 4, max: 12, priority: 'semantic' },
  { term: 'AIIMS', min: 2, max: 8, priority: 'semantic' },
  { term: 'MBBS', min: 2, max: 8, priority: 'semantic' },
  { term: 'India', min: 2, max: 8, priority: 'semantic' },
];

export const keywordTargets: PageKeywordTargets[] = [
  // ─── Tier 1 — Flagship pages ──────────────────────────────────
  {
    slug: 'jee-coaching',
    tier: 1,
    notes: 'Top-of-funnel JEE hub. Competes with Aakash/Allen/Vedantu /jee pages.',
    keywords: [
      ...jeeCommon,
      { term: 'best', min: 4, max: 8, priority: 'primary' },
      { term: '1-on-1', min: 8, max: 15, priority: 'primary' },
      { term: 'Advanced', min: 8, max: 18, priority: 'secondary' },
      { term: 'Main', min: 8, max: 18, priority: 'secondary' },
      { term: 'dropper', min: 3, max: 8, priority: 'semantic' },
    ],
  },
  {
    slug: 'neet-coaching',
    tier: 1,
    notes: 'Top-of-funnel NEET hub. Competes with Aakash/PW /neet pages.',
    keywords: [
      ...neetCommon,
      { term: 'best', min: 3, max: 6, priority: 'primary' },
      { term: '1-on-1', min: 8, max: 15, priority: 'primary' },
      { term: 'UG', min: 4, max: 10, priority: 'secondary' },
      { term: 'dropper', min: 3, max: 8, priority: 'semantic' },
    ],
  },
  {
    slug: 'best-jee-coaching-in-india',
    tier: 1,
    notes: 'Exact-match landing page for "best JEE coaching in India" query.',
    keywords: [
      ...jeeCommon,
      { term: 'best', min: 8, max: 15, priority: 'primary' },
      { term: 'India', min: 8, max: 15, priority: 'primary' },
      { term: 'top', min: 4, max: 10, priority: 'secondary' },
    ],
  },
  {
    slug: 'jee-main-coaching',
    tier: 1,
    keywords: [
      ...jeeCommon,
      { term: 'Main', min: 25, max: 45, priority: 'primary' },
      { term: 'NTA', min: 4, max: 10, priority: 'secondary' },
      { term: 'rank', min: 3, max: 8, priority: 'secondary' },
      { term: 'percentile', min: 2, max: 6, priority: 'semantic' },
    ],
  },
  {
    slug: 'jee-advanced-coaching',
    tier: 1,
    keywords: [
      ...jeeCommon,
      { term: 'Advanced', min: 25, max: 45, priority: 'primary' },
      { term: 'AIR', min: 3, max: 10, priority: 'secondary' },
      { term: 'rank', min: 4, max: 10, priority: 'secondary' },
      { term: 'IIT', min: 18, max: 30, priority: 'secondary' },
    ],
  },
  {
    slug: 'neet-ug-coaching',
    tier: 1,
    keywords: [
      ...neetCommon,
      { term: 'UG', min: 15, max: 30, priority: 'primary' },
      { term: 'rank', min: 3, max: 8, priority: 'secondary' },
    ],
  },
  {
    slug: 'jee-dropper-coaching',
    tier: 1,
    notes: 'Competes with Vedantu /jee-repeater-course.',
    keywords: [
      ...jeeCommon,
      { term: 'dropper', min: 18, max: 30, priority: 'primary' },
      { term: 'repeater', min: 6, max: 15, priority: 'primary' },
      { term: 'Main', min: 12, max: 25, priority: 'secondary' },
      { term: 'Advanced', min: 6, max: 15, priority: 'secondary' },
      { term: 'mock test', min: 5, max: 10, priority: 'secondary' },
    ],
  },
  {
    slug: 'neet-dropper-coaching',
    tier: 1,
    keywords: [
      ...neetCommon,
      { term: 'dropper', min: 18, max: 30, priority: 'primary' },
      { term: 'repeater', min: 6, max: 15, priority: 'primary' },
      { term: 'mock test', min: 5, max: 10, priority: 'secondary' },
    ],
  },
  {
    slug: 'jee-crash-course',
    tier: 1,
    keywords: [
      ...jeeCommon,
      { term: 'crash', min: 18, max: 30, priority: 'primary' },
      { term: 'Main', min: 10, max: 20, priority: 'secondary' },
      { term: 'days', min: 3, max: 10, priority: 'secondary' },
      { term: 'revision', min: 3, max: 10, priority: 'semantic' },
    ],
  },
  {
    slug: 'neet-crash-course',
    tier: 1,
    keywords: [
      ...neetCommon,
      { term: 'crash', min: 18, max: 30, priority: 'primary' },
      { term: 'days', min: 3, max: 10, priority: 'secondary' },
      { term: 'revision', min: 3, max: 10, priority: 'semantic' },
    ],
  },
  {
    slug: 'foundation-coaching',
    tier: 1,
    keywords: [
      { term: 'foundation', min: 18, max: 35, priority: 'primary' },
      { term: 'coaching', min: 18, max: 35, priority: 'primary' },
      { term: 'online', min: 15, max: 30, priority: 'primary' },
      { term: 'Class 6', min: 2, max: 8, priority: 'semantic' },
      { term: 'Class 7', min: 2, max: 8, priority: 'semantic' },
      { term: 'Class 8', min: 2, max: 8, priority: 'semantic' },
      { term: 'Class 9', min: 3, max: 8, priority: 'semantic' },
      { term: 'Class 10', min: 3, max: 8, priority: 'semantic' },
      { term: 'JEE', min: 6, max: 15, priority: 'secondary' },
      { term: 'NEET', min: 6, max: 15, priority: 'secondary' },
      { term: 'Olympiad', min: 2, max: 8, priority: 'semantic' },
      { term: 'mentor', min: 5, max: 12, priority: 'secondary' },
    ],
  },

  // ─── Tier 2 — Subject hubs ────────────────────────────────────
  {
    slug: 'jee-physics-coaching',
    tier: 2,
    keywords: [
      { term: 'Physics', min: 35, max: 70, priority: 'primary' },
      { term: 'JEE', min: 40, max: 80, priority: 'primary' },
      { term: 'coaching', min: 20, max: 40, priority: 'primary' },
      { term: 'online', min: 15, max: 35, priority: 'primary' },
      { term: 'IIT', min: 8, max: 20, priority: 'secondary' },
      { term: 'Mechanics', min: 3, max: 10, priority: 'semantic' },
      { term: 'Electrodynamics', min: 2, max: 8, priority: 'semantic' },
      { term: 'Optics', min: 2, max: 8, priority: 'semantic' },
      { term: 'Thermodynamics', min: 2, max: 8, priority: 'semantic' },
      { term: 'mentor', min: 5, max: 12, priority: 'secondary' },
      { term: 'doubt', min: 4, max: 10, priority: 'secondary' },
    ],
  },
  {
    slug: 'jee-chemistry-coaching',
    tier: 2,
    keywords: [
      { term: 'Chemistry', min: 35, max: 70, priority: 'primary' },
      { term: 'JEE', min: 40, max: 80, priority: 'primary' },
      { term: 'coaching', min: 20, max: 40, priority: 'primary' },
      { term: 'online', min: 15, max: 35, priority: 'primary' },
      { term: 'Organic', min: 4, max: 12, priority: 'semantic' },
      { term: 'Inorganic', min: 3, max: 10, priority: 'semantic' },
      { term: 'Physical', min: 3, max: 10, priority: 'semantic' },
      { term: 'mentor', min: 5, max: 12, priority: 'secondary' },
      { term: 'doubt', min: 4, max: 10, priority: 'secondary' },
    ],
  },
  {
    slug: 'jee-mathematics-coaching',
    tier: 2,
    keywords: [
      { term: 'Mathematics', min: 25, max: 55, priority: 'primary' },
      { term: 'Maths', min: 8, max: 25, priority: 'primary' },
      { term: 'JEE', min: 40, max: 80, priority: 'primary' },
      { term: 'coaching', min: 20, max: 40, priority: 'primary' },
      { term: 'online', min: 15, max: 35, priority: 'primary' },
      { term: 'Calculus', min: 3, max: 10, priority: 'semantic' },
      { term: 'Algebra', min: 3, max: 10, priority: 'semantic' },
      { term: 'Geometry', min: 2, max: 8, priority: 'semantic' },
      { term: 'Trigonometry', min: 2, max: 8, priority: 'semantic' },
      { term: 'mentor', min: 5, max: 12, priority: 'secondary' },
    ],
  },
  {
    slug: 'neet-physics-coaching',
    tier: 2,
    keywords: [
      { term: 'Physics', min: 35, max: 70, priority: 'primary' },
      { term: 'NEET', min: 40, max: 80, priority: 'primary' },
      { term: 'coaching', min: 20, max: 40, priority: 'primary' },
      { term: 'online', min: 15, max: 35, priority: 'primary' },
      { term: 'NCERT', min: 3, max: 10, priority: 'secondary' },
      { term: 'mentor', min: 5, max: 12, priority: 'secondary' },
      { term: 'doubt', min: 4, max: 10, priority: 'secondary' },
    ],
  },
  {
    slug: 'neet-chemistry-coaching',
    tier: 2,
    keywords: [
      { term: 'Chemistry', min: 35, max: 70, priority: 'primary' },
      { term: 'NEET', min: 40, max: 80, priority: 'primary' },
      { term: 'coaching', min: 20, max: 40, priority: 'primary' },
      { term: 'online', min: 15, max: 35, priority: 'primary' },
      { term: 'NCERT', min: 3, max: 10, priority: 'secondary' },
      { term: 'mentor', min: 5, max: 12, priority: 'secondary' },
      { term: 'doubt', min: 4, max: 10, priority: 'secondary' },
    ],
  },
  {
    slug: 'neet-biology-coaching',
    tier: 2,
    notes: 'Biology is the highest-volume subject keyword for NEET.',
    keywords: [
      { term: 'Biology', min: 40, max: 80, priority: 'primary' },
      { term: 'NEET', min: 40, max: 80, priority: 'primary' },
      { term: 'coaching', min: 20, max: 40, priority: 'primary' },
      { term: 'online', min: 15, max: 35, priority: 'primary' },
      { term: 'NCERT', min: 6, max: 15, priority: 'primary' },
      { term: 'Botany', min: 2, max: 8, priority: 'semantic' },
      { term: 'Zoology', min: 2, max: 8, priority: 'semantic' },
      { term: 'mentor', min: 5, max: 12, priority: 'secondary' },
      { term: 'doubt', min: 4, max: 10, priority: 'secondary' },
    ],
  },
];

/** Lookup a target set by slug */
export const getKeywordTargets = (slug: string): PageKeywordTargets | undefined =>
  keywordTargets.find((t) => t.slug === slug);
