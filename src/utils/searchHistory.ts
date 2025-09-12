"use client";

// Simple localStorage-backed search history tracker
// Stores up to 10 entries, most recent first. Dedupes by app id (or query if id missing).

export type SearchHistoryItem = {
  id?: string;         // app id if known
  title?: string;      // app title if known
  query: string;       // raw query typed/spoken
  path?: string;       // navigation path to execute (e.g. /apps/{id})
  ts: number;          // timestamp ms
  count: number;       // times used
};

const STORAGE_KEY = "search_history_v1";

export function readHistory(): SearchHistoryItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const arr = JSON.parse(raw) as SearchHistoryItem[];
    if (!Array.isArray(arr)) return [];
    return arr;
  } catch {
    return [];
  }
}

function writeHistory(items: SearchHistoryItem[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items.slice(0, 10)));
  } catch {
    // ignore
  }
}

export function recordSearch(entry: Omit<SearchHistoryItem, "ts" | "count">) {
  const prev = readHistory();
  const ts = Date.now();
  // Try to match by id first, else by query
  const idx = prev.findIndex((it) => (entry.id && it.id === entry.id) || (!entry.id && it.query.toLowerCase() === entry.query.toLowerCase()));
  if (idx >= 0) {
    const existing = prev[idx];
    const updated: SearchHistoryItem = {
      ...existing,
      ...entry,
      ts,
      count: (existing.count || 0) + 1,
    };
    const reordered = [updated, ...prev.filter((_, i) => i !== idx)];
    writeHistory(reordered);
    return;
  }
  const next: SearchHistoryItem = { ...entry, ts, count: 1 };
  const list = [next, ...prev].sort((a, b) => b.ts - a.ts).slice(0, 10);
  writeHistory(list);
}

export function clearHistory() {
  writeHistory([]);
}

