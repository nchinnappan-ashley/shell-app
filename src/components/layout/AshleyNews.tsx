"use client";

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { NewspaperIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export type NewsItem = {
  id: string;
  title: string;
  summary: string;
  date: string; // ISO or readable
  tag?: string;
  href?: string;
  image?: string; // optional thumbnail
};

const sampleNews: NewsItem[] = [
  {
    id: 'n1',
    title: 'Ashley opens new distribution center',
    summary: 'Increasing capacity and improving lead times for the Southeast region.',
    date: '2025-08-12',
    tag: 'Logistics',
    image: 'https://images.unsplash.com/photo-1556125574-d7f27ec36a06?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'n2',
    title: 'Ashley Direct adds real-time order tracking',
    summary: 'Track shipments end-to-end with enhanced visibility and alerts.',
    date: '2025-07-30',
    tag: 'Product',
    image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'n3',
    title: 'Sustainability milestone achieved',
    summary: 'Manufacturing plants reduce emissions by 18% YoY with new initiatives.',
    date: '2025-07-05',
    tag: 'Sustainability',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'n4',
    title: 'New showroom grand opening',
    summary: 'Celebrating a new retail presence with community events and offers.',
    date: '2025-08-02',
    tag: 'Retail',
    image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=800&auto=format&fit=crop',
  },
];

export default function AshleyNews({ items = sampleNews }: { items?: NewsItem[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const [data, setData] = useState<NewsItem[]>(items);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const formatDate = (d: string) => {
    try {
      const dt = new Date(d);
      return mounted ? dt.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : dt.toISOString().slice(0, 10);
    } catch { return d; }
  };
  const cards = useMemo(() => data, [data]);

  // Fetch live Ashley news (WordPress listing)
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        const url = encodeURIComponent('https://ashley.biz/news/page/2/');
        const res = await fetch(`/api/news?url=${url}`, { cache: 'no-store' });
        const json = await res.json().catch(() => ({ ok: false }));
        if (!cancelled && json?.ok && Array.isArray(json.items) && json.items.length) {
          setData(json.items);
        }
      } catch {
        // keep sample fallback
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('[data-card]');
    const delta = (card?.offsetWidth || 280) + 12; // width + gap
    el.scrollBy({ left: dir * delta, behavior: 'smooth' });
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let i = 0;
    const timer = setInterval(() => {
      if (!document.hidden) {
        i = (i + 1) % (cards.length || 1);
        const card = el.querySelector<HTMLElement>('[data-card]');
        const delta = (card?.offsetWidth || 280) + 12;
        el.scrollBy({ left: delta, behavior: 'smooth' });
        // If near end, snap back to start
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - delta) {
          setTimeout(() => el.scrollTo({ left: 0, behavior: 'smooth' }), 400);
        }
      }
    }, 9000);
    return () => clearInterval(timer);
  }, [cards.length]);

  // Smoove-like 3D reveal for cards in horizontal scroller
  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;
    const els = Array.from(root.querySelectorAll('[data-reveal]')) as HTMLElement[];
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          el.classList.add('smoove-in');
          el.classList.remove('smoove-init');
          io.unobserve(el);
        }
      });
    }, { root, threshold: 0.2, rootMargin: '0px 10% -5% 10%' });
    els.forEach((el, idx) => {
      (el.style as any).transitionDelay = `${(idx % 6) * 50}ms`;
      io.observe(el);
    });
    return () => io.disconnect();
  }, [cards]);

  return (
    <section className="mt-2">
      <div className="flex items-center justify-between px-1 sm:px-2 mb-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg brand-soft brand-text flex items-center justify-center">
            <NewspaperIcon className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-semibold" style={{ color: '#0f172a' }}>Ashley News</h3>
        </div>
        <div className="flex items-center gap-1">
          <button onClick={() => scrollBy(-1)} className="p-1 rounded-md hover:bg-gray-100">
            <ChevronLeftIcon className="w-4 h-4 text-gray-600" />
          </button>
          <button onClick={() => scrollBy(1)} className="p-1 rounded-md hover:bg-gray-100">
            <ChevronRightIcon className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="relative flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
        style={{ scrollBehavior: 'smooth', perspective: '1000px' }}
      >
        {cards.map((n, i) => (
          <a
            key={n.id}
            href={n.href || '#'}
            data-reveal
            data-3d={(i % 2) ? 'right' : 'left'}
            className="group min-w-[240px] sm:min-w-[280px] max-w-[280px] snap-start bg-white rounded-xl shadow-sm ring-1 ring-gray-200/70 hover:shadow-md hover:-translate-y-0.5 transition-all duration-500 will-change-transform smoove-init"
            data-card
          >
            <div className="relative h-36 w-full overflow-hidden rounded-t-xl">
              {n.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={n.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              ) : (
                <div className="w-full h-full brand-soft" />
              )}
              {n.tag && (
                <span className="absolute top-2 left-2 text-[10px] px-2 py-0.5 rounded-full bg-white/80 backdrop-blur border border-white/60 text-gray-700">
                  {n.tag}
                </span>
              )}
            </div>
            <div className="px-3 py-2">
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-sm font-medium text-gray-900 line-clamp-2">{n.title}</h4>
                <span className="text-[10px] text-gray-500 shrink-0">{formatDate(n.date)}</span>
              </div>
              <p className="text-xs text-gray-600 mt-1 line-clamp-2">{n.summary}</p>
            </div>
          </a>
        ))}
      </div>

      <style jsx>{`
        [data-reveal] { transform-origin: center; opacity: 0; transform-style: preserve-3d; }
        [data-reveal].smoove-in { opacity: 1; transform: translate3d(0,0,0) rotateX(0) rotateY(0) rotateZ(0) scale(1); }
        [data-reveal].smoove-init[data-3d="left"]  { transform: translate3d(-40px, 0, -60px) rotateY(12deg) rotateZ(-1deg); }
        [data-reveal].smoove-init[data-3d="right"] { transform: translate3d(40px, 0, -60px) rotateY(-12deg) rotateZ(1deg); }
      `}</style>
    </section>
  );
}

