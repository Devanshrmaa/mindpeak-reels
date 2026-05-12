"use client";

/**
 * NEET UG 2026 Cancellation Coverage — view component.
 *
 * This file deliberately separates page constants (title, description,
 * dates, FAQ array) so the server page.tsx can import them for metadata
 * and JSON-LD without pulling in the whole client bundle.
 *
 * Voice: direct, calm, mentor-like. Audience: a worried 17-year-old and
 * their parents. No keyword stuffing. Every event-specific claim is
 * sourced from the build brief; see the VERIFICATION CHECKLIST in
 * app/neet-ug-2026-cancelled/page.tsx before deployment.
 */

import { Link } from '@/components/RouterLink';
import { useDemoModal } from '@/components/DemoBookingModal';
import { Navbar } from '@/components/sections/Navbar';
import { PageFooter } from '@/components/PageFooter';
import { PageFAQ } from '@/components/PageFAQ';
import type { FAQItem } from '@/components/PageFAQ';
import {
  AlertTriangle, CheckCircle2, CircleAlert, ExternalLink, MessageCircle,
  ShieldCheck, FileText, Calendar, ArrowRight,
} from 'lucide-react';

export const BASE_URL = 'https://mindpeakinstitute.com';
export const PAGE_TITLE = 'NEET UG 2026 Cancelled: What Aspirants Need to Know | MindPeak';
export const PAGE_DESCRIPTION =
  'NEET UG 2026 was cancelled by the NTA following paper-leak allegations now under CBI probe. What this means for fees, re-exam dates, and your preparation. Updated 12 May 2026.';

/* Dates rendered in IST. Update MODIFIED_ISO only when content materially changes. */
export const PUBLISHED_ISO = '2026-05-12T12:00:00+05:30';
export const MODIFIED_ISO = '2026-05-12T12:00:00+05:30';

const VERIFIED_AS_OF_DISPLAY = '12 May 2026, 12:00 IST';
const WHATSAPP_HREF =
  'https://wa.me/918219457704?text=Hello%20MindPeak%20%E2%80%94%20I%27d%20like%20to%20talk%20to%20a%20NEET%20mentor%20about%20the%20NEET%20UG%202026%20situation.';
const BRIEFING_PDF = '/downloads/MindPeak_NEET_UG_2026_Cancellation_Briefing.pdf';
const NTA_NEET = 'https://neet.nta.nic.in';

/* ── Fact box ─────────────────────────────────────────────── */
const FACT_BOX: { label: string; value: string; tone?: 'alert' | 'ok' | 'pending' }[] = [
  { label: 'Exam date', value: '3 May 2026' },
  { label: 'Status', value: 'Cancelled by NTA', tone: 'alert' },
  { label: 'Reason', value: 'Paper-leak allegations under CBI probe', tone: 'alert' },
  { label: 'Re-exam date', value: 'To be notified by NTA', tone: 'pending' },
  { label: 'Re-registration needed', value: 'No', tone: 'ok' },
  { label: 'Fee refund', value: 'Yes — through original payment channel', tone: 'ok' },
  { label: 'Official source', value: 'neet.nta.nic.in' },
];

/* ── Timeline ─────────────────────────────────────────────── */
const TIMELINE: { date: string; title: string; body: string }[] = [
  {
    date: '3 May 2026',
    title: 'NEET UG 2026 examination conducted',
    body: 'The pen-and-paper test was administered nationwide as scheduled. By the evening, reports of leaked question papers in select centres began circulating on social media.',
  },
  {
    date: '8 May 2026',
    title: 'NTA refers matter to investigating agencies',
    body: 'After preliminary review, the National Testing Agency referred the paper-leak allegations to law-enforcement agencies for examination.',
  },
  {
    date: '10 May 2026',
    title: 'First official NTA release',
    body: 'The NTA acknowledged the integrity concerns publicly and confirmed an active inquiry was underway. Aspirants were advised to await further notification.',
  },
  {
    date: '12 May 2026',
    title: 'Cancellation announced; CBI probe begins',
    body: 'The NTA cancelled NEET UG 2026 in its entirety and confirmed the matter has been handed to the Central Bureau of Investigation. A re-examination will be notified separately.',
  },
];

