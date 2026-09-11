import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.home}>
      <section className={styles.poster} aria-labelledby="home-title">
        <Image
          src="/photos/BG/home.png"
          alt=""
          fill
          preload
          sizes="(max-width: 600px) 100vw, 600px"
          className={styles.background}
        />

        <h1 id="home-title" className={styles.title}>
          <span>OFFICE</span>
          <span>SYNDROME</span>
          <span className={styles.subtitle}>exercise</span>
        </h1>

        <div className={styles.character}>
          <Image
            src="/photos/other/IMG_6965.PNG"
            alt="A smiling character in a tiger costume doing a side stretch"
            width={2388}
            height={1668}
            preload
            sizes="(max-width: 600px) 272vw, 1630px"
            className={styles.characterImage}
          />
        </div>

        <Link href="/exercise" className={styles.start}>
          Let&apos;s go!
        </Link>
      </section>
    </main>
  );
}
