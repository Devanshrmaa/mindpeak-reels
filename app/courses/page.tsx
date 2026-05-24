import Courses from "@/views/Courses";
import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

export const revalidate = false;

export const metadata: Metadata = {
  title: `JEE & NEET Coaching Courses ${CURRENT_EXAM_YEAR} — 12+ Programs | MindPeak`,
  description: `Explore 12+ personalised JEE & NEET programs — foundation to crash course. 1-on-1 mentoring, 95% success rate, AIR 42 best result. Book a free demo class.`,
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
export default function CoursesPage() { return <Courses />; }
