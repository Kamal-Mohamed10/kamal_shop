'use client';

import React from 'react';
import { Compass, FolderKanban, FlaskConical, User } from 'lucide-react';

interface BottomTabBarProps {
  activeView: 'discover' | 'apps' | 'lab' | 'profile';
  onSelectView: (view: 'discover' | 'apps' | 'lab' | 'profile') => void;
  installedCount: number;
}

export default function BottomTabBar({
  activeView,
  onSelectView,
  installedCount,
}: BottomTabBarProps) {
  const tabs = [
    { id: 'discover' as const, label: 'Discover', icon: Compass },
    { id: 'apps' as const, label: 'All Apps', icon: FolderKanban },
    { id: 'lab' as const, label: 'In The Lab', icon: FlaskConical },
    { id: 'profile' as const, label: 'Profile', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 lg:hidden border-t border-white/20 bg-white/70 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/70">
      {/* Specular top rim */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent dark:via-white/20" />

      <div className="flex items-center justify-around px-2 py-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeView === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onSelectView(tab.id)}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-2xl transition-all ${
                isActive
                  ? 'text-sky-500 dark:text-sky-400 font-bold'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              <div className="relative">
                <Icon className={`h-5 w-5 ${isActive ? 'scale-110' : ''} transition-transform`} />
                {tab.id === 'apps' && installedCount > 0 && (
                  <span className="absolute -top-1 -right-2 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-500 text-[9px] font-bold text-white">
                    {installedCount}
                  </span>
                )}
              </div>
              <span className="text-[10px] mt-1 tracking-tight">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
