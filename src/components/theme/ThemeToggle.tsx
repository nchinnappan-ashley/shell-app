"use client";

import React, { useEffect, useMemo, useState } from "react";
import { SunIcon, MoonIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline";

// Simple theme manager that toggles between light, dark, and system.
// Applies the theme by setting document.documentElement.dataset.theme
// and persists choice in localStorage under key "theme".

type Theme = "light" | "dark" | "system";

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  if (theme === "system") {
    root.removeAttribute("data-theme");
    // Let system take over; set color-scheme to current system for better native UI
    const cs = getSystemTheme();
    root.style.colorScheme = cs;
  } else {
    root.setAttribute("data-theme", theme);
    root.style.colorScheme = theme;
  }
}

// Brand color selection
type Color = "blue" | "emerald" | "violet";

function applyColor(color: Color) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.setAttribute("data-color", color);
}


export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");
  const [color, setColor] = useState<Color>("blue");

  const [open, setOpen] = useState(false);
  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  // On mount, read stored preference and apply
  useEffect(() => {
    try {
      const storedTheme = (localStorage.getItem("theme") as Theme | null) ?? "system";
      const storedColor = (localStorage.getItem("color") as Color | null) ?? "blue";
      setTheme(storedTheme);
      setColor(storedColor);
      applyTheme(storedTheme);
      applyColor(storedColor);
    } catch {
      // ignore
    }
  }, []);

  // mark mounted to avoid SSR/CSR mismatch
  useEffect(() => { setMounted(true); }, []);

  // If user chooses system, reflect live system changes in the icon after mount
  const systemTheme = useMemo(() => (typeof window !== "undefined" ? getSystemTheme() : "light"), []);
  useEffect(() => {
    if (!mounted) return;
    if (theme !== "system" || typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyTheme("system");
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, [theme, mounted]);

  // Close popover when clicking outside
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, []);


  const shown: "light" | "dark" = mounted ? (theme === "system" ? getSystemTheme() : theme) : "light";

  const cycle = () => {
    const next: Theme = theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
    applyTheme(next);
  };

  const Icon = shown === "dark" ? MoonIcon : shown === "light" ? SunIcon : ComputerDesktopIcon;
  const label = theme === "system" ? `System (${shown})` : shown === "dark" ? "Dark" : "Light";

  const choose = (c: Color) => {
    setColor(c);
    try { localStorage.setItem("color", c); } catch {}
    applyColor(c);
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-label={`Theme: ${label} (click to open color picker)`}
        title={`Theme: ${label}`}
        onClick={() => setOpen((v) => !v)}
        className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <Icon className="w-5 h-5" />
      </button>
      {open && (
        <div className="absolute right-0 top-10 z-50 bg-white/95 dark:bg-slate-900/95 border border-gray-200/70 dark:border-gray-700/60 rounded-lg shadow-lg p-2 flex items-center gap-2 backdrop-blur-sm">
          <button
            type="button"
            onClick={() => { choose('blue'); setOpen(false); }}
            aria-label="Blue theme"
            className={`h-6 w-6 rounded-full ring-2 ring-offset-1 ${color === 'blue' ? 'ring-gray-400' : 'ring-transparent'}`}
            style={{ backgroundColor: '#3b82f6' }}
          />
          <button
            type="button"
            onClick={() => { choose('emerald'); setOpen(false); }}
            aria-label="Emerald theme"
            className={`h-6 w-6 rounded-full ring-2 ring-offset-1 ${color === 'emerald' ? 'ring-gray-400' : 'ring-transparent'}`}
            style={{ backgroundColor: '#10b981' }}
          />
          <button
            type="button"
            onClick={() => { choose('violet'); setOpen(false); }}
            aria-label="Violet theme"
            className={`h-6 w-6 rounded-full ring-2 ring-offset-1 ${color === 'violet' ? 'ring-gray-400' : 'ring-transparent'}`}
            style={{ backgroundColor: '#8b5cf6' }}
          />
        </div>
      )}
    </div>
  );
}

export default ThemeToggle;

