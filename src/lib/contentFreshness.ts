/**
 * Content Freshness Utility
 * Auto-updates "Last Updated" dates on all pages monthly,
 * signaling freshness to Google without manual work.
 */

const BASE_DATE = new Date('2026-02-18');

/**
 * Returns a YYYY-MM-DD string that auto-updates on the 1st of every month.
 * The date always represents the 18th of the current month (or baseDate
 * if the current month IS the base month).
 */
export function getLastUpdated(pageSlug: string): string {
  const now = new Date();

  // Calculate months elapsed since the base date
  const monthsSince =
    (now.getFullYear() - BASE_DATE.getFullYear()) * 12 +
    (now.getMonth() - BASE_DATE.getMonth());

  if (monthsSince <= 0) {
    return BASE_DATE.toISOString().split('T')[0]; // still in base month
  }

  const lastUpdated = new Date(BASE_DATE);
  lastUpdated.setMonth(lastUpdated.getMonth() + monthsSince);

  return lastUpdated.toISOString().split('T')[0]; // YYYY-MM-DD
}

/**
 * Returns the year label for current exam cycle.
 * Delegates to the centralised examYears utility so the entire
 * site stays in sync.
 */
export { getExamYear as getCurrentExamYear } from './examYears';

/**
 * Only show the freshness signal on content-heavy SEO pages.
 */
export function shouldShowFreshnessSignal(pageSlug: string): boolean {
  const contentPages = [
    'jee-coaching',
    'neet-coaching',
    'blog',
    'location',
    'subject',
    'chapter',
    'topic',
    'comparison',
    'formula',
    'rank-predictor',
    'kota-alternative',
    'online-vs-offline',
  ];

  return contentPages.some((page) => pageSlug.includes(page));
}
