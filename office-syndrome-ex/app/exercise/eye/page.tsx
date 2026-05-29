"use client";

import { useRouter } from "next/navigation";

const videos = [
  { id: 1, title: "Six direction Eye movement", src: "/videos/eye-1.mp4" },
  { id: 2, title: "Eye Tracking Exercise", src: "/videos/eye-2.mp4" },
];

export default function EyeExercisePage() {
  const router = useRouter();

  return (
    <main
      style={{
        minHeight: "100dvh",
        background: "#fff",
        fontFamily: "sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Drag handle + back */}
      <div style={{ display: "flex", alignItems: "center", padding: "16px 20px 0", position: "relative" }}>
        <button
          onClick={() => router.back()}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
            fontSize: "22px",
            color: "#1a1a18",
            lineHeight: 1,
          }}
        >
          ‹
        </button>
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            width: "48px",
            height: "6px",
            borderRadius: "3px",
            background: "#c0bdb8",
          }}
        />
      </div>

      {/* Title */}
      <h1
        style={{
          textAlign: "center",
          fontWeight: 900,
          fontSize: "26px",
          lineHeight: 1.2,
          margin: "20px 20px 28px",
          color: "#1a1a18",
        }}
      >
        Eye<br />Exercise
      </h1>

      {/* Video list */}
      <div style={{ padding: "0 20px 40px", display: "flex", flexDirection: "column", gap: "32px" }}>
        {videos.map((v, i) => (
          <div key={v.id}>
            {/* Label */}
            <p style={{ fontWeight: 600, fontSize: "15px", color: "#1a1a18", margin: "0 0 10px" }}>
              {i + 1}.&nbsp; {v.title}
            </p>

            {/* Video player */}
            <div
              style={{
                width: "100%",
                aspectRatio: "3 / 4",
                borderRadius: "16px",
                overflow: "hidden",
                background: "#e0ddd8",
                position: "relative",
              }}
            >
              <video
                src={v.src}
                controls
                playsInline          // required for iPhone autoplay policy
                preload="metadata"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              {/* Fallback placeholder shown when video file not yet added */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  pointerEvents: "none",
                }}
              >
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14"/>
                  <rect x="2" y="6" width="13" height="12" rx="2"/>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}