import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowUpRight,
  Calendar,
  Clock,
  Flag,
  Heart,
  Layers,
  LineChart,
  Search,
  Sparkles,
  TrendingUp
} from 'lucide-react';
import { IPO, IPOStatus } from '../types';
import { MOCK_IPOS } from '../constants';

interface DashboardProps {
  onIpoSelect: (ipoId: string) => void;
  watchlist: string[];
  onToggleWatchlist: (ipoId: string) => void;
}

type TabKey = IPOStatus | 'Watchlist';

const searchableTabs: TabKey[] = ['Active', 'Upcoming', 'Closed'];
const initialSearchQueries: Record<TabKey, string> = {
  Active: '',
  Upcoming: '',
  Closed: '',
  Watchlist: ''
};

const tabConfig: { key: TabKey; label: string; helper: string }[] = [
  { key: 'Active', label: 'Live Now', helper: 'Open for subscription' },
  { key: 'Upcoming', label: 'Upcoming', helper: 'Filed & roadshow stage' },
  { key: 'Closed', label: 'Recently Listed', helper: 'Track listing gains' },
  { key: 'Watchlist', label: 'Watchlist', helper: 'Saved opportunities' }
];

const CLOSED_ROWS_PER_PAGE = 20;

type ClosedSortKey =
  | 'name'
  | 'listingDate'
  | 'issuePrice'
  | 'totalSub'
  | 'gmpPct'
  | 'listingOpen'
  | 'listingClose'
  | 'listingGain'
  | 'currentPrice'
  | 'gainsTillDate';

const closedTableHeaders: { key: ClosedSortKey; lines: string[]; sticky?: boolean }[] = [
  { key: 'name', lines: ['Company', 'Name'], sticky: true },
  { key: 'listingDate', lines: ['Listing', 'Date'] },
  { key: 'issuePrice', lines: ['Issue', 'Price'] },
  { key: 'totalSub', lines: ['Total', 'Sub'] },
  { key: 'gmpPct', lines: ['GMP', '(% of issue)'] },
  { key: 'listingOpen', lines: ['Listing', 'Open'] },
  { key: 'listingClose', lines: ['Listing', 'Close'] },
  { key: 'listingGain', lines: ['Listing', 'Gain'] },
  { key: 'currentPrice', lines: ['Current', 'Price'] },
  { key: 'gainsTillDate', lines: ['Gains till', 'Date'] }
];

const parseIssueSize = (value: string) => {
  if (!value) return 0;
  const numeric = Number(value.replace(/[^0-9.]/g, '')) || 0;
  const normalized = value.toLowerCase();
  if (normalized.includes('cr')) return numeric;
  if (normalized.includes('lakh') || normalized.includes('lac')) return numeric / 100;
  return numeric;
};

const getIssuePrice = (band: string) => {
  const number = band.split('-').pop()?.replace(/[^0-9]/g, '') || '0';
  return Number(number);
};

const matchesSearch = (ipo: IPO, normalizedQuery: string) => {
  if (!normalizedQuery) return true;
  const haystack = `${ipo.name} ${ipo.symbol} ${ipo.description ?? ''}`.toLowerCase();
  return haystack.includes(normalizedQuery);
};

