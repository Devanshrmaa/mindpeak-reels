"use client";

/**
 * StateHubPage — indexable regional hub that consolidates per-city doorway
 * pages for a state (recovery action #4).
 *
 * All copy comes from buildStateHubModel(), which joins the hub registry
 * with the per-state research layer (real cutoffs, aspirant stats,
 * board-transition analysis). The server crawler shell renders the same
 * model, so visible content and crawler HTML cannot drift.
 *
 * JSON-LD is emitted server-side in app/[...slug]/StateHubServerShell.tsx —
 * do NOT pass jsonLd to SEOHead here or the schemas double up.
 */

import { usePathname } from "next/navigation";
import { Link } from "@/components/RouterLink";
import { SEOHead } from "@/components/SEOHead";
import { useDemoModal } from "@/components/DemoBookingModal";
import { parseStateHubSlug } from "@/data/stateHubData";
import { buildStateHubModel } from "@/lib/stateHubContent";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";
import {
  GraduationCap,
  MapPin,
  BookOpen,
  CheckCircle2,
  Phone,
  TrendingUp,
  Lightbulb,
  Briefcase,
  Compass,
  Link2,
} from "lucide-react";

export default function StateHubPage() {
  const pathname = usePathname();
  const slug = pathname.replace(/^\//, "");
  const parsed = parseStateHubSlug(slug);
  const { openDemoModal } = useDemoModal();

  if (!parsed) return null;
  const m = buildStateHubModel(parsed.exam, parsed.hub);
  const { exam, state } = m;

  // Mirror resolveSlugMetadata's state-hub title so SEOHead doesn't swap the
  // SSR title for a different one after hydration.
  const title = exam === "JEE" && parsed.hub.stateExamName
    ? `Best JEE Coaching in ${state} ${CURRENT_EXAM_YEAR} — ${parsed.hub.stateExamName} + JEE 1-on-1 | MindPeak`
    : `Best ${exam} Coaching in ${state} ${CURRENT_EXAM_YEAR} — 1-on-1 Online | MindPeak`;
  const description = `1-on-1 online ${exam} coaching for ${state} students. ${m.board} to ${m.examFull} bridge, ${m.examRoute} integrated. Book a free demo.`.slice(0, 160);

  return (
    <>
      <SEOHead title={title} description={description} canonical={m.canonical} />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="max-w-4xl mx-auto px-6 pt-28 pb-12 text-center">
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary">Home</Link> ·{" "}
            <Link to={`/${exam.toLowerCase()}-coaching`} className="hover:text-primary">{exam} Coaching</Link> ·{" "}
            <span className="text-foreground">{state}</span>
          </nav>
          <h1 className="font-display font-black text-foreground text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight mb-5">
            Best {exam} Coaching in {state}{" "}
            <span className="text-gradient-gold">{CURRENT_EXAM_YEAR}</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-8">{m.intro}</p>

          {/* State stat chips */}
          <div className="grid sm:grid-cols-3 gap-3 mb-8 text-left">
            {m.stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-card/30 px-4 py-3">
                <div className="text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground mb-1">{s.label}</div>
                <div className="text-sm font-display font-semibold text-foreground leading-snug">{s.value}</div>
              </div>
            ))}
          </div>

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
          {/* State exam / board path */}
          <section>
            <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" /> {exam} prep built for {state} students
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We coach against the exact path {state} students take: from the <strong className="text-foreground">{m.board}</strong> syllabus to <strong className="text-foreground">{m.examFull}</strong>, with{" "}
              <strong className="text-foreground">{m.examRoute}</strong> handled in the same 1-on-1 plan. Your dedicated mentor diagnoses your gaps in the first week and builds a weekly plan around them — no generic batch lectures.
            </p>
            {m.stateExam && (
              <div className="mt-5 rounded-xl border border-border bg-card/30 p-5">
                <h3 className="font-display font-semibold text-foreground mb-3">{m.stateExam.name} at a glance — and how it fits your {exam} plan</h3>
                <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                  <div>
                    <dt className="text-muted-foreground uppercase tracking-[0.12em] text-[0.65rem] mb-1">Seats on this route</dt>
                    <dd className="text-foreground">{m.stateExam.seats}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground uppercase tracking-[0.12em] text-[0.65rem] mb-1">Overlap with the national exam</dt>
                    <dd className="text-foreground">{m.stateExam.overlap}</dd>
                  </div>
                </dl>
              </div>
            )}
          </section>

          {/* Target colleges with realistic cutoffs */}
          <section>
            <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" /> Colleges {state} students target — and what they take
            </h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-card/40 text-left">
                    <th scope="col" className="px-4 py-3 font-display font-semibold text-foreground">College</th>
                    <th scope="col" className="px-4 py-3 font-display font-semibold text-foreground">Realistic cutoff</th>
                    {m.exam === "JEE" && <th scope="col" className="px-4 py-3 font-display font-semibold text-foreground hidden sm:table-cell">Sought branches</th>}
                  </tr>
                </thead>
                <tbody>
                  {m.colleges.map((c) => (
                    <tr key={c.name} className="border-b border-border/50 last:border-0">
                      <td className="px-4 py-3 text-foreground">{c.name}</td>
                      <td className="px-4 py-3 text-muted-foreground">{c.cutoff ?? "Via state counselling"}</td>
                      {m.exam === "JEE" && <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell">{c.branch ?? "—"}</td>}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mt-3">
              Cutoffs are recent-trend bands, not guarantees — your mentor tracks your weekly mock scores against the exact ladder you're targeting and adjusts the plan when the data says so.
            </p>
          </section>

          {/* Board → exam bridge */}
          {m.boardBridge && (
            <section>
              <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" /> The {m.board.split(" &")[0]} → {exam} gap, and how we bridge it
              </h2>
              <p className="text-muted-foreground leading-relaxed">{m.boardBridge}</p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Every MindPeak plan starts with a diagnostic week that maps your board background against what {m.examFull} actually assumes — then your mentor sequences bridge modules before exam-level material, instead of pretending every student starts from the same place.
              </p>
            </section>
          )}

          {/* Coaching landscape */}
          {(m.competition || m.regionalChallenge) && (
            <section>
              <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl mb-4 flex items-center gap-2">
                <Compass className="w-5 h-5 text-primary" /> The coaching reality in {state}
              </h2>
              {m.competition && <p className="text-muted-foreground leading-relaxed">{m.competition}</p>}
              {m.regionalChallenge && <p className="text-muted-foreground leading-relaxed mt-3">{m.regionalChallenge}</p>}
            </section>
          )}

          {/* Education fact callout */}
          {m.fact && (
            <section className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
              <h2 className="font-display font-bold text-foreground text-lg mb-2 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-primary" /> {state} fact every aspirant should know
              </h2>
              <p className="text-muted-foreground leading-relaxed">{m.fact}</p>
            </section>
          )}

          {/* Career ecosystem */}
          {m.career && (
            <section>
              <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" /> Where a {state} {exam === "JEE" ? "engineering" : "medical"} seat leads
              </h2>
              <p className="text-muted-foreground leading-relaxed">{m.career}</p>
            </section>
          )}

          {/* Cities served */}
          <section>
            <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" /> Serving students across {state}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Because coaching is 1-on-1 and online, students get identical mentor quality in every district — no relocation to Kota, Delhi or a metro required.
            </p>
            <ul className="flex flex-wrap gap-2">
              {m.cities.map((c) =>
                c.href ? (
                  <li key={c.name}>
                    <Link
                      to={c.href}
                      className="inline-block px-3 py-1.5 rounded-full border border-primary/40 text-sm text-primary hover:bg-primary/10 transition-colors"
                    >
                      {exam} coaching in {c.name}
                    </Link>
                  </li>
                ) : (
                  <li key={c.name} className="inline-block px-3 py-1.5 rounded-full border border-border text-sm text-muted-foreground">
                    {c.name}
                  </li>
                ),
              )}
            </ul>
            {m.premierInstitutes.length > 0 && (
              <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                Premier institutes in and around {state}:{" "}
                <span className="text-foreground">{m.premierInstitutes.join(", ")}</span>.
              </p>
            )}
          </section>

          {/* FAQs */}
          <section>
            <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl mb-4">
              {exam} in {state}: frequently asked questions
            </h2>
            <div className="space-y-5">
              {m.faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="font-display font-semibold text-foreground mb-1.5">{f.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related resources + regional interlinks */}
          <section>
            <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl mb-4 flex items-center gap-2">
              <Link2 className="w-5 h-5 text-primary" /> Useful {exam} resources for {state} students
            </h2>
            <ul className="grid sm:grid-cols-2 gap-2.5">
              <li>
                <Link to={m.twin.href} className="flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" /> {m.twin.label}
                </Link>
              </li>
              {m.related.map((r) => (
                <li key={r.href}>
                  <Link to={r.href} className="flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" /> {r.label}
                  </Link>
                </li>
              ))}
            </ul>
            {m.nearbyHubs.length > 0 && (
              <div className="mt-6">
                <h3 className="font-display font-semibold text-foreground mb-2.5">{exam} coaching in neighbouring states</h3>
                <ul className="flex flex-wrap gap-2">
                  {m.nearbyHubs.map((n) => (
                    <li key={n.href}>
                      <Link to={n.href} className="inline-block px-3 py-1.5 rounded-full border border-border text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                        {n.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          {/* CTA */}
          <section className="rounded-2xl border border-border bg-card/30 p-8 text-center">
            <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl mb-3">
              Start your {exam} journey from {state}
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Book a free demo class with a mentor and get a personalised study plan for {m.examFull} {CURRENT_EXAM_YEAR}.
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
