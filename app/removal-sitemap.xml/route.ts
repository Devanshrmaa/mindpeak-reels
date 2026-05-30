/**
 * TEMPORARY removal sitemap: /removal-sitemap.xml
 * ───────────────────────────────────────────────
 * Lists the confirmed-indexed doorway URLs we want Google to DROP, each
 * with `lastmod` = today, to deliberately prompt a recrawl. On recrawl
 * Googlebot sees the HTTP 410 Gone (these slugs are in REMOVED_DOORWAY_SLUGS)
 * and removes them from the index.
 *
 * Why this exists (counterintuitive but explicitly recommended by Google's
 * John Mueller): to de-index pages FASTER, keep them in a sitemap with a
 * fresh `lastmod` so Google re-fetches them sooner — do NOT remove the URLs
 * from sitemaps, which only slows recrawl. See:
 * https://searchengineland.com/need-to-expedite-page-removal-in-googles-search-index-try-a-temporary-sitemap-file-310131
 *
 * This is a SHORT-LIVED file. Once the doorway URLs have dropped from the
 * index (verify in GSC / via `site:` search), delete this route and remove
 * the `Sitemap:` line for it from public/robots.txt. Do not let a sitemap of
 * dead/410 URLs live permanently.
 *
 * Source of truth: src/lib/removedSlugs.ts (the 410 set). Add newly
 * confirmed-indexed doorways there and they appear here automatically.
 */

import { NextResponse } from 'next/server';
import { REMOVED_DOORWAY_SLUGS } from '@/lib/removedSlugs';

const BASE = 'https://mindpeakinstitute.com';

export async function GET() {
  const today = new Date().toISOString().slice(0, 10);

  const urls = [...REMOVED_DOORWAY_SLUGS]
    .sort()
    .map(
      (slug) =>
        `  <url>\n    <loc>${BASE}/${slug}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.1</priority>\n  </url>`,
    );

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    `<!-- TEMPORARY removal sitemap — ${urls.length} doorway URLs flagged for de-indexing (serve HTTP 410). -->`,
    '<!-- Delete this route + its robots.txt Sitemap line once these URLs have dropped from the index. -->',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    '</urlset>',
  ].join('\n');

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      // Short cache: this is transient and we want GSC re-fetches to see updates.
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=600',
      // Belt-and-suspenders: don't let the sitemap itself get indexed.
      'X-Robots-Tag': 'noindex',
    },
  });
}
