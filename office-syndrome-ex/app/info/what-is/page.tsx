"use client";

import { useRouter } from "next/navigation";

const Placeholder = ({ width = "100%", aspect = "1/1", src }: { width?: string; aspect?: string; src?: string }) => (
  <div style={{
    width,
    aspectRatio: aspect,
    borderRadius: "16px",
    background: "#e0ddd8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    overflow: "hidden",
    position: "relative",
  }}>
    {src ? (
      <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }} />
    ) : (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#b0aca6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>
      </svg>
    )}
  </div>
);

export default function WhatIsOfficeSyndromePage() {
  const router = useRouter();

  return (
    <main style={{ minHeight: "100dvh", background: "#fff", fontFamily: "sans-serif" }}>

      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", padding: "16px 20px 0", position: "relative" }}>
        <button onClick={() => router.back()} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "22px", color: "#1a1a18" }}>‹</button>
        <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", width: "48px", height: "6px", borderRadius: "3px", background: "#c0bdb8" }} />
      </div>

      {/* Title */}
      <h1 style={{ textAlign: "center", fontWeight: 900, fontSize: "26px", lineHeight: 1.2, margin: "20px 20px 28px", color: "#1a1a18" }}>
        what's<br />Office sydrome
      </h1>

      {/* Section 1: image left + text right */}
      <div style={{ padding: "0 20px", display: "flex", gap: "16px", alignItems: "flex-start", marginBottom: "40px" }}>
        <Placeholder width="42%" aspect="3/4" />
        <div style={{ flex: 1 }}>
          <h2 style={{ fontWeight: 900, fontSize: "20px", color: "#1a1a18", margin: "0 0 10px" }}>ออฟฟิศซินโดรม</h2>
          <p style={{ fontSize: "13px", color: "#444", lineHeight: 1.75, margin: 0 }}>
            คือ อาการปวดกล้ามเนื้อและเยื่อพังผืด มีสาเหตุมาจากการนั่งทำงานหลายชั่วโมง สภาพแวดล้อมที่ไม่ถูกหลักการยศาสตร์ ความเครียด และการเนืองนิ่งอยู่หน้าจอคอมพิวเตอร์เป็นเวลานานส่งผลให้กล้ามเนื้ออักเสบปวดเมื่อยตามบริเวณต่างๆ ของร่างกาย
          </p>
        </div>
      </div>

      {/* Section 2: อาการที่พบได้บ่อย */}
      <div style={{ padding: "0 20px" }}>
        {/* Bottom section: 2 columns side by side */}
        <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>

          {/* Left: text + large image below */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "12px" }}>
            <div>
              <h2 style={{ fontWeight: 900, fontSize: "20px", color: "#1a1a18", margin: "0 0 8px" }}>อาการที่พบได้บ่อย</h2>
              <p style={{ fontSize: "13px", color: "#444", lineHeight: 1.75, margin: 0, textAlign: "center" }}>
                อาการปวดเมื่อยหรืออาการชาบริเวณศีรษะ ดวงตา คอ บ่า ไหล่ หลัง มือ ข้อมือ นิ้วมือ ขา และเท้า
              </p>
            </div>
            <Placeholder aspect="1/1.1" />
          </div>

          {/* Right: 3 small images stacked */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "42%" }}>
            <Placeholder aspect="4/3" />
            <Placeholder aspect="4/3" />
            <Placeholder aspect="4/3" />
          </div>
        </div>
      </div>

    </main>
  );
}