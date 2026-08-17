/**
 * Child sitemap: chapter hub pages (absorb topics, notes, study guides).
 * See src/lib/sitemapUrls.ts.
 */

import { NextResponse } from 'next/server';
import { SITEMAP_HEADERS, getChapterPaths, getQuestionHubPaths, stableLastmod, urlEntry, wrapUrlset } from '@/lib/sitemapUrls';

export async function GET() {
  const entries = [
    ...getChapterPaths().map((p) => urlEntry(p, '0.70', 'monthly', stableLastmod(p))),
    // Question chapter hubs — substantive aggregations that were previously
    // orphaned from every sitemap (see getQuestionHubPaths).
    ...getQuestionHubPaths().map((p) => urlEntry(p, '0.65', 'monthly', stableLastmod(p))),
  ];
  return new NextResponse(
    wrapUrlset(`Chapter hubs — ${entries.length} URLs`, entries),
    { headers: SITEMAP_HEADERS },
  );
}
