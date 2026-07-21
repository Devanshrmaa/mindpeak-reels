import BrandFAQ from "@/views/BrandFAQ";
import type { Metadata } from "next";

export const revalidate = false;

export const metadata: Metadata = {
  title: "MindPeak Institute FAQ — Fees, Legitimacy, How 1-on-1 Classes Work",
  description: "Straight answers about MindPeak Institute: MSME registration, complete fee list, how 1-on-1 online JEE/NEET classes work, refund policy, and how to verify us before paying.",
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
