'use client';

import React from 'react';
import { RippleMode } from './WaterRippleCanvas';
import { PhoneFinish } from './PhoneFrame';
import GithubIcon from './GithubIcon';
import { Search, FileText, Droplets, Smartphone } from 'lucide-react';

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
    <div className="w-full max-w-5xl mx-auto px-4 py-2 flex items-center justify-between gap-3 text-xs">
      {/* Left Branding: kPhone & KamalOS */}
      <div className="flex items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-600 to-purple-600 shadow-md text-white">
          <Smartphone className="h-4 w-4" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-sm font-black tracking-tight text-white leading-none">
              kPhone 16 Pro
            </h1>
            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[9px] font-bold text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              KamalOS 18
            </span>
          </div>
          <p className="text-[10px] text-slate-400 leading-tight mt-0.5 hidden sm:block">
            Kamal Mohamed • Full-Stack Systems &amp; Products
          </p>
        </div>
      </div>

      {/* Right Controls: Finish, Ripple, Resume, Search, GitHub */}
      <div className="flex items-center gap-2">
        {/* Search trigger */}
        <button
          type="button"
          onClick={onOpenSearch}
          className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-300 backdrop-blur-md hover:bg-white/10 hover:text-white transition-colors"
          title="Search apps (⌘K)"
        >
          <Search className="h-3 w-3 text-slate-400" />
          <span className="hidden sm:inline">Search</span>
          <kbd className="rounded border border-white/20 bg-white/10 px-1 text-[9px] font-mono text-slate-400">
            ⌘K
          </kbd>
        </button>

        {/* Titanium Finish Selector */}
        <div className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md">
          <span className="text-[9px] uppercase font-bold text-slate-400 pl-1.5 pr-0.5">Finish:</span>
          {finishes.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => onSelectFinish(f.id)}
              className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold transition-all ${
                finish === f.id
                  ? 'bg-white text-slate-950 shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
              title={`${f.label} Titanium`}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: f.color }}
              />
              <span className="hidden lg:inline">{f.label}</span>
            </button>
          ))}
        </div>

        {/* Water Ripple Selector */}
        <div className="hidden sm:flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md">
          <Droplets className="h-3 w-3 text-sky-400 ml-1" />
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
          className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-bold text-emerald-400 backdrop-blur-md hover:bg-emerald-500/20 transition-all active:scale-95"
        >
          <FileText className="h-3 w-3" />
          <span>Resume</span>
        </button>

        {/* GitHub link */}
        <a
          href="https://github.com/Kamal-Mohamed10/kamal_shop"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:bg-white/15 hover:text-white transition-colors"
          title="GitHub Repository"
        >
          <GithubIcon className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}
