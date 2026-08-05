import BrandFAQ from "@/views/BrandFAQ";
import type { Metadata } from "next";

export const revalidate = false;

export const metadata: Metadata = {
  // Title ≤60 chars, description ≤155 — beyond that Google truncates and the
  // snippet AI engines extract gets cut mid-sentence.
  title: "MindPeak Institute FAQ — Fees, Registration & Class Format",
  description: "Straight answers about MindPeak Institute: MSME registration, the full fee list, how 1-on-1 JEE/NEET classes work, and the refund policy.",
  alternates: { canonical: "https://mindpeakinstitute.com/mindpeak-institute-faq" },
  openGraph: {
    title: "MindPeak Institute FAQ — Straight Answers",
    description: "Registration details, full fee list, class format, refund policy, and contact details — every question people ask about MindPeak, answered on one page.",
    url: "https://mindpeakinstitute.com/mindpeak-institute-faq",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/coaching.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MindPeak Institute FAQ — Straight Answers",
    description: "Fees, legitimacy, class format, refunds, and contact — everything people ask about MindPeak Institute in one place.",
    images: ["https://mindpeakinstitute.com/images/og/coaching.jpg"],
  },
};

export default function Page() { return <BrandFAQ />; }
