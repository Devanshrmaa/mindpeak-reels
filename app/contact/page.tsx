import Contact from "@/views/Contact";
import type { Metadata } from "next";

export const revalidate = false;

export const metadata: Metadata = {
  title: "Contact MindPeak — JEE & NEET Coaching Enquiry | MindPeak",
  description: "Have questions about JEE/NEET coaching? Call +91 82194 57704, WhatsApp, or email. Get a callback within 30 minutes. Mon-Sat, 9 AM – 8 PM IST.",
  alternates: { canonical: "https://mindpeakinstitute.com/contact" },
  openGraph: {
    title: "Contact MindPeak Institute — We Reply in 30 Minutes",
    description: "Call, WhatsApp, or email MindPeak for JEE & NEET coaching enquiries. Mon–Sat, 9 AM–8 PM IST. Book a free demo class on the spot.",
    url: "https://mindpeakinstitute.com/contact",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/coaching.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact MindPeak — JEE & NEET Coaching Enquiry",
    description: "Call, WhatsApp, or email. We reply within 30 minutes. Mon–Sat, 9 AM–8 PM IST.",
    images: ["https://mindpeakinstitute.com/images/og/coaching.jpg"],
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://mindpeakinstitute.com/contact",
      url: "https://mindpeakinstitute.com/contact",
      name: "Contact MindPeak Institute",
      description:
        "Contact MindPeak Institute for JEE & NEET coaching enquiries. Call, WhatsApp, or email our team. Mon–Sat, 9 AM–8 PM IST.",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://mindpeakinstitute.com/#website",
        name: "MindPeak Institute",
        url: "https://mindpeakinstitute.com",
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://mindpeakinstitute.com" },
          { "@type": "ListItem", position: 2, name: "Contact", item: "https://mindpeakinstitute.com/contact" },
        ],
      },
    },
    {
      "@type": ["EducationalOrganization", "LocalBusiness"],
      "@id": "https://mindpeakinstitute.com/contact#organization",
      name: "MindPeak Institute",
      url: "https://mindpeakinstitute.com",
      telephone: "+91-82194-57704",
      email: "mindpeak@mindpeakinstitute.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Nehran Pukhar Road",
        addressLocality: "Dehra Gopipur",
        addressRegion: "Himachal Pradesh",
        postalCode: "176110",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 32.4394,
        longitude: 76.5362,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "20:00",
        },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-82194-57704",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "20:00",
          },
        },
      ],
      sameAs: [
        "https://instagram.com/mindpeakinstitute",
        "https://www.facebook.com/profile.php?id=61584805776923",
        "https://www.linkedin.com/company/mindpeak-institute/",
        "https://x.com/mindpeakins",
        "https://www.youtube.com/@mindpeakinstitute",
      ],
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <Contact />
    </>
  );
}
