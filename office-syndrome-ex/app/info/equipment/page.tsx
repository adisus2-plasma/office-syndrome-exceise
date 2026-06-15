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
    bullets: [
      "- ขนาดต้องเหมาะสมกับแต่ละบุคคล",
      "- ปรับระดับสูง-ต่ำได้",
      "- พนักพิงต้องสามารถปรับระดับได้",
      "- มีที่เท้าแขน",
      "- ต้องมีล้อที่แข็งแรงไม่ลื่นเกินหรือฝืดเกิน",
    ],
  },
  {
    bullets: [
      "- ควรสูงจากพื้นประมาณ 65-70 เซนติเมตร",
      "- ของบนโต๊ะเก็บให้เป็นระเบียบ",
      "- ใต้โต๊ะไม่ควรนำสิ่งของมาวางเพื่อให้มีพื้นที่เพียงพอในการสอดขาใต้โต๊ะ",
    ],
  },
  {
    bullets: [
      "- โดยขอบบนของหน้าจอไม่สูงกว่าสายตาเพื่อให้มองเล็กน้อยประมาณ 10-15 องศา ช่วยลดอาการปวดตาและคอ",
      "- ควรนั่งห่างจากหน้าจอประมาณ 45-70 เซนติเมตร",
    ],
  },
  {
    bullets: [
      "- ควรอยู่ในระดับต่ำกว่าโต๊ะทำงาน",
      "- หรือสูงสุดคือระดับเดียวกับโต๊ะ",
      "- แขนสองข้างขนานกับพื้นเอียงลงเล็กน้อยศอกอยู่ข้างลำตัว ข้อมือต้องอยู่ในระดับเดียวกับแขน",
    ],
  },
  {
    bullets: [
      "- ควรอยู่ด้านข้างของผู้ใช้งาน",
      "- ต้นแขนแนบลำตัวไม่เหยียดแขน",
      "- อาจมีที่รองข้อมือช่วยให้ข้อมืออยู่ในแนวตรง",
    ],
  },
];

export default function EquipmentSetupPage() {
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
        Equipment Setup
      </h1>
      <p style={{ textAlign: "center", fontSize: "13px", color: "#555", lineHeight: 1.7, margin: "0 24px 28px" }}>
        Equipment Setup<br />
      </p>

      <h2 style={{ fontWeight: 900, fontSize: "20px", color: "#1a1a18", margin: "0 24px 24px", lineHeight: 1.3 }}>
        การปรับอุปกรณ์สำนักงาน<br />ให้เหมาะสม
      </h2>

      {/* Items */}
      <div style={{ padding: "0 24px", display: "flex", flexDirection: "column", gap: "28px" }}>
        {items.map((item, index) => (
          <div key={index}>
            {/* Image + bullets */}
            <div style={{
              display: "flex",
              gap: "14px",
              flexDirection: index % 2 === 1 ? "row-reverse" : "row",
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