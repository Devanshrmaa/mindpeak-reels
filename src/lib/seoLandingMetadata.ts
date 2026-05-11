import { getSEOPage } from '@/data/seoPageData';
import { resolveOgImage } from '@/lib/ogImage';
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
  const ogImage = resolveOgImage(slug);
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url, languages: { 'en-IN': url, 'x-default': url } },
    robots: { index: true, follow: true },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: 'MindPeak Institute',
      type: 'website',
      locale: 'en_IN',
      images: [{ url: ogImage, width: 1200, height: 630, alt: page.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [ogImage],
    },
  };
}
