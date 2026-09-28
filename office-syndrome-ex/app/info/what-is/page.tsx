"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function WhatIsOfficeSyndromePage() {
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

        <h1 className={styles.title}>What’s<br />Office syndrome</h1>

        <section className={styles.introduction} aria-labelledby="about-heading">
          <div className={styles.deskArtwork}>
            <Image src="/photos/info/desk-discomfort.webp" alt="ตัวละครชุดเสือนั่งทำงานหน้าคอมพิวเตอร์และมีอาการปวดหลัง" fill sizes="(max-width: 500px) 46vw, 230px" preload />
          </div>
          <div className={styles.about} lang="th">
            <h2 id="about-heading">ออฟฟิศซินโดรม</h2>
            <p>
              คือ อาการปวดกล้ามเนื้อและเยื่อพังผืด มีสาเหตุมาจากการนั่งทำงานหลายชั่วโมง สภาพแวดล้อมที่ไม่ถูกหลักการยศาสตร์ ความเครียด และการนั่งนิ่งอยู่หน้าจอคอมพิวเตอร์เป็นเวลานานส่งผลให้กล้ามเนื้ออักเสบปวดเมื่อยตามบริเวณต่าง ๆ ของร่างกาย
            </p>
          </div>
        </section>

        <section className={styles.symptoms} aria-labelledby="symptoms-heading">
          <div className={styles.symptomsLeft}>
            <div className={styles.symptomsText} lang="th">
              <h2 id="symptoms-heading">อาการที่พบได้บ่อย</h2>
              <p>อาการปวดเมื่อยหรืออาการ<br />ชาบริเวณศีรษะ ดวงตา คอ<br />บ่า ไหล่ หลัง มือ ข้อมือ<br />นิ้วมือ ขา และเท้า</p>
            </div>
            <Image src="/photos/info/shoulder-discomfort.webp" alt="ตัวละครชุดเสือปวดคอและไหล่ขณะใช้แล็ปท็อป" width={2670} height={3485} className={styles.shoulderArtwork} sizes="(max-width: 500px) 37vw, 185px" />
          </div>
          <Image src="/photos/info/common-symptoms.webp" alt="ภาพแสดงอาการปวดศีรษะ ปวดข้อมือขณะพิมพ์งาน และปวดหลัง" width={2435} height={6000} className={styles.symptomsArtwork} sizes="(max-width: 500px) 41vw, 205px" />
        </section>
      </article>
    </main>
  );
}
