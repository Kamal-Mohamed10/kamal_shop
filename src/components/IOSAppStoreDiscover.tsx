'use client';

import React from 'react';
import { Project } from '@/types/project';
import SquircleIcon from './SquircleIcon';
import { Sparkles, ArrowRight, Check, Zap, ExternalLink, ShieldCheck } from 'lucide-react';

interface IOSAppStoreDiscoverProps {
  projects: Project[];
  onOpenSheet: (project: Project) => void;
  installedAppIds: Set<string>;
  onToggleInstall: (id: string, e: React.MouseEvent) => void;
  onOpenProfile: () => void;
  onNavigateTab: (tab: 'today' | 'apps' | 'lab' | 'profile') => void;
}

export default function IOSAppStoreDiscover({
  projects,
  onOpenSheet,
  installedAppIds,
  onToggleInstall,
  onOpenProfile,
  onNavigateTab,
}: IOSAppStoreDiscoverProps) {
  const flagship = projects.find((p) => p.id === 'propscope') || projects[0];
  const neuralDraft = projects.find((p) => p.id === 'neuraldraft');
  const utilities = projects.filter((p) => p.shelf === 'weekend-builds' || p.shelf === 'utilities');
  const labProjects = projects.filter((p) => p.shelf === 'lab').slice(0, 3);

  return (
    <div className="space-y-6 pb-6">
      {/* iOS App Store Today Header */}
      <div className="flex items-end justify-between pt-1 pb-1">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            SATURDAY, NOVEMBER 14
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Today
          </h1>
        </div>

        {/* User Profile Avatar in Header */}
        <button
          type="button"
          onClick={onOpenProfile}
          className="group relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 text-white shadow-md transition-transform active:scale-95 ring-2 ring-white/40 dark:ring-white/10"
          title="Developer Profile"
        >
          <span className="text-xs font-bold">KM</span>
          <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-emerald-500 dark:border-slate-900" />
        </button>
      </div>

      {/* Flagship App Store Story Card (PropScope) */}
      {flagship && (
        <div
          onClick={() => onOpenSheet(flagship)}
          className="group relative cursor-pointer overflow-hidden rounded-[30px] border border-white/30 bg-gradient-to-br from-emerald-500/20 via-slate-900/40 to-slate-950 p-5 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] dark:border-white/10 text-white"
        >
          {/* Specular Rim */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent dark:via-white/30" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-emerald-500/25 blur-3xl" />

          {/* Top category label */}
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold uppercase tracking-wider text-emerald-400 text-[10px]">
              FLAGSHIP RELEASE • REAL ESTATE
            </span>
            <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
              {flagship.status}
            </span>
          </div>

          {/* Title & Tagline */}
          <div className="mt-2.5">
            <h2 className="text-2xl font-black tracking-tight drop-shadow-sm">
              {flagship.title}
            </h2>
            <p className="mt-0.5 text-xs text-slate-300 font-medium">
              {flagship.subtitle}
            </p>
          </div>

          {/* Interactive Underwriter Visual Callout */}
          <div className="mt-4 rounded-2xl border border-white/20 bg-slate-950/70 p-3.5 backdrop-blur-md">
            <div className="flex items-center justify-between text-[11px] border-b border-white/10 pb-2 mb-2">
              <span className="text-emerald-400 font-bold">Live Underwriting Engine</span>
              <span className="text-slate-400">&lt; 120ms PostGIS</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="rounded-xl bg-white/5 p-2">
                <p className="text-[9px] uppercase text-slate-400">Cap Rate</p>
                <p className="text-sm font-bold text-emerald-400">8.4%</p>
              </div>
              <div className="rounded-xl bg-white/5 p-2">
                <p className="text-[9px] uppercase text-slate-400">Cash-on-Cash</p>
                <p className="text-sm font-bold text-cyan-400">11.8%</p>
              </div>
              <div className="rounded-xl bg-white/5 p-2">
                <p className="text-[9px] uppercase text-slate-400">DSCR</p>
                <p className="text-sm font-bold text-emerald-400">1.42x</p>
              </div>
            </div>
          </div>

          {/* Bottom Card Footer */}
          <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
            <div className="flex items-center gap-3">
              <SquircleIcon
                iconName={flagship.iconName}
                gradient={flagship.iconGradient}
                size="sm"
              />
              <div>
                <p className="text-xs font-bold leading-tight">{flagship.title}</p>
                <p className="text-[10px] text-slate-400">Cash-Flow Analyzer</p>
              </div>
            </div>

            <button
              type="button"
              onClick={(e) => onToggleInstall(flagship.id, e)}
              className={`rounded-full px-5 py-1 text-xs font-bold transition-all active:scale-95 ${
                installedAppIds.has(flagship.id)
                  ? 'border border-emerald-500/40 bg-emerald-500/20 text-emerald-400'
                  : 'bg-white text-slate-950 hover:bg-slate-100 shadow-md'
              }`}
            >
              {installedAppIds.has(flagship.id) ? 'OPEN' : 'GET'}
            </button>
          </div>
        </div>
      )}

      {/* iOS App Store 3-Row Shelf: Weekend Builds & Tools */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Weekend Builds & Utilities
            </h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              High-throughput engines & developer tools
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigateTab('apps')}
            className="text-xs font-semibold text-sky-500 hover:text-sky-600"
          >
            See All
          </button>
        </div>

        <div className="rounded-3xl border border-white/30 bg-white/50 p-3 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/50 space-y-2">
          {utilities.map((app, idx) => (
            <div
              key={app.id}
              onClick={() => onOpenSheet(app)}
              className={`flex cursor-pointer items-center justify-between p-2 rounded-2xl transition-colors hover:bg-white/60 dark:hover:bg-white/5 ${
                idx !== utilities.length - 1 ? 'border-b border-slate-200/50 dark:border-white/5 pb-2.5' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <SquircleIcon
                  iconName={app.iconName}
                  gradient={app.iconGradient}
                  size="sm"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                    {app.title}
                  </h4>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1">
                    {app.subtitle}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={(e) => onToggleInstall(app.id, e)}
                className={`rounded-full px-4 py-1 text-[11px] font-bold transition-all active:scale-95 ${
                  installedAppIds.has(app.id)
                    ? 'border border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                    : 'bg-slate-900 text-white dark:bg-white dark:text-slate-950'
                }`}
              >
                {installedAppIds.has(app.id) ? 'OPEN' : 'GET'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Second Story Card: NeuralDraft AI */}
      {neuralDraft && (
        <div
          onClick={() => onOpenSheet(neuralDraft)}
          className="group relative cursor-pointer overflow-hidden rounded-[30px] border border-white/30 bg-gradient-to-br from-indigo-500/20 via-purple-900/30 to-slate-950 p-5 shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] dark:border-white/10 text-white"
        >
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold uppercase tracking-wider text-purple-400 text-[10px]">
              MAJOR UPDATE • AI SDK
            </span>
            <span className="rounded-full bg-purple-500/20 px-2 py-0.5 text-[10px] font-semibold text-purple-300">
              {neuralDraft.status}
            </span>
          </div>

          <div className="mt-2">
            <h3 className="text-xl font-bold">{neuralDraft.title}</h3>
            <p className="text-xs text-purple-200 mt-0.5">{neuralDraft.subtitle}</p>
          </div>

          <div className="mt-3 rounded-2xl border border-purple-500/30 bg-purple-950/40 p-3 font-mono text-[10px] text-purple-300">
            <p className="text-slate-400">// Generates Mermaid diagrams &amp; PostgreSQL DDL</p>
            <p className="mt-1 text-emerald-400 font-bold">✓ Sub-second streaming token output</p>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
            <div className="flex items-center gap-2.5">
              <SquircleIcon
                iconName={neuralDraft.iconName}
                gradient={neuralDraft.iconGradient}
                size="sm"
              />
              <span className="text-xs font-bold">{neuralDraft.title}</span>
            </div>

            <button
              type="button"
              onClick={(e) => onToggleInstall(neuralDraft.id, e)}
              className="rounded-full bg-white px-5 py-1 text-xs font-bold text-slate-950 hover:bg-slate-100 active:scale-95"
            >
              {installedAppIds.has(neuralDraft.id) ? 'OPEN' : 'GET'}
            </button>
          </div>
        </div>
      )}

      {/* Lab Spotlight Shelf */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            In The Lab • Prototypes
          </h3>
          <button
            type="button"
            onClick={() => onNavigateTab('lab')}
            className="text-xs font-semibold text-purple-500 hover:text-purple-600"
          >
            Enter Lab →
          </button>
        </div>

        <div className="grid grid-cols-1 gap-2.5">
          {labProjects.map((p) => (
            <div
              key={p.id}
              onClick={() => onOpenSheet(p)}
              className="flex cursor-pointer items-center justify-between rounded-2xl border border-white/30 bg-white/40 p-3 backdrop-blur-md transition-all hover:bg-white/60 dark:border-white/10 dark:bg-slate-900/40 dark:hover:bg-slate-900/60"
            >
              <div className="flex items-center gap-3">
                <SquircleIcon
                  iconName={p.iconName}
                  gradient={p.iconGradient}
                  size="sm"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">{p.title}</h4>
                    <span className="rounded-full bg-purple-500/10 px-2 py-0.5 text-[9px] font-bold text-purple-600 dark:text-purple-300">
                      {p.status}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1">{p.subtitle}</p>
                </div>
              </div>

              <span className="text-xs text-slate-400 font-bold">›</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
