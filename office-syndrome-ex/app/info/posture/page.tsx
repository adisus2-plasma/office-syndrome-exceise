"use client";

import { useRouter } from "next/navigation";

export default function ErgonomicsPosturePage() {
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
        Ergonomics
      </h1>
      <p style={{ textAlign: "center", fontSize: "13px", color: "#555", lineHeight: 1.7, margin: "0 24px 36px" }}>
        การยศาสตร์ (Ergonomics)<br />
        คือ ศาสตร์แห่งการปรับเปลี่ยนสภาพแวดล้อมที่ทำงาน<br />
        เพื่อเพิ่มประสิทธิภาพในการทำงาน ความสะดวกสบาย<br />
        และลดความเสี่ยงด้านสุขภาพ
      </p>

      {/* Section 1 */}
      <div style={{ padding: "0 24px", marginBottom: "32px" }}>
        <h2 style={{ fontWeight: 900, fontSize: "20px", color: "#1a1a18", margin: "0 0 12px" }}>
          การปรับเปลี่ยนท่าทางการทำงาน
        </h2>
        <p style={{ fontSize: "13px", color: "#444", lineHeight: 1.8, margin: 0, textAlign: "center" }}>
          การนั่งทำงานต่อเนื่องมากกว่า 4<br />
          ชั่วโมงต่อวันจะเพิ่มความเสี่ยงต่อการเกิดความ<br />
          มผิดปกติของระบบกระดูกและกล้ามเนื้อ<br />
          เมื่อเวลาผ่านไป การนั่งจะค่อยๆ ย่อตัวลง
        </p>
      </div>

      {/* Section 2: To Do List */}
      <div style={{ padding: "0 24px", marginBottom: "36px" }}>
        <h2 style={{ fontWeight: 900, fontSize: "20px", color: "#1a1a18", margin: "0 0 12px" }}>
          To Do List
        </h2>
        <ul style={{ margin: 0, padding: "0 0 0 18px", fontSize: "13px", color: "#444", lineHeight: 2 }}>
          <li>ควรเหยียดหลังให้ตึงตลอดเวลา</li>
          <li>นั่งให้เต็มก้นหรือชิดพนักพิง</li>
          <li>วางฝ่าเท้าราบไปกับพื้น</li>
          <li>ควรพักสายตา โดยใช้กฎ 20-20-20 คือ การพักสายตาทุก 20 นาที มองออกไป 20 ฟุต หรือหลับตา 20 วินาที</li>
        </ul>
      </div>

      {/* Section 3 */}
      <div style={{ padding: "0 24px", marginBottom: "40px" }}>
        <h2 style={{ fontWeight: 900, fontSize: "20px", color: "#1a1a18", margin: "0 0 12px", textAlign: "center" }}>
          การบริหารร่างกายเป็นประจำ
        </h2>
        <p style={{ fontSize: "13px", color: "#444", lineHeight: 1.8, margin: 0, textAlign: "center" }}>
          การขยับร่างกายระหว่างทำงาน<br />
          หรือการยืดเหยียดกล้ามเนื้อเป็นประจำ<br />
          สามารถช่วยลดอาการปวดเมื่อยของกล้ามเนื้อและเส้นเอ็น<br />
          ลดความเสี่ยงของโรคทางระบบกระดูกและกล้ามเนื้อได้
        </p>
      </div>

      {/* CTA Button */}
      <div style={{ padding: "0 24px" }}>
        <button
          onClick={() => router.push("/exercise")}
          style={{
            width: "100%",
            background: "#8fe44a",
            border: "none",
            borderRadius: "100px",
            padding: "18px",
            fontSize: "16px",
            fontWeight: 600,
            color: "#1a1a18",
            cursor: "pointer",
          }}
        >
          Let's go to exercise
        </button>
      </div>

    </main>
  );
}