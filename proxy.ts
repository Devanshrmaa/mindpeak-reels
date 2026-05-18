import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { REMOVED_DOORWAY_SLUGS } from '@/lib/removedSlugs';

/**
 * Edge proxy: serve HTTP 410 Gone for confirmed-indexed doorway URLs
 * flagged in the weekly indexing health reports.
 *
 * 410 is processed by Google noticeably faster than 404 — it signals the
 * URL is permanently retired, which is exactly what we need for the
 * March 2026 Spam Update recovery. `X-Robots-Tag: noindex` is set as
 * belt-and-suspenders so any crawler that ignores the status still sees
 * the de-indexing intent.
 *
 * The global `X-Robots-Tag: index, follow` set in next.config.ts is
 * overridden here because we return a fresh NextResponse with explicit
 * headers.
 */
const GONE_BODY = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex, nofollow">
<title>Page removed | MindPeak Institute</title>
</head>
<body>
<h1>This page has been permanently removed</h1>
<p>The page you requested is no longer available. Explore our active offerings:</p>
<ul>
<li><a href="/">MindPeak Institute home</a></li>
<li><a href="/jee-coaching">JEE coaching</a></li>
<li><a href="/neet-coaching">NEET coaching</a></li>
<li><a href="/best-jee-coaching-in-india">Best JEE coaching in India</a></li>
</ul>
</body>
</html>`;

export function proxy(request: NextRequest) {
  const slug = request.nextUrl.pathname.replace(/^\/+|\/+$/g, '');
  if (REMOVED_DOORWAY_SLUGS.has(slug)) {
    return new NextResponse(GONE_BODY, {
      status: 410,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'X-Robots-Tag': 'noindex, nofollow',
        'Cache-Control': 'public, max-age=3600, s-maxage=86400',
      },
    });
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/neet-coaching-in-guwahati',
    '/neet-coaching-in-chandigarh',
    '/jee-coaching-in-bahrain',
    '/neet-coaching-in-indirapuram',
    '/jee-coaching-in-srinagar',
    '/jee-physics-coaching-in-davanagere',
    '/jee-chemistry-coaching-in-kottayam',
    '/jee-mathematics-coaching-in-karnal',
    '/neet-chemistry-coaching-in-bhagalpur',
    '/neet-coaching-in-dehradun',
    '/jee-coaching-in-dharamshala',
    '/jee-coaching-in-janakpuri',
    '/jee-coaching-in-rampur',
    '/jee-coaching-in-hisar',
    '/jee-coaching-in-katihar',
    '/jee-physics-coaching-in-dharamshala',
    '/neet-physics-coaching-in-hsr-layout',
    '/jee-physics-coaching-in-nawada',
  ],
};
