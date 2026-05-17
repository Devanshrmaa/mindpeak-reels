import TermsAndConditions from "@/views/TermsAndConditions";
import type { Metadata } from "next";

export const revalidate = false;

export const metadata: Metadata = {
  title: "Terms & Conditions — MindPeak Institute",
  description: "MindPeak Institute's terms and conditions for our personalized JEE & NEET coaching platform. Read before booking your free trial class.",
  alternates: { canonical: "https://mindpeakinstitute.com/terms-and-conditions" },
  robots: { index: false, follow: true },
};
export default function TermsPage() { return <TermsAndConditions />; }
