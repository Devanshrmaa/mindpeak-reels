import ComparisonPage from "@/views/ComparisonPage";
import { competitors } from "@/data/comparisonData";
import type { Metadata } from "next";

export const revalidate = false;

const data = competitors.find((c) => c.slug === "mindpeak-vs-resonance")!;
export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: "https://mindpeakinstitute.com/mindpeak-vs-resonance" },
};
export default function Page() { return <ComparisonPage />; }
