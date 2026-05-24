import JEEPYQHub from "@/views/JEEPYQHub";
import type { Metadata } from "next";

export const revalidate = false;

export const metadata: Metadata = {
  title: `JEE Previous Year Questions — 2015–2025 [Free] | MindPeak`,
  description: `Solve real JEE Main & Advanced PYQs (2015–2025). Chapter-wise with year, shift info & detailed solutions. 100% free JEE PYQ practice by MindPeak.`,
  alternates: { canonical: "https://mindpeakinstitute.com/jee-pyq" },
  openGraph: {
    title: "JEE PYQs 2015–2025 — Chapter-wise with Solutions [Free]",
    description:
      "Solve 10 years of JEE Main & Advanced previous year questions. Chapter-wise, year-wise with detailed step-by-step solutions. 100% free.",
    url: "https://mindpeakinstitute.com/jee-pyq",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/pyq.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "10 Years JEE PYQs — Free Chapter-wise | MindPeak",
    description: "JEE Main & Advanced 2015–2025 previous year questions with solutions. 100% free.",
    images: ["https://mindpeakinstitute.com/images/og/pyq.jpg"],
  },
};
export default function Page() { return <JEEPYQHub />; }
