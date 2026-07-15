/**
 * Child sitemap: curated blog posts (kept generators) + live exam-event
 * posts. Blog indexability contract: a post is indexable iff listed here
 * (src/lib/indexableBlogSlugs.ts enforces the noindex side).
 */

import { NextResponse } from 'next/server';
import {
  SITEMAP_HEADERS, getExamEventBlogPaths, getKeptBlogPaths,
  stableLastmod, urlEntry, wrapUrlset,
} from '@/lib/sitemapUrls';

export async function GET() {
  const TODAY = new Date().toISOString().slice(0, 10);
  const entries: string[] = [
    ...getKeptBlogPaths().map((p) => urlEntry(p, '0.60', 'weekly', stableLastmod(p))),
    // Exam-event posts are genuinely time-gated → today's date is truthful.
    ...getExamEventBlogPaths().map((p) => urlEntry(p, '0.80', 'daily', TODAY)),
  ];
  return new NextResponse(
    wrapUrlset(`Blog — ${entries.length} URLs`, entries),
    { headers: SITEMAP_HEADERS },
  );
}
