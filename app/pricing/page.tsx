import Pricing from "@/views/Pricing";
import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

export const revalidate = false;

export const metadata: Metadata = {
  title: `JEE & NEET Coaching Fees ${CURRENT_EXAM_YEAR} — Plans from ₹8,333/mo [Free Trial]`,
  description: `Transparent JEE/NEET coaching pricing ${CURRENT_EXAM_YEAR}. Foundation ₹1L, 1-Year ₹1.3L, 2-Year ₹2.3L. EMI available, no hidden fees. Try a free demo class first.`,
  alternates: { canonical: "https://mindpeakinstitute.com/pricing" },
};
export default function PricingPage() { return <Pricing />; }
