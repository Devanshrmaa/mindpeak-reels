"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle, ChevronDown, ChevronRight,
  Clock, ExternalLink, FileText, Laptop, Loader2,
  MessageCircle, Monitor, Phone, Shield, User, ArrowRight,
} from "lucide-react";
import { toast } from "sonner";
import { Link } from "@/components/RouterLink";
import { Navbar } from "@/components/sections/Navbar";
import { PageFooter } from "@/components/PageFooter";
import { cn } from "@/lib/utils";

const SUBMIT_URL = "/api/submit-lead";
const WHATSAPP_URL =
  "https://wa.me/918219457704?text=Hi%2C%20I%20need%20guidance%20on%20preparing%20for%20the%20NEET%20UG%202027%20CBT%20exam";

const LAST_UPDATED_IST = "26 July 2026, 10:00 AM IST";

/* ─────────────────────────────────────────────
   FACT BOX DATA
   ───────────────────────────────────────────── */
const facts = [
  { label: "Reform", value: "OMR → Computer-Based Test", highlight: true },
  { label: "Applies from", value: "NEET UG 2027" },
  { label: "Confirmed by", value: "Education Minister Dharmendra Pradhan" },
  { label: "Announced", value: "15 May 2026" },
  { label: "Syllabus", value: "Expected unchanged" },
  { label: "Marking scheme", value: "Expected unchanged (+4/−1)" },
  { label: "Official source", value: "neet.nta.nic.in", isLink: true },
];

/* ─────────────────────────────────────────────
   TIMELINE
   ───────────────────────────────────────────── */
const timeline = [
  {
    date: "3 May 2026",
    title: "NEET UG 2026 conducted; paper leak surfaces",
    desc: "Within hours of the exam, question paper content began circulating on messaging platforms, prompting a review of the exam's integrity.",
  },
  {
    date: "12 May 2026",
    title: "NTA cancels the exam; CBI probe ordered",
    desc: "NTA officially cancelled the 3 May sitting. The government ordered a CBI investigation, confirmed no re-registration was needed, and promised a full fee refund.",
  },
  {
    date: "15 May 2026",
    title: "CBT reform announced for NEET UG 2027",
    desc: "Just three days later, Union Education Minister Dharmendra Pradhan announced that NEET UG will shift completely to Computer-Based Test (CBT) mode from 2027 — identifying the OMR-based paper system itself as the core vulnerability behind repeated leak incidents.",
  },
  {
    date: "21 June 2026",
    title: "NEET UG 2026 re-exam conducted",
    desc: "Around 22 lakh candidates sat the re-scheduled exam — still in the traditional OMR format, since the CBT shift applies from the 2027 cycle onward, not the 2026 re-exam.",
  },
  {
    date: "Ongoing",
    title: "Detailed CBT notification awaited",
    desc: "NTA has not yet released a formal notification spelling out every implementation detail (exact interface, calculator/rough-sheet policy, shift structure). This page will be updated as official information becomes available.",
  },
];

/* ─────────────────────────────────────────────
   CHANGED / UNCHANGED GRID
   ───────────────────────────────────────────── */
const changedItems = [
  "Answers are selected on a computer screen, not shaded on OMR sheets",
  "Physics diagrams and circuit questions display digitally, not on printed paper",
  "No physical answer sheet to carry, fold, or worry about smudging",
  "Result processing should be faster with no OMR-scanning step",
  "Exam-day muscle memory needs to shift from pencil to mouse/keyboard",
];
const unchangedItems = [
  "Syllabus is expected to remain the NMC-notified chapters — no new topics",
  "Marking scheme is expected to stay +4 correct / −1 wrong",
  "720-mark structure and Physics/Chemistry/Biology split are expected unchanged",
  "NCERT remains the primary source, especially for Biology",
  "Your existing conceptual preparation carries over completely",
];

/* ─────────────────────────────────────────────
   FAQ DATA
   ───────────────────────────────────────────── */
