'use client';

import React, { useState } from 'react';
import { Sparkles, Mail, CheckCircle2, ChevronDown, Radio } from 'lucide-react';

interface DynamicIslandProps {
  onOpenProfile: () => void;
}

export default function DynamicIsland({ onOpenProfile }: DynamicIslandProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative z-50 flex justify-center py-2">
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className={`group cursor-pointer rounded-full bg-black text-white transition-all duration-300 ease-out border border-white/10 shadow-lg ${
          isExpanded
            ? 'w-[90%] px-4 py-3 rounded-[28px]'
            : 'h-7 w-28 px-3 flex items-center justify-between hover:scale-105'
        }`}
      >
        {!isExpanded ? (
          <>
            {/* Camera lens hole */}
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-slate-900 ring-1 ring-slate-800" />
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            {/* Subtle status text or icon */}
            <div className="flex items-center gap-1 text-[10px] font-semibold text-slate-300">
              <span>Hire Me</span>
            </div>
          </>
        ) : (
          <div className="space-y-2 animate-in fade-in duration-200">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 text-white shadow-md">
                  <Sparkles className="h-3.5 w-3.5" />
                </div>
                <div>
                  <p className="text-xs font-bold leading-none">Kamal Mohamed</p>
                  <p className="text-[10px] text-emerald-400 mt-0.5 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Open to Engineering Roles
                  </p>
                </div>
              </div>

              <span className="text-[10px] font-mono rounded bg-white/10 px-1.5 py-0.5 text-slate-400">
                9:41 AM
              </span>
            </div>

            <div className="flex items-center justify-between pt-0.5 text-[11px]">
              <span className="text-slate-400">Full-Stack & Systems Builder</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenProfile();
                }}
                className="rounded-full bg-sky-500 px-3 py-1 text-[10px] font-bold text-white hover:bg-sky-400"
              >
                View Profile →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
