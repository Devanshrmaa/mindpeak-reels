import { getSEOPage } from '@/data/seoPageData';
import { resolveOgImage } from '@/lib/ogImage';
import type { Metadata } from 'next';

const BASE = 'https://mindpeakinstitute.com';

/**
 * Build Next.js Metadata for an SEO landing page using seoPageData.
 * Usage:  export const metadata: Metadata = buildSEOLandingMetadata('jee-advanced-coaching');
 */
export function buildSEOLandingMetadata(slug: string): Metadata {
  const page = getSEOPage(slug);
  if (!page) {
    return { title: slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) };
  }
  const url = `${BASE}/${slug}`;
  const ogImage = resolveOgImage(slug);
  const desc = page.description.slice(0, 155);

  return {
    title: page.title,
    description: desc,
    alternates: {
      canonical: url,
      languages: { 'en-IN': url, 'x-default': url },
    },
    openGraph: {
      title: page.title,
      description: desc,
      url,
      siteName: 'MindPeak Institute',
      type: 'website',
      locale: 'en_IN',
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: desc,
      images: [ogImage],
    },
  };
}
