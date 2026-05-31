import NEETPracticeHub from "@/views/NEETPracticeHub";
import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

export const revalidate = false;

const _ogImage = "https://mindpeakinstitute.com/images/og/neet-practice.jpg";

export const metadata: Metadata = {
  title: `NEET Practice MCQs ${CURRENT_EXAM_YEAR} — Free, With Solutions | MindPeak`,
  description: `Solve 500+ NEET UG MCQs ${CURRENT_EXAM_YEAR}. Topic-wise, difficulty-wise with NCERT-based solutions. Track your score. 100% free practice by MindPeak.`,
  alternates: { canonical: "https://mindpeakinstitute.com/neet-practice" },
  openGraph: {
    title: `NEET Practice MCQs ${CURRENT_EXAM_YEAR} — 500+ Free NCERT-Based Questions`,
    description: `500+ NEET UG MCQs with NCERT-based solutions. Biology, Physics & Chemistry topic-wise. Track your score. 100% free by MindPeak.`,
    url: "https://mindpeakinstitute.com/neet-practice",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: _ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Free NEET Practice MCQs ${CURRENT_EXAM_YEAR} — 500+ Questions | MindPeak`,
    description: "500+ NEET MCQs with NCERT-based solutions. Biology, Physics & Chemistry. Score tracking. 100% free.",
    images: [_ogImage],
  },
};
export default function Page() { return <NEETPracticeHub />; }
