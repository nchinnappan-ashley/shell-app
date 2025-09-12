"use client";

import React from "react";

export type AdItem = {
  id: string;
  title: string;
  href?: string;
  logo?: string; // remote image url; if missing we show initials
};

const SAMPLE_ADS: AdItem[] = [
  { id: "a1", title: "Ashley Direct", href: "https://www.ashleyfurniture.com/" , logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Ashley_Furniture_Industries_logo.svg/512px-Ashley_Furniture_Industries_logo.svg.png"},
  { id: "a2", title: "Logistics Pro", href: "#" },
  { id: "a3", title: "FleetTrack", href: "#" },
  { id: "a4", title: "Coastal Shipping", href: "#" },
  { id: "a5", title: "Green Fabric", href: "#" },
  { id: "a6", title: "RetailHub", href: "#" },
  { id: "a7", title: "Insight BI", href: "#" },
  { id: "a8", title: "Cloud ERP", href: "#" },
];

function Initials({ text }: { text: string }) {
  const initials = text.split(" ").map(w => w[0]).join("").slice(0,3).toUpperCase();
  return (
    <div className="w-24 h-12 rounded-md brand-soft brand-text flex items-center justify-center text-sm font-semibold">
      {initials}
    </div>
  );
}

function Row({ items, reverse = false, duration = 40 }: { items: AdItem[]; reverse?: boolean; duration?: number }) {
  return (
    <div className={`marquee ${reverse ? "marquee-reverse" : ""}`} style={{ ['--duration' as any]: `${duration}s` }}>
      <ul className="marquee-content">
        {items.map((ad) => (
          <li key={ad.id} className="ad-item">
            <a href={ad.href || '#'} target="_blank" rel="noreferrer" className="ad-card">
              <div className="logo-wrap">
                {ad.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={ad.logo} alt={ad.title} className="logo-img"/>
                ) : (
                  <Initials text={ad.title} />
                )}
              </div>
              <div className="title">{ad.title}</div>
            </a>
          </li>
        ))}
        {/* duplicate for seamless loop */}
        {items.map((ad) => (
          <li key={`dupe-${ad.id}`} className="ad-item">
            <a href={ad.href || '#'} target="_blank" rel="noreferrer" className="ad-card">
              <div className="logo-wrap">
                {ad.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={ad.logo} alt={ad.title} className="logo-img"/>
                ) : (
                  <Initials text={ad.title} />
                )}
              </div>
              <div className="title">{ad.title}</div>
            </a>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .marquee { --gap: 0.75rem; display: grid; grid-auto-flow: column; overflow: hidden; mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent); }
        .marquee:hover .marquee-content { animation-play-state: paused; }
        .marquee-content { display: flex; align-items: center; gap: var(--gap); min-width: max-content; animation: scroll var(--duration, 40s) linear infinite; }
        .marquee-reverse .marquee-content { animation-direction: reverse; }
        .ad-item { list-style: none; }
        .ad-card { display: flex; align-items: center; gap: 0.5rem; background: white; border-radius: 0.75rem; padding: 0.5rem 0.75rem; box-shadow: 0 1px 2px rgba(0,0,0,0.04); border: 1px solid rgba(0,0,0,0.08); transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease; }
        .ad-card:hover { transform: translateY(-2px); box-shadow: 0 6px 16px rgba(0,0,0,0.08); border-color: rgba(0,0,0,0.12); }
        .logo-wrap { width: 96px; height: 48px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 0.5rem; background: rgba(0,0,0,0.02); }
        .logo-img { width: 100%; height: 100%; object-fit: contain; object-position: center; filter: saturate(1.1); transition: transform .5s ease; }
        .ad-card:hover .logo-img { transform: scale(1.03); }
        .title { font-size: 12px; color: #0f172a; white-space: nowrap; }
        @keyframes scroll { to { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
}

export default function AdCarousel({ items = SAMPLE_ADS }: { items?: AdItem[] }) {
  return (
    <section className="mt-14">
      <div className="flex items-center justify-between mb-3 px-1 sm:px-2">
        <h3 className="text-sm font-semibold" style={{ color: '#0f172a' }}>External Ads</h3>
        <span className="text-[11px] text-gray-500">Sponsored</span>
      </div>
      <div className="space-y-3">
        <Row items={items} duration={42} />
        <Row items={items.slice().reverse()} reverse duration={48} />
      </div>
    </section>
  );
}

