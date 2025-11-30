import React, { ReactNode, useEffect, useState } from 'react';
import {
  Bell,
  ChevronRight,
  ClipboardCheck,
  Layers,
  LayoutDashboard,
  LineChart,
  Menu,
  PieChart,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Target,
  UserCircle,
  Wallet,
  X
} from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
  onHomeClick: () => void;
}

const primaryNav = [
  { label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" />, action: 'home' },
  { label: 'All IPOs', icon: <Layers className="w-5 h-5" /> },
  { label: 'Market News', icon: <LineChart className="w-5 h-5" /> },
  { label: 'Allotment Status', icon: <ClipboardCheck className="w-5 h-5" /> }
];

const insightChips = [
  { label: 'Live subscriptions', value: '12', tone: 'text-emerald-500 bg-emerald-500/10' },
  { label: 'Avg GMP ₹68', value: '', tone: 'text-[#2563EB] bg-blue-600/10' },
  { label: 'Fresh filings 4', value: '', tone: 'text-amber-500 bg-amber-500/10' }
];

const sidebarHighlights = [
  { title: 'Allocation tracker', desc: 'Monitor registrar updates instantly', icon: <ShieldCheck className="w-4 h-4" /> },
  { title: 'Anchor demand heatmap', desc: 'Realtime signals ahead of listing', icon: <Target className="w-4 h-4" /> }
];

export const Layout: React.FC<LayoutProps> = ({ children, onHomeClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleNav = (item: (typeof primaryNav)[number]) => {
    if (item.action === 'home') {
      onHomeClick();
    }
    closeMenu();
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-72 bg-[#0B1120] text-white flex h-screen flex-col gap-8 overflow-y-auto px-5 py-6 shadow-2xl transition-transform duration-300 lg:sticky lg:top-0 lg:h-screen lg:w-72 lg:translate-x-0 lg:overflow-y-auto ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between">
          <button
            onClick={() => {
              onHomeClick();
              closeMenu();
            }}
            className="flex items-center gap-3"
          >
            <div className="p-2 rounded-2xl bg-[#2563EB] shadow-lg shadow-blue-600/40">
              <PieChart className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-lg font-semibold tracking-tight">Listing Lens</p>
              <p className="text-[11px] uppercase tracking-[0.3em] text-blue-200">Mainboard</p>
            </div>
          </button>
          <button
            onClick={closeMenu}
            className="lg:hidden text-slate-400 hover:text-white"
            aria-label="Close sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          {primaryNav.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item)}
              className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold transition-all ${
                item.label === 'Dashboard'
                  ? 'bg-white/10 text-white shadow-lg shadow-blue-600/20'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="flex items-center gap-3">
                {item.icon}
                {item.label}
              </span>
              <ChevronRight className="w-4 h-4 text-white/60" />
            </button>
          ))}
        </nav>

        <div className="space-y-3 rounded-2xl bg-white/5 p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Today</p>
          <div className="flex flex-wrap gap-2">
            {insightChips.map((chip) => (
              <span
                key={chip.label}
                className={`px-3 py-1 rounded-full text-[11px] font-semibold ${chip.tone}`}
              >
                {chip.label}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4 rounded-2xl border border-white/10 p-4">
          <p className="text-xs font-semibold text-slate-400">Radar</p>
          {sidebarHighlights.map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-white/10 text-blue-200">{item.icon}</div>
              <div>
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="text-xs text-slate-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-auto flex items-center justify-between rounded-2xl bg-[#2563EB] px-4 py-3 text-sm font-semibold shadow-lg shadow-blue-600/50">
          <span className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Upgrade to Prime
          </span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </aside>

      {menuOpen && <div className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm lg:hidden" onClick={closeMenu} />}

      {/* Main column */}
      <div className="flex-1 min-w-0 flex flex-col">
        <header className="sticky top-0 z-20 bg-slate-50/90 backdrop-blur border-b border-slate-200">
          <div className="mx-auto flex w-full max-w-6xl items-center gap-4 px-4 py-4 xl:mx-0 xl:max-w-none xl:px-8 2xl:px-12">
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden rounded-xl border border-slate-200 p-2 text-slate-600"
              aria-label="Open sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="flex-1">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search IPO, symbol, lead manager"
                  className="w-full rounded-2xl border border-transparent bg-white py-2.5 pl-9 pr-4 text-sm text-slate-700 shadow-sm outline-none transition focus:border-blue-200 focus:ring-4 focus:ring-blue-100"
                />
              </div>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <div className="rounded-2xl bg-white px-4 py-2 text-xs font-semibold text-[#2563EB]">
                Market Open
              </div>
              <button className="relative rounded-2xl border border-slate-200 p-2 text-slate-500 hover:text-[#2563EB]">
                <Bell className="w-5 h-5" />
                <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-rose-500"></span>
              </button>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2">
                <div className="hidden text-right sm:block">
                  <p className="text-sm font-semibold text-slate-900">Alex Morgan</p>
                  <span className="text-xs text-slate-500">Pro Member</span>
                </div>
                <UserCircle className="w-9 h-9 text-slate-400" />
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8 xl:px-10 2xl:px-16">
          <div className="mx-auto w-full max-w-6xl space-y-10 xl:mx-0 xl:max-w-none">
            {children}
            <section className="rounded-3xl bg-slate-950 text-white px-6 py-6 sm:px-10 sm:py-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.5em] text-blue-300">Coming soon</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight">SME IPO intelligence arrives Q1</h3>
                  <p className="mt-2 text-sm text-blue-100">
                    Dedicated heatmaps, SME-specific GMP, and registrar level status tracking. Stay ahead of the next wave.
                  </p>
                </div>
                <button className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-white/20">
                  <Wallet className="w-4 h-4" />
                  Get Early Access
                </button>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};
