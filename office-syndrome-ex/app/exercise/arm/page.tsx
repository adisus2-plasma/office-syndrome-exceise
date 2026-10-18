"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useVisibleVideo } from "../../hooks/use-visible-video";
import styles from "./page.module.css";

const videos = [
  {
    id: 1,
    title: "Shoulder Extension Stretch",
    src: "/videos/arm-1.mp4",
    frame: "Group 19.png",
    thaiTitle: "ท่ายืดไหล่ และต้นแขน\n(Shoulder Extension Stretch)",
    benefits: [
      "ช่วยยืดกล้ามเนื้อบริเวณต้นแขนด้านหน้า (Biceps)",
      "ช่วยยืดกล้ามเนื้อคลุมหัวไหล่ด้านนอกสุด (Deltoid)",
      "ช่วยยืดกลุ่มกล้ามเนื้อบริเวณหน้าอก (Pectoralis)",
    ],
  },
  {
    id: 2,
    title: "Wrist Flexor Extension Stretch",
    src: "/videos/arm-2.mp4",
    frame: "Group 18.png",
    thaiTitle: "ท่ายืดปลายแขนและข้อมือ\n(Wrist Flexor Extension Stretch)",
    benefits: [
      "ช่วยยืดกล้ามเนื้อปลายแขนด้านหน้า\n\n(Flexor Carpi Radialis)\n(Palmaris Longus)\n(Flexor Carpi Ulnaris)",
    ],
  },
];

function ExerciseVideo({ video }: { video: (typeof videos)[number] }) {
  const [ready, setReady] = useState(false);
  const videoRef = useVisibleVideo();

  return (
    <section className={styles.exercise} aria-labelledby={`exercise-${video.id}`}>
      <h2 id={`exercise-${video.id}`}>{video.id}. {video.title}</h2>
      <div className={styles.frame}>
        <Image src={`/photos/bg&text menu bar/${video.frame}`} alt="" fill sizes="(max-width: 500px) 94vw, 470px" className={styles.frameArtwork} preload={video.id === 1} />
        <div className={styles.player}>
          <video
            ref={videoRef}
            muted
            loop
            src={video.src}
            controls={ready}
            playsInline
            preload="none"
            aria-label={video.title}
            aria-hidden={!ready}
            tabIndex={ready ? 0 : -1}
            className={styles.video}
            data-ready={ready}
            onLoadedData={() => setReady(true)}
            onError={() => setReady(false)}
          />
          {!ready && (
            <div className={styles.placeholder} role="img" aria-label={`${video.title}: video not available yet`}>
              <svg viewBox="0 0 140 110" aria-hidden="true">
                <path d="M39 9H71Q98 9 98 36V82Q98 105 74 105H31Q6 105 6 81V36Q6 9 31 9Z" />
                <path d="M98 40 117 27Q131 18 131 36V77Q131 94 117 85L98 72" />
                <circle cx="65" cy="43" r="9" />
              </svg>
            </div>
          )}
        </div>
      </div>
      <div className={styles.explanation} lang="th">
        <h3>{video.thaiTitle}</h3>
        <p>มีประโยชน์อย่างไร ?</p>
        <ul>{video.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
      </div>
    </section>
  );
}

export default function ArmHandPage() {
  const router = useRouter();

  return (
    <main className={styles.page}>
      <div className={styles.sheet}>
        <header className={styles.header}>
          <button type="button" className={styles.back} onClick={() => router.back()} aria-label="Go back">
            <svg viewBox="0 0 24 32" aria-hidden="true"><path d="M18 3 5 16l13 13" /></svg>
          </button>
          <Image src="/photos/logo/logotrigrr 1.png" alt="TrigrR" width={606} height={217} className={styles.logo} preload />
        </header>
        <h1 className={styles.title}>
          <Image src="/photos/bg&text menu bar/Group 30.png" alt="Arm & Hand" width={301} height={107} preload />
        </h1>
        <div className={styles.exercises}>
          {videos.map((video) => <ExerciseVideo key={video.id} video={video} />)}
        </div>
      </div>
    </main>
  );
}
