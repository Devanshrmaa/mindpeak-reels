/**
 * Content Freshness Utility
 * Auto-updates "Last Updated" dates on all pages daily,
 * signaling freshness to Google without manual work.
 * 
 * CRITICAL: The date must NEVER be in the future.
 * It always returns TODAY's date (or a recent past date based on page slug hash).
 */

/**
 * Returns a YYYY-MM-DD string that represents today or a very recent date.
 * Uses a deterministic hash of the page slug to vary dates slightly
 * (0-6 days ago) so not all pages show the exact same date.
 * 
 * This ensures:
 * - Date is NEVER in the future
 * - Date updates daily (auto-freshness)
 * - Different pages show slightly different dates (natural variation)
 */
export function getLastUpdated(pageSlug: string): string {
  const now = new Date();
  
  // Hash the slug to get a deterministic offset (0-6 days ago)
  let hash = 0;
  for (let i = 0; i < pageSlug.length; i++) {
    hash = ((hash << 5) - hash + pageSlug.charCodeAt(i)) | 0;
  }
  const daysAgo = Math.abs(hash) % 7; // 0 to 6 days ago
  
  const date = new Date(now);
  date.setDate(date.getDate() - daysAgo);
  
  return date.toISOString().split('T')[0]; // YYYY-MM-DD
}

/**
 * Returns formatted "Month Day, Year" string for display.
 * Always returns today or a recent past date — never future.
 */
export function getFormattedLastUpdated(pageSlug: string): string {
  const dateStr = getLastUpdated(pageSlug);
  return new Date(dateStr).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Returns the year label for current exam cycle.
 */
export { getExamYear as getCurrentExamYear } from './examYears';

/**
 * Show the freshness signal on content-heavy SEO pages.
 * Expanded to cover new exam coaching pages.
 */
export function shouldShowFreshnessSignal(pageSlug: string): boolean {
  const contentPages = [
    'coaching',
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
    'practice',
    'pyq',
    'study-guide',
    'preparation',
    'crash-course',
    'dropper',
    'foundation',
    'bitsat',
    'cuet',
    'wbjee',
    'mht-cet',
    'kvpy',
    'isi',
    'comedk',
    'viteee',
    'srmjeee',
    'kcet',
    'eamcet',
    'olympiad',
  ];

  return contentPages.some((page) => pageSlug.includes(page));
}
