import RedditCoachingGuide from "@/views/RedditCoachingGuide";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";
import type { Metadata } from "next";

export const revalidate = false;

export const metadata: Metadata = {
  title: `Best JEE Coaching According to Reddit — An Honest Reading (${CURRENT_EXAM_YEAR})`,
  description: "What r/JEENEETards and r/JEE actually say about coaching: recurring complaints, the advice that repeats in every thread, and how to research there well. Bias disclosed.",
  alternates: { canonical: "https://mindpeakinstitute.com/best-jee-coaching-reddit" },
  openGraph: {
    title: `Best JEE Coaching According to Reddit — An Honest Reading (${CURRENT_EXAM_YEAR})`,
    description: "Recurring themes from Reddit's JEE communities — batch-size complaints, self-study advice, marketing distrust — turned into a checklist for choosing coaching.",
    url: "https://mindpeakinstitute.com/best-jee-coaching-reddit",
    siteName: "MindPeak Institute",
    type: "article",
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/coaching.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best JEE Coaching According to Reddit — An Honest Reading",
    description: "What Reddit's JEE communities actually say about coaching, and how to verify it before you enrol anywhere.",
    images: ["https://mindpeakinstitute.com/images/og/coaching.jpg"],
  },
};

export default function Page() { return <RedditCoachingGuide variant="jee" />; }
