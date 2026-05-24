import NEETPracticeHub from "@/views/NEETPracticeHub";
import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

export const revalidate = false;

export const metadata: Metadata = {
  title: `NEET Practice MCQs ${CURRENT_EXAM_YEAR} — Free with Solutions | MindPeak`,
  description: `Solve 500+ NEET UG MCQs ${CURRENT_EXAM_YEAR}. Topic-wise, difficulty-wise with NCERT-based solutions. Track your score. 100% free practice by MindPeak.`,
  alternates: { canonical: "https://mindpeakinstitute.com/neet-practice" },
  openGraph: {
    title: `500+ Free NEET Practice MCQs ${CURRENT_EXAM_YEAR} — Biology, Physics, Chemistry`,
    description:
      "Topic-wise NEET UG MCQs with NCERT-based solutions and instant answer reveal. Track your score. 100% free.",
    url: "https://mindpeakinstitute.com/neet-practice",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/neet-practice.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `500+ Free NEET MCQs ${CURRENT_EXAM_YEAR} | MindPeak`,
    description: "Biology, Physics, Chemistry MCQs with NCERT-based solutions. Track your score. 100% free.",
    images: ["https://mindpeakinstitute.com/images/og/neet-practice.jpg"],
  },
};
export default function Page() { return <NEETPracticeHub />; }
