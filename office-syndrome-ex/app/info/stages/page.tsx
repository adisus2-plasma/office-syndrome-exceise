"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

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
    <main className={styles.page}>
      <article className={styles.sheet}>
        <header className={styles.header}>
          <button type="button" className={styles.back} onClick={() => router.back()} aria-label="Go back">
            <svg viewBox="0 0 24 32" aria-hidden="true"><path d="M18 3 5 16l13 13" /></svg>
          </button>
          <Image src="/photos/logo/logotrigrr 1.png" alt="TrigrR" width={606} height={217} className={styles.logo} preload />
        </header>

        <h1 className={styles.title}>Stages of<br />office syndrome</h1>

        <ol className={styles.timeline}>
          {stages.map((stage) => (
            <li key={stage.number} className={styles.stage}>
              <h2>Stage {stage.number}</h2>
              <p className={styles.description} lang="th">{stage.description}</p>
              <div className={styles.note} lang="th"><p>{stage.note}</p></div>
            </li>
          ))}
        </ol>

        <section className={styles.caution} aria-labelledby="caution-heading">
          <div className={styles.cautionHeader}>
            <svg className={styles.warning} viewBox="0 0 90 82" aria-hidden="true">
              <path d="M40 5Q45-3 50 5L87 70Q92 79 82 79H8Q-2 79 3 70Z" fill="#ffe0a0" stroke="#29251f" strokeWidth="1" />
              <path d="M42 29Q45 24 48 29L46 58Q45 62 44 58Z" fill="#ff535c" stroke="#29251f" strokeWidth="1" />
              <circle cx="45" cy="66" r="3.2" fill="#ff535c" stroke="#29251f" strokeWidth="1" />
            </svg>
            <h2 id="caution-heading">Caution</h2>
          </div>
          <div className={styles.cautionText} lang="th">
            <p>พนักงานออฟฟิศมักมีปัญหาเกี่ยวกับระบบกระดูกและกล้ามเนื้อ</p>
            <p>หากภาวะดังกล่าวไม่รีบรักษาหรือมีการเปลี่ยนแปลงพฤติกรรมการทำงานอย่างเหมาะสม อาจส่งผลกระทบต่อสุขภาพในระยะยาว และนำไปสู่ภาวะแทรกซ้อนที่รุนแรง เช่น หมอนรองกระดูกทับเส้นประสาท กระดูกสันหลังคด และอาการแขนขาอ่อนแรงได้</p>
          </div>
        </section>
      </article>
    </main>
  );
}
