import { getSEOPage } from '@/data/seoPageData';
import type { Metadata } from 'next';

/**
 * Build Next.js Metadata for an SEO landing page using seoPageData.
 * Usage:  export const metadata: Metadata = buildSEOLandingMetadata('jee-advanced-coaching');
 */
export function buildSEOLandingMetadata(slug: string): Metadata {
  const page = getSEOPage(slug);
  if (!page) {
    return { title: slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) };
  }
  const url = `https://mindpeakinstitute.com/${slug}`;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: 'MindPeak Institute',
      type: 'website',
    },
  };
}
