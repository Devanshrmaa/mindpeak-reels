/**
 * Builds a comprehensive set of JSON-LD structured data for T1 city coaching pages.
 *
 * Emits up to 6 schemas per page:
 *   1. BreadcrumbList         — breadcrumb rich snippet in SERP
 *   2. FAQPage                — FAQ rich-snippet dropdowns (extra SERP real estate)
 *   3. EducationalOrganization + LocalBusiness — local relevance
 *   4. Course (+ Offer)                        — course rich result
 *   5. WebPage (+ speakable, stable dates)     — content-anchored, not rolling
 *
 * NO AggregateRating and NO Review schemas: MindPeak has collected no
 * verifiable reviews, and both were previously fabricated here (see the
 * removal notes below).
 *
 * Only 20 hand-curated T1 cities are indexable; any other slug returns null.
 */

import { cities } from '@/data/cityData';
import { cityUniqueContent } from '@/data/cityUniqueContent';
import { buildBreadcrumbJsonLd } from '@/lib/breadcrumbSchema';
import { CONTENT_ANCHOR } from '@/lib/sitemapUrls';

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

/*
 * REMOVED 2026-08-04 — stableRating().
 *
 * It hashed the page slug into a ratingValue (4.7–4.9) and a reviewCount
 * (180–320) and emitted them as AggregateRating on both the organisation and
 * the course schema of all 20 indexable city pages. The numbers were invented
 * outright: no reviews were ever collected, so "191 reviews, 4.9 stars" on
 * /jee-coaching-in-delhi described nothing. Google treats fabricated review
 * markup as a structured-data violation and acts on it directly.
 *
 * Re-add AggregateRating only from a real, auditable review source.
 */

/**
 * Returns an array of JSON-LD strings for an indexable city coaching page,
 * or null if the slug is not in the curated set. Each string is ready to
 * be dropped into a <script type="application/ld+json"> tag.
 */
