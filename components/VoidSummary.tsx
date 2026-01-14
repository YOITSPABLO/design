
// Added React import to resolve namespace issues in functional component definition
import React from 'react';
import PixelCard from './PixelCard';
import PixelButton from './PixelButton';

interface VoidSummaryProps {
  onCancel: () => void;
  onConfirm: () => void;
}

const VoidSummary: React.FC<VoidSummaryProps> = ({ onCancel, onConfirm }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-12 py-10 animate-[fadeIn_0.3s_ease-out]">
      <div className="w-full flex justify-start">
        <button onClick={onCancel} className="text-gray-500 hover:text-white flex items-center gap-2 font-pixel text-[9px] uppercase tracking-tighter">
          <span className="border border-white/20 p-1 px-2">&lt;</span> BACK TO CONSOLE
        </button>
      </div>

      <div className="text-center space-y-6">
        <h2 className="text-5xl md:text-7xl font-pixel tracking-tighter text-[#ff0055] drop-shadow-[0_0_25px_rgba(255,0,85,0.4)]">
          FINAL_CONFIRM
        </h2>
        <p className="text-gray-500 font-pixel text-[10px] tracking-widest uppercase animate-pulse">
          AWAITING DESTRUCTION PERMISSION
        </p>
      </div>

      <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-10">
        <PixelCard className="h-full" glowColor="cyan" title="QUEUE_DETAILS">
          <div className="space-y-8 py-4">
            <div className="space-y-2">
              <div className="text-[10px] font-pixel text-white uppercase">TARGET_ACCOUNTS</div>
              <div className="text-4xl font-pixel text-[#00ffff]">06</div>
            </div>
            
            <div className="space-y-4 font-pixel uppercase text-[9px] tracking-widest border-t border-white/10 pt-6">
              <div className="flex justify-between">
                <span className="text-gray-600">ACTION:</span>
                <span className="text-white">VOID_CLOSE</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">THREAT:</span>
                <span className="text-yellow-500">NULL</span>
              </div>
            </div>
          </div>
        </PixelCard>

        <PixelCard className="h-full" glowColor="purple" title="REVENUE_IMPACT">
          <div className="flex flex-col h-full justify-between gap-10 py-4">
            <div className="space-y-4">
               <div className="text-[10px] font-pixel text-gray-500 uppercase">RECLAIMABLE_RENT</div>
               <div className="text-5xl font-pixel text-[#00ffff] drop-shadow-[0_0_15px_rgba(0,255,255,0.4)]">
                 0.012
               </div>
               <div className="text-[10px] font-pixel text-white uppercase">SOL_UNITS</div>
            </div>
            <div className="p-4 bg-white/5 border border-white/10">
              <p className="text-[9px] text-gray-600 font-pixel uppercase leading-relaxed">Automatic disbursement to connected wallet on confirmation.</p>
            </div>
          </div>
        </PixelCard>
      </div>

      <div className="w-full max-w-2xl bg-[#ff0055]/5 border-2 border-[#ff0055]/40 p-8 flex flex-col items-center text-center gap-6">
        <h3 className="text-[12px] font-pixel text-[#ff0055] animate-pulse">! CRITICAL_WARNING !</h3>
        <p className="text-[10px] font-pixel text-gray-300 leading-relaxed uppercase tracking-tight">
          Destruction sequence is permanent. The void will consume all selected assets. <br />
          <span className="text-[#ff0055]">THIS_ACTION_CANNOT_BE_REVERSED.</span>
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8 pt-6">
        <PixelButton onClick={onConfirm} className="px-20 py-7" variant="secondary">
          EXECUTE_PURGE
        </PixelButton>
        <PixelButton onClick={onCancel} variant="ghost" className="px-14 py-7">
          ABORT_COMMAND
        </PixelButton>
      </div>
    </div>
  );
};

export default VoidSummary;