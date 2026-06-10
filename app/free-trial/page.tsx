import FreeTrial from "@/views/FreeTrial";
import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

export const revalidate = false;

const BASE = 'https://mindpeakinstitute.com';

const freeTrialSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Event',
      '@id': `${BASE}/free-trial#demo-class`,
      name: `Free 1-on-1 JEE & NEET Demo Class — MindPeak Institute ${CURRENT_EXAM_YEAR}`,
      description: 'Experience personalised JEE/NEET coaching for free. Meet your dedicated IIT/AIIMS mentor, get a custom study roadmap, and see our live 1-on-1 platform — zero cost, zero commitment.',
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
      location: {
        '@type': 'VirtualLocation',
        url: `${BASE}/free-trial`,
      },
      organizer: {
        '@type': 'EducationalOrganization',
        '@id': `${BASE}/#organization`,
        name: 'MindPeak Institute',
        url: BASE,
      },
      offers: {
        '@type': 'Offer',
        name: 'Free Demo Class',
        price: '0',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        validFrom: '2024-01-01',
        url: `${BASE}/free-trial`,
      },
      audience: {
        '@type': 'EducationalAudience',
        educationalRole: 'student',
        audienceType: 'JEE and NEET aspirants',
      },
      inLanguage: ['en', 'hi'],
      isAccessibleForFree: true,
    },
    {
      '@type': 'Service',
      '@id': `${BASE}/free-trial#service`,
      name: 'Free JEE & NEET Coaching Demo Class',
      description: 'Book a free 1-on-1 demo class with an expert JEE/NEET mentor. Includes a personalised diagnostic assessment and custom study plan — completely free.',
      provider: { '@id': `${BASE}/#organization` },
      serviceType: 'Educational Coaching',
      category: 'JEE NEET Preparation',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        url: `${BASE}/free-trial`,
      },
      areaServed: { '@type': 'Country', name: 'India' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Free Demo + Coaching Programs',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'JEE Coaching', provider: { '@id': `${BASE}/#organization` } } },
          { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'NEET Coaching', provider: { '@id': `${BASE}/#organization` } } },
        ],
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'Free Demo Class', item: `${BASE}/free-trial` },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: `Free 1-on-1 JEE & NEET Demo Class — Zero Cost | MindPeak`,
  description: `Experience personalized JEE/NEET coaching free. Meet your mentor, get a custom study plan, see our platform live. No card, no commitment — book in 30 seconds.`,
  alternates: { canonical: "https://mindpeakinstitute.com/free-trial" },
  openGraph: {
    title: "Book Your FREE 1-on-1 JEE & NEET Demo Class Today",
    description: "No credit card. No commitment. Just one free class with a dedicated IIT/AIIMS mentor + a personalised study plan. Book in under 30 seconds.",
    url: "https://mindpeakinstitute.com/free-trial",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/coaching.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FREE 1-on-1 JEE & NEET Demo Class — No Card Needed",
    description: "Meet your personal IIT/AIIMS mentor. Get a free study plan. Zero cost, zero commitment.",
    images: ["https://mindpeakinstitute.com/images/og/coaching.jpg"],
  },
  other: {
    'script:ld+json': JSON.stringify(freeTrialSchema),
  },
};
export default function FreeTrialPage() { return <FreeTrial />; }