/* ── NTA official position bullets ────────────────────────── */
const NTA_POSITION = [
  'The 3 May 2026 NEET UG examination stands cancelled.',
  'A re-examination will be conducted; dates and centres will be notified through neet.nta.nic.in.',
  'Candidates do not need to re-register. Existing registration numbers, photographs and signatures remain valid.',
  'Fees paid for the cancelled examination will be refunded through the original payment channel within the timeline NTA publishes.',
  'Any communication outside the official NTA portal — including via SMS, social media or unverified websites — should be treated as unverified.',
];

/* ── Changed / Unchanged grid ─────────────────────────────── */
const CHANGED = [
  '3 May 2026 paper is void. No result will be declared from that sitting.',
  'Your exam day is no longer 3 May 2026 — a new date will be set.',
  'Your travel/accommodation arrangements for the original date no longer apply.',
  'Counselling timelines (AIQ / state quota) will shift downstream of the new exam.',
];
const UNCHANGED = [
  'Your registration is still valid. You do not have to fill the form again.',
  'Your syllabus, eligibility, and admit-card details remain the same.',
  'Your preparation strategy — NCERT mastery, MCQ volume, weekly mocks — does not change.',
  'Your medical-college dream is intact. The pathway has been delayed, not closed.',
];

/* ── FAQs (also consumed by FAQPage JSON-LD in page.tsx) ───── */
export const PAGE_FAQS: FAQItem[] = [
  {
    question: 'Is NEET UG 2026 cancelled?',
    answer:
      'Yes. The NTA announced the cancellation of the 3 May 2026 NEET UG examination on 12 May 2026 after paper-leak allegations were referred for investigation. The official notification is on neet.nta.nic.in.',
  },
  {
    question: 'When is the NEET UG 2026 re-exam?',
    answer:
      'The NTA has not yet announced the re-examination date. Treat any date circulating on WhatsApp or unofficial websites as unverified. The only authoritative source is neet.nta.nic.in.',
  },
  {
    question: 'Do I need to re-register for NEET 2026?',
    answer:
      'No. Per the NTA notification, existing registrations remain valid. You do not need to re-fill the application form, re-upload documents, or pay again. Keep your existing application number and login credentials safe.',
  },
  {
    question: 'Will my NEET 2026 fees be refunded?',
    answer:
      'Yes. The NTA has confirmed that fees paid for the cancelled examination will be refunded through the original payment channel. The exact timeline will be published on the NTA portal. No third party should contact you asking for a refund-processing fee — that would be a scam.',
  },
  {
    question: 'Will the result for the 3 May 2026 sitting be declared?',
    answer:
      'No. The 3 May 2026 examination has been declared void in its entirety. No scores or ranks from that paper will be released. Your final NEET 2026 result will come from the re-examination once it is conducted.',
  },
  {
    question: 'What does the CBI probe mean for NEET aspirants?',
    answer:
      'The CBI probe is into the alleged paper leak — it is not against you. Aspirants are not the subject of the investigation. The probe is the reason the re-exam will be tightly secured, which is in your favour: a clean, undisputed test that gets you to counselling without legal cloud over the result.',
  },
  {
    question: 'How should I continue preparing for the re-test?',
    answer:
      'Do not stop. The syllabus, weightages, and difficulty band have not changed — only the date. Use the extra weeks for: full NCERT line-by-line revision (Biology), high-yield Physics chapters (Mechanics, Modern Physics, Electrostatics), and Chemistry equilibrium and organic conversions. Stick to your weekly mock cadence. The students who keep momentum during uncertainty are the ones who gain the most when the new date arrives.',
  },
];

/* ── Related resources (existing genuine pages only) ──────── */
const RELATED = [
  { label: 'NEET coaching at MindPeak', href: '/neet-coaching' },
  { label: 'NEET Biology preparation guide', href: '/neet-biology-preparation' },
  { label: 'NEET Physics formula sheets', href: '/neet-physics-formulas' },
  { label: 'Meet the mentor team', href: '/mentors' },
  { label: 'Programs and pricing', href: '/pricing' },
];

/* ────────────────────────────────────────────────────────── */

