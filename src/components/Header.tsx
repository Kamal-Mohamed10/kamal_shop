'use client';

import React from 'react';
import { RippleMode } from './WaterRippleCanvas';
import { Search, Droplets, Sun, Moon, SlidersHorizontal, Sparkles, Terminal } from 'lucide-react';

interface HeaderProps {
  onOpenSearch: () => void;
  rippleMode: RippleMode;
  onSelectRippleMode: (mode: RippleMode) => void;
  glassClearness: 'frosted' | 'clear' | 'ultra';
  onSelectGlassClearness: (clearness: 'frosted' | 'clear' | 'ultra') => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  activeView: string;
  onSelectView: (view: 'discover' | 'apps' | 'lab' | 'profile') => void;
}

export default function Header({
  onOpenSearch,
  rippleMode,
  onSelectRippleMode,
  glassClearness,
  onSelectGlassClearness,
  theme,
  onToggleTheme,
  activeView,
  onSelectView,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/20 bg-white/40 backdrop-blur-2xl transition-colors dark:border-white/10 dark:bg-slate-950/40">
      {/* Specular Top Rim */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent dark:via-white/30" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Left: Branding & Status */}
        <div className="flex items-center gap-3">
          <div
            onClick={() => onSelectView('discover')}
            className="flex cursor-pointer items-center gap-2.5 group"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 shadow-md shadow-sky-500/20 transition-transform group-hover:scale-105">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold tracking-tight text-slate-900 dark:text-white text-base sm:text-lg">
                  Kamal&apos;s App Store
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                  Available for Hire
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">
                Curated portfolio of products & engineered systems
              </p>
            </div>
          </div>
        </div>

        {/* Center: Quick Search Bar trigger */}
        <div className="flex-1 max-w-md mx-4 hidden md:block">
          <button
            type="button"
            onClick={onOpenSearch}
            className="flex w-full items-center justify-between rounded-full border border-slate-200/80 bg-white/60 px-4 py-2 text-xs text-slate-500 shadow-sm backdrop-blur-md transition-all hover:border-slate-300 hover:bg-white dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-400 dark:hover:border-white/20 dark:hover:bg-slate-900"
          >
            <div className="flex items-center gap-2">
              <Search className="h-3.5 w-3.5 text-slate-400" />
              <span>Search apps, tech stacks, or domains...</span>
            </div>
            <kbd className="hidden sm:inline-block rounded border border-slate-300/80 bg-slate-100/80 px-1.5 py-0.5 font-mono text-[10px] text-slate-500 dark:border-white/10 dark:bg-white/10 dark:text-slate-400">
              ⌘K
            </kbd>
          </button>
        </div>

        {/* Right: Physics & Glass Controls + Theme */}
        <div className="flex items-center gap-2">
          {/* Mobile search button */}
          <button
            type="button"
            onClick={onOpenSearch}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/60 text-slate-700 md:hidden dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
            title="Search (⌘K)"
          >
            <Search className="h-4 w-4" />
          </button>

          {/* Ripple Mode Selector */}
          <div className="relative group">
            <div className="flex items-center rounded-full border border-slate-200/80 bg-white/60 p-1 backdrop-blur-md dark:border-white/10 dark:bg-slate-900/60">
              {(['calm', 'active', 'raindrop'] as RippleMode[]).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => onSelectRippleMode(m)}
                  className={`rounded-full px-2.5 py-1 text-[11px] font-semibold capitalize transition-all ${
                    rippleMode === m
                      ? 'bg-sky-500 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                  }`}
                  title={`Water ripple intensity: ${m}`}
                >
                  {m === 'active' ? 'Ripple' : m}
                </button>
              ))}
            </div>
          </div>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/60 text-slate-700 transition-colors hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10"
            title="Toggle color theme"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-slate-700" />}
          </button>
        </div>
      </div>
    </header>
  );
}
