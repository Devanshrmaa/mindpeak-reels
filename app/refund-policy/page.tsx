import RefundPolicy from "@/views/RefundPolicy";
import type { Metadata } from "next";

export const revalidate = false;

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "MindPeak Institute refund policy. Understand our terms for course cancellations and refund eligibility.",
  alternates: { canonical: "https://mindpeakinstitute.com/refund-policy" },
};
export default function RefundPolicyPage() { return <RefundPolicy />; }
