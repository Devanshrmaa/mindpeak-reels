/**
 * Bing-exclusive URL set: /bing-pages.xml
 * ───────────────────────────────────────
 * The Bing-exclusive thin pages (individual practice/PYQ questions + auto-generated
 * location/expansion city pages) that we expose to Bing but keep OUT of
 * Google. See src/lib/bingIndexing.ts for the policy and the per-UA
 * `X-Robots-Tag` enforcement in proxy.ts.
 *
 * Referenced ONLY by the bing-sitemap.xml index, which is submitted ONLY via
 * Bing Webmaster Tools. It is deliberately NOT listed in robots.txt or
 * sitemap.xml so Googlebot has no reason to discover it. (Even if Googlebot
 * fetched these URLs, proxy.ts serves them `X-Robots-Tag: noindex` to
 * non-Bing crawlers, so it is harmless.)
 */

import { NextResponse } from 'next/server';
import { getBingExclusiveUrls } from '@/lib/bingIndexing';

const BASE = 'https://mindpeakinstitute.com';

/** Deterministic lastmod spread over the last 21 days (stable per slug). */
function staggeredLastmod(slug: string, today: Date): string {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = ((hash << 5) - hash + slug.charCodeAt(i)) | 0;
  }
  const daysAgo = Math.abs(hash) % 21;
  const d = new Date(today);
  d.setDate(d.getDate() - daysAgo);
  return d.toISOString().slice(0, 10);
}

export async function GET() {
  const now = new Date();
  const urls = getBingExclusiveUrls();

  const lines: string[] = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    `<!-- MindPeak Institute — Bing-exclusive pages — ${urls.length} URLs — Generated ${now.toISOString().slice(0, 10)} -->`,
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ];

  for (const path of urls) {
    lines.push(
      `  <url>\n    <loc>${BASE}${path}</loc>\n    <lastmod>${staggeredLastmod(path, now)}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.50</priority>\n  </url>`,
    );
  }

  lines.push('</urlset>');

  return new NextResponse(lines.join('\n'), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
    },
  });
}
