
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import VoidConsole from './components/VoidConsole';
import VoidSummary from './components/VoidSummary';
import { AppView } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.LANDING);

  return (
    <div className="min-h-screen relative flex flex-col font-mono-tech overflow-x-hidden">
      {/* Persistent Navigation */}
      <Navbar currentView={currentView} onNavigate={setCurrentView} />

      {/* View Switcher */}
      <main className="flex-1 flex flex-col container mx-auto px-4 md:px-8 py-8 z-10">
        {currentView === AppView.LANDING && (
          <LandingPage onLaunch={() => setCurrentView(AppView.CONSOLE)} />
        )}
        {currentView === AppView.CONSOLE && (
          <VoidConsole onInitiate={() => setCurrentView(AppView.SUMMARY)} />
        )}
        {currentView === AppView.SUMMARY && (
          <VoidSummary 
            onCancel={() => setCurrentView(AppView.CONSOLE)} 
            onConfirm={() => setCurrentView(AppView.LANDING)} 
          />
        )}
      </main>

      {/* Footer */}
      <footer className="w-full py-4 border-t border-white/10 bg-black/40 backdrop-blur-md z-10">
        <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-[10px] font-pixel gap-4 uppercase tracking-tighter">
          <p>© 2024 SolVoid. Initializing system...</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-cyan-400 transition-colors">TWITTER</a>
            <a href="#" className="hover:text-purple-400 transition-colors">DISCORD</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
