'use client';

import React, { useMemo, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import catalogData from '@/data/catalog.json';
import { recordSearch } from '@/utils/searchHistory';
import dynamic from 'next/dynamic';
const ForYouSmoove = dynamic(() => import('./ForYouSmoove'), { ssr: false });
import {
  PresentationChartLineIcon,
  TableCellsIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  ChartBarIcon,
  CodeBracketIcon,
  PhotoIcon,
  VideoCameraIcon,
  MicrophoneIcon,
  SparklesIcon,
  CalendarDaysIcon,
  ClipboardDocumentListIcon,
  PaperClipIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  PaperAirplaneIcon,
  UserIcon,
  LinkIcon
} from '@heroicons/react/24/outline';
import AshleyNews from './AshleyNews';
import ServiceNowIncidents from './ServiceNowIncidents';
import AdCarousel from './AdCarousel';

import aiAgentsData from '@/data/ai-agents.json';

type IconKey =
  | 'PresentationChartLineIcon'
  | 'TableCellsIcon'
  | 'ChatBubbleLeftRightIcon'
  | 'DocumentTextIcon'
  | 'ChartBarIcon'
  | 'CodeBracketIcon'
  | 'PhotoIcon'
  | 'VideoCameraIcon'
  | 'MicrophoneIcon'
  | 'SparklesIcon';

const ICONS = {
  PresentationChartLineIcon,
  TableCellsIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  ChartBarIcon,
  CodeBracketIcon,
  PhotoIcon,
  VideoCameraIcon,
  MicrophoneIcon,
  SparklesIcon,
};

interface AIAgent {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  isNew?: boolean;
  isHot?: boolean;
}

type AIAgentJson = {
  id: string;
  name: string;
  description: string;
  icon: IconKey;
  isNew?: boolean;
  isHot?: boolean;
};

const aiAgents: AIAgent[] = (aiAgentsData as AIAgentJson[]).map((a) => ({
  id: a.id,
  name: a.name,
  description: a.description,
  icon: ICONS[a.icon] || SparklesIcon,
  isNew: a.isNew,
  isHot: a.isHot,
}));

const SHOW_AI_GRID = false; // center grid hidden per request


export function MainContent() {
  const router = useRouter();
  type AppEntry = { id: string; title: string };
  const apps = catalogData as unknown as AppEntry[];
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const [listening, setListening] = useState(false);
  // External routes for specific apps (microfrontends)
  const externalRoutes: Record<string, string> = {
    ashleydirect: 'http://localhost:3001/apps/ashleydirect',
  };
  const [forYouSpace, setForYouSpace] = useState<{ available: boolean; height: number }>({ available: false, height: 0 });

  const handleSpaceAvailable = useCallback((available: boolean, height: number) => {
    setForYouSpace(prev => (prev.available === available && prev.height === height ? prev : { available, height }));
  }, []);

  const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
  const findBestApp = (input: string): AppEntry | undefined => {
    const q = normalize(input);
    if (!q) return undefined;
    let best: { score: number; app: AppEntry } | undefined;
    for (const a of apps) {
      const t = normalize(a.title);
      let score = 0;
      if (t === q) score = 100;
      else if (t.startsWith(q) || q.startsWith(t)) score = 80;
      else if (t.includes(q) || q.includes(t)) score = 60;
      else {
        const qt = new Set(q.split(' '));
        const tt = new Set(t.split(' '));
        let overlap = 0;
        qt.forEach(w => { if (tt.has(w)) overlap++; });
        if (overlap > 0) score = 40 + overlap;
      }
      if (!best || score > best.score) best = { score, app: a };
    }
    if (best && best.score >= 60) return best.app;
    return undefined;
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [] as AppEntry[];
    return apps.filter(a => a.title.toLowerCase().includes(q)).slice(0, 7);
  }, [apps, query]);
  const go = (id: string) => {
    const app = apps.find(a => a.id === id);
    const path = externalRoutes[id] ?? `/apps/${id}`;
    recordSearch({ id, title: app?.title, query: (query || app?.title || '').trim(), path });
    if (path.startsWith('http')) {
      if (typeof window !== 'undefined') window.location.href = path; else router.push(path);
    } else {
      router.push(path);
    }
  };
  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (!filtered.length) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive(i => Math.min(i + 1, filtered.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(i => Math.max(i - 1, 0)); }
    else if (e.key === 'Enter') { e.preventDefault(); go(filtered[Math.max(0, active)].id); }
  };

  const send = () => {
    const match = findBestApp(query);
    if (match) go(match.id);
  };

  const startVoice = () => {
    if (typeof window === 'undefined') return;
    const SR: any = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) { alert('Voice recognition is not supported in this browser.'); return; }
    const rec = new SR();
    rec.lang = 'en-US';
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    setListening(true);
    rec.onresult = (ev: any) => {
      const t = ev?.results?.[0]?.[0]?.transcript || '';
      const q = String(t).trim();
      setQuery(q);
      const match = findBestApp(q);
      if (match) go(match.id);
    };
    rec.onerror = () => setListening(false);
    rec.onend = () => setListening(false);
    rec.start();
  };

  return (
    <div className="flex-1 p-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          One Ashley Super Agent
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          Ask anything, create anything
        </p>

        {/* Main Search Card (new design) */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-4">
            {/* Top toolbar with arrows and metrics */}
            <div className="flex items-center justify-between gap-3 px-1">
              <button type="button" className="w-9 h-9 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <ArrowLeftIcon className="w-5 h-5" />
              </button>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-center">
                  <div className="text-[12px] font-semibold text-gray-700">Awaiting Actions</div>
                  <div className="text-emerald-600 font-bold">35</div>
                </div>
                <div className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-center">
                  <div className="text-[12px] font-semibold text-gray-700">Focus Items</div>
                  <div className="text-amber-600 font-bold">48</div>
                </div>
                <div className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-center">
                  <div className="text-[12px] font-semibold text-gray-700">Opportunities</div>
                  <div className="text-orange-600 font-bold">12</div>
                </div>
              </div>
              <button type="button" className="w-9 h-9 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Input row */}
            <div className="mt-4">
              <div className="relative">
                <input
                  type="text"
                  data-testid="hero-search"
                  placeholder="I'm your AI-powered business companion that connects all Ashley systems and automates workflows across departments. What would you like to accomplish?"
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setActive(0); }}
                  onKeyDown={onKeyDown}
                  className="block w-full h-14 px-5 pr-28 text-[15px] text-gray-900 placeholder-gray-400 bg-transparent border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
                />
                {/* Right action icons */}
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <button type="button" className="p-1.5 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100">
                    <PaperClipIcon className="w-5 h-5" />
                  </button>
                  <button type="button" onClick={startVoice} aria-pressed={listening} className="p-1.5 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100">
                    <MicrophoneIcon className="w-5 h-5" />
                  </button>
                  <button type="button" onClick={send} className="p-1.5 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100">
                    <PaperAirplaneIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Suggestions dropdown */}
              {filtered.length > 0 && (
                <ul className="mt-2 z-20 bg-white rounded-xl shadow-lg ring-1 ring-gray-200 overflow-hidden">
                  {filtered.map((a, i) => (
                    <li key={a.id}>
                      <button
                        type="button"
                        className={`w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-gray-50 ${i === active ? 'bg-gray-50' : ''}`}
                        onMouseDown={(e) => { e.preventDefault(); go(a.id); }}
                      >
                        <div className="w-7 h-7 rounded-md brand-soft brand-text flex items-center justify-center text-xs font-semibold">
                          {a.title.split(' ').map(w => w[0]).join('').slice(0,3).toUpperCase()}
                        </div>
                        <span className="text-sm text-gray-900">{a.title}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              {/* Bottom row */}
              <div className="mt-3 flex items-center justify-between">
                <button type="button" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-sm">
                  <UserIcon className="w-4 h-4" />
                  Personalize
                  <LinkIcon className="w-4 h-4 text-gray-400" />
                </button>
                <div />
              </div>
            </div>
          </div>
        </div>


      </div>

      {/* AI Agents Grid (hidden) */}
      <div className="max-w-6xl mx-auto">
        {SHOW_AI_GRID && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {aiAgents.map((agent) => {
              const IconComponent = agent.icon;
              return (
                <div
                  key={agent.id}
                  className="relative bg-white rounded-xl p-4 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all cursor-pointer group"
                >
                  {agent.isNew && (
                    <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                  {agent.isHot && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      HOT
                    </span>
                  )}
                  <div className="w-12 h-12 rounded-lg brand-soft brand-text flex items-center justify-center mb-3">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-medium text-gray-900 mb-1">{agent.name}</h3>
                  <p className="text-sm text-gray-500">{agent.description}</p>
                </div>
              );
            })}
          </div>
        )}
        {/* Top stats row */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Upcoming Meetings */}
          <div className="relative bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
            <div className="text-[13px] text-gray-600 font-medium">Upcoming Meetings</div>
            <div className="mt-1 text-3xl font-semibold text-slate-800">3</div>
            <span className="absolute top-4 right-4 inline-flex items-center justify-center w-9 h-9 rounded-full bg-red-100 text-red-600">
              <CalendarDaysIcon className="w-5 h-5" />
            </span>
          </div>

          {/* Unread Messages */}
          <div className="relative bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
            <div className="text-[13px] text-gray-600 font-medium">Unread Messages</div>
            <div className="mt-1 text-3xl font-semibold text-slate-800">12</div>
            <span className="absolute top-4 right-4 inline-flex items-center justify-center w-9 h-9 rounded-full bg-green-100 text-green-600">
              <ChatBubbleLeftRightIcon className="w-5 h-5" />
            </span>
          </div>

          {/* Active Projects */}
          <div className="relative bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
            <div className="text-[13px] text-gray-600 font-medium">Active Projects</div>
            <div className="mt-1 text-3xl font-semibold text-slate-800">5</div>
            <span className="absolute top-4 right-4 inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-100 text-blue-600">
              <ClipboardDocumentListIcon className="w-5 h-5" />
            </span>
          </div>
        </div>


        {/* For You Section - Feather fan on scroll */}
        <div className="mt-2">
          <ForYouSmoove onSpaceAvailable={handleSpaceAvailable} />
        </div>

        {/* Ashley News (horizontal, animated) */}
        <div style={{ marginTop: forYouSpace.available ? -forYouSpace.height : 0, transition: 'margin-top 400ms ease' }}>
          <AshleyNews />
        </div>

        {/* ServiceNow Incidents */}
        <ServiceNowIncidents />

        {/* External Ads (logo carousel) */}
        <AdCarousel />
      </div>
    </div>
  );
}
