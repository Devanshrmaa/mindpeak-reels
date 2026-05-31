import JEEPracticeHub from "@/views/JEEPracticeHub";
import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

export const revalidate = false;

const _ogImage = "https://mindpeakinstitute.com/images/og/jee-practice.jpg";

export const metadata: Metadata = {
  title: `JEE Practice MCQs ${CURRENT_EXAM_YEAR} — Free, With Solutions | MindPeak`,
  description: `Solve 500+ JEE Main & Advanced MCQs ${CURRENT_EXAM_YEAR}. Topic-wise, difficulty-wise with step-by-step solutions. Track your score. 100% free practice by MindPeak.`,
  alternates: { canonical: "https://mindpeakinstitute.com/jee-practice" },
  openGraph: {
    title: `JEE Practice MCQs ${CURRENT_EXAM_YEAR} — 500+ Free Questions with Solutions`,
    description: `500+ JEE Main & Advanced MCQs with step-by-step solutions. Topic-wise, difficulty-wise. Track your score. 100% free by MindPeak.`,
    url: "https://mindpeakinstitute.com/jee-practice",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: _ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Free JEE Practice MCQs ${CURRENT_EXAM_YEAR} — 500+ Questions | MindPeak`,
    description: "500+ JEE MCQs with step-by-step solutions. Topic-wise practice with score tracking. 100% free.",
    images: [_ogImage],
  },
};
export default function Page() { return <JEEPracticeHub />; }
