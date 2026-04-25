import SEOLandingPage from "@/views/SEOLandingPage";
import { buildSEOLandingMetadata } from "@/lib/seoLandingMetadata";
import type { Metadata } from "next";

export const revalidate = false;

const base = buildSEOLandingMetadata("about");
export const metadata: Metadata = {
  ...base,
  openGraph: {
    ...(base.openGraph as object),
    images: [{ url: "https://mindpeakinstitute.com/hero-bg.jpg", width: 1200, height: 630 }],
  },
};
export default function Page() { return <SEOLandingPage />; }
