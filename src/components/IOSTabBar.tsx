'use client';

import React from 'react';
import { LayoutGrid, Compass, FlaskConical, User, Sparkles } from 'lucide-react';

interface IOSTabBarProps {
  activeTab: 'today' | 'apps' | 'lab' | 'profile';
  onSelectTab: (tab: 'today' | 'apps' | 'lab' | 'profile') => void;
  installedCount: number;
}

export default function IOSTabBar({
  activeTab,
  onSelectTab,
  installedCount,
}: IOSTabBarProps) {
  const tabs = [
    { id: 'today' as const, label: 'Today', icon: Compass },
    { id: 'apps' as const, label: 'Apps', icon: LayoutGrid },
    { id: 'lab' as const, label: 'Lab', icon: FlaskConical },
    { id: 'profile' as const, label: 'Developer', icon: User },
  ];

  return (
    <div className="sticky bottom-0 inset-x-0 z-40 border-t border-white/20 bg-white/75 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/80 transition-colors">
      {/* Specular glass reflection line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent dark:via-white/20" />

      {/* Tabs */}
      <div className="flex items-center justify-around px-2 pt-2 pb-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onSelectTab(tab.id)}
              className={`flex flex-col items-center justify-center py-0.5 px-3 rounded-xl transition-all ${
                isActive
                  ? 'text-sky-500 font-bold scale-105'
                  : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              <div className="relative">
                <Icon className={`h-5 w-5 ${isActive ? 'stroke-[2.5px]' : 'stroke-[1.75px]'}`} />
                {tab.id === 'apps' && installedCount > 0 && (
                  <span className="absolute -top-1 -right-2 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-500 text-[9px] font-bold text-white">
                    {installedCount}
                  </span>
                )}
              </div>
              <span className="text-[10px] mt-0.5 tracking-tight font-medium">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* iOS Home Indicator Bar */}
      <div className="flex justify-center pb-1.5 pt-1">
        <div className="h-1 w-32 rounded-full bg-slate-900/30 dark:bg-white/30" />
      </div>
    </div>
  );
}
