/**
 * Bing sitemap index: /bing-sitemap.xml
 * ─────────────────────────────────────
 * A single sitemap URL to submit in **Bing Webmaster Tools** that covers
 * EVERYTHING we want Bing to index:
 *   1. /sitemap.xml      — the curated, high-quality pages (shared with Google)
 *   2. /bing-pages.xml   — the Bing-exclusive thin pages (questions +
 *                          location/expansion cities) that are kept out of
 *                          Google but indexable by Bing.
 *
 * ⚠️  DO NOT add this file (or bing-pages.xml) to robots.txt or sitemap.xml.
 *     It must stay invisible to Googlebot. Submit it ONLY via Bing Webmaster
 *     Tools (Sitemaps → Submit sitemap → https://mindpeakinstitute.com/bing-sitemap.xml).
 *
 * Background: Google's March 2026 Spam Update penalised the site's scaled
 * thin content, so those pages are noindexed for Google. Bing rewards index
 * breadth and has not penalised them — proxy.ts serves them `index` to
 * Bingbot and `noindex` to everyone else (see src/lib/bingIndexing.ts).
 */

import { NextResponse } from 'next/server';

const BASE = 'https://mindpeakinstitute.com';

export async function GET() {
  const lastmod = new Date().toISOString().slice(0, 10);

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<!-- MindPeak Institute — Bing sitemap index — submit ONLY via Bing Webmaster Tools -->',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    `  <sitemap>\n    <loc>${BASE}/sitemap.xml</loc>\n    <lastmod>${lastmod}</lastmod>\n  </sitemap>`,
    `  <sitemap>\n    <loc>${BASE}/bing-pages.xml</loc>\n    <lastmod>${lastmod}</lastmod>\n  </sitemap>`,
    '</sitemapindex>',
  ].join('\n');

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
    },
  });
}
