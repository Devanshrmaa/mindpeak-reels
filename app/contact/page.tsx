import Contact from "@/views/Contact";
import type { Metadata } from "next";

export const revalidate = false;

export const metadata: Metadata = {
  title: "Talk to Us — JEE & NEET Coaching Enquiry [Call/WhatsApp]",
  description: "Have questions about JEE/NEET coaching? Call +91 82194 57704, WhatsApp, or email. Get a callback within 30 minutes. Mon-Sat, 9 AM – 8 PM IST.",
  alternates: { canonical: "https://mindpeakinstitute.com/contact" },
};
export default function ContactPage() { return <Contact />; }
