'use client';

import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { MainContent } from './MainContent';
import dynamic from 'next/dynamic';
import SearchHistoryDrawer from './SearchHistoryDrawer';
import ChatDock from '../chat/ChatDock';
import { MegaphoneIcon, EnvelopeIcon, UserGroupIcon, ChatBubbleLeftRightIcon, Squares2X2Icon, TruckIcon, GlobeAmericasIcon, BellIcon } from '@heroicons/react/24/outline';

const NotificationTray = dynamic(() => import('./NotificationTray'), { ssr: false });
const AshleyDirectInfo = dynamic(() => import('../departments/AshleyDirectInfo'), { ssr: false });
const AshleyDirectMenus = dynamic(() => import('../departments/AshleyDirectMenus'), { ssr: false });

interface ShellLayoutProps {
  children?: React.ReactNode;
  initialSelectedDepartment?: string | null;
  suppressDefault?: boolean; // when true, do not render MainContent/department, only children
}

export function ShellLayout({ children, initialSelectedDepartment = null, suppressDefault = false }: ShellLayoutProps) {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(initialSelectedDepartment);
  const [historyOpen, setHistoryOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        selectedDepartment={selectedDepartment}
        onDepartmentSelect={setSelectedDepartment}
        onPlusClick={() => setHistoryOpen(true)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="relative flex-1 overflow-hidden">
          <div className="h-full flex">
            {/* Primary content area */}
            <div className="flex-1 overflow-auto">
              {!suppressDefault && (
                selectedDepartment ? (
                  <div className="h-full">
                    {/* This is where remote microfrontends will be loaded */}
                    <div className="p-6 space-y-4">
                      <h2 className="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                        {selectedDepartment === 'ashleydirect' ? 'Ashley Direct' : (selectedDepartment.charAt(0).toUpperCase() + selectedDepartment.slice(1))} Department
                      </h2>

                      {/* Department intro sections */}
                      {selectedDepartment === 'ashleydirect' && (
                        <>
                          <AshleyDirectInfo />
                          <AshleyDirectMenus />
                        </>
                      )}

                      <p className="text-gray-600">
                        Loading {selectedDepartment} application...
                      </p>
                    </div>
                  </div>
                ) : (
                  <MainContent />
                )
              )}
              {children}
            </div>

            {/* Right panel after header */}
            <aside className="hidden lg:block w-72 shrink-0 border-l border-gray-200 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/50 h-full overflow-y-auto">
              <div className="pt-8 px-3 pb-24 space-y-3">
                <div className="relative px-1">
                  {/* soft glow behind the pill */}
                  <div className="pointer-events-none absolute left-0 right-0 -top-1 h-8 mx-2 rounded-full blur-xl" style={{ background: 'var(--primary)', opacity: 0.18 }} />
                  {/* gradient pill label */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[var(--primary)] to-indigo-500 text-white text-xs font-semibold shadow-sm ring-1 ring-white/10">
                    <BellIcon className="w-4 h-4 opacity-95" />
                    <span>Notifications</span>
                    <span className="ml-1 inline-flex"><span className="w-1.5 h-1.5 rounded-full bg-white/90 animate-pulse" /></span>
                  </div>
                </div>
                <NotificationTray embedded controls showClose />

                {/* Announcements */}
                <section className="mt-4 bg-white rounded-xl shadow-sm ring-1 ring-gray-200/70 p-4">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-full brand-soft brand-text flex items-center justify-center">
                      <MegaphoneIcon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-semibold" style={{ color: '#0f172a' }}>Announcements</h3>
                  </div>
                  <div className="mt-3 p-3 rounded-lg brand-soft" style={{ color: '#0f172a' }}>
                    <div className="text-sm font-semibold">System Maintenance Scheduled</div>
                    <div className="text-xs mt-1" style={{ opacity: 0.8 }}>This Sunday from 2 AM to 4 AM.</div>
                  </div>
                </section>

                {/* Quick Links */}
                <section className="mt-4 bg-white rounded-xl shadow-sm ring-1 ring-gray-200/70 p-4">
                  <h3 className="text-sm font-semibold mb-3" style={{ color: '#0f172a' }}>Quick Links</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <a href="#" className="flex items-center gap-2 rounded-lg brand-soft px-3 py-2 hover:opacity-90">
                      <EnvelopeIcon className="w-5 h-5 brand-text" />
                      <span className="text-sm" style={{ color: '#0f172a' }}>Outlook</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 rounded-lg brand-soft px-3 py-2 hover:opacity-90">
                      <UserGroupIcon className="w-5 h-5 brand-text" />
                      <span className="text-sm" style={{ color: '#0f172a' }}>Teams</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 rounded-lg brand-soft px-3 py-2 hover:opacity-90">
                      <ChatBubbleLeftRightIcon className="w-5 h-5 brand-text" />
                      <span className="text-sm" style={{ color: '#0f172a' }}>Slack</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 rounded-lg brand-soft px-3 py-2 hover:opacity-90">
                      <Squares2X2Icon className="w-5 h-5 brand-text" />
                      <span className="text-sm" style={{ color: '#0f172a' }}>Trello</span>
                    </a>
                  </div>
                </section>

                {/* Sales (month-wise) */}
                <section className="mt-4 bg-white rounded-xl shadow-sm ring-1 ring-gray-200/70 p-4">
                  <h3 className="text-sm font-semibold mb-3" style={{ color: '#0f172a' }}>Sales (last 12 months)</h3>
                  {(() => {
                    const data = [
                      { m: 'J', v: 120 }, { m: 'F', v: 160 }, { m: 'M', v: 180 }, { m: 'A', v: 140 },
                      { m: 'M', v: 200 }, { m: 'J', v: 230 }, { m: 'J', v: 190 }, { m: 'A', v: 210 },
                      { m: 'S', v: 260 }, { m: 'O', v: 240 }, { m: 'N', v: 220 }, { m: 'D', v: 280 },
                    ];
                    const max = Math.max(...data.map(d => d.v)) || 1;
                    return (
                      <div>
                        <div className="h-24 flex items-end gap-1">
                          {data.map((d, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center">
                              <div className="w-full rounded-t-md" style={{ height: `${Math.max(6, Math.round((d.v / max) * 90))}px`, background: 'var(--primary)', opacity: 0.8 }} />
                              <div className="text-[10px] text-gray-500 mt-1">{d.m}</div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-2 text-[11px] text-gray-600">Total YTD: <span className="font-semibold text-gray-800">${[...data].reduce((a, b) => a + b.v, 0).toLocaleString()}</span></div>
                      </div>
                    );
                  })()}
                </section>

                {/* Logistics status */}
                <section className="mt-4 bg-white rounded-xl shadow-sm ring-1 ring-gray-200/70 p-4">
                  <h3 className="text-sm font-semibold mb-3" style={{ color: '#0f172a' }}>Logistics</h3>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-md brand-soft">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 brand-text"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 7h11v10H3zM14 10h4.586a2 2 0 0 1 1.414.586l.414.414A2 2 0 0 1 21 12.414V17h-7v-7zM5 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm12 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>
                      </span>
                      <span>Trucks in transit</span>
                    </div>
                    <div className="font-semibold" style={{ color: '#0f172a' }}>18</div>
                  </div>
                  <div className="mt-3 text-[12px] text-gray-700">Container ships</div>
                  <div className="mt-1 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] bg-blue-50 text-blue-700 border border-blue-200">
                      <span className="w-2 h-2 rounded-full bg-blue-500" /> On water: 3
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" /> At port: 1
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] bg-amber-50 text-amber-700 border border-amber-200">
                      <span className="w-2 h-2 rounded-full bg-amber-500" /> Customs: 1
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] bg-rose-50 text-rose-700 border border-rose-200">
                      <span className="w-2 h-2 rounded-full bg-rose-500" /> Delayed: 1
                    </span>
                  </div>
                </section>

              </div>
            </aside>
          </div>
        </main>
        <SearchHistoryDrawer open={historyOpen} onClose={() => setHistoryOpen(false)} />
        <ChatDock />
      </div>
    </div>
  );
}
