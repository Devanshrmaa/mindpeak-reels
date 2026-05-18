/**
 * Doorway-page URLs flagged in the 2026-05-18 indexing health report.
 * All 18 entries were confirmed indexed despite the noindex meta tag
 * applied on April 8 — 40+ days without recrawl under penalty throttling.
 *
 * Serving HTTP 410 Gone (via middleware) tells Google to drop these URLs
 * from the index on next crawl. This is significantly stronger than
 * noindex alone, which Google can only honour after re-fetching the page.
 *
 * Source: seo-reports/indexing-2026-05-18.md, Appendix A.
 */
export const REMOVED_DOORWAY_SLUGS: ReadonlySet<string> = new Set([
  /* Week 1 baseline — 6 pages, still indexed after 7 days */
  'neet-coaching-in-guwahati',
  'neet-coaching-in-chandigarh',
  'jee-coaching-in-bahrain',
  'neet-coaching-in-indirapuram',
  'jee-coaching-in-srinagar',
  'jee-physics-coaching-in-davanagere',

  /* Week 2 newly surfaced — 12 pages */
  'jee-chemistry-coaching-in-kottayam',
  'jee-mathematics-coaching-in-karnal',
  'neet-chemistry-coaching-in-bhagalpur',
  'neet-coaching-in-dehradun',
  'jee-coaching-in-dharamshala',
  'jee-coaching-in-janakpuri',
  'jee-coaching-in-rampur',
  'jee-coaching-in-hisar',
  'jee-coaching-in-katihar',
  'jee-physics-coaching-in-dharamshala',
  'neet-physics-coaching-in-hsr-layout',
  'jee-physics-coaching-in-nawada',
]);

export function isRemovedDoorwaySlug(slug: string): boolean {
  return REMOVED_DOORWAY_SLUGS.has(slug.replace(/^\/+|\/+$/g, ''));
}
