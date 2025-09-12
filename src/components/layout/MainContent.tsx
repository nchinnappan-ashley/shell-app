'use client';

import React, { useMemo, useState, useCallback, useRef, useEffect } from 'react';
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
  PaperClipIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  PaperAirplaneIcon,
  UserIcon,
  LinkIcon,
  ClipboardDocumentListIcon,
  CurrencyDollarIcon,
  TruckIcon,
  AcademicCapIcon,
  PencilSquareIcon,
  AdjustmentsHorizontalIcon,
  WrenchScrewdriverIcon
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
    // Use internal route for Create Order within the shell app
    createorder: '/apps/createorder',
  };
  const [forYouSpace, setForYouSpace] = useState<{ available: boolean; height: number }>({ available: false, height: 0 });

  type RecentItem = { name: string; type: 'Orders' | 'Finance' | 'Customer' | 'Logistics'; status: string; createdBy: string; modifiedOn: string; href?: string };
  const recents: RecentItem[] = [
    {
      name: 'Created 5 orders last week — not submitted (Click to proceed further)',
      type: 'Orders',
      status: 'Action Needed',
      createdBy: 'System',
      modifiedOn: new Date().toLocaleDateString(),
      href: '/apps/orders'
    },
    {
      name: '3 trips in Finance to complete the invoice process (Click to proceed)',
      type: 'Finance',
      status: 'Pending',
      createdBy: 'Finance',
      modifiedOn: new Date(Date.now() - 86400000 * 2).toLocaleDateString(),
      href: '/apps/finance'
    },
    {
      name: 'Customer is waiting for that order (Click to proceed)',
      type: 'Customer',
      status: 'Urgent',
      createdBy: 'CSR',
      modifiedOn: new Date(Date.now() - 86400000 * 3).toLocaleDateString(),
      href: '/apps/customers'
    },
    {
      name: '2 trucks are in the middle of the way — needs clearance (Click to proceed)',
      type: 'Logistics',
      status: 'In Transit',
      createdBy: 'Logistics',
      modifiedOn: new Date(Date.now() - 86400000 * 5).toLocaleDateString(),
      href: '/apps/logistics'
    },
  ];
  const TYPE_ICON: Record<RecentItem['type'], React.ComponentType<{ className?: string }>> = {
    Orders: ClipboardDocumentListIcon,
    Finance: CurrencyDollarIcon,
    Customer: UserIcon,
    Logistics: TruckIcon,
  };
  const STATUS_DOT: Record<string, string> = {
    'Action Needed': 'bg-amber-500',
    'Pending': 'bg-blue-500',
    'Urgent': 'bg-rose-500',
    'In Transit': 'bg-indigo-500',
  };


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
  const onKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.key === 'ArrowDown' && filtered.length) { e.preventDefault(); setActive(i => Math.min(i + 1, filtered.length - 1)); return; }
    if (e.key === 'ArrowUp' && filtered.length) { e.preventDefault(); setActive(i => Math.max(i - 1, 0)); return; }
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (filtered.length) go(filtered[Math.max(0, active)].id); else send();
    }
  };

  const textRef = useRef<HTMLTextAreaElement | null>(null);

  const autoResize = () => {
    const el = textRef.current;
    if (!el) return;
    el.style.height = 'auto';
    const max = 220; // slightly taller cap (~6-7 lines)
    el.style.height = Math.min(el.scrollHeight, max) + 'px';
  };

  useEffect(() => { autoResize(); }, [query]);

  const onChangeQuery: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setQuery(e.target.value);
    setActive(0);
    // auto-resize is handled by effect, but do it here too for responsiveness
    const el = textRef.current; if (el) { el.style.height = 'auto'; el.style.height = Math.min(el.scrollHeight, 220) + 'px'; }
  };

  type AgentMessage = { role: 'user' | 'assistant'; content: string };
  const [agentMessages, setAgentMessages] = useState<AgentMessage[]>([]);

  // Conversational agent: Ashley Direct order creation flow
  type AgentMode = 'none' | 'createOrderAD';
  type OrderStep =
    | 'askCustomer'
    | 'askItems'
    | 'askQty'
    | 'askOrderType'
    | 'askShipType'
    | 'askRequestDate'
    | 'askWarehouse'
    | 'confirm'
    | 'done';
  const [agentMode, setAgentMode] = useState<AgentMode>('none');
  const [orderStep, setOrderStep] = useState<OrderStep | null>(null);
  const [orderDraft, setOrderDraft] = useState<{
    customerNumber: string;
    shipTo: string;
    items: string[];
    quantities: number[];
    warehouse: string;
    orderType: 'complete' | 'available';
    shipMethod: 'delivery' | 'full' | 'express' | 'ltl';
    requestDate: string; // YYYY-MM-DD
  }>({
    customerNumber: '',
    shipTo: '',
    items: [],
    quantities: [],
    warehouse: '',
    orderType: 'complete',
    shipMethod: 'delivery',
    requestDate: ''
  });

  const pushAssistant = (text: string) => setAgentMessages((m) => [...m, { role: 'assistant', content: text }]);
  const pushUser = (text: string) => setAgentMessages((m) => [...m, { role: 'user', content: text }]);

  const beginCreateOrderFlow = () => {
    setAgentMode('createOrderAD');
    setOrderStep('askCustomer');
    pushAssistant("Great — let's create an order in Ashley Direct. What is the customer number and ship-to? For example: 123456, 789012");
  };

  const navToAshleyDirectWithPreset = (params: URLSearchParams) => {
    const base = externalRoutes['createorder'] ?? '/apps/createorder';
    const url = `${base}?${params.toString()}`;
    if (typeof window !== 'undefined') window.location.href = url; else router.push(url);
  };

  const handleOrderInput = (input: string) => {
    const q = input.trim();
    if (orderStep === 'askCustomer') {
      const nums = q.match(/\d+/g) || [];
      if (nums.length >= 2) {
        setOrderDraft((d) => ({ ...d, customerNumber: String(nums[0]), shipTo: String(nums[1]) }));
        setOrderStep('askItems');
        pushAssistant('Got it. Please enter the item numbers (comma or space separated).');
      } else {
        pushAssistant('Please provide both customer number and ship-to. Example: 123456, 789012');
      }
      return;
    }
    if (orderStep === 'askItems') {
      const items = q.split(/[\s,]+/).map(s => s.trim()).filter(Boolean);
      if (items.length > 0) {
        setOrderDraft((d) => ({ ...d, items }));
        setOrderStep('askQty');
        pushAssistant(`Enter quantity for each item (${items.join(', ')}). Example: ${items.map(()=>1).join(', ')}`);
      } else {
        pushAssistant('Please enter at least one item number, separated by commas or spaces.');
      }
      return;
    }
    if (orderStep === 'askQty') {
      const qty = (q.match(/\d+/g) || []).map(n => parseInt(n, 10)).filter(n => Number.isFinite(n));
      const count = orderDraft.items.length;
      if (qty.length === count && qty.every(n => n > 0)) {
        setOrderDraft((d) => ({ ...d, quantities: qty }));
        setOrderStep('askOrderType');
        pushAssistant('Order type? Say "Ship Complete Series Groups" or "Ship Items As Available".');
      } else {
        pushAssistant(`Please provide ${count} positive quantities, one per item, in the same order. Example: ${orderDraft.items.map(()=>1).join(', ')}`);
      }
      return;
    }
    if (orderStep === 'askOrderType') {
      const lc = q.toLowerCase();
      const ot = lc.includes('complete') ? 'complete' : (lc.includes('available') ? 'available' : null);
      if (ot) {
        setOrderDraft((d) => ({ ...d, orderType: ot }));
        setOrderStep('askShipType');
        pushAssistant('Shipping type? Delivery, Full Truckload Pickup, Ashley Express, or Less Than Full Truckload/Carrier (LTL)?');
      } else {
        pushAssistant('Please choose order type: "Ship Complete Series Groups" or "Ship Items As Available".');
      }
      return;
    }
    if (orderStep === 'askShipType') {
      const lc = q.toLowerCase();
      let sm: 'delivery' | 'full' | 'express' | 'ltl' | null = null;
      if (lc.includes('delivery')) sm = 'delivery';
      else if (lc.includes('full')) sm = 'full';
      else if (lc.includes('express')) sm = 'express';
      else if (lc.includes('ltl') || lc.includes('less')) sm = 'ltl';
      if (sm) {
        setOrderDraft((d) => ({ ...d, shipMethod: sm }));
        setOrderStep('askRequestDate');
        pushAssistant('What is the request date? You can say "today" or provide YYYY-MM-DD.');
      } else {
        pushAssistant('Please select a shipping type: Delivery, Full Truckload Pickup, Ashley Express, or Less Than Full Truckload/Carrier.');
      }
      return;
    }
    if (orderStep === 'askRequestDate') {
      const lc = q.toLowerCase();
      let dateStr = '';
      if (lc === 'today' || lc === 'now') {
        dateStr = new Date().toISOString().slice(0, 10);
      } else {
        const m = q.match(/(\d{4})[-\\/](\d{1,2})[-\\/](\d{1,2})/);
        if (m) {
          const yyyy = m[1].padStart(4, '0');
          const mm = m[2].padStart(2, '0');
          const dd = m[3].padStart(2, '0');
          dateStr = `${yyyy}-${mm}-${dd}`;
        }
      }
      if (dateStr) {
        setOrderDraft((d) => ({ ...d, requestDate: dateStr }));
        setOrderStep('askWarehouse');
        pushAssistant('Which warehouse would you like to use? For example: ADVANCE NC');
      } else {
        pushAssistant('Please enter a valid date like 2025-09-18 or say "today".');
      }
      return;
    }
    if (orderStep === 'askWarehouse') {
      const warehouse = q;
      if (warehouse) {
        setOrderDraft((d) => ({ ...d, warehouse }));
        setOrderStep('confirm');
        const p = new URLSearchParams({
          customer: orderDraft.customerNumber,
          shipTo: orderDraft.shipTo,
          items: orderDraft.items.join(','),
          qty: orderDraft.quantities.join(','),
          warehouse,
          orderType: orderDraft.orderType,
          shipMethod: orderDraft.shipMethod,
          requestDate: orderDraft.requestDate,
        });
        pushAssistant('Perfect. Redirecting to the Order Entry page with your order prefilled...');
        navToAshleyDirectWithPreset(p);
        setOrderStep('done');
      } else {
        pushAssistant('Please provide a warehouse name.');
      }
      return;
    }
  };

  const looksLikeQuestion = (q: string) => /how|what|when|who|why|which|where|count|number|total|show|list/i.test(q);
  const generateFollowUp = (q: string): string => {
    const hasOrders = /order/i.test(q);
    const hasAD = /ashley\s*direct|ashleydirect/i.test(q);
    const hasTime = /(today|yesterday|week|month|year|last|past|between|\d{4})/i.test(q);
    if (hasOrders && hasAD && !hasTime) {
      return 'Over what timeframe should I check orders created through Ashley Direct? For example: today, last 7 days, or last month.';
    }
    if (!hasTime && looksLikeQuestion(q)) {
      return 'Got it. What timeframe should I use? (e.g., today, last 30 days) You can also add filters like department or user.';
    }
    return 'Could you clarify the timeframe or any filters I should use?';
  };

  const send = () => {
    const q = query.trim();
    if (!q) return;
    // Show user message immediately
    pushUser(q);

    // If we're already in the order flow, handle this step
    if (agentMode === 'createOrderAD' && orderStep) {
      handleOrderInput(q);
      setQuery('');
      return;
    }

    // Intent: start conversational order creation
    const isCreateOrderFlow = /(order entry|create my order|create\s+order|new\s+order)/i.test(q);
    if (isCreateOrderFlow) {
      beginCreateOrderFlow();
      setQuery('');
      return;
    }

    // Otherwise, try app navigation shortcut
    const match = findBestApp(q);
    if (match) { setQuery(''); go(match.id); return; }

    // Generic follow-up for analytics-style queries
    const follow = generateFollowUp(q);
    pushAssistant(follow);
    setQuery('');
  };

  const handleQuickReply = (t: string) => {
    // Treat quick replies as immediate user answers
    pushUser(t);
    if (agentMode === 'createOrderAD' && orderStep) {
      handleOrderInput(String(t));
    } else {
      setQuery(String(t));
    }
    setTimeout(() => textRef.current?.focus(), 0);
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
          Hi Wanek, Cameron . Welcome to One Ashley Super Agent
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
                <textarea
                  ref={textRef}
                  rows={3}
                  data-testid="hero-search"
                  placeholder="I'm your AI-powered business companion that connects all Ashley systems and automates workflows across departments. What would you like to accomplish?"
                  value={query}
                  onChange={onChangeQuery}
                  onKeyDown={onKeyDown}
                  className="block w-full min-h-20 px-5 pr-28 py-3 text-[15px] leading-6 text-gray-900 placeholder-gray-400 bg-transparent border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--ring)] resize-none overflow-hidden"
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

              {/* Agent follow-up panel */}
              {agentMessages.length > 0 && (
                <div className="mt-3 rounded-xl border border-gray-200 bg-white">
                  <div className="p-4 space-y-2">
                    {agentMessages.map((m, i) => (
                      <div key={i} className={`text-sm ${m.role === 'assistant' ? 'text-gray-900' : 'text-gray-700'}`}>{m.content}</div>
                    ))}
                    {/* Quick replies */}
                    {agentMessages[agentMessages.length - 1]?.role === 'assistant' && (
                      <div className="pt-1 flex flex-wrap gap-2">
                        {['Today', 'Last 7 days', 'Last 30 days'].map((q) => (
                          <button
                            key={q}
                            type="button"
                            onClick={() => handleQuickReply(q)}
                            className="px-2.5 py-1.5 text-xs rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50"
                          >
                            {q}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
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
                <div key={agent.id} className="relative bg-white rounded-xl p-4 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all cursor-pointer group">
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
        {/* Quick actions */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <button type="button" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 hover:bg-gray-50">
            <AcademicCapIcon className="w-5 h-5 text-gray-500" />
            Learn
          </button>
          <button type="button" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 hover:bg-gray-50">
            <PencilSquareIcon className="w-5 h-5 text-gray-500" />
            Create
          </button>
          <button type="button" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 hover:bg-gray-50">
            <ChartBarIcon className="w-5 h-5 text-gray-500" />
            Analyze
          </button>
          <button type="button" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 hover:bg-gray-50">
            <AdjustmentsHorizontalIcon className="w-5 h-5 text-gray-500" />
            Optimize
          </button>
          <button type="button" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 hover:bg-gray-50">
            <WrenchScrewdriverIcon className="w-5 h-5 text-gray-500" />
            Troubleshoot
          </button>
        </div>

        {/* Recents (table) */}
        <section className="mt-6">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-5 pt-5 pb-3">
              <h3 className="text-base font-semibold text-gray-900">Recents</h3>
            </div>
            <div className="px-5 pb-5 overflow-x-auto">
              <table className="w-full table-fixed text-sm">
                <thead>
                  <tr className="text-left text-gray-500">
                    <th className="w-[45%] pb-2 font-medium">Name</th>
                    <th className="w-[18%] pb-2 font-medium">Type</th>
                    <th className="w-[17%] pb-2 font-medium">Status</th>
                    <th className="w-[12%] pb-2 font-medium">Created By</th>
                    <th className="w-[18%] pb-2 font-medium">Modified On</th>
                  </tr>
                </thead>
                <tbody>
                  {recents.map((r, i) => {
                    const Icon = TYPE_ICON[r.type];
                    return (
                      <tr key={i} className="border-t border-gray-100">
                        <td className="py-3 pr-4">
                          <button
                            type="button"
                            onClick={() => { if (r.href) router.push(r.href); }}
                            className="text-indigo-600 hover:text-indigo-700 font-medium"
                          >
                            {r.name}
                          </button>
                        </td>
                        <td className="py-3">
                          <span className="inline-flex items-center gap-2 text-gray-700">
                            <Icon className="w-4 h-4 text-gray-400" />
                            {r.type}
                          </span>
                        </td>
                        <td className="py-3">
                          <span className="inline-flex items-center gap-2 text-gray-700">
                            <span className={`inline-block w-1.5 h-1.5 rounded-full ${STATUS_DOT[r.status] || 'bg-gray-300'}`} />
                            {r.status}
                          </span>
                        </td>
                        <td className="py-3 text-gray-600">{r.createdBy}</td>
                        <td className="py-3 text-gray-600">{r.modifiedOn}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>


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
