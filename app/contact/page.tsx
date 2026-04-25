import Contact from "@/views/Contact";
import type { Metadata } from "next";

export const revalidate = false;

export const metadata: Metadata = {
  title: "Talk to Us — JEE & NEET Coaching Enquiry [Call/WhatsApp]",
  description: "Have questions about JEE/NEET coaching? Call +91 82194 57704, WhatsApp, or email. Get a callback within 30 minutes. Mon-Sat, 9 AM – 8 PM IST.",
  alternates: { canonical: "https://mindpeakinstitute.com/contact" },
  openGraph: {
    title: "Talk to Us — JEE & NEET Coaching Enquiry | MindPeak Institute",
    description: "Call +91 82194 57704 or WhatsApp. Get a callback within 30 minutes. Mon-Sat, 9 AM – 8 PM IST.",
    url: "https://mindpeakinstitute.com/contact",
    siteName: "MindPeak Institute",
    type: "website",
    images: [{ url: "https://mindpeakinstitute.com/hero-bg.jpg", width: 1200, height: 630 }],
  },
};
export default function ContactPage() { return <Contact />; }
