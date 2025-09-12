"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import data from "@/data/ashleydirect-menus.json";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";
import { StarIcon, ClockIcon, Squares2X2Icon, MagnifyingGlassIcon, Cog6ToothIcon, LinkIcon, ShoppingCartIcon, WrenchScrewdriverIcon, DocumentTextIcon, TagIcon, ChartBarIcon } from "@heroicons/react/24/outline";

// Types inferred from JSON
interface SubItem { id: number; Name: string; KeyWords?: string; }
interface Group { id: number; Name: string; SubMenuItems: SubItem[]; }

type FlatItem = { key: string; name: string; group: string; keywords: string };

const REC_KEY = "ad_recent_items"; // map: key -> ts
const BM_KEY = "ad_bookmarks"; // set: string[]

// Visual meta per group for unique cards
const GROUP_META: Record<string, { Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; color: string }>= {
  Admin: { Icon: Cog6ToothIcon, color: 'text-sky-600 bg-sky-50 ring-sky-100' },
  HotLinks: { Icon: LinkIcon, color: 'text-emerald-600 bg-emerald-50 ring-emerald-100' },
  Orders: { Icon: ShoppingCartIcon, color: 'text-violet-600 bg-violet-50 ring-violet-100' },
  'Replacement Parts': { Icon: WrenchScrewdriverIcon, color: 'text-amber-600 bg-amber-50 ring-amber-100' },
  Invoices: { Icon: DocumentTextIcon, color: 'text-rose-600 bg-rose-50 ring-rose-100' },
  Items: { Icon: TagIcon, color: 'text-cyan-600 bg-cyan-50 ring-cyan-100' },
  Reports: { Icon: ChartBarIcon, color: 'text-indigo-600 bg-indigo-50 ring-indigo-100' },
  _default: { Icon: TagIcon, color: 'text-gray-600 bg-gray-50 ring-gray-100' },
};

function useLocalMap(key: string) {
  const [map, setMap] = useState<Record<string, number>>({});
  useEffect(() => {
    try { const raw = localStorage.getItem(key); if (raw) setMap(JSON.parse(raw)); } catch {}
  }, [key]);
  const set = (next: Record<string, number>) => {
    setMap(next);
    try { localStorage.setItem(key, JSON.stringify(next)); } catch {}
  };
  return [map, set] as const;
}

function useLocalSet(key: string) {
  const [list, setList] = useState<string[]>([]);
  useEffect(() => {
    try { const raw = localStorage.getItem(key); if (raw) setList(JSON.parse(raw)); } catch {}
  }, [key]);
  const set = (next: string[]) => {
    setList(next);
    try { localStorage.setItem(key, JSON.stringify(next)); } catch {}
  };
  return [list, set] as const;
}

function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-2 mb-2">
      <div className="h-7 w-7 rounded-full brand-soft brand-text flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-sm font-semibold" style={{ color: '#0f172a' }}>{title}</h3>
    </div>
  );
}

function ItemChip({ item, bookmarked, onClick, onToggleBookmark }: { item: FlatItem; bookmarked: boolean; onClick: () => void; onToggleBookmark: () => void }) {
  return (
    <button onClick={onClick} className="group relative inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all">
      <span className="text-sm text-gray-900">{item.name}</span>
      <span className="text-[11px] text-gray-500">{item.group}</span>
      <span className="absolute -top-2 -right-2">
        <span
          role="button"
          tabIndex={0}
          onClick={(e) => { e.stopPropagation(); onToggleBookmark(); }}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); onToggleBookmark(); } }}
          aria-label={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
          className="h-6 w-6 rounded-full bg-white shadow ring-1 ring-gray-200 flex items-center justify-center text-amber-500 cursor-pointer"
        >
          {bookmarked ? <StarSolid className="w-3.5 h-3.5"/> : <StarIcon className="w-3.5 h-3.5"/>}
        </span>
      </span>
    </button>
  );
}

