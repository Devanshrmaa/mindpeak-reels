import NEETPracticeHub from "@/views/NEETPracticeHub";
import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

export const revalidate = false;

export const metadata: Metadata = {
  title: `Free NEET MCQ Practice ${CURRENT_EXAM_YEAR} — 500+ Questions With Solutions`,
  description: `Solve 500+ NEET UG MCQs ${CURRENT_EXAM_YEAR}. Topic-wise, difficulty-wise with NCERT-based solutions. Track your score. 100% free practice by MindPeak.`,
  alternates: { canonical: "https://mindpeakinstitute.com/neet-practice" },
  openGraph: {
    title: `Free NEET Practice MCQs ${CURRENT_EXAM_YEAR} — 500+ Biology, Physics & Chemistry Questions`,
    description: `Topic-wise NEET UG MCQs with NCERT-based solutions. 100% free. Filter by difficulty, track your score. Practice smarter with MindPeak.`,
    url: "https://mindpeakinstitute.com/neet-practice",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/neet-practice.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Free NEET MCQ Practice ${CURRENT_EXAM_YEAR} — 500+ Questions With Solutions`,
    description: `Topic-wise NEET UG MCQs with NCERT-based solutions. 100% free. Track your score by MindPeak.`,
    images: ["https://mindpeakinstitute.com/images/og/neet-practice.jpg"],
  },
};
export default function Page() { return <NEETPracticeHub />; }
