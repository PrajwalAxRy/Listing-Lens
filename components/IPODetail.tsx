import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IPO } from '../types';
import { 
  ArrowLeft, Calendar, FileText, ShieldCheck, 
  AlertTriangle, DollarSign, PieChart as PieChartIcon, 
  TrendingUp, CheckCircle2, Clock, BookOpen, Calculator,
  ChevronDown, ChevronRight, Plus, Minus, Flame, Zap, 
  Star, Trophy, Users
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

interface IPODetailProps {
  ipo: IPO;
  onBack: () => void;
}

// Helper function to format amount in Indian currency format (₹1,23,456)
const formatIndianCurrency = (amount: number): string => {
  const formatted = amount.toLocaleString('en-IN');
  return `₹${formatted}`;
};

// Generate application details with calculated amount
const getApplicationDetailsWithAmount = (details: { category: string; lots: number; shares: number }[] | undefined, maxPrice: number) => {
  if (!details || details.length === 0 || !maxPrice) return null;
  
  return details.map(({ category, lots, shares }) => ({
    category,
    lots,
    shares,
    amount: shares * maxPrice,
  }));
};

// Calculate allotment chances based on retail subscription
const calculateAllotmentChances = (retailSubscription: number) => {
  if (retailSubscription <= 0) return { percentage: 100, ratio: 1 };
  const percentage = Math.min((1 / retailSubscription) * 100, 100);
  const ratio = Math.round(retailSubscription);
  return { percentage, ratio };
};

export const IPODetail: React.FC<IPODetailProps> = ({ ipo, onBack }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Overview');
  const [expandedReservations, setExpandedReservations] = useState<Set<string>>(new Set());

  const toggleReservationExpand = (category: string) => {
    setExpandedReservations(prev => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  };
  const upperPriceBand = ipo.priceBand.max;
  const gmpPercent = upperPriceBand > 0 ? (ipo.gmp / upperPriceBand) * 100 : null;
  const companySummary = ipo.summary ?? ipo.description;

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
                  <span className="font-semibold text-slate-900">₹{ipo.priceBand.min} - ₹{ipo.priceBand.max}</span>
               </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full lg:min-w-[200px] lg:max-w-[240px]">
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200 p-3 sm:p-4 rounded-xl text-center">
              <p className="text-xs sm:text-sm text-indigo-600 font-medium mb-1">Expected GMP</p>
              <div className="text-2xl sm:text-3xl font-bold text-indigo-900 flex items-center justify-center gap-2">
                 <span className="flex items-center gap-2">
                   ₹{ipo.gmp}
                   {typeof gmpPercent === 'number' && (
                     <span className="text-sm sm:text-base font-semibold text-emerald-600">
                       ({gmpPercent >= 0 ? '+' : ''}{gmpPercent.toFixed(1)}%)
                     </span>
                   )}
                 </span>
                 <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
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
           
           {(() => {
             // Determine timeline statuses strictly from the IPO calendar dates
             const normalizeDate = (value: string) => {
               const date = new Date(value);
               date.setHours(0, 0, 0, 0);
               return date;
             };

             const today = new Date();
             today.setHours(0, 0, 0, 0);

             const openDate = normalizeDate(ipo.openDate);
             const closeDate = normalizeDate(ipo.closeDate);
             const listingDate = normalizeDate(ipo.listingDate);

             const hasOpened = today >= openDate;
             const hasClosed = today >= closeDate;
             const hasListed = today >= listingDate;

             return [
               {
                 label: 'IPO Open',
                 date: ipo.openDate,
                 status: hasOpened ? 'green' : 'yellow'
               },
               {
                 label: 'IPO Close',
                 date: ipo.closeDate,
                 status: hasClosed ? 'green' : hasOpened ? 'yellow' : 'gray'
               },
               {
                 label: 'Listing',
                 date: ipo.listingDate,
                 status: hasListed ? 'green' : hasClosed ? 'yellow' : 'gray'
               },
             ].map((step, idx) => (
               <div key={idx} className="relative z-10 bg-white px-2 flex flex-col items-center">
                 <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border-2 
                    ${step.status === 'green' ? 'bg-emerald-500 border-emerald-500 text-white' : 
                      step.status === 'yellow' ? 'bg-amber-400 border-amber-400 text-white' : 
                      'bg-white border-slate-300 text-slate-300'}`}>
                    {step.status === 'green' ? <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" /> : <Clock className="w-4 h-4 sm:w-5 sm:h-5" />}
                 </div>
                 <p className={`mt-2 text-xs sm:text-sm font-medium ${step.status !== 'gray' ? 'text-slate-900' : 'text-slate-400'}`}>{step.label}</p>
                 <p className="text-xs text-slate-500">{step.date}</p>
               </div>
             ));
           })()}
        </div>
      </div>

      {/* Details Tabs Layout */}
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
        {/* Left Side: Tabs */}
        <div className="flex-1 space-y-4 sm:space-y-6">
          <div className="bg-white rounded-lg border-b border-slate-200 pl-4 pr-2 sm:pr-4">
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
                 
                <div className="sm:col-span-2">
                  <DetailCard title="Summary" icon={<BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-500" />}>
                   <p className="text-sm sm:text-base text-b-600 leading-relaxed">{companySummary}</p>
                  </DetailCard>
                </div>
                 
                 <DetailCard title="Issue Details">
                    <DetailRow label="Issue Size" value={ipo.issueSize} />
                    <DetailRow label="Fresh Issue" value={ipo.issueDetails.freshIssue} />
                    <DetailRow label="Offer for Sale" value={ipo.issueDetails.offerForSale} />
                    <DetailRow label="Face Value" value={ipo.issueDetails.faceValue} />
                    <DetailRow label="Issue Price Band" value={`₹${ipo.priceBand.min} - ₹${ipo.priceBand.max}`} />
                 </DetailCard>

                 {/* Ask AI Card - Mobile Only */}
                 <div className="sm:col-span-2 lg:hidden bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-4 border border-slate-300">
                   <p className="font-bold text-slate-900 text-sm mb-2">Have a question?</p>
                   <p className="text-xs text-slate-600 mb-1">"What does GMP indicate?"</p>
                   <p className="text-xs text-slate-600 mb-1">"Analyze RHP for competition risk"</p>
                   <p className="text-xs text-slate-600 mb-1">"Who are the anchor investors?"</p>
                   <p className="text-xs text-slate-600 mb-3">"Is this IPO overvalued?"</p>
                   <button
                     onClick={() => { navigate('/ask-ai'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                     className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2 px-4 rounded-xl transition-colors text-xs"
                   >
                     Ask Listing Lens AI →
                   </button>
                 </div>

                 <DetailCard title="Valuation (Upper Band)">
                    {ipo.valuation ? (
                      <>
                        <DetailRow label="Market Cap (Rs. Cr)" value={ipo.valuation.marketCap} />
                        <DetailRow label="EPS*" value={ipo.valuation.eps} />
                        <DetailRow label="PE*" value={ipo.valuation.pe} />
                        <DetailRow label="EV/EBITDA" value={ipo.valuation.evEbitda} />
                        <DetailRow label="Enterprise Value (Rs. Cr)" value={ipo.valuation.enterpriseValue} />
                      </>
                    ) : (
                      <p className="text-sm text-slate-500">Valuation details not available for this IPO.</p>
                    )}
                 </DetailCard>

                 <div className="bg-white p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm">
                    {ipo.objectsOfIssue && ipo.objectsOfIssue.length > 0 ? (
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm sm:text-base">
                          <thead>
                            <tr className="border-b-2 border-slate-200 bg-slate-50">
                              <th className="text-left py-3 px-3 text-black-800 font-semibold">Objects of the Issue</th>
                              <th className="text-right py-3 px-3 text-black-800 font-semibold whitespace-nowrap">Amount (Rs Cr)</th>
                            </tr>
                          </thead>
                          <tbody>
                            {ipo.objectsOfIssue.map((obj, idx) => (
                              <tr key={idx} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'} ${idx < ipo.objectsOfIssue!.length - 1 ? 'border-b border-slate-100' : ''} hover:bg-slate-100/50 transition-colors`}>
                                <td className="py-3 px-3 text-black-800 font-semibold leading-relaxed">{obj.purpose}</td>
                                <td className="py-3 px-3 text-right font-semibold text-slate-900">{obj.amount}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <p className="text-sm text-slate-500">Objects of the issue not available for this IPO.</p>
                    )}
                 </div>

                <div className="bg-white p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm">
                   {ipo.promoterHoldings && ipo.promoterHoldings.length > 0 ? (
                     <div className="overflow-x-auto">
                       <table className="w-full text-sm sm:text-base">
                         <thead>
                           <tr className="border-b-2 border-slate-200 bg-slate-50">
                             <th className="text-left py-3 px-3 text-black-800 font-semibold">Particulars</th>
                             <th className="text-right py-3 px-3 text-black-800 font-semibold">Pre-Offer</th>
                             <th className="text-right py-3 px-3 text-black-800 font-semibold">Post-Offer</th>
                           </tr>
                         </thead>
                         <tbody>
                           {ipo.promoterHoldings.map((holding, idx) => (
                             <tr key={idx} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'} ${idx < ipo.promoterHoldings!.length - 1 ? 'border-b border-slate-100' : ''} hover:bg-slate-100/50 transition-colors`}>
                               <td className="py-3 px-3 text-slate-700 font-medium">{holding.category}</td>
                               <td className="py-3 px-3 text-right font-semibold text-slate-900">{holding.preOffer}</td>
                               <td className="py-3 px-3 text-right font-semibold text-slate-900">{holding.postOffer}</td>
                             </tr>
                           ))}
                         </tbody>
                       </table>
                     </div>
                   ) : (
                     <p className="text-sm text-slate-500">Promoter holdings not available for this IPO.</p>
                   )}
                </div>

                 <div className="bg-white p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm">
                   {ipo.ipoReservation && ipo.ipoReservation.length > 0 ? (
                     <div className="overflow-x-auto">
                       <table className="w-full text-sm sm:text-base">
                         <thead>
                           <tr className="border-b-2 border-slate-200 bg-slate-50">
                             <th className="text-left py-3 px-3 text-black-800 font-semibold">Investor Category</th>
                             <th className="text-right py-3 px-3 text-black-800 font-semibold">Shares Offered (%)</th>
                             <th className="text-right py-3 px-3 text-black-800 font-semibold">Shares Offered</th>
                           </tr>
                         </thead>
                         <tbody>
                           {ipo.ipoReservation.map((reservation, idx) => {
                             const hasChildren = reservation.children && reservation.children.length > 0;
                             const isExpanded = expandedReservations.has(reservation.category);
                             return (
                               <React.Fragment key={idx}>
                                 <tr className={`${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'} ${idx < ipo.ipoReservation!.length - 1 && !isExpanded ? 'border-b border-slate-100' : ''} hover:bg-slate-100/50 transition-colors`}>
                                   <td className="py-3 px-3 text-slate-700 font-medium">
                                     <div className="flex items-center gap-2">
                                       {hasChildren ? (
                                         <button
                                           onClick={() => toggleReservationExpand(reservation.category)}
                                           className="w-5 h-5 flex items-center justify-center rounded bg-slate-200 hover:bg-slate-300 transition-colors"
                                         >
                                           {isExpanded ? <Minus className="w-3 h-3 text-slate-600" /> : <Plus className="w-3 h-3 text-slate-600" />}
                                         </button>
                                       ) : (
                                         <span className="w-5" />
                                       )}
                                       {reservation.category}
                                     </div>
                                   </td>
                                   <td className="py-3 px-3 text-right font-semibold text-slate-900">{reservation.sharesOfferedPercent}</td>
                                   <td className="py-3 px-3 text-right font-semibold text-slate-900">{reservation.sharesOfferedRaw}</td>
                                 </tr>
                                 {hasChildren && isExpanded && reservation.children!.map((child, childIdx) => (
                                   <tr key={`${idx}-${childIdx}`} className={`bg-slate-50/80 ${childIdx < reservation.children!.length - 1 ? 'border-b border-slate-100' : 'border-b border-slate-200'} hover:bg-slate-100/50 transition-colors`}>
                                     <td className="py-2.5 px-3 pl-10 text-slate-600 text-sm">
                                       <div className="flex items-center gap-2">
                                         <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                                         {child.category}
                                       </div>
                                     </td>
                                     <td className="py-2.5 px-3 text-right font-medium text-slate-700 text-sm">{child.sharesOfferedPercent}</td>
                                     <td className="py-2.5 px-3 text-right font-medium text-slate-700 text-sm">{child.sharesOfferedRaw}</td>
                                   </tr>
                                 ))}
                               </React.Fragment>
                             );
                           })}
                         </tbody>
                       </table>
                     </div>
                   ) : (
                     <p className="text-sm text-slate-500">IPO reservation details not available.</p>
                   )}
                 </div>

                 <div className="bg-white p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm">
                    {(() => {
                      const details = getApplicationDetailsWithAmount(ipo.applicationDetails, ipo.priceBand.max);
                      if (!details) {
                        return <p className="text-sm text-slate-500">Application details not available for this IPO.</p>;
                      }
                      return (
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm sm:text-base">
                            <thead>
                              <tr className="border-b-2 border-slate-200 bg-slate-50">
                                <th className="text-left py-3 px-3 text-black-800 font-semibold">Application</th>
                                <th className="text-right py-3 px-3 text-black-800 font-semibold">Lots</th>
                                <th className="text-right py-3 px-3 text-black-800 font-semibold">Shares</th>
                                <th className="text-right py-3 px-3 text-black-800 font-semibold">Amount</th>
                              </tr>
                            </thead>
                            <tbody>
                              {details.map((row, idx) => (
                                <tr key={idx} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'} ${idx < details.length - 1 ? 'border-b border-slate-100' : ''} hover:bg-slate-100/50 transition-colors`}>
                                  <td className="py-3 px-3 text-slate-700 font-medium">{row.category}</td>
                                  <td className="py-3 px-3 text-right font-semibold text-slate-900">{row.lots}</td>
                                  <td className="py-3 px-3 text-right font-semibold text-slate-900">{row.shares.toLocaleString('en-IN')}</td>
                                  <td className="py-3 px-3 text-right font-semibold text-slate-900">{formatIndianCurrency(row.amount)}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      );
                    })()}
                 </div>

                 
                 <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div className="bg-emerald-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-emerald-200 shadow-sm">
                       <h4 className="flex items-center text-emerald-800 font-bold mb-4 text-base sm:text-lg">
                         <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 mr-2.5" /> Strengths
                       </h4>
                       <ul className="space-y-2.5 sm:space-y-3">
                         {ipo.strengths.map((s, i) => (
                           <li key={i} className="flex items-start text-sm sm:text-base text-emerald-900/90 leading-relaxed">
                             <span className="mr-2.5 text-emerald-600 font-bold">•</span> {s}
                           </li>
                         ))}
                       </ul>
                    </div>
                    <div className="bg-amber-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-amber-200 shadow-sm">
                       <h4 className="flex items-center text-amber-800 font-bold mb-4 text-base sm:text-lg">
                         <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 mr-2.5" /> Risks
                       </h4>
                       <ul className="space-y-2.5 sm:space-y-3">
                         {ipo.risks.map((r, i) => (
                           <li key={i} className="flex items-start text-sm sm:text-base text-amber-900/90 leading-relaxed">
                             <span className="mr-2.5 text-amber-600 font-bold">•</span> {r}
                           </li>
                         ))}
                       </ul>
                    </div>
                 </div>
              </div>
            )}

            {activeTab === 'Subscription' && (
              <div className="space-y-4 sm:space-y-6 animate-fade-in">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4 sm:mb-6">Subscription Status (To Fix)</h3>
                <p className="text-sm sm:text-base text-slate-700 mb-3 sm:mb-4">The <span className="font-semibold text-slate-900">{ipo.name} IPO</span> is subscribed <span className="font-semibold text-slate-900">{ipo.subscription.total}x</span> so far. The public issue (retail) is subscribed <span className="font-semibold text-slate-900">{ipo.subscription.retail}x</span>, QIB (ex-Anchor) is subscribed <span className="font-semibold text-slate-900">{ipo.subscription.qib}x</span>, and NII is subscribed <span className="font-semibold text-slate-900">{ipo.subscription.nii}x</span>. Data updated on //Time// </p>
                 
                 <div className="grid grid-cols-4 gap-3 sm:gap-4">
                    <SubscriptionStat label="QIB" value={`${ipo.subscription.qib}x`} color="text-purple-600" />
                    <SubscriptionStat label="NII" value={`${ipo.subscription.nii}x`} color="text-blue-600" />
                    <SubscriptionStat label="Retail" value={`${ipo.subscription.retail}x`} color="text-indigo-600" />
                    <AllotmentChances retailSubscription={ipo.subscription.retail} />
                 </div>

                 {ipo.subscriptionTrend && ipo.subscriptionTrend.length > 0 && (
                   <div className="bg-white p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm">
                     <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4 sm:mb-6">Subscription Trend</h3>
                     <div className="overflow-x-auto">
                       <table className="w-full text-sm sm:text-base">
                         <thead>
                           <tr className="border-b-2 border-slate-200 bg-slate-50">
                             <th className="text-left py-3 px-3 text-slate-800 font-semibold">Date</th>
                             <th className="text-right py-3 px-3 text-slate-800 font-semibold">QIB (Ex Anchor)</th>
                             <th className="text-right py-3 px-3 text-slate-800 font-semibold">NII</th>
                             <th className="text-right py-3 px-3 text-slate-800 font-semibold">NII (&gt; ₹10L)</th>
                             <th className="text-right py-3 px-3 text-slate-800 font-semibold">NII (&lt; ₹10L)</th>
                             <th className="text-right py-3 px-3 text-slate-800 font-semibold">Retail</th>
                             <th className="text-right py-3 px-3 text-slate-800 font-semibold">Total</th>
                           </tr>
                         </thead>
                         <tbody>
                           {ipo.subscriptionTrend.map((row, idx) => (
                             <tr key={idx} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'} ${idx < ipo.subscriptionTrend!.length - 1 ? 'border-b border-slate-100' : ''} hover:bg-slate-100/50 transition-colors`}>
                               <td className="py-3 px-3 text-slate-700 font-medium">
                                 {row.date.split('\n').map((line, i) => (
                                   <div key={i} className={i === 0 ? 'font-semibold' : 'text-slate-500 text-sm'}>{line}</div>
                                 ))}
                               </td>
                               <td className="py-3 px-3 text-right font-semibold text-slate-900">{row.qibExAnchor}x</td>
                               <td className="py-3 px-3 text-right font-semibold text-slate-900">{row.nii}x</td>
                               <td className="py-3 px-3 text-right font-semibold text-slate-900">{row.niiAbove10L}x</td>
                               <td className="py-3 px-3 text-right font-semibold text-slate-900">{row.niiBelow10L}x</td>
                               <td className="py-3 px-3 text-right font-semibold text-slate-900">{row.retail}x</td>
                               <td className="py-3 px-3 text-right font-bold text-slate-900">{row.total}x</td>
                             </tr>
                           ))}
                         </tbody>
                       </table>
                     </div>
                   </div>
                 )}
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
        <div className="lg:w-80 lg:sticky lg:top-24 lg:self-start space-y-4 sm:space-y-6">
           {/* Ask AI Card - Desktop Only */}
           <div className="hidden mt-2 lg:block bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-4 sm:p-5 border border-slate-300">
             <p className="font-bold text-slate-900 text-sm sm:text-base mb-2">Have a question?</p>
             <p className="text-xs sm:text-sm text-slate-600 mb-1">"What does GMP indicate?"</p>
             <p className="text-xs sm:text-sm text-slate-600 mb-1">"Analyze RHP for competition risk"</p>
             <p className="text-xs sm:text-sm text-slate-600 mb-1">"Who are the anchor investors?"</p>
             <p className="text-xs sm:text-sm text-slate-600 mb-3">"Is this IPO overvalued?"</p>
             <button
               onClick={() => { navigate('/ask-ai'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
               className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2 sm:py-2.5 px-4 rounded-xl transition-colors text-xs sm:text-sm"
             >
               Ask Listing Lens AI →
             </button>
           </div>

           <div className="bg-indigo-900 rounded-2xl p-4 sm:p-6 text-white shadow-xl">
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

const DetailCard: React.FC<{ title: string; icon?: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
  <div className="bg-white p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
     <div className="flex items-center gap-2.5 mb-4 sm:mb-5 pb-3 border-b border-slate-100">
       {icon}
       <h3 className="font-bold text-slate-800 text-base sm:text-lg">{title}</h3>
     </div>
     <div className="space-y-3 sm:space-y-4">
       {children}
     </div>
  </div>
);

const DetailRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex justify-between items-center text-sm sm:text-base py-1">
    <span className="text-black font-semibold">{label}</span>
    <span className="font-semibold text-slate-900 text-right">{value}</span>
  </div>
);

const SubscriptionStat: React.FC<{ label: string; value: string; color: string }> = ({ label, value, color }) => (
  <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
    <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-white/60 blur-2xl transition-transform group-hover:scale-150 duration-700"></div>
    
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-2">
        <p className="text-sm font-bold text-slate-500">{label}</p>
      </div>
      
      <div className="flex items-baseline gap-2 mt-1">
        <span className={`text-3xl sm:text-4xl font-bold ${color}`}>{value}</span>
      </div>
    </div>
  </div>
);

const AllotmentChances: React.FC<{ retailSubscription: number }> = ({ retailSubscription }) => {
  const { percentage } = calculateAllotmentChances(retailSubscription);
  
  // Determine tier based on percentage
  let tier: 'high' | 'medium' | 'low' | 'veryLow';
  let icon: React.ReactNode;

  if (percentage > 25) {
    tier = 'high';
    icon = null;
  } else if (percentage > 10) {
    tier = 'medium';
    icon = null;
  } else if (percentage > 1) {
    tier = 'low';
    icon = <Flame className="w-5 h-5" />;
  } else {
    tier = 'veryLow';
    icon = <Flame className="w-5 h-5" />;
  }
  
  const config = {
    high: {
      bg: 'bg-gradient-to-br from-cyan-50 to-cyan-100',
      border: 'border-cyan-200',
      text: 'text-cyan-900',
      subtext: 'text-cyan-700',
      iconBg: 'bg-cyan-200',
    },
    medium: {
      bg: 'bg-gradient-to-br from-indigo-50 to-indigo-100',
      border: 'border-indigo-200',
      text: 'text-indigo-900',
      subtext: 'text-indigo-700',
      iconBg: 'bg-indigo-200',
    },
    low: {
      bg: 'bg-gradient-to-br from-orange-50 to-orange-100',
      border: 'border-orange-200',
      text: 'text-orange-900',
      subtext: 'text-orange-700',
      iconBg: 'bg-orange-200',
    },
    veryLow: {
      bg: 'bg-gradient-to-br from-amber-50 to-amber-100',
      border: 'border-amber-200',
      text: 'text-amber-900',
      subtext: 'text-amber-700',
      iconBg: 'bg-amber-200',
    }
  }[tier];
  
  return (
    <div className={`${config.bg} p-4 sm:p-5 rounded-xl border ${config.border} shadow-sm relative overflow-hidden group`}>
      {/* Background Pattern/Decoration */}
      <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-white/40 blur-2xl transition-transform group-hover:scale-150 duration-700"></div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-2">
          <p className={`text-sm font-bold ${config.subtext}`}>Allotment Probability</p>
          {icon && (
            <div className={`${config.iconBg} p-1.5 rounded-lg ${config.text} shadow-sm`}>
              {icon}
            </div>
          )}
        </div>
        
        <div className="flex items-baseline gap-2 mt-1">
          <span className={`text-3xl sm:text-4xl font-bold ${config.text}`}>
            {percentage < 1 ? percentage.toFixed(2) : percentage.toFixed(0)}%
          </span>
        </div>
      </div>
    </div>
  );
};
