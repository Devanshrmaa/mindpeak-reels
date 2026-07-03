"use client";

import type { CSSProperties } from "react";
import { S } from "./theme";
import { MpEyebrow } from "./MpButton";

/*
 * MpStatement — the editorial "statement" band.
 *
 * A full-bleed photograph of a real 1-on-1 session with an oversized display
 * headline and a single hairline caption row underneath it. This is the one
 * moment on the page that trades density for restraint: no cards, no chips,
 * one claim and one number.
 *
 * The claim and the number are both literal product facts, not mood copy:
 * "Measured progress" is what the weekly analytics actually do (the section
 * directly below shows the real report), and 1:1 is the mentor-to-student
 * ratio in every class. The photograph stays identical in light and dark
 * themes, like the navy bands, so every colour here is a literal.
 */
export function MpStatement() {
  const captionLabel: CSSProperties = {
    fontFamily: S.disp,
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "rgba(251,247,239,0.78)",
  };
  return (
    <section
      aria-labelledby="mp-statement-h"
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "clamp(560px, 82vh, 800px)",
        display: "flex",
        alignItems: "flex-end",
        color: S.cream,
        background: S.navyDeep,
      }}
    >
      {/* photo plane — slightly oversized so the scroll parallax never shows edges */}
      <img
        src="/images/mentoring-session-1.jpg"
        alt="A MindPeak mentor working through a problem one-on-one with a student"
        loading="lazy"
        data-depth="0.12"
        style={{
          position: "absolute",
          top: "-6%",
          left: 0,
          width: "100%",
          height: "112%",
          objectFit: "cover",
          objectPosition: "center 30%",
        }}
      />
      {/* legibility scrim — deep navy rising from the baseline */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(19,32,63,0.92) 0%, rgba(19,32,63,0.55) 38%, rgba(19,32,63,0.18) 70%, rgba(19,32,63,0.30) 100%)",
        }}
      />

      <div className="mp-x" style={{ position: "relative", width: "100%", padding: "120px 48px 0" }}>
        <div data-reveal style={{ maxWidth: 860 }}>
          <MpEyebrow light>The MindPeak standard</MpEyebrow>
          <h2
            id="mp-statement-h"
            style={{
              fontFamily: S.disp,
              fontWeight: S.dispWeight,
              fontSize: "clamp(46px, 8vw, 112px)",
              lineHeight: 0.98,
              letterSpacing: "-0.025em",
              textTransform: "uppercase",
              margin: 0,
              textShadow: "0 2px 28px rgba(19,32,63,0.45)",
            }}
          >
            Measured
            <br />
            progress.
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.65,
              color: "rgba(251,247,239,0.88)",
              maxWidth: 470,
              margin: "24px 0 0",
            }}
          >
            No averages, no guesswork. Every chapter, every mock, every week —
            tracked, reported and re-planned around one student at a time.
          </p>
          <a
            href="#weekly-report"
            className="mp-arrow-link"
            style={{ marginTop: 22, fontSize: 14.5, fontWeight: 600, color: S.cream, textDecoration: "none" }}
          >
            See a real weekly report <span aria-hidden>↓</span>
          </a>
        </div>

        {/* hairline caption row — the quiet claim on the left, the number on the right */}
        <div
          data-reveal
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 24,
            flexWrap: "wrap",
            borderTop: "1px solid rgba(251,247,239,0.28)",
            marginTop: 52,
            padding: "24px 0 44px",
            "--d": "0.1s",
          } as CSSProperties}
        >
          <span style={captionLabel}>Built for one student at a time</span>
          <div style={{ textAlign: "right" }}>
            <div
              style={{
                fontFamily: S.disp,
                fontSize: "clamp(44px, 5vw, 66px)",
                fontWeight: 700,
                lineHeight: 1,
                letterSpacing: "-0.02em",
                color: S.goldBtn,
              }}
            >
              1:1
            </div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(251,247,239,0.72)",
                marginTop: 7,
              }}
            >
              mentor-to-student ratio, every class
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
