'use client';

import React, { useMemo, useState, useCallback, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import catalogData from '@/data/catalog';

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
  WrenchScrewdriverIcon,
  PlusIcon,
  XMarkIcon
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
    // Route Ashley Direct inside the shell (uses current host/port)
    ashleydirect: '/apps/ashleydirect',
    // Use internal route for Create Order within the shell app
    createorder: '/apps/createorder',
    inroute: '/apps/inroute',
  };
  const [forYouSpace, setForYouSpace] = useState<{ available: boolean; height: number }>({ available: false, height: 0 });
  const [forYouExtraAfterFirstRow, setForYouExtraAfterFirstRow] = useState(0);
  const [atTop, setAtTop] = useState(true);
  const forYouAnchorRef = useRef<HTMLDivElement | null>(null);

  const getScrollParent = (node: HTMLElement | null): HTMLElement | Window => {
    let p: HTMLElement | null = node?.parentElement || null;
    while (p) {
      const style = getComputedStyle(p);
      if (/(auto|scroll|overlay)/.test(style.overflowY)) return p;
      p = p.parentElement;
    }
    return window;
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const sp = getScrollParent(forYouAnchorRef.current);
    const onScroll = () => {
      const y = sp === window ? window.scrollY : (sp as HTMLElement).scrollTop;
      setAtTop(y < 2);
    };
    onScroll();
    if (sp === window) {
      window.addEventListener('scroll', onScroll, { passive: true });
    } else {
      (sp as HTMLElement).addEventListener('scroll', onScroll as EventListener, { passive: true } as AddEventListenerOptions);
    }
    return () => {
      if (sp === window) {
        window.removeEventListener('scroll', onScroll);
      } else {
        (sp as HTMLElement).removeEventListener('scroll', onScroll as EventListener);
      }
    };
  }, []);

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

  // Record one activity when user chooses a menu and navigates
  const recordNavActivity = (text: string, href: string) => {
    try {
      const raw = localStorage.getItem('oa_recent_acts');
      const list = raw ? JSON.parse(raw) : [];
      const now = Date.now();
      const item = { id: String(now) + Math.random().toString(36).slice(2), text, href, ts: now, count: 1, startedAt: now };
      const next = [item, ...list].slice(0, 30);
      localStorage.setItem('oa_recent_acts', JSON.stringify(next));
      localStorage.removeItem('oa_current_act');
      window.dispatchEvent(new CustomEvent('recent-activity', { detail: item }));
    } catch {}
  };

  // Allow user to continue a past activity explicitly
  const continueActivity = (id: string) => {
    try {
      const now = Date.now();
      localStorage.setItem(CURRENT_ACT_KEY, JSON.stringify({ id, startedAt: now, updatedAt: now }));
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('continue-activity', { detail: { id } }));
      }
    } catch {}
  };


  const go = (id: string) => {
    const app = apps.find(a => a.id === id);
    const path = externalRoutes[id] ?? `/apps/${id}`;
    const label = app?.title || id;
    recordSearch({ id, title: app?.title, query: (query || app?.title || '').trim(), path });
    // Rule: choosing a menu and navigating is a single activity
    recordNavActivity(`Open: ${label}`, path);
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
  type AgentMode = 'none' | 'createOrderAD' | 'inRouteAD';
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
  type InRouteStep = 'askCustomer' | 'done';
  const [inRouteStep, setInRouteStep] = useState<InRouteStep | null>(null);
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

  // Persistent Create Order draft across navigation
  const ORDER_DRAFT_KEY = 'oa_draft_create_order';
  type CreateOrderDraftPersist = {
    mode: AgentMode;
    step: OrderStep | null;
    order: {
      customerNumber: string;
      shipTo: string;
      items: string[];
      quantities: number[];
      warehouse: string;
      orderType: 'complete' | 'available';
      shipMethod: 'delivery' | 'full' | 'express' | 'ltl';
      requestDate: string;
    };
    messages: AgentMessage[];
    startedAt: number;
    updatedAt: number;
  };
  const saveDraft = () => {
    if (typeof window === 'undefined') return;
    try {
      const prev = (() => { try { return JSON.parse(localStorage.getItem(ORDER_DRAFT_KEY) || 'null'); } catch { return null; } })();
      const payload: CreateOrderDraftPersist = {
        mode: agentMode,
        step: orderStep,
        order: orderDraft,
        messages: agentMessages,
        startedAt: prev?.startedAt ?? Date.now(),
        updatedAt: Date.now(),
      };
      localStorage.setItem(ORDER_DRAFT_KEY, JSON.stringify(payload));
      window.dispatchEvent(new Event('order-draft-updated'));
    } catch {}
  };
  const loadDraft = (): CreateOrderDraftPersist | null => {
    if (typeof window === 'undefined') return null;
    try { return JSON.parse(localStorage.getItem(ORDER_DRAFT_KEY) || 'null'); } catch { return null; }
  };
  const clearDraft = () => {
    if (typeof window === 'undefined') return;
    try { localStorage.removeItem(ORDER_DRAFT_KEY); window.dispatchEvent(new Event('order-draft-updated')); } catch {}
  };
  const [resumeDraft, setResumeDraft] = useState<CreateOrderDraftPersist | null>(null);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const read = () => {
      try {
        const raw = localStorage.getItem(ORDER_DRAFT_KEY);
        const d: CreateOrderDraftPersist | null = raw ? JSON.parse(raw) : null;
        if (d && d.mode === 'createOrderAD' && d.step && d.step !== 'done') setResumeDraft(d);
        else setResumeDraft(null);
      } catch {
        setResumeDraft(null);
      }
    };
    read();
    window.addEventListener('order-draft-updated', read as unknown as EventListener);
    return () => window.removeEventListener('order-draft-updated', read as unknown as EventListener);
  }, []);
  useEffect(() => {
    if (agentMode !== 'createOrderAD') return;
    if (typeof window === 'undefined') return;
    try {
      const prev = (() => { try { return JSON.parse(localStorage.getItem(ORDER_DRAFT_KEY) || 'null'); } catch { return null; } })();
      const payload: CreateOrderDraftPersist = {
        mode: agentMode,
        step: orderStep,
        order: orderDraft,
        messages: agentMessages,
        startedAt: prev?.startedAt ?? Date.now(),
        updatedAt: Date.now(),
      };
      localStorage.setItem(ORDER_DRAFT_KEY, JSON.stringify(payload));
      window.dispatchEvent(new Event('order-draft-updated'));
    } catch {}
  }, [agentMode, orderStep, orderDraft, agentMessages]);
  // Persist per-activity flow state keyed by current activity id
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const curRaw = localStorage.getItem(CURRENT_ACT_KEY);
      const cur = curRaw ? JSON.parse(curRaw) : null;
      const id: string | null = cur?.id ?? null;
      if (!id) return;
      // Determine kind for the current activity
      let kind: RecentAct['kind'] = (agentMode === 'createOrderAD' ? 'createOrder' : (agentMode === 'inRouteAD' ? 'inRoute' : 'chat'));
      try {
        const list: RecentAct[] = JSON.parse(localStorage.getItem(RECENT_KEY) || '[]');
        const act = list.find(a => a.id === id);
        if (act?.kind) kind = act.kind;
      } catch {}
      const payload = {
        kind,
        mode: agentMode,
        step: orderStep,
        inRouteStep,
        order: orderDraft,
        messages: agentMessages,
        updatedAt: Date.now(),
      };
      localStorage.setItem(`${FLOW_STATE_PREFIX}${id}`, JSON.stringify(payload));
    } catch {}
  }, [agentMode, orderStep, inRouteStep, orderDraft, agentMessages]);

  const resumeFromDraft = () => {
    const d = loadDraft();
    if (!d) return;
    setAgentMode('createOrderAD');
    setOrderStep(d.step);
    setOrderDraft(d.order);
    setAgentMessages(d.messages || []);
    pushAssistant('Resumed your Create Order draft. You can continue where you left off.');
    setResumeDraft(null);
  };
  const discardDraft = () => { clearDraft(); setResumeDraft(null); };


  const pushAssistant = (text: string) => setAgentMessages((m) => [...m, { role: 'assistant', content: text }]);
  const pushUser = (text: string) => setAgentMessages((m) => [...m, { role: 'user', content: text }]);

  // Recent Activity: group messages into a single activity per session
  const RECENT_KEY = 'oa_recent_acts';
  const CURRENT_ACT_KEY = 'oa_current_act';
  const FLOW_STATE_PREFIX = 'oa_flow_state_';

  type RecentAct = { id: string; text: string; ts: number; href?: string; count?: number; startedAt?: number; kind?: 'createOrder' | 'inRoute' | 'chat' | 'nav' };
  const addRecent = (entry: Omit<RecentAct, 'id' | 'ts' | 'count'> & { ts?: number }) => {
    try {
      const raw = localStorage.getItem(RECENT_KEY);
      const list: RecentAct[] = raw ? JSON.parse(raw) : [];
      const now = entry.ts ?? Date.now();
      // If navigation/link activity => always record as its own item and end chat session
      if (entry.href) {
        const item: RecentAct = { id: String(now) + Math.random().toString(36).slice(2), text: entry.text, href: entry.href, ts: now, count: 1, startedAt: now, kind: 'nav' };
        const next = [item, ...list].slice(0, 30);
        localStorage.setItem(RECENT_KEY, JSON.stringify(next));
        localStorage.removeItem(CURRENT_ACT_KEY);
        window.dispatchEvent(new CustomEvent('recent-activity', { detail: item }));
        return;
      }
      // Chat-type activity: append to existing current activity if present; else create new
      const currentRaw = localStorage.getItem(CURRENT_ACT_KEY);
      // Respect inactivity timeout: 15 minutes
      const ACTIVE_TIMEOUT = 15 * 60 * 1000;
      let currentId: string | null = null;
      let curObj = (currentRaw ? JSON.parse(currentRaw) : null) as { id?: string; startedAt?: number; updatedAt?: number } | null;
      try { curObj = currentRaw ? JSON.parse(currentRaw) : null; } catch { curObj = null; }
      if (curObj && (now - (curObj.updatedAt ?? curObj.startedAt ?? 0) <= ACTIVE_TIMEOUT)) {
        currentId = curObj.id || null;
      } else {
        // session expired or missing
        localStorage.removeItem(CURRENT_ACT_KEY);
        currentId = null;
      }

      if (currentId) {
        // find and update existing item
        const idx = list.findIndex(i => i.id === currentId);
        if (idx >= 0) {
          const updated: RecentAct = {
            ...list[idx],
            text: list[idx].text ? `${list[idx].text} | ${entry.text}` : entry.text,
            ts: now,
            count: (list[idx].count || 1) + 1,
            startedAt: list[idx].startedAt ?? (curObj?.startedAt ?? now),
          };
          const next = [updated, ...list.slice(0, idx), ...list.slice(idx + 1)].slice(0, 30);
          localStorage.setItem(RECENT_KEY, JSON.stringify(next));
          try { const cur = currentRaw ? JSON.parse(currentRaw) : null; localStorage.setItem(CURRENT_ACT_KEY, JSON.stringify({ id: updated.id, startedAt: cur?.startedAt ?? now, updatedAt: now })); } catch {}
          window.dispatchEvent(new CustomEvent('recent-activity', { detail: updated }));
          return;
        } else {
          // fall through to create new if not found
          localStorage.removeItem(CURRENT_ACT_KEY);
        }
      }
      const item: RecentAct = { id: String(now) + Math.random().toString(36).slice(2), text: entry.text, ts: now, count: 1, startedAt: now, kind: (agentMode === 'createOrderAD' ? 'createOrder' : (agentMode === 'inRouteAD' ? 'inRoute' : 'chat')) };
      const next = [item, ...list].slice(0, 30);
      localStorage.setItem(RECENT_KEY, JSON.stringify(next));
      localStorage.setItem(CURRENT_ACT_KEY, JSON.stringify({ id: item.id, startedAt: now }));
      window.dispatchEvent(new CustomEvent('recent-activity', { detail: item }));
    } catch {}
  };
  // Recent Activity (hero-search) — read list for on-page widget
  const [heroRecents, setHeroRecents] = useState<RecentAct[]>([]);
  const [recentsOpen, setRecentsOpen] = useState(false);
  const [recentsVisible, setRecentsVisible] = useState(false);
  const openRecents = () => { setRecentsOpen(true); requestAnimationFrame(() => setRecentsVisible(true)); };
  const closeRecents = () => { setRecentsVisible(false); setTimeout(() => setRecentsOpen(false), 300); };

  // Drawer filter for click-through from metric tiles
  type RecentsFilter = 'all' | 'awaiting' | 'focus' | 'opps';
  const [recentsFilter, setRecentsFilter] = useState<RecentsFilter>('all');
  const filteredRecents = useMemo(() => {
    const now = Date.now();
    const sevenDays = 7 * 24 * 60 * 60 * 1000;
    if (recentsFilter === 'focus') {
      return heroRecents.filter(r => !r.href && (r.count || 1) > 1 && (now - r.ts) < sevenDays);
    }
    if (recentsFilter === 'opps') {
      return heroRecents.filter(r => (((r as unknown as { kind?: string }).kind === 'nav') || !!r.href || (r as unknown as { kind?: string }).kind === 'createOrder' || (r as unknown as { kind?: string }).kind === 'inRoute') && (now - r.ts) < sevenDays);
    }
    if (recentsFilter === 'awaiting') {
      return heroRecents.filter(r => !r.href && (now - r.ts) < sevenDays);
    }
    return heroRecents;
  }, [recentsFilter, heroRecents]);


  // Start a brand new conversation: end current session and reset state
  const startNewConversation = () => {
    try { localStorage.removeItem(CURRENT_ACT_KEY); } catch {}
    // clear chat UI state
    setAgentMode('none');
    setOrderStep(null);
    setInRouteStep(null);
    setAgentMessages([]);
    setQuery('');
    // reset order draft to defaults
    setOrderDraft({
      customerNumber: '',
      shipTo: '',
      items: [],
      quantities: [],
      warehouse: '',
      orderType: 'complete',
      shipMethod: 'delivery',


      requestDate: ''
    });
    setTimeout(() => textRef.current?.focus(), 0);
  };

  // Listen for global request to open Recent Activity (from sidebar hamburger)
  useEffect(() => {
    const handler = () => openRecents();
    if (typeof window !== 'undefined') {
      window.addEventListener('open-recent-activity', handler as EventListener);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('open-recent-activity', handler as EventListener);
      }
    };
  }, []);

  // When user clicks Continue on an activity: resume flow (if any), close drawer, and focus input
  useEffect(() => {
    const handler = (ev: Event) => {
      let restored = false;
      try {
        const detailId = (ev as CustomEvent<{ id?: string }>).detail?.id || null;


        let id = detailId as string | null;
        if (!id) {
          try {
            const cur = JSON.parse(localStorage.getItem(CURRENT_ACT_KEY) || 'null');
            id = cur?.id ?? null;
          } catch {}
        }
        if (id) {
          let flow: any = null;
          try { flow = JSON.parse(localStorage.getItem(`${FLOW_STATE_PREFIX}${id}`) || 'null'); } catch {}
          if (flow && flow.kind === 'createOrder') {
            setAgentMode('createOrderAD');
            setOrderStep(flow.step ?? 'askCustomer');
            if (flow.order) setOrderDraft(flow.order);
            if (flow.messages) setAgentMessages(flow.messages);
            pushAssistant('Resumed your Create Order activity.');
            restored = true;
          } else if (flow && flow.kind === 'inRoute') {
            setAgentMode('inRouteAD');
            setInRouteStep(flow.inRouteStep ?? 'askCustomer');
            if (flow.messages) setAgentMessages(flow.messages);
            pushAssistant('Resumed your In Route activity.');
            restored = true;
          } else if (flow && flow.kind === 'chat') {
            setAgentMode('none');
            if (flow.messages) setAgentMessages(flow.messages);
            restored = true;
          }
        }
      } catch {}
      if (!restored) {
        pushAssistant("Can't resume this activity — no saved process. You can continue typing.");
      }
      closeRecents();
      setTimeout(() => { try { textRef.current?.focus(); } catch {} }, 320);
    };
    if (typeof window !== 'undefined') window.addEventListener('continue-activity', handler as EventListener);
    return () => { if (typeof window !== 'undefined') window.removeEventListener('continue-activity', handler as EventListener); };
  }, []);



  // Auto-end chat session after 15 minutes of inactivity
  useEffect(() => {
    const ACTIVE_TIMEOUT = 15 * 60 * 1000;
    const t = setInterval(() => {
      try {
        const cur = JSON.parse(localStorage.getItem(CURRENT_ACT_KEY) || 'null');
        const last = cur ? (cur.updatedAt ?? cur.startedAt ?? 0) : 0;
        if (cur && Date.now() - last > ACTIVE_TIMEOUT) {
          localStorage.removeItem(CURRENT_ACT_KEY);
        }
      } catch {}
    }, 60 * 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const load = () => {
      try { setHeroRecents(JSON.parse(localStorage.getItem(RECENT_KEY) || '[]')); }
      catch { setHeroRecents([]); }
    };
    load();
    const onRecent = () => load();
    const onStorage = (e: StorageEvent) => { if (e.key === RECENT_KEY) load(); };
    window.addEventListener('recent-activity', onRecent as EventListener);
    window.addEventListener('storage', onStorage);
    return () => {
      window.removeEventListener('recent-activity', onRecent as EventListener);
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  // Client-derived metrics for the agentic header strip
  type AgentMetrics = { counts: { awaitingActions: number; focusItems: number; opportunities: number }; updatedAt: number };
  const [metrics, setMetrics] = useState<AgentMetrics>({ counts: { awaitingActions: 0, focusItems: 0, opportunities: 0 }, updatedAt: Date.now() });

  useEffect(() => {
    const t = setTimeout(() => {
      const now = Date.now();
      const sevenDays = 7 * 24 * 60 * 60 * 1000;
      let awaiting = 0;
      if (agentMode === 'createOrderAD' && orderStep && orderStep !== 'done') awaiting += 1;
      if (agentMode === 'inRouteAD' && inRouteStep && inRouteStep !== 'done') awaiting += 1;
      if (resumeDraft && agentMode === 'none') awaiting += 1;
      const focus = heroRecents.filter(r => !r.href && (r.count || 1) > 1 && (now - r.ts) < sevenDays).length;
      const opp = heroRecents.filter(r => ((r as unknown as { kind?: string }).kind === 'nav' || !!r.href || (r as unknown as { kind?: string }).kind === 'createOrder' || (r as unknown as { kind?: string }).kind === 'inRoute') && (now - r.ts) < sevenDays).length;
      setMetrics({ counts: { awaitingActions: awaiting, focusItems: focus, opportunities: opp }, updatedAt: now });
    }, 250);
    return () => clearTimeout(t);
  }, [agentMode, orderStep, inRouteStep, resumeDraft, heroRecents]);


  // Human friendly "ago" for tooltips
  const timeAgo = (t: number): string => {
    const s = Math.max(0, Math.floor((Date.now() - t) / 1000));
    if (s < 60) return `${s}s`;
    const m = Math.floor(s / 60);
    if (m < 60) return `${m}m`;
    const h = Math.floor(m / 60);
    if (h < 24) return `${h}h`;
    const d = Math.floor(h / 24);
    return `${d}d`;
  };


  const beginCreateOrderFlow = () => {


    setAgentMode('createOrderAD');
    setOrderStep('askCustomer');
    pushAssistant("Great — let's create an order in Ashley Direct. What is the customer number and ship-to? For example: 123456, 789012");
    // Record a single draft activity and persist immediately
    addRecent({ text: 'Create Order: started (draft)' });
    saveDraft();
  };

  const beginInRouteFlow = () => {
    setAgentMode('inRouteAD');
    setInRouteStep('askCustomer');
    pushAssistant('Okay — for In Route Orders, provide a customer number, optionally followed by a ship-to. Example: 8888300 or 8888300, 480');
  };

  const navToInRouteWithPreset = (params: URLSearchParams) => {
    const base = externalRoutes['inroute'] ?? '/apps/inroute';
    const url = `${base}?${params.toString()}`;
    if (typeof window !== 'undefined') window.location.href = url; else router.push(url);
  };

  const handleInRouteInput = (input: string) => {
    const q = input.trim();
    const nums = q.match(/\d+/g) || [];
    if (nums.length >= 2) {
      const customer = String(nums[0]);
      const shipTo = String(nums[1]);

      const p = new URLSearchParams({ customer, shipTo });
      addRecent({ text: `In Route Orders: customer ${customer}, ship-to ${shipTo}`, href: `/apps/inroute?customer=${customer}&shipTo=${shipTo}` });
      pushAssistant('Showing trips in route for the provided ship-to. Redirecting...');
      navToInRouteWithPreset(p);
      setInRouteStep('done');
      return;
    }
    if (nums.length >= 1) {
      const customer = String(nums[0]);
      const p = new URLSearchParams({ customer });
      addRecent({ text: `In Route Orders: customer ${customer}`, href: `/apps/inroute?customer=${customer}` });
      pushAssistant('Showing trips in route for the customer. Redirecting...');
      navToInRouteWithPreset(p);
      setInRouteStep('done');
      return;
    }
    pushAssistant('Please provide a customer number, optionally followed by a ship-to. Example: 8888300 or 8888300, 480');
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
    // Record in recent activity for home sidebar
    addRecent({ text: q });

    // If we're already in a flow, handle this step
    if (agentMode === 'createOrderAD' && orderStep) {
      handleOrderInput(q);
      setQuery('');
      return;
    }
    if (agentMode === 'inRouteAD' && inRouteStep) {
      handleInRouteInput(q);
      setQuery('');
      return;
    }

    // Intent: start conversational flows
    const isCreateOrderFlow = /(order entry|create my order|create\s+order|new\s+order)/i.test(q);
    if (isCreateOrderFlow) {
      beginCreateOrderFlow();
      setQuery('');
      return;
    }
    const isInRouteFlow = /(in\s*route\s*orders?|inroute\s*orders?|in\s*route\s*order|trips?\s*in\s*route)/i.test(q);
    if (isInRouteFlow) {
      beginInRouteFlow();
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
          Welcome to One Ashley Super Agent
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          Ask anything, create anything
        </p>

        {/* Main Search Card (new design) */}
        <div className="mb-8 flex justify-center gap-6">
          <div className="w-full max-w-3xl">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-4">
            {/* Top toolbar with arrows and metrics */}
            <div className="flex items-center justify-between gap-3 px-1">
              <button type="button" onClick={startNewConversation} title="New Conversation" className="w-9 h-9 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <PlusIcon className="w-5 h-5" />
              </button>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div
                  className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-center cursor-pointer hover:bg-gray-100"
                  title={`Last updated ${timeAgo(metrics.updatedAt)} ago`}
                  onClick={() => { setRecentsFilter('awaiting'); openRecents(); }}
                >
                  <div className="text-[12px] font-semibold text-gray-700">Awaiting Actions</div>
                  <div className="text-emerald-600 font-bold" aria-live="polite">{metrics.counts.awaitingActions}</div>
                </div>
                <div
                  className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-center cursor-pointer hover:bg-gray-100"
                  title={`Last updated ${timeAgo(metrics.updatedAt)} ago`}
                  onClick={() => { setRecentsFilter('focus'); openRecents(); }}
                >
                  <div className="text-[12px] font-semibold text-gray-700">Focus Items</div>
                  <div className="text-amber-600 font-bold" aria-live="polite">{metrics.counts.focusItems}</div>
                </div>
                <div
                  className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-center cursor-pointer hover:bg-gray-100"
                  title={`Last updated ${timeAgo(metrics.updatedAt)} ago`}
                  onClick={() => { setRecentsFilter('opps'); openRecents(); }}
                >
                  <div className="text-[12px] font-semibold text-gray-700">Opportunities</div>
                  <div className="text-orange-600 font-bold" aria-live="polite">{metrics.counts.opportunities}</div>
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
                  placeholder="Hey Wanek, Cameron how can I help you"
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

                {/* Resume Create Order draft banner */}
                {resumeDraft && agentMode === 'none' && (
                  <div className="mt-3 flex items-center justify-between rounded-lg border border-amber-300 bg-amber-50 px-3 py-2 text-amber-900">
                    <div className="text-sm">
                      Create Order draft in progress  last updated {new Date(resumeDraft.updatedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                    <div className="flex gap-2">
                      <button type="button" onClick={resumeFromDraft} className="px-3 py-1 rounded-md bg-amber-600 text-white text-xs hover:bg-amber-700">Resume</button>
                      <button type="button" onClick={discardDraft} className="px-3 py-1 rounded-md border border-amber-300 bg-white text-amber-800 text-xs hover:bg-amber-100">Discard</button>
                    </div>
                  </div>
                )}


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

        {/* Right of hero-search: Recent Activity */}


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



        {/* For You Section - Feather fan on scroll */}
        <div className="mt-2" ref={forYouAnchorRef}>
          <ForYouSmoove onSpaceAvailable={handleSpaceAvailable} onExtraSpace={setForYouExtraAfterFirstRow} />
        </div>

        {/* Ashley News (horizontal) — occupy hidden For You rows when at top */}
        <div data-foryou-space={forYouSpace.available ? 'avail' : 'no'} style={{ marginTop: atTop ? -forYouExtraAfterFirstRow : 0, transition: 'margin-top 400ms ease' }}>
          <AshleyNews />
        </div>

        {/* ServiceNow Incidents */}
        <ServiceNowIncidents />

        {/* External Ads (logo carousel) */}
        <div className="mb-10">
          <AdCarousel />
        </div>
      </div>

      {/* Slide-in Recent Activity Drawer */}
      {recentsOpen && (
        <div className="fixed inset-0 z-50">
          <div className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${recentsVisible ? 'opacity-100' : 'opacity-0'}`} onClick={closeRecents} />
          <div className={`absolute left-0 top-0 h-full w-80 bg-white shadow-2xl border-r border-gray-200 flex flex-col transform transition-transform duration-300 ${recentsVisible ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-base font-semibold text-gray-900">Recent Activity</h3>
              <button type="button" onClick={closeRecents} className="p-1 rounded hover:bg-gray-100">
                <XMarkIcon className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-3">
              {filteredRecents.length === 0 ? (
                <div className="text-xs text-gray-500">No recent items yet. Try the big search box to get started.</div>
              ) : (
                <ul className="divide-y divide-gray-100">
                  {filteredRecents.map((r) => (
                    <li key={r.id} className="py-2 text-[13px] flex items-start gap-2">
                      <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      <div className="flex-1 min-w-0">
                        {r.href ? (
                          <a
                            href={r.href}
                            onClick={() => { closeRecents(); setTimeout(() => { try { textRef.current?.focus(); } catch {} }, 320); }}
                            className="text-indigo-600 hover:underline break-words"
                          >
                            {r.text}
                          </a>
                        ) : (
                          <span className="text-gray-800 break-words">{r.text}</span>
                        )}
                        <div className="mt-1 flex items-center gap-2">
                          {r.count && r.count > 1 && (
                            <span className="inline-flex items-center justify-center px-1.5 h-5 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-semibold">
                              {r.count} msgs
                            </span>
                          )}
                          {!r.href && (
                            <button
                              type="button"
                              onClick={() => continueActivity(r.id)}
                              className="text-[11px] text-indigo-600 hover:underline"
                              title="Continue this activity"
                            >
                              Continue
                            </button>
                          )}
                        </div>
                      </div>
                      <span
                        className="ml-2 shrink-0 text-[10px] text-gray-500"
                        title={`Started: ${new Date((r as RecentAct).startedAt || r.ts).toLocaleString()} | Updated: ${new Date(r.ts).toLocaleString()}`}
                      >
                        {new Date(r.ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {filteredRecents.length > 0 && (
              <div className="px-3 py-2 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => { localStorage.removeItem(RECENT_KEY); localStorage.removeItem(CURRENT_ACT_KEY); setHeroRecents([]); }}
                  className="text-[11px] text-indigo-600 hover:underline"
                >
                  Clear
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
