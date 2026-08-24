import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#f9f9fb",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#9391a8",
            marginBottom: 28,
          }}
        >
          Creative Acts
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Georgia, serif",
            fontSize: 72,
            lineHeight: 1.15,
            color: "#201f28",
          }}
        >
          <span>Discovery takes creativity.</span>
          <span style={{ color: "#55536a" }}>Change takes acts.</span>
          <span>We do both.</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
