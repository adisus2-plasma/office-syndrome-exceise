"use client";

import Image from "next/image";
import Link from "next/link";
import { Suspense, useRef, useState, type PointerEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./page.module.css";

const exercises = [
  { slug: "eye", label: "Eye exercise", title: "Group 26.png", description: "การบริหารดวงตา\nเพื่อช่วยลดอาการตาล้าจาก\nการจ้องจอเป็นเวลานาน" },
  { slug: "neck", label: "Neck & Shoulder", title: "Group 26 (1).png", description: "การบริหารส่วนคอ บ่า ไหล่\nช่วยคลายกล้ามเนื้อจาก\nการนั่งเกร็งเป็นเวลานาน" },
  { slug: "back", label: "Back & Waist", title: "Group 26 (2).png", description: "การบริหารส่วนหลัง เอว\nช่วยให้หมอนรองกระดูก\nคืนสภาพจากการนั่งนาน" },
  { slug: "arm", label: "Arm & Hand", title: "Group 26 (3).png", description: "การบริหารส่วนแขน มือ นิ้ว\nช่วยยืดกล้ามเนื้อและลดอาการ\nเมื่อยจากการพิมพ์งาน" },
  { slug: "leg", label: "Leg & Foot", title: "Group 26 (4).png", description: "การบริหารส่วนขา เท้า\nช่วยลดอาการเมื่อยจากการ\nนั่งเป็นเวลานาน" },
];

const informations = [
  { group: "About Office Syndrome", items: [
    { en: "What's Office syndrome?", th: "ทำความรู้จักโรค ออฟฟิศซินโดรม", route: "/info/what-is", artwork: 7, width: 378, height: 256 },
    { en: "Stages of office syndrome", th: "ระยะอาการของโรคออฟฟิศซินโดรม", route: "/info/stages", artwork: 6, width: 371, height: 285 },
  ] },
  { group: "Ergonomics", items: [
    { en: "Equipment Setup", th: "การปรับอุปกรณ์สำนักงานให้เหมาะสม", route: "/info/equipment", artwork: 3, width: 345, height: 293 },
    { en: "Environment Setup", th: "การปรับสภาพแวดล้อมให้เหมาะสม", route: "/info/environment", artwork: 4, width: 349, height: 244 },
    { en: "Ergonomics Posture", th: "การปรับเปลี่ยนท่าทางการทำงาน", route: "/info/posture", artwork: 5, width: 361, height: 269 },
  ] },
];

export default function ExercisePage() {
  return (
    <Suspense fallback={<main className={styles.page} aria-busy="true" />}>
      <ExerciseMenu />
    </Suspense>
  );
}

function ExerciseMenu() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") === "info" ? "info" : "exercise";

  function setTab(nextTab: "exercise" | "info") {
    router.replace(nextTab === "info" ? "/exercise?tab=info" : "/exercise", { scroll: false });
  }
  const [active, setActive] = useState(0);
  const scroller = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; scroll: number; moved: boolean } | null>(null);
  const suppressClick = useRef(false);

  function selectExercise(index: number) {
    const element = scroller.current;
    if (!element) return;
    const bounded = Math.max(0, Math.min(exercises.length - 1, index));
    const slide = element.children[bounded] as HTMLElement;
    element.scrollTo({
      left: slide.offsetLeft - (element.clientWidth - slide.clientWidth) / 2,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }

  function syncSelection() {
    const element = scroller.current;
    if (!element) return;
    const center = element.scrollLeft + element.clientWidth / 2;
    let closest = 0;
    let distance = Infinity;
    Array.from(element.children).forEach((child, index) => {
      const slide = child as HTMLElement;
      const current = Math.abs(slide.offsetLeft + slide.clientWidth / 2 - center);
      if (current < distance) { closest = index; distance = current; }
    });
    setActive(closest);
  }

  function startDrag(event: PointerEvent<HTMLDivElement>) {
    suppressClick.current = false;
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    drag.current = { x: event.clientX, scroll: event.currentTarget.scrollLeft, moved: false };
  }

  function moveDrag(event: PointerEvent<HTMLDivElement>) {
    const start = drag.current;
    if (!start) return;
    const delta = event.clientX - start.x;
    if (!start.moved && Math.abs(delta) < 6) return;
    start.moved = true;
    suppressClick.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    event.currentTarget.style.scrollSnapType = "none";
    event.currentTarget.scrollLeft = start.scroll - delta;
  }

  function endDrag(event: PointerEvent<HTMLDivElement>) {
    const moved = drag.current?.moved;
    drag.current = null;
    event.currentTarget.style.scrollSnapType = "";
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    if (moved) {
      const element = event.currentTarget;
      const center = element.scrollLeft + element.clientWidth / 2;
      const nearest = Array.from(element.children).reduce((best, child, index) => {
        const slide = child as HTMLElement;
        const previous = element.children[best] as HTMLElement;
        return Math.abs(slide.offsetLeft + slide.clientWidth / 2 - center) < Math.abs(previous.offsetLeft + previous.clientWidth / 2 - center) ? index : best;
      }, 0);
      selectExercise(nearest);
    }
  }

  return (
    <main className={styles.page}>
      <div className={styles.frame} data-tab={tab}>
        <header className={styles.header}>
          <Link href="/" aria-label="TrigrR home">
            <Image src="/photos/logo/logotrigrr 1.png" alt="TrigrR" width={606} height={217} className={styles.logo} preload />
          </Link>
        </header>

        <section className={styles.exercisePanel} hidden={tab !== "exercise"} aria-label="Choose an exercise">
          <h1 className={styles.srOnly}>Choose an exercise</h1>
          <div
            ref={scroller}
            className={styles.carousel}
            role="region"
            aria-roledescription="carousel"
            aria-label="Exercises. Swipe sideways or use the arrow keys to choose."
            tabIndex={0}
            onScroll={syncSelection}
            onPointerDown={startDrag}
            onPointerMove={moveDrag}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onClickCapture={(event) => { if (suppressClick.current) { event.preventDefault(); suppressClick.current = false; } }}
            onKeyDown={(event) => {
              const index = event.key === "ArrowRight" ? active + 1 : event.key === "ArrowLeft" ? active - 1 : event.key === "Home" ? 0 : event.key === "End" ? exercises.length - 1 : null;
              if (index !== null) { event.preventDefault(); selectExercise(index); }
            }}
          >
            {exercises.map((exercise, index) => (
              <article key={exercise.slug} className={styles.slide} data-active={index === active} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${exercises.length}: ${exercise.label}`}>
                <h2 className={styles.exerciseTitle}>
                  <Image src={`/photos/bg&text menu bar/${exercise.title}`} alt={exercise.label} fill sizes="(max-width: 500px) 74vw, 370px" draggable={false} />
                </h2>
                <Link href={`/exercise/${exercise.slug}`} className={`${styles.card} ${index % 2 ? styles.blue : styles.yellow}`} aria-label={`Start ${exercise.label}`} tabIndex={index === active ? 0 : -1} draggable={false}>
                  <span className={styles.artwork}>
                  <Image src={`/photos/exercise/${exercise.slug}.webp`} alt="" fill sizes="(max-width: 500px) 72vw, 360px" className={styles.character} draggable={false} preload={index === 0} />
                  </span>
                </Link>
                <p className={styles.description} lang="th">{exercise.description}</p>
              </article>
            ))}
          </div>
          <div className={styles.progress}>
            <input type="range" min={0} max={4} step={1} value={active} onChange={(event) => selectExercise(Number(event.target.value))} aria-label="Choose exercise" aria-valuetext={exercises[active].label} style={{ background: `linear-gradient(to right, #a18e82 ${((active + 1) / exercises.length) * 100}%, #e5e2d7 0)` }} />
          </div>
          <p className={styles.srOnly} aria-live="polite">{exercises[active].label}, {active + 1} of {exercises.length}</p>
        </section>

        <section className={styles.infoPanel} hidden={tab !== "info"} aria-label="Informations">
          <h1 className={styles.srOnly}>Informations</h1>
          {informations.map((section, groupIndex) => (
            <section key={section.group} className={styles.infoGroup} aria-labelledby={`info-heading-${groupIndex}`}>
              <h2 id={`info-heading-${groupIndex}`}>
                {groupIndex === 0 ? <>About<br />Office Syndrome</> : section.group}
              </h2>
              <div
                className={styles.infoCards}
                role="region"
                aria-labelledby={`info-heading-${groupIndex}`}
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.target !== event.currentTarget || !["ArrowLeft", "ArrowRight"].includes(event.key)) return;
                  event.preventDefault();
                  event.currentTarget.scrollBy({
                    left: (event.key === "ArrowRight" ? 1 : -1) * event.currentTarget.clientWidth * 0.8,
                    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
                  });
                }}
              >
                {section.items.map((item) => (
                  <Link href={item.route} key={item.route} className={styles.infoCard} data-artwork={item.artwork} aria-label={`${item.en} — ${item.th}`}>
                    <Image
                      src={`/photos/menu/Group ${item.artwork}.png`}
                      alt=""
                      width={item.width}
                      height={item.height}
                      sizes="(max-width: 500px) 76vw, 380px"
                      className={styles.infoCardArtwork}
                      draggable={false}
                    />
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </section>

        <nav className={styles.tabs} aria-label="Menu sections">
          <button type="button" aria-label="Exercise" aria-pressed={tab === "exercise"} onClick={() => setTab("exercise")}>
            {tab === "exercise" ? "exercise" : <svg viewBox="0 0 32 32" aria-hidden="true"><g transform="rotate(-45 16 16)" fill="currentColor" stroke="none"><rect x="10" y="13" width="12" height="6" rx="1" /><rect x="5" y="7" width="5" height="18" rx="1" /><rect x="22" y="7" width="5" height="18" rx="1" /><rect x="1" y="11" width="4" height="10" rx="1" /><rect x="27" y="11" width="4" height="10" rx="1" /></g></svg>}
          </button>
          <button type="button" aria-label="Informations" aria-pressed={tab === "info"} onClick={() => setTab("info")}>
            {tab === "info" ? "informations" : <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M9 5 23 2v23L9 28zM9 5H6v26h22V7M9 28H6" /></svg>}
          </button>
        </nav>
      </div>
    </main>
  );
}
