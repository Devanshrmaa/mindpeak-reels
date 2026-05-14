/**
 * Exam Year Auto-Update Utility
 * ─────────────────────────────
 * Computes target years dynamically so the entire site stays current
 * without manual edits. All year references across the codebase
 * should import from here instead of hardcoding.
 *
 * Logic:
 * - JEE Main Session 2 & NEET UG happen in April-May each year.
 * - Once May starts (month index >= 4), the "current" exam cycle is
 *   considered done and CURRENT_EXAM_YEAR rolls forward to next cycle.
 *
 * Course-naming semantics:
 * - A 1-year intensive course is for students who have ~1 year to
 *   prepare for the NEXT upcoming exam — so its target IS that exam.
 * - A 2-year foundation course (Class 11 entrants) targets the cycle
 *   AFTER the next one.
 *
 * Example (May 2026 onwards):
 *   CURRENT_EXAM_YEAR = 2027  (next upcoming exam)
 *   ONE_YEAR_TARGET   = 2027  (1-year intensive — 8 months to Jan 2027)
 *   TWO_YEAR_TARGET   = 2028  (2-year foundation — Class 11 → Jan 2028)
 *
 * Example (Jan–Apr 2027):
 *   CURRENT_EXAM_YEAR = 2027  (exams happening this cycle)
 *   ONE_YEAR_TARGET   = 2027
 *   TWO_YEAR_TARGET   = 2028
 */

const now = new Date();
const calendarYear = now.getFullYear();

/**
 * After April (month index >= 4, i.e. May onwards), the current exam
 * session is done — students enrolling now target the NEXT year's exam.
 */
const rollover = now.getMonth() >= 4; // May onwards → roll forward

/** The next upcoming exam year (JEE / NEET) students are currently targeting. */
export const CURRENT_EXAM_YEAR = rollover ? calendarYear + 1 : calendarYear;

/** Target year for 1-year intensive courses — the next upcoming exam. */
export const ONE_YEAR_TARGET = CURRENT_EXAM_YEAR;

/** Target year for 2-year foundation courses — the cycle after next. */
export const TWO_YEAR_TARGET = CURRENT_EXAM_YEAR + 1;

/** Months remaining until JEE Main Session 1 (approx Jan 20 of CURRENT_EXAM_YEAR). */
export const MONTHS_TO_JEE = (() => {
  const jeeDate = new Date(CURRENT_EXAM_YEAR, 0, 20); // Jan 20
  const diff = jeeDate.getTime() - now.getTime();
  return Math.max(0, Math.round(diff / (1000 * 60 * 60 * 24 * 30.44)));
})();

/** Months remaining until NEET UG (approx May 4 of CURRENT_EXAM_YEAR). */
export const MONTHS_TO_NEET = (() => {
  const neetDate = new Date(CURRENT_EXAM_YEAR, 4, 4); // May 4
  const diff = neetDate.getTime() - now.getTime();
  return Math.max(0, Math.round(diff / (1000 * 60 * 60 * 24 * 30.44)));
})();

/* ─── Convenience label strings ─── */

export const JEE_YEAR = `JEE ${CURRENT_EXAM_YEAR}`;
export const NEET_YEAR = `NEET ${CURRENT_EXAM_YEAR}`;

export const JEE_1Y = `JEE Target ${ONE_YEAR_TARGET}`;
export const JEE_2Y = `JEE Main Target ${TWO_YEAR_TARGET}`;
export const NEET_1Y = `NEET Target ${ONE_YEAR_TARGET}`;
export const NEET_2Y = `NEET Target ${TWO_YEAR_TARGET}`;

/**
 * Returns the current exam year for a given exam type.
 * Replaces the older `getCurrentExamYear()` in contentFreshness.ts.
 */
export function getExamYear(exam: 'JEE' | 'NEET' = 'JEE'): string {
  return `${exam} ${CURRENT_EXAM_YEAR}`;
}

/**
 * Returns a target year label for course names.
 * @param duration '1-year' | '2-year'
 * @param exam 'JEE' | 'NEET'
 */
export function getCourseTargetYear(
  duration: '1-year' | '2-year',
  exam: 'JEE' | 'NEET' = 'JEE',
): string {
  const year = duration === '2-year' ? TWO_YEAR_TARGET : ONE_YEAR_TARGET;
  return `${exam} Target ${year}`;
}
