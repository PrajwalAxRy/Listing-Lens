import React from 'react';
import { IPO } from '../types';
import {
  Building2,
  Calendar,
  Users,
  Globe,
  Briefcase,
  Layers,
  BarChart3,
  ShieldCheck,
  AlertTriangle,
  TrendingUp,
  Network,
  Target,
  Sparkles,
  Trophy,
  MessageSquare,
  Send,
  ChevronLeft,
  ArrowRight,
  FileText,
  Factory,
} from 'lucide-react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  AreaChart,
  Area,
} from 'recharts';

interface AIReportContentProps {
  ipo: IPO;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const AIReportContent: React.FC<AIReportContentProps> = ({
  ipo,
  currentPage,
  totalPages,
  onPageChange,
  searchQuery,
  onSearchChange,
}) => {
  const revenueData = [
    { year: 'FY21', revenue: 850, profit: 120 },
    { year: 'FY22', revenue: 1240, profit: 180 },
    { year: 'FY23', revenue: 1680, profit: 290 },
    { year: 'FY24', revenue: 2150, profit: 420 },
  ];

  const segmentData = [
    { name: 'B2B Services', value: 45, color: '#6366f1' },
    { name: 'B2C Products', value: 30, color: '#10b981' },
    { name: 'Enterprise', value: 15, color: '#f59e0b' },
    { name: 'Others', value: 10, color: '#94a3b8' },
  ];

  const customerGrowthData = [
    { quarter: 'Q1 FY23', customers: 12500, retention: 85 },
    { quarter: 'Q2 FY23', customers: 15200, retention: 87 },
    { quarter: 'Q3 FY23', customers: 18900, retention: 89 },
    { quarter: 'Q4 FY23', customers: 22100, retention: 91 },
    { quarter: 'Q1 FY24', customers: 26500, retention: 92 },
    { quarter: 'Q2 FY24', customers: 31200, retention: 93 },
  ];

  const competitorData = [
    { name: ipo.name, marketShare: 28, growth: 42, pe: 35 },
    { name: 'Competitor A', marketShare: 22, growth: 18, pe: 28 },
    { name: 'Competitor B', marketShare: 18, growth: 25, pe: 32 },
    { name: 'Competitor C', marketShare: 15, growth: 12, pe: 22 },
    { name: 'Others', marketShare: 17, growth: 8, pe: 20 },
  ];

  const financialMetrics = [
    { metric: 'Revenue (₹ Cr)', fy22: '1,240', fy23: '1,680', fy24: '2,150', growth: '+28%' },
    { metric: 'EBITDA (₹ Cr)', fy22: '280', fy23: '390', fy24: '520', growth: '+33%' },
    { metric: 'PAT (₹ Cr)', fy22: '180', fy23: '290', fy24: '420', growth: '+45%' },
    { metric: 'EBITDA Margin', fy22: '22.6%', fy23: '23.2%', fy24: '24.2%', growth: '+1.0%' },
    { metric: 'PAT Margin', fy22: '14.5%', fy23: '17.3%', fy24: '19.5%', growth: '+2.2%' },
    { metric: 'ROE', fy22: '18.2%', fy23: '21.5%', fy24: '24.8%', growth: '+3.3%' },
    { metric: 'ROCE', fy22: '22.1%', fy23: '25.8%', fy24: '28.4%', growth: '+2.6%' },
  ];

  const anchorInvestors = [
    { name: 'Goldman Sachs Asset Management', allocation: '₹180 Cr', shares: '12,50,000' },
    { name: 'Morgan Stanley Investment Fund', allocation: '₹150 Cr', shares: '10,41,667' },
    { name: 'HDFC Mutual Fund', allocation: '₹120 Cr', shares: '8,33,333' },
    { name: 'SBI Life Insurance', allocation: '₹100 Cr', shares: '6,94,444' },
    { name: 'Kotak Mahindra AMC', allocation: '₹85 Cr', shares: '5,90,278' },
    { name: 'ICICI Prudential', allocation: '₹75 Cr', shares: '5,20,833' },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-6 border border-indigo-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">About {ipo.name}</h2>
                  <p className="text-sm text-slate-500">Company Overview from DHRP</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                {ipo.name} is a leading technology-driven company established in 2015, headquartered in Mumbai, India.
                The company has emerged as a significant player in the digital services sector, providing end-to-end
                solutions across multiple verticals including fintech, e-commerce enablement, and enterprise software.
              </p>
              <p className="text-slate-700 leading-relaxed">
                With a presence in 12 countries and serving over 30,000 enterprise clients, the company has demonstrated
                consistent growth trajectory. The management team brings over 150 years of combined experience from
                leading global technology companies.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Founded', value: '2015', icon: <Calendar className="w-5 h-5" /> },
                { label: 'Employees', value: '4,500+', icon: <Users className="w-5 h-5" /> },
                { label: 'Countries', value: '12', icon: <Globe className="w-5 h-5" /> },
                { label: 'Clients', value: '30,000+', icon: <Briefcase className="w-5 h-5" /> },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 border border-slate-200 text-center">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-2 text-slate-600">
                    {item.icon}
                  </div>
                  <p className="text-2xl font-bold text-slate-900">{item.value}</p>
                  <p className="text-xs text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-indigo-600" /> Key Management
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'Rajesh Kumar', role: 'CEO & Managing Director', exp: '25+ years in Tech' },
                  { name: 'Priya Sharma', role: 'Chief Financial Officer', exp: '20+ years in Finance' },
                  { name: 'Amit Patel', role: 'Chief Technology Officer', exp: '18+ years in Engineering' },
                  { name: 'Sunita Reddy', role: 'Chief Operating Officer', exp: '22+ years in Operations' },
                ].map((person, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {person.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{person.name}</p>
                      <p className="text-xs text-slate-600">{person.role}</p>
                      <p className="text-xs text-indigo-600">{person.exp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Layers className="w-6 h-6 text-indigo-600" /> Business Model & Ecosystem
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                The company operates through a diversified business model with multiple revenue streams.
                The core business is built on a SaaS-based platform offering enterprise solutions,
                complemented by transaction-based revenue from B2B services and recurring subscription models.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-slate-800 mb-3">Revenue by Segment</h3>
                  <div className="h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={segmentData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={90}
                          dataKey="value"
                          label={({ name, value }) => `${name}: ${value}%`}
                          labelLine={false}
                        >
                          {segmentData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-slate-800 mb-3">Segment Breakdown</h3>
                  {segmentData.map((segment, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded" style={{ backgroundColor: segment.color }}></div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-slate-700">{segment.name}</span>
                          <span className="text-sm font-bold text-slate-900">{segment.value}%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{ width: `${segment.value}%`, backgroundColor: segment.color }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: 'Subscription Revenue', value: '62%', desc: 'Annual recurring revenue from SaaS products', color: 'indigo' },
                { title: 'Transaction Fees', value: '28%', desc: 'Per-transaction charges on B2B platform', color: 'emerald' },
                { title: 'Professional Services', value: '10%', desc: 'Implementation & consulting services', color: 'amber' },
              ].map((item, idx) => (
                <div key={idx} className={`bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 rounded-xl p-4 border border-${item.color}-200`}>
                  <p className={`text-3xl font-bold text-${item.color}-700 mb-1`}>{item.value}</p>
                  <p className="font-semibold text-slate-800 text-sm">{item.title}</p>
                  <p className="text-xs text-slate-600 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-emerald-600" /> Financial Performance
              </h2>

              <div className="h-[300px] mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                    <XAxis dataKey="year" tick={{ fontSize: 12, fill: '#64748b' }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 12, fill: '#64748b' }} axisLine={false} tickLine={false} />
                    <Tooltip
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                      formatter={(value: number) => [`₹${value} Cr`, '']}
                    />
                    <Legend />
                    <Bar dataKey="revenue" name="Revenue" fill="#6366f1" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="profit" name="Net Profit" fill="#10b981" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-slate-200 bg-slate-50">
                      <th className="text-left py-3 px-3 font-semibold text-slate-800">Particulars</th>
                      <th className="text-right py-3 px-3 font-semibold text-slate-800">FY22</th>
                      <th className="text-right py-3 px-3 font-semibold text-slate-800">FY23</th>
                      <th className="text-right py-3 px-3 font-semibold text-slate-800">FY24</th>
                      <th className="text-right py-3 px-3 font-semibold text-emerald-700">YoY Growth</th>
                    </tr>
                  </thead>
                  <tbody>
                    {financialMetrics.map((row, idx) => (
                      <tr key={idx} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'} border-b border-slate-100`}>
                        <td className="py-3 px-3 font-medium text-slate-700">{row.metric}</td>
                        <td className="py-3 px-3 text-right text-slate-900">{row.fy22}</td>
                        <td className="py-3 px-3 text-right text-slate-900">{row.fy23}</td>
                        <td className="py-3 px-3 text-right font-semibold text-slate-900">{row.fy24}</td>
                        <td className="py-3 px-3 text-right font-semibold text-emerald-600">{row.growth}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Debt/Equity', value: '0.12', status: 'good' },
                { label: 'Current Ratio', value: '2.8', status: 'good' },
                { label: 'Interest Coverage', value: '15.2x', status: 'good' },
                { label: 'Asset Turnover', value: '1.4x', status: 'neutral' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 border border-slate-200 text-center">
                  <p className={`text-2xl font-bold ${item.status === 'good' ? 'text-emerald-600' : 'text-slate-700'}`}>{item.value}</p>
                  <p className="text-xs text-slate-500 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-indigo-600" /> Customer Growth & Retention
              </h2>

              <div className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={customerGrowthData}>
                    <defs>
                      <linearGradient id="colorCustomers" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                    <XAxis dataKey="quarter" tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                    <Area type="monotone" dataKey="customers" stroke="#6366f1" strokeWidth={3} fill="url(#colorCustomers)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-5 text-white">
                <p className="text-indigo-100 text-sm mb-1">Customer Growth (YoY)</p>
                <p className="text-4xl font-bold">+149%</p>
                <p className="text-indigo-200 text-xs mt-2">12,500 → 31,200 customers</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-5 text-white">
                <p className="text-emerald-100 text-sm mb-1">Retention Rate</p>
                <p className="text-4xl font-bold">93%</p>
                <p className="text-emerald-200 text-xs mt-2">Industry avg: 78%</p>
              </div>
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-5 text-white">
                <p className="text-amber-100 text-sm mb-1">Net Revenue Retention</p>
                <p className="text-4xl font-bold">128%</p>
                <p className="text-amber-200 text-xs mt-2">Expansion {'>'} Churn</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-4">Customer Segmentation</h3>
              <div className="space-y-3">
                {[
                  { segment: 'Enterprise (>₹10Cr ARR)', count: '450', revenue: '58%', color: '#6366f1' },
                  { segment: 'Mid-Market (₹1-10Cr ARR)', count: '2,800', revenue: '28%', color: '#10b981' },
                  { segment: 'SMB (<₹1Cr ARR)', count: '27,950', revenue: '14%', color: '#f59e0b' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl">
                    <div className="w-3 h-10 rounded" style={{ backgroundColor: item.color }}></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-slate-800">{item.segment}</span>
                        <span className="text-sm text-slate-500">{item.count} customers</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full rounded-full" style={{ width: item.revenue, backgroundColor: item.color }}></div>
                        </div>
                        <span className="text-sm font-semibold" style={{ color: item.color }}>{item.revenue}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Network className="w-6 h-6 text-amber-600" /> Competitive Landscape
              </h2>

              <div className="mb-6">
                <h3 className="font-semibold text-slate-800 mb-3">Market Share Distribution</h3>
                <div className="flex h-8 rounded-lg overflow-hidden">
                  {competitorData.map((comp, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center text-xs font-semibold text-white transition-all hover:opacity-90"
                      style={{
                        width: `${comp.marketShare}%`,
                        backgroundColor:
                          idx === 0
                            ? '#6366f1'
                            : idx === 1
                            ? '#10b981'
                            : idx === 2
                            ? '#f59e0b'
                            : idx === 3
                            ? '#ef4444'
                            : '#94a3b8',
                      }}
                      title={`${comp.name}: ${comp.marketShare}%`}
                    >
                      {comp.marketShare > 15 && `${comp.marketShare}%`}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 mt-3">
                  {competitorData.map((comp, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs">
                      <div
                        className="w-3 h-3 rounded"
                        style={{
                          backgroundColor:
                            idx === 0
                              ? '#6366f1'
                              : idx === 1
                              ? '#10b981'
                              : idx === 2
                              ? '#f59e0b'
                              : idx === 3
                              ? '#ef4444'
                              : '#94a3b8',
                        }}
                      ></div>
                      <span className="text-slate-600">{comp.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-slate-200 bg-slate-50">
                      <th className="text-left py-3 px-3 font-semibold text-slate-800">Company</th>
                      <th className="text-right py-3 px-3 font-semibold text-slate-800">Market Share</th>
                      <th className="text-right py-3 px-3 font-semibold text-slate-800">Revenue Growth</th>
                      <th className="text-right py-3 px-3 font-semibold text-slate-800">P/E Ratio</th>
                    </tr>
                  </thead>
                  <tbody>
                    {competitorData.map((comp, idx) => (
                      <tr key={idx} className={`${idx === 0 ? 'bg-indigo-50' : idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'} border-b border-slate-100`}>
                        <td className={`py-3 px-3 font-medium ${idx === 0 ? 'text-indigo-700' : 'text-slate-700'}`}>
                          {idx === 0 && <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded mr-2">IPO</span>}
                          {comp.name}
                        </td>
                        <td className="py-3 px-3 text-right text-slate-900">{comp.marketShare}%</td>
                        <td
                          className={`py-3 px-3 text-right font-semibold ${
                            comp.growth > 30
                              ? 'text-emerald-600'
                              : comp.growth > 15
                              ? 'text-amber-600'
                              : 'text-slate-600'
                          }`}
                        >
                          +{comp.growth}%
                        </td>
                        <td className="py-3 px-3 text-right text-slate-900">{comp.pe}x</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-200">
                <h3 className="font-bold text-emerald-800 mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" /> Competitive Moats
                </h3>
                <ul className="space-y-2 text-sm text-emerald-900">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    Proprietary technology with 15+ patents
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    Network effects from 30K+ clients
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    High switching costs (avg 18 months integration)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    Strong brand recognition in target market
                  </li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
                <h3 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" /> Competitive Threats
                </h3>
                <ul className="space-y-2 text-sm text-amber-900">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">!</span>
                    Large tech giants entering the space
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">!</span>
                    Price competition from newer entrants
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">!</span>
                    Technology disruption risk
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">!</span>
                    Talent acquisition challenges
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-indigo-400" /> Strategic Growth Priorities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Geographic Expansion', desc: 'Enter 5 new markets in SEA & Middle East by FY26', icon: <Globe className="w-5 h-5" /> },
                  { title: 'Product Innovation', desc: 'Launch AI-powered analytics suite in Q2 FY25', icon: <Sparkles className="w-5 h-5" /> },
                  { title: 'M&A Strategy', desc: 'Acquire 2-3 complementary tech companies', icon: <Layers className="w-5 h-5" /> },
                  { title: 'Enterprise Focus', desc: 'Increase enterprise revenue share to 70%', icon: <Building2 className="w-5 h-5" /> },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2 text-indigo-300">
                      {item.icon}
                      <span className="font-semibold">{item.title}</span>
                    </div>
                    <p className="text-sm text-slate-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Factory className="w-5 h-5 text-indigo-600" /> Proposed Use of IPO Proceeds
              </h3>
              <div className="space-y-3">
                {[
                  { purpose: 'Technology & Product Development', amount: 450, percent: 35 },
                  { purpose: 'Geographic Expansion', amount: 320, percent: 25 },
                  { purpose: 'Strategic Acquisitions', amount: 260, percent: 20 },
                  { purpose: 'Working Capital', amount: 130, percent: 10 },
                  { purpose: 'General Corporate Purposes', amount: 130, percent: 10 },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-slate-700">{item.purpose}</span>
                        <span className="text-sm text-slate-500">₹{item.amount} Cr ({item.percent}%)</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${item.percent}%` }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-500" /> Anchor Investors
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-slate-200 bg-slate-50">
                      <th className="text-left py-3 px-3 font-semibold text-slate-800">Investor</th>
                      <th className="text-right py-3 px-3 font-semibold text-slate-800">Allocation</th>
                      <th className="text-right py-3 px-3 font-semibold text-slate-800">Shares</th>
                    </tr>
                  </thead>
                  <tbody>
                    {anchorInvestors.map((investor, idx) => (
                      <tr key={idx} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'} border-b border-slate-100`}>
                        <td className="py-3 px-3 font-medium text-slate-700">{investor.name}</td>
                        <td className="py-3 px-3 text-right font-semibold text-slate-900">{investor.allocation}</td>
                        <td className="py-3 px-3 text-right text-slate-600">{investor.shares}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-3 bg-emerald-50 rounded-lg text-sm text-emerald-800">
                <span className="font-semibold">Total Anchor Portion:</span> ₹710 Cr (55% of QIB quota)
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5" /> AI Analysis Summary
              </h3>
              <p className="text-indigo-100 leading-relaxed">
                Based on comprehensive analysis of the DHRP, {ipo.name} presents a compelling investment opportunity
                with strong fundamentals, diversified revenue streams, and clear growth visibility. The company's
                market leadership position, high customer retention, and strategic initiatives position it well for
                sustained growth. However, investors should consider the competitive intensity and valuation
                premium relative to peers.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Strong Buy: 3 Analysts</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Buy: 5 Analysts</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Hold: 2 Analysts</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const pageNames = [
    'About Company',
    'Business Model',
    'Financials',
    'Customer Growth',
    'Competition',
    'Growth & Investors',
  ];

  return (
    <div className="animate-fade-in pb-24 relative">
      <div className="bg-white rounded-xl p-4 border border-slate-200 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
            <FileText className="w-4 h-4 text-indigo-600" />
            AI-Powered DHRP Analysis
          </h3>
          <span className="text-xs text-slate-500">Page {currentPage} of {totalPages}</span>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
          {pageNames.map((name, idx) => (
            <button
              key={idx}
              onClick={() => onPageChange(idx + 1)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                currentPage === idx + 1 ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      {renderPage()}

      <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-200">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            currentPage === 1
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </button>

        <div className="flex items-center gap-1">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => onPageChange(i + 1)}
              className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
                currentPage === i + 1
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            currentPage === totalPages
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
              : 'bg-indigo-600 text-white hover:bg-indigo-700'
          }`}
        >
          Next
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="sticky bottom-0 left-0 right-0 mt-6">
        <div className="bg-gradient-to-r from-slate-900 to-indigo-900 rounded-2xl p-4 sm:p-5 shadow-2xl border border-white/10">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative group">
              <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="E.g., What are the key risks? Who are the anchor investors? Revenue breakdown..."
                className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent text-sm text-white placeholder-slate-400"
              />
            </div>
            <button className="bg-white hover:bg-slate-100 text-slate-900 font-semibold px-5 py-3 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm whitespace-nowrap">
              <Send className="w-4 h-4" />
              Ask Listing Lens AI
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
