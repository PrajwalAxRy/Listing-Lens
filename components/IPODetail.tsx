import React, { useState } from 'react';
import { IPO } from '../types';
import { 
  ArrowLeft, Calendar, FileText, Activity, ShieldCheck, 
  AlertTriangle, DollarSign, PieChart as PieChartIcon, 
  TrendingUp, CheckCircle2, Clock
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

interface IPODetailProps {
  ipo: IPO;
  onBack: () => void;
}

export const IPODetail: React.FC<IPODetailProps> = ({ ipo, onBack }) => {
  const [activeTab, setActiveTab] = useState('Overview');

  const subscriptionData = [
    { name: 'QIB', value: ipo.subscription.qib },
    { name: 'NII', value: ipo.subscription.nii },
    { name: 'Retail', value: ipo.subscription.retail },
  ];

  const gmpTrendData = [
    { day: 'Day 1', price: ipo.gmp * 0.8 },
    { day: 'Day 2', price: ipo.gmp * 0.9 },
    { day: 'Day 3', price: ipo.gmp * 0.85 },
    { day: 'Today', price: ipo.gmp },
  ];

  return (
    <div className="animate-fade-in space-y-4 sm:space-y-6">
      {/* Navigation */}
      <button 
        onClick={onBack}
        className="flex items-center text-slate-500 hover:text-slate-900 transition-colors font-medium mb-2 sm:mb-4 text-sm sm:text-base"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
      </button>

      {/* Header Card */}
      <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-4 sm:gap-6">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 break-words">{ipo.name}</h1>
              <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide flex-shrink-0
                ${ipo.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 
                  ipo.status === 'Upcoming' ? 'bg-amber-100 text-amber-700' : 
                  'bg-slate-100 text-slate-600'}`}>
                {ipo.status}
              </span>
            </div>
            <p className="text-slate-500 text-sm sm:text-base lg:text-lg max-w-2xl">{ipo.description}</p>
            
            <div className="flex flex-wrap gap-2 sm:gap-4 mt-4 sm:mt-6">
               <div className="flex items-center gap-2 text-xs sm:text-sm bg-slate-50 px-2 sm:px-3 py-1.5 rounded-lg border border-slate-200">
                  <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 flex-shrink-0" />
                  <span className="text-slate-500">Close Date:</span>
                  <span className="font-semibold text-slate-900">{ipo.closeDate}</span>
               </div>
               <div className="flex items-center gap-2 text-xs sm:text-sm bg-slate-50 px-2 sm:px-3 py-1.5 rounded-lg border border-slate-200">
                  <DollarSign className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 flex-shrink-0" />
                  <span className="text-slate-500">Price Band:</span>
                  <span className="font-semibold text-slate-900">{ipo.priceBand}</span>
               </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full lg:min-w-[200px] lg:max-w-[240px]">
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200 p-3 sm:p-4 rounded-xl text-center">
              <p className="text-xs sm:text-sm text-indigo-600 font-medium mb-1">Expected GMP</p>
              <div className="text-2xl sm:text-3xl font-bold text-indigo-900 flex items-center justify-center gap-2">
                 ₹{ipo.gmp} <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
              </div>
              <p className="text-xs text-indigo-400 mt-1">Updated: {ipo.gmpUpdateDate}</p>
            </div>
             <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2.5 sm:py-3 px-4 rounded-xl transition-colors shadow-lg shadow-slate-200 text-sm sm:text-base">
               Apply Now
             </button>
          </div>
        </div>
      </div>

      {/* Timeline Steps */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 overflow-x-auto">
        <div className="flex items-center justify-between min-w-[500px] sm:min-w-[600px] relative">
           {/* Connecting Line */}
           <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-0"></div>
           
           {[
             { label: 'IPO Open', date: ipo.openDate, done: true },
             { label: 'IPO Close', date: ipo.closeDate, done: ipo.status === 'Closed' },
             { label: 'Listing', date: ipo.listingDate, done: false },
           ].map((step, idx) => (
             <div key={idx} className="relative z-10 bg-white px-2 flex flex-col items-center">
               <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border-2 
                  ${step.done ? 'bg-emerald-500 border-emerald-500 text-white' : 'bg-white border-slate-300 text-slate-300'}`}>
                  {step.done ? <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" /> : <Clock className="w-4 h-4 sm:w-5 sm:h-5" />}
               </div>
               <p className={`mt-2 text-xs sm:text-sm font-medium ${step.done ? 'text-slate-900' : 'text-slate-400'}`}>{step.label}</p>
               <p className="text-xs text-slate-500">{step.date}</p>
             </div>
           ))}
        </div>
      </div>

      {/* Details Tabs Layout */}
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
        {/* Left Side: Tabs */}
        <div className="flex-1 space-y-4 sm:space-y-6">
          <div className="bg-white border-b border-slate-200">
             <div className="flex overflow-x-auto gap-4 sm:gap-6 px-1 hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
               {['Overview', 'Subscription', 'Analysis'].map(tab => (
                 <button
                   key={tab}
                   onClick={() => setActiveTab(tab)}
                   className={`pb-3 pt-2 text-xs sm:text-sm font-semibold transition-colors border-b-2 whitespace-nowrap flex-shrink-0
                     ${activeTab === tab ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
                 >
                   {tab}
                 </button>
               ))}
             </div>
          </div>
          
          <div className="min-h-[350px] sm:min-h-[400px]">
            {activeTab === 'Overview' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 animate-fade-in">
                 <DetailCard title="Issue Details" icon={<FileText className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />}>
                    <DetailRow label="Listing At" value="BSE, NSE" />
                    <DetailRow label="Issue Size" value={ipo.issueSize} />
                    <DetailRow label="Fresh Issue" value="60%" />
                    <DetailRow label="Offer for Sale" value="40%" />
                    <DetailRow label="Face Value" value="₹10 per share" />
                    <DetailRow label="Lot Size" value={`${ipo.lotSize} Shares`} />
                 </DetailCard>

                 <DetailCard title="Financial Snapshot" icon={<Activity className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" />}>
                    <DetailRow label="Revenue (FY23)" value={ipo.financials.revenue} />
                    <DetailRow label="Net Profit (FY23)" value={ipo.financials.profit} />
                    <DetailRow label="Net Margin" value={ipo.financials.margin} />
                    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-100">
                       <p className="text-xs text-slate-400">Financial figures are indicative based on RHP.</p>
                    </div>
                 </DetailCard>
                 
                 <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-emerald-50 rounded-xl p-4 sm:p-5 border border-emerald-100">
                       <h4 className="flex items-center text-emerald-800 font-bold mb-3 text-sm sm:text-base">
                         <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 mr-2" /> Strengths
                       </h4>
                       <ul className="space-y-1.5 sm:space-y-2">
                         {ipo.strengths.map((s, i) => (
                           <li key={i} className="flex items-start text-xs sm:text-sm text-emerald-900/80">
                             <span className="mr-2">•</span> {s}
                           </li>
                         ))}
                       </ul>
                    </div>
                    <div className="bg-amber-50 rounded-xl p-4 sm:p-5 border border-amber-100">
                       <h4 className="flex items-center text-amber-800 font-bold mb-3 text-sm sm:text-base">
                         <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" /> Risks
                       </h4>
                       <ul className="space-y-1.5 sm:space-y-2">
                         {ipo.risks.map((r, i) => (
                           <li key={i} className="flex items-start text-xs sm:text-sm text-amber-900/80">
                             <span className="mr-2">•</span> {r}
                           </li>
                         ))}
                       </ul>
                    </div>
                 </div>
              </div>
            )}

            {activeTab === 'Subscription' && (
              <div className="space-y-4 sm:space-y-6 animate-fade-in">
                 <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4 sm:mb-6 flex items-center">
                      <PieChartIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-indigo-500" /> Category Subscription
                    </h3>
                    <div className="h-[250px] sm:h-[300px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={subscriptionData} layout="vertical">
                          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
                          <XAxis type="number" hide />
                          <YAxis dataKey="name" type="category" tick={{fontSize: 12, fill: '#64748b'}} width={50} />
                          <Tooltip 
                            cursor={{fill: '#f8fafc'}}
                            contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '12px'}}
                          />
                          <Bar dataKey="value" fill="#4f46e5" radius={[0, 4, 4, 0]} barSize={32} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                 </div>
                 <div className="grid grid-cols-3 gap-3 sm:gap-4">
                    <SubscriptionStat label="QIB" value={`${ipo.subscription.qib}x`} color="text-purple-600" />
                    <SubscriptionStat label="NII" value={`${ipo.subscription.nii}x`} color="text-blue-600" />
                    <SubscriptionStat label="Retail" value={`${ipo.subscription.retail}x`} color="text-indigo-600" />
                 </div>
              </div>
            )}

            {activeTab === 'Analysis' && (
              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 animate-fade-in">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4 sm:mb-6 flex items-center">
                   <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-emerald-500" /> Grey Market Premium Trend
                </h3>
                <div className="h-[250px] sm:h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={gmpTrendData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                      <XAxis dataKey="day" tick={{fontSize: 11, fill: '#94a3b8'}} axisLine={false} tickLine={false} />
                      <YAxis tick={{fontSize: 11, fill: '#94a3b8'}} axisLine={false} tickLine={false} />
                      <Tooltip 
                        contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '12px'}}
                      />
                      <Line type="monotone" dataKey="price" stroke="#10b981" strokeWidth={3} dot={{r: 4, fill: '#10b981'}} activeDot={{r: 6}} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 p-3 sm:p-4 bg-slate-50 rounded-lg text-xs sm:text-sm text-slate-600">
                  <p className="font-medium mb-1">Analyst Verdict</p>
                  <p>Based on current GMP trends and subscription numbers, the listing gain expectation is moderate to high. The company fundamentals support a long-term hold.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Quick Info (Sticky on Desktop) */}
        <div className="lg:w-80 space-y-4 sm:space-y-6">
           <div className="bg-indigo-900 rounded-2xl p-4 sm:p-6 text-white shadow-xl lg:sticky lg:top-24">
             <h3 className="font-bold text-base sm:text-lg mb-4">Investment Calculator</h3>
             <div className="space-y-3 sm:space-y-4">
                <div>
                   <label className="block text-xs text-indigo-300 mb-1">Number of Lots</label>
                   <input type="number" defaultValue={1} className="w-full bg-indigo-800 border border-indigo-700 rounded-lg py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm sm:text-base" />
                </div>
                <div className="pt-3 sm:pt-4 border-t border-indigo-800">
                   <div className="flex justify-between text-xs sm:text-sm mb-2">
                     <span className="text-indigo-300">Investment Amount</span>
                     <span className="font-medium">₹14,400</span>
                   </div>
                   <div className="flex justify-between text-xs sm:text-sm">
                     <span className="text-emerald-400">Est. Profit</span>
                     <span className="font-medium text-emerald-400">+₹3,600</span>
                   </div>
                </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const DetailCard: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
  <div className="bg-white p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-200">
     <div className="flex items-center gap-2 mb-3 sm:mb-4 pb-2 border-b border-slate-100">
       {icon}
       <h3 className="font-bold text-slate-800 text-sm sm:text-base">{title}</h3>
     </div>
     <div className="space-y-2 sm:space-y-3">
       {children}
     </div>
  </div>
);

const DetailRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex justify-between items-center text-xs sm:text-sm">
    <span className="text-slate-500">{label}</span>
    <span className="font-medium text-slate-900 text-right">{value}</span>
  </div>
);

const SubscriptionStat: React.FC<{ label: string; value: string; color: string }> = ({ label, value, color }) => (
  <div className="bg-slate-50 p-3 sm:p-4 rounded-xl text-center border border-slate-200">
    <p className="text-xs text-slate-500 mb-1">{label}</p>
    <p className={`text-lg sm:text-xl font-bold ${color}`}>{value}</p>
  </div>
);
