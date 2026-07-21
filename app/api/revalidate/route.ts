/**
 * On-demand revalidation API route.
 * Call POST /api/revalidate?secret=YOUR_SECRET&path=/blog/my-post
 * to purge the ISR cache for a specific path.
 *
 * After revalidating, the same path is pushed to Bing via IndexNow so a
 * freshly published/updated page is recrawled within minutes instead of
 * waiting for the next natural crawl. Opt out per-call with &indexnow=0.
 * The IndexNow ping is best-effort and never fails the revalidation.
 */
import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';
import { submitToIndexNow } from '@/lib/indexNow';

const REVALIDATION_SECRET = process.env.REVALIDATION_SECRET || 'mindpeak-revalidate-2026';

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret');
  if (secret !== REVALIDATION_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  const path = req.nextUrl.searchParams.get('path') || '/';
  revalidatePath(path);

  // Notify Bing of the change (best-effort). Skipped for the catch-all
  // default path and any unexpanded route pattern (submitToIndexNow drops
  // those anyway); disable explicitly with &indexnow=0.
  let indexnow: Awaited<ReturnType<typeof submitToIndexNow>> | null = null;
  if (req.nextUrl.searchParams.get('indexnow') !== '0') {
    indexnow = await submitToIndexNow(path);
  }

  return NextResponse.json({ revalidated: true, path, indexnow, now: Date.now() });
}
