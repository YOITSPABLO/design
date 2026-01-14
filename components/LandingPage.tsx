
// Added React import to resolve namespace issues in functional component definition
import React from 'react';
import PixelButton from './PixelButton';
import PixelCard from './PixelCard';

interface LandingPageProps {
  onLaunch: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLaunch }) => {
  return (
    <div className="flex flex-col gap-16 mt-8 md:mt-24 animate-[fadeIn_0.5s_ease-out] items-center text-center">
      <div className="max-w-4xl space-y-10">
        <div className="inline-block px-4 py-1 bg-[#bd22ff]/20 border border-[#bd22ff]/50 text-[#bd22ff] text-[10px] font-pixel">
          STABLE_SYSTEM_ONLINE v2.0.4
        </div>
        <h1 className="text-5xl md:text-8xl font-pixel leading-[1.1] tracking-tighter">
          PURGE THE <br />
          <span className="text-[#00ffff] drop-shadow-[0_0_20px_rgba(0,255,255,0.6)]">SOLANA VOID</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto font-mono-tech leading-relaxed uppercase tracking-wider">
          The ultimate high-fidelity interface for asset management. <br />
          Reclaim locked SOL. Burn the junk. <span className="text-white font-bold">Absolute control.</span>
        </p>
        <div className="pt-8 flex flex-wrap justify-center gap-6">
          <PixelButton onClick={onLaunch} className="text-xs py-7 px-16">
            ENTER THE VOID
          </PixelButton>
          <PixelButton variant="ghost" className="text-xs py-7 px-12">
            USER_GUIDE.TXT
          </PixelButton>
        </div>
      </div>

      <div className="w-full space-y-12 mt-12">
        <div className="flex items-center gap-4">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-[#bd22ff]/40"></div>
          <h2 className="text-xs font-pixel uppercase tracking-widest text-[#bd22ff]">SYSTEM_SPECIFICATIONS</h2>
          <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-[#bd22ff]/40"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <PixelCard className="hover:translate-y-[-4px] transition-transform" glowColor="cyan" title="CLEANER_CORE">
             <div className="space-y-4">
               <div className="text-4xl font-pixel text-[#00ffff]">99%</div>
               <p className="text-gray-400 text-[10px] font-pixel leading-relaxed uppercase">Efficiency rating for account closure and rent reclamation on Solana.</p>
             </div>
          </PixelCard>

          <PixelCard className="hover:translate-y-[-4px] transition-transform" glowColor="purple" title="SECURITY_PROTOCOL">
             <div className="space-y-4">
               <div className="text-4xl font-pixel text-[#bd22ff]">RSA</div>
               <p className="text-gray-400 text-[10px] font-pixel leading-relaxed uppercase">Non-custodial operations. Your keys stay in your browser local storage only.</p>
             </div>
          </PixelCard>

          <PixelCard className="hover:translate-y-[-4px] transition-transform" glowColor="gray" title="HISTORY_LOG">
             <div className="space-y-4">
               <div className="text-4xl font-pixel text-white">40K</div>
               <p className="text-gray-400 text-[10px] font-pixel leading-relaxed uppercase">Total accounts successfully purged through the global engine nodes.</p>
             </div>
          </PixelCard>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;