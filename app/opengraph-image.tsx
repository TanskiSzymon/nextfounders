import { ImageResponse } from "next/og";

export const alt = "NextFounders — founderzy, którzy działają";
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
          backgroundColor: "#0f0f0f",
          backgroundImage:
            "radial-gradient(55% 45% at 50% 20%, rgba(0,7,205,0.25), transparent 70%), radial-gradient(35% 30% at 75% 70%, rgba(0,255,255,0.10), transparent 70%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 9999,
              backgroundColor: "#00ffff",
            }}
          />
          <div
            style={{
              fontSize: 24,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            Niezależna organizacja founderów · Wrocław
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, color: "#ffffff", lineHeight: 1 }}>
            Founderzy, którzy
          </div>
          <div
            style={{
              fontSize: 96,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.1,
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
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: 32,
          }}
        >
          <div style={{ display: "flex", fontSize: 32, color: "#ffffff" }}>
            <span style={{ fontWeight: 600 }}>next</span>
            <span style={{ color: "rgba(255,255,255,0.6)" }}>founders</span>
          </div>
          <div style={{ fontSize: 26, color: "rgba(255,255,255,0.5)" }}>
            nextfounders.pl
          </div>
        </div>
      </div>
    ),
    size
  );
}
