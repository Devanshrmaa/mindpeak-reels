import SEOLandingPage from "@/views/SEOLandingPage";
import { buildSEOLandingMetadata } from "@/lib/seoLandingMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = buildSEOLandingMetadata("jee-chemistry-organic");
export default function Page() { return <SEOLandingPage />; }
