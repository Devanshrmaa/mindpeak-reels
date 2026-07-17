"use client";

/**
 * AscentHome — the MindPeak homepage, "The Ascent".
 *
 * A topographic climb: a deep-navy night that warms to a dawn-gold summit, a
 * fixed altimeter rail that reads scroll as altitude gained (0 → 8,848 m) with
 * a live rank readout, a gold contour-line motif, Fraunces display serif + IBM
 * Plex Mono instrument figures, count-ups, a route-draw "method" section,
 * scroll-reveal, aurora parallax and a cursor spotlight.
 *
 * Every word, stat, rank, testimonial, price, faculty bio and FAQ here is the
 * site's real content (ported verbatim from src/components/home-redesign/*,
 * src/data/pricingData.ts and src/data/authorData.ts) — nothing is invented.
 * All demo CTAs call the real booking modal via useDemoModal(); all links point
 * at real routes/contacts. Themed off the site's `.dark` class; all motion is
 * transform/opacity-only and fully disabled under prefers-reduced-motion.
 */

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import {
  Atom,
  FlaskConical,
  Sigma,
  Dna,
  Stethoscope,
  GraduationCap,
  UserCheck,
  Compass,
  Target,
  TrendingUp,
  Check,
  X,
  Star,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowRight,
  ArrowDown,
} from "lucide-react";
import { useDemoModal } from "@/components/DemoBookingModal";
import { ThemeToggle } from "@/components/ThemeToggle";
import { tiers } from "@/data/pricingData";
import { getAuthorBySlug } from "@/data/authorData";

type CSSVars = CSSProperties & Record<string, string | number>;

const PEAK = 8848; // metres — the world's peak; the MindPeak metaphor
const SUBJECT_ICON: Record<string, typeof Atom> = {
  Physics: Atom,
  Chemistry: FlaskConical,
  Mathematics: Sigma,
  Biology: Dna,
};
const FEATURED_SLUGS = [
  "devansh",
  "sahil-singh",
  "krishnendu-brahmachari",
  "aparna-chandra",
  "nishkresh-mishra",
  "muskan-singla",
] as const;

function firstSentence(bio: string) {
  const match = bio.match(/^.*?[.!?](?=\s|$)/);
  return match ? match[0] : bio;
}

/* ------------------------------------------------------------------ *
 * Small shared pieces
 * ------------------------------------------------------------------ */
function Eyebrow({ children, center }: { children: ReactNode; center?: boolean }) {
  return (
    <span className="asc-eyebrow" style={center ? { justifyContent: "center" } : undefined}>
      {children}
    </span>
  );
}

