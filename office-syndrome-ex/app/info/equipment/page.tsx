"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

const items = [
  {
    title: "เก้าอี้",
    image: "chair",
    bullets: [
      "ขนาดต้องเหมาะสมกับแต่ละบุคคล",
      "ปรับระดับสูง-ต่ำได้",
      "พนักพิงต้องสามารถปรับระดับได้",
      "มีที่เท้าแขน",
      "ต้องมีล้อที่แข็งแรงไม่ลื่นเกินหรือฝืดเกิน",
    ],
  },
  {
    title: "โต๊ะ",
    image: "desk",
    bullets: [
      "ควรสูงจากพื้นประมาณ 65-70 เซนติเมตร",
      "ของบนโต๊ะเก็บให้เป็นระเบียบ",
      "ใต้โต๊ะไม่ควรนำสิ่งของมาวางเพื่อให้มีพื้นที่เพียงพอในการสอดขาใต้โต๊ะ",
    ],
  },
  {
    title: "หน้าจอคอมพิวเตอร์",
    image: "monitor",
    bullets: [
      "โดยขอบบนของหน้าจอไม่สูงกว่าสายตาเพื่อให้มองเล็กน้อยประมาณ 10-15 องศา ช่วยลดอาการปวดตาและคอ",
      "ควรนั่งห่างจากหน้าจอประมาณ 45-70 เซนติเมตร",
    ],
  },
  {
    title: "แป้นพิมพ์",
    image: "keyboard",
    bullets: [
      "ควรอยู่ในระดับต่ำกว่าโต๊ะทำงาน",
      "หรือสูงสุดคือระดับเดียวกับโต๊ะ",
      "แขนสองข้างขนานกับพื้นเอียงลงเล็กน้อยศอกอยู่ข้างลำตัว ข้อมือต้องอยู่ในระดับเดียวกับแขน",
    ],
  },
  {
    title: "เมาส์",
    image: "mouse",
    bullets: [
      "ควรอยู่ด้านข้างของผู้ใช้งาน",
      "ต้นแขนแนบลำตัวไม่เหยียดแขน",
      "อาจมีที่รองข้อมือช่วยให้ข้อมืออยู่ในแนวตรง",
    ],
  },
];

export default function EquipmentSetupPage() {
  const router = useRouter();

  return (
    <main className={styles.page}>
      <article className={styles.sheet}>
        <header className={styles.header}>
          <button type="button" className={styles.back} onClick={() => router.back()} aria-label="Go back">
            <svg viewBox="0 0 24 32" aria-hidden="true"><path d="M18 3 5 16l13 13" /></svg>
          </button>
          <Image src="/photos/logo/logotrigrr 1.png" alt="TrigrR" width={606} height={217} className={styles.logo} preload />
        </header>

        <h1 className={styles.title}>Ergonomics</h1>
        <p className={styles.introduction} lang="th">
          การยศาสตร์ (Ergonomics)<br />
          คือ ศาสตร์แห่งการปรับเปลี่ยนสภาพแวดล้อมที่ทำงาน เพื่อเพิ่มประสิทธิภาพในการทำงาน ความสะดวกสบาย และลดความเสี่ยงด้านสุขภาพ
        </p>

        <h2 className={styles.sectionTitle} lang="th">การปรับอุปกรณ์สำนักงาน<br />ให้เหมาะสม</h2>

        <div className={styles.equipment} lang="th">
          {items.map((item, index) => (
            <section key={item.image} className={styles.item} data-reverse={index % 2 === 1} data-equipment={item.image} aria-labelledby={`heading-${item.image}`}>
              <div className={styles.artwork}>
                <Image src={`/photos/info/${item.image}.webp`} alt={item.title} fill sizes="(max-width: 500px) 43vw, 215px" preload={index === 0} />
              </div>
              <div className={styles.details}>
                <h3 id={`heading-${item.image}`}>{item.title}</h3>
                <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              </div>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
