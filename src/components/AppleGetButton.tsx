'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';

interface AppleGetButtonProps {
  isInstalled: boolean;
  onToggle: (e: React.MouseEvent) => void;
  accentColor?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function AppleGetButton({
  isInstalled,
  onToggle,
  accentColor = '#007AFF',
  className = '',
  size = 'md',
}: AppleGetButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isInstalled) {
      onToggle(e);
      return;
    }

    // Trigger authentic iOS download progress animation
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      onToggle(e);
      try {
        confetti({
          particleCount: 45,
          spread: 60,
          origin: { y: 0.7 },
          colors: [accentColor, '#007AFF', '#ffffff'],
        });
      } catch (err) {
        // Fallback
      }
    }, 700);
  };

  const sizeStyles = {
    sm: 'h-6 min-w-[62px] px-3 text-[11px]',
    md: 'h-7 min-w-[72px] px-4 text-[12px]',
    lg: 'h-8 min-w-[84px] px-5 text-[13px]',
  }[size];

  if (isDownloading) {
    return (
      <div className="flex flex-col items-center">
        <div className="relative flex h-7 w-7 items-center justify-center">
          {/* Animated circular progress track */}
          <svg className="h-7 w-7 -rotate-90 animate-spin text-sky-500" viewBox="0 0 28 28">
            <circle
              className="text-slate-300 dark:text-white/20"
              strokeWidth="2.5"
              stroke="currentColor"
              fill="transparent"
              r="11"
              cx="14"
              cy="14"
            />
            <circle
              className="text-[#0A84FF]"
              strokeWidth="2.5"
              strokeDasharray="70"
              strokeDashoffset="25"
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="11"
              cx="14"
              cy="14"
            />
          </svg>
          {/* Center stop square */}
          <div className="h-2 w-2 rounded-xs bg-[#0A84FF]" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <button
        type="button"
        onClick={handleClick}
        className={`group flex items-center justify-center rounded-full font-black tracking-wider transition-all duration-150 active:scale-95 shadow-xs ${sizeStyles} ${
          isInstalled
            ? 'border border-slate-300/80 bg-slate-100/90 text-[#007AFF] dark:border-white/20 dark:bg-white/10 dark:text-[#0A84FF]'
            : 'bg-[#007AFF] text-white hover:bg-[#0062cc] dark:bg-white/15 dark:text-[#0A84FF] dark:hover:bg-white/25'
        } ${className}`}
      >
        <span>{isInstalled ? 'OPEN' : 'GET'}</span>
      </button>
      {!isInstalled && (
        <span className="mt-0.5 text-[8.5px] font-medium text-slate-400 tracking-tight leading-none">
          In-App Purchases
        </span>
      )}
    </div>
  );
}
