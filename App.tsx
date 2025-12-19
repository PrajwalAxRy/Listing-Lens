import React, { useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard, TabKey } from './components/Dashboard';
import { IPODetail } from './components/IPODetail';
import { HowToApplyIPO } from './components/guides/HowToApplyIPO';
import { CheckAllotmentStatus } from './components/guides/CheckAllotmentStatus';
import { OpenDematAccount } from './components/guides/OpenDematAccount';
import { AskAIChat } from './components/AskAIChat';
import { MOCK_IPOS } from './constants';
import { ViewState } from './types';

const App: React.FC = () => {
  const navigate = useNavigate();
  const [view, setView] = useState<ViewState>('dashboard');
  const [selectedIpoId, setSelectedIpoId] = useState<string | null>(null);
  const [watchlist, setWatchlist] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<TabKey>('Active');

  const handleIpoSelect = (ipoId: string) => {
    setSelectedIpoId(ipoId);
    setView('detail');
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHomeClick = () => {
    setView('dashboard');
    setSelectedIpoId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/');
  };

  const toggleWatchlist = (ipoId: string) => {
    setWatchlist(prev => 
      prev.includes(ipoId) 
        ? prev.filter(id => id !== ipoId)
        : [...prev, ipoId]
    );
  };

  const getSelectedIpo = () => {
    return MOCK_IPOS.find((i) => i.id === selectedIpoId);
  };

  const selectedIpo = getSelectedIpo();

  const renderDashboard = (
    <Layout onHomeClick={handleHomeClick}>
      {view === 'dashboard' && (
        <Dashboard 
          onIpoSelect={handleIpoSelect} 
          watchlist={watchlist}
          onToggleWatchlist={toggleWatchlist}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      )}
      
      {view === 'detail' && selectedIpo && (
        <IPODetail 
          ipo={selectedIpo} 
          onBack={handleHomeClick} 
        />
      )}
      
      {/* Fallback if detail view selected but ID invalid */}
      {view === 'detail' && !selectedIpo && (
        <div className="text-center py-20">
          <p className="text-slate-500">IPO not found.</p>
          <button 
            onClick={handleHomeClick} 
            className="mt-4 text-indigo-600 font-medium hover:underline"
          >
            Go Home
          </button>
        </div>
      )}
    </Layout>
  );

  const handleGuideBack = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Routes>
      <Route path="/" element={renderDashboard} />
      <Route path="/guides/how-to-apply-ipo" element={<HowToApplyIPO onBack={handleGuideBack} />} />
      <Route path="/guides/check-allotment-status" element={<CheckAllotmentStatus onBack={handleGuideBack} />} />
      <Route path="/guides/open-demat-account" element={<OpenDematAccount onBack={handleGuideBack} />} />
      <Route
        path="/ask-ai"
        element={
          <Layout onHomeClick={handleHomeClick}>
            <AskAIChat />
          </Layout>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;