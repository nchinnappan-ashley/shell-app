"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

interface CardItem {
  id: string;
  title: string;
  image: string;
}

// A small catalog of demo items (remote images; using <img> not next/image)
const CATALOG: CardItem[] = [
  { id: "1", title: "Lisbon Unveiled: A 5-Day Cultural and Culinary Journey", image: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=1080&auto=format&fit=crop" },
  { id: "2", title: "Unforgettable 3-day Itinerary in Lagos, Portugal", image: "https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&w=1080&auto=format&fit=crop" },
  { id: "3", title: "A Weekend Getaway in Historic Kingston, NY", image: "https://images.unsplash.com/photo-1529927066849-6b5b27a7f06b?q=80&w=1080&auto=format&fit=crop" },
  { id: "4", title: "A Serene 2-Day Escape to Isla Holbox", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1080&auto=format&fit=crop" },
  { id: "5", title: "Exploring Ho Chi Minh City: 3-Day Guide", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1080&auto=format&fit=crop" },
  { id: "6", title: "5-Day Gjirokaster Adventure", image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1080&auto=format&fit=crop" },
  { id: "7", title: "Business Analytics Dashboard", image: "https://images.unsplash.com/photo-1551281044-8c5d2a09cf3f?q=80&w=1080&auto=format&fit=crop" },
  { id: "8", title: "Financial Reports & Analysis", image: "https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1080&auto=format&fit=crop" },
  { id: "9", title: "Street Fashion Editorial", image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1080&auto=format&fit=crop" },
  { id: "10", title: "Old Town Architecture Walk", image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1080&auto=format&fit=crop" },
  { id: "11", title: "Temple Lights at Dusk", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1080&auto=format&fit=crop" },
  { id: "12", title: "Night Cityscape", image: "https://images.unsplash.com/photo-1518306727298-4c17e1bf5e10?q=80&w=1080&auto=format&fit=crop" },
  { id: "13", title: "Minimal Portrait", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1080&auto=format&fit=crop" },
  { id: "14", title: "Courtyard Stroll", image: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1080&auto=format&fit=crop" },
  { id: "15", title: "Colorful Alley", image: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da?q=80&w=1080&auto=format&fit=crop" },
];

// Create a longer list by repeating catalog with unique IDs
const makePage = (page: number): CardItem[] =>
  CATALOG.map((c, idx) => ({ ...c, id: `${page}-${c.id}-${idx}` }));

export default function ForYouMasonry() {
  const [pagesLoaded, setPagesLoaded] = useState(1);
  const items = useMemo(() => Array.from({ length: pagesLoaded }, (_, i) => makePage(i + 1)).flat(), [pagesLoaded]);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const masonryRef = useRef<HTMLDivElement | null>(null);

  // Infinite scroll sentinel
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setPagesLoaded((p) => Math.min(p + 1, 6));
        }
      },
      { rootMargin: "400px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Scroll-triggered 3D reveal (smoove-like)
  useEffect(() => {
    const root = masonryRef.current;
    if (!root) return;
    const cards = Array.from(root.querySelectorAll('[data-reveal]')) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add('smoove-in');
            el.classList.remove('smoove-init');
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );
    cards.forEach((el, idx) => {
      (el.style as any).transitionDelay = `${(idx % 8) * 40}ms`;
      io.observe(el);
    });
    return () => io.disconnect();
  }, [items]);

  return (
    <div className="max-w-7xl mx-auto">


      {/* Masonry via CSS columns */}
      <div ref={masonryRef} className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6 gap-5 [column-fill:_balance]" style={{ perspective: '1000px' }}>
        <div className="contents">
          {items.map((card, idx) => {
            const v = (idx % 4);
            const dir = v === 0 ? 'left' : v === 1 ? 'right' : v === 2 ? 'up' : 'down';
            return (
              <article
                key={card.id}
                data-reveal
                data-3d={dir}
                className="group mb-5 break-inside-avoid rounded-xl overflow-hidden bg-white ring-1 ring-gray-200/60 hover:ring-gray-300 shadow-[0_1px_2px_rgba(16,24,40,.04)] hover:shadow-md transition-all duration-700 ease-out will-change-transform hover:-translate-y-0.5 smoove-init"
              >
                <img src={card.image} alt={card.title} loading="lazy" className="w-full h-auto object-cover" />
                <div className="p-3">
                  <h3 className="text-sm font-medium text-gray-800" style={{display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'}}>
                    {card.title}
                  </h3>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Sentinel for infinite loading */}
      <div ref={sentinelRef} className="h-10" />

      <style jsx>{`
        [data-reveal] { transform-origin: center; opacity: 0; transform-style: preserve-3d; }
        [data-reveal].smoove-in { opacity: 1; transform: translate3d(0,0,0) rotateX(0) rotateY(0) rotateZ(0) scale(1); }
        [data-reveal].smoove-init[data-3d="left"]  { transform: translate3d(-40px, 0, -60px) rotateY(12deg) rotateZ(-1deg); }
        [data-reveal].smoove-init[data-3d="right"] { transform: translate3d(40px, 0, -60px) rotateY(-12deg) rotateZ(1deg); }
        [data-reveal].smoove-init[data-3d="up"]    { transform: translate3d(0, -40px, -60px) rotateX(12deg); }
        [data-reveal].smoove-init[data-3d="down"]  { transform: translate3d(0, 40px, -60px) rotateX(-12deg); }
      `}</style>
    </div>
  );
}