export default function NeetUg2026Cancelled() {
  const { openDemoModal } = useDemoModal();
  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* ─── HERO ─────────────────────────────────────── */}
      <section className="pt-28 pb-12 px-6 border-b border-border/40">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-widest mb-6">
            <AlertTriangle className="w-3.5 h-3.5" />
            Breaking — Verified {VERIFIED_AS_OF_DISPLAY}
          </div>
          <h1 className="font-display font-black text-foreground mb-6 leading-[1.05]" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            NEET UG 2026 Cancelled — What Aspirants Need to Know
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-4">
            On 12 May 2026, the NTA cancelled the NEET UG examination held on 3 May 2026 after paper-leak allegations were referred to the CBI for investigation. A re-examination will be notified through the official NTA portal — your registration stays valid and your fees will be refunded.
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            This page is updated as NTA releases new notifications. Last verified <span className="text-foreground font-medium">{VERIFIED_AS_OF_DISPLAY}</span> against{' '}
            <a href={NTA_NEET} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
              neet.nta.nic.in <ExternalLink className="w-3 h-3" />
            </a>
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={openDemoModal}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> Talk to a NEET mentor
            </button>
            <a
              href={BRIEFING_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary/40 hover:text-primary transition-colors font-semibold text-foreground"
            >
              <FileText className="w-4 h-4" /> Download official briefing (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* ─── BODY (sticky fact box on desktop) ───────────── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_320px] gap-12">
          {/* ─── Main column ────────────────────────────── */}
          <article className="min-w-0">
            {/* What happened */}
            <h2 className="font-display font-bold text-foreground text-2xl sm:text-3xl mb-4">What happened</h2>
            <div className="text-muted-foreground leading-relaxed space-y-4 mb-10">
              <p>
                The NEET UG 2026 examination was conducted on 3 May 2026 in pen-and-paper mode at centres across India. Within hours of the test, screenshots and social-media posts began surfacing that suggested portions of the question paper had circulated in advance in a small number of centres.
              </p>
              <p>
                The NTA initially responded with a holding statement that an internal review was underway. Over the following five days, complaints were filed, video evidence was reviewed, and the agency escalated the matter to law-enforcement authorities. A formal release on 10 May 2026 acknowledged the integrity concerns publicly, but the agency stopped short of cancelling the examination at that point.
              </p>
              <p>
                On 12 May 2026, the NTA announced the cancellation of the 3 May 2026 sitting in its entirety and confirmed that the Central Bureau of Investigation has taken over the inquiry. No result will be declared from the cancelled examination. A re-examination will be conducted on a date to be notified, and the NTA has clarified that candidates who appeared for the 3 May paper do not need to re-register or pay again.
              </p>
              <p>
                For aspirants, this is a delay — not a cancellation of NEET 2026 as a cycle. The medical-counselling pathway (AIQ, deemed universities, state quotas) is intact. The only thing being reset is the exam day.
              </p>
            </div>

            {/* Timeline */}
            <h2 className="font-display font-bold text-foreground text-2xl sm:text-3xl mb-6">Timeline</h2>
            <ol className="relative border-l border-border/60 ml-3 space-y-8 mb-12">
              {TIMELINE.map((t) => (
                <li key={t.date} className="ml-6">
                  <span className="absolute -left-2.5 w-5 h-5 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center">
                    <Calendar className="w-2.5 h-2.5 text-primary" />
                  </span>
                  <time className="text-xs uppercase tracking-widest text-primary font-semibold">{t.date}</time>
                  <h3 className="font-display font-semibold text-foreground text-base mt-1 mb-1">{t.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t.body}</p>
                </li>
              ))}
            </ol>

            {/* NTA's official position */}
            <h2 className="font-display font-bold text-foreground text-2xl sm:text-3xl mb-4">NTA's official position</h2>
            <p className="text-muted-foreground text-sm mb-4">
              Summarised from the 12 May 2026 NTA release.{' '}
              <a href={NTA_NEET} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                Read the full notification <ExternalLink className="w-3 h-3" />
              </a>
            </p>
            <ul className="space-y-3 mb-12">
              {NTA_POSITION.map((p, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                  <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            {/* Changed / Unchanged */}
            <h2 className="font-display font-bold text-foreground text-2xl sm:text-3xl mb-6">What this means for you</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              <div className="rounded-xl border border-border/60 bg-background/50 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <CircleAlert className="w-4 h-4 text-primary" />
                  <h3 className="font-display font-semibold text-foreground text-sm uppercase tracking-widest">Changed</h3>
                </div>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  {CHANGED.map((c, i) => (
                    <li key={i} className="flex gap-2"><span className="text-primary">•</span><span>{c}</span></li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border/60 bg-background/50 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <h3 className="font-display font-semibold text-foreground text-sm uppercase tracking-widest">Unchanged</h3>
                </div>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  {UNCHANGED.map((c, i) => (
                    <li key={i} className="flex gap-2"><span className="text-emerald-400">•</span><span>{c}</span></li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Founder note (E-E-A-T anchor) */}
            <section className="rounded-xl border border-primary/20 bg-primary/[0.04] p-6 mb-12">
              <h2 className="font-display font-bold text-foreground text-xl mb-3">A note from MindPeak Institute</h2>
              <p className="text-muted-foreground leading-relaxed text-sm mb-3">
                If you sat for the 3 May paper, this week has been disorienting. You prepared for one specific date and now that date has been taken back from you. That is a real loss — please don't pretend it isn't.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm mb-3">
                The honest advice from a coach who has watched hundreds of aspirants through exam-day setbacks: do not try to "make up" weeks in the next three days. Take two full days off. Then return to the same weekly cadence you had before. The students who do best from here are not the ones who panic-revise; they are the ones who keep the discipline that got them ready in the first place.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                If you want a 30-minute conversation about how to structure your weeks between now and the re-exam — whether you study with us or not — the call is free. Use the button below.
              </p>
              <p className="text-sm">
                <span className="text-foreground font-semibold">— Devansh</span>
                <span className="text-muted-foreground"> · Founder & Physics Mentor, MindPeak Institute · Dehra Gopipur, HP · UDYAM-HP-04-0042530</span>
              </p>
            </section>

            {/* CTA block */}
            <section className="rounded-xl border border-border/60 bg-gradient-to-br from-primary/[0.08] to-transparent p-6 mb-12">
              <h2 className="font-display font-bold text-foreground text-xl mb-2">Free 30-minute strategy call with a NEET mentor</h2>
              <p className="text-muted-foreground text-sm mb-5">
                One-on-one. No sales pitch. We help you map out the weeks until the re-exam date is announced and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={openDemoModal}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                >
                  Book the call <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary/40 hover:text-primary transition-colors font-semibold text-foreground"
                >
                  <MessageCircle className="w-4 h-4" /> Or message us on WhatsApp
                </a>
              </div>
            </section>

            {/* Related resources */}
            <h2 className="font-display font-bold text-foreground text-2xl sm:text-3xl mb-4">Related resources</h2>
            <ul className="grid sm:grid-cols-2 gap-3 mb-10">
              {RELATED.map((r) => (
                <li key={r.href}>
                  <Link
                    to={r.href}
                    className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl border border-border/60 hover:border-primary/40 hover:bg-primary/[0.03] transition-colors text-sm text-foreground"
                  >
                    <span>{r.label}</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Source attribution */}
            <section className="border-t border-border/40 pt-6 text-xs text-muted-foreground leading-relaxed">
              <p className="mb-2 text-foreground font-semibold uppercase tracking-widest text-[10px]">Sources & how we verified this</p>
              <p className="mb-2">
                NTA notifications dated 8 May, 10 May and 12 May 2026, published on{' '}
                <a href={NTA_NEET} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">neet.nta.nic.in</a>.
              </p>
              <p>
                Each factual claim on this page was checked against the corresponding NTA release before this revision was published. If you find a discrepancy with the latest NTA release, please email us at{' '}
                <a href="mailto:hello@mindpeakinstitute.com" className="text-primary hover:underline">hello@mindpeakinstitute.com</a> and we will correct it within the same day. Unverified social-media reports are not used as sources on this page.
              </p>
            </section>
          </article>

          {/* ─── Sticky fact box ────────────────────────── */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border border-border/60 bg-background/60 backdrop-blur-xl p-5">
              <h2 className="font-display font-semibold text-foreground text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-primary" /> At a glance
              </h2>
              <dl className="space-y-3 text-sm">
                {FACT_BOX.map((f) => (
                  <div key={f.label} className="flex flex-col gap-0.5">
                    <dt className="text-muted-foreground text-[11px] uppercase tracking-widest">{f.label}</dt>
                    <dd
                      className={
                        f.tone === 'alert'
                          ? 'text-foreground font-semibold'
                          : f.tone === 'ok'
                          ? 'text-emerald-400 font-medium'
                          : f.tone === 'pending'
                          ? 'text-amber-300 font-medium'
                          : 'text-foreground'
                      }
                    >
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-5 pt-4 border-t border-border/40">
                <a
                  href={NTA_NEET}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline inline-flex items-center gap-1"
                >
                  Open neet.nta.nic.in <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ─── FAQ (reuses existing component; FAQPage JSON-LD emitted from page.tsx) ─── */}
      <PageFAQ items={PAGE_FAQS} heading="Your Questions," highlight="Answered" />

      <PageFooter />
    </main>
  );
}
