import Pricing from "@/views/Pricing";
import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

export const revalidate = false;

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
};

const BASE = "https://mindpeakinstitute.com";

const pricingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: "Pricing", item: `${BASE}/pricing` },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${BASE}/pricing`,
      url: `${BASE}/pricing`,
      name: `JEE & NEET Coaching Fees ${CURRENT_EXAM_YEAR} — Transparent Pricing | MindPeak`,
      description: `Transparent 1-on-1 JEE & NEET coaching fees. Foundation ₹1L/yr, 1-year ₹1.3L, 2-year ₹2.3L, crash course from ₹25K/subject. EMI available.`,
      isPartOf: {
        "@type": "WebSite",
        "@id": `${BASE}/#website`,
        name: "MindPeak Institute",
        url: BASE,
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "Course",
      name: "Foundation Program (Class 6–10)",
      description: "1-on-1 online foundation coaching for Class 6–10 students. Builds JEE/NEET base alongside board exam preparation.",
      provider: { "@type": "Organization", name: "MindPeak Institute", url: BASE },
      courseMode: "online",
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "Online",
        location: { "@type": "VirtualLocation", url: BASE },
      },
      offers: {
        "@type": "Offer",
        price: "100000",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        url: `${BASE}/pricing`,
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "100000",
          priceCurrency: "INR",
          unitText: "year",
          description: "₹1,00,000/year + GST",
        },
      },
    },
    {
      "@type": "Course",
      name: `1-on-1 JEE / NEET Coaching — 1 Year (${CURRENT_EXAM_YEAR})`,
      description:
        "Complete JEE Main + Advanced or NEET UG 1-year preparation. Daily 1-on-1 live classes with dedicated IIT/AIIMS alumni mentor. Adaptive curriculum, weekly CBT mock tests, parent reports.",
      provider: { "@type": "Organization", name: "MindPeak Institute", url: BASE },
      educationalLevel: "JEE / NEET Preparation",
      courseMode: "online",
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "Online",
        courseWorkload: "PT14H",
        location: { "@type": "VirtualLocation", url: BASE },
      },
      teaches: ["Physics", "Chemistry", "Mathematics", "Biology"],
      offers: {
        "@type": "Offer",
        price: "130000",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        url: `${BASE}/pricing`,
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "130000",
          priceCurrency: "INR",
          unitText: "year",
          description: "₹1,30,000/year + GST (35% OFF original ₹1,99,000)",
        },
      },
    },
    {
      "@type": "Course",
      name: `1-on-1 JEE / NEET Coaching — 2 Year (${CURRENT_EXAM_YEAR})`,
      description:
        "Comprehensive 2-year JEE/NEET preparation from Class 11. Long-term mentor relationship, phased curriculum with milestones, board exam integration.",
      provider: { "@type": "Organization", name: "MindPeak Institute", url: BASE },
      educationalLevel: "JEE / NEET Preparation",
      courseMode: "online",
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "Online",
        courseWorkload: "PT14H",
        location: { "@type": "VirtualLocation", url: BASE },
      },
      teaches: ["Physics", "Chemistry", "Mathematics", "Biology"],
      offers: {
        "@type": "Offer",
        price: "230000",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        url: `${BASE}/pricing`,
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "230000",
          priceCurrency: "INR",
          unitText: "2 years",
          description: "₹2,30,000/2 years + GST (23% OFF original ₹2,99,000)",
        },
      },
    },
    {
      "@type": "Course",
      name: "JEE / NEET Crash Course — 6 Months",
      description:
        "Intensive 6-month 1-on-1 crash course. Focus on high-weightage topics, mock tests every week, PYQ deep-dive, exam strategy.",
      provider: { "@type": "Organization", name: "MindPeak Institute", url: BASE },
      educationalLevel: "JEE / NEET Last-Mile Preparation",
      courseMode: "online",
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "Online",
        location: { "@type": "VirtualLocation", url: BASE },
      },
      offers: {
        "@type": "Offer",
        price: "75000",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        url: `${BASE}/pricing`,
        description: "₹75,000 + GST (24% OFF original ₹99,000)",
      },
    },
    {
      "@type": "Course",
      name: "Subject Crash Course",
      description:
        "Targeted 10–12 week 1-on-1 intensive coaching for a single subject: Physics, Chemistry, Mathematics, or Biology.",
      provider: { "@type": "Organization", name: "MindPeak Institute", url: BASE },
      educationalLevel: "JEE / NEET Targeted Preparation",
      courseMode: "online",
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "Online",
        location: { "@type": "VirtualLocation", url: BASE },
      },
      teaches: ["Physics", "Chemistry", "Mathematics", "Biology"],
      offers: {
        "@type": "Offer",
        price: "25000",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        url: `${BASE}/pricing`,
        description: "₹25,000/subject + GST",
      },
    },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
      <Pricing />
    </>
  );
}
