/**
 * On-demand revalidation API route.
 * Call POST /api/revalidate?secret=YOUR_SECRET&path=/blog/my-post
 * to purge the ISR cache for a specific path.
 */
import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

const REVALIDATION_SECRET = process.env.REVALIDATION_SECRET || 'mindpeak-revalidate-2026';

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret');
  if (secret !== REVALIDATION_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  const path = req.nextUrl.searchParams.get('path') || '/';
  revalidatePath(path);
  return NextResponse.json({ revalidated: true, path, now: Date.now() });
}
