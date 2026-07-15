import NEETCoaching from "@/views/NEETCoaching";
import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

export const revalidate = false;

const title = `Best NEET Coaching Online ${CURRENT_EXAM_YEAR} — 1-on-1 | MindPeak`;
const description = `Crack NEET ${CURRENT_EXAM_YEAR} with one-to-one Biology-first coaching. NCERT mastery, a dedicated personal mentor, 95% success rate. Book a free demo class now.`;
const ogImage = "https://mindpeakinstitute.com/images/og/coaching.jpg";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "https://mindpeakinstitute.com/neet-coaching",
    languages: { "en-IN": "https://mindpeakinstitute.com/neet-coaching", "x-default": "https://mindpeakinstitute.com/neet-coaching" },
  },
  openGraph: {
    title,
    description,
    url: "https://mindpeakinstitute.com/neet-coaching",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};
export default function NEETCoachingPage() { return <NEETCoaching />; }
