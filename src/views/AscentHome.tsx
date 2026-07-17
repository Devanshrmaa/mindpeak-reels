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
      {/* parallax wrapper gets the inline transform; the inner span keeps the
          drift animation — the two compose instead of overriding each other */}
      <span className="asc-par asc-aurora-wrap asc-aurora-pos-a" data-depth="0.35" aria-hidden="true">
        <span className="asc-aurora asc-aurora-a" />
      </span>
      <span className="asc-par asc-aurora-wrap asc-aurora-pos-b" data-depth="0.2" aria-hidden="true">
        <span className="asc-aurora asc-aurora-b" />
      </span>
      <div className="asc-wrap asc-hero-grid">
        <div className="asc-hero-copy">
          <div className="asc-hero-chips asc-rise" style={{ "--d": "0s" } as CSSVars}>
            <span className="asc-chip asc-chip-gold">500+ students mentored</span>
            <span className="asc-chip">95% success rate</span>
            <span className="asc-chip">IIT · NIT · AIIMS mentors</span>
          </div>
          {/* word-by-word cinematic reveal; full sentence stays intact in the DOM */}
          <h1>
            {"The mentor who knows your name, your weak chapters, and your"
              .split(" ")
              .map((w, i) => (
                <span className="asc-w" key={i} style={{ "--d": `${0.05 + i * 0.055}s` } as CSSVars}>
                  {w}
                  {" "}
                </span>
              ))}
            <em className="asc-shimmer asc-w" style={{ "--d": ".72s" } as CSSVars}>
              rank goal.
            </em>
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
        <div className="asc-hero-visual asc-rise asc-tilt3d" data-tilt="6" style={{ "--d": ".2s" } as CSSVars}>
          <span className="asc-hero-frame" aria-hidden="true" />
          <img
            className="asc-hero-photo asc-photo-in"
            src="/images/mentoring-session-2.jpg"
            alt="A MindPeak mentor in a live one-on-one class with a student"
            width={560}
            height={480}
          />
          <span className="asc-live-badge">
            <span className="asc-live-dot" />
            LIVE 1-ON-1 CLASS
          </span>
          <div className="asc-doubt asc-glass asc-card-glow asc-pop">
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
          <div className="asc-col asc-col-them asc-reveal asc-spot asc-tilt3d" data-tilt="3">
            <div className="asc-col-head">
              <span className="asc-col-dot asc-col-dot-mute" aria-hidden="true" />
              <span className="asc-col-label asc-col-label-mute">Traditional batch coaching</span>
            </div>
            <ul>
              {batch.map((t, i) => (
                <li
                  key={i}
                  className="asc-child"
                  style={{ ...(i ? { borderTop: "1px solid var(--asc-line)" } : {}), "--cd": `${i * 0.05}s` } as CSSVars}
                >
                  <span className="asc-x" aria-hidden="true">
                    <X size={13} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="asc-col asc-col-us asc-reveal asc-spot asc-spot-dark asc-card-glow asc-tilt3d" data-tilt="3">
            <div className="asc-col-head">
              <div className="asc-col-head-l">
                <span className="asc-col-dot asc-dot-live asc-pulse" aria-hidden="true" />
                <span className="asc-col-label asc-col-label-gold">The MindPeak way</span>
              </div>
              <span className="asc-col-tag">Why families switch</span>
            </div>
            <ul>
              {peak.map((t, i) => (
                <li
                  key={i}
                  className="asc-child"
                  style={{ ...(i ? { borderTop: "1px solid rgba(251,247,239,0.14)" } : {}), "--cd": `${i * 0.05}s` } as CSSVars}
                >
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
            {/* summit glow — brightens as the route completes (JS drives --sg) */}
            <span className="asc-stage-glow" aria-hidden="true" />
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
    { n: 42, exam: "JEE Advanced", name: "Aarav Sharma", note: "IIT Bombay, Computer Science", img: "/images/aarav-sharma.jpg" },
    { n: 89, exam: "JEE Mains", name: "Rohan Gupta", note: "99.97 percentile, dropper year", img: "/images/rohan-gupta.jpg" },
    { n: 156, exam: "NEET UG", name: "Priya Patel", note: "AIIMS Delhi, MBBS", img: "/images/priya-patel.jpg" },
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
          <div className="asc-ledger-row asc-reveal" style={{ "--d": `${i * 0.08}s` } as CSSVars} key={i}>
            <div className="asc-ledger-rank asc-mono">
              AIR <span data-count={r.n}>0</span>
            </div>
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
          <div className="asc-report-card asc-glass asc-spot asc-card-glow asc-tilt3d" data-tilt="3">
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
        data-kenburns
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
        {/* real testimonials only — duplicated once (aria-hidden) so the
            marquee track loops seamlessly, same technique as the stats
            marquee above. Card content itself is never invented. */}
        <div className="asc-voice-marquee asc-reveal">
          <div className="asc-voice-track">
            {[...voices, ...voices].map((v, i) => (
              <figure
                className="asc-voice asc-spot asc-spot-dark"
                aria-hidden={i >= voices.length || undefined}
                key={i}
              >
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
              <div className="asc-faculty-card asc-reveal asc-spot asc-tilt3d" data-tilt="4" style={{ "--d": `${i * 0.08}s` } as CSSVars} key={f.slug}>
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
                className={`asc-tier asc-reveal asc-spot asc-tilt3d${tier.badge ? " asc-tier-has-badge" : ""}${hi ? " asc-tier-hi asc-spot-dark asc-card-glow" : ""}`}
                data-tilt="3"
                style={{ "--d": `${i * 0.09}s` } as CSSVars}
                key={tier.name}
              >
                {tier.badge ? <span className="asc-tier-badge asc-tier-badge-float">{tier.badge}</span> : null}
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
          <div className="asc-faq-cta asc-spot asc-spot-dark asc-card-glow">
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
      {/* embers drifting up through the dawn glow */}
      <span className="asc-embers" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, i) => (
          <i
            key={i}
            style={{ "--ex": `${8 + i * 11.5}%`, "--edel": `${(i * 1.7) % 6}s`, "--edur": `${6 + (i % 4) * 1.8}s` } as CSSVars}
          />
        ))}
      </span>
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
      /* no animation — jump every counter and the ring straight to final */
      root.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
        const target = parseFloat(el.getAttribute("data-count") || "0");
        el.textContent = Math.round(target).toLocaleString("en-IN") + (el.getAttribute("data-suffix") || "");
      });
      const ring = root.querySelector<SVGCircleElement>("#ascRing");
      if (ring) ring.style.strokeDashoffset = String(parseFloat(ring.getAttribute("data-circ") || "0") * 0.05);
    } else {
      /* hidden reveal states only apply under .asc-js, so no-JS visitors
         (and crawlers) always get fully visible content */
      root.classList.add("asc-js");
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

  /* hero sky canvas — aurora ribbons (simplex-noise, ported from 21st.dev
     "Aurora voice Hero") + twinkling stars + drifting contour lines.
     The rAF loop pauses whenever the hero scrolls out of view. */
  useEffect(() => {
    const canvas = document.getElementById("ascContour") as HTMLCanvasElement | null;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const lines = 7;
    let W = 0;
    let H = 0;
    let phase = 0;
    let raf = 0;
    let running = true;
    const mouse = { x: -9999, active: false };

    /* compact 2D simplex noise (self-contained, from the dev21 component) */
    const simplex = (() => {
      const F2 = 0.5 * (Math.sqrt(3) - 1);
      const G2 = (3 - Math.sqrt(3)) / 6;
      const p = new Uint8Array(256);
      for (let i = 0; i < 256; i++) p[i] = i;
      for (let i = 255; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [p[i], p[j]] = [p[j], p[i]];
      }
      const perm = new Uint8Array(512);
      const perm12 = new Uint8Array(512);
      const grad3 = new Float32Array([1, 1, -1, 1, 1, -1, -1, -1, 1, 0, -1, 0, 1, 0, -1, 0, 0, 1, 0, -1, 0, 1, 0, -1]);
      for (let i = 0; i < 512; i++) {
        perm[i] = p[i & 255];
        perm12[i] = perm[i] % 12;
      }
      return (xin: number, yin: number) => {
        let n0 = 0;
        let n1 = 0;
        let n2 = 0;
        const s = (xin + yin) * F2;
        const i = Math.floor(xin + s);
        const j = Math.floor(yin + s);
        const t = (i + j) * G2;
        const x0 = xin - (i - t);
        const y0 = yin - (j - t);
        const i1 = x0 > y0 ? 1 : 0;
        const j1 = x0 > y0 ? 0 : 1;
        const x1 = x0 - i1 + G2;
        const y1 = y0 - j1 + G2;
        const x2 = x0 - 1 + 2 * G2;
        const y2 = y0 - 1 + 2 * G2;
        const ii = i & 255;
        const jj = j & 255;
        let t0 = 0.5 - x0 * x0 - y0 * y0;
        if (t0 >= 0) {
          const gi = perm12[ii + perm[jj]] % 12;
          t0 *= t0;
          n0 = t0 * t0 * (grad3[(gi * 2) % 24] * x0 + grad3[(gi * 2 + 1) % 24] * y0);
        }
        let t1 = 0.5 - x1 * x1 - y1 * y1;
        if (t1 >= 0) {
          const gi = perm12[ii + i1 + perm[jj + j1]] % 12;
          t1 *= t1;
          n1 = t1 * t1 * (grad3[(gi * 2) % 24] * x1 + grad3[(gi * 2 + 1) % 24] * y1);
        }
        let t2 = 0.5 - x2 * x2 - y2 * y2;
        if (t2 >= 0) {
          const gi = perm12[ii + 1 + perm[jj + 1]] % 12;
          t2 *= t2;
          n2 = t2 * t2 * (grad3[(gi * 2) % 24] * x2 + grad3[(gi * 2 + 1) % 24] * y2);
        }
        return 70 * (n0 + n1 + n2);
      };
    })();

    /* aurora ribbons: baseline height fraction, amplitude, colour, drift speed */
    const ribbons = [
      { base: 0.16, amp: 34, color: "240,200,120", sp: 1.0 },
      { base: 0.26, amp: 46, color: "87,196,229", sp: 0.7 },
      { base: 0.36, amp: 40, color: "240,200,120", sp: 1.25 },
      { base: 0.22, amp: 28, color: "220,233,251", sp: 0.55 },
    ];

    let stars: { x: number; y: number; r: number; ph: number; sp: number; gold: boolean }[] = [];
    const seedStars = () => {
      const count = Math.round(Math.min(140, W / 11));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H * 0.82,
        r: 0.5 + Math.random() * 1.1,
        ph: Math.random() * Math.PI * 2,
        sp: 0.6 + Math.random() * 1.6,
        gold: Math.random() < 0.18,
      }));
    };
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
      seedStars();
    };

    const drawRibbon = (r: (typeof ribbons)[number], idx: number) => {
      const baseY = H * r.base;
      const grad = ctx.createLinearGradient(0, 0, W, 0);
      grad.addColorStop(0, `rgba(${r.color},0)`);
      grad.addColorStop(0.5, `rgba(${r.color},0.55)`);
      grad.addColorStop(1, `rgba(${r.color},0)`);
      /* two passes: a wide faint pass fakes glow, a thin bright pass is the core */
      for (const [lw, alpha] of [
        [9, 0.10],
        [2, 0.5],
      ] as const) {
        ctx.beginPath();
        ctx.strokeStyle = grad;
        ctx.lineWidth = lw;
        ctx.globalAlpha = alpha;
        for (let x = -8; x <= W + 8; x += 6) {
          /* cursor-driven intensity (dev21 pattern): ribbons swell near the pointer */
          const m = mouse.active ? 1 + (1 - Math.min(1, Math.abs(x - mouse.x) / 380)) * 0.55 : 1;
          const noise = simplex(x * 0.0022 * m, idx * 917 + phase * r.sp);
          const pulse = Math.sin(phase * 0.5 + idx * 917) * 0.1 + 0.9;
          const y = baseY + noise * r.amp * pulse * m;
          if (x === -8) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    };

    const draw = () => {
      const stroke = getComputedStyle(document.documentElement).getPropertyValue("--asc-contour").trim() || "rgba(217,174,87,0.15)";
      ctx.clearRect(0, 0, W, H);
      if (document.documentElement.classList.contains("dark")) {
        for (const s of stars) {
          const tw = 0.22 + 0.5 * Math.abs(Math.sin(phase * 2.2 * s.sp + s.ph));
          ctx.globalAlpha = tw;
          ctx.fillStyle = s.gold ? "#F0C878" : "#DCE9FB";
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = 1;
        ribbons.forEach(drawRibbon);
      }
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

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.active = e.clientY >= rect.top && e.clientY <= rect.bottom;
    };
    if (finePointer && !reduce) window.addEventListener("pointermove", onMove, { passive: true });

    /* pause the loop while the hero is off screen */
    let vio: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      vio = new IntersectionObserver((entries) => {
        running = entries[0]?.isIntersecting ?? true;
      });
      vio.observe(canvas);
    }

    resize();
    window.addEventListener("resize", resize);
    if (reduce) {
      draw();
    } else {
      const loop = () => {
        if (running) {
          phase += 0.0045;
          draw();
        }
        raf = requestAnimationFrame(loop);
      };
      loop();
    }
    return () => {
      window.removeEventListener("resize", resize);
      if (finePointer && !reduce) window.removeEventListener("pointermove", onMove);
      if (vio) vio.disconnect();
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
    const cleanupFns: Array<() => void> = [];

    const bar = document.getElementById("asc-progress");
    const altFill = document.getElementById("ascAltFill");
    const altMarker = document.getElementById("ascAltMarker");
    const heroSec = document.getElementById("top");
    const nav = root.querySelector<HTMLElement>(".asc-nav");
    const route = document.getElementById("ascRoute") as unknown as SVGPathElement | null;
    const climber = document.getElementById("ascClimber");
    const flag = document.getElementById("ascFlag");
    const stage = document.getElementById("ascStage");
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

      /* glass nav strengthens once the page starts moving */
      if (nav) nav.classList.toggle("asc-scrolled", doc.scrollTop > 40);

      /* hero exit choreography — copy rises slower, photo sinks + shrinks,
         everything gently fades as the "camera" pans up the mountain */
      if (heroSec && motionOk) {
        const hr = heroSec.getBoundingClientRect();
        const hx = Math.min(Math.max(-hr.top / (hr.height * 0.85 || 1), 0), 1);
        heroSec.style.setProperty("--hx", hx.toFixed(3));
      }

      if (motionOk) {
        const vh = window.innerHeight;
        for (const el of parLayers) {
          const host = (el.closest("section") as HTMLElement | null) ?? el.parentElement;
          if (!host) continue;
          const r = host.getBoundingClientRect();
          if (r.bottom < -200 || r.top > vh + 200) continue;
          const prog = (r.top + r.height / 2 - vh / 2) / vh;
          const depth = parseFloat(el.dataset.depth || "0.2");
          /* Ken Burns: photos flagged data-kenburns slowly zoom while parallaxing */
          const kb = "kenburns" in el.dataset ? ` scale(${(1.05 + prog * 0.045).toFixed(3)})` : "";
          el.style.transform = `translate3d(0, ${(prog * depth * -140).toFixed(1)}px, 0)${kb}`;
        }
      }

      if (route && methodSec && steps.length) {
        const r = methodSec.getBoundingClientRect();
        const vh = window.innerHeight;
        const segTotal = r.height - vh * 0.5;
        const local = segTotal > 0 ? Math.min(Math.max((vh * 0.5 - r.top) / segTotal, 0), 1) : 0;
        route.style.strokeDashoffset = String(routeLen * (1 - local));
        if (flag) {
          flag.setAttribute("opacity", local > 0.9 ? "1" : "0");
          flag.classList.toggle("asc-flag-in", local > 0.9);
        }
        if (stage) stage.style.setProperty("--sg", local.toFixed(3));
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

    // pointer layer: spotlight glow, 3D card tilt, magnetic CTAs (fine pointers)
    const clamp = (v: number, m: number) => Math.max(-m, Math.min(m, v));
    const onMove = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      const card = target?.closest?.(".asc-spot") as HTMLElement | null;
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - r.left}px`);
        card.style.setProperty("--my", `${e.clientY - r.top}px`);
      }
      if (!motionOk) return;
      const tilt = target?.closest?.("[data-tilt]") as HTMLElement | null;
      if (tilt) {
        const r = tilt.getBoundingClientRect();
        const max = parseFloat(tilt.dataset.tilt || "4");
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        tilt.style.setProperty("--ry", `${(px * max).toFixed(2)}deg`);
        tilt.style.setProperty("--rx", `${(-py * max).toFixed(2)}deg`);
      }
      const btn = target?.closest?.(".asc-btn") as HTMLElement | null;
      if (btn) {
        const r = btn.getBoundingClientRect();
        btn.style.setProperty("--magx", `${clamp((e.clientX - (r.left + r.width / 2)) * 0.14, 5).toFixed(1)}px`);
        btn.style.setProperty("--magy", `${clamp((e.clientY - (r.top + r.height / 2)) * 0.2, 4).toFixed(1)}px`);
      }
    };
    const onOut = (e: PointerEvent) => {
      const from = e.target as HTMLElement | null;
      const to = e.relatedTarget as HTMLElement | null;
      const tilt = from?.closest?.("[data-tilt]") as HTMLElement | null;
      if (tilt && !(to && tilt.contains(to))) {
        tilt.style.setProperty("--rx", "0deg");
        tilt.style.setProperty("--ry", "0deg");
      }
      const btn = from?.closest?.(".asc-btn") as HTMLElement | null;
      if (btn && !(to && btn.contains(to))) {
        btn.style.setProperty("--magx", "0px");
        btn.style.setProperty("--magy", "0px");
      }
    };
    if (finePointer) {
      root.addEventListener("pointermove", onMove, { passive: true });
      root.addEventListener("pointerout", onOut, { passive: true });
    }

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

    /* scrollspy — the nav underline stays lit on the section in view */
    const spyIds = ["results", "faculty", "pricing", "faq", "contact"];
    let spy: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      const links = new Map(
        spyIds
          .map((id) => [id, root.querySelector<HTMLElement>(`.asc-navlink[href="#${id}"]`)] as const)
          .filter(([, el]) => Boolean(el)),
      );
      spy = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            const link = links.get(e.target.id);
            if (!link) continue;
            if (e.isIntersecting) {
              links.forEach((l) => l && l.classList.remove("asc-active"));
              link.classList.add("asc-active");
            }
          }
        },
        { rootMargin: "-35% 0px -55% 0px" },
      );
      spyIds.forEach((id) => {
        const sec = document.getElementById(id);
        if (sec) spy!.observe(sec);
      });
    }

    /* cursor glow — a soft gold light that lerps after the pointer and swells
       over interactive elements. Purely additive: the native cursor stays. */
    const glow = document.getElementById("asc-cursor");
    let glowRaf = 0;
    if (glow && motionOk) {
      let tx = -100;
      let ty = -100;
      let cx = -100;
      let cy = -100;
      let big = false;
      let cs = 1;
      const onGlowMove = (e: PointerEvent) => {
        tx = e.clientX;
        ty = e.clientY;
        const t = e.target as HTMLElement | null;
        big = Boolean(t?.closest?.("a, button, [data-tilt]"));
        glow.style.opacity = "1";
      };
      const onLeave = () => {
        glow.style.opacity = "0";
      };
      window.addEventListener("pointermove", onGlowMove, { passive: true });
      document.documentElement.addEventListener("pointerleave", onLeave);
      const glowLoop = () => {
        cx += (tx - cx) * 0.18;
        cy += (ty - cy) * 0.18;
        cs += ((big ? 2.2 : 1) - cs) * 0.2;
        glow.style.transform = `translate(${cx.toFixed(1)}px, ${cy.toFixed(1)}px) translate(-50%,-50%) scale(${cs.toFixed(3)})`;
        glowRaf = requestAnimationFrame(glowLoop);
      };
      glowLoop();
      // fold the glow listeners into the shared cleanup below
      cleanupFns.push(() => {
        window.removeEventListener("pointermove", onGlowMove);
        document.documentElement.removeEventListener("pointerleave", onLeave);
        cancelAnimationFrame(glowRaf);
      });
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (finePointer) {
        root.removeEventListener("pointermove", onMove);
        root.removeEventListener("pointerout", onOut);
      }
      root.removeEventListener("click", onClick);
      if (spy) spy.disconnect();
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  return (
    <div className="asc" ref={rootRef}>
      <style>{ASC_CSS}</style>
      <div id="asc-progress" aria-hidden="true" />
      <div id="asc-grain" aria-hidden="true" />
      {/* additive cursor light (fine pointers; native cursor untouched) */}
      <span id="asc-cursor" aria-hidden="true" />

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

  /* light (dawn) — the secondary theme, reached via the toggle */
  --asc-ground:#F5EFE3; --asc-ground-2:#FBF7EF; --asc-card:#FFFFFF;
  --asc-surface:rgba(18,33,56,0.04); --asc-surface-2:rgba(18,33,56,0.07);
  --asc-line:rgba(18,33,56,0.13); --asc-line-strong:rgba(18,33,56,0.24);
  --asc-ink:#1F2E4A; --asc-ink-strong:#0C1830; --asc-muted:#55688A;
  --asc-gold:#A87A24; --asc-gold-bright:#C0922F; --asc-gold-deep:#7E5A1B; --asc-gold-soft:rgba(168,122,36,0.14);
  --asc-teal:#2E7FA8;
  --asc-contour:rgba(140,100,30,0.17); --asc-live:#1F9E5A;
  --asc-aurora-a:rgba(201,151,31,0.18); --asc-aurora-b:rgba(58,110,190,0.12);
  --asc-glow-edge:linear-gradient(140deg,rgba(168,122,36,0.55),rgba(168,122,36,0.10) 40%,rgba(46,127,168,0.35));
  --asc-shadow:0 24px 60px rgba(24,30,45,0.14); --asc-shadow-soft:0 14px 40px rgba(24,30,45,0.10);
  --asc-glow-gold:0 0 0 rgba(0,0,0,0);
  --asc-ridge-fill:#173257;

  background:var(--asc-ground); color:var(--asc-ink);
  font-family:var(--asc-body); overflow-x:hidden;
  --asc-ease:cubic-bezier(.16,1,.3,1);
  --asc-spring:cubic-bezier(.34,1.56,.64,1);
}
/* night (default experience — the homepage opts visitors into .dark) */
.dark .asc{
  --asc-ground:#05080F; --asc-ground-2:#0A1220; --asc-card:#0E1B31;
  --asc-surface:rgba(240,244,252,0.05); --asc-surface-2:rgba(240,244,252,0.085);
  --asc-line:rgba(226,236,250,0.13); --asc-line-strong:rgba(226,236,250,0.24);
  --asc-ink:#EDE6D6; --asc-ink-strong:#FDF9F0; --asc-muted:#9FB1CE;
  --asc-gold:#E4B860; --asc-gold-bright:#F5D48E; --asc-gold-deep:#B98935; --asc-gold-soft:rgba(228,184,96,0.16);
  --asc-teal:#57C4E5;
  --asc-contour:rgba(228,184,96,0.17); --asc-live:#5FD98F;
  --asc-aurora-a:rgba(228,184,96,0.24); --asc-aurora-b:rgba(87,196,229,0.14);
  --asc-glow-edge:linear-gradient(140deg,rgba(245,212,142,0.60),rgba(245,212,142,0.10) 40%,rgba(87,196,229,0.38));
  --asc-shadow:0 26px 70px rgba(0,0,0,0.55); --asc-shadow-soft:0 16px 44px rgba(0,0,0,0.40);
  --asc-glow-gold:0 0 60px -10px rgba(228,184,96,0.38);
  --asc-band:linear-gradient(168deg,#152A50 0%,#0C1C38 46%,#060F1F 100%);
  --asc-ridge-fill:#152A50;
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
#asc-progress{position:fixed;top:0;left:0;height:2.5px;width:100%;transform:scaleX(0);transform-origin:0 50%;background:linear-gradient(90deg,var(--asc-gold-deep),var(--asc-gold-bright));box-shadow:0 0 14px rgba(240,200,120,0.75);z-index:120;will-change:transform}
#asc-grain{position:fixed;inset:0;z-index:8;pointer-events:none;opacity:0.04;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px}

/* buttons — magnetic (JS drives --magx/--magy on fine pointers) with shine sweep */
.asc-btn{position:relative;overflow:hidden;font-family:var(--asc-body);font-weight:600;font-size:15px;cursor:pointer;border-radius:999px;padding:14px 26px;display:inline-flex;align-items:center;justify-content:center;gap:8px;white-space:nowrap;border:1.5px solid transparent;transform:translate(var(--magx,0px),calc(var(--magy,0px) + var(--lift,0px)));transition:transform .3s var(--asc-ease),box-shadow .3s ease,background-color .25s ease,color .25s ease,border-color .25s ease}
.asc-btn-sm{padding:11px 20px;font-size:14px}
.asc-btn-lg{padding:16px 30px;font-size:16px}
.asc-btn-block{width:100%}
.asc-btn:hover{--lift:-2px}
.asc-btn:active{--lift:1px}
.asc-btn::after{content:"";position:absolute;top:0;bottom:0;left:-80%;width:46%;background:linear-gradient(105deg,transparent,rgba(255,255,255,0.55),transparent);transform:skewX(-20deg);pointer-events:none;transition:left .01s}
.asc-btn:hover::after{left:135%;transition:left .65s ease}
.asc-btn-gold{background:var(--asc-grad-gold);color:#122036;font-weight:700;box-shadow:0 10px 26px rgba(201,151,31,0.32),var(--asc-glow-gold)}
.asc-btn-gold:hover{box-shadow:0 16px 44px rgba(201,151,31,0.48),var(--asc-glow-gold)}
.asc-btn-outline{background:transparent;color:var(--asc-ink-strong);border-color:var(--asc-line-strong)}
.asc-btn-outline:hover{border-color:var(--asc-gold);color:var(--asc-gold)}
.asc-btn-outline::after{background:linear-gradient(105deg,transparent,var(--asc-gold-soft),transparent)}
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
.dark .asc-nav{border-bottom-color:rgba(245,212,142,0.15)}

/* hero */
.asc-hero{position:relative;overflow:hidden;padding:clamp(52px,8vw,104px) 0 clamp(48px,7vw,96px)}
.asc-contour{position:absolute;inset:0;width:100%;height:100%;z-index:0}
.asc-aurora-wrap{position:absolute;z-index:0;pointer-events:none;will-change:transform}
.asc-aurora-pos-a{top:-140px;right:-80px;width:560px;height:560px}
.asc-aurora-pos-b{bottom:-170px;left:-90px;width:500px;height:500px}
.asc-aurora{display:block;width:100%;height:100%;border-radius:50%;filter:blur(60px);will-change:transform}
@keyframes ascAuroraA{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(-46px,32px) scale(1.14)}}
@keyframes ascAuroraB{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(40px,-28px) scale(1.1)}}
.asc-aurora-a{background:radial-gradient(circle,var(--asc-aurora-a),transparent 62%);animation:ascAuroraA 17s ease-in-out infinite}
.asc-aurora-b{background:radial-gradient(circle,var(--asc-aurora-b),transparent 62%);animation:ascAuroraB 23s ease-in-out infinite}
.asc-hero-grid{position:relative;z-index:2;display:grid;grid-template-columns:1.05fr 0.95fr;gap:56px;align-items:center}
.asc-hero-chips{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:26px}
.asc-chip{font-size:12.5px;font-weight:600;padding:7px 14px;border-radius:999px;border:1px solid var(--asc-line);color:var(--asc-muted);background:var(--asc-surface)}
.asc-chip-gold{background:var(--asc-grad-gold);border-color:transparent;color:var(--asc-navy-deep)}
.asc-hero h1{font-size:clamp(40px,5.6vw,76px);font-weight:400;letter-spacing:-0.02em}
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
/* ridgeline silhouette rising out of the section above each night band,
   plus a glowing horizon hairline at the base */
.asc-band-navy::before{content:"";position:absolute;top:-34px;left:0;right:0;height:35px;pointer-events:none;background:var(--asc-ridge-fill);clip-path:polygon(0 100%,0 76%,5% 54%,10% 68%,17% 32%,23% 58%,30% 42%,37% 66%,44% 24%,51% 55%,57% 38%,63% 62%,70% 28%,77% 56%,84% 34%,91% 62%,100% 42%,100% 100%);filter:drop-shadow(0 -2px 8px rgba(245,212,142,0.18))}
.asc-band-navy::after{content:"";position:absolute;left:0;right:0;bottom:0;height:1px;pointer-events:none;opacity:.55;background:linear-gradient(90deg,transparent 4%,rgba(245,212,142,0.5) 34%,rgba(87,196,229,0.4) 66%,transparent 96%)}
.asc-sec-head{max-width:56ch}
.asc-sec-head-center{max-width:640px;margin-inline:auto;text-align:center}
.asc-sec-head h2{font-size:clamp(30px,4.4vw,50px);margin-top:16px}
.asc-sec-head p{margin-top:18px;color:var(--asc-muted);font-size:clamp(16px,1.5vw,18px);max-width:56ch}
.asc-band-navy .asc-sec-head p{color:rgba(237,230,214,0.72)}
.asc-sec-head-split{max-width:none;display:flex;justify-content:space-between;align-items:flex-end;gap:24px;flex-wrap:wrap}
.asc-sec-aside{font-size:14px;color:rgba(237,230,214,0.72);max-width:300px}
.asc-center{text-align:center;margin-top:34px}

/* reveal — hidden states only exist while JS is live (.asc-js) so no-JS
   visitors and crawlers always see full content */
.asc-js .asc-reveal{opacity:0;transform:translateY(28px);transition:opacity .8s var(--asc-ease),transform .8s var(--asc-ease);transition-delay:var(--d,0s)}
.asc-js .asc-reveal.in{opacity:1;transform:none}
/* per-child stagger inside a revealed block (compare rows etc.) */
@keyframes ascChild{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
.asc-js .asc-reveal .asc-child{opacity:0}
.asc-js .asc-reveal.in .asc-child{animation:ascChild .6s var(--asc-ease) both;animation-delay:calc(var(--cd,0s) + .15s)}

/* rise (hero load) */
@keyframes ascRise{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
.asc-rise{animation:ascRise .9s var(--asc-ease) both;animation-delay:var(--d,0s)}

/* cinematic word-by-word headline reveal */
@keyframes ascWord{from{opacity:0;transform:translateY(26px) rotate(1.2deg);filter:blur(8px)}to{opacity:1;transform:none;filter:blur(0)}}
.asc-w{display:inline-block;animation:ascWord .75s var(--asc-ease) both;animation-delay:var(--d,0s)}

/* hero photo mask-in + doubt-card spring pop */
@keyframes ascPhoto{from{opacity:0;transform:scale(1.07);clip-path:inset(9% 9% 9% 9% round 22px)}to{opacity:1;transform:none;clip-path:inset(0 0 0 0 round 22px)}}
.asc-photo-in{animation:ascPhoto 1.15s var(--asc-ease) .3s both}
@keyframes ascPop{0%{opacity:0;transform:translateY(28px) scale(.92)}70%{opacity:1;transform:translateY(-5px) scale(1.02)}100%{opacity:1;transform:none}}
.asc-pop{animation:ascPop .85s var(--asc-spring) .95s both}

/* shimmer headline */
@keyframes ascShimmer{to{background-position:200% center}}
.asc-shimmer{background:var(--asc-grad-gold-text);background-size:200% auto;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent;font-style:italic;animation:ascShimmer 5.5s linear infinite}
/* the shimmer em is also a reveal word — run both animations, delay only the reveal */
.asc-w.asc-shimmer{animation:ascWord .75s var(--asc-ease) both,ascShimmer 5.5s linear infinite;animation-delay:var(--d,0s),0s}

/* pulse */
@keyframes ascPulse{0%{box-shadow:0 0 0 0 rgba(74,222,128,0.55)}70%{box-shadow:0 0 0 9px rgba(74,222,128,0)}100%{box-shadow:0 0 0 0 rgba(74,222,128,0)}}
.asc-pulse{animation:ascPulse 2.2s ease-out infinite}

/* spotlight */
.asc-spot{position:relative;isolation:isolate}
.asc-spot::before{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;z-index:-1;opacity:0;transition:opacity .4s ease;background:radial-gradient(240px circle at var(--mx,50%) var(--my,50%),var(--asc-gold-soft),transparent 62%)}
.asc-spot-dark::before{background:radial-gradient(260px circle at var(--mx,50%) var(--my,50%),rgba(217,174,87,0.20),transparent 62%)}
.asc-spot:hover::before{opacity:1}

/* 3D tilt — pointer driver sets --rx/--ry; composes with hover lift and the
   reveal translate so the transforms never fight each other */
.asc-tilt3d{transform-style:preserve-3d;transform:perspective(1100px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) translateY(var(--lift,0px));transition:transform .35s var(--asc-ease),box-shadow .35s ease,border-color .35s ease,background-color .35s ease}
.asc-tilt3d:hover{--lift:-5px}
.asc-js .asc-reveal.asc-tilt3d{transform:perspective(1100px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) translateY(28px)}
.asc-js .asc-reveal.asc-tilt3d.in{transform:perspective(1100px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) translateY(var(--lift,0px))}

/* gradient-border glow cards (gold→teal edge light) */
.asc-card-glow{border:1px solid transparent !important;background-image:linear-gradient(var(--asc-card),var(--asc-card)),var(--asc-glow-edge);background-origin:border-box;background-clip:padding-box,border-box}
.asc-col-us.asc-card-glow,.asc-tier-hi.asc-card-glow,.asc-faq-cta.asc-card-glow{background-image:var(--asc-band),var(--asc-glow-edge)}
.asc-tier-hi.asc-card-glow{box-shadow:0 26px 60px rgba(0,0,0,0.35),var(--asc-glow-gold)}

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
.asc-stage{position:sticky;top:100px;height:min(72vh,560px);border-radius:22px;overflow:hidden;border:1px solid rgba(251,247,239,0.16);background:linear-gradient(180deg,#0E2144 0%,#071120 52%,#0B1A33 100%);box-shadow:var(--asc-shadow-soft),inset 0 1px 0 rgba(245,212,142,0.14)}
.asc-stage svg{position:absolute;inset:0;width:100%;height:100%}
/* summit glow — driven by scroll progress (--sg set by the route driver) */
.asc-stage-glow{position:absolute;top:-60px;right:-50px;width:300px;height:300px;border-radius:50%;pointer-events:none;background:radial-gradient(circle,rgba(245,212,142,0.6) 0%,rgba(245,212,142,0.12) 45%,transparent 68%);filter:blur(8px);opacity:calc(var(--sg,0) * 0.95);transition:opacity .25s linear}
#ascClimber{filter:drop-shadow(0 0 7px rgba(245,212,142,0.95))}
/* flag: plant with a spring, then keep a gentle wave */
@keyframes ascFlagPlant{0%{transform:translate(380px,150px) scale(.4)}60%{transform:translate(380px,124px) scale(1.12)}100%{transform:translate(380px,130px) scale(1)}}
@keyframes ascWave{0%,100%{transform:skewY(0deg)}50%{transform:skewY(-7deg)}}
#ascFlag.asc-flag-in{animation:ascFlagPlant .6s var(--asc-spring) both}
#ascFlag.asc-flag-in path:nth-of-type(2){animation:ascWave 1.8s ease-in-out .6s infinite;transform-box:fill-box;transform-origin:left center}
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
.asc-report-fill{display:block;height:100%;width:var(--w);border-radius:999px;transition:width 1.3s var(--asc-ease) .2s}
.asc-js .asc-reveal:not(.in) .asc-report-fill{width:0}
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
/* testimonial marquee wall — edge-fade masks, pauses on hover/focus */
.asc-voice-marquee{margin-top:44px;overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent);mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)}
.asc-voice-track{display:flex;width:max-content;gap:18px;animation:ascVoiceScroll 46s linear infinite}
.asc-voice-marquee:hover .asc-voice-track,.asc-voice-marquee:focus-within .asc-voice-track{animation-play-state:paused}
@keyframes ascVoiceScroll{to{transform:translateX(-50%)}}
.asc-voice{flex:0 0 380px;margin:0;border-radius:20px;padding:30px 28px 26px;border:1px solid rgba(251,247,239,0.14);background:rgba(251,247,239,0.05);display:flex;flex-direction:column}
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
.asc-tier{position:relative;display:flex;flex-direction:column;border-radius:22px;padding:32px 28px 28px;border:1px solid var(--asc-line);background:var(--asc-surface)}
.asc-tier-hi{background:var(--asc-band);border-color:rgba(217,174,87,0.45);color:var(--asc-cream);box-shadow:0 26px 60px rgba(26,54,93,0.26)}
.asc-tier-badge{display:inline-block;align-self:flex-start;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--asc-navy-deep);background:var(--asc-grad-gold);border-radius:999px;padding:5px 12px;margin-bottom:14px}
/* floating badge — straddles the card's top edge (dev21 "Pricing Glass" pattern) */
.asc-tier-badge-float{position:absolute;top:0;left:50%;transform:translate(-50%,-52%);margin:0;box-shadow:0 8px 22px rgba(201,151,31,0.4),var(--asc-glow-gold);z-index:2;white-space:nowrap}
.asc-tier-has-badge{margin-top:12px}
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
.dark .asc-summit{background:linear-gradient(180deg,var(--asc-ground) 0%,#171003 52%,#3A2708 86%,#4E3509 100%)}
.asc-summit-sun{position:absolute;left:50%;bottom:-260px;width:520px;height:520px;transform:translateX(-50%);border-radius:50%;background:radial-gradient(circle,rgba(239,201,125,0.5),transparent 60%);filter:blur(20px);z-index:0}
@keyframes ascSunBreathe{0%,100%{opacity:.8;transform:translateX(-50%) scale(1)}50%{opacity:1;transform:translateX(-50%) scale(1.08)}}
.dark .asc-summit-sun{width:640px;height:640px;background:radial-gradient(circle,rgba(245,205,120,0.65),rgba(245,205,120,0.15) 45%,transparent 62%);animation:ascSunBreathe 7s ease-in-out infinite}
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

/* ---------- v3 "Summit Polish" ---------- */
/* cursor light — additive, never replaces the native cursor */
#asc-cursor{position:fixed;top:0;left:0;width:26px;height:26px;border-radius:50%;pointer-events:none;z-index:220;opacity:0;background:radial-gradient(circle,rgba(245,212,142,0.85),rgba(245,212,142,0.25) 55%,transparent 75%);box-shadow:0 0 26px 8px rgba(240,200,120,0.35);mix-blend-mode:screen;transition:opacity .3s ease;will-change:transform}
@media (pointer:coarse){#asc-cursor{display:none}}

/* nav: glass strengthens after scroll; scrollspy keeps the active link lit */
.asc-nav{transition:box-shadow .35s ease,background-color .35s ease}
.asc-nav.asc-scrolled{background:color-mix(in srgb,var(--asc-ground) 92%,transparent);box-shadow:0 10px 40px rgba(0,0,0,0.22)}
.asc-navlink.asc-active{color:var(--asc-gold)}
.asc-navlink.asc-active::after{right:0}

/* hero exit choreography — driven by --hx (0→1) from the scroll driver */
.asc-hero-copy{transform:translateY(calc(var(--hx,0) * -46px));opacity:calc(1 - var(--hx,0) * 0.55)}
.asc-hero-visual.asc-tilt3d{transform:perspective(1100px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) translateY(calc(var(--lift,0px) + var(--hx,0) * 40px)) scale(calc(1 - var(--hx,0) * 0.05));opacity:calc(1 - var(--hx,0) * 0.45)}

/* ledger rows: gold sweep + portrait ring brighten on hover */
.asc-ledger-row{position:relative}
.asc-ledger-row::after{content:"";position:absolute;left:18px;right:18px;bottom:-1px;height:2px;background:linear-gradient(90deg,var(--asc-gold-bright),rgba(87,196,229,0.4) 70%,transparent);transform:scaleX(0);transform-origin:0 50%;transition:transform .45s var(--asc-ease)}
.asc-ledger-row:hover::after{transform:scaleX(1)}
.asc-ledger-row:hover .asc-ledger-img{border-color:var(--asc-gold-bright)}

/* icon flourish on card hover */
.asc-faculty-ic,.asc-program-ic,.asc-step-ic{transition:transform .4s var(--asc-ease)}
.asc-faculty-card:hover .asc-faculty-ic,.asc-program:hover .asc-program-ic,.asc-step:hover .asc-step-ic{transform:rotate(-8deg) scale(1.08)}

/* FAQ answer content settles in after the panel opens */
.asc-faq-body p{opacity:0;transform:translateY(6px);transition:opacity .35s ease .08s,transform .35s var(--asc-ease) .08s}
.asc-faq-body-open p{opacity:1;transform:none}

/* summit embers */
.asc-embers{position:absolute;inset:0;pointer-events:none;z-index:1}
.asc-embers i{position:absolute;left:var(--ex,50%);bottom:5%;width:4px;height:4px;border-radius:50%;background:#F5D48E;opacity:0;box-shadow:0 0 8px rgba(245,212,142,0.8);animation:ascEmber var(--edur,7s) linear var(--edel,0s) infinite}
@keyframes ascEmber{0%{transform:translate(0,0);opacity:0}12%{opacity:.85}55%{opacity:.5;transform:translate(14px,-130px)}100%{transform:translate(-8px,-250px);opacity:0}}

/* luminous figures — the numbers are the jewellery of the page */
.asc-ledger-rank,.asc-stat-fig{color:var(--asc-gold-bright);text-shadow:0 0 26px rgba(240,200,120,0.35)}
.asc-tier-now,.asc-statement-ratio-v,.asc-ring-num{background:linear-gradient(120deg,var(--asc-gold-bright),var(--asc-gold) 55%,var(--asc-gold-deep));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.asc-stage-metres{text-shadow:0 0 20px rgba(240,200,120,0.45)}
/* marquee items glow on hover */
.asc-mq-item{transition:color .3s ease,text-shadow .3s ease}
.asc-mq-item:hover{color:var(--asc-gold-bright);text-shadow:0 0 18px rgba(240,200,120,0.4)}

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
  .asc-faculty-grid,.asc-week-grid,.asc-pricing-grid,.asc-programs-grid{grid-template-columns:1fr}
  .asc-voice{flex-basis:82vw}
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
  .asc-reveal,.asc-w,.asc-child,.asc-pop,.asc-photo-in{opacity:1 !important;transform:none !important;filter:none !important;animation:none !important;clip-path:none !important}
  .asc-mq-row,.asc-aurora,.asc-summit-sun,.asc-voice-track,.asc-embers i{animation:none !important}
  .asc-voice-marquee{overflow-x:auto}
  #asc-cursor{display:none}
  .asc-hero-copy,.asc-hero-visual.asc-tilt3d{opacity:1 !important}
  .asc-faq-body p{opacity:1 !important;transform:none !important}
  .asc-par,.asc-tilt3d,.asc-btn{transform:none !important}
}
`;
