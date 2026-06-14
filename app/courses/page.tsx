import Courses from "@/views/Courses";
import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";
import { courses } from "@/data/coursesData";

const BASE = 'https://mindpeakinstitute.com';

const coursesSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ItemList',
      '@id': `${BASE}/courses#catalog`,
      name: 'JEE & NEET Coaching Programs — MindPeak Institute',
      description: 'Complete catalog of personalised 1-on-1 online JEE and NEET coaching programs at MindPeak Institute.',
      numberOfItems: courses.length,
      itemListElement: courses.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Course',
          '@id': `${BASE}/course/${c.slug}`,
          name: c.name,
          description: c.description.slice(0, 300),
          url: `${BASE}/course/${c.slug}`,
          provider: {
            '@type': 'Organization',
            '@id': `${BASE}/#organization`,
            name: 'MindPeak Institute',
            url: BASE,
          },
          courseMode: 'online',
          educationalLevel: c.targetExam,
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'online',
            instructor: {
              '@type': 'Organization',
              name: 'MindPeak Institute',
            },
          },
          offers: {
            '@type': 'Offer',
            name: c.name,
            price: c.fee,
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
            url: `${BASE}/course/${c.slug}`,
          },
        },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'Courses', item: `${BASE}/courses` },
      ],
    },
  ],
};

export const revalidate = false;

export const metadata: Metadata = {
  title: `JEE & NEET Coaching Courses ${CURRENT_EXAM_YEAR} — 12+ Programs | MindPeak`,
  description: `Explore 12+ personalized 1-on-1 JEE & NEET programs — foundation to crash course. 95% success rate, AIR 42 best rank. Book a free demo class.`,
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
  other: {
    'script:ld+json': JSON.stringify(coursesSchema),
  },
};

export default function CoursesPage() { return <Courses />; }
