/**
 * Exam Year Auto-Update Utility
 * ─────────────────────────────
 * Computes target years dynamically so the entire site stays current
 * without manual edits. All year references across the codebase
 * should import from here instead of hardcoding.
 *
 * Logic:
 * - JEE Main Session 1: ~Jan 20, Session 2: ~Apr 15, JEE Advanced: ~May 24-25.
 * - NEET UG: ~May 3-4.
 * - Once JEE Advanced is over (~May 25), the "current" exam cycle is
 *   considered done and everything rolls forward to the next cycle.
 *
 * Example (late May 2026 onwards):
 *   CURRENT_EXAM_YEAR = 2027  (next upcoming exam)
 *   ONE_YEAR_TARGET   = 2028  (1-year intensive courses)
 *   TWO_YEAR_TARGET   = 2029  (2-year foundation courses)
 *
 * Example (Jan–May 2027):
 *   CURRENT_EXAM_YEAR = 2027  (exams happening this cycle)
 *   ONE_YEAR_TARGET   = 2028
 *   TWO_YEAR_TARGET   = 2029
 */

const now = new Date();
const calendarYear = now.getFullYear();

/**
 * After April (month index >= 4, i.e. May onwards), JEE Main Sessions 1 & 2
 * and NEET UG have all happened — students enrolling now target the NEXT
 * year's exam cycle. (JEE Advanced for the current year may still be pending,
 * but new students cannot sit for it without prior registration.)
 */
const rollover = now.getMonth() >= 4;

/** The next upcoming exam year (JEE / NEET) students are currently targeting. */
export const CURRENT_EXAM_YEAR = rollover ? calendarYear + 1 : calendarYear;

/** Target year for 1-year intensive courses. */
export const ONE_YEAR_TARGET = CURRENT_EXAM_YEAR + 1;

/** Target year for 2-year foundation courses. */
export const TWO_YEAR_TARGET = CURRENT_EXAM_YEAR + 2;

const MS_PER_MONTH = 1000 * 60 * 60 * 24 * 30.44;

/** Months remaining from today until JEE Main Session 1 (Jan 20) of the given year. */
export function getMonthsUntilJee(year: number): number {
  const jeeDate = new Date(year, 0, 20);
  return Math.max(0, Math.round((jeeDate.getTime() - now.getTime()) / MS_PER_MONTH));
}

/** Months remaining from today until NEET UG (May 4) of the given year. */
export function getMonthsUntilNeet(year: number): number {
  const neetDate = new Date(year, 4, 4);
  return Math.max(0, Math.round((neetDate.getTime() - now.getTime()) / MS_PER_MONTH));
}

/** Months remaining until the next JEE Main Session 1 (CURRENT_EXAM_YEAR). */
export const MONTHS_TO_JEE = getMonthsUntilJee(CURRENT_EXAM_YEAR);

/** Months remaining until the next NEET UG (CURRENT_EXAM_YEAR). */
export const MONTHS_TO_NEET = getMonthsUntilNeet(CURRENT_EXAM_YEAR);

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

/**
 * Extracts the 4-digit target year from a course slug like
 * `jee-target-2028`, `jee-main-target-2029`, or `neet-target-2028`.
 * Returns null if the slug carries no year.
 */
export function getCourseYearFromSlug(slug: string): number | null {
  const match = slug.match(/(\d{4})$/);
  if (!match) return null;
  const y = parseInt(match[1], 10);
  return Number.isFinite(y) ? y : null;
}

/**
 * Returns months remaining until the target exam encoded in a course slug.
 * JEE slugs target Jan; NEET slugs target May. Returns null for slugs
 * without a year (e.g. crash courses, foundation, BITSAT, ISI, Olympiad).
 */
export function getMonthsToCourseTarget(slug: string): number | null {
  const year = getCourseYearFromSlug(slug);
  if (year === null) return null;
  if (slug.startsWith('neet-')) return getMonthsUntilNeet(year);
  if (slug.startsWith('jee-')) return getMonthsUntilJee(year);
  return null;
}
