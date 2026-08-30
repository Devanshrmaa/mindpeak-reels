/**
 * Child sitemap: chapter hub pages (absorb topics, notes, study guides).
 * See src/lib/sitemapUrls.ts.
 */

import { NextResponse } from 'next/server';
import { SITEMAP_HEADERS, getChapterPaths, getQuestionHubPaths, getStaticPaths, stableLastmod, uniquePaths, urlEntry, wrapUrlset } from '@/lib/sitemapUrls';

export async function GET() {
  // /sitemap-core.xml owns any path it lists, so drop those here rather than
  // advertising the same URL from two children.
  const core = new Set(getStaticPaths());
  const chapterPaths = uniquePaths(getChapterPaths(), core);
  const hubPaths = uniquePaths(getQuestionHubPaths(), [...core, ...chapterPaths]);

  const entries = [
    ...chapterPaths.map((p) => urlEntry(p, '0.70', 'monthly', stableLastmod(p))),
    // Question chapter hubs — substantive aggregations that were previously
    // orphaned from every sitemap (see getQuestionHubPaths).
    ...hubPaths.map((p) => urlEntry(p, '0.65', 'monthly', stableLastmod(p))),
  ];
  return new NextResponse(
    wrapUrlset(`Chapter hubs — ${entries.length} URLs`, entries),
    { headers: SITEMAP_HEADERS },
  );
}
