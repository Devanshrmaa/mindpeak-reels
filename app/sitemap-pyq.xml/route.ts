/**
 * Child sitemap: NEET PYQ hub pages (unit + class + enriched chapter hubs).
 * Tranched promotion of previously-orphaned indexable hubs — see
 * getNeetPyqHubPaths in src/lib/sitemapUrls.ts.
 */

import { NextResponse } from 'next/server';
import { SITEMAP_HEADERS, getNeetPyqHubPaths, stableLastmod, urlEntry, wrapUrlset } from '@/lib/sitemapUrls';

export async function GET() {
  const entries = getNeetPyqHubPaths().map((p) => urlEntry(p, '0.60', 'monthly', stableLastmod(p)));
  return new NextResponse(
    wrapUrlset(`NEET PYQ hubs — ${entries.length} URLs`, entries),
    { headers: SITEMAP_HEADERS },
  );
}
