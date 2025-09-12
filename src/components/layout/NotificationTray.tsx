"use client";

import React, { useCallback, useMemo, useRef, useState } from "react";

export interface NotificationItem {
  id: string;
  title: string;
  body?: string;
  time?: string;
  tone?: "info" | "success" | "warning" | "error";
}

const seed: NotificationItem[] = [
  { id: "n1", title: "Relax and chill, we've got you covered :)", body: "", time: "just now", tone: "info" },
  { id: "n2", title: "Weekly status is ready", body: "Click to view in Ashley Net", time: "3m", tone: "success" },
  { id: "n3", title: "Payroll cutoff at 5pm", body: "Don't forget to approve timesheets", time: "18m", tone: "warning" },
  { id: "n4", title: "Transport: Route change", body: "Dock 4 closed.", time: "1h", tone: "error" },
  { id: "n5", title: "AS400 planned maintenance", body: "Tonight 11pm-1am", time: "2h", tone: "info" },
];

function toneClasses(tone: NotificationItem["tone"]) {
  switch (tone) {
    case "success": return "from-emerald-300 to-emerald-700";
    case "warning": return "from-amber-300 to-orange-700";
    case "error": return "from-rose-400 to-rose-800";
    default: return "from-sky-300 to-indigo-800";
  }
}

const gradients = [
  "from-yellow-300 via-lime-500 to-teal-700",
  "from-blue-400 to-indigo-800",
  "from-rose-400 to-red-700",
  "from-slate-500 to-slate-800",
  "from-amber-400 to-orange-700",
];

export default function NotificationTray({ embedded = false, showClose = false, controls = false }: { embedded?: boolean; showClose?: boolean; controls?: boolean }) {
  const [items, setItems] = useState<NotificationItem[]>(seed);
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const posRef = useRef<Record<string, { x: number }>>({});

  const remove = useCallback((id: string) => {
    setItems((prev) => prev.filter((n) => n.id !== id));
    delete posRef.current[id];
  }, []);

  const start = useCallback((id: string, clientX: number) => {
    setDraggingId(id);
    posRef.current[id] = { x: 0 };
    (posRef.current as any)[`${id}-startX`] = clientX;
  }, []);

  const move = useCallback((id: string, clientX: number) => {
    const startX = (posRef.current as any)[`${id}-startX`];
    if (startX == null) return;
    const dx = clientX - startX;
    posRef.current[id] = { x: dx };
  }, []);

  const end = useCallback((id: string) => {
    const x = posRef.current[id]?.x ?? 0;
    setDraggingId(null);
    if (Math.abs(x) > 120) {
      // swipe threshold met -> dismiss
      remove(id);
    } else {
      // snap back
      posRef.current[id] = { x: 0 };
    }
  }, [remove]);

  const onPointerDown = (id: string) => (e: React.PointerEvent) => {
    const target = e.target as HTMLElement;
    if (target && target.closest('[data-nodrag="true"]')) {
      return; // ignore drags starting from controls/close buttons
    }
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    start(id, e.clientX);
  };
  const onPointerMove = (id: string) => (e: React.PointerEvent) => move(id, e.clientX);
  const onPointerUp = (id: string) => () => end(id);

  // derive transforms for rendering
  const transforms = useMemo(() => {
    const map: Record<string, { x: number; opacity: number; rot: number }> = {};
    for (const it of items) {
      const x = posRef.current[it.id]?.x ?? 0;
      const clamped = Math.max(-240, Math.min(240, x));
      const opacity = 1 - Math.min(1, Math.abs(clamped) / 200);
      const rot = (clamped / 240) * 6; // slight tilt
      map[it.id] = { x: clamped, opacity, rot };
    }
    return map;
  }, [items, draggingId]);

  if (items.length === 0) return null;

  const deck = items.slice(0, 5); // show up to 5 stacked
  const topId = deck[0]?.id;

  const panelClass = embedded
    ? "pointer-events-auto w-full"
    : "pointer-events-none fixed right-6 top-24 z-50 w-[420px] max-w-[92vw]";
  const offsetStep = embedded ? 12 : 24;
  const scaleStep = embedded ? 0.02 : 0.03;
  const cardHeight = embedded ? 140 : 220;
  const cardWidth = embedded ? 280 : 420;
  const stackOverlap = embedded ? offsetStep * (Math.min(deck.length, 5) - 1) : 0;
  const containerStyle: React.CSSProperties = { height: embedded ? 200 : 260, marginTop: stackOverlap };

  return (
    <aside className={panelClass}>
      <div className="relative" style={containerStyle}>
        {deck.map((n, i) => {
          const depth = i; // 0 is top
          const offsetY = -depth * offsetStep;
          const scale = 1 - depth * scaleStep;
          const z = 100 - depth;
          const t = n.id === topId ? (transforms[n.id] || { x: 0, opacity: 1, rot: 0 }) : { x: 0, opacity: 1, rot: 0 };
          const grad = gradients[depth % gradients.length] || toneClasses(n.tone);
          const isTop = n.id === topId;
          return (
            <div
              key={n.id}
              role="status"
              className={`pointer-events-auto absolute left-1/2 -translate-x-1/2 rounded-2xl shadow-xl ring-1 ring-black/5 select-none bg-gradient-to-r ${grad}`}
              style={{
                width: cardWidth,
                height: cardHeight,
                transform: `translate3d(${t.x}px, ${offsetY}px, 0) rotate(${t.rot}deg) scale(${scale})`,
                opacity: t.opacity,
                zIndex: z,
                transition: isTop ? "transform 320ms cubic-bezier(.22,1,.36,1), opacity 220ms ease" : "transform 320ms cubic-bezier(.22,1,.36,1)",
              }}
              onPointerDown={isTop ? onPointerDown(n.id) : undefined}
              onPointerMove={isTop ? onPointerMove(n.id) : undefined}
              onPointerUp={isTop ? onPointerUp(n.id) : undefined}
            >
              {showClose && isTop && (
                <button
                  type="button"
                  data-nodrag="true"
                  aria-label="Close notification"
                  className="absolute top-2 right-2 z-10 h-7 w-7 rounded-full bg-black/30 text-white/90 hover:bg-black/40 flex items-center justify-center"
                  onClick={(e) => { e.stopPropagation(); remove(n.id); }}
                >
                  ×
                </button>
              )}
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-white text-[15px] font-medium tracking-tight px-6 text-center drop-shadow-[0_1px_1px_rgba(0,0,0,.25)]">
                  {n.title}
                </div>
              </div>
            </div>
          );
        })}
        {controls && (
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2">
            <button
              type="button"
              data-nodrag="true"
              aria-label="Previous notification"
              className="h-8 w-8 rounded-full bg-white/90 text-gray-700 shadow ring-1 ring-gray-200 hover:bg-white text-transparent relative"
              onClick={() => setItems((prev) => (prev.length > 1 ? [prev[prev.length-1], ...prev.slice(0, prev.length-1)] : prev))}
            >
            <svg className="absolute inset-0 m-auto h-4 w-4 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>

            </button>
            <button
              type="button"
              data-nodrag="true"
              aria-label="Next notification"
              className="h-8 w-8 rounded-full bg-white/90 text-gray-700 shadow ring-1 ring-gray-200 hover:bg-white text-transparent relative"
              onClick={() => setItems((prev) => (prev.length > 1 ? [...prev.slice(1), prev[0]] : prev))}
            >
              <svg className="absolute inset-0 m-auto h-4 w-4 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        )}

      </div>
    </aside>
  );
}

