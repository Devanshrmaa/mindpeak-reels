import TermsAndConditions from "@/views/TermsAndConditions";
import type { Metadata } from "next";

export const revalidate = false;

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "MindPeak Institute terms and conditions governing the use of our platform and coaching services.",
  alternates: { canonical: "https://mindpeakinstitute.com/terms-and-conditions" },
};
export default function TermsPage() { return <TermsAndConditions />; }
