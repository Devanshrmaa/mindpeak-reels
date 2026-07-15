/**
 * Child sitemap: core commercial pages, comparisons, T1 cities, state hubs,
 * counselling and important-questions hubs. See src/lib/sitemapUrls.ts.
 */

import { NextResponse } from 'next/server';
import {
  BREAKING_PATHS, CITY_PATHS, IMPORTANT_Q_PATHS, SITEMAP_HEADERS,
  getComparisonPaths, getCounsellingPaths, getStateHubPaths, getStaticPaths,
  stableLastmod, urlEntry, wrapUrlset, CONTENT_ANCHOR,
} from '@/lib/sitemapUrls';

export async function GET() {
  const TODAY = new Date().toISOString().slice(0, 10);
  const entries: string[] = [
    // Breaking pages are the only genuinely time-sensitive core URLs.
    ...BREAKING_PATHS.map((p) => urlEntry(p, '0.90', 'hourly', TODAY)),
    ...getStaticPaths().map((p) => urlEntry(p, '0.80', 'weekly', CONTENT_ANCHOR)),
    ...getComparisonPaths().map((p) => urlEntry(p, '0.75', 'monthly', stableLastmod(p))),
    ...IMPORTANT_Q_PATHS.map((p) => urlEntry(p, '0.65', 'weekly', stableLastmod(p))),
    ...getCounsellingPaths().map((p) => urlEntry(p, '0.65', 'monthly', stableLastmod(p))),
    ...CITY_PATHS.map((p) => urlEntry(p, '0.85', 'monthly', stableLastmod(p))),
    ...getStateHubPaths().map((p) => urlEntry(p, '0.85', 'weekly', stableLastmod(p))),
  ];

  return new NextResponse(
    wrapUrlset(`Core pages — ${entries.length} URLs`, entries),
    { headers: SITEMAP_HEADERS },
  );
}