const faqs = [
  {
    q: "Is NEET UG 2027 really going fully computer-based?",
    a: "Yes. Union Education Minister Dharmendra Pradhan confirmed on 15 May 2026 that NEET UG will shift completely to Computer-Based Test (CBT) mode from 2027, replacing the OMR pen-and-paper format used every year since NEET began.",
  },
  {
    q: "Why is NEET UG moving to CBT mode?",
    a: "The decision follows the NEET UG 2026 paper leak, which forced NTA to cancel the 3 May 2026 exam and conduct a re-exam on 21 June 2026 for over 22 lakh candidates. The government identified the OMR-based paper system itself as the core vulnerability, and CBT — a secure, NTA-managed digital platform — is intended to close that gap.",
  },
  {
    q: "Will the NEET 2027 syllabus or marking scheme change?",
    a: "No official notification has changed either. The NMC-notified syllabus and the +4/−1 marking scheme are expected to stay as they are — CBT changes only how you answer, not what or how you're scored. NTA has not yet released a formal notification confirming every detail, and we will update this page when it does.",
  },
  {
    q: "What actually changes for students on exam day?",
    a: "You will read questions and Physics diagrams on a computer screen and select or change answers with a mouse/keyboard instead of shading OMR bubbles with a pencil. There is no paper to carry, no bubble-filling technique to practise, and results processing should be faster since there's no OMR scanning step.",
  },
  {
    q: "How should I prepare differently for a computer-based NEET?",
    a: "Start taking full-length mock tests on a screen, not just on paper. Practise navigating between questions, marking for review, and reading Physics circuit diagrams on-screen rather than printed. The content you need to know hasn't changed — NCERT-first Biology, formula fluency in Physics and Chemistry — but your exam-day muscle memory needs to shift from a pencil to a mouse well before the real thing.",
  },
  {
    q: "Does this affect Class 11 students differently than droppers?",
    a: "Not significantly — everyone appearing in 2027 sits the same CBT exam. Class 11/12 students have the advantage of building CBT-style mock practice into their preparation from the start; droppers who trained on paper-based mocks for a previous attempt need to deliberately rebuild that habit around a screen instead of assuming it will transfer automatically.",
  },
  {
    q: "Where can I take official or reliable CBT-format mock tests?",
    a: "NTA is expected to release sample/demo CBT interfaces closer to the exam, as it does for JEE Main. Until then, practising full-length timed mocks on any screen — even a basic quiz tool — builds the core habit of navigating and marking answers digitally instead of on paper.",
  },
];

/* ─────────────────────────────────────────────
   RELATED RESOURCES
   ───────────────────────────────────────────── */
const relatedLinks = [
  {
    href: "/neet-coaching",
    label: "NEET UG Personalised Coaching",
    tag: "1-on-1 Coaching",
    desc: "Structured coaching that adapts to where you are right now.",
  },
  {
    href: "/neet-biology-preparation",
    label: "NEET Biology Preparation Guide",
    tag: "Free Guide",
    desc: "Chapter-wise breakdown and NCERT study strategy for Biology.",
  },
  {
    href: "/neet-mock-test-strategy",
    label: "NEET Mock Test Strategy",
    tag: "Free Guide",
    desc: "How to structure full-length mocks for maximum score gain.",
  },
  {
    href: "/neet-practice",
    label: "NEET Practice Questions",
    tag: "Free Practice",
    desc: "Subject-wise MCQs with detailed solutions to stay sharp.",
  },
  {
    href: "/neet-ug-2026-cancelled",
    label: "NEET UG 2026 Cancellation — Full Timeline",
    tag: "Background",
    desc: "The paper leak, cancellation, and re-exam that led to this reform.",
  },
  {
    href: "/mentors",
    label: "Meet the MindPeak Mentor Team",
    tag: "Our Team",
    desc: "Real mentors, real experience — not just algorithms.",
  },
];

/* ─────────────────────────────────────────────
   LEAD FORM
   ───────────────────────────────────────────── */
interface LeadForm {
  name: string;
  phone: string;
  studentClass: string;
  examTarget: string;
}

