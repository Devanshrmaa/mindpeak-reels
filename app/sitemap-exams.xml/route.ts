/**
 * Child sitemap: exam-info reference pages (syllabus, cutoff, eligibility,
 * dates) and difference-between concept pages. See src/lib/sitemapUrls.ts.
 */

import { NextResponse } from 'next/server';
import {
  SITEMAP_HEADERS, getDifferencePaths, getExamInfoPaths,
  stableLastmod, urlEntry, wrapUrlset,
} from '@/lib/sitemapUrls';

export async function GET() {
  const entries: string[] = [
    ...getExamInfoPaths().map((p) => urlEntry(p, '0.75', 'weekly', stableLastmod(p))),
    ...getDifferencePaths().map((p) => urlEntry(p, '0.60', 'monthly', stableLastmod(p))),
  ];
  return new NextResponse(
    wrapUrlset(`Exam reference — ${entries.length} URLs`, entries),
    { headers: SITEMAP_HEADERS },
  );
}
