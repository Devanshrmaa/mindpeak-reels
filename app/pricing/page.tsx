import Pricing from "@/views/Pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Personalized JEE & NEET Coaching Plans",
  description: "Transparent pricing for 1-on-1 JEE & NEET coaching. Foundation ₹1L, 1-Year ₹1.3L, 2-Year ₹2.3L. Free trial, no hidden fees, payment plans available.",
  alternates: { canonical: "https://mindpeakinstitute.com/pricing" },
};
export default function PricingPage() { return <Pricing />; }
