'use client';

import React, { useState } from 'react';
import { Smartphone, ChevronRight } from 'lucide-react';

interface DynamicIslandProps {
  onOpenProfile: () => void;
}

export default function DynamicIsland({ onOpenProfile }: DynamicIslandProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative z-50 flex justify-center">
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className={`group cursor-pointer rounded-full bg-black text-white transition-all duration-300 ease-out border border-white/15 shadow-xl ${
          isExpanded
            ? 'absolute left-1/2 -translate-x-1/2 top-0.5 w-[250px] p-2.5 rounded-[22px] bg-black/95 backdrop-blur-xl border-white/20 shadow-2xl'
            : 'h-6 w-24 px-2.5 flex items-center justify-between hover:scale-105'
        }`}
      >
        {!isExpanded ? (
          <>
            {/* Camera lens hole */}
            <div className="flex items-center gap-1.5">
              <div className="h-2 w-2 rounded-full bg-[#151518] ring-1 ring-white/10" />
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            {/* Status text */}
            <div className="flex items-center gap-1 text-[9px] font-bold text-slate-300 tracking-tight">
              <span>kPhone</span>
            </div>
          </>
        ) : (
          <div className="space-y-1.5 animate-in fade-in duration-200">
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 text-white shadow-xs">
                  <Smartphone className="h-3 w-3" />
                </div>
                <div>
                  <p className="text-[11px] font-bold leading-none">kPhone 16 Pro</p>
                  <p className="text-[9px] text-emerald-400 mt-0.5 flex items-center gap-1 font-medium">
                    <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" />
                    KamalOS 18.0 • Active
                  </p>
                </div>
              </div>

              <span className="text-[9px] font-mono rounded bg-white/10 px-1 py-0.5 text-slate-300">
                9:41
              </span>
            </div>

            <div className="flex items-center justify-between pt-0.5 text-[10px]">
              <span className="text-slate-400 font-medium">Kamal Mohamed</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenProfile();
                }}
                className="flex items-center gap-0.5 rounded-full bg-sky-500 px-2 py-0.5 text-[9px] font-bold text-white hover:bg-sky-400 active:scale-95 transition-all"
              >
                <span>Profile</span>
                <ChevronRight className="h-2.5 w-2.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
