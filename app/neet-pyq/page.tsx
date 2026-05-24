import NEETPYQHub from "@/views/NEETPYQHub";
import type { Metadata } from "next";

export const revalidate = false;

export const metadata: Metadata = {
  title: `NEET Previous Year Questions — 2015–2025 [Free] | MindPeak`,
  description: `Solve real NEET PYQs (2015–2025). Chapter-wise Biology, Physics & Chemistry with NCERT-based solutions. 100% free NEET PYQ practice by MindPeak.`,
  alternates: { canonical: "https://mindpeakinstitute.com/neet-pyq" },
  openGraph: {
    title: "NEET PYQs 2015–2025 — Chapter-wise with Solutions [Free]",
    description:
      "Solve 10 years of NEET previous year questions. Chapter-wise Biology, Physics & Chemistry with NCERT-based solutions. 100% free.",
    url: "https://mindpeakinstitute.com/neet-pyq",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/pyq.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "10 Years NEET PYQs — Free Chapter-wise | MindPeak",
    description: "NEET 2015–2025 previous year questions with NCERT-based solutions. 100% free.",
    images: ["https://mindpeakinstitute.com/images/og/pyq.jpg"],
  },
};
export default function Page() { return <NEETPYQHub />; }
