"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <main
      style={{
        height: "100dvh",
        background: "#fff",
        overflow: "hidden",
        position: "relative",
        fontFamily: "sans-serif",
      }}
    >
      {/* Image placeholder — replace src with actual image path later */}
      <div
        style={{
          position: "absolute",
          top: "28%",
          right: 0,
          width: "55%",
          bottom: 0,
          borderTopLeftRadius: "20px",
          overflow: "hidden",
          border: "2px dashed #b0b0b0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f5f5f5",
        }}
      >
        <span style={{ color: "#b0b0b0", fontSize: "3.5vw", fontWeight: 500 }}>รูปภาพ</span>
        {/* <Image src="/your-image.jpg" alt="hero" fill style={{ objectFit: "cover" }} priority /> */}
      </div>

      {/* Text — top left */}
      <div
        style={{
          position: "absolute",
          top: "12%",
          left: "7%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span style={{ fontWeight: 900, fontSize: "13vw", lineHeight: 1.05, color: "#1a1a18" }}>
          OFFICE
        </span>
        <span style={{ fontWeight: 700, fontSize: "9vw", lineHeight: 1.05, color: "#1a1a18", marginTop: "2px" }}>
          SYNDROME
        </span>
        <span style={{ fontSize: "8.5vw", fontWeight: 400, color: "#1a1a18", marginTop: "2px" }}>
          exercise
        </span>
      </div>

      {/* Button — navigates to /exercise */}
      <div style={{ position: "absolute", bottom: "30%", left: "7%" }}>
        <button
          onClick={() => router.push("/exercise")}
          style={{
            background: "#8fe44a",
            border: "none",
            borderRadius: "100px",
            padding: "14px 32px",
            fontSize: "4.5vw",
            fontWeight: 500,
            color: "#1a1a18",
            cursor: "pointer",
          }}
        >
          Let&apos;s go!
        </button>
      </div>
    </main>
  );
}