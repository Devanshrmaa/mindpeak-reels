/**
 * Rotating Content Utility — study tips and seasonal CTAs only.
 *
 * The fabricated "monthly success stories" (12 invented students with
 * specific AIRs, rotated so "Google sees different content each crawl")
 * were removed 2026-07-15. Invented named results are a trust, compliance
 * and spam-recovery liability. Real, verifiable stories belong in owner-
 * maintained data with proof — not generated here.
 */

import { CURRENT_EXAM_YEAR } from '@/lib/examYears';

/* ─── weekly rotating tips ─── */

const weeklyJEETips = [
  'Focus on weak chapters first — start with the topics that lose you the most marks.',
  'Solve 10 previous-year JEE questions daily for pattern recognition.',
  'Take a full-length mock test under timed conditions this week.',
  "Revise formulas and important derivations — don't learn new topics this week.",
];

const weeklyNEETTips = [
  'Revise NCERT Biology line-by-line — 90% of NEET Biology comes from NCERT.',
  'Practice assertion-reason questions daily for Biology and Chemistry.',
  'Take a full-length NEET mock (200 questions, 200 minutes) under exam conditions.',
  'Focus on diagram-based learning this week — label every diagram you find in NCERT.',
];

/**
 * Returns the tip for the current week (0-based week of month).
 */
export function getWeeklyTip(exam: 'JEE' | 'NEET' = 'JEE'): string {
  const tips = exam === 'NEET' ? weeklyNEETTips : weeklyJEETips;
  const weekOfMonth = Math.floor((new Date().getDate() - 1) / 7);
  return tips[weekOfMonth % tips.length];
}

/* ─── seasonal banners ─── */

export interface SeasonalBanner {
  headline: string;
  subtext: string;
  cta: string;
}

const seasonalBanners: Record<number, SeasonalBanner> = {
  0: { headline: 'New Year, New Start 🎯', subtext: `Begin your JEE / NEET journey with a personalized plan for ${CURRENT_EXAM_YEAR}.`, cta: 'Claim New Year Offer' },
  1: { headline: 'Board Exams Approaching 📝', subtext: "Balance boards + competitive exam prep with a personal mentor.", cta: 'Get Board + JEE/NEET Plan' },
  2: { headline: 'JEE Main Session 1 Done ✅', subtext: 'Didn\'t score as expected? There\'s still time — start your recovery plan now.', cta: 'Start Recovery Plan' },
  3: { headline: 'JEE Main Session 2 Countdown ⏰', subtext: 'Intensive 1-on-1 preparation to maximize your Session 2 score.', cta: 'Join Crash Course' },
  4: { headline: 'NEET Final Countdown 🏥', subtext: 'Last-mile preparation with a dedicated mentor. Every mark matters.', cta: 'Start NEET Crash Course' },
  5: { headline: 'JEE Advanced Prep Mode 🔥', subtext: 'Qualify for IITs with intensive 1-on-1 Advanced coaching.', cta: 'Prepare for Advanced' },
  6: { headline: 'Results Season 🏆', subtext: 'Congratulations to our toppers! New batch starting — limited seats.', cta: 'Enroll for Next Cycle' },
  7: { headline: 'Early Bird Advantage 🐦', subtext: 'Start early, score higher. Join the next JEE / NEET batch with a head start.', cta: 'Get Early Bird Discount' },
  8: { headline: 'Foundation Month 📚', subtext: 'Build unshakeable fundamentals with our foundation-first approach.', cta: 'Start Foundation Course' },
  9: { headline: 'Diwali Special 🪔', subtext: 'Festival offer on all annual plans. Gift your child the best coaching.', cta: 'Claim Diwali Offer' },
  10: { headline: 'Mock Test Marathon 📊', subtext: 'Weekly full-length mocks with mentor analysis. Sharpen your exam-day skills.', cta: 'Join Test Marathon' },
  11: { headline: 'Year-End Revision 🎄', subtext: 'Complete your syllabus before the new year. Intensive revision sessions available.', cta: 'Start Revision Plan' },
};

/**
 * Returns a seasonally appropriate banner for the current month.
 */
export function getCurrentSeasonalBanner(): SeasonalBanner {
  return seasonalBanners[new Date().getMonth()];
}
