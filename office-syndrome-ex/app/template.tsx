"use client";

import { useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(12px)",
        transition: [
          "opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        ].join(", "),
      }}
    >
      {children}
    </div>
  );
}