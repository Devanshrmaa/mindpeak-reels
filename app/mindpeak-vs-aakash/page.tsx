import ComparisonPage from "@/views/ComparisonPage";
import { competitors } from "@/data/comparisonData";
import type { Metadata } from "next";

const data = competitors.find((c) => c.slug === "mindpeak-vs-aakash")!;
export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: "https://mindpeakinstitute.com/mindpeak-vs-aakash" },
};
export default function Page() { return <ComparisonPage />; }
