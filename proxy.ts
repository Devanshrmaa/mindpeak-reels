import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { REMOVED_DOORWAY_SLUGS } from '@/lib/removedSlugs';
import { isDoorwayCoachingSlug } from '@/lib/indexableCities';
import { getCityConsolidation, getSubjectCityRedirect } from '@/data/cityConsolidation';

/**
 * Request proxy (Next.js 16 `proxy.ts` convention — formerly middleware).
 *
 * Two jobs, both serving the March 2026 Spam Update recovery:
 *
 * 1. HTTP 410 Gone for the confirmed-indexed doorway URLs flagged in the
 *    weekly indexing reports. 410 is processed by Google noticeably faster
 *    than 404 — it signals the URL is permanently retired.
 *
 * 2. HTTP `X-Robots-Tag: noindex, follow` for EVERY remaining doorway
 *    `coaching-in-` page (the ~472 expansion cities + subject-city combos
 *    that are not curated T1 cities). Previously these carried only a
 *    `<meta robots noindex>` in the rendered HTML, which Google can act on
 *    only after fetching AND rendering the page — something that has not
 *    happened at scale under penalty crawl-throttling. Emitting the
 *    directive as an HTTP header lets Google honour it on a plain crawl,
 *    no render required, and drops the conflicting `index, follow` header
 *    that next.config.ts previously sent site-wide.
 *
 * The proxy runs on the Node.js runtime (the only runtime `proxy.ts`
 * supports in Next 16).
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

function gone() {
  return new NextResponse(GONE_BODY, {
    status: 410,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'X-Robots-Tag': 'noindex, nofollow',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}

export function proxy(request: NextRequest) {
  const slug = request.nextUrl.pathname.replace(/^\/+|\/+$/g, '');

  // 1. Subject-city doorways (e.g. /jee-physics-coaching-in-jaipur) →
  //    301 to the genuine subject-intent page.
  const subjectTarget = getSubjectCityRedirect(slug);
  if (subjectTarget) {
    return NextResponse.redirect(new URL(subjectTarget, request.url), 301);
  }

  // 2. City consolidation: 301 into a live regional hub / metro keeper,
  //    410 foreign cities, or 'keep' (indexable hub/keeper → fall through).
  const con = getCityConsolidation(slug);
  if (con) {
    if (con.action === '301') {
      return NextResponse.redirect(new URL(con.target, request.url), 301);
    }
    if (con.action === '410') {
      return gone();
    }
    // 'keep' → fall through to NextResponse.next() (indexable)
  }

  // 3. Confirmed-dead doorways not covered above → 410 Gone.
  if (REMOVED_DOORWAY_SLUGS.has(slug)) {
    return gone();
  }

  // 4. Remaining doorway coaching pages (e.g. cities in states without a hub
  //    yet) → header-level noindex so Google can drop them without rendering.
  if (isDoorwayCoachingSlug(slug)) {
    const res = NextResponse.next();
    res.headers.set('X-Robots-Tag', 'noindex, follow');
    return res;
  }

  return NextResponse.next();
}

export const config = {
  /*
   * Run on content routes only — skip Next internals, API routes, and any
   * path with a file extension (static assets). Doorway URLs are all
   * single-segment `…coaching-in-<city>` slugs, so this matcher covers
   * them while keeping per-request overhead to a couple of string checks.
   */
  matcher: ['/((?!_next/|api/|.*\\.).*)'],
};
