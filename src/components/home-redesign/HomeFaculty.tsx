"use client";

import type { CSSProperties } from "react";
import { Atom, FlaskConical, Sigma, Dna } from "lucide-react";
import { getAuthorBySlug } from "@/data/authorData";
import { S } from "./theme";
import { MpEyebrow } from "./MpButton";

const dd = (i: number, base = 0.08) => ({ "--d": `${i * base}s` } as CSSProperties);

/** Same six faculty slugs already used for the /mentors Person schema
 *  (src/components/FacultySchema.tsx) — the homepage shows the exact
 *  same real, verified people, not new invented ones. */
const FEATURED_SLUGS = [
  "devansh",
  "sahil-singh",
  "krishnendu-brahmachari",
  "aparna-chandra",
  "nishkresh-mishra",
  "muskan-singla",
] as const;

const SUBJECT_ICON: Record<string, typeof Atom> = {
  Physics: Atom,
  Chemistry: FlaskConical,
  Mathematics: Sigma,
  Biology: Dna,
};

/** First sentence of a bio, for the compact card copy. */
function firstSentence(bio: string) {
  const match = bio.match(/^.*?[.!?](?=\s|$)/);
  return match ? match[0] : bio;
}

export function MpFaculty() {
  const faculty = FEATURED_SLUGS.map(getAuthorBySlug).filter((a): a is NonNullable<typeof a> => Boolean(a));

  return (
    <section id="faculty" className="mp-x" style={{ padding: "0 48px 96px" }}>
      <div data-reveal style={{ maxWidth: 720, marginBottom: 44 }}>
        <MpEyebrow>Meet your mentors</MpEyebrow>
        <h2 style={{ fontFamily: S.disp, fontSize: "clamp(30px, 3.6vw, 44px)", fontWeight: S.dispWeight, letterSpacing: "-0.02em", margin: "0 0 16px", color: S.navy, lineHeight: 1.08 }}>
          The faculty behind the results ledger
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.65, color: S.inkSoft, maxWidth: 560, margin: 0 }}>
          Real mentors from IIT, NIT and AIIMS — the people your child will actually
          have live 1-on-1 classes with, not a rotating pool of substitutes.
        </p>
      </div>

      <div className="mp-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
        {faculty.map((f, i) => {
          const Icon = SUBJECT_ICON[f.subjects[0]] ?? Atom;
          return (
            <div key={f.slug} data-reveal data-tilt="4" className="mp-tilt mp-spot mp-glass-card" style={{ ...dd(i), position: "relative", borderRadius: 20, padding: "30px 26px 28px" }}>
              <span className="mp-pillar-ic" style={{ display: "grid", placeItems: "center", width: 52, height: 52, borderRadius: 16, background: S.gradGold, marginBottom: 20, boxShadow: "0 10px 24px rgba(212,168,75,0.28)" }}>
                <Icon style={{ width: 24, height: 24, color: S.navyDeep }} strokeWidth={2.2} />
              </span>
              <h3 style={{ fontFamily: S.disp, fontSize: 20, fontWeight: 600, margin: "0 0 4px", color: S.navy }}>{f.name}</h3>
              <div style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: "0.03em", color: S.goldInk, background: S.goldSoft, display: "inline-block", borderRadius: 999, padding: "3px 11px", margin: "0 0 14px" }}>{f.credential}</div>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: S.inkSoft, margin: 0 }}>{firstSentence(f.bio)}</p>
            </div>
          );
        })}
      </div>

      <div data-reveal style={{ marginTop: 32, textAlign: "center" }}>
        <a href="/mentors" className="mp-arrow-link" style={{ fontWeight: 600, color: S.navy, textDecoration: "none", fontSize: 15 }}>
          Meet the full faculty <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}
