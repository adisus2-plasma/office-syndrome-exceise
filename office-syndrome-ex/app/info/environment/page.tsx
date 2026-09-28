"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

const items = [
  {
    title: "แสงสว่าง",
    image: "lighting",
    bullets: [
      "ควรมีทั้งแสงไฟและแสงจากธรรมชาติ",
      "แสงไม่สว่างเกินหรือน้อยเกินไป",
      "ต้องไม่มีแสงสะท้อนที่หน้าจอ",
    ],
  },
  {
    title: "สีผนังห้อง",
    image: "room-colors",
    bullets: [
      "ควรเป็นสีที่ให้ความรู้สึกสว่างและสบายตา",
      "หลีกเลี่ยงการใช้สีสด ร้อนแรง",
    ],
  },
  {
    title: "การเพิ่มพื้นที่สีเขียว",
    image: "plants",
    bullets: [
      "อาจเพิ่มต้นไม้ ดอกไม้เพื่อความผ่อนคลาย",
      "ช่วยลดความเมื่อยล้าของสายตาได้",
    ],
  },
  {
    title: "เสียง",
    image: "noise",
    bullets: [
      "ไม่ควรมีเสียงรบกวน เช่น มอเตอร์ เครื่องจักรเพราะจะเกิดความเครียด ความดันสูง และระบบย่อยอาหาร ผิดปกติ",
      "อาจมีเสียงดนตรีเบาๆเพิ่มความผ่อนคลาย แต่ขึ้นอยู่กับความเหมาะสม",
    ],
  },
  {
    title: "อุณหภูมิ",
    image: "temperature",
    bullets: [
      "ต้องไม่ร้อนอบอ้าว จะทำให้เพลียง่วงนอน ทำงานได้ไม่เต็มที่",
      "ไม่เย็นจนเกินไป จะทำให้ร่างกายเฉยชา ไม่ตื่นตัว",
      "อุณหภูมิที่เหมาะสมอยู่ที่ 19-26 องศาเซลเซียส",
    ],
  },
];

export default function EnvironmentSetupPage() {
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

        <h2 className={styles.sectionTitle} lang="th">การปรับสภาพแวดล้อมใน<br />ที่ทำงานให้เหมาะสม</h2>

        <div className={styles.environment} lang="th">
          {items.map((item, index) => (
            <section key={item.image} className={styles.item} data-reverse={index % 2 === 1} data-environment={item.image} aria-labelledby={`heading-${item.image}`}>
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
