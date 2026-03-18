import ComparisonPage from "@/views/ComparisonPage";
import { competitors } from "@/data/comparisonData";
import type { Metadata } from "next";

export const revalidate = false;

const data = competitors.find((c) => c.slug === "mindpeak-vs-sri-chaitanya")!;
export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: "https://mindpeakinstitute.com/mindpeak-vs-sri-chaitanya" },
};
export default function Page() { return <ComparisonPage />; }
