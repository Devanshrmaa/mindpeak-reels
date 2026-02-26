import SEOLandingPage from "@/views/SEOLandingPage";
import { buildSEOLandingMetadata } from "@/lib/seoLandingMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = buildSEOLandingMetadata("jee-math-trigonometry");
export default function Page() { return <SEOLandingPage />; }
