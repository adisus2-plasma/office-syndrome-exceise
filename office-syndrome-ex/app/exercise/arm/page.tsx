"use client";

import { useRouter } from "next/navigation";

const videos = [
  {
    id: 1,
    title: "Shoulder Extension Stretch",
    src: "/videos/arm-1.mp4",
    description: "ช่วยบริหารกล้ามเนื้อ 3 ส่วน",
    bullets: [
      "Biceps (ไบเซปส์) เป็นกล้ามเนื้อบริเวณต้นแขนด้านหน้า",
      "Deltoid (เดลทอย) เป็นกล้ามเนื้อที่คลุมข้อต่อไหล่สุดด้านนอกสุด",
      "Pectoralis (เพคโทลาลิส) เป็นกลุ่มกล้ามเนื้อบริเวณหน้าอก",
    ],
  },
  {
    id: 2,
    title: "Wrist Flexor Stretch",
    src: "/videos/arm-2.mp4",
    description: "ช่วยบริหารกล้ามเนื้อบริเวณปลายแขนด้านหน้า ได้แก่",
    bullets: [
      "Flexor Carpi Radialis",
      "Palmaris Longus",
      "Flexor Carpi Ulnaris",
    ],
  },
];

export default function ArmHandPage() {
  const router = useRouter();

  return (
    <main style={{ minHeight: "100dvh", background: "#fff", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", padding: "16px 20px 0", position: "relative" }}>
        <button onClick={() => router.back()} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "22px", color: "#1a1a18" }}>‹</button>
        <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", width: "48px", height: "6px", borderRadius: "3px", background: "#c0bdb8" }} />
      </div>

      <h1 style={{ textAlign: "center", fontWeight: 900, fontSize: "24px", lineHeight: 1.2, margin: "20px 20px 24px", color: "#1a1a18" }}>
        Arm & Hand
      </h1>

      <div style={{ padding: "0 20px 40px", display: "flex", flexDirection: "column", gap: "28px" }}>
        {videos.map((v, i) => (
          <div key={v.id}>
            <p style={{ fontWeight: 600, fontSize: "15px", color: "#1a1a18", margin: "0 0 10px" }}>{i + 1}. {v.title}</p>
            <div style={{ width: "100%", aspectRatio: "3/4", borderRadius: "16px", overflow: "hidden", background: "#e0ddd8", position: "relative" }}>
              <video src={v.src} controls playsInline preload="metadata" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14"/><rect x="2" y="6" width="13" height="12" rx="2"/>
                </svg>
              </div>
            </div>
            {v.description && <p style={{ fontSize: "13px", color: "#555", margin: "10px 0 0", lineHeight: 1.6 }}>{v.description}</p>}
            {v.bullets && (
              <ul style={{ margin: "6px 0 0 16px", padding: 0, fontSize: "13px", color: "#555", lineHeight: 1.8 }}>
                {v.bullets.map(b => <li key={b}>{b}</li>)}
              </ul>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}