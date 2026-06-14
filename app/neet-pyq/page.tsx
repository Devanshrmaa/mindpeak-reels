import NEETPYQHub from "@/views/NEETPYQHub";
import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

export const revalidate = false;

export const metadata: Metadata = {
  title: `NEET PYQ ${CURRENT_EXAM_YEAR} — 10-Year Paper Bank [Free Solutions]`,
  description: `Solve real NEET PYQs (2015–2025). Chapter-wise Biology, Physics & Chemistry with NCERT-based solutions. 100% free NEET PYQ practice by MindPeak.`,
  alternates: { canonical: "https://mindpeakinstitute.com/neet-pyq" },
  openGraph: {
    title: `NEET UG PYQs ${CURRENT_EXAM_YEAR} — Free 10-Year Chapter-wise Bank`,
    description: `Real NEET PYQs (2015–2025) chapter-wise — Biology, Physics & Chemistry with NCERT-based solutions. The most complete free NEET PYQ bank. By MindPeak.`,
    url: "https://mindpeakinstitute.com/neet-pyq",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/pyq.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `NEET PYQ ${CURRENT_EXAM_YEAR} — Free 10-Year Paper Bank [Chapter-wise]`,
    description: `Real NEET PYQs (2015–2025) with NCERT-based solutions. 100% free by MindPeak.`,
    images: ["https://mindpeakinstitute.com/images/og/pyq.jpg"],
  },
};
export default function Page() { return <NEETPYQHub />; }
