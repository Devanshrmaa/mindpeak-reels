import Pricing from "@/views/Pricing";
import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

export const revalidate = false;

const BASE = 'https://mindpeakinstitute.com';

const pricingSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${BASE}/pricing`,
      name: `JEE & NEET Coaching Fees ${CURRENT_EXAM_YEAR} — MindPeak Institute`,
      url: `${BASE}/pricing`,
      description: `Transparent JEE/NEET coaching pricing ${CURRENT_EXAM_YEAR}. 1-year ₹1.3L, 2-year ₹2.3L, crash ₹30K/subject. EMI available, no hidden fees.`,
      isPartOf: { '@id': `${BASE}/#website` },
      about: { '@id': `${BASE}/#organization` },
      mainEntity: {
        '@type': 'ItemList',
        name: 'JEE & NEET Coaching Pricing Plans',
        numberOfItems: 7,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@type': 'Offer',
              name: `JEE ${CURRENT_EXAM_YEAR} Final Ascent (8-Month Sprint)`,
              description: 'Personalised 1-on-1 intensive coaching for JEE Main + Advanced, 8-month program with daily mentoring 6 days/week.',
              price: '110000',
              priceCurrency: 'INR',
              priceSpecification: { '@type': 'PriceSpecification', price: '110000', priceCurrency: 'INR', valueAddedTaxIncluded: false },
              availability: 'https://schema.org/InStock',
              seller: { '@id': `${BASE}/#organization` },
              url: `${BASE}/course/jee-target-${CURRENT_EXAM_YEAR}`,
            },
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@type': 'Offer',
              name: 'JEE 1-Year Intensive Program',
              description: 'Comprehensive 1-year 1-on-1 JEE coaching for Class 12 students and droppers.',
              price: '130000',
              priceCurrency: 'INR',
              priceSpecification: { '@type': 'PriceSpecification', price: '130000', priceCurrency: 'INR', valueAddedTaxIncluded: false },
              availability: 'https://schema.org/InStock',
              seller: { '@id': `${BASE}/#organization` },
            },
          },
          {
            '@type': 'ListItem',
            position: 3,
            item: {
              '@type': 'Offer',
              name: 'JEE 2-Year Program',
              description: 'Complete 2-year 1-on-1 JEE coaching for Class 11 students targeting JEE Main + Advanced.',
              price: '230000',
              priceCurrency: 'INR',
              priceSpecification: { '@type': 'PriceSpecification', price: '230000', priceCurrency: 'INR', valueAddedTaxIncluded: false },
              availability: 'https://schema.org/InStock',
              seller: { '@id': `${BASE}/#organization` },
            },
          },
          {
            '@type': 'ListItem',
            position: 4,
            item: {
              '@type': 'Offer',
              name: `NEET ${CURRENT_EXAM_YEAR} Final Ascent (8-Month Sprint)`,
              description: 'Personalised 1-on-1 intensive coaching for NEET UG, 8-month program with daily mentoring.',
              price: '110000',
              priceCurrency: 'INR',
              priceSpecification: { '@type': 'PriceSpecification', price: '110000', priceCurrency: 'INR', valueAddedTaxIncluded: false },
              availability: 'https://schema.org/InStock',
              seller: { '@id': `${BASE}/#organization` },
              url: `${BASE}/course/neet-target-${CURRENT_EXAM_YEAR}`,
            },
          },
          {
            '@type': 'ListItem',
            position: 5,
            item: {
              '@type': 'Offer',
              name: '1-on-1 Crash Course (per subject)',
              description: 'Intensive 60-day crash course for a single JEE/NEET subject, personalised 1-on-1.',
              price: '30000',
              priceCurrency: 'INR',
              priceSpecification: { '@type': 'PriceSpecification', price: '30000', priceCurrency: 'INR', valueAddedTaxIncluded: false },
              availability: 'https://schema.org/InStock',
              seller: { '@id': `${BASE}/#organization` },
            },
          },
          {
            '@type': 'ListItem',
            position: 6,
            item: {
              '@type': 'Offer',
              name: 'JEE/NEET Test Series — 1 Year',
              description: 'Computer-based JEE/NEET test series with full-length mocks in CBT format, 1-year access.',
              price: '6000',
              priceCurrency: 'INR',
              priceSpecification: { '@type': 'PriceSpecification', price: '6000', priceCurrency: 'INR', valueAddedTaxIncluded: false },
              availability: 'https://schema.org/InStock',
              seller: { '@id': `${BASE}/#organization` },
            },
          },
          {
            '@type': 'ListItem',
            position: 7,
            item: {
              '@type': 'Offer',
              name: 'Free Demo Class',
              description: 'Free 1-on-1 live demo class with a dedicated JEE/NEET mentor. Zero cost, no commitment.',
              price: '0',
              priceCurrency: 'INR',
              availability: 'https://schema.org/InStock',
              seller: { '@id': `${BASE}/#organization` },
              url: `${BASE}/free-trial`,
            },
          },
        ],
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'Pricing', item: `${BASE}/pricing` },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: `JEE & NEET Coaching Fees ${CURRENT_EXAM_YEAR} — from ₹1L/year | MindPeak`,
  description: `Transparent JEE/NEET coaching pricing ${CURRENT_EXAM_YEAR}. 1-year ₹1.3L, 2-year ₹2.3L, crash ₹30K/subject. EMI available, no hidden fees. Try a free demo class first.`,
  alternates: { canonical: "https://mindpeakinstitute.com/pricing" },
  openGraph: {
    title: `Honest JEE & NEET Coaching Fees — No Hidden Charges | MindPeak ${CURRENT_EXAM_YEAR}`,
    description: "See exactly what you pay for 1-on-1 JEE & NEET coaching. Starting ₹1.3L/year. EMI options. Compare with Kota costs. Free demo before you commit.",
    url: "https://mindpeakinstitute.com/pricing",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/coaching.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "JEE & NEET Coaching Fees — Transparent, No Surprises | MindPeak",
    description: "1-year from ₹1.3L, 2-year from ₹2.3L, crash courses from ₹30K/subject. EMI available.",
    images: ["https://mindpeakinstitute.com/images/og/coaching.jpg"],
  },
  other: {
    'script:ld+json': JSON.stringify(pricingSchema),
  },
};
export default function PricingPage() { return <Pricing />; }
