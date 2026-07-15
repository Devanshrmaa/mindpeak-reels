/**
 * Sitemap INDEX: /sitemap.xml
 * ────────────────────────────
 * Points at four segmented child sitemaps (core / chapters / blog / exams)
 * so GSC reports indexing coverage per content type — the structure large
 * ed-tech sites use. URL groups and the lastmod policy live in
 * src/lib/sitemapUrls.ts (single source of truth for indexable URLs).
 */

import { NextResponse } from 'next/server';
import { BASE, CONTENT_ANCHOR, SITEMAP_HEADERS } from '@/lib/sitemapUrls';

const CHILDREN = [
  'sitemap-core.xml',
  'sitemap-chapters.xml',
  'sitemap-blog.xml',
  'sitemap-exams.xml',
];

export async function GET() {
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    `<!-- MindPeak Institute — Sitemap index v7 — content anchor ${CONTENT_ANCHOR} -->`,
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...CHILDREN.map(
      (c) => `  <sitemap>\n    <loc>${BASE}/${c}</loc>\n    <lastmod>${CONTENT_ANCHOR}</lastmod>\n  </sitemap>`,
    ),
    '</sitemapindex>',
  ].join('\n');

  return new NextResponse(xml, { headers: SITEMAP_HEADERS });
}