export const Dashboard: React.FC<DashboardProps> = ({ onIpoSelect, watchlist, onToggleWatchlist }) => {
  const [activeTab, setActiveTab] = useState<TabKey>('Active');
  const [searchQueries, setSearchQueries] = useState<Record<TabKey, string>>(initialSearchQueries);

  const grouped = useMemo(() => {
    return {
      Active: MOCK_IPOS.filter((ipo) => ipo.status === 'Active'),
      Upcoming: MOCK_IPOS.filter((ipo) => ipo.status === 'Upcoming'),
      Closed: MOCK_IPOS.filter((ipo) => ipo.status === 'Closed'),
      Watchlist: MOCK_IPOS.filter((ipo) => watchlist.includes(ipo.id))
    };
  }, [watchlist]);

  const filteredGroups = useMemo(() => {
    const buildDeck = (tab: TabKey) => {
      const normalizedQuery = searchQueries[tab]?.trim().toLowerCase() || '';
      if (!normalizedQuery) return grouped[tab];
      return grouped[tab].filter((ipo) => matchesSearch(ipo, normalizedQuery));
    };

    return {
      Active: buildDeck('Active'),
      Upcoming: buildDeck('Upcoming'),
      Closed: buildDeck('Closed'),
      Watchlist: grouped.Watchlist
    };
  }, [grouped, searchQueries]);

  const handleSearchChange = (tab: TabKey, value: string) => {
    if (!searchableTabs.includes(tab)) return;
    setSearchQueries((prev) => ({ ...prev, [tab]: value }));
  };

  const liveCount = grouped.Active.length;
  const filings = grouped.Upcoming.length;
  const closedAverageGmp = grouped.Closed.length
    ? Math.round(grouped.Closed.reduce((sum, ipo) => sum + ipo.gmp, 0) / grouped.Closed.length)
    : 0;

  const currentCollection = grouped.Active.reduce((sum, ipo) => sum + parseIssueSize(ipo.issueSize), 0);

  const renderContent = () => {
    if (activeTab === 'Closed') {
      return (
        <ClosedListingTable ipos={filteredGroups.Closed} onIpoSelect={onIpoSelect} />
      );
    }

    const deck = filteredGroups[activeTab];
    if (!deck.length) {
      return (
        <EmptyState
          title={activeTab === 'Watchlist' ? 'No IPOs in watchlist yet' : 'No records in this bucket'}
          subtitle={
            activeTab === 'Watchlist'
              ? 'Add IPOs using the heart icon to get quick access here.'
              : 'As soon as filings hit the exchanges, the list lights up.'
          }
        />
      );
    }

    return (
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {deck.map((ipo) => (
          <IPOCard
            key={ipo.id}
            ipo={ipo}
            onSelect={() => onIpoSelect(ipo.id)}
            onToggleWatchlist={() => onToggleWatchlist(ipo.id)}
            isWatchlisted={watchlist.includes(ipo.id)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-10">
      <section className="grid gap-6 lg:grid-cols-[1.8fr,1fr]">
        <article className="rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-500 p-6 sm:p-8 text-white shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/70">Market sentiment</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight">Bullish Mainboard Flows</h2>
            </div>
            <button className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-1 text-xs font-semibold text-white/90">
              View analytics
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <HeroStat label="Live GMP" value={`₹${closedAverageGmp}`} helper="Avg across last 10 listings" />
            <HeroStat label="Funds raised" value={`₹${currentCollection.toLocaleString()} Cr`} helper="Active books" />
            <HeroStat label="Fresh filings" value={`${filings}`} helper="Awaiting SEBI nod" />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {['Tech & SaaS focus', 'Power & Energy revival', 'Anchor demand strong'].map((chip) => (
              <span key={chip} className="rounded-full bg-white/15 px-4 py-1 text-xs font-semibold">
                {chip}
              </span>
            ))}
          </div>
        </article>

        <article className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">Snapshot</p>
          <div className="mt-5 space-y-4">
            <MetricBlock
              icon={<Sparkles className="w-4 h-4 text-indigo-500" />}
              label="Live subscriptions"
              value={`${liveCount} IPOs`}
              delta="+2 vs last week"
            />
            <MetricBlock
              icon={<Layers className="w-4 h-4 text-emerald-500" />}
              label="Average oversubscription"
              value="21.4x"
              delta="HNI book leading"
            />
            <MetricBlock
              icon={<LineChart className="w-4 h-4 text-rose-500" />}
              label="Volatility guard"
              value="Low"
              delta="India VIX 13.4 (-4.2%)"
            />
          </div>
        </article>
      </section>

      <section className="rounded-3xl bg-white p-4 sm:p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Mainboard Pipeline</p>
            <h3 className="text-2xl font-bold text-slate-900">Track every stage of the listing journey</h3>
          </div>
          <div className="flex flex-wrap gap-2 text-xs text-slate-500">
            <span className="rounded-full border border-slate-200 px-3 py-1">F&O Allowed</span>
            <span className="rounded-full border border-slate-200 px-3 py-1">NSE + BSE</span>
            <span className="rounded-full border border-slate-200 px-3 py-1">Updated hourly</span>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {tabConfig.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`rounded-2xl border px-4 py-2 text-sm font-semibold transition ${
                activeTab === tab.key
                  ? 'border-indigo-500 bg-indigo-50 text-indigo-600 shadow-sm'
                  : 'border-slate-200 text-slate-500 hover:border-slate-300'
              }`}
            >
              <span className="block text-left text-sm font-semibold">{tab.label}</span>
              <span className="text-[11px] font-normal text-slate-400">{tab.helper}</span>
            </button>
          ))}
        </div>

        {searchableTabs.includes(activeTab) && (
          <div className="mt-4 flex items-center rounded-2xl border border-slate-200 bg-white px-4 py-2 shadow-sm">
            <Search className="mr-3 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQueries[activeTab] ?? ''}
              onChange={(event) => handleSearchChange(activeTab, event.target.value)}
              placeholder={`Search ${tabConfig.find((tab) => tab.key === activeTab)?.label ?? 'IPOs'}`}
              className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
              aria-label="Search IPOs"
            />
          </div>
        )}
      </section>

      {renderContent()}
    </div>
  );
};

const HeroStat = ({ label, value, helper }: { label: string; value: string; helper: string }) => (
  <div>
    <p className="text-sm text-white/70">{label}</p>
    <p className="mt-1 text-2xl font-semibold">{value}</p>
    <p className="text-xs text-white/60">{helper}</p>
  </div>
);

const MetricBlock = ({
  icon,
  label,
  value,
  delta
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  delta: string;
}) => (
  <div className="flex items-center gap-3 rounded-2xl border border-slate-100 px-4 py-3">
    <div className="rounded-2xl bg-slate-100 p-2">{icon}</div>
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{label}</p>
      <p className="text-lg font-semibold text-slate-900">{value}</p>
      <p className="text-xs text-slate-500">{delta}</p>
    </div>
  </div>
);

interface IPOCardProps {
  ipo: IPO;
  onSelect: () => void;
  onToggleWatchlist: () => void;
  isWatchlisted: boolean;
}

const IPOCard: React.FC<IPOCardProps> = ({ ipo, onSelect, onToggleWatchlist, isWatchlisted }) => {
  const issuePrice = getIssuePrice(ipo.priceBand);
  const gmpPct = issuePrice > 0 ? Math.round((ipo.gmp / issuePrice) * 1000) / 10 : null;
  const showPercent = ipo.status === 'Active' || ipo.status === 'Upcoming';
  const gmpDisplay = showPercent && gmpPct !== null ? `${gmpPct >= 0 ? '+' : ''}${gmpPct}%` : `₹${ipo.gmp}`;
  const getBadgeTone = () => {
    if (showPercent && gmpPct !== null) {
      if (gmpPct > 10) return 'text-emerald-600 bg-emerald-100';
      if (gmpPct > 5) return 'text-amber-600 bg-amber-100';
      if (gmpPct >= 0) return 'text-slate-600 bg-slate-100';
      return 'text-rose-600 bg-rose-100';
    }
    if (ipo.gmp >= 60) return 'text-emerald-600 bg-emerald-100';
    if (ipo.gmp >= 20) return 'text-indigo-600 bg-indigo-100';
    return 'text-slate-500 bg-slate-100';
  };

  const showMarketStats = ipo.status !== 'Upcoming';

  return (
    <article
      onClick={onSelect}
      className="flex h-full cursor-pointer flex-col rounded-3xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{ipo.symbol}</p>
          <h4 className="mt-1 text-xl font-semibold text-slate-900">{ipo.name}</h4>
          <p className="text-sm text-slate-500">{ipo.description.slice(0, 52)}…</p>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWatchlist();
          }}
          className={`rounded-full border p-2 transition ${
            isWatchlisted ? 'border-rose-200 bg-rose-50 text-rose-500' : 'border-slate-200 text-slate-400 hover:text-rose-500'
          }`}
          aria-label="Toggle watchlist"
        >
          <Heart className={`w-4 h-4 ${isWatchlisted ? 'fill-current' : ''}`} />
        </button>
      </div>

      <div className="mt-4 grid gap-3 text-sm text-slate-500">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-xs text-slate-500">
            <Calendar className="w-4 h-4 text-indigo-500" />
            Opens
          </span>
          <span className="font-semibold text-slate-800">{ipo.openDate}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-xs text-slate-500">
            <Clock className="w-4 h-4 text-emerald-500" />
            Closes
          </span>
          <span className="font-semibold text-slate-800">{ipo.closeDate}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-xs text-slate-500">
            <Flag className="w-4 h-4 text-amber-500" />
            Listing
          </span>
          <span className="font-semibold text-slate-800">{ipo.listingDate}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Price band</span>
          <span className="font-semibold text-slate-800">{ipo.priceBand}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Issue size</span>
          <span className="font-semibold text-slate-800">{ipo.issueSize}</span>
        </div>
      </div>

      {showMarketStats && (
        <div className="mt-4 flex items-center gap-2">
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${getBadgeTone()}`}>
            GMP {gmpDisplay}
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            {ipo.subscription?.total || '—'}x subscribed
          </span>
        </div>
      )}
    </article>
  );
};

const EmptyState = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="rounded-3xl border border-dashed border-slate-200 bg-white px-8 py-16 text-center">
    <p className="text-xl font-semibold text-slate-900">{title}</p>
    <p className="mt-2 text-sm text-slate-500">{subtitle}</p>
  </div>
);

interface ClosedRowData {
  ipo: IPO;
  name: string;
  listingDate: string;
  listingDateValue: number;
  issuePrice: number;
  totalSub: number;
  gmpPct: number | null;
  listingOpen: number;
  listingClose: number;
  listingGainPct: number | null;
  currentPrice: number;
  gainsTillDate: number;
}

const sortAccessors: Record<ClosedSortKey, (row: ClosedRowData) => number | string> = {
  name: (row) => row.name.toLowerCase(),
  listingDate: (row) => row.listingDateValue,
  issuePrice: (row) => row.issuePrice,
  totalSub: (row) => row.totalSub,
  gmpPct: (row) => (row.gmpPct ?? Number.NEGATIVE_INFINITY),
  listingOpen: (row) => row.listingOpen,
  listingClose: (row) => row.listingClose,
  listingGain: (row) => (row.listingGainPct ?? Number.NEGATIVE_INFINITY),
  currentPrice: (row) => row.currentPrice,
  gainsTillDate: (row) => row.gainsTillDate
};

const ClosedListingTable = ({ ipos, onIpoSelect }: { ipos: IPO[]; onIpoSelect: (id: string) => void }) => {
  const [sortConfig, setSortConfig] = useState<{ key: ClosedSortKey; direction: 'asc' | 'desc' }>(
    { key: 'listingDate', direction: 'desc' }
  );
  const [page, setPage] = useState(0);

  const rows = useMemo<ClosedRowData[]>(
    () =>
      ipos.map((ipo) => {
        const issuePrice = getIssuePrice(ipo.priceBand);
        const totalSub = ipo.subscription?.total ?? 0;
        const listingOpen = ipo.listingPrice ?? issuePrice;
        const listingClose = ipo.listingClosePrice ?? ipo.currentPrice ?? listingOpen;
        const currentPrice = ipo.currentPrice ?? listingClose;
        const listingGainDiff = listingOpen - issuePrice;
        const listingGainPct = issuePrice > 0 ? Math.round((listingGainDiff / issuePrice) * 1000) / 10 : null;
        const gainsTillDate = currentPrice - issuePrice;
        const gmpValue = typeof ipo.gmp === 'number' ? ipo.gmp : null;
        const gmpPct = gmpValue !== null && issuePrice > 0 ? Math.round((gmpValue / issuePrice) * 1000) / 10 : null;

        return {
          ipo,
          name: ipo.name,
          listingDate: ipo.listingDate,
          listingDateValue: ipo.listingDate ? new Date(ipo.listingDate).getTime() : 0,
          issuePrice,
          totalSub,
          gmpPct,
          listingOpen,
          listingClose,
          listingGainPct,
          currentPrice,
          gainsTillDate
        };
      }),
    [ipos]
  );

  const sortedRows = useMemo(() => {
    const accessor = sortAccessors[sortConfig.key];
    const sorted = [...rows].sort((a, b) => {
      const valueA = accessor(a);
      const valueB = accessor(b);

      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return valueA.localeCompare(valueB);
      }

      return (valueA as number) - (valueB as number);
    });

    return sortConfig.direction === 'asc' ? sorted : sorted.reverse();
  }, [rows, sortConfig]);

  useEffect(() => {
    setPage(0);
  }, [sortConfig, rows.length]);

  const totalPages = Math.max(1, Math.ceil(sortedRows.length / CLOSED_ROWS_PER_PAGE));
  const currentPage = Math.min(page, totalPages - 1);
  const pagedRows = sortedRows.slice(
    currentPage * CLOSED_ROWS_PER_PAGE,
    (currentPage + 1) * CLOSED_ROWS_PER_PAGE
  );

  const handleSort = (key: ClosedSortKey) => {
    setSortConfig((prev) =>
      prev.key === key
        ? { key, direction: prev.direction === 'asc' ? 'desc' : 'asc' }
        : { key, direction: 'asc' }
    );
  };

  const getSortIndicator = (key: ClosedSortKey) => {
    if (sortConfig.key !== key) return '↕';
    return sortConfig.direction === 'asc' ? '▲' : '▼';
  };

  const getAriaSort = (key: ClosedSortKey): React.AriaAttributes['aria-sort'] => {
    if (sortConfig.key !== key) return 'none';
    return sortConfig.direction === 'asc' ? 'ascending' : 'descending';
  };

  return (
    <section className="rounded-3xl border border-slate-100 bg-white p-4 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 px-2">
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-500" /> Listing recap
          </p>
          <h3 className="text-2xl font-semibold text-slate-900">Closed deals & performance trail</h3>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
          {ipos.length} listings
        </span>
      </div>
      <div className="table-scroll mt-4 rounded-2xl border border-slate-100 bg-slate-25">
        <table className="closed-table">
          <colgroup>
            <col className="col-company" />
            <col className="col-date" />
            <col className="col-price" />
            <col className="col-total" />
            <col className="col-gmp" />
            <col className="col-open" />
            <col className="col-close" />
            <col className="col-listing-gain" />
            <col className="col-current" />
            <col className="col-total-gain" />
          </colgroup>
            <thead>
              <tr className="text-xs uppercase tracking-[0.2em] text-slate-400">
                {closedTableHeaders.map((header) => (
                  <th
                    key={header.key}
                    className={header.sticky ? 'bg-slate-25 sticky-col' : undefined}
                    aria-sort={getAriaSort(header.key)}
                  >
                    <button type="button" className="sort-trigger" onClick={() => handleSort(header.key)}>
                      <span className="sort-label">
                        {header.lines.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </span>
                      <span className={`sort-indicator${sortConfig.key === header.key ? ' active' : ''}`}>
                        {getSortIndicator(header.key)}
                      </span>
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pagedRows.map(({ ipo, issuePrice, totalSub, gmpPct, listingOpen, listingClose, listingGainPct, currentPrice, gainsTillDate }) => (
                <tr
                  key={ipo.id}
                  onClick={() => onIpoSelect(ipo.id)}
                  className="cursor-pointer border-t border-slate-100 bg-white text-sm text-slate-600 transition hover:bg-slate-50"
                >
                  <td className="sticky-col font-semibold text-slate-900">{ipo.name}</td>
                  <td>{ipo.listingDate}</td>
                  <td>₹{issuePrice}</td>
                  <td>{totalSub ? `${totalSub}x` : '—'}</td>
                  <td className={gmpPct !== null && gmpPct >= 0 ? 'text-emerald-600 font-semibold' : 'text-rose-500 font-semibold'}>
                    {gmpPct !== null ? `${gmpPct >= 0 ? '+' : ''}${gmpPct}%` : '—'}
                  </td>
                  <td>₹{listingOpen}</td>
                  <td>₹{listingClose}</td>
                  <td className={
                    listingGainPct !== null && listingGainPct >= 0
                      ? 'text-emerald-600 font-semibold'
                      : listingGainPct !== null
                      ? 'text-rose-500 font-semibold'
                      : 'text-slate-500'
                  }>
                    {listingGainPct !== null ? `${listingGainPct >= 0 ? '+' : ''}${listingGainPct}%` : '—'}
                  </td>
                  <td>₹{currentPrice}</td>
                  <td className={gainsTillDate >= 0 ? 'text-emerald-600 font-semibold' : 'text-rose-500 font-semibold'}>
                    {gainsTillDate >= 0 ? '+' : ''}₹{gainsTillDate}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 px-2 text-sm text-slate-500">
        <p>
          Showing{' '}
          <span className="font-semibold text-slate-900">
            {sortedRows.length ? currentPage * CLOSED_ROWS_PER_PAGE + 1 : 0}
          </span>{' '}
          to{' '}
          <span className="font-semibold text-slate-900">
            {Math.min((currentPage + 1) * CLOSED_ROWS_PER_PAGE, sortedRows.length)}
          </span>{' '}
          of <span className="font-semibold text-slate-900">{sortedRows.length}</span> listings
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-xl border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 disabled:cursor-not-allowed disabled:text-slate-300 disabled:border-slate-100"
            onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
            disabled={currentPage === 0}
          >
            Previous
          </button>
          <button
            type="button"
            className="rounded-xl border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 disabled:cursor-not-allowed disabled:text-slate-300 disabled:border-slate-100"
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages - 1))}
            disabled={currentPage >= totalPages - 1 || sortedRows.length === 0}
          >
            Next
          </button>
        </div>
      </div>
      <p className="mt-3 ml-2 text-sm text-slate-400">*GMP shown as percentage of issue price on listing close date.</p>
    </section>
  );
};
