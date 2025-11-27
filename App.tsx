import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { IPODetail } from './components/IPODetail';
import { MOCK_IPOS } from './constants';
import { ViewState } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('dashboard');
  const [selectedIpoId, setSelectedIpoId] = useState<string | null>(null);
  const [watchlist, setWatchlist] = useState<string[]>([]);

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

  return (
    <Layout onHomeClick={handleHomeClick}>
      {view === 'dashboard' && (
        <Dashboard 
          onIpoSelect={handleIpoSelect} 
          watchlist={watchlist}
          onToggleWatchlist={toggleWatchlist}
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
};

export default App;