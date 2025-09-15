"use client";

import React from "react";
import Link from "next/link";
import catalogData from "@/data/catalog";
import {
  BuildingOfficeIcon,
  TruckIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  DocumentTextIcon,
  CubeIcon,
  ServerIcon,
  ChartBarIcon,
  Squares2X2Icon,
  SquaresPlusIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

// Map icon names (from catalog.json) to actual components
const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  BuildingOfficeIcon,
  TruckIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  DocumentTextIcon,
  CubeIcon,
  ServerIcon,
  ChartBarIcon,
  Squares2X2Icon,
  SquaresPlusIcon,
  SparklesIcon,
};

type CardItem = {
  id: string;
  title: string;
  icon?: keyof typeof ICONS | string;
  accentStart?: string;
  accentEnd?: string;
};

const ITEMS: CardItem[] = (catalogData as CardItem[]);

// Lightweight Reveal wrapper (based on my-scroll-app/app/components/Reveal.tsx)
function Reveal({
  children,
  className = "",
  style = {},
  offset = "35%",
  threshold = 0.1,
  once = false,
  onVisibleChange,
}: React.PropsWithChildren<{
  className?: string;
  style?: React.CSSProperties;
  offset?: string;
  threshold?: number;
  once?: boolean;
  onVisibleChange?: (v: boolean) => void;
}>) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          onVisibleChange?.(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setVisible(false);
          onVisibleChange?.(false);
        }
      },
      { threshold, rootMargin: `0px 0px -${offset} 0px` }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, offset, once]);

  return (
    <div ref={ref} className={`scroll-animate ${visible ? "visible" : ""} ${className}`} style={style}>
      {children}
      <style jsx>{`
        .scroll-animate{
          opacity: var(--opacity, 0);
          transform:
            perspective(var(--perspective, 0))
            translate3d(var(--moveX, 0), var(--moveY, 0), var(--moveZ, 0))
            rotate(var(--rotate, 0deg))
            rotateX(var(--rotateX, 0deg))
            rotateY(var(--rotateY, 0deg))
            skewX(var(--skewX, 0deg))
            skewY(var(--skewY, 0deg))
            scale(var(--scale, 1));
          transition:
            transform var(--duration, 600ms) var(--easing, cubic-bezier(.22,1,.36,1)) var(--delay, 0ms),
            opacity var(--duration, 600ms) var(--easing, cubic-bezier(.22,1,.36,1)) var(--delay, 0ms);
          will-change: transform, opacity;
        }
        .scroll-animate.visible{ opacity: 1; transform: none; }
      `}</style>
    </div>
  );
}

