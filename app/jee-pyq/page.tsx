import JEEPYQHub from "@/views/JEEPYQHub";
import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

export const revalidate = false;

const _ogImage = "https://mindpeakinstitute.com/images/og/pyq.jpg";

export const metadata: Metadata = {
  title: `JEE PYQ ${CURRENT_EXAM_YEAR} — 10 Years Free Solutions | MindPeak`,
  description: `Solve real JEE Main & Advanced PYQs (2015–2025). Chapter-wise with year, shift info & detailed solutions. 100% free JEE PYQ practice by MindPeak.`,
  alternates: { canonical: "https://mindpeakinstitute.com/jee-pyq" },
  openGraph: {
    title: `JEE Previous Year Questions ${CURRENT_EXAM_YEAR} — 10 Years, Free Solutions`,
    description: `Practice real JEE Main & Advanced PYQs (2015–2025). Chapter-wise with year & shift info, expert solutions. 100% free by MindPeak.`,
    url: "https://mindpeakinstitute.com/jee-pyq",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: _ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `JEE PYQ ${CURRENT_EXAM_YEAR} — 10 Years Free | MindPeak`,
    description: "Real JEE Main & Advanced PYQs (2015–2025) with detailed solutions. Chapter-wise, free. By MindPeak.",
    images: [_ogImage],
  },
};
export default function Page() { return <JEEPYQHub />; }
