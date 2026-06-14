import JEEPracticeHub from "@/views/JEEPracticeHub";
import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

export const revalidate = false;

export const metadata: Metadata = {
  title: `Free JEE MCQ Practice ${CURRENT_EXAM_YEAR} — 500+ Questions With Solutions`,
  description: `Solve 500+ JEE Main & Advanced MCQs ${CURRENT_EXAM_YEAR}. Topic-wise, difficulty-wise with step-by-step solutions. Track your score. 100% free practice by MindPeak.`,
  alternates: { canonical: "https://mindpeakinstitute.com/jee-practice" },
  openGraph: {
    title: `Free JEE Practice MCQs ${CURRENT_EXAM_YEAR} — 500+ Physics, Chemistry & Maths Questions`,
    description: `Topic-wise JEE Main & Advanced MCQs with detailed solutions. 100% free. Filter by difficulty, track your score. Practice smarter with MindPeak.`,
    url: "https://mindpeakinstitute.com/jee-practice",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/jee-practice.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Free JEE Practice MCQs ${CURRENT_EXAM_YEAR} — 500+ Questions With Solutions`,
    description: `Topic-wise JEE Main & Advanced MCQs with full solutions. 100% free. Track your score by MindPeak.`,
    images: ["https://mindpeakinstitute.com/images/og/jee-practice.jpg"],
  },
};
export default function Page() { return <JEEPracticeHub />; }
