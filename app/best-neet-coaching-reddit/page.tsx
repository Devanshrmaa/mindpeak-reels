import RedditCoachingGuide from "@/views/RedditCoachingGuide";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";
import type { Metadata } from "next";

export const revalidate = false;

export const metadata: Metadata = {
  title: `Best NEET Coaching According to Reddit — An Honest Reading (${CURRENT_EXAM_YEAR})`,
  description: "What Reddit's NEET communities actually say about coaching: NCERT-first advice, Physics struggles, batch-size complaints, dropper-year counsel. Bias disclosed.",
  alternates: { canonical: "https://mindpeakinstitute.com/best-neet-coaching-reddit" },
  openGraph: {
    title: `Best NEET Coaching According to Reddit — An Honest Reading (${CURRENT_EXAM_YEAR})`,
    description: "Recurring themes from r/JEENEETards and r/MEDICOreTARDS on NEET coaching, turned into a checklist to verify before enrolling anywhere.",
    url: "https://mindpeakinstitute.com/best-neet-coaching-reddit",
    siteName: "MindPeak Institute",
    type: "article",
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/coaching.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best NEET Coaching According to Reddit — An Honest Reading",
    description: "What Reddit's NEET communities actually say about coaching, and how to verify it before you enrol anywhere.",
    images: ["https://mindpeakinstitute.com/images/og/coaching.jpg"],
  },
};

export default function Page() { return <RedditCoachingGuide variant="neet" />; }
