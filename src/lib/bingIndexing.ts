/**
 * Bing-exclusive indexing policy — single source of truth.
 * ────────────────────────────────────────────────────────
 * Context: after the March 2026 Google Spam Update, the thin pages
 * (individual practice/PYQ questions + auto-generated location/expansion
 * city pages) were noindexed to recover Google rankings. Bing, however,
 * rewards index breadth and has not penalised these pages — so we want
 * Bing to index them while keeping them OUT of Google.
 *
 * The catch-all route is ISR-cached (`revalidate = 86400`) and the cached
 * HTML is identical for every crawler, so a per-bot `<meta robots>` tag is
 * impossible. The only reliable per-bot lever is the HTTP `X-Robots-Tag`
 * header, which `proxy.ts` sets per request (Node runtime, sees the UA).
 *
 * Therefore, for the families below:
 *   • the rendered HTML carries NO `<meta robots>` (indexable by default), and
 *   • `proxy.ts` is the SOLE robots authority:
 *       - Bingbot family → `X-Robots-Tag: index, follow`
 *       - everyone else (incl. Googlebot) → `X-Robots-Tag: noindex, follow`
 *
 * CRITICAL: `isBingExclusiveThinPage` MUST stay in lock-step with the
 * noindex branches of `resolveSlugMetadata.ts`. Both use the SAME parser
 * functions, so a slug is classified identically in the HTML layer and the
 * header layer — Google's noindex can never silently leak to a real page,
 * and an indexable page can never be wrongly noindexed.
 *
 * This sitemap is submitted ONLY via Bing Webmaster Tools — it is NEVER
 * referenced from robots.txt or sitemap.xml, so Googlebot has no reason to
 * discover it. (Even if it did: these URLs serve `X-Robots-Tag: noindex` to
 * Googlebot, so accidental discovery is harmless.)
 */

import { isDoorwayCoachingSlug } from '@/lib/indexableCities';
import { isRemovedDoorwaySlug } from '@/lib/removedSlugs';
import { isRemovedBlogDoorwaySlug } from '@/lib/removedBlogDoorways';
import { getSubjectCityRedirect, getCityConsolidation } from '@/data/cityConsolidation';
import { parsePracticeSlug, buildAllPracticeSlugs } from '@/data/practice';
import { parsePYQSlug, buildAllPYQSlugs } from '@/data/pyq';
import { parseNEETPracticeSlug, buildAllNEETPracticeSlugs } from '@/data/neet-practice';
import { parseNEETPYQSlug, buildAllNEETPYQSlugs } from '@/data/neet-pyq';
import { parseNEETPYQHubSlug } from '@/data/neet-pyq/hierarchy';
import { getLocationRoutes } from '@/data/cityData';

/**
 * Bing's crawler family. Tokens are matched case-insensitively against the
 * User-Agent string. We fail SAFE: only an explicit Bing UA flips a page to
 * `index` — every other (and unknown) UA keeps the page noindexed.
 *
 *   bingbot      — main web crawler
 *   bingpreview  — page-snapshot fetcher
 *   msnbot       — legacy Bing crawler (still seen)
 *   adidxbot     — Bing Ads crawler
 */
const BING_UA_RE = /bingbot|bingpreview|msnbot|adidxbot/i;

export function isBingbot(userAgent: string | null | undefined): boolean {
  return !!userAgent && BING_UA_RE.test(userAgent);
}

const stripSlashes = (slug: string): string => slug.replace(/^\/+|\/+$/g, '');

/**
 * Is this slug a thin page we want indexed on Bing but NOT on Google?
 *
 * Returns true ONLY for pages that are currently served HTTP 200 with a
 * `noindex` directive (individual question pages + non-curated location
 * city pages). Pages that are redirected (301/308) or gone (410) are
 * excluded — a sitemap entry cannot un-redirect or un-410 them, and serving
 * `index` to Bing on a redirect is meaningless.
 */
export function isBingExclusiveThinPage(rawSlug: string): boolean {
  const slug = stripSlashes(rawSlug);
  if (!slug) return false;

  /* ── Individual question pages (HTTP 200, meta-noindexed today) ── */
  // Mirrors resolveSlugMetadata's question branches exactly.
  if (slug.startsWith('jee-pyq-')) return !!parsePYQSlug(slug);
  if (slug.startsWith('neet-pyq-')) {
    // PYQ hub pages (class / unit / chapter) are indexable for ALL bots —
    // never flip them. Only leaf question slugs are thin.
    if (parseNEETPYQHubSlug(slug)) return false;
    return !!parseNEETPYQSlug(slug);
  }
  if (/^jee-(physics|chemistry|mathematics)-/.test(slug)) return !!parsePracticeSlug(slug);
  if (/^neet-(biology|physics|chemistry)-/.test(slug)) return !!parseNEETPracticeSlug(slug);

  /* ── Location / expansion city doorway pages (HTTP 200, noindexed today) ── */
  if (slug.includes('coaching-in-')) {
    // Mirror proxy.ts precedence: anything redirected/gone earlier is NOT a
    // 200 page, so it is not a flip candidate.
    if (getSubjectCityRedirect(slug)) return false;
    const con = getCityConsolidation(slug);
    if (con && (con.action === '301' || con.action === '410')) return false;
    if (isRemovedDoorwaySlug(slug)) return false;
    if (isRemovedBlogDoorwaySlug(slug)) return false;
    // `isDoorwayCoachingSlug` already excludes curated T1 cities, the national
    // flagship pages, and indexable state hubs.
    return isDoorwayCoachingSlug(slug);
  }

  return false;
}

/**
 * Every URL (path, leading slash) eligible for Bing-exclusive indexing.
 * Used to build bing-pages.xml. Each candidate is re-checked through
 * `isBingExclusiveThinPage` so the sitemap can never list a URL that
 * proxy.ts would actually serve as noindex-to-Bing.
 */
export function getBingExclusiveUrls(): string[] {
  const urls: string[] = [];

  const pushQuestionSlugs = (entries: { slug: string }[]) => {
    for (const { slug } of entries) {
      if (isBingExclusiveThinPage(slug)) urls.push(`/${slug}`);
    }
  };

  pushQuestionSlugs(buildAllPracticeSlugs());
  pushQuestionSlugs(buildAllPYQSlugs());
  pushQuestionSlugs(buildAllNEETPracticeSlugs());
  pushQuestionSlugs(buildAllNEETPYQSlugs());

  // Location / expansion city pages that are genuinely served HTTP 200.
  for (const { path } of getLocationRoutes()) {
    if (isBingExclusiveThinPage(path)) urls.push(path);
  }

  // Dedupe defensively (parsers/location routes should not overlap).
  return [...new Set(urls)];
}
