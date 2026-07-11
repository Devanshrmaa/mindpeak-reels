/**
 * Indexable blog slugs — single source of truth.
 * ───────────────────────────────────────────────
 * A blog post is indexable if and only if it is listed in /sitemap.xml
 * (kept programmatic generators + live exam-event posts). Everything else
 * that still resolves — chapter how-to-prepare/tips/mistakes/revision
 * templates, expired monthly auto posts, unlisted static posts — is served
 * `noindex, follow`.
 *
 * Why: GSC audit 2026-07-11 found 641 resolvable posts outside the curated
 * sitemap, served HTTP 200 with indexable metadata and linked from /blog.
 * Collectively they earned 2 clicks / 442 impressions in 90 days while
 * keeping the scaled-content footprint (the March 2026 spam-update trigger)
 * visible to Google. Aligning indexability with the sitemap closes that gap.
 *
 * Lazy evaluation mirrors blogResolver: programmaticBlogs must not be pulled
 * into the module graph at import time.
 */

let _indexableSet: Set<string> | null = null;

function getIndexableBlogSlugSet(): Set<string> {
  if (!_indexableSet) {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { getKeptBlogSlugs } = require('@/lib/programmaticBlogs');
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { getAllExamEventBlogSlugs } = require('@/lib/examEventBlogs');
    _indexableSet = new Set(
      [...getKeptBlogSlugs(), ...getAllExamEventBlogSlugs()].map((s: string) =>
        s.replace(/^blog\//, ''),
      ),
    );
  }
  return _indexableSet;
}

/** True if this post slug is in the curated sitemap (and may be indexed). */
export function isIndexableBlogSlug(slug: string): boolean {
  return getIndexableBlogSlugSet().has(slug);
}
