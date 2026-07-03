/**
 * Stable sitemap `lastmod` dates — never roll per crawl.
 * ──────────────────────────────────────────────────────
 * The sitemap routes previously derived every `lastmod` from *today*
 * (`today` for static pages, `today − hash % N` for the long tail), so all
 * ~583 URLs claimed modification within the last 14 days, advancing on every
 * fetch. Google treats persistently inaccurate lastmod as noise and stops
 * trusting the field entirely — and a site in spam-penalty recovery cannot
 * afford a freshness-manipulation signal. This mirrors the fix already made
 * for blog `datePublished` in src/lib/blogQuality.ts (stablePublishDate):
 * deterministic dates in a FIXED window that never move on their own.
 *
 * Bump the constants below ONLY when content genuinely changes:
 *  - STATIC_LASTMOD: sitewide/static pages — bump on real sitewide releases
 *    (design refresh, template change, copy overhaul).
 *  - LASTMOD_WINDOW_START: the long-tail spread — bump when the catalogue
 *    (chapters, blog posts, exam info) is genuinely refreshed.
 */

/** Last real sitewide change: 2026-07-03 (dark mode + liquid-glass design refresh). */
export const STATIC_LASTMOD = '2026-07-03';

const LASTMOD_WINDOW_START = '2026-05-01';
const LASTMOD_WINDOW_DAYS = 60; // spread ends ≈ 2026-06-29

/**
 * Deterministic, FIXED lastmod for long-tail pages: hash the slug into a
 * 60-day window anchored at LASTMOD_WINDOW_START. Same slug → same date,
 * on every crawl, until the window constant is deliberately bumped.
 */
export function stableLastmod(slug: string): string {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = ((hash << 5) - hash + slug.charCodeAt(i)) | 0;
  }
  const d = new Date(LASTMOD_WINDOW_START);
  d.setDate(d.getDate() + (Math.abs(hash) % LASTMOD_WINDOW_DAYS));
  return d.toISOString().slice(0, 10);
}