export function buildCityJsonLd(pageSlug: string): string[] | null {
  if (!INDEXABLE_CITY_SLUGS.has(pageSlug)) return null;

  const citySlug = pageSlug.split('-in-').pop() ?? '';
  const exam = pageSlug.startsWith('neet') ? 'NEET' : 'JEE';
  const examLabel = exam === 'NEET' ? 'NEET UG' : 'JEE Main & Advanced';

  const cityData = cities.find((c) => c.slug === citySlug);
  if (!cityData) return null;

  const unique = cityUniqueContent[citySlug];
  const pageUrl = `${BASE}/${pageSlug}`;

  /* ── 1. BreadcrumbList ───────────────────────────────────────────────── */
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: `${exam} Coaching`, url: `${exam.toLowerCase()}-coaching` },
    { name: `${exam} Coaching in ${cityData.city}`, url: pageSlug },
  ]);

  /* ── 2. FAQPage ──────────────────────────────────────────────────────── */
  const faqItems: { q: string; a: string }[] = [];
  for (const faq of cityData.faqs ?? []) faqItems.push({ q: faq.q, a: faq.a });
  if (unique?.uniqueFAQ) faqItems.push(unique.uniqueFAQ);
  for (const faq of cityData.expandedFaqs ?? []) faqItems.push({ q: faq.q, a: faq.a });

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.slice(0, 10).map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  /* ── 3. EducationalOrganization + LocalBusiness ──────────────────────── */
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
    '@id': `${pageUrl}#organization`,
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
    geo: {
      '@type': 'GeoCoordinates',
      latitude: cityData.lat,
      longitude: cityData.lng,
    },
    areaServed,
    serviceType: `${examLabel} Coaching`,
    knowsAbout: exam === 'JEE'
      ? ['JEE Main', 'JEE Advanced', 'Physics', 'Chemistry', 'Mathematics', 'IIT Preparation']
      : ['NEET UG', 'Biology', 'Physics', 'Chemistry', 'AIIMS Preparation', 'Medical Entrance'],
    priceRange: '₹₹',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '07:00',
      closes: '22:00',
    },
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

  /* ── 4. Course (+ Offer) ─────────────────────────────────────────────── */
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': `${pageUrl}#course`,
    name: `1-on-1 ${examLabel} Coaching in ${cityData.city}`,
    description: `Personalised ${examLabel} coaching for ${cityData.city} students. Dedicated IIT/AIIMS alumni mentor, adaptive curriculum, weekly mock tests, and transparent parent reports. Designed for students targeting ${(cityData.targetColleges ?? []).slice(0, 3).join(', ') || 'India\'s top engineering and medical colleges'}.`,
    provider: {
      '@type': 'Organization',
      name: 'MindPeak Institute',
      sameAs: BASE,
      url: BASE,
    },
    educationalCredentialAwarded: `${examLabel} Preparation Certificate`,
    teaches: exam === 'JEE'
      ? ['Physics', 'Chemistry', 'Mathematics', 'JEE Main problem solving', 'JEE Advanced problem solving']
      : ['Biology', 'Physics', 'Chemistry', 'NCERT-first Biology strategy', 'NEET MCQ speed-solving'],
    inLanguage: ['en-IN', 'hi-IN'],
    audience: {
      '@type': 'EducationalAudience',
      educationalRole: 'student',
    },
    hasCourseInstance: [
      {
        '@type': 'CourseInstance',
        courseMode: 'Online',
        courseWorkload: 'PT14H', // ~14 hrs/week (classes + homework)
        location: { '@type': 'VirtualLocation', url: pageUrl },
      },
    ],
    offers: {
      '@type': 'Offer',
      category: 'Coaching',
      priceCurrency: 'INR',
      price: '0',
      availability: 'https://schema.org/InStock',
      url: `${BASE}/free-trial`,
      validFrom: CONTENT_ANCHOR,
      description: `Free demo class for ${cityData.city} students. Annual and quarterly plans available — discuss with counsellor.`,
    },
  };

  /* ── 5. WebPage (+ speakable + datePublished/dateModified) ───────────── */
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': pageUrl,
    url: pageUrl,
    name: `Best ${examLabel} Coaching in ${cityData.city} — MindPeak Institute`,
    description: `1-on-1 online ${examLabel} coaching for students in ${cityData.city}. A dedicated mentor, an adaptive curriculum rebuilt from your own performance data, and a free demo class.`,
    inLanguage: 'en-IN',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${BASE}#website`,
      name: 'MindPeak Institute',
      url: BASE,
    },
    about: { '@id': `${pageUrl}#organization` },
    mainEntity: { '@id': `${pageUrl}#course` },
    datePublished: '2025-06-01',
    dateModified: CONTENT_ANCHOR,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.sr-only p'],
    },
    primaryImageOfPage: { '@type': 'ImageObject', url: LOGO },
    potentialAction: {
      '@type': 'ReserveAction',
      target: `${BASE}/free-trial`,
      name: `Book Free Demo — ${examLabel} Coaching ${cityData.city}`,
    },
  };

  /*
   * ── 6. Review schemas — REMOVED 2026-08-04 ────────────────────────────
   * This mapped cityData testimonials into Review objects, each hardcoded to
   * ratingValue 5. Those testimonials are named, unconsented and unverified
   * (e.g. "Arjun S.", "Priya K." on /jee-coaching-in-delhi), so the markup
   * asserted five-star reviews that do not exist. Restore only from real,
   * attributable, consented reviews.
   */
  return [
    JSON.stringify(breadcrumb),
    JSON.stringify(faqSchema),
    JSON.stringify(orgSchema),
    JSON.stringify(courseSchema),
    JSON.stringify(webPageSchema),
  ];
}

/**
 * Rich server-rendered content block for a T1 city page, visible to crawlers
 * in the initial HTML. Returns null for non-indexable slugs so the caller can
 * fall back to the generic shell.
 */
export interface CityServerContent {
  heading: string;
  subheading: string;
  intro: string;
  highlights: string[];
  localAreas: string[];
  targetColleges: string[];
  faqs: { q: string; a: string }[];
  testimonials: { name: string; role: string; quote: string }[];
  breadcrumb: { label: string; href: string }[];
  siblingCities: { label: string; href: string }[];
}

