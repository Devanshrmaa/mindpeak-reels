import JEEPracticeHub from "@/views/JEEPracticeHub";
import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

export const revalidate = false;

export const metadata: Metadata = {
  title: `JEE Practice MCQs ${CURRENT_EXAM_YEAR} — Free with Solutions | MindPeak`,
  description: `Solve 500+ JEE Main & Advanced MCQs ${CURRENT_EXAM_YEAR}. Topic-wise, difficulty-wise with step-by-step solutions. Track your score. 100% free practice by MindPeak.`,
  alternates: { canonical: "https://mindpeakinstitute.com/jee-practice" },
  openGraph: {
    title: `500+ Free JEE Practice MCQs ${CURRENT_EXAM_YEAR} — Physics, Chemistry, Maths`,
    description:
      "Topic-wise JEE Main & Advanced MCQs with instant answer reveal and step-by-step solutions. Track your score. 100% free.",
    url: "https://mindpeakinstitute.com/jee-practice",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/jee-practice.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `500+ Free JEE MCQs ${CURRENT_EXAM_YEAR} | MindPeak`,
    description: "Physics, Chemistry, Maths MCQs with step-by-step solutions. Track your score. 100% free.",
    images: ["https://mindpeakinstitute.com/images/og/jee-practice.jpg"],
  },
};
export default function Page() { return <JEEPracticeHub />; }
