"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function ErgonomicsPosturePage() {
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

        <section className={styles.posture} lang="th" aria-labelledby="posture-heading">
          <h2 id="posture-heading">การปรับเปลี่ยนท่าทางการทำงาน</h2>
          <p>
            การนั่งทำงานต่อเนื่องมากกว่า 4<br />
            ชั่วโมงต่อวันจะเพิ่มความเสี่ยงต่อการเกิดความผิดปกติของระบบกระดูกและกล้ามเนื้อ<br />
            เมื่อเวลาผ่านไป การนั่งจะค่อย ๆ ย่อตัวลง
          </p>
        </section>

        <section className={styles.todo} aria-labelledby="todo-heading">
          <h2 id="todo-heading">To Do List</h2>
          <ul lang="th">
            <li>ควรเหยียดหลังให้ตึงตลอดเวลา</li>
            <li>นั่งให้เต็มก้นหรือชิดพนักพิง</li>
            <li>วางฝ่าเท้าราบไปกับพื้น</li>
            <li>ควรพักสายตา โดยใช้กฎ 20-20-20 คือ การพักสายตาทุก 20 นาที มองออกไป 20 ฟุต หรือหลับตา 20 วินาที</li>
          </ul>
        </section>

        <section className={styles.movement} lang="th" aria-labelledby="movement-heading">
          <h2 id="movement-heading">การบริหารร่างกายเป็นประจำ</h2>
          <p>
            การขยับร่างกายระหว่างทำงาน<br />
            หรือการยืดเหยียดกล้ามเนื้อเป็นประจำ<br />
            สามารถช่วยลดอาการปวดเมื่อยของกล้ามเนื้อและเส้นเอ็น ลดความเสี่ยงของโรคทางระบบกระดูกและกล้ามเนื้อได้
          </p>
        </section>

        <Link href="/exercise" className={styles.exerciseLink}>Let’s go to exercise</Link>
      </article>
    </main>
  );
}
