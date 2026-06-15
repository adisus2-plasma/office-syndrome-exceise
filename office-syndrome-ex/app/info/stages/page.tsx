"use client";

import { useRouter } from "next/navigation";

const stages = [
  {
    number: 1,
    description: "ในระยะแรกอาการปวดล้าจะเป็นๆ หายๆ ระหว่างการทำงาน และอาการจะหายไปเมื่อละจากการทำงาน",
    note: "อาการในขั้นนี้จะยังไม่ส่งผลกระทบต่อร่างกาย สามารถรักษาให้หายได้",
  },
  {
    number: 2,
    description: "ในระยะกลาง อาการจะเริ่มเห็นได้ชัดตั้งแต่เริ่มนั่งทำงาน และไม่หายไปแม้จะหยุดทำงานแล้ว อาจรบกวนกระทั่งการนอนหลับพักผ่อนในตอนกลางคืน",
    note: "อาการในขั้นนี้บางรายอาจมีอาการยาวนานเป็นเดือน แต่สามารถรักษาให้หายได้ หากให้ความสนใจมากพอ",
  },
  {
    number: 3,
    description: "ในระยะสุดท้าย อาการจะรุนแรงมาก รู้สึกยากที่จะทำอะไรต่างๆ แม้ไม่ใช่งานที่หนัก อาจเกิดขึ้นตลอดเวลา และไม่หายเป็นปี",
    note: "อาการในขั้นนี้ จะรักษาค่อนข้างยาก อาจต้องใช้ระยะเวลานานในการรักษา",
  },
];

export default function StagesPage() {
  const router = useRouter();

  return (
    <main style={{ minHeight: "100dvh", background: "#fff", fontFamily: "sans-serif", paddingBottom: "48px" }}>

      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", padding: "16px 20px 0", position: "relative" }}>
        <button onClick={() => router.back()} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "22px", color: "#1a1a18" }}>‹</button>
        <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", width: "48px", height: "6px", borderRadius: "3px", background: "#c0bdb8" }} />
      </div>

      {/* Title */}
      <h1 style={{ textAlign: "center", fontWeight: 900, fontSize: "30px", lineHeight: 1.2, margin: "20px 28px 32px", color: "#1a1a18" }}>
        Stages of<br />office sydrom
      </h1>

      {/* Stage list */}
      <div style={{ padding: "0 24px", display: "flex", flexDirection: "column", gap: "32px" }}>
        {stages.map((stage) => (
          <div key={stage.number} style={{ display: "flex", gap: "14px" }}>
            {/* Left: dot + line */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "4px" }}>
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#c0bdb8", flexShrink: 0 }} />
              <div style={{ width: "2px", flex: 1, background: "#e0ddd8", marginTop: "6px" }} />
            </div>

            {/* Right: content */}
            <div style={{ flex: 1, paddingBottom: "8px" }}>
              <h2 style={{ fontWeight: 900, fontSize: "20px", color: "#1a1a18", margin: "0 0 8px" }}>
                Stage {stage.number}
              </h2>
              <p style={{ fontSize: "13px", color: "#444", lineHeight: 1.75, margin: "0 0 14px" }}>
                {stage.description}
              </p>
              {/* Note box */}
              <div style={{
                background: "#f0ede8",
                borderRadius: "16px",
                padding: "14px 16px",
                textAlign: "center",
              }}>
                <p style={{ fontSize: "13px", color: "#555", lineHeight: 1.7, margin: 0 }}>
                  {stage.note}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Caution section */}
      <div style={{ padding: "40px 24px 0" }}>
        {/* Icon + title */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
          <div style={{
            width: "64px",
            height: "64px",
            background: "#fef3c7",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
              <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" fill="#fde68a" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="12" y1="9" x2="12" y2="13" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
              <line x1="12" y1="17" x2="12.01" y2="17" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h2 style={{ fontWeight: 900, fontSize: "22px", color: "#1a1a18", margin: 0 }}>Caution</h2>
        </div>

        <p style={{ fontSize: "13px", color: "#444", lineHeight: 1.8, margin: "0 0 16px" }}>
          พนักงานออฟฟิศมักมีปัญหาเกี่ยวกับระบบกระดูกและกล้ามเนื้อ
        </p>
        <p style={{ fontSize: "13px", color: "#444", lineHeight: 1.8, margin: 0 }}>
          หากภาวะดังกล่าวไม่รีบรักษาหรือมีการเปลี่ยนแปลงพฤติกรรมการทำงานอย่างเหมาะสม อาจส่งผลกระทบต่อสุขภาพในระยะยาว และนำไปสู่ภาวะแทรกซ้อนที่รุนแรง เช่น หมอนรองกระดูกกับเส้นประสาท กระดูกสันหลังคด และอาการแขนขาอ่อนแรงได้
        </p>
      </div>

    </main>
  );
}