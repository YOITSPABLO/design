
import React, { useState } from 'react';
import PixelCard from './PixelCard';
import PixelButton from './PixelButton';
import { TokenItem } from '../types';

interface VoidConsoleProps {
  onInitiate: () => void;
}

const VoidConsole: React.FC<VoidConsoleProps> = ({ onInitiate }) => {
  const [tokens, setTokens] = useState<TokenItem[]>([
    { id: '1', name: 'SOL', type: 'TOKEN', iconUrl: 'https://api.dicebear.com/7.x/identicon/svg?seed=sol', selected: true },
    { id: '2', name: 'BONK', type: 'TOKEN', iconUrl: 'https://api.dicebear.com/7.x/identicon/svg?seed=bonk', selected: false },
    { id: '3', name: 'NFT_01', type: 'NFT', iconUrl: 'https://api.dicebear.com/7.x/identicon/svg?seed=nft1', selected: true },
    { id: '4', name: 'JUP', type: 'TOKEN', iconUrl: 'https://api.dicebear.com/7.x/identicon/svg?seed=jup', selected: false },
    { id: '5', name: 'PYTH', type: 'TOKEN', iconUrl: 'https://api.dicebear.com/7.x/identicon/svg?seed=pyth', selected: false },
    { id: '6', name: 'WIF', type: 'TOKEN', iconUrl: 'https://api.dicebear.com/7.x/identicon/svg?seed=wif', selected: true },
  ]);

  const toggleToken = (id: string) => {
    setTokens(prev => prev.map(t => t.id === id ? { ...t, selected: !t.selected } : t));
  };

  const logs = [
    { id: '1', timestamp: '14:21:30', msg: 'ACCESS_GRANTED: User session established.' },
    { id: '2', timestamp: '14:22:15', msg: 'SCANNING: Indexing account metadata...' },
    { id: '3', timestamp: '14:22:45', msg: 'STATUS: 6 target accounts identified.' },
    { id: '4', timestamp: '14:23:10', msg: 'CALCULATION: 0.012 SOL reclaimable.' },
  ];

  return (
    <div className="flex flex-col gap-10 animate-[fadeIn_0.3s_ease-out]">
      <div className="flex items-center justify-between">
        <button onClick={() => window.location.reload()} className="text-gray-500 hover:text-[#00ffff] flex items-center gap-2 font-pixel text-[9px] transition-colors uppercase">
          <span className="border border-white/20 p-1 px-2">&lt;</span> TERMINATE SESSION
        </button>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-green-500 rounded-none shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
          <span className="text-[10px] font-pixel text-green-500">MAINNET_ACTIVE</span>
        </div>
      </div>

      {/* Hero Stats Panel */}
      <PixelCard className="p-0 border-[#00ffff]/30" glowColor="cyan">
        <div className="flex flex-col md:flex-row items-center gap-12 p-10">
          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-3 gap-12 text-center sm:text-left">
            <div className="space-y-4">
              <h4 className="text-gray-500 text-[10px] font-pixel uppercase tracking-widest">SYSTEM_LOAD</h4>
              <div className="text-3xl font-pixel text-white tracking-widest">STABLE</div>
              <div className="h-2 w-full bg-white/5 border border-white/10">
                <div className="h-full w-2/3 bg-[#00ffff]"></div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-gray-500 text-[10px] font-pixel uppercase tracking-widest">RECLAIMABLE</h4>
              <div className="text-5xl font-pixel text-[#00ffff] drop-shadow-[0_0_12px_rgba(0,255,255,0.4)]">6.002</div>
              <span className="text-[10px] text-gray-500 font-pixel uppercase">EST_BALANCE</span>
            </div>
            <div className="space-y-4">
              <h4 className="text-gray-500 text-[10px] font-pixel uppercase tracking-widest">QUEUE_SIZE</h4>
              <div className="text-5xl font-pixel text-[#bd22ff] drop-shadow-[0_0_12px_rgba(189,34,255,0.4)]">
                {tokens.filter(t => t.selected).length}
              </div>
              <span className="text-[10px] text-gray-500 font-pixel uppercase">TARGETS</span>
            </div>
          </div>

          <div className="shrink-0 w-full md:w-auto">
             <PixelButton onClick={onInitiate} className="w-full md:w-auto px-16 py-7 text-xs" variant="secondary">
                INITIALIZE_PURGE
             </PixelButton>
          </div>
        </div>
      </PixelCard>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <PixelCard title="COMMAND_CENTER" glowColor="purple">
           <div className="space-y-8 py-4">
              <div className="p-8 border-2 border-white/10 bg-black/40 flex flex-col items-center text-center gap-6 group cursor-pointer hover:border-[#bd22ff] transition-all">
                 <div className="w-16 h-16 bg-[#bd22ff]/10 border border-[#bd22ff]/40 flex items-center justify-center">
                    <span className="text-2xl font-pixel text-[#bd22ff]">?</span>
                 </div>
                 <div>
                    <div className="text-[10px] font-pixel text-white mb-2">RUN_SCAN.EXE</div>
                    <div className="text-[9px] text-gray-500 font-mono-tech uppercase">Fetch latest account data</div>
                 </div>
              </div>
              <div className="flex justify-between items-center text-[10px] font-pixel uppercase text-gray-500">
                <span>CLUSTER_SYNC</span>
                <span className="text-[#bd22ff]">PENDING...</span>
              </div>
           </div>
        </PixelCard>

        <PixelCard title="ASSET_SELECTOR" glowColor="cyan">
           <div className="grid grid-cols-2 gap-4 py-2">
              {tokens.map(token => (
                <div 
                  key={token.id} 
                  onClick={() => toggleToken(token.id)}
                  className={`p-4 border-2 flex items-center gap-4 cursor-pointer transition-all ${
                    token.selected 
                    ? 'border-[#00ffff] bg-[#00ffff]/5 shadow-[0_0_10px_rgba(0,255,255,0.1)]' 
                    : 'border-white/10 bg-black/40 hover:border-white/30'
                  }`}
                >
                  <div className={`w-3 h-3 border-2 shrink-0 ${token.selected ? 'bg-[#00ffff] border-[#00ffff]' : 'border-white/30'}`}></div>
                  <span className="text-[9px] font-pixel truncate text-white uppercase">{token.name}</span>
                </div>
              ))}
           </div>
        </PixelCard>

        <PixelCard title="COLLECTIBLES" glowColor="purple">
           <div className="grid grid-cols-3 gap-3 py-1">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="aspect-square border border-white/10 bg-black/60 p-1 cursor-pointer group hover:border-[#bd22ff] transition-all">
                  <div className="w-full h-full bg-white/5 group-hover:bg-[#bd22ff]/20"></div>
                </div>
              ))}
           </div>
        </PixelCard>
      </div>

      {/* Terminal View */}
      <div className="bg-black/90 border-2 border-white/10 p-6 rounded shadow-2xl">
        <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-white/20"></div>
            <span className="text-[9px] font-pixel text-gray-400">VOID_STREAMS_v2.0</span>
          </div>
          <span className="text-[9px] font-pixel text-gray-600">ENCRYPTION: AES-256</span>
        </div>
        <div className="max-h-[140px] overflow-y-auto font-mono-tech text-[11px] space-y-2 scrollbar-hide">
          {logs.map(log => (
            <div key={log.id} className="flex gap-6 items-start">
              <span className="text-gray-700">[{log.timestamp}]</span>
              <span className={log.msg.includes('STATUS') ? 'text-[#00ffff]' : 'text-gray-500 uppercase'}>
                {log.msg}
              </span>
            </div>
          ))}
          <div className="flex gap-2 text-[#00ffff]">
            <span>></span>
            <span className="w-2 h-4 bg-[#00ffff] animate-pulse"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoidConsole;
