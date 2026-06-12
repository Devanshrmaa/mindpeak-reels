/**
 * Hand-tuned <title> / meta-description overrides for the highest-impression
 * programmatic blog posts, from the 2026-06-12 GSC audit (section E).
 *
 * The templated titles ("X vs Y 2027 — Complete Comparison Guide") earned
 * near-zero CTR at top-5 positions (e.g. kcet-vs-jee-advanced: 4,168
 * impressions @ 0.14% CTR @ pos 2.8 in 90d). These rewrites lead with the
 * question searchers actually type ("is kcet easier than jee", "difference
 * between neet and eamcet") and promise the concrete data the SERP snippet
 * was missing.
 *
 * Keys are the post slug WITHOUT the trailing exam year, so overrides
 * survive the annual CURRENT_EXAM_YEAR slug rollover automatically.
 * Titles use {Y} as the year placeholder.
 */

import { CURRENT_EXAM_YEAR } from '@/lib/examYears';

export interface BlogSeoOverride {
  title: string;
  description: string;
}

const Y = String(CURRENT_EXAM_YEAR);

const OVERRIDES: Record<string, BlogSeoOverride> = {
  'kcet-vs-jee-advanced-comparison': {
    title: `Is KCET Easier Than JEE? KCET vs JEE Advanced {Y} Compared`,
    description: `Yes — KCET is much easier than JEE Advanced. Syllabus overlap, marking scheme and difficulty compared side by side, plus a prep plan that covers both.`,
  },
  'cuet-vs-jee-main-comparison': {
    title: `Is CUET Easier Than JEE Main? CUET vs JEE {Y} — Full Comparison`,
    description: `CUET is easier than JEE Main, but they unlock different colleges. See difficulty and syllabus overlap compared, plus how to decide which exam fits you.`,
  },
  'cuet-vs-jee-advanced-comparison': {
    title: `CUET vs JEE Advanced {Y} — How Big Is the Difficulty Gap?`,
    description: `JEE Advanced is in a different league from CUET. See how big the gap really is — syllabus, question depth, time pressure — and which path fits your goal.`,
  },
  'bitsat-vs-jee-main-comparison': {
    title: `BITSAT vs JEE Main {Y} — Overlap, Difficulty & Which Is Easier`,
    description: `BITSAT trades JEE Main's depth for speed — 130 questions in 3 hours. See syllabus overlap, difficulty and how to prepare for both with one plan.`,
  },
  'ap-eamcet-syllabus-complete-guide': {
    title: `AP EAMCET Syllabus {Y} — Chapter-wise Weightage & Analysis`,
    description: `Complete AP EAMCET syllabus with chapter-wise weightage tables for Maths, Physics and Chemistry — plus the 20 chapters that decide 70% of your rank.`,
  },
  'how-to-prepare-biology-for-kcet': {
    title: `KCET Biology {Y}: Important Chapters, Weightage & Prep Plan`,
    description: `KCET Biology prep guide: chapter-wise weightage, NCERT-first strategy, and a 60-day plan used by our Karnataka students to cross 100/120.`,
  },
  'ts-eamcet-mathematics-strategy-score-high': {
    title: `TS EAMCET Maths Strategy {Y} — Weightage & 8-Week Plan to 70+`,
    description: `TS EAMCET Maths rewards speed: chapter weightage, shortcuts and an 8-week plan to reach 70+ out of 80, from mentors who coach Telangana toppers 1-on-1.`,
  },
  'viteee-vs-jee-main-comparison': {
    title: `Is VITEEE Easier Than JEE Main? {Y} Comparison + Dual-Prep Plan`,
    description: `VITEEE is easier than JEE Main, with high syllabus overlap and no negative marking. See the full comparison and clear VITEEE using your JEE prep.`,
  },
  'neet-cutoff-aiims-delhi': {
    title: `AIIMS Delhi Cutoff {Y}: Marks & Rank Needed (Year-wise Trends)`,
    description: `Year-wise AIIMS Delhi cutoff marks and ranks, category-wise, with trends since 2020 and the realistic NEET score to target this cycle.`,
  },
  'ap-eamcet-vs-neet-comparison': {
    title: `NEET vs AP EAMCET — Syllabus, Difficulty & College Differences {Y}`,
    description: `NEET and AP EAMCET differ in syllabus depth, negative marking and the colleges they unlock. Full comparison plus a dual-prep plan for AP medical aspirants.`,
  },
};

/**
 * Returns the SEO override for a blog slug, if one exists. The trailing
 * exam year (e.g. `-2027`) is stripped before lookup so the same override
 * applies across year rollovers.
 */
export function getBlogSeoOverride(slug: string): BlogSeoOverride | undefined {
  const base = slug.replace(/-20\d{2}$/, '');
  const o = OVERRIDES[base];
  if (!o) return undefined;
  return { title: o.title.replaceAll('{Y}', Y), description: o.description };
}
