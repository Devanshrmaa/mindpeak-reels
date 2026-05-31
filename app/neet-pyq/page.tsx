import NEETPYQHub from "@/views/NEETPYQHub";
import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

export const revalidate = false;

const _ogImage = "https://mindpeakinstitute.com/images/og/pyq.jpg";

export const metadata: Metadata = {
  title: `NEET PYQ ${CURRENT_EXAM_YEAR} — 10 Years Free Solutions | MindPeak`,
  description: `Solve real NEET PYQs (2015–2025). Chapter-wise Biology, Physics & Chemistry with NCERT-based solutions. 100% free NEET PYQ practice by MindPeak.`,
  alternates: { canonical: "https://mindpeakinstitute.com/neet-pyq" },
  openGraph: {
    title: `NEET Previous Year Questions ${CURRENT_EXAM_YEAR} — 10 Years, Free Solutions`,
    description: `Practice real NEET PYQs (2015–2025). Chapter-wise Biology, Physics & Chemistry with NCERT expert solutions. 100% free by MindPeak.`,
    url: "https://mindpeakinstitute.com/neet-pyq",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: _ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `NEET PYQ ${CURRENT_EXAM_YEAR} — 10 Years Free | MindPeak`,
    description: "Real NEET PYQs (2015–2025) with NCERT-based solutions. Chapter-wise Biology, Physics & Chemistry. 100% free.",
    images: [_ogImage],
  },
};
export default function Page() { return <NEETPYQHub />; }
