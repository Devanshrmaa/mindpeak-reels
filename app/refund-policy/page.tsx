import RefundPolicy from "@/views/RefundPolicy";
import type { Metadata } from "next";

export const revalidate = false;

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy — MindPeak Institute",
  description: "MindPeak Institute's refund and cancellation policy for JEE & NEET coaching programs. EMI-friendly, transparent terms with no hidden charges.",
  alternates: { canonical: "https://mindpeakinstitute.com/refund-policy" },
  robots: { index: false, follow: true },
};
export default function RefundPolicyPage() { return <RefundPolicy />; }
