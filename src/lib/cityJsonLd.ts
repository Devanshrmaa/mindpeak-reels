/**
 * Builds JSON-LD structured data for T1 city coaching pages.
 *
 * Generates two schemas per page:
 *  1. FAQPage  — enables FAQ rich-snippet dropdowns in SERP (more SERP real estate)
 *  2. EducationalOrganization + LocalBusiness — signals local relevance for city queries
 */

import { cities } from '@/data/cityData';
import { cityUniqueContent } from '@/data/cityUniqueContent';

const BASE = 'https://mindpeakinstitute.com';
const LOGO = `${BASE}/og-image.png`;

/** Slugs of the 20 hand-curated T1 city pages that are indexed. */
const INDEXABLE_CITY_SLUGS = new Set([
  'jee-coaching-in-bangalore', 'neet-coaching-in-bangalore',
  'jee-coaching-in-mangalore', 'neet-coaching-in-mangalore',
  'jee-coaching-in-chennai', 'neet-coaching-in-chennai',
  'jee-coaching-in-coimbatore', 'neet-coaching-in-coimbatore',
  'jee-coaching-in-hyderabad', 'neet-coaching-in-hyderabad',
  'jee-coaching-in-vijayawada', 'neet-coaching-in-vijayawada',
  'jee-coaching-in-visakhapatnam', 'neet-coaching-in-visakhapatnam',
  'jee-coaching-in-kochi', 'neet-coaching-in-kochi',
  'jee-coaching-in-delhi', 'neet-coaching-in-delhi',
  'jee-coaching-in-mumbai', 'neet-coaching-in-mumbai',
]);

/**
 * Returns two JSON-LD blobs (FAQPage + EducationalOrganization) for an
 * indexable city coaching page, or null if the slug is not in the curated set.
 */
export function buildCityJsonLd(
  pageSlug: string,
): { faq: string; org: string } | null {
  if (!INDEXABLE_CITY_SLUGS.has(pageSlug)) return null;

  const citySlug = pageSlug.split('-in-').pop() ?? '';
  const exam = pageSlug.startsWith('neet') ? 'NEET' : 'JEE';
  const examLabel = exam === 'NEET' ? 'NEET UG' : 'JEE Main & Advanced';

  const cityData = cities.find((c) => c.slug === citySlug);
  if (!cityData) return null;

  const unique = cityUniqueContent[citySlug];

  /* ── 1. Collect FAQs ─────────────────────────────────────────────────── */
  const faqItems: { q: string; a: string }[] = [];

  // City-specific base FAQs (4 questions, written for this city)
  for (const faq of cityData.faqs ?? []) {
    faqItems.push({ q: faq.q, a: faq.a });
  }
  // One truly unique FAQ from cityUniqueContent
  if (unique?.uniqueFAQ) {
    faqItems.push(unique.uniqueFAQ);
  }
  // Extended FAQs if present (hand-crafted cities have these)
  for (const faq of cityData.expandedFaqs ?? []) {
    faqItems.push({ q: faq.q, a: faq.a });
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.slice(0, 10).map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  /* ── 2. EducationalOrganization + LocalBusiness ──────────────────────── */
  const areaServed = [
    { '@type': 'City', name: cityData.city },
    ...(cityData.localAreas ?? []).slice(0, 8).map((area) => ({
      '@type': 'Place',
      name: `${area}, ${cityData.city}`,
    })),
  ];

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': ['EducationalOrganization', 'LocalBusiness'],
    name: 'MindPeak Institute',
    alternateName: 'MindPeak',
    url: BASE,
    logo: { '@type': 'ImageObject', url: LOGO },
    image: LOGO,
    description: `MindPeak Institute offers personalised 1-on-1 ${examLabel} coaching for students in ${cityData.city}. Dedicated IIT/AIIMS alumni mentors, adaptive study plans, and weekly progress reports.`,
    address: {
      '@type': 'PostalAddress',
      addressRegion: cityData.state,
      addressCountry: 'IN',
    },
    areaServed,
    serviceType: `${examLabel} Coaching`,
    knowsAbout: exam === 'JEE'
      ? ['JEE Main', 'JEE Advanced', 'Physics', 'Chemistry', 'Mathematics']
      : ['NEET UG', 'Biology', 'Physics', 'Chemistry'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${examLabel} Coaching Programs in ${cityData.city}`,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Course',
            name: `1-on-1 ${examLabel} Coaching — ${cityData.city}`,
            description: `Personalised 1-on-1 ${examLabel} coaching for students in ${cityData.city}. Adaptive curriculum, live sessions with IIT/AIIMS alumni mentors, weekly mock tests.`,
            provider: { '@type': 'Organization', name: 'MindPeak Institute', url: BASE },
            hasCourseInstance: {
              '@type': 'CourseInstance',
              courseMode: 'Online',
              location: { '@type': 'VirtualLocation', url: BASE },
            },
          },
        },
      ],
    },
    sameAs: [BASE],
  };

  return {
    faq: JSON.stringify(faqSchema),
    org: JSON.stringify(orgSchema),
  };
}
