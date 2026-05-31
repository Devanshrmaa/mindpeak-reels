import FreeTrial from "@/views/FreeTrial";
import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

export const revalidate = false;

export const metadata: Metadata = {
  title: `Free 1-on-1 JEE & NEET Demo Class — Zero Cost | MindPeak`,
  description: `Experience personalized JEE/NEET coaching free. Meet your mentor, get a custom study plan, see our platform live. No card, no commitment. Book in 30 seconds.`,
  alternates: { canonical: "https://mindpeakinstitute.com/free-trial" },
  openGraph: {
    title: "Book Your FREE 1-on-1 JEE & NEET Demo Class Today",
    description: "No credit card. No commitment. Just one free class with a dedicated IIT/AIIMS mentor + a personalised study plan. Book in under 30 seconds.",
    url: "https://mindpeakinstitute.com/free-trial",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/coaching.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FREE 1-on-1 JEE & NEET Demo Class — No Card Needed",
    description: "Meet your personal IIT/AIIMS mentor. Get a free study plan. Zero cost, zero commitment.",
    images: ["https://mindpeakinstitute.com/images/og/coaching.jpg"],
  },
};
export default function FreeTrialPage() { return <FreeTrial />; }
