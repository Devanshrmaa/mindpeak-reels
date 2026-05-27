import Courses from "@/views/Courses";
import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

export const revalidate = false;

export const metadata: Metadata = {
  title: `JEE & NEET Coaching Courses ${CURRENT_EXAM_YEAR} — 12+ Programs | MindPeak`,
  description: `Explore 12+ personalized 1-on-1 JEE & NEET programs — foundation (Class 6–10), 1-year, 2-year, crash & Olympiad. 95% success rate, AIR 42 best JEE result. Book a free demo class.`,
  alternates: { canonical: "https://mindpeakinstitute.com/courses" },
  openGraph: {
    title: `12+ Personalized JEE & NEET Coaching Programs ${CURRENT_EXAM_YEAR} | MindPeak`,
    description: "Find your perfect 1-on-1 JEE or NEET program — from Class 6 foundation to 60-day crash courses. 95% success rate. Book a free demo.",
    url: "https://mindpeakinstitute.com/courses",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/coaching.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "12+ Personalized JEE & NEET Courses — Free Demo | MindPeak",
    description: "Foundation to crash course — find the perfect 1-on-1 JEE or NEET program. Book a free demo class today.",
    images: ["https://mindpeakinstitute.com/images/og/coaching.jpg"],
  },
};

const BASE = "https://mindpeakinstitute.com";
const PROVIDER = { "@type": "Organization", name: "MindPeak Institute", url: BASE } as const;
const COURSE_INSTANCE = { "@type": "CourseInstance", courseMode: "Online", location: { "@type": "VirtualLocation", url: BASE } } as const;

const coursesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: "Courses", item: `${BASE}/courses` },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${BASE}/courses#program-list`,
      name: "JEE & NEET Coaching Programs — MindPeak Institute",
      description: `12+ personalized 1-on-1 JEE & NEET coaching programs for Class 6–12 students and droppers. ${CURRENT_EXAM_YEAR} batch enrollments open.`,
      numberOfItems: 12,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Course",
            name: "JEE / NEET Foundation Program",
            description: "Personalized 1-on-1 online foundation coaching for Class 6–10 students. Builds competitive exam base for JEE and NEET alongside board preparation.",
            provider: PROVIDER,
            educationalLevel: "Middle School / High School",
            courseMode: "online",
            hasCourseInstance: COURSE_INSTANCE,
            teaches: ["Mathematics", "Science", "Physics", "Chemistry"],
            offers: {
              "@type": "Offer",
              price: "100000",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              url: `${BASE}/courses`,
              description: "₹1,00,000/year + GST (23% OFF original ₹1,30,000)",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Course",
            name: "1-on-1 JEE / NEET Coaching — 1 Year",
            description: "Complete JEE Main + Advanced or NEET UG preparation. Daily 1-on-1 live classes with dedicated IIT/AIIMS alumni mentor, adaptive curriculum, weekly mock tests.",
            provider: PROVIDER,
            educationalLevel: "JEE / NEET Preparation (Class 12 / Dropper)",
            courseMode: "online",
            hasCourseInstance: COURSE_INSTANCE,
            teaches: ["Physics", "Chemistry", "Mathematics", "Biology"],
            offers: {
              "@type": "Offer",
              price: "130000",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              url: `${BASE}/courses`,
              description: "₹1,30,000/year + GST (35% OFF original ₹1,99,000)",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "Course",
            name: "1-on-1 JEE / NEET Coaching — 2 Year",
            description: "Comprehensive 2-year JEE/NEET preparation from Class 11 through exam. Long-term mentor relationship, phased curriculum, board integration.",
            provider: PROVIDER,
            educationalLevel: "JEE / NEET Preparation (Class 11–12)",
            courseMode: "online",
            hasCourseInstance: COURSE_INSTANCE,
            teaches: ["Physics", "Chemistry", "Mathematics", "Biology"],
            offers: {
              "@type": "Offer",
              price: "230000",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              url: `${BASE}/courses`,
              description: "₹2,30,000/2 years + GST (23% OFF original ₹2,99,000)",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "Course",
            name: "JEE / NEET Crash Course — 6 Months",
            description: "Intensive 6-month 1-on-1 crash course for JEE/NEET last-mile preparation. Focus on high-weightage topics, weekly mocks, PYQ deep-dive.",
            provider: PROVIDER,
            educationalLevel: "JEE / NEET Preparation",
            courseMode: "online",
            hasCourseInstance: COURSE_INSTANCE,
            offers: {
              "@type": "Offer",
              price: "75000",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              url: `${BASE}/courses`,
              description: "₹75,000 + GST (24% OFF original ₹99,000)",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 5,
          item: {
            "@type": "Course",
            name: "Subject Crash Course",
            description: "Targeted 10–12 week 1-on-1 coaching for a single subject (Physics, Chemistry, Mathematics, or Biology). Diagnose and fix specific weaknesses.",
            provider: PROVIDER,
            educationalLevel: "JEE / NEET Preparation",
            courseMode: "online",
            hasCourseInstance: COURSE_INSTANCE,
            teaches: ["Physics", "Chemistry", "Mathematics", "Biology"],
            offers: {
              "@type": "Offer",
              price: "25000",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              url: `${BASE}/courses`,
              description: "₹25,000/subject + GST",
            },
          },
        },
      ],
    },
  ],
};

export default function CoursesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }}
      />
      <Courses />
    </>
  );
}