function LeadFormSection() {
  const [form, setForm] = useState<LeadForm>({
    name: "",
    phone: "",
    studentClass: "",
    examTarget: "NEET UG 2027",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const conversionFired = useRef(false);

  const fireConversion = () => {
    try {
      if (conversionFired.current) return;
      if (
        typeof window !== "undefined" &&
        typeof (window as any).gtag === "function"
      ) {
        (window as any).gtag("event", "conversion", {
          send_to: "AW-17962731707/_Uc-CL7_g_sbELuRpvVC",
          value: 1.0,
          currency: "INR",
        });
        conversionFired.current = true;
      }
    } catch {
      return;
    }
  };

  const validate = (): string | null => {
    if (!form.name.trim() || form.name.trim().length > 100)
      return "Please enter a valid name (max 100 characters)";
    if (!/^[6-9]\d{9}$/.test(form.phone.trim()))
      return "Please enter a valid 10-digit Indian phone number";
    if (!form.studentClass) return "Please select your class";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      toast.error(error);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(SUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          class: form.studentClass,
          exam_target: form.examTarget,
          source: "neet-cbt-2027-guide-page",
          created_at: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error("submit_failed");
      setSubmitted(true);
      fireConversion();
    } catch {
      console.error("Lead form submission failed — surfacing WhatsApp fallback");
      toast.error(
        "Something went wrong submitting the form. Please reach out via WhatsApp below.",
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-10"
      >
        <CheckCircle className="w-14 h-14 text-primary mx-auto mb-4" />
        <h3 className="font-display font-bold text-foreground text-xl mb-2">
          We&rsquo;ll call you back!
        </h3>
        <p className="text-muted-foreground text-sm mb-6 max-w-sm mx-auto">
          Thanks for reaching out. A MindPeak mentor will contact you within a
          few hours to talk through your CBT prep strategy.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-green-500/50 text-green-400 text-sm font-semibold hover:bg-green-500/10 transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          Or chat with us on WhatsApp right now
        </a>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-foreground text-xs font-semibold uppercase tracking-wider block mb-1.5">
            Student Name *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              name="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your full name"
              maxLength={100}
              required
              className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-all"
            />
          </div>
        </div>
        <div>
          <label className="text-foreground text-xs font-semibold uppercase tracking-wider block mb-1.5">
            Phone Number *
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              name="phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="10-digit mobile number"
              maxLength={10}
              required
              className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-all"
            />
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-foreground text-xs font-semibold uppercase tracking-wider block mb-1.5">
            Class / Year *
          </label>
          <select
            name="studentClass"
            value={form.studentClass}
            onChange={(e) =>
              setForm({ ...form, studentClass: e.target.value })
            }
            required
            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground text-sm focus:outline-none focus:border-primary/50 appearance-none"
          >
            <option value="" disabled>
              Select class
            </option>
            <option value="Class 11">Class 11 (Aspiring 2027)</option>
            <option value="Class 12">Class 12 (Aspiring 2027)</option>
            <option value="Dropper">Dropper (Aspiring 2027)</option>
          </select>
        </div>
        <div>
          <label className="text-foreground text-xs font-semibold uppercase tracking-wider block mb-1.5">
            Target Exam
          </label>
          <select
            name="examTarget"
            value={form.examTarget}
            onChange={(e) =>
              setForm({ ...form, examTarget: e.target.value })
            }
            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground text-sm focus:outline-none focus:border-primary/50 appearance-none"
          >
            <option value="NEET UG 2027">NEET UG 2027</option>
            <option value="Undecided">Not sure yet</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 bg-gradient-to-r from-[hsl(43,80%,65%)] to-[hsl(43,65%,42%)] text-[hsl(225,43%,7%)] font-display font-bold text-sm uppercase tracking-[0.12em] rounded-full hover:scale-[1.02] transition-transform shadow-[0_0_30px_hsl(43,72%,52%/0.25)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
          </>
        ) : (
          "Book My Free Strategy Call"
        )}
      </button>
      <p className="text-muted-foreground text-xs text-center">
        No spam. No cold calls beyond this. Just one focused conversation.
      </p>
    </form>
  );
}

/* ─────────────────────────────────────────────
   FAQ ACCORDION ITEM
   ───────────────────────────────────────────── */
function FAQItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-secondary/30 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-display font-semibold text-foreground text-sm sm:text-base leading-snug">
          {q}
        </span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-primary shrink-0 transition-transform duration-200",
            isOpen && "rotate-180",
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <p className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN VIEW
   ───────────────────────────────────────────── */
export default function NEETCBT2027Guide() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);

  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen pt-20 sm:pt-24">

        {/* ── Breadcrumb ── */}
        <nav
          aria-label="Breadcrumb"
          className="max-w-5xl mx-auto px-6 py-4"
        >
          <ol className="flex items-center gap-2 text-xs text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <span>/</span>
            <li>
              <Link
                to="/neet-coaching"
                className="hover:text-primary transition-colors"
              >
                NEET Coaching
              </Link>
            </li>
            <span>/</span>
            <li className="text-foreground">NEET UG 2027 CBT Guide</li>
          </ol>
        </nav>

        {/* ══════════════════════════════════════════
            SECTION 1 — HERO
            ══════════════════════════════════════════ */}
        <section className="max-w-5xl mx-auto px-6 pb-12">
          <div className="lg:grid lg:grid-cols-[1fr_320px] lg:gap-10 lg:items-start">

            {/* Left: headline + content */}
            <div>
              {/* Reform badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-500/40 bg-sky-500/10 text-sky-400 text-xs font-semibold uppercase tracking-[0.12em] mb-5">
                <Monitor className="w-3.5 h-3.5" />
                Exam Reform Confirmed
              </div>

              <h1 className="font-display font-black text-foreground mb-4 leading-tight" style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)" }}>
                NEET UG 2027 Goes Fully CBT:{" "}
                <span className="text-gradient-gold">
                  What Changes &amp; How to Prepare
                </span>
              </h1>

              <p className="text-muted-foreground text-xs mb-6 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                Last updated: {LAST_UPDATED_IST} &nbsp;·&nbsp; By Devansh,
                MindPeak Institute
              </p>

              <p className="text-foreground/90 text-lg leading-relaxed mb-8 max-w-2xl">
                NEET UG will shift completely from OMR pen-and-paper sheets to
                a Computer-Based Test (CBT) format starting with the 2027
                cycle. Union Education Minister Dharmendra Pradhan confirmed
                the reform on 15 May 2026, days after NEET UG 2026 was
                cancelled over a paper leak. Here&rsquo;s exactly what changes,
                what doesn&rsquo;t, and how to adjust your preparation.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[hsl(43,80%,65%)] to-[hsl(43,65%,42%)] text-[hsl(225,43%,7%)] font-display font-bold text-sm hover:scale-105 transition-transform shadow-[0_0_25px_hsl(43,72%,52%/0.2)]"
                >
                  <MessageCircle className="w-4 h-4" />
                  Talk to a NEET mentor
                </a>
                <a
                  href="#strategy-call"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-display font-bold text-sm hover:border-primary/50 hover:text-primary transition-colors"
                >
                  <Laptop className="w-4 h-4" />
                  Get a CBT-ready prep plan
                </a>
              </div>
            </div>

            {/* Right: sticky fact box */}
            <aside className="mt-10 lg:mt-0 lg:sticky lg:top-28">
              <div className="rounded-2xl border border-sky-500/30 bg-sky-500/5 p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Monitor className="w-4 h-4 text-sky-400 shrink-0" />
                  <span className="font-display font-bold text-foreground text-sm uppercase tracking-wider">
                    At a Glance
                  </span>
                </div>
                <dl className="space-y-3">
                  {facts.map(({ label, value, highlight, isLink }) => (
                    <div key={label} className="flex justify-between gap-3 text-sm">
                      <dt className="text-muted-foreground shrink-0">{label}</dt>
                      <dd
                        className={cn(
                          "text-right font-medium",
                          highlight
                            ? "text-sky-400"
                            : "text-foreground",
                        )}
                      >
                        {isLink ? (
                          <a
                            href={`https://${value}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline inline-flex items-center gap-1"
                          >
                            {value}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-5 pt-4 border-t border-border/50">
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Source: Education Minister&rsquo;s statement, 15 May 2026.{" "}
                    <a
                      href="https://neet.nta.nic.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Verify on neet.nta.nic.in
                    </a>
                  </p>
                </div>
              </div>
            </aside>

          </div>
        </section>

        {/* ══════════════════════════════════════════
            SECTION 3 — WHAT HAPPENED
            ══════════════════════════════════════════ */}
        <section className="bg-secondary/20 border-y border-border py-14 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-foreground text-2xl sm:text-3xl mb-6">
              What Happened
            </h2>
            <div className="prose-like space-y-4 text-foreground/85 text-[15px] leading-relaxed">
              <p>
                NEET UG has been conducted on OMR answer sheets — pencil,
                paper, and bubble-shading — every year since the exam began.
                That changed after the NEET UG 2026 paper leak: the 3 May 2026
                exam was cancelled following widespread reports of the
                question paper circulating on messaging platforms, and a CBI
                probe was ordered into the breach.
              </p>
              <p>
                Just three days after the cancellation, on 15 May 2026, Union
                Education Minister Dharmendra Pradhan announced a structural
                reform: from the 2027 cycle onward, NEET UG will be conducted
                fully in Computer-Based Test (CBT) mode. The government&rsquo;s
                stated reasoning is that the OMR-based paper system itself —
                physical question papers that must be printed, transported,
                and secured at thousands of centres — is the root vulnerability
                behind repeated leak incidents, and that a centrally-managed
                digital platform closes that gap.
              </p>
              <p>
                The re-exam for the cancelled 2026 sitting was held on 21 June
                2026 for the roughly 22 lakh affected candidates — still in
                the traditional OMR format, since the CBT shift applies to the
                2027 exam cycle, not the 2026 re-exam. For NEET UG 2027
                aspirants, the format change is now confirmed; the fine
                implementation details — exact interface, calculator/rough-work
                policy, shift structure — are still awaited in a formal NTA
                notification.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SECTION 4 — TIMELINE
            ══════════════════════════════════════════ */}
        <section className="max-w-3xl mx-auto px-6 py-14">
          <h2 className="font-display font-bold text-foreground text-2xl sm:text-3xl mb-10">
            How It Unfolded
          </h2>
          <ol className="relative border-l border-border/60 space-y-0" aria-label="NEET UG 2027 CBT reform timeline">
            {timeline.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="ml-6 pb-10 last:pb-0"
              >
                <span
                  className={cn(
                    "absolute -left-[9px] flex h-[18px] w-[18px] items-center justify-center rounded-full ring-4 ring-background",
                    i === timeline.length - 1
                      ? "bg-sky-500"
                      : "bg-primary",
                  )}
                />
                <time className="font-semibold text-primary text-xs uppercase tracking-wider block mb-1">
                  {item.date}
                </time>
                <h3 className="font-display font-bold text-foreground text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.li>
            ))}
          </ol>
        </section>

        {/* ══════════════════════════════════════════
            SECTION 5 — OFFICIAL POSITION
            ══════════════════════════════════════════ */}
        <section className="bg-secondary/20 border-y border-border py-14 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-foreground text-2xl sm:text-3xl mb-6">
              What&rsquo;s Officially Confirmed So Far
            </h2>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-3 mb-5">
                <FileText className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm">
                  The following points are drawn from the Education
                  Minister&rsquo;s public statement on 15 May 2026 and
                  subsequent government confirmations. We have marked clearly
                  which details are officially confirmed versus expected
                  pending formal notification.
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  "NEET UG will be conducted in Computer-Based Test (CBT) mode from the 2027 exam cycle — confirmed.",
                  "The reform follows the 2026 paper leak and targets the OMR-based paper system's vulnerability to leaks — confirmed.",
                  "The syllabus is expected to remain the NMC-notified chapters used today — not yet formally re-notified.",
                  "The marking scheme is expected to remain +4 for correct, −1 for incorrect answers — not yet formally re-notified.",
                  "The 720-mark, Physics/Chemistry/Biology structure is expected to carry over unchanged — not yet formally re-notified.",
                  "Exact CBT interface details (calculator access, rough-sheet policy, multi-shift structure) are awaited in a dedicated NTA notification.",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/85">
                    <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-muted-foreground border-t border-border/50 pt-4">
                Source: Education Minister Dharmendra Pradhan&rsquo;s
                statement, 15 May 2026, and coverage cross-verified across
                multiple national outlets. Track official updates at{" "}
                <a
                  href="https://neet.nta.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  neet.nta.nic.in
                </a>
                . This page will be revised once NTA publishes the detailed
                CBT notification.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SECTION 6 — CHANGED / UNCHANGED GRID
            ══════════════════════════════════════════ */}
        <section className="max-w-5xl mx-auto px-6 py-14">
          <h2 className="font-display font-bold text-foreground text-2xl sm:text-3xl mb-8">
            What This Means for You
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Changed */}
            <div className="rounded-xl border border-sky-500/30 bg-sky-500/5 p-6">
              <h3 className="font-display font-bold text-sky-400 text-base mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                What Changes
              </h3>
              <ul className="space-y-3">
                {changedItems.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-foreground/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Unchanged */}
            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-6">
              <h3 className="font-display font-bold text-green-400 text-base mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                What Stays the Same
              </h3>
              <ul className="space-y-3">
                {unchangedItems.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-foreground/80"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SECTION 7 — FAQ
            ══════════════════════════════════════════ */}
        <section className="bg-secondary/20 border-y border-border py-14 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-foreground text-2xl sm:text-3xl mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-sm mb-8">
              Answers to the questions students and parents are asking most.
            </p>
            <div className="space-y-3">
              {faqs.map((item, i) => (
                <FAQItem
                  key={i}
                  q={item.q}
                  a={item.a}
                  isOpen={openFaq === i}
                  onToggle={() => toggleFaq(i)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SECTION 8 — NOTE FROM DEVANSH
            ══════════════════════════════════════════ */}
        <section className="max-w-3xl mx-auto px-6 py-14">
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-display font-bold text-foreground text-base">
                  A note from Devansh
                </p>
                <p className="text-muted-foreground text-xs">
                  Founder &amp; Head Mentor, MindPeak Institute
                </p>
              </div>
            </div>
            <blockquote className="text-foreground/90 text-[15px] leading-relaxed space-y-3">
              <p>
                Format changes make students anxious, and that&rsquo;s
                understandable — but I want to be clear about what this
                actually is: a change in how you answer, not what you need to
                know. The syllabus, the concepts, the marking scheme — none of
                that is expected to change. What changes is the interface
                between your knowledge and your score, and that&rsquo;s a
                skill you can build well before exam day.
              </p>
              <p>
                The students who adapt fastest to a format shift like this are
                the ones who start practising on a screen early, not the ones
                who wait for panic to set in closer to the exam. If your
                current mock-test routine is entirely paper-based, that&rsquo;s
                the first thing worth changing.
              </p>
              <p>
                If you&rsquo;re not sure how to fold CBT practice into your
                existing plan, talk to us — we&rsquo;ll help you build it in
                without losing momentum on content.
              </p>
            </blockquote>
            <p className="mt-5 text-primary font-semibold text-sm">
              — Devansh
              <span className="text-muted-foreground font-normal">
                , Founder &amp; Head Mentor, MindPeak Institute
                (UDYAM-HP-04-0042530)
              </span>
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SECTION 9 — CTA + LEAD FORM
            ══════════════════════════════════════════ */}
        <section
          id="strategy-call"
          className="bg-secondary/20 border-y border-border py-14 px-6"
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-display font-bold text-foreground text-2xl sm:text-3xl mb-3">
                Get a Free 30-Minute CBT Strategy Call
              </h2>
              <p className="text-muted-foreground text-sm max-w-lg mx-auto">
                A MindPeak mentor will walk you through a preparation plan
                built for the CBT format — where to focus your content
                revision, and how to build screen-based mock-test habits. No
                commitment, no sales pressure.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <LeadFormSection />
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-muted-foreground text-xs">
              <Shield className="w-3.5 h-3.5" />
              Your details are private and will never be sold or shared.
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SECTION 10 — RELATED RESOURCES
            ══════════════════════════════════════════ */}
        <section className="max-w-5xl mx-auto px-6 py-14">
          <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl mb-6">
            Related Resources from MindPeak
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="group flex flex-col gap-2 p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary/70 bg-primary/10 px-2 py-0.5 rounded-full">
                    {link.tag}
                  </span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition" />
                </div>
                <p className="font-display font-semibold text-foreground text-sm leading-snug">
                  {link.label}
                </p>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {link.desc}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Source Attribution ── */}
        <section className="max-w-3xl mx-auto px-6 pb-16">
          <div className="rounded-xl border border-border/50 bg-card/50 p-5 text-xs text-muted-foreground space-y-2">
            <p className="font-semibold text-foreground/70 uppercase tracking-wider text-[10px]">
              Source Attribution &amp; Verification
            </p>
            <p>
              <strong>NTA cancellation notification (12 May 2026):</strong>{" "}
              Official cancellation of NEET UG 2026 over the paper leak, CBI
              referral. Published on neet.nta.nic.in. See our{" "}
              <Link to="/neet-ug-2026-cancelled" className="text-primary hover:underline">
                full cancellation timeline
              </Link>
              .
            </p>
            <p>
              <strong>Education Minister&rsquo;s statement (15 May 2026):</strong>{" "}
              Confirmation that NEET UG shifts fully to CBT mode from 2027,
              reported across national outlets and cross-verified for this
              page.
            </p>
            <p>
              <strong>NEET UG 2026 re-exam (21 June 2026):</strong> Conducted
              in the traditional OMR format for approximately 22 lakh
              candidates, confirming the CBT shift applies from 2027 onward.
            </p>
            <p>
              <strong>How we verified this:</strong> Every factual claim above
              is cross-referenced against multiple independent news reports of
              the Minister&rsquo;s statement. Details NTA has not yet formally
              re-notified (exact syllabus wording, marking scheme,
              shift structure) are explicitly marked as &ldquo;expected&rdquo;
              rather than confirmed. This page will be updated as NTA
              publishes its detailed notification.
            </p>
          </div>
        </section>

      </main>
      <PageFooter />
    </>
  );
}
