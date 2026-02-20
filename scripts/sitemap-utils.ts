import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

export interface Page {
  url: string;
  priority: number;
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
}

export const BASE_URL = 'https://mindpeakinstitute.com';
export const BASE_DIR = 'public';
export const TODAY = new Date().toISOString().split('T')[0];

export function getDateOffset(daysAgo: number): string {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date.toISOString().split('T')[0];
}

export function generateSitemapXML(pages: Page[], lastmod: string = TODAY): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
}

export function writeSitemap(path: string, content: string): void {
  const fullPath = join(BASE_DIR, path);
  const dir = fullPath.substring(0, fullPath.lastIndexOf('/'));

  mkdirSync(dir, { recursive: true });
  writeFileSync(fullPath, content);

  console.log(`✅ Created: ${path}`);
}
