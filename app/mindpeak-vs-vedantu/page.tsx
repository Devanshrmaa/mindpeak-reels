import ComparisonPage from "@/views/ComparisonPage";
import { competitors } from "@/data/comparisonData";
import type { Metadata } from "next";

export const revalidate = false;

const data = competitors.find((c) => c.slug === "mindpeak-vs-vedantu")!;
const OG_IMAGE = "https://mindpeakinstitute.com/images/og/coaching.jpg";

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: "https://mindpeakinstitute.com/mindpeak-vs-vedantu" },
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    url: "https://mindpeakinstitute.com/mindpeak-vs-vedantu",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: data.metaTitle,
    description: data.metaDescription,
    images: [OG_IMAGE],
  },
};
export default function Page() { return <ComparisonPage />; }
