import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "NEET UG 2026 Cancelled — MindPeak Institute Update";
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
              border: "1px solid rgba(245, 158, 11, 0.5)",
              background: "rgba(245, 158, 11, 0.1)",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#f59e0b",
              }}
            />
            <span
              style={{
                color: "#f59e0b",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Breaking Update · 12 May 2026
            </span>
          </div>
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "18px",
              fontSize: "64px",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "hsl(210, 40%, 98%)",
            }}
          >
            <span>NEET UG 2026</span>
            <span
              style={{
                backgroundImage:
                  "linear-gradient(135deg, hsl(43,80%,65%), hsl(43,72%,52%), hsl(43,65%,42%))",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Cancelled
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
            Paper leak confirmed. CBI probe ordered. No re-registration needed.
            Complete guide for students by MindPeak Institute.
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
            {["CBI Probe", "Fee Refund", "No Re-registration"].map((tag) => (
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