export default function AshleyDirectMenus() {
  const flat: FlatItem[] = useMemo(() => {
    const groups = data as Group[];
    const out: FlatItem[] = [];
    for (const g of groups) {
      for (const s of g.SubMenuItems || []) {
        out.push({ key: `${g.id}:${s.id}`, name: s.Name, group: g.Name, keywords: (s.KeyWords || '').toLowerCase() });
      }
    }
    return out;
  }, []);

  const [recMap, setRecMap] = useLocalMap(REC_KEY);
  const [bookmarks, setBookmarks] = useLocalSet(BM_KEY);
  const [q, setQ] = useState("");
  const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
  const searchResults = useMemo(() => {
    const t = normalize(q);
    if (!t) return [] as FlatItem[];
    return flat.filter(f => `${f.name} ${f.group} ${f.keywords}`.toLowerCase().includes(t)).slice(0, 24);
  }, [q, flat]);

  const markUsed = (key: string) => {
    const next = { ...recMap, [key]: Date.now() };
    // limit stored size
    const entries = Object.entries(next).sort((a,b) => b[1]-a[1]).slice(0, 200);
    const trimmed: Record<string, number> = {};
    entries.forEach(([k,v]) => trimmed[k]=v);
    setRecMap(trimmed);
  };
  const toggleBookmark = (key: string) => {
    const set = new Set(bookmarks);
    if (set.has(key)) set.delete(key); else set.add(key);
    setBookmarks(Array.from(set));
  };

  const recentItems = useMemo(() => {
    const byTime = Object.entries(recMap)
      .sort((a,b) => b[1]-a[1])
      .map(([k]) => flat.find(f => f.key === k))
      .filter(Boolean) as FlatItem[];
    return byTime.slice(0, 10);
  }, [recMap, flat]);

  const bookmarkedItems = useMemo(() => {
    return bookmarks.map(k => flat.find(f => f.key === k)).filter(Boolean) as FlatItem[];
  }, [bookmarks, flat]);

  const groupedAll = useMemo(() => {
    const groups: Record<string, FlatItem[]> = {};
    for (const f of flat) {
      groups[f.group] = groups[f.group] || [];
      groups[f.group].push(f);
    }
    return groups;
  }, [flat]);

  const router = useRouter();
  const onOpen = (it: FlatItem) => {
    markUsed(it.key);
    const name = it.name.toLowerCase();
    // Redirect to Create Order sample screen
    if (name.includes("order entry") || name.includes("create my order") || name.includes("create order")) {
      router.push("/apps/createorder");
      return;
    }
    // Placeholder for other menus
    console.log("Open", it);
  };

  return (
    <section className="space-y-6">
      {/* Search */}
      <div>
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search menus by name or keywords (e.g., Order, ATP, Invoices)"
            className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:border-transparent"
          />
        </div>
        {q && (
          <div className="mt-3">
            <SectionHeader icon={<MagnifyingGlassIcon className="w-4 h-4" />} title={`Search results (${searchResults.length})`} />
            {searchResults.length ? (
              <div className="flex flex-wrap gap-2">
                {searchResults.map(it => (
                  <ItemChip key={it.key} item={it} bookmarked={bookmarks.includes(it.key)} onClick={() => onOpen(it)} onToggleBookmark={() => toggleBookmark(it.key)} />
                ))}
              </div>
            ) : (
              <div className="text-sm text-gray-500">No matches found.</div>
            )}
          </div>
        )}
      </div>
      {/* Recently used */}
      <div>
        <SectionHeader icon={<ClockIcon className="w-4 h-4" />} title="Recently used" />
        {recentItems.length ? (
          <div className="flex flex-wrap gap-2">
            {recentItems.map(it => (
              <ItemChip key={it.key} item={it} bookmarked={bookmarks.includes(it.key)} onClick={() => onOpen(it)} onToggleBookmark={() => toggleBookmark(it.key)} />
            ))}
          </div>
        ) : (
          <div className="text-sm text-gray-500">No recent items yet. Use a menu to see it here.</div>
        )}
      </div>

      {/* Bookmarked */}
      <div>
        <SectionHeader icon={<StarIcon className="w-4 h-4" />} title="Bookmarked" />
        {bookmarkedItems.length ? (
          <div className="flex flex-wrap gap-2">
            {bookmarkedItems.map(it => (
              <ItemChip key={it.key} item={it} bookmarked={true} onClick={() => onOpen(it)} onToggleBookmark={() => toggleBookmark(it.key)} />
            ))}
          </div>
        ) : (
          <div className="text-sm text-gray-500">No bookmarks yet. Click the star on any menu to add it.</div>
        )}
      </div>

      {/* All menus */}
      <div>
        <SectionHeader icon={<Squares2X2Icon className="w-4 h-4" />} title="All menus" />
        <div className="space-y-4">
          {Object.entries(groupedAll).map(([group, items]) => {
            const meta = GROUP_META[group] || GROUP_META._default;
            const IconC = meta.Icon;
            return (
              <div key={group}>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full ring-1 ${meta.color}`}>
                    <IconC className="w-4 h-4" />
                  </span>
                  <div className="text-sm font-semibold text-gray-800">{group}</div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {items.map(it => (
                    <button
                      key={it.key}
                      onClick={() => onOpen(it)}
                      className="group relative text-left bg-white border border-gray-200 hover:border-gray-300 rounded-xl p-4 shadow-sm hover:shadow-md transition-all"
                    >
                      <div className="pr-12">
                        <div className="text-[15px] font-medium text-gray-900">{it.name}</div>
                        <div className="mt-1 text-[11px] text-gray-500">{it.group}</div>
                      </div>
                      <span className={`absolute top-3 right-3 inline-flex items-center justify-center w-9 h-9 rounded-full ring-1 ${meta.color}`}>
                        <IconC className="w-5 h-5" />
                      </span>
                      <span className="absolute -top-2 -right-2">
                        <span
                          role="button"
                          tabIndex={0}
                          onClick={(e) => { e.stopPropagation(); toggleBookmark(it.key); }}
                          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); toggleBookmark(it.key); } }}
                          aria-label={bookmarks.includes(it.key) ? 'Remove bookmark' : 'Add bookmark'}
                          className="h-6 w-6 rounded-full bg-white shadow ring-1 ring-gray-200 flex items-center justify-center text-amber-500 cursor-pointer"
                        >
                          {bookmarks.includes(it.key) ? <StarSolid className="w-3.5 h-3.5"/> : <StarIcon className="w-3.5 h-3.5"/>}
                        </span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

