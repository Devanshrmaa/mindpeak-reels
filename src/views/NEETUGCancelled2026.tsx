"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertTriangle, CheckCircle, ChevronDown, ChevronRight,
  Clock, Download, ExternalLink, FileText, Loader2,
  MessageCircle, Phone, Shield, User, ArrowRight,
} from "lucide-react";
import { toast } from "sonner";
import { Link } from "@/components/RouterLink";
import { Navbar } from "@/components/sections/Navbar";
import { PageFooter } from "@/components/PageFooter";
import { cn } from "@/lib/utils";

const SUBMIT_URL = "/api/submit-lead";
const WHATSAPP_URL =
  "https://wa.me/918219457704?text=Hi%2C%20I%20need%20guidance%20on%20NEET%20UG%202026%20cancellation%20and%20re-exam%20preparation";

const LAST_UPDATED_IST = "12 May 2026, 2:30 PM IST";

/* ─────────────────────────────────────────────
   FACT BOX DATA
   ───────────────────────────────────────────── */
const facts = [
  { label: "Exam Date", value: "3 May 2026" },
  { label: "Status", value: "Cancelled by NTA", highlight: true },
  { label: "Reason", value: "Paper leak — CBI probe underway" },
  { label: "Re-exam", value: "Dates to be notified" },
  { label: "Re-registration", value: "Not required" },
  { label: "Fee refund", value: "Yes — confirmed" },
  { label: "Official source", value: "neet.nta.nic.in", isLink: true },
];

/* ─────────────────────────────────────────────
   TIMELINE
   ───────────────────────────────────────────── */
const timeline = [
  {
    date: "3 May 2026",
    title: "Exam conducted across India",
    desc: "NEET UG 2026 was held at examination centres across the country as scheduled. Widespread reports of question paper circulation on Telegram and WhatsApp emerged within hours of the exam concluding.",
  },
  {
    date: "8 May 2026",
    title: "NTA refers matter to investigative agencies",
    desc: "After preliminary scrutiny of complaints, NTA formally referred the paper leak matter to investigative agencies for detailed examination. Candidates were advised to await an official update.",
  },
  {
    date: "10 May 2026",
    title: "NTA releases first official statement",
    desc: "NTA acknowledged the integrity concerns in its first public statement and confirmed that a detailed technical and forensic review was underway. The statement urged students not to panic.",
  },
  {
    date: "12 May 2026",
    title: "Cancellation announced + CBI probe ordered",
    desc: "NTA officially cancelled NEET UG 2026. The Government of India ordered a Central Bureau of Investigation (CBI) probe into the leak. NTA confirmed no re-registration is needed and that fees will be refunded.",
  },
];

/* ─────────────────────────────────────────────
   CHANGED / UNCHANGED GRID
   ───────────────────────────────────────────── */
const changedItems = [
  "3 May 2026 exam result will NOT be declared",
  "Re-exam date is pending — NTA will notify",
  "CBI investigation is actively underway",
  "Admissions timeline for 2026–27 may shift",
  "NTA may revise examination protocols",
];
const unchangedItems = [
  "Your registration is valid — no action needed",
  "Your exam fee will be refunded",
  "NEET UG eligibility criteria unchanged",
  "Syllabus for the re-exam remains the same",
  "Top medical college seat count unchanged",
  "Your preparation effort counts — keep going",
];

/* ─────────────────────────────────────────────
   FAQ DATA
   ───────────────────────────────────────────── */
