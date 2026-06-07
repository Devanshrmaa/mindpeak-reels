import JEECoaching from "@/views/JEECoaching";
import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

export const revalidate = false;

const title = `Best JEE Coaching Online ${CURRENT_EXAM_YEAR} — 1-on-1 | MindPeak`;
const description = `Crack JEE ${CURRENT_EXAM_YEAR} with a dedicated 1-on-1 IIT-alumnus mentor. Adaptive curriculum, AIR 42 proven rank, 95% success rate. Book your free demo class.`;
const ogImage = "https://mindpeakinstitute.com/images/og/coaching.jpg";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "https://mindpeakinstitute.com/jee-coaching",
    languages: { "en-IN": "https://mindpeakinstitute.com/jee-coaching", "x-default": "https://mindpeakinstitute.com/jee-coaching" },
  },
  openGraph: {
    title,
    description,
    url: "https://mindpeakinstitute.com/jee-coaching",
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
export default function JEECoachingPage() { return <JEECoaching />; }
