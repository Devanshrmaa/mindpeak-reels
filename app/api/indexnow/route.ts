/**
 * On-demand IndexNow submission API route.
 * ────────────────────────────────────────
 * A thin HTTP wrapper over src/lib/indexNow.ts so URLs can be pushed to Bing
 * instantly from anywhere (a deploy hook, a CMS webhook, a manual curl) —
 * not just the standalone scripts/indexnow-ping.mjs.
 *
 *   GET  /api/indexnow?secret=SECRET&url=/blog/my-post
 *   POST /api/indexnow?secret=SECRET       body: { "urls": ["/a", "/b"] }
 *
 * Auth reuses REVALIDATION_SECRET so there is one operational secret, not two.
 * Absolute URLs or site-relative paths are both accepted; foreign/invalid
 * entries are dropped by the lib.
 */
import { NextRequest, NextResponse } from 'next/server';
import { submitToIndexNow, INDEXNOW_KEY_LOCATION } from '@/lib/indexNow';

const REVALIDATION_SECRET = process.env.REVALIDATION_SECRET || 'mindpeak-revalidate-2026';

function authorised(req: NextRequest): boolean {
  return req.nextUrl.searchParams.get('secret') === REVALIDATION_SECRET;
}

export async function GET(req: NextRequest) {
  if (!authorised(req)) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }
  const urls = req.nextUrl.searchParams.getAll('url');
  if (urls.length === 0) {
    return NextResponse.json(
      { message: 'Provide at least one ?url= parameter', keyLocation: INDEXNOW_KEY_LOCATION },
      { status: 400 },
    );
  }
  const result = await submitToIndexNow(urls);
  return NextResponse.json(result, { status: result.ok ? 200 : 502 });
}

export async function POST(req: NextRequest) {
  if (!authorised(req)) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  let urls: string[] = [];
  try {
    const body = await req.json();
    if (Array.isArray(body?.urls)) urls = body.urls;
    else if (typeof body?.url === 'string') urls = [body.url];
  } catch {
    // fall through to the query-param fallback below
  }
  if (urls.length === 0) urls = req.nextUrl.searchParams.getAll('url');

  if (urls.length === 0) {
    return NextResponse.json(
      { message: 'Provide a JSON body { "urls": [...] } or ?url= params' },
      { status: 400 },
    );
  }

  const result = await submitToIndexNow(urls);
  return NextResponse.json(result, { status: result.ok ? 200 : 502 });
}
