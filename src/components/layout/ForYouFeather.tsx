"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import catalogData from '@/data/catalog.json';
import { BuildingOfficeIcon, TruckIcon, CurrencyDollarIcon, UserGroupIcon, DocumentTextIcon, CubeIcon, ServerIcon, ChartBarIcon, Squares2X2Icon, SquaresPlusIcon, SparklesIcon } from '@heroicons/react/24/outline';

interface CardItem {
  id: string;
  title: string;
  image: string;
  icon?: string;
  accentStart?: string;
  accentEnd?: string;
}

// Guard against hydration issues by only rendering after mount
function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

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

const CATALOG: CardItem[] = (catalogData as CardItem[]);

function clamp01(x: number) { return Math.max(0, Math.min(1, x)); }
function easeOutCubic(t: number) { return 1 - Math.pow(1 - t, 3); }
function getCols(w: number) {
  if (w >= 1280) return 5;
  if (w >= 1024) return 4;
  if (w >= 768) return 3;
  return 2;
}

export default function ForYouFeather() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0); // 0 = collapsed, 1 = fully fanned
  // Use a fixed initial width to keep SSR/CSR markup identical; update after mount
  const [viewportW, setViewportW] = useState<number>(1200);
  const [containerW, setContainerW] = useState<number>(1200);

  // Compute progress based on scroll within a pinned (sticky) stage
  useEffect(() => {
    let raf = 0;

    const getScrollParent = (node: HTMLElement | null): HTMLElement | Window => {
      let p: HTMLElement | null = node?.parentElement || null;
      while (p) {
        const style = getComputedStyle(p);
        if (/(auto|scroll|overlay)/.test(style.overflowY)) return p;
        p = p.parentElement;
      }
      return window;
    };

    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = containerRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || 800;
        const total = Math.max(1, rect.height - vh); // amount of scrollable space while sticky
        const scrolled = Math.min(total, Math.max(0, -rect.top));
        const raw = scrolled / total;
        setProgress(clamp01(raw));
      });
    };

    const target: HTMLElement | Window = getScrollParent(containerRef.current);
    onScroll();
    target.addEventListener("scroll", onScroll as EventListener, { passive: true } as AddEventListenerOptions);
    window.addEventListener("resize", onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      target.removeEventListener("scroll", onScroll as EventListener);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const items = useMemo(() => CATALOG.slice(0, 10), []);
  const mid = Math.floor(items.length / 2);
  const openT = clamp01(progress * 2);      // 0..1 — fan open
  const gridT = clamp01((progress - 0.5) * 2); // 0..1 — morph to grid
  const openEase = easeOutCubic(openT);
  // Start with full grid layout on initial load, then animate to fan on scroll
  const initialGridT = Math.max(0, 1 - progress * 4); // 1 at start → 0 when scroll begins
  const finalGridT = gridT; // normal grid phase at end
  const currentGridT = Math.max(initialGridT, finalGridT);

  // Fan is only active in the middle phase (when not in grid mode)
  const fanT = currentGridT > 0 ? 0 : openEase;
  // Titles fade in during the first phase; ensure visible in grid phase
  const captionT = clamp01((openT - 0.2) / 0.8);
  const captionOpacity = Math.max(captionT, gridT);

  // Grid layout params (virtual grid inside sticky)
  const cols = getCols(viewportW);
  const gap = 16; // px
  const cardW = 220; const cardH = 320; // include caption approx
  // Compute full-width spacing so initial layout stretches edge-to-edge inside container
  const cw = containerW || Math.min(viewportW, 1280);
  const sidePad = 32; // increased edge padding
  const effW = Math.max(0, cw - sidePad * 2);
  const gridStartX = -effW / 2 + cardW / 2;
  const gridSpacingX = cols > 1 ? (effW - cardW) / (cols - 1) : 0;
  const baseY = 24; // more space under the “For You” pill

  // Track viewport width for responsive columns
  useEffect(() => {
    const onR = () => setViewportW(window.innerWidth);
    onR();
    window.addEventListener('resize', onR);
    return () => window.removeEventListener('resize', onR);
  }, []);

  // Measure container width to stretch the initial layout to full width
  useEffect(() => {
    const measure = () => {
      const el = containerRef.current;
      if (el) setContainerW(el.clientWidth);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  return (
    <section aria-label="For You feather" className="relative max-w-7xl mx-auto pt-3 pb-4">
      {/* Section title row (pill with fading lines) */}
      <div className="flex items-center justify-center mb-[10px]">
        <div className="w-full max-w-2xl flex items-center justify-center px-2">
          <span className="hidden sm:block flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          <span className="mx-3 inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-[13px] font-semibold ring-1 ring-gray-200 shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.6)]">For You</span>
          <span className="hidden sm:block flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        </div>
      </div>

      {/* Feather stage pinned with sticky to complete the animation before passing */}
      <div ref={containerRef} className="relative h-[120vh] w-full">
        <div className="sticky top-0 h-screen">
          <div className="absolute inset-0 flex justify-center items-start pt-1">
            {/* Stack all cards centered and fan them out via transform */}
            {items.map((card, j) => {
              const k = j - mid; // negative = left, positive = right
              const side = Math.sign(k) || 0;
              const abs = Math.abs(k);
              // Base geometry
              const baseSpread = 56 + abs * 24; // px
              // Phase 1: fan open (0 -> 0.5); Phase 2: merge to single (0.5 -> 1)
              const angleFan = side * (8 + abs * 2) * fanT; // deg
              const txFan = side * baseSpread * fanT; // px
              const tyFan = Math.min(12 + abs * 6, 60) * fanT; // px downward a bit
              // Compute target grid position (col/row)
              const idx = j;
              const col = idx % cols;
              const row = Math.floor(idx / cols);
              const gx = gridStartX + col * gridSpacingX;
              const gy = baseY + row * (cardH + gap);

              // Interpolate: initial grid -> fan -> final grid
              const centerCol = (cols - 1) / 2;
              const angleGrid = (col - centerCol) * 2; // weaker initial tilt
              const angle = angleFan * (1 - currentGridT) + angleGrid * currentGridT;
              const tx = txFan * (1 - currentGridT) + gx * currentGridT;
              const ty = tyFan * (1 - currentGridT) + gy * currentGridT;
              const z = currentGridT > 0 ? 1000 - (row * cols + col) : 100 - abs;
              const s = 1; // keep uniform scale in grid
              const initialOffset = abs * 2; // small offset so collapsed state hints at layers

              const transform = `translate3d(${tx}px, ${ty + initialOffset}px, 0) rotate(${angle}deg) scale(${s})`;

            return (
              <figure
                key={card.id}
                className="absolute will-change-transform select-none cursor-pointer"
                style={{
                  transform,
                  transition: "transform 420ms cubic-bezier(.22,1,.36,1), opacity 320ms ease",
                  zIndex: z,
                  opacity: 1,
                  pointerEvents: 'auto',
                }}
              >
                <Link href={`/apps/${card.id}`} className="overflow-hidden rounded-xl bg-white shadow-[0_1px_2px_rgba(16,24,40,.06)] hover:shadow-md transition-shadow ring-1 ring-gray-200/70 block focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-opacity-50">
                  {/* Application tile instead of image */}
                  <div
                    className="w-[220px] h-[220px] flex items-center justify-center"
                    style={{
                      background: (card.accentStart && card.accentEnd)
                        ? `linear-gradient(135deg, ${card.accentStart}, ${card.accentEnd})`
                        : `linear-gradient(135deg, color-mix(in srgb, var(--primary) 12%, white), color-mix(in srgb, var(--primary) 24%, white))`
                    }}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-white/90 text-[var(--primary)] shadow-sm flex items-center justify-center">
                      {(() => {
                        const Icon = ICONS[card.icon || ''] || Squares2X2Icon;
                        return <Icon className="w-8 h-8" />;
                      })()}
                    </div>
                  </div>
                  <figcaption className="px-3 py-2 text-[12px] font-medium text-gray-800 line-clamp-2" style={{ opacity: Math.max(captionOpacity, currentGridT) }}>
                    {card.title}
                  </figcaption>
                </Link>
              </figure>
            );
          })}
        </div>
      </div>
    </div>

    </section>
  );
}

