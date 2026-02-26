import KotaAlternative from "@/views/KotaAlternative";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Alternative to Kota Coaching — Online 1-on-1 JEE/NEET Preparation",
  description: "Why send your child to Kota? Get personalized 1-on-1 JEE/NEET coaching at home. 60% cheaper, dedicated mentor, 95% success rate. The smarter Kota alternative.",
  alternates: { canonical: "https://mindpeakinstitute.com/kota-coaching-alternative" },
};
export default function Page() { return <KotaAlternative />; }
