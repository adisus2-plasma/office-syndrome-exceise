"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

const exercises = [
  { id: 1, label: "Eye", route: "/exercise/eye" },
  { id: 2, label: "Neck & Shoulder", route: "/exercise/neck" },
  { id: 3, label: "Back & waist", route: "/exercise/back" },
  { id: 4, label: "Arm & Hand", route: "/exercise/arm" },
  { id: 5, label: "Leg & Foot", route: "/exercise/leg" },
];

const informations = [
  {
    group: "About Office Syndrome",
    items: [
      { en: "What's Office syndrome?", th: "ทำความรู้จักโรค ออฟฟิศซินโดรม", route: "/info/what-is" },
      { en: "Stages of office syndrome", th: "ระยะอาการของโรคออฟฟิศซินโดรม", route: "/info/stages" },
    ],
  },
  {
    group: "Ergonomics",
    items: [
      { en: "Equipment Setup", th: "การปรับอุปกรณ์สำนักงานให้เหมาะสม", route: "/info/equipment" },
      { en: "Environment Setup", th: "การปรับสภาพแวดล้อมให้เหมาะสม", route: "/info/environment" },
      { en: "Ergonomics Posture", th: "การปรับเปลี่ยนท่าทางการทำงาน", route: null },
    ],
  },
];

export default function ExercisePage() {
  const router = useRouter();
  const [tab, setTab] = useState<"exercise" | "info">("exercise");
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) setTab("info");      // swipe left → info
      else setTab("exercise");           // swipe right → exercise
    }
    touchStartX.current = null;
  };

  return (
    <main
      style={{
        height: "100dvh",
        background: "#fff",
        fontFamily: "sans-serif",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Drag handle */}
      <div style={{ display: "flex", justifyContent: "center", paddingTop: "16px" }}>
        <div style={{ width: "48px", height: "6px", borderRadius: "3px", background: "#c0bdb8" }} />
      </div>

      {/* Scrollable content — swipeable */}
      <div
        style={{ flex: 1, overflowY: "auto", padding: "24px 20px 16px" }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {tab === "exercise" ? (
          <>
            <h2 style={{ textAlign: "center", fontWeight: 900, fontSize: "28px", margin: "0 0 24px" }}>
              Exercise
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {exercises.map((ex) => (
                <div
                  key={ex.id}
                  onClick={() => ex.route && router.push(ex.route)}
                  style={{
                    position: "relative",
                    height: "90px",
                    borderRadius: "100px",
                    overflow: "hidden",
                    cursor: "pointer",
                    background: "#d4d1cb",
                    border: "2px dashed #b0aca6",
                  }}
                >
                  {/* <Image src={`/${ex.id}.jpg`} alt={ex.label} fill style={{ objectFit: "cover" }} /> */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0 28px",
                    }}
                  >
                    <span style={{ fontWeight: 700, fontSize: "18px", color: "#fff" }}>{ex.label}</span>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="3"/>
                      <circle cx="8.5" cy="8.5" r="1.5"/>
                      <path d="M21 15l-5-5L5 21"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            {informations.map((section) => (
              <div
                key={section.group}
                style={{
                  background: "#e8e5e0",
                  borderRadius: "20px",
                  padding: "20px 16px",
                  marginBottom: "16px",
                }}
              >
                <h2 style={{ textAlign: "center", fontWeight: 900, fontSize: "22px", margin: "0 0 16px" }}>
                  {section.group}
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {section.items.map((item) => (
                    <div
                      key={item.en}
                      onClick={() => item.route && router.push(item.route)}
                      style={{
                        background: "#c0bdb8",
                        borderRadius: "100px",
                        padding: "14px 20px",
                        cursor: "pointer",
                        textAlign: "center",
                      }}
                    >
                      <p style={{ margin: 0, fontWeight: 500, fontSize: "15px", color: "#fff" }}>{item.en}</p>
                      <p style={{ margin: "2px 0 0", fontSize: "12px", color: "rgba(255,255,255,0.8)" }}>{item.th}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      {/* Tab switcher — draggable pill */}
      <div style={{ padding: "12px 20px 32px" }}>
        <div
          style={{
            position: "relative",
            background: "#d4d1cb",
            borderRadius: "100px",
            padding: "6px",
            display: "flex",
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Sliding background pill */}
          <div
            style={{
              position: "absolute",
              top: "6px",
              bottom: "6px",
              width: "calc(50% - 6px)",
              background: "#555",
              borderRadius: "100px",
              transform: tab === "exercise" ? "translateX(0)" : "translateX(calc(100% + 4px))",
              transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
              left: "6px",
            }}
          />

          {/* Exercise side: icon when active, text when inactive */}
          <button
            onClick={() => setTab("exercise")}
            style={{
              flex: 1,
              position: "relative",
              zIndex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              border: "none",
              borderRadius: "100px",
              padding: "14px 20px",
              cursor: "pointer",
            }}
          >
            {tab === "exercise" ? (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29l-1.43-1.43z"/>
              </svg>
            ) : (
              <span style={{ fontWeight: 700, fontSize: "15px", color: "#555" }}>Exercise</span>
            )}
          </button>

          {/* Info side: icon when active, text when inactive */}
          <button
            onClick={() => setTab("info")}
            style={{
              flex: 1,
              position: "relative",
              zIndex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              border: "none",
              borderRadius: "100px",
              padding: "14px 20px",
              cursor: "pointer",
            }}
          >
            {tab === "info" ? (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 18H7V4h10v16z"/>
                <path d="M9 6h6v2H9zm0 4h6v2H9zm0 4h4v2H9z"/>
              </svg>
            ) : (
              <span style={{ fontWeight: 700, fontSize: "15px", color: "#555" }}>Informations</span>
            )}
          </button>
        </div>
      </div>
    </main>
  );
}