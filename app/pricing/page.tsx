import Pricing from "@/views/Pricing";
import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

export const revalidate = false;

export const metadata: Metadata = {
  title: `JEE & NEET Coaching Fees ${CURRENT_EXAM_YEAR} — from ₹1L/year | MindPeak`,
  description: `Transparent JEE/NEET coaching pricing ${CURRENT_EXAM_YEAR}. 1-year ₹1.3L, 2-year ₹2.3L, crash ₹30K/subject. EMI available, no hidden fees. Try a free demo class first.`,
  alternates: { canonical: "https://mindpeakinstitute.com/pricing" },
  openGraph: {
    title: `Honest JEE & NEET Coaching Fees — No Hidden Charges | MindPeak ${CURRENT_EXAM_YEAR}`,
    description: "See exactly what you pay for 1-on-1 JEE & NEET coaching. Starting ₹1.3L/year. EMI options. Compare with Kota costs. Free demo before you commit.",
    url: "https://mindpeakinstitute.com/pricing",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/coaching.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "JEE & NEET Coaching Fees — Transparent, No Surprises | MindPeak",
    description: "1-year from ₹1.3L, 2-year from ₹2.3L, crash courses from ₹30K/subject. EMI available.",
    images: ["https://mindpeakinstitute.com/images/og/coaching.jpg"],
  },
};
export default function PricingPage() { return <Pricing />; }
