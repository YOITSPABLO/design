
import React from 'react';

interface PixelCardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  glowColor?: 'purple' | 'cyan' | 'gray';
}

const PixelCard: React.FC<PixelCardProps> = ({ children, title, className = "", glowColor = 'purple' }) => {
  const glowClass = {
    purple: 'border-[#bd22ff]/50 bg-black/60 shadow-[0_0_15px_rgba(189,34,255,0.2)]',
    cyan: 'border-[#00ffff]/50 bg-black/60 shadow-[0_0_15px_rgba(0,255,255,0.2)]',
    gray: 'border-white/20 bg-black/40'
  }[glowColor];

  const headerBg = {
    purple: 'bg-[#bd22ff]/20 text-[#bd22ff]',
    cyan: 'bg-[#00ffff]/20 text-[#00ffff]',
    gray: 'bg-white/10 text-white'
  }[glowColor];

  return (
    <div className={`relative border-2 ${glowClass} ${className} backdrop-blur-md overflow-hidden group`}>
      {title && (
        <div className={`px-4 py-2 border-b-2 border-inherit ${headerBg}`}>
          <h3 className="text-[10px] font-pixel tracking-[0.2em] uppercase">{title}</h3>
        </div>
      )}
      <div className="p-4">
        {children}
      </div>
      
      {/* Decorative Pixel Corners */}
      <div className="absolute top-0 left-0 w-1 h-1 bg-white/40"></div>
      <div className="absolute top-0 right-0 w-1 h-1 bg-white/40"></div>
      <div className="absolute bottom-0 left-0 w-1 h-1 bg-white/40"></div>
      <div className="absolute bottom-0 right-0 w-1 h-1 bg-white/40"></div>
      
      {/* Subtle Scanline Overlay for Card */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px]"></div>
    </div>
  );
};

export default PixelCard;