function CtaButton({
  children,
  kind = "gold",
  onClick,
  href,
  big,
}: {
  children: ReactNode;
  kind?: "gold" | "outline" | "outlineLight";
  onClick?: () => void;
  href?: string;
  big?: boolean;
}) {
  const cls = `asc-btn asc-btn-${kind}${big ? " asc-btn-lg" : ""}`;
  if (href) {
    return (
      <a className={cls} href={href}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={cls} onClick={onClick}>
      {children}
    </button>
  );
}

/* ------------------------------------------------------------------ *
 * NAV
 * ------------------------------------------------------------------ */
function Nav({ onCta }: { onCta: () => void }) {
  const links = [
    { label: "JEE", href: "/jee-coaching" },
    { label: "NEET", href: "/neet-coaching" },
    { label: "Foundation", href: "/courses" },
    { label: "Results", href: "#results" },
    { label: "Faculty", href: "#faculty" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="asc-nav">
      <div className="asc-wrap asc-nav-in">
        <a className="asc-brand" href="/" aria-label="MindPeak Institute home">
          <span className="asc-brand-badge">
            <img src="/images/logo.jpeg" alt="MindPeak Institute" width={30} height={30} />
          </span>
          MindPeak
        </a>
        <nav className="asc-nav-links" aria-label="Primary">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="asc-navlink">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="asc-nav-actions">
          <ThemeToggle className="asc-themetoggle" />
          <button type="button" className="asc-btn asc-btn-gold asc-btn-sm" onClick={onCta}>
            Book a free demo
          </button>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ *
 * HERO
 * ------------------------------------------------------------------ */
function Hero({ onCta }: { onCta: () => void }) {
  return (
    <section className="asc-hero" id="top">
      <canvas id="ascContour" className="asc-contour" aria-hidden="true" />
      <span className="asc-aurora asc-aurora-a asc-par" data-depth="0.35" aria-hidden="true" />
      <span className="asc-aurora asc-aurora-b asc-par" data-depth="0.2" aria-hidden="true" />
      <div className="asc-wrap asc-hero-grid">
        <div className="asc-hero-copy">
          <div className="asc-hero-chips asc-rise" style={{ "--d": "0s" } as CSSVars}>
            <span className="asc-chip asc-chip-gold">500+ students mentored</span>
            <span className="asc-chip">95% success rate</span>
            <span className="asc-chip">IIT · NIT · AIIMS mentors</span>
          </div>
          <h1 className="asc-rise" style={{ "--d": ".08s" } as CSSVars}>
            The mentor who knows your name, your weak chapters, and your{" "}
            <em className="asc-shimmer">rank goal.</em>
          </h1>
          <p className="asc-lede asc-rise" style={{ "--d": ".16s" } as CSSVars}>
            Daily live 1-on-1 classes with a personal IIT/NIT/AIIMS mentor — not a seat in a
            batch of 100. Doubts answered in under 30 minutes, parents updated every week.
          </p>
          <div className="asc-hero-cta asc-rise" style={{ "--d": ".24s" } as CSSVars}>
            <CtaButton kind="gold" big onClick={onCta}>
              Meet your mentor — free demo
              <ArrowRight size={17} strokeWidth={2.2} />
            </CtaButton>
            <CtaButton kind="outline" big href="#results">
              See the results ledger
            </CtaButton>
          </div>
          <div className="asc-hero-rating asc-rise" style={{ "--d": ".3s" } as CSSVars}>
            <span className="asc-stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={15} className="asc-star" />
              ))}
            </span>
            <span>
              <strong>4.9/5</strong> from 500+ parent reviews
            </span>
          </div>
          <div className="asc-hero-cities asc-rise" style={{ "--d": ".36s" } as CSSVars}>
            <span className="asc-avatars">
              {["student-1", "student-2", "student-3", "student-4"].map((s) => (
                <img key={s} src={`/images/${s}.jpg`} alt="MindPeak student" width={38} height={38} />
              ))}
            </span>
            <span>
              <strong>120+ cities</strong> — students join from every corner of India
            </span>
          </div>
        </div>

        {/* real mentoring photo + live badge + verbatim doubt-chat card */}
        <div className="asc-hero-visual asc-rise asc-tilt" data-tilt="6" style={{ "--d": ".2s" } as CSSVars}>
          <span className="asc-hero-frame" aria-hidden="true" />
          <img
            className="asc-hero-photo"
            src="/images/mentoring-session-2.jpg"
            alt="A MindPeak mentor in a live one-on-one class with a student"
            width={560}
            height={480}
          />
          <span className="asc-live-badge">
            <span className="asc-live-dot" />
            LIVE 1-ON-1 CLASS
          </span>
          <div className="asc-doubt asc-glass">
            <div className="asc-doubt-top">
              <span className="asc-doubt-title">Doubt chat · Physics</span>
              <span>11:42 PM</span>
            </div>
            <div className="asc-doubt-q">
              Sir, rotational mechanics Q14 — why is angular momentum conserved here?
            </div>
            <div className="asc-doubt-a">
              No external torque about the axis — sending a 2-min video walkthrough now. ✓
            </div>
            <div className="asc-doubt-resolved">
              <span className="asc-dot-live" />
              Resolved in 18 minutes
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * MARQUEE
 * ------------------------------------------------------------------ */
function Marquee() {
  const items = [
    "AIR 42 · JEE Advanced",
    "AIR 89 · JEE Mains",
    "AIR 156 · NEET UG",
    "50+ ranks under AIR 5,000",
    "95% success rate",
    "120+ cities across India",
    "Doubts solved in under 30 min",
    "Live 1-on-1, 6 days a week",
  ];
  const row = (key: string, hidden: boolean) => (
    <div className="asc-mq-row" aria-hidden={hidden || undefined} key={key}>
      {items.map((t) => (
        <span className="asc-mq-item" key={t}>
          {t}
          <span className="asc-mq-star" aria-hidden="true">
            ✦
          </span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="asc-marquee" role="presentation">
      <div className="asc-mq-track">
        {row("a", false)}
        {row("b", true)}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * COMPARE
 * ------------------------------------------------------------------ */
function Compare() {
  const batch = [
    "One teacher, 100+ students in a class",
    "A fixed pace — the batch can't wait for you",
    "Doubts pile up; answers take days",
    "One generic test series for everyone",
    "Relocate to Kota, live in a hostel",
    "Parents left guessing how prep is going",
  ];
  const peak = [
    "One mentor, one student — every session",
    "Pace set by your weakest chapters first",
    "Doubts answered in under 30 minutes",
    "A plan rebuilt every week from your data",
    "Learn from home — students in 120+ cities",
    "A parent report every Sunday: accuracy, speed, topics",
  ];
  return (
    <section className="asc-band">
      <div className="asc-wrap">
        <div className="asc-sec-head asc-reveal">
          <Eyebrow>The difference</Eyebrow>
          <h2>Why one mentor beats a batch of a hundred</h2>
          <p>
            Same syllabus, same exam — a completely different experience. Here is what changes the
            day your preparation stops being one-size-fits-all.
          </p>
        </div>
        <div className="asc-compare">
          <div className="asc-col asc-col-them asc-reveal asc-spot">
            <div className="asc-col-head">
              <span className="asc-col-dot asc-col-dot-mute" aria-hidden="true" />
              <span className="asc-col-label asc-col-label-mute">Traditional batch coaching</span>
            </div>
            <ul>
              {batch.map((t, i) => (
                <li key={i} style={i ? { borderTop: "1px solid var(--asc-line)" } : undefined}>
                  <span className="asc-x" aria-hidden="true">
                    <X size={13} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="asc-col asc-col-us asc-reveal asc-spot asc-spot-dark">
            <div className="asc-col-head">
              <div className="asc-col-head-l">
                <span className="asc-col-dot asc-dot-live asc-pulse" aria-hidden="true" />
                <span className="asc-col-label asc-col-label-gold">The MindPeak way</span>
              </div>
              <span className="asc-col-tag">Why families switch</span>
            </div>
            <ul>
              {peak.map((t, i) => (
                <li key={i} style={i ? { borderTop: "1px solid rgba(251,247,239,0.14)" } : undefined}>
                  <span className="asc-check" aria-hidden="true">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * METHOD (route-draw climb)
 * ------------------------------------------------------------------ */
function Method() {
  const pillars = [
    {
      Icon: UserCheck,
      t: "1-on-1 Mentoring",
      d: "A dedicated mentor from IIT, NIT or AIIMS — the same person every day, who knows your name and your weak chapters.",
    },
    {
      Icon: Compass,
      t: "Adaptive Curriculum",
      d: "Your plan rebuilds itself every week around performance data, so time always goes where it moves your rank most.",
    },
    {
      Icon: Target,
      t: "Deep Practice",
      d: "Tiered problem sets that build real understanding — every mistake traced back to the exact concept behind it.",
    },
    {
      Icon: TrendingUp,
      t: "Progress Tracking",
      d: "Weekly analytics on accuracy, speed and topics, shared with you and your parents every single Sunday.",
    },
  ];
  return (
    <section className="asc-band asc-band-navy" id="method">
      <div className="asc-wrap">
        <div className="asc-sec-head asc-reveal">
          <Eyebrow>The method</Eyebrow>
          <h2>Four things we do that batch coaching can&apos;t</h2>
          <p>
            The whole system is built around one student at a time. Scroll the ridge — the route
            draws itself as each hold locks in.
          </p>
        </div>
        <div className="asc-climb">
          <div className="asc-stage" id="ascStage">
            <svg viewBox="0 0 400 560" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <g className="asc-stage-contours" fill="none" strokeWidth="1">
                <path d="M-20 470 Q120 430 200 448 T420 430" />
                <path d="M-20 420 Q120 378 210 398 T420 378" />
                <path d="M-20 360 Q140 320 220 340 T420 318" />
                <path d="M-20 300 Q150 262 235 282 T420 258" />
                <path d="M-20 236 Q170 202 250 220 T420 198" />
              </g>
              <path
                className="asc-ridge"
                d="M20 520 L120 300 L180 380 L250 180 L320 300 L380 130"
              />
              <path
                id="ascRoute"
                d="M20 520 L120 300 L180 380 L250 180 L320 300 L380 130"
                fill="none"
                stroke="url(#ascRouteGrad)"
                strokeWidth="3.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="ascFlag" transform="translate(380 130)" opacity="0">
                <path d="M0 0 L0 -26" stroke="var(--asc-gold-bright)" strokeWidth="2" />
                <path d="M0 -26 L14 -21 L0 -14 Z" fill="var(--asc-gold-bright)" />
              </g>
              <circle id="ascClimber" cx="20" cy="520" r="6" fill="var(--asc-gold-bright)" stroke="#0A101C" strokeWidth="1.5" />
              <defs>
                <linearGradient id="ascRouteGrad" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0" stopColor="var(--asc-gold-deep)" />
                  <stop offset="1" stopColor="var(--asc-gold-bright)" />
                </linearGradient>
              </defs>
            </svg>
            <span className="asc-stage-cap">The route · base camp → summit</span>
            <span className="asc-stage-alt">
              <span className="asc-stage-metres asc-mono" id="ascStageMetres">
                0
              </span>
              <span className="asc-stage-unit"> m</span>
              <br />
              <span className="asc-stage-sub">altitude gained</span>
            </span>
          </div>
          <div className="asc-steps" id="ascSteps">
            {pillars.map((p, i) => (
              <div className="asc-step" data-step={i} key={i}>
                <span className="asc-step-ic" aria-hidden="true">
                  <p.Icon size={24} strokeWidth={1.7} />
                </span>
                <span className="asc-step-no asc-mono">Hold 0{i + 1}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * STATS (count-ups + ring)
 * ------------------------------------------------------------------ */
function Stats() {
  const R = 60;
  const STROKE = 9;
  const SIZE = (R + STROKE) * 2;
  const CIRC = 2 * Math.PI * R;
  const nums = [
    { count: 500, suffix: "+", cap: "students mentored across India" },
    { count: 42, prefix: "AIR ", cap: "best JEE Advanced rank to date" },
    { count: 120, suffix: "+", cap: "cities reached — no relocation" },
  ];
  return (
    <section className="asc-band asc-band-navy" id="stats-band">
      <div className="asc-wrap">
        <div className="asc-sec-head asc-sec-head-center asc-reveal">
          <Eyebrow center>By the numbers</Eyebrow>
          <h2>Proof you can count</h2>
        </div>
        <div className="asc-stats">
          <div className="asc-ring-wrap asc-reveal">
            <div className="asc-ring" style={{ width: SIZE, height: SIZE }}>
              <svg width={SIZE} height={SIZE} style={{ transform: "rotate(-90deg)" }} aria-hidden="true">
                <defs>
                  <linearGradient id="ascRingGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#EFC97D" />
                    <stop offset="100%" stopColor="#B98935" />
                  </linearGradient>
                </defs>
                <circle cx={R + STROKE} cy={R + STROKE} r={R} fill="none" stroke="rgba(251,247,239,0.14)" strokeWidth={STROKE} />
                <circle
                  id="ascRing"
                  cx={R + STROKE}
                  cy={R + STROKE}
                  r={R}
                  fill="none"
                  stroke="url(#ascRingGrad)"
                  strokeWidth={STROKE}
                  strokeLinecap="round"
                  strokeDasharray={CIRC}
                  strokeDashoffset={CIRC}
                  data-circ={CIRC}
                />
              </svg>
              <span className="asc-ring-num asc-mono" data-count="95" data-suffix="%" data-ring>
                0%
              </span>
            </div>
            <div className="asc-ring-cap">overall success rate across JEE &amp; NEET</div>
          </div>
          <div className="asc-stat-grid">
            {nums.map((s, i) => (
              <div className="asc-stat asc-reveal asc-spot asc-spot-dark" style={{ "--d": `${i * 0.08}s` } as CSSVars} key={i}>
                <div className="asc-stat-fig asc-mono">
                  {s.prefix ? <span className="asc-stat-affix">{s.prefix}</span> : null}
                  <span data-count={s.count} data-suffix={s.suffix ?? ""}>
                    0
                  </span>
                </div>
                <div className="asc-stat-cap">{s.cap}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * LEDGER
 * ------------------------------------------------------------------ */
function Ledger() {
  const rows = [
    { rank: "AIR 42", exam: "JEE Advanced", name: "Aarav Sharma", note: "IIT Bombay, Computer Science", img: "/images/aarav-sharma.jpg" },
    { rank: "AIR 89", exam: "JEE Mains", name: "Rohan Gupta", note: "99.97 percentile, dropper year", img: "/images/rohan-gupta.jpg" },
    { rank: "AIR 156", exam: "NEET UG", name: "Priya Patel", note: "AIIMS Delhi, MBBS", img: "/images/priya-patel.jpg" },
  ];
  return (
    <section className="asc-plain" id="results">
      <div className="asc-wrap">
        <div className="asc-ledger-head asc-reveal">
          <div>
            <Eyebrow>Proof, not promises</Eyebrow>
            <h2>The results ledger</h2>
          </div>
          <span className="asc-ledger-meta asc-mono">500+ students mentored · 95% success rate</span>
        </div>
        {rows.map((r, i) => (
          <div className="asc-ledger-row asc-reveal" key={i}>
            <div className="asc-ledger-rank asc-mono">{r.rank}</div>
            <div className="asc-ledger-exam asc-mono">{r.exam}</div>
            <div className="asc-ledger-name">
              {r.name} <span>— {r.note}</span>
            </div>
            <img className="asc-ledger-img" src={r.img} alt={r.name} width={58} height={58} loading="lazy" />
          </div>
        ))}
        <div className="asc-ledger-foot asc-reveal">
          <span>+ 50 more students under AIR 5,000 — full list published yearly</span>
          <a href="/success-stories" className="asc-arrow-link">
            Read all success stories <ArrowRight size={15} strokeWidth={2.2} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * WEEKLY REPORT PROOF
 * ------------------------------------------------------------------ */
function ReportProof() {
  const bars = [
    { k: "Biology — Genetics", v: 92, c: "var(--asc-live)" },
    { k: "Chemistry — Equilibrium", v: 78, c: "var(--asc-gold)" },
    { k: "Physics — Optics", v: 61, c: "#D98A5A" },
  ];
  const stats = [
    { v: "AIR 156", k: "Priya's final NEET rank" },
    { v: "< 30 min", k: "doubt response time" },
    { v: "6 days", k: "live classes per week" },
  ];
  return (
    <section className="asc-plain asc-report" id="weekly-report">
      <div className="asc-wrap asc-report-grid">
        <div className="asc-reveal">
          <div className="asc-report-card asc-glass asc-spot">
            <div className="asc-report-card-top">
              <span className="asc-report-card-title">Weekly report — Priya P.</span>
              <span className="asc-report-week asc-mono">Week 31 · NEET UG</span>
            </div>
            {bars.map((b, i) => (
              <div className="asc-report-bar" key={i}>
                <div className="asc-report-bar-lab">
                  <span>{b.k}</span>
                  <span className="asc-mono">{b.v}% accuracy</span>
                </div>
                <div className="asc-report-track">
                  <i className="asc-report-fill" style={{ "--w": `${b.v}%`, background: b.c } as CSSVars} />
                </div>
              </div>
            ))}
            <div className="asc-report-note">
              <strong>Mentor&apos;s note:</strong> Optics needs two extra sessions this week — plan
              adjusted. Genetics is exam-ready.
            </div>
          </div>
        </div>
        <div className="asc-reveal">
          <Eyebrow>Weekly parent report</Eyebrow>
          <h2 className="asc-report-h">
            Parents see everything.
            <br />
            Every single week.
          </h2>
          <p className="asc-report-lede">
            No more &quot;how is the prep going?&quot; guesswork. Weekly analytics show exactly where
            your child stands — accuracy, speed, topic-wise performance — and what the mentor is
            changing in response.
          </p>
          <div className="asc-report-stats">
            {stats.map((s, i) => (
              <div className="asc-report-stat" key={i}>
                <div className="asc-report-stat-v asc-mono">{s.v}</div>
                <div className="asc-report-stat-k">{s.k}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * STATEMENT
 * ------------------------------------------------------------------ */
function Statement() {
  return (
    <section className="asc-statement" aria-labelledby="asc-statement-h">
      <img
        className="asc-statement-photo asc-par"
        data-depth="0.12"
        src="/images/mentoring-session-1.jpg"
        alt="A MindPeak mentor working through a problem one-on-one with a student"
        loading="lazy"
      />
      <span className="asc-statement-scrim" aria-hidden="true" />
      <div className="asc-wrap asc-statement-in">
        <div className="asc-reveal">
          <Eyebrow>The MindPeak standard</Eyebrow>
          <h2 id="asc-statement-h" className="asc-statement-h">
            Measured
            <br />
            progress.
          </h2>
          <p className="asc-statement-p">
            No averages, no guesswork. Every chapter, every mock, every week — tracked, reported and
            re-planned around one student at a time.
          </p>
          <a href="#weekly-report" className="asc-arrow-link asc-arrow-light">
            See a real weekly report <ArrowDown size={15} strokeWidth={2.2} />
          </a>
        </div>
        <div className="asc-statement-caption asc-reveal">
          <span className="asc-statement-caption-l">Built for one student at a time</span>
          <div className="asc-statement-ratio">
            <div className="asc-statement-ratio-v asc-mono">1:1</div>
            <div className="asc-statement-ratio-k">mentor-to-student ratio, every class</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * VOICES
 * ------------------------------------------------------------------ */
function Voices() {
  const voices = [
    {
      q: "My mentor knew exactly which chapters I was quietly avoiding. By December, rotational mechanics had gone from my worst topic to my fastest.",
      name: "Aarav Sharma",
      role: "AIR 42 · JEE Advanced",
      img: "/images/aarav-sharma.jpg",
    },
    {
      q: "Every Sunday I got a real report — accuracy, speed, what the mentor changed. For the first time I actually knew how my daughter's prep was going.",
      name: "Priya's mother",
      role: "Parent · NEET UG",
      img: "/images/priya-patel.jpg",
    },
    {
      q: "After a failed first attempt, the weekly plan kept rebuilding itself around my mistakes. I finished the drop year at 99.97 percentile.",
      name: "Rohan Gupta",
      role: "AIR 89 · JEE Mains, dropper",
      img: "/images/rohan-gupta.jpg",
    },
  ];
  return (
    <section className="asc-band asc-band-navy">
      <div className="asc-wrap">
        <div className="asc-sec-head asc-sec-head-split asc-reveal">
          <div>
            <Eyebrow>In their words</Eyebrow>
            <h2>Voices from MindPeak families</h2>
          </div>
          <span className="asc-sec-aside">
            Real students, real ranks — the people behind the results ledger.
          </span>
        </div>
        <div className="asc-voices">
          {voices.map((v, i) => (
            <figure className="asc-voice asc-reveal asc-spot asc-spot-dark" style={{ "--d": `${i * 0.09}s` } as CSSVars} key={i}>
              <span className="asc-voice-quote" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote>{v.q}</blockquote>
              <figcaption>
                <img src={v.img} alt={v.name} width={46} height={46} loading="lazy" />
                <div>
                  <div className="asc-voice-name">{v.name}</div>
                  <div className="asc-voice-role asc-mono">{v.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * FACULTY
 * ------------------------------------------------------------------ */
function Faculty() {
  const faculty = FEATURED_SLUGS.map(getAuthorBySlug).filter(
    (a): a is NonNullable<typeof a> => Boolean(a),
  );
  return (
    <section className="asc-plain" id="faculty">
      <div className="asc-wrap">
        <div className="asc-sec-head asc-reveal">
          <Eyebrow>Meet your mentors</Eyebrow>
          <h2>The faculty behind the results ledger</h2>
          <p>
            Real mentors from IIT, NIT and AIIMS — the people your child will actually have live
            1-on-1 classes with, not a rotating pool of substitutes.
          </p>
        </div>
        <div className="asc-faculty-grid">
          {faculty.map((f, i) => {
            const Icon = SUBJECT_ICON[f.subjects[0]] ?? Atom;
            return (
              <div className="asc-faculty-card asc-reveal asc-spot" style={{ "--d": `${i * 0.08}s` } as CSSVars} key={f.slug}>
                <span className="asc-faculty-ic" aria-hidden="true">
                  <Icon size={24} strokeWidth={2.2} />
                </span>
                <h3>{f.name}</h3>
                <div className="asc-faculty-cred">{f.credential}</div>
                <p>{firstSentence(f.bio)}</p>
              </div>
            );
          })}
        </div>
        <div className="asc-reveal asc-center">
          <a href="/mentors" className="asc-arrow-link">
            Meet the full faculty <ArrowRight size={15} strokeWidth={2.2} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * WEEK RHYTHM
 * ------------------------------------------------------------------ */
function Week() {
  const days = [
    { d: "Mon – Sat", t: "Daily 1-on-1 live class", s: "90 min with your personal mentor — concept building on your weak chapters first. Every session recorded." },
    { d: "Wednesday", t: "Practice review", s: "Tiered problem sets checked together; mistakes traced back to the exact concept." },
    { d: "Saturday", t: "CBT mock test", s: "Full NTA-pattern computer-based test — same interface as the real exam." },
    { d: "Sunday", t: "Parent report", s: "Accuracy, speed and topic-wise analytics shared with you and your parents." },
  ];
  return (
    <section className="asc-band asc-band-navy">
      <div className="asc-wrap">
        <div className="asc-sec-head asc-sec-head-split asc-reveal">
          <div>
            <Eyebrow>The weekly rhythm</Eyebrow>
            <h2>What a week looks like</h2>
          </div>
          <span className="asc-sec-aside">
            Every plan is personal — this is Aarav&apos;s, Class 12, target IIT Bombay
          </span>
        </div>
        <div className="asc-week-grid">
          {days.map((w, i) => (
            <div className="asc-week-card asc-reveal asc-spot asc-spot-dark" style={{ "--d": `${i * 0.09}s` } as CSSVars} key={i}>
              <div className="asc-week-top">
                <span className="asc-week-day asc-mono">{w.d}</span>
                <span className="asc-week-no asc-mono" aria-hidden="true">
                  0{i + 1}
                </span>
              </div>
              <div className="asc-week-t">{w.t}</div>
              <div className="asc-week-s">{w.s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * PROGRAMS
 * ------------------------------------------------------------------ */
function Programs({ onCta }: { onCta: () => void }) {
  const programs = [
    { no: "01", Icon: Atom, t: "JEE Main + Advanced", d: "1-year and 2-year programs with personal IIT/NIT mentors, weekly CBT mocks, a roadmap built around your target rank.", best: "Best result: AIR 42" },
    { no: "02", Icon: Stethoscope, t: "NEET UG", d: "NCERT line-by-line mastery first, Biology specialists from AIIMS, NTA-pattern computer-based mocks.", best: "Best result: AIR 156" },
    { no: "03", Icon: GraduationCap, t: "Foundation · Class 6–10", d: "Boards + Olympiad + NTSE, building scientific habits before the competitive years.", best: "95%+ board scores" },
  ];
  return (
    <section className="asc-plain" id="programs">
      <div className="asc-wrap">
        <div className="asc-programs-card asc-reveal">
          <Eyebrow>Programs — choose your exam</Eyebrow>
          <div className="asc-programs-grid">
            {programs.map((p, i) => (
              <div className="asc-program" key={i}>
                <span className="asc-program-no asc-mono" aria-hidden="true">
                  {p.no}
                </span>
                <span className="asc-program-ic" aria-hidden="true">
                  <p.Icon size={22} strokeWidth={2.2} />
                </span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
                <div className="asc-program-best asc-mono">{p.best}</div>
              </div>
            ))}
          </div>
          <div className="asc-programs-foot">
            <span>
              Also available: subject crash courses, 1-on-1 crash programs, dropper batches and CBT
              test series. Join anytime — no batch dependency.
            </span>
            <button type="button" className="asc-btn asc-btn-outline asc-btn-sm" onClick={onCta}>
              Find my program
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * PRICING
 * ------------------------------------------------------------------ */
function Pricing({ onCta }: { onCta: () => void }) {
  return (
    <section className="asc-plain" id="pricing">
      <div className="asc-wrap">
        <div className="asc-sec-head asc-reveal">
          <Eyebrow>Plans</Eyebrow>
          <h2>What it costs to have a personal mentor</h2>
          <p>
            One flat fee, no batch dependency, no hidden add-ons. Every plan includes daily 1-on-1
            live classes and a dedicated mentor from day one.
          </p>
        </div>
        <div className="asc-pricing-grid">
          {tiers.map((tier, i) => {
            const hi = Boolean(tier.highlight);
            return (
              <div
                className={`asc-tier asc-reveal asc-spot${hi ? " asc-tier-hi asc-spot-dark" : ""}`}
                style={{ "--d": `${i * 0.09}s` } as CSSVars}
                key={tier.name}
              >
                {tier.badge ? <span className="asc-tier-badge">{tier.badge}</span> : null}
                <h3>{tier.name}</h3>
                <div className="asc-tier-target">{tier.target}</div>
                <div className="asc-tier-price">
                  <span className="asc-tier-now asc-mono">{tier.price}</span>
                  {tier.originalPrice ? <span className="asc-tier-was asc-mono">{tier.originalPrice}</span> : null}
                </div>
                <div className="asc-tier-period">{tier.period}</div>
                {tier.discountTag ? <div className="asc-tier-discount asc-mono">{tier.discountTag}</div> : null}
                <ul>
                  {tier.features.slice(0, 6).map((f) => (
                    <li key={f}>
                      <Check size={15} strokeWidth={2.4} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className={`asc-btn ${hi ? "asc-btn-gold" : "asc-btn-outline"} asc-btn-block`}
                  onClick={onCta}
                >
                  Book a free demo
                </button>
              </div>
            );
          })}
        </div>
        <div className="asc-reveal asc-center">
          <a href="/pricing" className="asc-arrow-link">
            See full plan comparison &amp; crash courses <ArrowRight size={15} strokeWidth={2.2} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * FAQ
 * ------------------------------------------------------------------ */
const FAQS = [
  { tag: "Format", q: "Are the classes conducted online or offline?", a: "All our classes are conducted online via live 1-on-1 video sessions. The best part? Every live class is recorded, so you can revisit any session anytime for revision. This means you never miss a concept — even if you couldn’t attend a class, the recording is always available." },
  { tag: "Why us", q: "What makes MindPeak different from other coaching institutes?", a: "We offer personalized 1-on-1 live online classes 6 days a week with dedicated mentors — not crowded batch classes. Every student gets a customized study plan, regular performance analytics, and direct access to faculty for doubt resolution. Plus, all sessions are recorded for later revision." },
  { tag: "Demo", q: "How are the demo classes conducted?", a: "Demo classes are free, live 1-on-1 sessions with our faculty. You’ll experience our teaching methodology firsthand, get a personalized assessment of your current level, and receive a tailored roadmap for your preparation." },
  { tag: "Joining", q: "Can I join mid-session or do I have to wait for a new batch?", a: "Since our classes are 1-on-1, you can join anytime! There’s no batch dependency. We’ll create a customized schedule that works for you and align the curriculum to your exam timeline." },
  { tag: "Mentors", q: "Who are the mentors at MindPeak?", a: "Our mentors are graduates from IIT, NIT, and AIIMS with proven teaching experience. Each mentor is carefully selected for both subject expertise and the ability to connect with students. They undergo regular training to stay updated with the latest exam patterns and NTA guidelines." },
  { tag: "Doubts", q: "How quickly are doubts resolved?", a: "Doubts raised during live sessions are cleared instantly. For doubts outside class hours, our average response time is under 30 minutes via our dedicated doubt-resolution channel. Unlike batch coaching where students wait days, at MindPeak no question goes unanswered." },
  { tag: "Droppers", q: "Is MindPeak suitable for dropper students?", a: "Absolutely. We have dedicated dropper programs for both JEE and NEET. Your mentor will evaluate your previous attempt, identify specific gaps, and build a focused plan to maximize your score improvement. Many of our top results — including AIR 89 — came from dropper students." },
  { tag: "Fees", q: "What is the fee structure?", a: "Our fees vary by program and duration. Book a free demo class and our counselor will walk you through all available plans, including any ongoing scholarships or installment options." },
  { tag: "Material", q: "Do you offer any study material or do students need to buy separately?", a: "Comprehensive study material, practice problem sets, and NCERT-aligned notes are included with every program. We also provide free downloadable NCERT textbooks on our website. No need to purchase additional books — our curated resources cover the full JEE and NEET syllabus." },
];

function FAQ({ onCta }: { onCta: () => void }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="asc-plain" id="faq">
      <div className="asc-wrap asc-faq-grid">
        <div className="asc-faq-aside asc-reveal">
          <Eyebrow>Straight answers</Eyebrow>
          <h2>
            Questions parents
            <br />
            ask us
          </h2>
          <p className="asc-faq-intro">
            Everything about classes, mentors, doubts and fees — answered plainly. Still unsure about
            something? A counsellor is one message away.
          </p>
          <div className="asc-faq-cta asc-spot asc-spot-dark">
            <div className="asc-faq-cta-title">Still have a question?</div>
            <p>Book a free 1-on-1 demo or message us on WhatsApp — we usually reply within the hour.</p>
            <button type="button" className="asc-btn asc-btn-gold asc-btn-block" onClick={onCta}>
              Book a free demo
            </button>
            <div className="asc-faq-chips">
              <a href="https://wa.me/918219457704" target="_blank" rel="noopener noreferrer" className="asc-faq-chip">
                <span className="asc-faq-chip-ic">
                  <MessageCircle size={14} />
                </span>
                Chat with us on WhatsApp
              </a>
              <a href="tel:+918219457704" className="asc-faq-chip">
                <span className="asc-faq-chip-ic">
                  <Phone size={14} />
                </span>
                +91 82194 57704
              </a>
            </div>
          </div>
        </div>
        <div className="asc-faq-list asc-reveal">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div className={`asc-faq-item asc-spot${isOpen ? " asc-faq-open" : ""}`} key={i}>
                <button
                  type="button"
                  className="asc-faq-q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="asc-faq-q-text">
                    <span className="asc-faq-tag asc-mono">{f.tag}</span>
                    <span className="asc-faq-question">{f.q}</span>
                  </span>
                  <span className="asc-faq-plus" aria-hidden="true">
                    +
                  </span>
                </button>
                <div className={`asc-faq-body${isOpen ? " asc-faq-body-open" : ""}`}>
                  <div>
                    <p>{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * SUMMIT CTA
 * ------------------------------------------------------------------ */
function Summit({ onCta }: { onCta: () => void }) {
  const cards = [
    { Icon: Phone, label: "+91 82194 57704", href: "tel:+918219457704" },
    { Icon: Mail, label: "mindpeak@mindpeakinstitute.com", href: "mailto:mindpeak@mindpeakinstitute.com" },
    { Icon: MessageCircle, label: "Chat on WhatsApp", href: "https://wa.me/918219457704" },
    { Icon: MapPin, label: "Dehra Gopipur, Himachal Pradesh", href: null as string | null },
  ];
  return (
    <section className="asc-summit" id="contact">
      <span className="asc-summit-sun" aria-hidden="true" />
      <div className="asc-wrap asc-summit-in">
        <Eyebrow center>Free demo · zero commitment</Eyebrow>
        <h2 className="asc-reveal">Try one class. Meet your mentor.</h2>
        <p className="asc-reveal" style={{ "--d": ".08s" } as CSSVars}>
          A live 1-on-1 session, a personalized assessment of your current level, and a study plan
          sketch you keep either way.
        </p>
        <div className="asc-summit-cta asc-reveal" style={{ "--d": ".14s" } as CSSVars}>
          <CtaButton kind="gold" big onClick={onCta}>
            Book my free demo class
            <ArrowRight size={17} strokeWidth={2.2} />
          </CtaButton>
        </div>
        <div className="asc-summit-chips asc-reveal" style={{ "--d": ".2s" } as CSSVars}>
          {cards.map((c, i) => {
            const inner = (
              <>
                <span className="asc-summit-chip-ic">
                  <c.Icon size={16} />
                </span>
                {c.label}
              </>
            );
            return c.href ? (
              <a
                key={i}
                className="asc-summit-chip"
                href={c.href}
                {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {inner}
              </a>
            ) : (
              <span key={i} className="asc-summit-chip">
                {inner}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================================================================== *
 * ROOT
 * ================================================================== */
export default function AscentHome() {
  const { openDemoModal } = useDemoModal();
  const rootRef = useRef<HTMLDivElement>(null);
  const onCta = () => openDemoModal();

  /* scroll-reveal + count-up observers */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const reveals = Array.from(root.querySelectorAll<HTMLElement>(".asc-reveal"));
    if (reduce || !("IntersectionObserver" in window)) {
      reveals.forEach((el) => el.classList.add("in"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          }
        },
        { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
      );
      reveals.forEach((el) => io.observe(el));

      // count-ups
      const fmt = (n: number) => Math.round(n).toLocaleString("en-IN");
      const runCount = (el: HTMLElement) => {
        const target = parseFloat(el.getAttribute("data-count") || "0");
        const suffix = el.getAttribute("data-suffix") || "";
        const isRing = el.hasAttribute("data-ring");
        const ring = isRing ? (root.querySelector("#ascRing") as SVGCircleElement | null) : null;
        const circ = ring ? parseFloat(ring.getAttribute("data-circ") || "0") : 0;
        const dur = 1500;
        let start = 0;
        const step = (ts: number) => {
          if (!start) start = ts;
          const p = Math.min((ts - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = fmt(target * eased) + suffix;
          if (ring) ring.style.strokeDashoffset = String(circ * (1 - (target * eased) / 100));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };
      const counters = Array.from(root.querySelectorAll<HTMLElement>("[data-count]"));
      const cio = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              runCount(e.target as HTMLElement);
              cio.unobserve(e.target);
            }
          }
        },
        { threshold: 0.6 },
      );
      counters.forEach((el) => cio.observe(el));
      return () => {
        io.disconnect();
        cio.disconnect();
      };
    }
  }, []);

  /* contour canvas */
  useEffect(() => {
    const canvas = document.getElementById("ascContour") as HTMLCanvasElement | null;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const lines = 7;
    let W = 0;
    let H = 0;
    let phase = 0;
    let raf = 0;
    const resize = () => {
      const host = canvas.parentElement;
      if (!host) return;
      W = host.offsetWidth;
      H = host.offsetHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const draw = () => {
      const stroke = getComputedStyle(document.documentElement).getPropertyValue("--asc-contour").trim() || "rgba(217,174,87,0.15)";
      ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = stroke;
      ctx.lineWidth = 1;
      for (let l = 0; l < lines; l++) {
        const baseY = H * 0.26 + (l / (lines - 1)) * H * 0.72;
        ctx.beginPath();
        for (let x = -20; x <= W + 20; x += 14) {
          const amp = 16 + l * 5;
          const y = baseY + Math.sin(x * 0.012 + phase + l * 0.7) * amp + Math.sin(x * 0.03 + l) * 4;
          if (x === -20) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.globalAlpha = 0.5 + l * 0.07;
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    };
    resize();
    window.addEventListener("resize", resize);
    if (reduce) {
      draw();
    } else {
      const loop = () => {
        phase += 0.0045;
        draw();
        raf = requestAnimationFrame(loop);
      };
      loop();
    }
    return () => {
      window.removeEventListener("resize", resize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  /* scroll-driven: progress bar, altimeter, route draw, aurora parallax + spotlight + anchor scroll */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const motionOk = finePointer && !reduce;

    const bar = document.getElementById("asc-progress");
    const altFill = document.getElementById("ascAltFill");
    const altMarker = document.getElementById("ascAltMarker");
    const route = document.getElementById("ascRoute") as unknown as SVGPathElement | null;
    const climber = document.getElementById("ascClimber");
    const flag = document.getElementById("ascFlag");
    const stageMetres = document.getElementById("ascStageMetres");
    const methodSec = document.getElementById("method");
    const steps = Array.from(root.querySelectorAll<HTMLElement>(".asc-step"));
    const parLayers = motionOk ? Array.from(root.querySelectorAll<HTMLElement>(".asc-par")) : [];
    const routeLen = route ? route.getTotalLength() : 0;
    if (route) {
      route.style.strokeDasharray = String(routeLen);
      route.style.strokeDashoffset = String(routeLen);
    }

    let ticking = false;
    const update = () => {
      ticking = false;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const p = max > 0 ? Math.min(Math.max(doc.scrollTop / max, 0), 1) : 0;
      if (bar) bar.style.transform = `scaleX(${p})`;

      if (altFill) altFill.style.height = `${p * 100}%`;
      if (altMarker) altMarker.style.bottom = `${p * 100}%`;

      if (motionOk) {
        const vh = window.innerHeight;
        for (const el of parLayers) {
          const host = (el.closest("section") as HTMLElement | null) ?? el.parentElement;
          if (!host) continue;
          const r = host.getBoundingClientRect();
          if (r.bottom < -200 || r.top > vh + 200) continue;
          const prog = (r.top + r.height / 2 - vh / 2) / vh;
          const depth = parseFloat(el.dataset.depth || "0.2");
          el.style.transform = `translate3d(0, ${(prog * depth * -140).toFixed(1)}px, 0)`;
        }
      }

      if (route && methodSec && steps.length) {
        const r = methodSec.getBoundingClientRect();
        const vh = window.innerHeight;
        const segTotal = r.height - vh * 0.5;
        const local = segTotal > 0 ? Math.min(Math.max((vh * 0.5 - r.top) / segTotal, 0), 1) : 0;
        route.style.strokeDashoffset = String(routeLen * (1 - local));
        if (flag) flag.setAttribute("opacity", local > 0.9 ? "1" : "0");
        if (stageMetres) stageMetres.textContent = Math.round(local * PEAK).toLocaleString("en-IN");
        if (climber && routeLen) {
          const pt = route.getPointAtLength(routeLen * local);
          climber.setAttribute("cx", String(pt.x));
          climber.setAttribute("cy", String(pt.y));
        }
        const activeIdx = Math.min(steps.length - 1, Math.floor(local * steps.length));
        steps.forEach((s, i) => s.setAttribute("data-active", i === activeIdx ? "true" : "false"));
      }
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();

    // pointer spotlight
    const onMove = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      const card = target?.closest?.(".asc-spot") as HTMLElement | null;
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    if (finePointer) root.addEventListener("pointermove", onMove, { passive: true });

    // smooth in-page anchor scroll with sticky-nav offset
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href")!.slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const top = el.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
    };
    root.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (finePointer) root.removeEventListener("pointermove", onMove);
      root.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div className="asc" ref={rootRef}>
      <style>{ASC_CSS}</style>
      <div id="asc-progress" aria-hidden="true" />
      <div id="asc-grain" aria-hidden="true" />

      {/* signature altimeter rail — slim, lives in the left gutter (wide screens).
          The thin track fills and the marker climbs as you scroll toward the
          summit; the numeric altitude readout lives in the Method stage. */}
      <aside className="asc-altimeter" aria-hidden="true">
        <span className="asc-alt-cap asc-mono">The ascent</span>
        <div className="asc-alt-track">
          <span className="asc-alt-tick" style={{ bottom: "25%" }} />
          <span className="asc-alt-tick" style={{ bottom: "50%" }} />
          <span className="asc-alt-tick" style={{ bottom: "75%" }} />
          <i className="asc-alt-fill" id="ascAltFill" />
          <span className="asc-alt-marker" id="ascAltMarker" style={{ bottom: "0%" }} />
        </div>
      </aside>

      <Nav onCta={onCta} />
      <Hero onCta={onCta} />
      <Marquee />
      <Compare />
      <Method />
      <Stats />
      <Ledger />
      <ReportProof />
      <Statement />
      <Voices />
      <Faculty />
      <Week />
      <Programs onCta={onCta} />
      <Pricing onCta={onCta} />
      <FAQ onCta={onCta} />
      <Summit onCta={onCta} />
    </div>
  );
}

/* ================================================================== *
 * SCOPED CSS
 * ================================================================== */
const ASC_CSS = `
.asc{
  --asc-disp:var(--font-fraunces),Georgia,'Times New Roman',serif;
  --asc-body:var(--font-inter),ui-sans-serif,-apple-system,'Segoe UI',Roboto,sans-serif;
  --asc-mono:var(--font-plex-mono),ui-monospace,'SF Mono',Menlo,Consolas,monospace;

  --asc-cream:#FBF7EF; --asc-navy-deep:#122642;
  --asc-band:linear-gradient(158deg,#173257 0%,#0E2038 62%,#0B1930 100%);
  --asc-grad-gold:linear-gradient(120deg,#EFC97D,#D9AE57 55%,#B98935);
  --asc-grad-gold-text:linear-gradient(100deg,#B98935 0%,#A67526 18%,#E4C179 42%,#FCEFD6 50%,#E4C179 58%,#A67526 82%,#B98935 100%);

  /* light (dawn) */
  --asc-ground:#F5EFE3; --asc-ground-2:#FBF7EF; --asc-card:#FFFFFF;
  --asc-surface:rgba(18,33,56,0.035); --asc-surface-2:rgba(18,33,56,0.06);
  --asc-line:rgba(18,33,56,0.12); --asc-line-strong:rgba(18,33,56,0.22);
  --asc-ink:#22314C; --asc-ink-strong:#0F1C33; --asc-muted:#5C6E8C;
  --asc-gold:#B0812A; --asc-gold-bright:#C99A34; --asc-gold-deep:#8A6320; --asc-gold-soft:rgba(176,129,42,0.13);
  --asc-contour:rgba(140,100,30,0.16); --asc-live:#1F9E5A;
  --asc-aurora-a:rgba(201,151,31,0.16); --asc-aurora-b:rgba(58,110,190,0.10);
  --asc-shadow:0 24px 60px rgba(24,30,45,0.13); --asc-shadow-soft:0 14px 40px rgba(24,30,45,0.09);

  background:var(--asc-ground); color:var(--asc-ink);
  font-family:var(--asc-body); overflow-x:hidden;
  --asc-ease:cubic-bezier(.16,1,.3,1);
}
.dark .asc{
  --asc-ground:#080D18; --asc-ground-2:#0C1424; --asc-card:#111F35;
  --asc-surface:rgba(240,244,252,0.045); --asc-surface-2:rgba(240,244,252,0.075);
  --asc-line:rgba(226,236,250,0.12); --asc-line-strong:rgba(226,236,250,0.22);
  --asc-ink:#E8E0D0; --asc-ink-strong:#FBF7EF; --asc-muted:#93A6C4;
  --asc-gold:#D9AE57; --asc-gold-bright:#EFC97D; --asc-gold-deep:#B98935; --asc-gold-soft:rgba(217,174,87,0.15);
  --asc-contour:rgba(217,174,87,0.15); --asc-live:#5FD98F;
  --asc-aurora-a:rgba(217,174,87,0.20); --asc-aurora-b:rgba(58,110,190,0.16);
  --asc-shadow:0 24px 60px rgba(0,0,0,0.45); --asc-shadow-soft:0 14px 40px rgba(0,0,0,0.34);
}

.asc *{box-sizing:border-box}
.asc ::selection{background:var(--asc-gold);color:var(--asc-navy-deep)}
.asc h1,.asc h2,.asc h3{font-family:var(--asc-disp);font-weight:400;color:var(--asc-ink-strong);line-height:1.05;letter-spacing:-0.01em;text-wrap:balance;margin:0}
.asc p{margin:0}
.asc a{color:inherit;text-decoration:none}
.asc img{display:block;max-width:100%}
.asc .asc-mono{font-family:var(--asc-mono);font-variant-numeric:tabular-nums}
.asc-wrap{width:min(1200px,100% - 48px);margin-inline:auto}
.asc :focus-visible{outline:2px solid var(--asc-gold);outline-offset:3px;border-radius:6px}
.asc section[id]{scroll-margin-top:84px}

.asc-eyebrow{display:inline-flex;align-items:center;gap:10px;font-family:var(--asc-mono);font-weight:600;font-size:12px;letter-spacing:0.2em;text-transform:uppercase;color:var(--asc-gold)}
.asc-eyebrow::before{content:"";width:26px;height:1px;background:currentColor;opacity:0.7}
.asc-band-navy .asc-eyebrow,.asc-summit .asc-eyebrow{color:var(--asc-gold-bright)}

/* progress + grain */
.asc-progress-hidden{}
#asc-progress{position:fixed;top:0;left:0;height:2px;width:100%;transform:scaleX(0);transform-origin:0 50%;background:linear-gradient(90deg,var(--asc-gold-deep),var(--asc-gold-bright));z-index:120;will-change:transform}
#asc-grain{position:fixed;inset:0;z-index:8;pointer-events:none;opacity:0.04;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px}

/* buttons */
.asc-btn{font-family:var(--asc-body);font-weight:600;font-size:15px;cursor:pointer;border-radius:999px;padding:14px 26px;display:inline-flex;align-items:center;justify-content:center;gap:8px;white-space:nowrap;border:1.5px solid transparent;transition:transform .25s var(--asc-ease),box-shadow .25s ease,background-color .25s ease,color .25s ease,border-color .25s ease}
.asc-btn-sm{padding:11px 20px;font-size:14px}
.asc-btn-lg{padding:16px 30px;font-size:16px}
.asc-btn-block{width:100%}
.asc-btn:active{transform:translateY(0) scale(.99)}
.asc-btn-gold{background:var(--asc-grad-gold);color:#122036;font-weight:700;box-shadow:0 10px 26px rgba(201,151,31,0.30)}
.asc-btn-gold:hover{transform:translateY(-2px);box-shadow:0 16px 40px rgba(201,151,31,0.42)}
.asc-btn-outline{background:transparent;color:var(--asc-ink-strong);border-color:var(--asc-line-strong)}
.asc-btn-outline:hover{transform:translateY(-2px);border-color:var(--asc-gold);color:var(--asc-gold)}
.asc-band-navy .asc-btn-outline,.asc-summit .asc-btn-outline{color:var(--asc-cream);border-color:rgba(251,247,239,0.4)}
.asc-btn-outlineLight{background:transparent;color:var(--asc-cream);border-color:rgba(251,247,239,0.4)}
.asc-btn-outlineLight:hover{border-color:var(--asc-gold-bright);color:var(--asc-gold-bright)}

/* nav */
.asc-nav{position:sticky;top:0;z-index:100;background:color-mix(in srgb,var(--asc-ground) 80%,transparent);backdrop-filter:blur(16px) saturate(150%);-webkit-backdrop-filter:blur(16px) saturate(150%);border-bottom:1px solid var(--asc-line)}
.asc-nav-in{display:flex;align-items:center;justify-content:space-between;height:70px}
.asc-brand{display:flex;align-items:center;gap:11px;font-family:var(--asc-disp);font-size:22px;color:var(--asc-ink-strong)}
.asc-brand-badge{display:grid;place-items:center;width:38px;height:38px;border-radius:50%;background:var(--asc-grad-gold);flex:none}
.asc-brand-badge img{width:30px;height:30px;border-radius:50%}
.asc-nav-links{display:flex;gap:26px;align-items:center}
.asc-navlink{position:relative;font-size:14.5px;color:var(--asc-muted);transition:color .25s ease}
.asc-navlink::after{content:"";position:absolute;left:0;right:100%;bottom:-6px;height:1.5px;background:var(--asc-gold);transition:right .3s var(--asc-ease)}
.asc-navlink:hover{color:var(--asc-ink-strong)}
.asc-navlink:hover::after{right:0}
.asc-nav-actions{display:flex;align-items:center;gap:12px}

/* hero */
.asc-hero{position:relative;overflow:hidden;padding:clamp(52px,8vw,104px) 0 clamp(48px,7vw,96px)}
.asc-contour{position:absolute;inset:0;width:100%;height:100%;z-index:0}
.asc-aurora{position:absolute;border-radius:50%;filter:blur(60px);z-index:0;pointer-events:none;will-change:transform}
.asc-aurora-a{width:520px;height:520px;background:radial-gradient(circle,var(--asc-aurora-a),transparent 62%);top:-140px;right:-80px}
.asc-aurora-b{width:460px;height:460px;background:radial-gradient(circle,var(--asc-aurora-b),transparent 62%);bottom:-170px;left:-90px}
.asc-hero-grid{position:relative;z-index:2;display:grid;grid-template-columns:1.05fr 0.95fr;gap:56px;align-items:center}
.asc-hero-chips{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:26px}
.asc-chip{font-size:12.5px;font-weight:600;padding:7px 14px;border-radius:999px;border:1px solid var(--asc-line);color:var(--asc-muted);background:var(--asc-surface)}
.asc-chip-gold{background:var(--asc-grad-gold);border-color:transparent;color:var(--asc-navy-deep)}
.asc-hero h1{font-size:clamp(38px,5.4vw,68px);font-weight:400;letter-spacing:-0.02em}
.asc-hero h1 em{font-style:italic;color:var(--asc-gold)}
.asc-lede{margin:26px 0 0;max-width:36ch;font-size:clamp(16px,1.5vw,18px);color:var(--asc-muted);line-height:1.65}
.asc-hero-cta{margin-top:34px;display:flex;gap:12px;flex-wrap:wrap;align-items:center}
.asc-hero-rating{display:flex;align-items:center;gap:8px;margin-top:22px;font-size:13.5px;color:var(--asc-muted)}
.asc-hero-rating strong{color:var(--asc-ink-strong);font-weight:700}
.asc-stars{display:flex;gap:2px}
.asc-star{color:var(--asc-gold);fill:var(--asc-gold)}
.asc-hero-cities{display:flex;align-items:center;gap:14px;margin-top:20px;font-size:13.5px;color:var(--asc-muted)}
.asc-hero-cities strong{color:var(--asc-ink-strong);font-weight:700}
.asc-avatars{display:flex}
.asc-avatars img{width:38px;height:38px;border-radius:50%;object-fit:cover;border:2px solid var(--asc-ground);box-shadow:0 4px 12px rgba(26,54,93,0.18)}
.asc-avatars img+img{margin-left:-11px}

.asc-hero-visual{position:relative}
.asc-hero-frame{position:absolute;inset:0;border-radius:22px;border:2px solid var(--asc-gold);transform:translate(16px,16px);opacity:0.45;pointer-events:none}
.asc-hero-photo{position:relative;width:100%;height:480px;object-fit:cover;border-radius:22px;box-shadow:0 30px 70px rgba(26,54,93,0.28)}
.asc-live-badge{position:absolute;top:18px;left:18px;display:inline-flex;align-items:center;gap:8px;background:rgba(18,38,66,0.82);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);color:var(--asc-cream);border-radius:999px;padding:8px 15px;font-size:11.5px;font-weight:700;letter-spacing:0.1em}
.asc-live-dot{width:8px;height:8px;border-radius:50%;background:#4ADE80;flex:none}
.asc-doubt{position:absolute;left:-24px;bottom:-34px;width:min(332px,86%);border-radius:18px;padding:18px;box-shadow:0 28px 64px rgba(26,54,93,0.28)}
.asc-doubt-top{display:flex;justify-content:space-between;font-size:11.5px;color:var(--asc-muted);margin-bottom:12px}
.asc-doubt-title{font-weight:700;color:var(--asc-ink-strong)}
.asc-doubt-q{font-size:13.5px;line-height:1.5;background:var(--asc-surface-2);border-radius:12px 12px 12px 4px;padding:10px 12px;margin-bottom:8px;max-width:92%;color:var(--asc-ink-strong)}
.asc-doubt-a{font-size:13.5px;line-height:1.5;background:var(--asc-gold-soft);border-radius:12px 12px 4px 12px;padding:10px 12px;margin-left:auto;max-width:92%;color:var(--asc-ink-strong)}
.asc-doubt-resolved{display:flex;align-items:center;justify-content:flex-end;gap:6px;font-size:11.5px;color:var(--asc-live);font-weight:600;margin-top:10px}
.asc-dot-live{width:6px;height:6px;border-radius:50%;background:var(--asc-live)}

/* glass */
.asc-glass{background:var(--asc-card);border:1px solid var(--asc-line);backdrop-filter:blur(14px) saturate(150%);-webkit-backdrop-filter:blur(14px) saturate(150%)}
.dark .asc-glass{background:rgba(20,42,73,0.72)}

/* marquee */
.asc-marquee{border-top:1px solid var(--asc-line);border-bottom:1px solid var(--asc-line);background:var(--asc-ground-2);padding:15px 0;overflow:hidden}
.asc-mq-track{display:flex;width:max-content}
.asc-mq-row{display:flex;align-items:center;flex-shrink:0;animation:ascMq 42s linear infinite}
.asc-marquee:hover .asc-mq-row{animation-play-state:paused}
@keyframes ascMq{to{transform:translateX(-100%)}}
.asc-mq-item{display:inline-flex;align-items:center;gap:20px;padding:0 20px;font-family:var(--asc-disp);font-weight:500;font-size:14px;letter-spacing:0.06em;text-transform:uppercase;color:var(--asc-ink-strong);white-space:nowrap}
.asc-mq-star{color:var(--asc-gold);font-size:11px}

/* sections */
.asc-band{padding:clamp(64px,9vw,116px) 0;position:relative}
.asc-plain{padding:clamp(56px,8vw,96px) 0;position:relative}
.asc-band-navy{background:var(--asc-band);color:var(--asc-cream)}
.asc-band-navy h2,.asc-band-navy h3{color:var(--asc-cream)}
.asc-sec-head{max-width:56ch}
.asc-sec-head-center{max-width:640px;margin-inline:auto;text-align:center}
.asc-sec-head h2{font-size:clamp(30px,4.4vw,50px);margin-top:16px}
.asc-sec-head p{margin-top:18px;color:var(--asc-muted);font-size:clamp(16px,1.5vw,18px);max-width:56ch}
.asc-band-navy .asc-sec-head p{color:rgba(237,230,214,0.72)}
.asc-sec-head-split{max-width:none;display:flex;justify-content:space-between;align-items:flex-end;gap:24px;flex-wrap:wrap}
.asc-sec-aside{font-size:14px;color:rgba(237,230,214,0.72);max-width:300px}
.asc-center{text-align:center;margin-top:34px}

/* reveal */
.asc-reveal{opacity:0;transform:translateY(28px);transition:opacity .8s var(--asc-ease),transform .8s var(--asc-ease);transition-delay:var(--d,0s)}
.asc-reveal.in{opacity:1;transform:none}

/* rise (hero load) */
@keyframes ascRise{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
.asc-rise{animation:ascRise .9s var(--asc-ease) both;animation-delay:var(--d,0s)}

/* shimmer headline */
@keyframes ascShimmer{to{background-position:200% center}}
.asc-shimmer{background:var(--asc-grad-gold-text);background-size:200% auto;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent;font-style:italic;animation:ascShimmer 5.5s linear infinite}

/* pulse */
@keyframes ascPulse{0%{box-shadow:0 0 0 0 rgba(74,222,128,0.55)}70%{box-shadow:0 0 0 9px rgba(74,222,128,0)}100%{box-shadow:0 0 0 0 rgba(74,222,128,0)}}
.asc-pulse{animation:ascPulse 2.2s ease-out infinite}

/* spotlight */
.asc-spot{position:relative;isolation:isolate}
.asc-spot::before{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;z-index:-1;opacity:0;transition:opacity .4s ease;background:radial-gradient(240px circle at var(--mx,50%) var(--my,50%),var(--asc-gold-soft),transparent 62%)}
.asc-spot-dark::before{background:radial-gradient(260px circle at var(--mx,50%) var(--my,50%),rgba(217,174,87,0.20),transparent 62%)}
.asc-spot:hover::before{opacity:1}

/* tilt (hero visual) */
.asc-tilt{transition:transform .4s var(--asc-ease),box-shadow .4s var(--asc-ease)}
.asc-tilt:hover{transform:translateY(-4px)}

/* compare */
.asc-compare{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:48px;align-items:stretch}
.asc-col{border-radius:22px;padding:34px 32px 26px;border:1px solid var(--asc-line);background:var(--asc-surface)}
.asc-col-us{position:relative;overflow:hidden;background:var(--asc-band);border-color:rgba(217,174,87,0.45);color:var(--asc-cream);box-shadow:0 26px 60px rgba(26,54,93,0.26)}
.asc-col-head{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:20px}
.asc-col-head-l{display:flex;align-items:center;gap:10px}
.asc-col-dot{width:9px;height:9px;border-radius:50%}
.asc-col-dot-mute{background:var(--asc-muted);opacity:0.5}
.asc-col-label{font-family:var(--asc-disp);font-size:14px;font-weight:500;letter-spacing:0.1em;text-transform:uppercase}
.asc-col-label-mute{color:var(--asc-muted)}
.asc-col-label-gold{color:var(--asc-gold-bright)}
.asc-col-tag{font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--asc-navy-deep);background:var(--asc-grad-gold);border-radius:999px;padding:5px 12px}
.asc-col ul{list-style:none;margin:0;padding:0}
.asc-col li{display:flex;align-items:flex-start;gap:13px;padding:12px 0;font-size:15px;line-height:1.5;color:var(--asc-ink)}
.asc-col-us li{color:rgba(251,247,239,0.92)}
.asc-x,.asc-check{flex:none;display:grid;place-items:center;width:24px;height:24px;border-radius:50%;margin-top:1px}
.asc-x{background:var(--asc-surface-2);color:var(--asc-muted)}
.asc-check{background:var(--asc-grad-gold);color:var(--asc-navy-deep)}

/* climb / method */
.asc-climb{display:grid;grid-template-columns:0.9fr 1.1fr;gap:56px;margin-top:48px;align-items:start}
.asc-stage{position:sticky;top:100px;height:min(72vh,560px);border-radius:22px;overflow:hidden;border:1px solid rgba(251,247,239,0.14);background:linear-gradient(180deg,rgba(6,12,24,0.5),rgba(16,33,56,0.12));box-shadow:var(--asc-shadow-soft)}
.asc-stage svg{position:absolute;inset:0;width:100%;height:100%}
.asc-stage-contours{stroke:rgba(217,174,87,0.16)}
.asc-ridge{fill:none;stroke:rgba(237,230,214,0.18);stroke-width:2;stroke-linejoin:round}
.asc-stage-cap{position:absolute;left:20px;bottom:18px;font-family:var(--asc-mono);font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:rgba(237,230,214,0.7)}
.asc-stage-alt{position:absolute;right:20px;top:18px;text-align:right}
.asc-stage-metres{font-size:26px;color:#FBF7EF;font-weight:600}
.asc-stage-unit{color:rgba(237,230,214,0.6)}
.asc-stage-sub{font-family:var(--asc-mono);font-size:10.5px;letter-spacing:0.12em;text-transform:uppercase;color:var(--asc-gold-bright)}
.asc-steps{display:grid;gap:20px}
.asc-step{position:relative;border-radius:18px;padding:28px 30px;border:1px solid rgba(251,247,239,0.14);background:rgba(251,247,239,0.04);transition:border-color .4s ease,background-color .4s ease}
.asc-step[data-active="true"]{border-color:var(--asc-gold);background:linear-gradient(180deg,rgba(217,174,87,0.14),transparent),rgba(251,247,239,0.05)}
.asc-step-ic{position:absolute;top:26px;right:28px;color:var(--asc-gold-bright);opacity:0.9}
.asc-step-no{font-size:12px;letter-spacing:0.12em;color:var(--asc-gold-bright);font-weight:600}
.asc-step h3{font-size:23px;margin-top:10px;color:var(--asc-cream)}
.asc-step p{margin-top:12px;color:rgba(237,230,214,0.74);font-size:15px;line-height:1.6}

/* stats */
.asc-stats{display:grid;grid-template-columns:auto 1fr;gap:56px;align-items:center;margin-top:48px}
.asc-ring-wrap{display:flex;flex-direction:column;align-items:center;gap:16px}
.asc-ring{position:relative}
.asc-ring-num{position:absolute;inset:0;display:grid;place-items:center;font-size:40px;font-weight:600;color:var(--asc-cream)}
.asc-ring-cap{font-size:13.5px;line-height:1.5;color:rgba(237,230,214,0.72);text-align:center;max-width:190px}
.asc-stat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.asc-stat{border-radius:18px;padding:28px 24px;border:1px solid rgba(251,247,239,0.12);background:rgba(251,247,239,0.05)}
.asc-stat-fig{font-size:clamp(30px,3vw,40px);font-weight:600;color:var(--asc-gold-bright);letter-spacing:-0.01em;display:flex;align-items:baseline}
.asc-stat-affix{font-size:0.62em;margin-right:4px}
.asc-stat-cap{font-size:13.5px;line-height:1.5;color:rgba(237,230,214,0.72);margin-top:8px}

/* ledger */
.asc-ledger-head{display:flex;justify-content:space-between;align-items:flex-end;gap:24px;flex-wrap:wrap;padding-bottom:24px}
.asc-ledger-head h2{font-size:clamp(30px,4vw,46px);margin-top:14px}
.asc-ledger-meta{font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:var(--asc-muted);font-weight:600}
.asc-ledger-row{display:grid;grid-template-columns:190px 140px 1fr 64px;gap:24px;align-items:center;padding:24px 18px;margin:0 -18px;border-top:1px solid var(--asc-line);border-radius:14px;transition:background-color .3s ease}
.asc-ledger-row:hover{background:var(--asc-surface)}
.asc-ledger-rank{font-size:44px;font-weight:600;color:var(--asc-gold);letter-spacing:-0.02em}
.asc-ledger-exam{font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:var(--asc-muted);font-weight:600}
.asc-ledger-name{font-size:19px;color:var(--asc-ink-strong);font-weight:500}
.asc-ledger-name span{color:var(--asc-muted);font-size:16px;font-weight:400}
.asc-ledger-img{width:58px;height:58px;border-radius:50%;object-fit:cover;border:2px solid var(--asc-gold-soft);box-shadow:0 6px 16px rgba(26,54,93,0.14)}
.asc-ledger-foot{border-top:1px solid var(--asc-line);padding-top:20px;display:flex;justify-content:space-between;font-size:13.5px;color:var(--asc-muted);gap:24px;flex-wrap:wrap}

.asc-arrow-link{display:inline-flex;align-items:center;gap:7px;font-weight:600;color:var(--asc-ink-strong);transition:gap .25s var(--asc-ease),color .25s ease}
.asc-arrow-link:hover{gap:12px;color:var(--asc-gold)}
.asc-arrow-light{color:var(--asc-cream)}
.asc-arrow-light:hover{color:var(--asc-gold-bright)}

/* report */
.asc-report-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center}
.asc-report-card{position:relative;border-radius:20px;padding:28px 30px;box-shadow:var(--asc-shadow-soft)}
.asc-report-card-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:22px}
.asc-report-card-title{font-family:var(--asc-disp);font-weight:500;font-size:18px;color:var(--asc-ink-strong)}
.asc-report-week{font-size:12px;color:var(--asc-muted);background:var(--asc-surface-2);border-radius:999px;padding:5px 12px;font-weight:600}
.asc-report-bar{margin-bottom:16px}
.asc-report-bar-lab{display:flex;justify-content:space-between;font-size:13.5px;margin-bottom:6px;color:var(--asc-ink-strong)}
.asc-report-bar-lab span:first-child{font-weight:600}
.asc-report-bar-lab span:last-child{color:var(--asc-muted)}
.asc-report-track{height:8px;border-radius:999px;background:var(--asc-surface-2);overflow:hidden}
.asc-report-fill{display:block;height:100%;width:0;border-radius:999px;transition:width 1.3s var(--asc-ease) .2s}
.asc-report-card.in .asc-report-fill,.asc-reveal.in .asc-report-fill{width:var(--w)}
.asc-report-note{font-size:13px;line-height:1.55;color:var(--asc-muted);background:var(--asc-surface-2);border-left:3px solid var(--asc-gold);border-radius:10px;padding:12px 14px;margin-top:18px}
.asc-report-note strong{color:var(--asc-ink-strong)}
.asc-report-h{font-size:clamp(30px,4vw,46px);line-height:1.08;margin:16px 0 18px}
.asc-report-lede{font-size:17px;line-height:1.65;color:var(--asc-muted);max-width:460px;margin-bottom:30px}
.asc-report-stats{display:flex;flex-wrap:wrap;border-top:1px solid var(--asc-line)}
.asc-report-stat{padding:18px 28px 0 0}
.asc-report-stat+.asc-report-stat{padding-left:28px;border-left:1px solid var(--asc-line)}
.asc-report-stat-v{font-size:30px;font-weight:600;color:var(--asc-gold)}
.asc-report-stat-k{font-size:13px;color:var(--asc-muted);margin-top:4px}

/* statement */
.asc-statement{position:relative;overflow:hidden;min-height:clamp(560px,82vh,800px);display:flex;align-items:flex-end;color:var(--asc-cream);background:var(--asc-navy-deep)}
.asc-statement-photo{position:absolute;top:-6%;left:0;width:100%;height:112%;object-fit:cover;object-position:center 30%}
.asc-statement-scrim{position:absolute;inset:0;background:linear-gradient(to top,rgba(18,38,66,0.94) 0%,rgba(18,38,66,0.55) 40%,rgba(18,38,66,0.2) 72%,rgba(18,38,66,0.32) 100%)}
.asc-statement-in{position:relative;width:100%;padding-top:120px}
.asc-statement-h{font-size:clamp(46px,8vw,110px);line-height:0.98;letter-spacing:-0.025em;text-transform:uppercase;margin:0;color:var(--asc-cream);text-shadow:0 2px 28px rgba(18,38,66,0.45)}
.asc-statement-p{font-size:17px;line-height:1.65;color:rgba(251,247,239,0.88);max-width:470px;margin:24px 0 0}
.asc-statement .asc-arrow-link{margin-top:22px}
.asc-statement-caption{display:flex;justify-content:space-between;align-items:flex-end;gap:24px;flex-wrap:wrap;border-top:1px solid rgba(251,247,239,0.28);margin-top:52px;padding:24px 0 44px}
.asc-statement-caption-l{font-family:var(--asc-disp);font-size:13px;font-weight:500;letter-spacing:0.18em;text-transform:uppercase;color:rgba(251,247,239,0.78)}
.asc-statement-ratio{text-align:right}
.asc-statement-ratio-v{font-size:clamp(44px,5vw,66px);font-weight:600;line-height:1;letter-spacing:-0.02em;color:var(--asc-gold-bright)}
.asc-statement-ratio-k{font-size:12px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:rgba(251,247,239,0.72);margin-top:7px}

/* voices */
.asc-voices{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:44px}
.asc-voice{margin:0;border-radius:20px;padding:30px 28px 26px;border:1px solid rgba(251,247,239,0.14);background:rgba(251,247,239,0.05);display:flex;flex-direction:column}
.asc-voice-quote{font-family:var(--asc-disp);font-size:56px;line-height:0.7;color:var(--asc-gold-bright);opacity:0.55;margin-bottom:14px}
.asc-voice blockquote{margin:0;font-size:16px;line-height:1.62;color:rgba(251,247,239,0.94);flex-grow:1}
.asc-voice figcaption{display:flex;align-items:center;gap:12px;margin-top:22px;padding-top:20px;border-top:1px solid rgba(251,247,239,0.14)}
.asc-voice figcaption img{width:46px;height:46px;border-radius:50%;object-fit:cover;border:2px solid var(--asc-gold-soft)}
.asc-voice-name{font-family:var(--asc-disp);font-size:15.5px;font-weight:500;color:var(--asc-cream)}
.asc-voice-role{font-size:12.5px;color:var(--asc-gold-bright);font-weight:600;margin-top:2px}

/* faculty */
.asc-faculty-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:44px}
.asc-faculty-card{position:relative;border-radius:20px;padding:30px 26px 28px;border:1px solid var(--asc-line);background:var(--asc-surface);transition:transform .4s var(--asc-ease),border-color .4s ease,box-shadow .4s ease}
.asc-faculty-card:hover{transform:translateY(-5px);border-color:var(--asc-gold);box-shadow:var(--asc-shadow-soft)}
.asc-faculty-ic{display:grid;place-items:center;width:52px;height:52px;border-radius:16px;background:var(--asc-grad-gold);margin-bottom:20px;color:var(--asc-navy-deep);box-shadow:0 10px 24px rgba(185,137,53,0.28)}
.asc-faculty-card h3{font-size:20px;margin:0 0 6px;color:var(--asc-ink-strong)}
.asc-faculty-cred{font-size:12px;font-weight:600;letter-spacing:0.02em;color:var(--asc-gold-deep);background:var(--asc-gold-soft);display:inline-block;border-radius:999px;padding:4px 11px;margin-bottom:14px}
.asc-faculty-card p{font-size:14.5px;line-height:1.6;color:var(--asc-muted)}

/* week */
.asc-week-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:44px}
.asc-week-card{border-radius:18px;padding:26px 24px;border:1px solid rgba(251,247,239,0.14);background:rgba(251,247,239,0.05);transition:transform .35s var(--asc-ease),border-color .35s ease,background-color .35s ease,box-shadow .35s ease}
.asc-week-card:hover{transform:translateY(-6px);border-color:rgba(227,190,85,0.55);background:rgba(251,247,239,0.09);box-shadow:0 20px 44px rgba(0,0,0,0.28)}
.asc-week-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px}
.asc-week-day{font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:var(--asc-gold-bright)}
.asc-week-no{font-size:13px;font-weight:600;color:rgba(251,247,239,0.28)}
.asc-week-t{font-family:var(--asc-disp);font-size:20px;font-weight:500;margin-bottom:8px;color:var(--asc-cream)}
.asc-week-s{font-size:13.5px;line-height:1.6;color:rgba(237,230,214,0.72)}

/* programs */
.asc-programs-card{position:relative;overflow:hidden;background:var(--asc-ground-2);border-radius:26px;border:1px solid var(--asc-line);padding:52px 48px 44px}
.asc-programs-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:0;margin-top:30px}
.asc-program{position:relative;padding:0 36px}
.asc-program:first-child{padding-left:0}
.asc-program+.asc-program{border-left:1px solid var(--asc-line)}
.asc-program-no{position:absolute;top:-6px;right:0;font-size:13px;font-weight:600;color:var(--asc-line-strong)}
.asc-program-ic{display:grid;place-items:center;width:48px;height:48px;border-radius:14px;background:var(--asc-grad-gold);color:var(--asc-navy-deep);box-shadow:0 10px 24px rgba(185,137,53,0.26)}
.asc-program h3{font-size:24px;margin:18px 0 12px;color:var(--asc-ink-strong)}
.asc-program p{font-size:15px;line-height:1.6;color:var(--asc-muted);margin-bottom:18px}
.asc-program-best{display:inline-block;font-size:11.5px;letter-spacing:0.08em;text-transform:uppercase;color:var(--asc-gold-deep);font-weight:600;background:var(--asc-gold-soft);border-radius:999px;padding:6px 13px}
.asc-programs-foot{border-top:1px solid var(--asc-line);margin-top:38px;padding-top:28px;display:flex;justify-content:space-between;align-items:center;gap:24px;flex-wrap:wrap}
.asc-programs-foot span{font-size:14.5px;color:var(--asc-muted);max-width:620px;line-height:1.6}

/* pricing */
.asc-pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:48px;align-items:stretch}
.asc-tier{position:relative;overflow:hidden;display:flex;flex-direction:column;border-radius:22px;padding:32px 28px 28px;border:1px solid var(--asc-line);background:var(--asc-surface)}
.asc-tier-hi{background:var(--asc-band);border-color:rgba(217,174,87,0.45);color:var(--asc-cream);box-shadow:0 26px 60px rgba(26,54,93,0.26)}
.asc-tier-badge{display:inline-block;align-self:flex-start;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--asc-navy-deep);background:var(--asc-grad-gold);border-radius:999px;padding:5px 12px;margin-bottom:14px}
.asc-tier h3{font-size:23px;margin:0 0 6px;color:var(--asc-ink-strong)}
.asc-tier-hi h3{color:var(--asc-cream)}
.asc-tier-target{font-size:13.5px;color:var(--asc-muted);margin-bottom:18px}
.asc-tier-hi .asc-tier-target{color:rgba(251,247,239,0.7)}
.asc-tier-price{display:flex;align-items:baseline;gap:8px;flex-wrap:wrap;margin-bottom:4px}
.asc-tier-now{font-size:30px;font-weight:600;color:var(--asc-gold)}
.asc-tier-hi .asc-tier-now{color:var(--asc-gold-bright)}
.asc-tier-was{font-size:14px;color:var(--asc-muted);text-decoration:line-through}
.asc-tier-period{font-size:13px;color:var(--asc-muted);margin-bottom:8px}
.asc-tier-hi .asc-tier-period{color:rgba(251,247,239,0.7)}
.asc-tier-discount{display:inline-block;font-size:11.5px;font-weight:600;color:var(--asc-gold-deep);background:var(--asc-gold-soft);border-radius:999px;padding:3px 10px;margin-bottom:22px}
.asc-tier-hi .asc-tier-discount{color:var(--asc-gold-bright);background:rgba(217,174,87,0.18)}
.asc-tier ul{list-style:none;margin:0 0 26px;padding:0;flex-grow:1}
.asc-tier li{display:flex;align-items:flex-start;gap:9px;padding:6px 0;font-size:14px;line-height:1.5;color:var(--asc-muted)}
.asc-tier-hi li{color:rgba(251,247,239,0.92)}
.asc-tier li svg{flex:none;margin-top:3px;color:var(--asc-gold)}
.asc-tier-hi li svg{color:var(--asc-gold-bright)}

/* faq */
.asc-faq-grid{display:grid;grid-template-columns:0.82fr 1.18fr;gap:56px;align-items:start}
.asc-faq-aside{position:sticky;top:96px}
.asc-faq-aside h2{font-size:clamp(30px,3.4vw,42px);line-height:1.08;margin:16px 0}
.asc-faq-intro{font-size:16px;line-height:1.65;color:var(--asc-muted);margin-bottom:26px;max-width:360px}
.asc-faq-cta{position:relative;overflow:hidden;background:var(--asc-band);color:var(--asc-cream);border-radius:20px;padding:26px;box-shadow:0 24px 56px rgba(26,54,93,0.24)}
.asc-faq-cta-title{font-family:var(--asc-disp);font-size:20px;font-weight:500;margin-bottom:8px}
.asc-faq-cta p{font-size:14px;line-height:1.6;color:rgba(237,230,214,0.72);margin-bottom:20px}
.asc-faq-cta .asc-btn{margin-bottom:12px}
.asc-faq-chips{display:grid;gap:9px}
.asc-faq-chip{display:flex;align-items:center;gap:9px;padding:10px 14px;border-radius:12px;color:rgba(251,247,239,0.9);font-size:13px;font-weight:600;border:1px solid rgba(251,247,239,0.14);background:rgba(251,247,239,0.06);transition:border-color .3s ease,transform .3s ease}
.asc-faq-chip:hover{border-color:var(--asc-gold-bright);transform:translateY(-2px)}
.asc-faq-chip-ic{display:grid;place-items:center;width:28px;height:28px;border-radius:50%;background:rgba(217,174,87,0.14);color:var(--asc-gold-bright);flex:none}
.asc-faq-list{display:flex;flex-direction:column;gap:12px}
.asc-faq-item{border:1px solid var(--asc-line);border-radius:16px;background:var(--asc-surface);transition:border-color .3s ease,box-shadow .3s ease,background-color .3s ease}
.asc-faq-open{background:var(--asc-card);border-color:rgba(217,174,87,0.5);box-shadow:0 16px 40px rgba(26,54,93,0.10)}
.asc-faq-q{width:100%;display:flex;justify-content:space-between;align-items:center;gap:16px;padding:18px 22px;background:none;border:none;cursor:pointer;text-align:left}
.asc-faq-q-text{display:flex;flex-direction:column;gap:7px;flex:1}
.asc-faq-tag{align-self:flex-start;font-size:10px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:var(--asc-gold-deep);background:var(--asc-gold-soft);border-radius:999px;padding:3px 9px}
.asc-faq-question{font-size:15.5px;font-weight:600;color:var(--asc-ink-strong);line-height:1.4}
.asc-faq-plus{flex:none;width:30px;height:30px;border-radius:50%;border:1px solid var(--asc-line);display:grid;place-items:center;color:var(--asc-muted);font-size:18px;line-height:1;transition:transform .3s var(--asc-ease),color .3s ease,border-color .3s ease}
.asc-faq-open .asc-faq-plus{transform:rotate(45deg);color:var(--asc-gold-deep);border-color:var(--asc-gold)}
.asc-faq-body{display:grid;grid-template-rows:0fr;transition:grid-template-rows .4s var(--asc-ease)}
.asc-faq-body-open{grid-template-rows:1fr}
.asc-faq-body>div{overflow:hidden}
.asc-faq-body p{font-size:14.5px;line-height:1.75;color:var(--asc-muted);padding:0 22px 20px}

/* summit */
.asc-summit{position:relative;overflow:hidden;text-align:center;padding:clamp(80px,12vw,150px) 0;background:linear-gradient(180deg,var(--asc-ground),#f6e4bd 60%,#eccf90)}
.dark .asc-summit{background:linear-gradient(180deg,var(--asc-ground),#1a1206 60%,#2a1c08)}
.asc-summit-sun{position:absolute;left:50%;bottom:-260px;width:520px;height:520px;transform:translateX(-50%);border-radius:50%;background:radial-gradient(circle,rgba(239,201,125,0.5),transparent 60%);filter:blur(20px);z-index:0}
.asc-summit-in{position:relative;z-index:2}
.asc-summit h2{font-size:clamp(34px,6vw,64px);margin-top:18px;color:#3a2a08}
.dark .asc-summit h2{color:#FBF7EF}
.asc-summit p{margin:22px auto 0;max-width:48ch;font-size:clamp(16px,1.6vw,19px);color:#5a4416}
.dark .asc-summit p{color:rgba(251,247,239,0.78)}
.asc-summit-cta{margin-top:38px;display:flex;justify-content:center}
.asc-summit-chips{margin-top:40px;display:flex;gap:14px;justify-content:center;flex-wrap:wrap}
.asc-summit-chip{display:inline-flex;align-items:center;gap:10px;padding:12px 18px;border-radius:14px;border:1px solid rgba(58,42,8,0.2);background:rgba(58,42,8,0.05);color:#3a2a08;font-size:14px;font-family:var(--asc-mono);transition:transform .3s ease,border-color .3s ease}
.dark .asc-summit-chip{border-color:rgba(251,247,239,0.22);background:rgba(251,247,239,0.06);color:#FBF7EF}
.asc-summit-chip:hover{transform:translateY(-2px);border-color:var(--asc-gold)}
.asc-summit-chip-ic{color:var(--asc-gold-deep);display:grid;place-items:center}
.dark .asc-summit-chip-ic{color:var(--asc-gold-bright)}

/* altimeter rail — slim vertical instrument in the left gutter */
.asc-altimeter{position:fixed;left:22px;top:50%;transform:translateY(-50%);z-index:90;display:flex;gap:9px;align-items:center;pointer-events:none;user-select:none}
.asc-alt-cap{writing-mode:vertical-rl;transform:rotate(180deg);font-size:10px;letter-spacing:0.24em;text-transform:uppercase;color:var(--asc-muted);white-space:nowrap}
.asc-alt-track{position:relative;width:3px;height:min(58vh,460px);background:var(--asc-line);border-radius:3px}
.asc-alt-tick{position:absolute;left:-3px;width:9px;height:1px;background:var(--asc-line-strong)}
.asc-alt-fill{position:absolute;left:0;bottom:0;width:100%;height:0%;background:linear-gradient(180deg,var(--asc-gold-bright),var(--asc-gold-deep));border-radius:3px}
.asc-alt-marker{position:absolute;left:50%;bottom:0;width:11px;height:11px;border-radius:50%;background:var(--asc-gold-bright);transform:translate(-50%,50%);box-shadow:0 0 0 4px var(--asc-gold-soft),0 0 14px rgba(217,174,87,0.55)}
@media (max-width:1360px){.asc-altimeter{display:none}}

/* responsive */
@media (max-width:960px){
  .asc-hero-grid{grid-template-columns:1fr;gap:44px}
  .asc-lede{max-width:54ch}
  .asc-climb{grid-template-columns:1fr;gap:26px}
  .asc-stage{position:relative;top:0;height:300px}
  .asc-stats{grid-template-columns:1fr;gap:32px;justify-items:center}
  .asc-report-grid{grid-template-columns:1fr;gap:40px}
  .asc-faq-grid{grid-template-columns:1fr;gap:32px}
  .asc-faq-aside{position:static}
}
@media (max-width:820px){
  .asc-nav-links{display:none}
  .asc-compare{grid-template-columns:1fr}
  .asc-voices,.asc-faculty-grid,.asc-week-grid,.asc-pricing-grid,.asc-programs-grid{grid-template-columns:1fr}
  .asc-stat-grid{grid-template-columns:1fr}
  .asc-program{padding:0 0 24px}
  .asc-program+.asc-program{border-left:none;border-top:1px solid var(--asc-line);padding-top:24px}
  .asc-ledger-row{grid-template-columns:auto 1fr auto;gap:10px 16px}
  .asc-ledger-exam{grid-column:2;grid-row:2}
  .asc-programs-card{padding:36px 26px}
}
@media (max-width:560px){
  .asc-hero-photo{height:360px}
  .asc-ledger-row{grid-template-columns:1fr;text-align:left}
  .asc-ledger-img{display:none}
}

/* reduced motion */
@media (prefers-reduced-motion:reduce){
  .asc *,.asc *::before,.asc *::after{animation-duration:.001ms !important;animation-iteration-count:1 !important;transition-duration:.001ms !important}
  .asc-reveal{opacity:1 !important;transform:none !important}
  .asc-mq-row{animation:none !important}
  .asc-par{transform:none !important}
}
`;
