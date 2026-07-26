import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "NEET UG 2027 CBT Mode — MindPeak Institute Guide";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "hsl(225, 43%, 7%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "999px",
              border: "1px solid rgba(56, 189, 248, 0.5)",
              background: "rgba(56, 189, 248, 0.1)",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#38bdf8",
              }}
            />
            <span
              style={{
                color: "#38bdf8",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Exam Reform · Confirmed 15 May 2026
            </span>
          </div>
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "60px",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "hsl(210, 40%, 98%)",
            }}
          >
            NEET UG 2027 Goes{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, hsl(43,80%,65%), hsl(43,72%,52%), hsl(43,65%,42%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Fully CBT
            </span>
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "hsl(215, 20%, 65%)",
              lineHeight: 1.4,
              maxWidth: "800px",
            }}
          >
            No more OMR sheets. What changes, what stays the same, and how to
            prepare — complete guide by MindPeak Institute.
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid hsl(220, 30%, 18%)",
            paddingTop: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                background: "hsl(43, 72%, 52%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "hsl(225, 43%, 7%)",
                fontSize: "16px",
                fontWeight: 900,
              }}
            >
              M
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span
                style={{
                  color: "hsl(210, 40%, 98%)",
                  fontSize: "16px",
                  fontWeight: 700,
                }}
              >
                MindPeak Institute
              </span>
              <span
                style={{
                  color: "hsl(215, 20%, 65%)",
                  fontSize: "13px",
                }}
              >
                mindpeakinstitute.com · NEET &amp; JEE 1-on-1 Coaching
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "16px",
            }}
          >
            {["Syllabus Unchanged", "Same Marking", "Screen-Based"].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: "5px 12px",
                  borderRadius: "999px",
                  border: "1px solid hsl(220, 30%, 25%)",
                  color: "hsl(215, 20%, 65%)",
                  fontSize: "12px",
                  fontWeight: 600,
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
