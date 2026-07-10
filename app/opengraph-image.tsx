import { ImageResponse } from "next/og";

export const alt = "NextFounders - founderzy, którzy działają";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#F6F2E9",
          color: "#191713",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 9999,
              backgroundColor: "#1B2CC1",
            }}
          />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "rgba(25,23,19,0.6)",
            }}
          >
            Niezależna organizacja founderów · Wrocław
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, lineHeight: 1.05 }}>Founderzy, którzy</div>
          <div
            style={{
              fontSize: 92,
              lineHeight: 1.05,
              fontStyle: "italic",
              color: "#1B2CC1",
            }}
          >
            faktycznie działają.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(25,23,19,0.2)",
            paddingTop: 32,
          }}
        >
          <div style={{ display: "flex", fontSize: 32 }}>
            NextFounders
            <span style={{ color: "#1B2CC1" }}>.</span>
          </div>
          <div style={{ fontSize: 24, color: "rgba(25,23,19,0.55)" }}>
            nextfounders.pl
          </div>
        </div>
      </div>
    ),
    size
  );
}
