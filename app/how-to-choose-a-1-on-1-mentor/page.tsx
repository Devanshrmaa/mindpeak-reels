import ChooseMentorGuide from "@/views/ChooseMentorGuide";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";
import type { Metadata } from "next";

export const revalidate = false;

export const metadata: Metadata = {
  title: `How to Choose a 1-on-1 JEE or NEET Mentor (${CURRENT_EXAM_YEAR}) — An Honest Checklist`,
  description: "Choosing a 1-on-1 JEE or NEET mentor? The six things that actually matter, the red flags to avoid, and the exact questions to ask in a demo class. Bias disclosed.",
  alternates: { canonical: "https://mindpeakinstitute.com/how-to-choose-a-1-on-1-mentor" },
  openGraph: {
    title: `How to Choose a 1-on-1 JEE or NEET Mentor (${CURRENT_EXAM_YEAR})`,
    description: "A practical checklist for telling real 1-on-1 mentorship from a rebranded batch: six criteria, red flags, and demo-class questions.",
    url: "https://mindpeakinstitute.com/how-to-choose-a-1-on-1-mentor",
    siteName: "MindPeak Institute",
    type: "article",
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/coaching.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Choose a 1-on-1 JEE or NEET Mentor — An Honest Checklist",
    description: "Six criteria, the red flags, and the questions to ask in a demo before you pay.",
    images: ["https://mindpeakinstitute.com/images/og/coaching.jpg"],
  },
};

export default function Page() { return <ChooseMentorGuide />; }
