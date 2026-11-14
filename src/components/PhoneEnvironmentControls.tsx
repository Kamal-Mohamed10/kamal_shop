'use client';

import React from 'react';
import { RippleMode } from './WaterRippleCanvas';
import { PhoneFinish } from './PhoneFrame';
import GithubIcon from './GithubIcon';
import { Search, Sparkles, FileText, Droplets, ExternalLink, Smartphone } from 'lucide-react';

interface PhoneEnvironmentControlsProps {
  finish: PhoneFinish;
  onSelectFinish: (finish: PhoneFinish) => void;
  rippleMode: RippleMode;
  onSelectRippleMode: (mode: RippleMode) => void;
  onOpenSearch: () => void;
  onOpenResume: () => void;
  installedCount: number;
}

export default function PhoneEnvironmentControls({
  finish,
  onSelectFinish,
  rippleMode,
  onSelectRippleMode,
  onOpenSearch,
  onOpenResume,
  installedCount,
}: PhoneEnvironmentControlsProps) {
  const finishes: { id: PhoneFinish; label: string; color: string }[] = [
    { id: 'natural', label: 'Natural', color: '#8f8a81' },
    { id: 'desert', label: 'Desert', color: '#c4ad9d' },
    { id: 'black', label: 'Black', color: '#2b2c2e' },
    { id: 'silver', label: 'Silver', color: '#dcdde0' },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto pt-6 px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Left Branding */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 shadow-lg text-white">
          <Smartphone className="h-5 w-5" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-base sm:text-lg font-black tracking-tight text-white">
              Kamal&apos;s App Store
            </h1>
            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              iPhone 16 Pro
            </span>
          </div>
          <p className="text-[11px] text-slate-400">
            Interactive phone simulation • Surf apps, underwrite deals &amp; inspect systems
          </p>
        </div>
      </div>

      {/* Right Controls: Finish, Ripple, Resume, Search */}
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {/* Search trigger */}
        <button
          type="button"
          onClick={onOpenSearch}
          className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-md hover:bg-white/10 hover:text-white transition-colors"
        >
          <Search className="h-3.5 w-3.5 text-slate-400" />
          <span>Search</span>
          <kbd className="rounded border border-white/20 bg-white/10 px-1 text-[10px] font-mono text-slate-400">
            ⌘K
          </kbd>
        </button>

        {/* Titanium Finish Selector */}
        <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md">
          <span className="text-[10px] uppercase font-bold text-slate-400 pl-2 pr-1">Finish:</span>
          {finishes.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => onSelectFinish(f.id)}
              className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold transition-all ${
                finish === f.id
                  ? 'bg-white text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
              title={`${f.label} Titanium`}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: f.color }}
              />
              <span className="hidden sm:inline">{f.label}</span>
            </button>
          ))}
        </div>

        {/* Water Ripple Selector */}
        <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md">
          <Droplets className="h-3.5 w-3.5 text-sky-400 ml-1.5" />
          {(['active', 'raindrop', 'calm'] as RippleMode[]).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => onSelectRippleMode(m)}
              className={`rounded-full px-2 py-0.5 text-[10px] font-bold capitalize transition-all ${
                rippleMode === m
                  ? 'bg-sky-500 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Resume PDF */}
        <button
          type="button"
          onClick={onOpenResume}
          className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-bold text-emerald-400 backdrop-blur-md hover:bg-emerald-500/20 transition-all active:scale-95"
        >
          <FileText className="h-3.5 w-3.5" />
          <span>Resume (PDF)</span>
        </button>

        {/* GitHub link */}
        <a
          href="https://github.com/Kamal-Mohamed10/kamal_shop"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:bg-white/15 hover:text-white transition-colors"
          title="GitHub Repository"
        >
          <GithubIcon className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
