"use client";

import { useEffect, useRef } from "react";

/** Play visible exercise clips; pause when offscreen or the tab is hidden. */
export function useVisibleVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    let visible = false;
    let disposed = false;
    const shouldPlay = () => !disposed && visible && !document.hidden;
    const syncPlayback = () => {
      if (!shouldPlay()) {
        video.pause();
        return;
      }
      // Muted inline playback is supported by mobile autoplay policies.
      void video.play().then(() => {
        if (!shouldPlay()) video.pause();
      }).catch(() => {
        // Browser restrictions or missing files: native controls remain available.
      });
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && entry.intersectionRatio >= 0.35;
      syncPlayback();
    }, { threshold: [0, 0.35] });

    observer.observe(video);
    video.addEventListener("canplay", syncPlayback);
    document.addEventListener("visibilitychange", syncPlayback);

    return () => {
      disposed = true;
      observer.disconnect();
      video.removeEventListener("canplay", syncPlayback);
      document.removeEventListener("visibilitychange", syncPlayback);
      video.pause();
    };
  }, []);

  return ref;
}
