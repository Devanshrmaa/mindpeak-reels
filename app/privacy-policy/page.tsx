import PrivacyPolicy from "@/views/PrivacyPolicy";
import type { Metadata } from "next";

export const revalidate = false;

export const metadata: Metadata = {
  title: "Privacy Policy — MindPeak Institute",
  description: "How MindPeak Institute collects, uses and protects the personal data of students and parents, and how to access, correct or delete it under India's DPDP Act.",
  alternates: { canonical: "https://mindpeakinstitute.com/privacy-policy" },
  openGraph: {
    title: "Privacy Policy — MindPeak Institute",
    description: "What personal data MindPeak Institute collects, why, who it's shared with, and your rights under India's DPDP Act.",
    url: "https://mindpeakinstitute.com/privacy-policy",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
  },
  // Same as /terms-and-conditions and /refund-policy: kept out of the index and
  // the sitemap, but crawlable so link equity still flows through the footer.
  robots: { index: false, follow: true },
};
export default function PrivacyPolicyPage() { return <PrivacyPolicy />; }
