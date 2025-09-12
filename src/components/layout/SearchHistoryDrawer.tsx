"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { readHistory, SearchHistoryItem, clearHistory } from "@/utils/searchHistory";
import { XMarkIcon, MagnifyingGlassIcon, ClockIcon } from "@heroicons/react/24/outline";
import catalogData from "@/data/catalog.json";
import { BuildingOfficeIcon, TruckIcon, CurrencyDollarIcon, UserGroupIcon, DocumentTextIcon, CubeIcon, ServerIcon, ChartBarIcon, Squares2X2Icon, SquaresPlusIcon } from "@heroicons/react/24/outline";

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
};

// quick map of app id -> icon string
const CATALOG_ICON_BY_ID: Record<string, string | undefined> = Object.fromEntries(
  (catalogData as any[]).map((c) => [c.id, c.icon])
);

export default function SearchHistoryDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [items, setItems] = useState<SearchHistoryItem[]>([]);
  const [filterQ, setFilterQ] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (!open) return;
    setItems(readHistory());
  }, [open]);

  const go = (it: SearchHistoryItem) => {
    const path = it.path || (it.id ? `/apps/${it.id}` : undefined);
    if (path) router.push(path);
    onClose();
  };

  const timeAgo = (ts: number) => {
    const d = Date.now() - ts;
    const m = Math.floor(d / 60000);
    if (m < 1) return 'just now';
    if (m < 60) return m + 'm';
    const h = Math.floor(m / 60);
    if (h < 24) return h + 'h';
    const days = Math.floor(h / 24);
    return days + 'd';
  };

  const display = (filterQ
    ? items.filter(it => (it.title || '').toLowerCase().includes(filterQ.toLowerCase()) || it.query.toLowerCase().includes(filterQ.toLowerCase()))
    : items
  ).slice(0, 10);

  if (!open) return null;


  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <button aria-label="Close" onClick={onClose} className="absolute inset-0 bg-black/30" />

      {/* Drawer */}
      <aside className="absolute left-0 top-0 h-full w-[320px] bg-white shadow-xl ring-1 ring-black/5 flex flex-col">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <div className="text-sm font-semibold text-gray-800">Task List</div>
          <div className="flex items-center gap-2">
            <button onClick={() => { clearHistory(); setItems([]); }} className="text-xs text-gray-500 hover:text-gray-700">Clear</button>
            <button onClick={onClose} className="p-1 rounded hover:bg-gray-100">
              <XMarkIcon className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>
        {/* Search inside drawer */}
        <div className="px-4 py-2 border-b border-gray-200">
          <div className="relative">
            <input
              value={filterQ}
              onChange={(e) => setFilterQ(e.target.value)}
              placeholder="Search tasks"
              className="w-full pl-8 pr-3 py-2 text-sm bg-white/80 backdrop-blur border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--ring)] shadow-sm hover:shadow-md focus:shadow-lg transition-all duration-300 placeholder:transition-opacity focus:placeholder-opacity-80"
            />
            <MagnifyingGlassIcon className="w-4 h-4 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
          </div>
        </div>


        <div className="flex-1 overflow-auto py-2">
          {items.length === 0 ? (
            <div className="px-4 py-6 text-sm text-gray-500">No recent searches yet.</div>
          ) : (
            <>
              <div className="px-4 text-[11px] uppercase tracking-wide text-gray-400 mb-2">Today</div>
              <ul className="px-2 space-y-1">
                {display.map((it, idx) => {
                  const iconName = (it.id && CATALOG_ICON_BY_ID[it.id]) || undefined;
                  const Icon = (iconName && ICONS[iconName]) || ClockIcon;
                  return (
                    <li key={idx}>

                      <button onClick={() => go(it)} className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 text-left">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-gray-100 text-gray-600">
                          <Icon className="w-4 h-4" />
                        </span>
                        <span className="flex-1">
                          <div className="text-sm text-gray-900 line-clamp-1">{it.title || it.query}</div>
                          {it.title && (
                            <div className="text-xs text-gray-500 line-clamp-1">{it.query}</div>
                          )}
                        </span>
                        <span className="text-[10px] text-gray-400">×{it.count || 1} · {timeAgo(it.ts)}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>

        <div className="px-4 py-3 border-t border-gray-200 text-xs text-gray-500">
          Tip: Click an item to repeat the same action.
        </div>
      </aside>
    </div>
  );
}

