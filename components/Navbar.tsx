
// Added React import to resolve namespace issues in functional component definition
import React from 'react';
import { AppView } from '../types';

interface NavbarProps {
  currentView: AppView;
  onNavigate: (view: AppView) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-white/10 bg-black/40 backdrop-blur-md sticky top-0 z-50">
      <div 
        className="flex items-center gap-2 cursor-pointer group"
        onClick={() => onNavigate(AppView.LANDING)}
      >
        <span className="text-2xl font-pixel tracking-tighter text-white group-hover:text-[#00ffff] transition-colors drop-shadow-[0_0_8px_rgba(0,255,255,0.4)]">SolVoid</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-[10px] font-pixel tracking-widest text-gray-400">
        <button onClick={() => onNavigate(AppView.LANDING)} className="hover:text-white transition-colors">DASHBOARD</button>
        <button className="hover:text-white transition-colors">ASSETS</button>
        <button className="hover:text-white transition-colors">STATS</button>
        
        <button 
          onClick={() => onNavigate(AppView.CONSOLE)}
          className="px-6 py-2 bg-[#bd22ff] text-white rounded-none border-b-2 border-r-2 border-[#8e19bf] hover:bg-[#cf4dff] transition-all"
        >
          LAUNCH VOID
        </button>

        {currentView !== AppView.LANDING && (
          <div className="flex items-center gap-2 border border-white/20 px-3 py-1 bg-white/5">
             <span className="text-[9px] text-gray-500 font-mono-tech">DISCONNECT | CNZR...GZYS</span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;