export default function ForYouSmoove({ onSpaceAvailable, onExtraSpace }: { onSpaceAvailable?: (available: boolean, height: number) => void; onExtraSpace?: (extraAfterFirstRow: number) => void }) {
  const sectionRef = React.useRef<HTMLDivElement | null>(null);
  const visCountRef = React.useRef(0);
  const hasEverRef = React.useRef(false);
  const [contentH, setContentH] = React.useState(0);
  const gridRef = React.useRef<HTMLDivElement | null>(null);
  const getCols = () => {
    if (typeof window === 'undefined') return 2;
    if (window.matchMedia('(min-width: 1024px)').matches) return 5;
    if (window.matchMedia('(min-width: 640px)').matches) return 3;
    return 2;
  };
  const [firstRowCount, setFirstRowCount] = React.useState<number>(() => getCols());

  // measure section height and compute first row columns responsively
  React.useEffect(() => {
    const measure = () => setContentH(sectionRef.current?.offsetHeight || 0);
    const handle = () => { measure(); setFirstRowCount(getCols()); };
    handle();
    window.addEventListener('resize', handle);
    return () => window.removeEventListener('resize', handle);
  }, []);

  const computeExtra = React.useCallback(() => {
    const grid = gridRef.current;
    if (!grid) { onExtraSpace?.(0); return; }
    const total = grid.offsetHeight || 0;
    const first = grid.firstElementChild as HTMLElement | null;
    const firstH = first?.offsetHeight || 0;
    const extra = Math.max(0, total - firstH);
    onExtraSpace?.(extra);
  }, [onExtraSpace]);

  const handleVisibleChange = React.useCallback((v: boolean) => {
    const next = visCountRef.current + (v ? 1 : -1);
    visCountRef.current = Math.max(0, Math.min(ITEMS.length, next));
    if (v) hasEverRef.current = true;
    const empty = visCountRef.current === 0; // treat as empty until at least one card is visible
    const h = sectionRef.current?.offsetHeight || contentH;
    setContentH(h);
    onSpaceAvailable?.(empty, h);
    computeExtra();
  }, [onSpaceAvailable, contentH, computeExtra]);

  React.useLayoutEffect(() => {
    // Initial notify: run before paint to avoid layout flash on reload
    const notify = () => {
      const el = sectionRef.current;
      const h = el?.offsetHeight || 0;
      // First row should be visible without scroll
      visCountRef.current = firstRowCount;
      const empty = firstRowCount === 0;
      onSpaceAvailable?.(empty, h);
      computeExtra();
    };
    notify();
    // run a second time next frame in case fonts/images change metrics
    const raf = typeof window !== 'undefined' ? window.requestAnimationFrame(() => notify()) : 0;
    return () => { if (raf && typeof window !== 'undefined') window.cancelAnimationFrame(raf); };
  }, [onSpaceAvailable, firstRowCount, computeExtra]);

  return (
    <section ref={sectionRef} aria-label="For You" className="relative max-w-7xl mx-auto pt-3 pb-4">
      {/* Section title row (pill with fading lines) */}
      <div className="flex items-center justify-center mb-[10px]">
        <div className="w-full max-w-2xl flex items-center justify-center px-2">
          <span className="hidden sm:block flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          <span className="mx-3 inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-[13px] font-semibold ring-1 ring-gray-200 shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.6)]">For You</span>
          <span className="hidden sm:block flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        </div>
      </div>

      {/* Grid of cards: first row visible immediately; subsequent rows reveal on scroll */}
      <div ref={gridRef} className="foryou-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {ITEMS.map((card, i) => {
          const Icon = ICONS[card.icon || ""] || Squares2X2Icon;
          const moveX = i % 2 === 0 ? "-120px" : "120px";
          const rotateY = i % 2 === 0 ? "-8deg" : "8deg";
          const Card = (
            <Link
              href={`/apps/${card.id}`}
              onClick={(e) => { if (card.id === 'ashleydirect') { e.preventDefault(); if (typeof window !== 'undefined') window.location.href = 'http://localhost:3001/apps/ashleydirect'; } }}
              className="group block overflow-hidden rounded-xl bg-white ring-1 ring-gray-200/70 shadow-[0_1px_2px_rgba(16,24,40,.06)] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
            >
              <div
                className="w-full h-48 flex items-center justify-center"
                style={{
                  background: card.accentStart && card.accentEnd
                    ? `linear-gradient(135deg, ${card.accentStart}, ${card.accentEnd})`
                    : `linear-gradient(135deg, color-mix(in srgb, var(--primary) 12%, white), color-mix(in srgb, var(--primary) 24%, white))`,
                }}
              >
                <div className="w-16 h-16 rounded-2xl bg-white/90 text-[var(--primary)] shadow-sm flex items-center justify-center">
                  <Icon className="w-8 h-8" />
                </div>
              </div>
              <div className="px-3 py-2">
                <h3 className="text-[12px] font-medium text-gray-800 line-clamp-2">{card.title}</h3>
              </div>
            </Link>
          );
          if (i < firstRowCount) {
            // First row: render as already visible (no observer)
            return (
              <div key={card.id}>
                {Card}
              </div>
            );
          }
          return (
            <Reveal
              key={card.id}
              onVisibleChange={handleVisibleChange}
              style={{
                ["--moveX" as any]: moveX,
                ["--rotateY" as any]: rotateY,
                ["--opacity" as any]: 0,
                ["--duration" as any]: "700ms",
                ["--delay" as any]: `${(i % 6) * 80}ms`,
                ["--perspective" as any]: "800px",
              }}
            >
              {Card}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

