import JEEPYQHub from "@/views/JEEPYQHub";
import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

export const revalidate = false;

export const metadata: Metadata = {
  title: `JEE PYQ ${CURRENT_EXAM_YEAR} — 10-Year Paper Bank [Free Solutions]`,
  description: `Solve real JEE Main & Advanced PYQs (2015–2025). Chapter-wise with year, shift info & detailed solutions. 100% free JEE PYQ practice by MindPeak.`,
  alternates: { canonical: "https://mindpeakinstitute.com/jee-pyq" },
  openGraph: {
    title: `JEE Main & Advanced PYQs ${CURRENT_EXAM_YEAR} — Free 10-Year Chapter-wise Bank`,
    description: `Real JEE PYQs (2015–2025) chapter-wise with year, shift & detailed solutions. The most complete free JEE PYQ bank. By MindPeak.`,
    url: "https://mindpeakinstitute.com/jee-pyq",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/pyq.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `JEE PYQ ${CURRENT_EXAM_YEAR} — Free 10-Year Paper Bank [Chapter-wise]`,
    description: `Real JEE Main & Advanced PYQs (2015–2025) with detailed solutions. 100% free by MindPeak.`,
    images: ["https://mindpeakinstitute.com/images/og/pyq.jpg"],
  },
};
export default function Page() { return <JEEPYQHub />; }
