
import React from 'react';

interface PixelButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
}

const PixelButton: React.FC<PixelButtonProps> = ({ children, onClick, className = "", variant = 'primary' }) => {
  const baseStyles = "relative px-8 py-3 font-pixel text-[10px] transition-all active:translate-y-1 active:translate-x-1 uppercase tracking-tighter group outline-none";
  
  const variants = {
    primary: "bg-[#00ffff] text-black border-b-4 border-r-4 border-[#00cccc] hover:bg-[#33ffff] hover:border-[#00ffff] shadow-[0_0_20px_rgba(0,255,255,0.4)]",
    secondary: "bg-[#ff0055] text-white border-b-4 border-r-4 border-[#cc0044] hover:bg-[#ff3377] hover:border-[#ff0055] shadow-[0_0_20px_rgba(255,0,85,0.4)]",
    danger: "bg-[#bd22ff] text-white border-b-4 border-r-4 border-[#8e19bf] hover:bg-[#cf4dff] hover:border-[#bd22ff] shadow-[0_0_20px_rgba(189,34,255,0.4)]",
    ghost: "bg-transparent text-[#00ffff] border-2 border-[#00ffff]/50 hover:bg-[#00ffff]/10 hover:border-[#00ffff] shadow-[0_0_10px_rgba(0,255,255,0.1)]"
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      {/* Subtle scanline on button hover */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:100%_2px] opacity-0 group-hover:opacity-100 pointer-events-none"></div>
    </button>
  );
};

export default PixelButton;
