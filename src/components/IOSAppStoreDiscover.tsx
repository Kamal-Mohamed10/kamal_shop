'use client';

import React from 'react';
import { Project } from '@/types/project';
import SquircleIcon from './SquircleIcon';
import AppleGetButton from './AppleGetButton';
import { Sparkles, ArrowRight, Zap, Check, Star, ShieldCheck } from 'lucide-react';

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
    <div className="space-y-7 pb-8 text-slate-900 dark:text-white">
      {/* 1. iOS App Store Today Header */}
      <div className="flex items-end justify-between pt-1 pb-1">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            FRIDAY, NOVEMBER 20
          </p>
          <h1 className="text-[34px] font-black tracking-tight leading-none text-slate-900 dark:text-white">
            Today
          </h1>
        </div>

        {/* User Profile Avatar in Header (Apple App Store user circle) */}
        <button
          type="button"
          onClick={onOpenProfile}
          className="group relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-sky-500 via-indigo-600 to-purple-600 text-white shadow-md transition-transform active:scale-95 ring-2 ring-white/50 dark:ring-white/10"
          title="Kamal Mohamed (Developer Profile)"
        >
          <span className="text-xs font-black">KM</span>
          <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-emerald-500 dark:border-slate-900 shadow-xs" />
        </button>
      </div>

      {/* 2. Flagship App Store Story Card: PropScope */}
      {flagship && (
        <div
          onClick={() => onOpenSheet(flagship)}
          className="group relative cursor-pointer overflow-hidden rounded-[26px] border border-white/20 bg-gradient-to-br from-emerald-950/70 via-slate-950 to-slate-950 shadow-[0_16px_36px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] text-white"
        >
          {/* Top card glossy rim */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-emerald-500/25 blur-3xl" />

          {/* Card Visual Hero Area */}
          <div className="p-5 pb-3">
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-extrabold uppercase tracking-wider text-emerald-400">
                MAJOR RELEASE
              </span>
              <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                {flagship.status}
              </span>
            </div>

            <h2 className="mt-2 text-2xl font-black tracking-tight leading-snug drop-shadow-sm">
              PropScope: Real Estate Underwriting at Scale
            </h2>
            <p className="mt-1 text-xs text-slate-300 leading-relaxed font-medium">
              Automated Cap Rate, Cash-on-Cash, and DSCR cash-flow analyzer querying 50,000+ parcels under 120ms.
            </p>

            {/* Micro Live Simulation Callout */}
            <div className="mt-4 rounded-2xl border border-white/15 bg-black/40 p-3 backdrop-blur-md">
              <div className="flex items-center justify-between text-[10px] pb-1.5 border-b border-white/10 text-emerald-400 font-bold uppercase tracking-wider">
                <span>Subject Property: 412 Oakwood</span>
                <span className="text-slate-400 font-mono">&lt; 120ms PostGIS</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center pt-2">
                <div className="rounded-xl bg-white/5 py-1.5 px-1">
                  <p className="text-[9px] uppercase text-slate-400 font-semibold">Cap Rate</p>
                  <p className="text-sm font-black text-emerald-400">8.42%</p>
                </div>
                <div className="rounded-xl bg-white/5 py-1.5 px-1">
                  <p className="text-[9px] uppercase text-slate-400 font-semibold">Cash-on-Cash</p>
                  <p className="text-sm font-black text-cyan-400">11.8%</p>
                </div>
                <div className="rounded-xl bg-white/5 py-1.5 px-1">
                  <p className="text-[9px] uppercase text-slate-400 font-semibold">DSCR</p>
                  <p className="text-sm font-black text-emerald-400">1.42x</p>
                </div>
              </div>
            </div>
          </div>

          {/* Authentic Apple Bottom Card Bar */}
          <div className="flex items-center justify-between border-t border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <SquircleIcon
                iconName={flagship.iconName}
                gradient={flagship.iconGradient}
                size="sm"
              />
              <div>
                <p className="text-xs font-bold leading-tight text-white">{flagship.title}</p>
                <p className="text-[10px] text-slate-300">{flagship.category} • Free Underwriter</p>
              </div>
            </div>

            <AppleGetButton
              isInstalled={installedAppIds.has(flagship.id)}
              onToggle={(e) => onToggleInstall(flagship.id, e)}
              accentColor={flagship.accentColor}
            />
          </div>
        </div>
      )}

      {/* 3. The Iconic Apple 3-Row Shelf: Weekend Builds & Tools */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-0.5">
          <div>
            <h3 className="text-lg font-black tracking-tight text-slate-900 dark:text-white">
              Essential Engineering Tools
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              High-concurrency systems &amp; local utilities
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigateTab('apps')}
            className="text-xs font-bold text-[#007AFF] hover:underline"
          >
            See All
          </button>
        </div>

        {/* 3-Row Container (Classic iOS App Store UITableView style) */}
        <div className="rounded-[24px] border border-white/20 bg-white/70 p-3 shadow-md backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60 divide-y divide-slate-200/50 dark:divide-white/10">
          {utilities.map((app) => (
            <div
              key={app.id}
              onClick={() => onOpenSheet(app)}
              className="group flex cursor-pointer items-center justify-between py-2.5 px-1.5 transition-colors hover:bg-white/40 dark:hover:bg-white/5 rounded-xl"
            >
              <div className="flex items-center gap-3 min-w-0 pr-2">
                <SquircleIcon
                  iconName={app.iconName}
                  gradient={app.iconGradient}
                  size="md"
                />
                <div className="min-w-0">
                  <h4 className="text-sm font-bold tracking-tight text-slate-900 dark:text-white truncate">
                    {app.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                    {app.subtitle}
                  </p>
                  <div className="mt-0.5 flex items-center gap-1.5 text-[10px] text-slate-400">
                    <span className="flex items-center gap-0.5 text-amber-500 font-semibold">
                      <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" /> 5.0
                    </span>
                    <span>•</span>
                    <span>{app.category}</span>
                  </div>
                </div>
              </div>

              <AppleGetButton
                isInstalled={installedAppIds.has(app.id)}
                onToggle={(e) => onToggleInstall(app.id, e)}
                accentColor={app.accentColor}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 4. Second Editorial Story Card: NeuralDraft AI */}
      {neuralDraft && (
        <div
          onClick={() => onOpenSheet(neuralDraft)}
          className="group relative cursor-pointer overflow-hidden rounded-[26px] border border-white/20 bg-gradient-to-br from-indigo-950 via-slate-950 to-purple-950 shadow-[0_16px_36px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] text-white"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
          <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-purple-500/25 blur-3xl" />

          <div className="p-5 pb-3">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple-400">
              APP OF THE DAY • AI SYSTEMS
            </span>
            <h3 className="mt-1 text-2xl font-black tracking-tight leading-snug">
              NeuralDraft: Architecture on Autopilot
            </h3>
            <p className="mt-1 text-xs text-purple-200/90 leading-relaxed font-medium">
              Vercel AI SDK pipeline decomposing product ideas into Mermaid diagrams and validated PostgreSQL schemas.
            </p>

            <div className="mt-3 rounded-2xl border border-purple-500/25 bg-black/50 p-3 font-mono text-[10px] text-purple-200">
              <span className="text-slate-400">// Streaming AST token generation</span>
              <p className="mt-1 text-emerald-400 font-bold">✓ Zero Hallucinations schema validator</p>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <SquircleIcon
                iconName={neuralDraft.iconName}
                gradient={neuralDraft.iconGradient}
                size="sm"
              />
              <div>
                <p className="text-xs font-bold leading-tight text-white">{neuralDraft.title}</p>
                <p className="text-[10px] text-slate-300">Developer Tools • AI SDK</p>
              </div>
            </div>

            <AppleGetButton
              isInstalled={installedAppIds.has(neuralDraft.id)}
              onToggle={(e) => onToggleInstall(neuralDraft.id, e)}
              accentColor={neuralDraft.accentColor}
            />
          </div>
        </div>
      )}

      {/* 5. In The Lab Spotlight Shelf */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-0.5">
          <div>
            <h3 className="text-lg font-black tracking-tight text-slate-900 dark:text-white">
              In The Lab
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Experimental spatial &amp; local-first runtimes
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigateTab('lab')}
            className="text-xs font-bold text-purple-500 hover:underline"
          >
            Enter Lab →
          </button>
        </div>

        <div className="rounded-[24px] border border-white/20 bg-white/70 p-3 shadow-md backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60 divide-y divide-slate-200/50 dark:divide-white/10">
          {labProjects.map((p) => (
            <div
              key={p.id}
              onClick={() => onOpenSheet(p)}
              className="flex cursor-pointer items-center justify-between py-2.5 px-1.5 transition-colors hover:bg-white/40 dark:hover:bg-white/5 rounded-xl"
            >
              <div className="flex items-center gap-3 min-w-0 pr-2">
                <SquircleIcon
                  iconName={p.iconName}
                  gradient={p.iconGradient}
                  size="md"
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold tracking-tight text-slate-900 dark:text-white truncate">
                      {p.title}
                    </h4>
                    <span className="rounded-full bg-purple-500/15 px-2 py-0.5 text-[9px] font-bold text-purple-600 dark:text-purple-300">
                      {p.status}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                    {p.subtitle}
                  </p>
                </div>
              </div>

              <span className="text-sm font-bold text-slate-400 pr-2">›</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
