import SEOLandingPage from "@/views/SEOLandingPage";
import { buildSEOLandingMetadata } from "@/lib/seoLandingMetadata";
import type { Metadata } from "next";

export const revalidate = false;

export const metadata: Metadata = buildSEOLandingMetadata("jee-mathematics-coaching");
export default function Page() { return <SEOLandingPage />; }
