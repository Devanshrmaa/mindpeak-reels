import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { REMOVED_DOORWAY_SLUGS } from '@/lib/removedSlugs';
import { isRemovedBlogDoorwaySlug } from '@/lib/removedBlogDoorways';
import { isBingExclusiveThinPage, isBingbot } from '@/lib/bingIndexing';
import { getCityConsolidation, getSubjectCityRedirect } from '@/data/cityConsolidation';
import { allTopics, TOPIC_PATHS, CHAPTER_SLUGS } from '@/data/chapterData';
import { CURRENT_EXAM_YEAR } from '@/lib/examYears';

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

/* Chapter-consolidation lookup sets (topic sub-pages + notes → parent chapter). */
const TOPIC_PATH_SET = new Set(TOPIC_PATHS);
const CHAPTER_SLUG_SET = new Set(CHAPTER_SLUGS);

/* Month-stamped auto-blog slugs (e.g. formula-memorization-june-2026) keep
   their original month+year and must not be year-rolled. */
const MONTH_SUFFIX_RE =
  /-(january|february|march|april|may|june|july|august|september|october|november|december)$/;

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

  // 3b. Killed programmatic blog doorways (best-{exam}-coaching-in-{city},
  //     cost-of-prep-in-{city}, kota-worth-it-from-{city}, ncert-analysis).
  //     Their generators return [] but the route streamed an HTTP 200
  //     soft-404 shell, so ~650 of them are still indexed → hard 410.
  if (isRemovedBlogDoorwaySlug(slug)) {
    return gone();
  }

  // 3c. Exam-year slug rollover: year-suffixed blog guides regenerate under
  //     the next CURRENT_EXAM_YEAR slug every May (…-comparison-2026 →
  //     …-comparison-2027), which left the old URLs as 404s and stranded
  //     their accrued rankings (GSC: "cuet vs jee" pos 2, "is kcet easier
  //     than jee" pos 4, "aiims delhi cut off" pos 10 — all landing on the
  //     dead -2026 slugs). 301 any stale trailing-year blog slug to its
  //     current-year equivalent. Month-stamped auto posts (…-june-2026)
  //     don't roll over and are excluded; killed doorway families never
  //     reach here (410'd in 3b above).
  const staleYear = slug.match(/^blog\/(.+)-(20\d{2})$/);
  if (
    staleYear &&
    Number(staleYear[2]) !== CURRENT_EXAM_YEAR &&
    !MONTH_SUFFIX_RE.test(staleYear[1])
  ) {
    return NextResponse.redirect(
      new URL(`/blog/${staleYear[1]}-${CURRENT_EXAM_YEAR}`, request.url),
      301,
    );
  }

  // 4. Bing-exclusive thin pages → robots authority lives HERE, per-UA.
  //    Covers BOTH the remaining doorway coaching pages (cities without a hub
  //    yet) AND individual practice/PYQ question pages. These are served
  //    HTTP 200 and carry NO `<meta robots>` in the (ISR-cached, bot-agnostic)
  //    HTML, so this header is the SOLE robots directive:
  //      • Bingbot family → index  (Bing rewards index breadth; not penalised)
  //      • everyone else (incl. Googlebot) → noindex  (Spam-Update recovery)
  //    Using the same classifier as resolveSlugMetadata guarantees Google's
  //    noindex can never leak to a real page.
  if (isBingExclusiveThinPage(slug)) {
    const res = NextResponse.next();
    res.headers.set(
      'X-Robots-Tag',
      isBingbot(request.headers.get('user-agent')) ? 'index, follow' : 'noindex, follow',
    );
    return res;
  }

  // 5. Chapter consolidation: topic sub-pages, /notes, and how-to-study
  //    guides 301 to their parent chapter. app/[...slug]/page.tsx has the
  //    same redirects, but production was observed serving prerendered
  //    HTTP 200 topic pages (index,follow) despite them — 1,184 thin
  //    template pages, the exact scaled-content pattern behind the March
  //    penalty. Middleware runs before the prerender cache, so the 301 is
  //    unconditional.
  const parts = slug.split('/');
  if (
    parts.length === 2 &&
    CHAPTER_SLUG_SET.has(parts[0]) &&
    (parts[1] === 'notes' || TOPIC_PATH_SET.has(slug))
  ) {
    return NextResponse.redirect(new URL(`/${parts[0]}`, request.url), 301);
  }
  if (slug.startsWith('how-to-study-')) {
    const m = slug.match(/^how-to-study-(.+)-for-(jee|neet)$/);
    const topic = m
      ? allTopics.find(
          (t) => t.topicSlug === m[1] && t.chapter.exam.toLowerCase() === m[2],
        )
      : null;
    if (topic) {
      return NextResponse.redirect(new URL(`/${topic.chapter.slug}`, request.url), 301);
    }
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
