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
    // "— Full Comparison" pushed this to 64 chars; Google cut the tail.
    title: `Is CUET Easier Than JEE Main? CUET vs JEE {Y} Compared`,
    description: `CUET is easier than JEE Main, but they unlock different colleges. See difficulty and syllabus overlap compared, plus how to decide which exam fits you.`,
  },
  'cuet-vs-jee-advanced-comparison': {
    title: `CUET vs JEE Advanced {Y} — How Big Is the Difficulty Gap?`,
    description: `JEE Advanced is in a different league from CUET. See how big the gap really is — syllabus, question depth, time pressure — and which path fits your goal.`,
  },
  'bitsat-vs-jee-main-comparison': {
    // 63 chars before the trim. The page does not claim BITSAT is simply
    // easier (it trades depth for speed), so this keeps the comparison framing.
    title: `BITSAT vs JEE Main {Y} — Syllabus Overlap & Difficulty`,
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
    // GSC 2026-07: ranks 9-11 for five "difference between eamcet and neet"
    // phrasings against Quora/Careers360 Q&A pages — lead with that phrasing.
    title: `Difference Between EAMCET and NEET ({Y}) — Which to Choose?`,
    description: `EAMCET is the AP/Telangana state entrance (PCB + PCM streams); NEET is the national medical entrance (PCB only). Syllabus, seats and difficulty compared.`,
  },
  /* ── SERP-pattern batch, 2026-07-14 — modeled on the metadata of pages
     ranking top-3 for our striking-distance GSC queries. ── */
  'ts-eamcet-syllabus-complete-guide': {
    // Top rankers (Shiksha/Careers360/Testbook) all lead "TS EAMCET Syllabus
    // 2026" + subject-wise + weightage. Our page: pos 10, 65 imps, 1 click.
    title: `TS EAMCET Syllabus {Y}: Subject-Wise Topics & Weightage`,
    description: `Full TS EAMCET (TG EAPCET) syllabus for Maths, Physics and Chemistry with chapter-wise weightage tables and the high-yield chapters deciding your rank.`,
  },
  'olympiad-vs-jee-advanced-comparison': {
    // "is nsep harder than jee advanced" pos 13. Answer is stage-dependent —
    // see blogContentEnrichments.ts. Description must match that verdict, not
    // the blanket "olympiads are harder" claim it carried before 2026-08.
    title: `Is NSEP Harder Than JEE Advanced? Olympiad vs JEE {Y}`,
    description: `Depends on the stage: NSEP is a screening paper near JEE Main level, but INPhO and INMO are harder than JEE Advanced. All 5 stages compared with real numbers.`,
  },
  'wbjee-vs-jee-advanced-comparison': {
    // "is wbjee tougher than jee" pos 29, 14 imps; consensus: WBJEE easier.
    title: `Is WBJEE Tougher Than JEE? WBJEE vs JEE Advanced {Y}`,
    description: `No — WBJEE is noticeably easier than JEE Advanced: formula-based questions vs multi-concept problems. Difficulty, syllabus overlap and colleges compared.`,
  },
  'comedk-vs-jee-advanced-comparison': {
    // "is comedk easier/harder than jee" pos 19-21.
    title: `Is COMEDK Easier Than JEE? COMEDK vs JEE Advanced {Y}`,
    description: `Yes — COMEDK is easier than JEE Advanced with direct questions, but 180 questions in 3 hours adds time pressure. Pattern, difficulty and colleges compared.`,
  },
  'srmjeee-vs-jee-main-comparison': {
    // "is srmjeee easier than jee mains" pos 25.
    title: `Is SRMJEEE Easier Than JEE Main? Full Comparison {Y}`,
    description: `Yes — SRMJEEE is much easier than JEE Main, with no negative marking and direct questions. See the syllabus overlap and how your JEE prep clears SRMJEEE.`,
  },
  /* ── 2026-08-05 GSC batch: pages earning impressions with no override. ── */
  'isi-entrance-vs-jee-main-comparison': {
    // 7 imps/28d at pos ~34 across "is isi tougher/harder than jee advanced"
    // and "isi admission through jee mains". Templated title led with
    // "ISI Entrance vs JEE Main" — no question phrasing, no answer.
    title: `Is the ISI Entrance Harder Than JEE? ISI vs JEE {Y}`,
    description: `ISI is maths-only with a proof-based paper and an interview — a different exam, not a harder JEE. Syllabus, pattern and who should actually target it.`,
  },
  /* ── 2026-09-11 GSC batch: two comparison posts ranking top-10 on clear
     question clusters while the templated title was cut mid-word by the
     " | MindPeak Institute" suffix. Both verdicts below are the page's own
     stated conclusion — see the "Quick answer" block on each post. ── */
  'ap-eamcet-vs-jee-main-comparison': {
    // 1,056 imps / 4 clicks / pos 6.6 in 28d. Query cluster: "is eamcet
    // easier than jee mains" (19), "difference between eamcet and jee mains"
    // (16), "is jee mains and eamcet same syllabus" (16), "is eamcet harder
    // than jee" (12). The templated title ran to 82 chars and displayed as
    // "…Which Is Harder? Full Compariso".
    title: `Is AP EAMCET Easier Than JEE Main? EAMCET vs JEE {Y}`,
    description: `Slightly easier than JEE Main on question difficulty — but Maths is 50% of the paper, 80 of 160 questions. The 80% syllabus overlap and what sits outside it.`,
  },
  'mht-cet-vs-neet-comparison': {
    // 689 imps / ZERO clicks / pos 7.0 in 28d. The cluster is mostly
    // "difference" phrasings — "neet and cet difference" (9), "cet and neet
    // difference" (8), "difference between neet and mht cet" (6), "neet vs
    // cet" (7) — with "is mht cet easy than neet" (11) behind them, so the
    // title leads with what differs rather than with a harder/easier verdict
    // the page deliberately does not give.
    title: `MHT-CET vs NEET {Y} — 75% Same Syllabus, What Differs`,
    description: `Three quarters of the syllabus is shared. What actually differs: MHT-CET carries no negative marking, NEET penalises −1, and the papers reward different skills.`,
  },
  'mht-cet-vs-jee-advanced-comparison': {
    // 3 imps/28d at pos ~44, all syllabus-overlap phrasings: "is jee and mht
    // cet syllabus same", "is mht cet syllabus same as jee", "difference
    // between jee and mht cet". Lead with the syllabus question, not difficulty.
    title: `Is the MHT CET Syllabus Same as JEE? {Y} Comparison`,
    description: `Mostly, but not entirely — MHT CET follows the Maharashtra state board syllabus and has no negative marking. Overlap, pattern and difficulty compared with JEE.`,
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
