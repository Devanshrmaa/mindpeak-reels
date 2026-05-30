"use client";

/**
 * StateHubPage — indexable regional hub that consolidates per-city doorway
 * pages for a state (recovery action #4). Content is genuinely
 * state-specific (board, state entrance exam, real colleges, cities).
 */

import { usePathname } from "next/navigation";
import { Link } from "@/components/RouterLink";
import { SEOHead } from "@/components/SEOHead";
import { useDemoModal } from "@/components/DemoBookingModal";
import { parseStateHubSlug } from "@/data/stateHubData";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";
import { GraduationCap, MapPin, BookOpen, CheckCircle2, Phone } from "lucide-react";

const BASE = "https://mindpeakinstitute.com";

export default function StateHubPage() {
  const pathname = usePathname();
  const slug = pathname.replace(/^\//, "");
  const parsed = parseStateHubSlug(slug);
  const { openDemoModal } = useDemoModal();

  if (!parsed) return null;
  const { exam, hub } = parsed;
  const isJEE = exam === "JEE";
  const intro = isJEE ? hub.jeeIntro : hub.neetIntro;
  const colleges = isJEE ? hub.engColleges : hub.medColleges;
  const examRoute = isJEE ? hub.engExam : hub.medRoute;
  const examFull = isJEE ? "JEE Main & Advanced" : "NEET UG";
  const title = `Best ${exam} Coaching in ${hub.state} ${CURRENT_EXAM_YEAR} — 1-on-1 Online | MindPeak`;
  const description = `1-on-1 online ${exam} coaching for ${hub.state} students. ${hub.board} to ${examFull} bridge, ${examRoute} integrated. Targeting ${colleges.slice(0, 2).join(" & ")}. Book a free demo.`.slice(0, 160);
  const canonical = `${BASE}/${slug}`;

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `${exam} Coaching in ${hub.state} — MindPeak Institute`,
    description,
    provider: { "@type": "EducationalOrganization", name: "MindPeak Institute", url: BASE },
    offers: { "@type": "Offer", category: "Paid", priceCurrency: "INR", availability: "https://schema.org/InStock" },
    hasCourseInstance: { "@type": "CourseInstance", courseMode: "online" },
    about: hub.state,
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: hub.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: `${exam} Coaching`, item: `${BASE}/${exam.toLowerCase()}-coaching` },
      { "@type": "ListItem", position: 3, name: `${exam} Coaching in ${hub.state}`, item: canonical },
    ],
  };

  return (
    <>
      <SEOHead title={title} description={description} canonical={canonical} jsonLd={[courseSchema, faqSchema, breadcrumbSchema]} />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="max-w-4xl mx-auto px-6 pt-28 pb-12 text-center">
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary">Home</Link> ·{" "}
            <Link to={`/${exam.toLowerCase()}-coaching`} className="hover:text-primary">{exam} Coaching</Link> ·{" "}
            <span className="text-foreground">{hub.state}</span>
          </nav>
          <h1 className="font-display font-black text-foreground text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight mb-5">
            Best {exam} Coaching in {hub.state}{" "}
            <span className="text-gradient-gold">{CURRENT_EXAM_YEAR}</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-8">{intro}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button onClick={openDemoModal} className="px-8 py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-[0.15em] shadow-gold-glow hover:scale-105 transition-transform">
              Book a Free Demo Class
            </button>
            <a href="tel:+918219457704" className="px-8 py-4 border border-border text-foreground font-display text-sm uppercase tracking-[0.15em] hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" /> Call +91 82194 57704
            </a>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 pb-20 space-y-12">
          {/* State exam / board */}
          <section>
            <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" /> {exam} prep built for {hub.state} students
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We coach against the exact path {hub.state} students take: from the <strong className="text-foreground">{hub.board}</strong> syllabus to <strong className="text-foreground">{examFull}</strong>, with{" "}
              <strong className="text-foreground">{examRoute}</strong> handled in the same 1-on-1 plan. Your dedicated mentor diagnoses your gaps in the first week and builds a weekly plan around them — no generic batch lectures.
            </p>
          </section>

          {/* Target colleges */}
          <section>
            <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" /> Colleges {hub.state} students target
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {colleges.map((c) => (
                <li key={c} className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /> {c}
                </li>
              ))}
            </ul>
          </section>

          {/* Cities served */}
          <section>
            <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" /> Serving students across {hub.state}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Because coaching is 1-on-1 and online, students get identical mentor quality whether they're in {hub.cities.slice(0, -1).join(", ")} or {hub.cities[hub.cities.length - 1]} — no relocation to Kota, Delhi or a metro required.
            </p>
          </section>

          {/* FAQs */}
          <section>
            <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl mb-4">Frequently asked questions</h2>
            <div className="space-y-5">
              {hub.faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="font-display font-semibold text-foreground mb-1.5">{f.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-2xl border border-border bg-card/30 p-8 text-center">
            <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl mb-3">
              Start your {exam} journey from {hub.state}
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Book a free demo class with a mentor and get a personalised study plan for {examFull} {CURRENT_EXAM_YEAR}.
            </p>
            <button onClick={openDemoModal} className="px-8 py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-[0.15em] shadow-gold-glow hover:scale-105 transition-transform">
              Book a Free Demo Class
            </button>
          </section>
        </div>
      </main>
    </>
  );
}