/** All 20 indexed T1 city pages — used to build sibling cross-links. */
const ALL_T1_CITY_LINKS: { label: string; href: string; slug: string }[] = [
  { slug: 'jee-coaching-in-bangalore',   label: 'JEE Coaching in Bangalore',   href: '/jee-coaching-in-bangalore' },
  { slug: 'neet-coaching-in-bangalore',  label: 'NEET Coaching in Bangalore',  href: '/neet-coaching-in-bangalore' },
  { slug: 'jee-coaching-in-mangalore',   label: 'JEE Coaching in Mangalore',   href: '/jee-coaching-in-mangalore' },
  { slug: 'neet-coaching-in-mangalore',  label: 'NEET Coaching in Mangalore',  href: '/neet-coaching-in-mangalore' },
  { slug: 'jee-coaching-in-chennai',     label: 'JEE Coaching in Chennai',     href: '/jee-coaching-in-chennai' },
  { slug: 'neet-coaching-in-chennai',    label: 'NEET Coaching in Chennai',    href: '/neet-coaching-in-chennai' },
  { slug: 'jee-coaching-in-coimbatore',  label: 'JEE Coaching in Coimbatore',  href: '/jee-coaching-in-coimbatore' },
  { slug: 'neet-coaching-in-coimbatore', label: 'NEET Coaching in Coimbatore', href: '/neet-coaching-in-coimbatore' },
  { slug: 'jee-coaching-in-hyderabad',   label: 'JEE Coaching in Hyderabad',   href: '/jee-coaching-in-hyderabad' },
  { slug: 'neet-coaching-in-hyderabad',  label: 'NEET Coaching in Hyderabad',  href: '/neet-coaching-in-hyderabad' },
  { slug: 'jee-coaching-in-vijayawada',  label: 'JEE Coaching in Vijayawada',  href: '/jee-coaching-in-vijayawada' },
  { slug: 'neet-coaching-in-vijayawada', label: 'NEET Coaching in Vijayawada', href: '/neet-coaching-in-vijayawada' },
  { slug: 'jee-coaching-in-visakhapatnam',  label: 'JEE Coaching in Visakhapatnam',  href: '/jee-coaching-in-visakhapatnam' },
  { slug: 'neet-coaching-in-visakhapatnam', label: 'NEET Coaching in Visakhapatnam', href: '/neet-coaching-in-visakhapatnam' },
  { slug: 'jee-coaching-in-kochi',       label: 'JEE Coaching in Kochi',       href: '/jee-coaching-in-kochi' },
  { slug: 'neet-coaching-in-kochi',      label: 'NEET Coaching in Kochi',      href: '/neet-coaching-in-kochi' },
  { slug: 'jee-coaching-in-delhi',       label: 'JEE Coaching in Delhi',       href: '/jee-coaching-in-delhi' },
  { slug: 'neet-coaching-in-delhi',      label: 'NEET Coaching in Delhi',      href: '/neet-coaching-in-delhi' },
  { slug: 'jee-coaching-in-mumbai',      label: 'JEE Coaching in Mumbai',      href: '/jee-coaching-in-mumbai' },
  { slug: 'neet-coaching-in-mumbai',     label: 'NEET Coaching in Mumbai',     href: '/neet-coaching-in-mumbai' },
];

export function buildCityServerContent(pageSlug: string): CityServerContent | null {
  if (!INDEXABLE_CITY_SLUGS.has(pageSlug)) return null;

  const citySlug = pageSlug.split('-in-').pop() ?? '';
  const exam = pageSlug.startsWith('neet') ? 'NEET' : 'JEE';
  const examLabel = exam === 'NEET' ? 'NEET UG' : 'JEE Main & Advanced';
  const cityData = cities.find((c) => c.slug === citySlug);
  if (!cityData) return null;

  const unique = cityUniqueContent[citySlug];
  const faqItems: { q: string; a: string }[] = [];
  for (const faq of cityData.faqs ?? []) faqItems.push({ q: faq.q, a: faq.a });
  if (unique?.uniqueFAQ) faqItems.push(unique.uniqueFAQ);

  const testimonials = [
    ...(cityData.cityTestimonials ?? [])
      .filter((t) => !t.isSample)
      .map((t) => ({ name: t.name, role: t.role || t.result, quote: t.quote })),
    ...(cityData.testimonials ?? []).map((t) => ({ name: t.name, role: t.rank, quote: t.quote })),
  ].slice(0, 3);

  // Sibling cities — same exam type, excluding current page, up to 6 links
  const siblingCities = ALL_T1_CITY_LINKS.filter(
    (l) => l.slug !== pageSlug && l.slug.startsWith(exam.toLowerCase() + '-coaching-in-'),
  ).slice(0, 6);

  return {
    heading: `Best ${examLabel} Coaching in ${cityData.city}`,
    subheading: `Personalised 1-on-1 Online Coaching for ${cityData.city} Students`,
    intro: cityData.whyMindPeak ?? `MindPeak Institute offers personalised 1-on-1 ${examLabel} coaching for students in ${cityData.city}. Dedicated IIT/AIIMS alumni mentors, adaptive curriculum, and transparent parent reports.`,
    highlights: (cityData.highlights ?? []).slice(0, 6),
    localAreas: (cityData.localAreas ?? []).slice(0, 12),
    targetColleges: (cityData.targetColleges ?? []).slice(0, 8),
    faqs: faqItems.slice(0, 5),
    testimonials,
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: `${exam} Coaching`, href: `/${exam.toLowerCase()}-coaching` },
      { label: `${exam} Coaching in ${cityData.city}`, href: `/${pageSlug}` },
    ],
    siblingCities,
  };
}