const faqs = [
  {
    q: "Is NEET UG 2026 cancelled?",
    a: "Yes. NTA officially cancelled NEET UG 2026 on 12 May 2026, following widespread paper leak allegations. The government has ordered a CBI probe into the matter.",
  },
  {
    q: "When is the NEET UG 2026 re-exam?",
    a: "The re-exam date has not been announced yet. NTA will notify the fresh examination schedule on neet.nta.nic.in. Given the scale of logistics involved, the re-exam is expected to be held within a few months. We will update this page as soon as NTA confirms.",
  },
  {
    q: "Do I need to re-register for NEET 2026?",
    a: "No. NTA has explicitly stated that students who were already registered for NEET UG 2026 do not need to re-register. Your existing registration, admit card, and application data carry forward to the re-exam automatically.",
  },
  {
    q: "Will my NEET 2026 fees be refunded?",
    a: "Yes. NTA has confirmed that the registration fee will be refunded to all candidates. The exact refund timeline and mode will be communicated through the official website. Keep an eye on your registered email and neet.nta.nic.in.",
  },
  {
    q: "Is the May 3 NEET 2026 result going to be declared?",
    a: "No. With the exam cancelled, there will be no result for the 3 May attempt. Scores from that sitting will not be used for any admission. The result will only be declared after the re-exam is conducted and evaluated.",
  },
  {
    q: "What does the CBI probe mean for NEET aspirants?",
    a: "The CBI probe is focused on identifying and prosecuting those responsible for the paper leak — it does not affect your eligibility, registration, or preparation in any way. For students, the key practical implication is simply a delay in the examination date. Continue preparing, and trust that the system is being course-corrected.",
  },
  {
    q: "How should I continue preparing for the re-test?",
    a: "Think of this period as unplanned but valuable revision time. Revisit NCERT line-by-line for Biology — it's where most NEET marks come from. Strengthen your weakest chapters in Physics and Chemistry. Take a mock test every week to maintain exam fitness. If you're unsure how to re-prioritise, speaking with a mentor can help you build a fresh, structured plan.",
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
    href: "/neet-practice",
    label: "NEET Practice Questions",
    tag: "Free Practice",
    desc: "Subject-wise MCQs with detailed solutions to stay sharp.",
  },
  {
    href: "/pricing",
    label: "MindPeak Coaching Fee Structure",
    tag: "Transparent Pricing",
    desc: "Flexible plans — no pressure, no hidden costs.",
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
    examTarget: "NEET UG 2026 Re-exam",
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
          source: "neet-2026-cancelled-page",
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
          few hours to discuss your re-exam strategy.
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
            <option value="Class 12">Class 12 (Aspiring 2026 Re-exam)</option>
            <option value="Dropper">Dropper (Aspiring 2026 Re-exam)</option>
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
            <option value="NEET UG 2026 Re-exam">NEET UG 2026 Re-exam</option>
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
export default function NEETUGCancelled2026() {
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
            <li className="text-foreground">NEET UG 2026 Cancelled</li>
          </ol>
        </nav>

        {/* ══════════════════════════════════════════
            SECTION 1 — HERO
            ══════════════════════════════════════════ */}
        <section className="max-w-5xl mx-auto px-6 pb-12">
          <div className="lg:grid lg:grid-cols-[1fr_320px] lg:gap-10 lg:items-start">

            {/* Left: headline + content */}
            <div>
              {/* Breaking badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-[0.12em] mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Breaking Update
              </div>

              <h1 className="font-display font-black text-foreground mb-4 leading-tight" style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)" }}>
                NEET UG 2026 Cancelled:{" "}
                <span className="text-gradient-gold">
                  Complete Student Guide
                </span>
              </h1>

              <p className="text-muted-foreground text-xs mb-6 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                Last updated: {LAST_UPDATED_IST} &nbsp;·&nbsp; By Devansh,
                MindPeak Institute
              </p>

              <p className="text-foreground/90 text-lg leading-relaxed mb-8 max-w-2xl">
                The National Testing Agency (NTA) officially cancelled NEET UG
                2026 on 12 May 2026 following paper leak allegations that are
                now under a CBI investigation. Here is everything you need to
                know — and your immediate next steps.
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
                  href="/downloads/MindPeak_NEET_UG_2026_Cancellation_Briefing.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-display font-bold text-sm hover:border-primary/50 hover:text-primary transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download official briefing PDF
                </a>
              </div>
            </div>

            {/* Right: sticky fact box */}
            <aside className="mt-10 lg:mt-0 lg:sticky lg:top-28">
              <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
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
                            ? "text-red-400"
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
                    Source: NTA official statement, 12 May 2026.{" "}
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
                NEET UG 2026 was held on 3 May 2026 across thousands of
                examination centres in India. Within hours of the exam
                ending, students and coaching institutes began reporting that
                portions of the question paper had been circulating on
                messaging platforms — some as early as the morning of the
                exam. Screenshots and forwarded images were widely shared on
                social media, raising serious questions about the integrity
                of the process.
              </p>
              <p>
                NTA initially received complaints through the official portal
                and through state education departments. By 8 May, after
                internal scrutiny confirmed the authenticity of several
                leaked images, the agency referred the matter to investigative
                agencies for a formal probe. NTA&rsquo;s 10 May statement
                acknowledged the integrity concerns publicly for the first
                time, while assuring students that the situation was being
                handled with urgency.
              </p>
              <p>
                On 12 May 2026, NTA and the Ministry of Education jointly
                announced the cancellation of the 3 May examination. The
                government simultaneously referred the case to the Central
                Bureau of Investigation (CBI) — India&rsquo;s apex
                investigative body — to identify those responsible for the
                leak and to ensure accountability. NTA clarified in the same
                announcement that registered candidates would not need to
                re-register, and that examination fees would be refunded in
                full.
              </p>
              <p>
                For the approximately 22 lakh students who appeared in NEET
                UG 2026, this is deeply frustrating news. Many had spent
                months — in some cases years — preparing for this exam. The
                cancellation is not a reflection of their effort or readiness.
                The re-exam, once scheduled, will be held with stricter
                oversight, and those who continue to prepare through this
                period will be better positioned than those who pause.
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
          <ol className="relative border-l border-border/60 space-y-0" aria-label="NEET UG 2026 cancellation timeline">
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
                      ? "bg-red-500"
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
            SECTION 5 — NTA'S OFFICIAL POSITION
            ══════════════════════════════════════════ */}
        <section className="bg-secondary/20 border-y border-border py-14 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-foreground text-2xl sm:text-3xl mb-6">
              NTA&rsquo;s Official Position (12 May 2026)
            </h2>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-3 mb-5">
                <FileText className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm">
                  The following points are drawn from NTA&rsquo;s official
                  press statement and notification released on 12 May 2026.
                  All claims are attributable to NTA directly.
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  "NEET UG 2026, conducted on 3 May 2026, stands cancelled with immediate effect.",
                  "A paper leak compromising the integrity of the examination has been confirmed by preliminary investigation.",
                  "The matter has been referred to the Central Bureau of Investigation (CBI) for a comprehensive probe.",
                  "Candidates who registered for NEET UG 2026 are NOT required to re-register. Existing registrations remain valid.",
                  "Examination fees will be refunded to all registered candidates. Refund timelines will be notified separately.",
                  "Fresh examination dates will be announced on neet.nta.nic.in after adequate preparation and review of examination security protocols.",
                  "NTA condemns the actions of those responsible for compromising a fair selection process and assures enhanced security measures for the re-exam.",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/85">
                    <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-muted-foreground border-t border-border/50 pt-4">
                Source: NTA official notification dated 12 May 2026, available at{" "}
                <a
                  href="https://neet.nta.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  neet.nta.nic.in
                </a>
                . MindPeak Institute has independently verified the above
                points against the published notification.
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
            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-6">
              <h3 className="font-display font-bold text-red-400 text-base mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                What Has Changed
              </h3>
              <ul className="space-y-3">
                {changedItems.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-foreground/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Unchanged */}
            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-6">
              <h3 className="font-display font-bold text-green-400 text-base mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                What Has NOT Changed
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
                I know this is not the news anyone wanted to hear. If you
                appeared for NEET UG 2026 on 3 May and were waiting for your
                result, I want to say clearly: the effort you put in was not
                wasted. What you learned is still with you. The exam being
                cancelled is not a verdict on your preparation — it is a
                failure of the system, not of you.
              </p>
              <p>
                At MindPeak, we have been guiding NEET aspirants one-on-one
                for years. Uncertainty like this is genuinely hard to navigate
                alone. The students who come out strongest from disruptions
                like this are the ones who use the additional time purposefully
                — not frantically, but deliberately. If you don&rsquo;t have
                a structured plan for the coming weeks, we would be happy to
                help you build one.
              </p>
              <p>
                Reach out, ask questions, and keep going. Medicine is still
                your goal, and we are still here to help you reach it.
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
                Get a Free 30-Minute Strategy Call
              </h2>
              <p className="text-muted-foreground text-sm max-w-lg mx-auto">
                A MindPeak mentor will walk you through your personalised
                re-exam strategy — where to focus, what to cut, and how to
                stay on track. No commitment, no sales pressure.
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
              <strong>NTA official notification (8 May 2026):</strong> Referral
              to investigative agencies. Published on neet.nta.nic.in.
            </p>
            <p>
              <strong>NTA official statement (10 May 2026):</strong> Acknowledgement
              of integrity concerns and ongoing review. Published on
              neet.nta.nic.in.
            </p>
            <p>
              <strong>NTA cancellation notification (12 May 2026):</strong>{" "}
              Official cancellation of NEET UG 2026, CBI referral, fee refund
              and re-registration status. Published on neet.nta.nic.in.
            </p>
            <p>
              <strong>How we verified this:</strong> All factual claims on this
              page are cross-referenced against the official NTA notifications
              listed above. Where official confirmation was not available at
              time of publication (e.g. exact re-exam date), we have said so
              explicitly. This page will be updated as further official
              information becomes available.
            </p>
          </div>
        </section>

      </main>
      <PageFooter />
    </>
  );
}
