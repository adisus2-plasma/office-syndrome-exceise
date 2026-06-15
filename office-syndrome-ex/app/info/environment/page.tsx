"use client";

import { useRouter } from "next/navigation";

const Placeholder = ({ aspect = "1/1", src }: { aspect?: string; src?: string }) => (
  <div style={{
    width: "100%",
    aspectRatio: aspect,
    borderRadius: "16px",
    background: "#e0ddd8",
    flexShrink: 0,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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

const items = [
  {
    labelAlign: "left",
    bullets: [
      "- ควรมีทั้งแสงไฟและแสงจากธรรมชาติ",
      "- แสงไม่สว่างเกินหรือน้อยเกินไป",
      "- ต้องไม่มีแสงสะท้อนที่หน้าจอ",
    ],
  },
  {
    labelAlign: "right",
    bullets: [
      "- ควรเป็นสีที่ให้ความรู้สึกสว่างและสบายตา",
      "- หลีกเลี่ยงการใช้สีสด ร้อนแรง",
    ],
  },
  {
    labelAlign: "left",
    bullets: [
      "- อาจเพิ่มต้นไม้ ดอกไม้เพื่อความผ่อนคลาย",
      "- ช่วยการเมื่อล้าของสายตาได้",
    ],
  },
  {
    labelAlign: "right",
    bullets: [
      "- ไม่ควรมีเสียงรบกวน เช่น มอเตอร์ เครื่องจักรเพราะจะเกิดความเครียด ความดันสูง และระบบย่อยอาหาร ผิดปกติ",
      "- อาจมีเสียงดนตรีเบาๆเพิ่มความผ่อนคลาย แต่ขึ้นอยู่กับความเหมาะสม",
    ],
  },
  {
    labelAlign: "left",
    bullets: [
      "- ต้องไม่ร้อนอบอ้าว จะทำให้เพลียง่วงนอน ทำงานได้ไม่เต็มที่",
      "- ไม่เย็นจนเกินไป จะทำให้ร่างกายเฉยชา ไม่ตื่นตัว",
      "- อุณหภูมิที่เหมาะสมอยู่ที่ 19-26 องศาเซลเซียส",
    ],
  },
];

export default function EnvironmentSetupPage() {
  const router = useRouter();

  return (
    <main style={{ minHeight: "100dvh", background: "#fff", fontFamily: "sans-serif", paddingBottom: "48px" }}>

      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", padding: "16px 20px 0", position: "relative" }}>
        <button onClick={() => router.back()} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "22px", color: "#1a1a18" }}>‹</button>
        <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", width: "48px", height: "6px", borderRadius: "3px", background: "#c0bdb8" }} />
      </div>

      {/* Title */}
      <h1 style={{ textAlign: "center", fontWeight: 900, fontSize: "30px", margin: "20px 24px 4px", color: "#1a1a18" }}>
        Environment Setup
      </h1>
      <p style={{ textAlign: "center", fontSize: "13px", color: "#555", lineHeight: 1.7, margin: "0 24px 28px" }}>
        Environment Setup<br />
      </p>

      <h2 style={{ fontWeight: 900, fontSize: "20px", color: "#1a1a18", margin: "0 24px 24px", lineHeight: 1.3 }}>
        การปรับสภาพแวดล้อมใน<br />ที่ทำงานให้เหมาะสม
      </h2>

      {/* Items */}
      <div style={{ padding: "0 24px", display: "flex", flexDirection: "column", gap: "28px" }}>
        {items.map((item, index) => (
          <div key={index}>
            {/* Image + bullets */}
            <div style={{
              display: "flex",
              gap: "14px",
              flexDirection: item.labelAlign === "right" ? "row-reverse" : "row",
              alignItems: "flex-start",
            }}>
              <div style={{ width: "42%", flexShrink: 0 }}>
                <Placeholder aspect="1/1" />
              </div>
              <ul style={{ flex: 1, margin: 0, padding: "0 0 0 16px", fontSize: "12px", color: "#444", lineHeight: 1.8 }}>
                {item.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}