'use client';

import React from 'react';
import { Project } from '@/types/project';
import SquircleIcon from './SquircleIcon';
import AppleGetButton from './AppleGetButton';
import { Sparkles, ArrowRight, Zap, Check, Star } from 'lucide-react';

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
  const flagship = projects.find((p) => p.id === 'lead-flow') || projects[0];
  const triageApp = projects.find((p) => p.id === 'l2-triage');
  const utilities = projects.filter((p) => p.shelf === 'weekend-builds' || p.shelf === 'utilities');
  const labProjects = projects.filter((p) => p.shelf === 'lab').slice(0, 3);

  return (
    <div className="space-y-6 pb-8 text-slate-900 dark:text-white">
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

      {/* 2. Flagship App Store Story Card: LeadFlow NYC */}
      {flagship && (
        <div
          onClick={() => onOpenSheet(flagship)}
          className="group relative cursor-pointer overflow-hidden rounded-[26px] border border-white/20 bg-gradient-to-br from-emerald-950/70 via-slate-950 to-slate-950 shadow-[0_16px_36px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] text-white"
        >
          {/* Top card glossy rim */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-emerald-500/25 blur-3xl" />

          {/* Card Visual Hero Area */}
          <div className="p-4 sm:p-5 pb-3">
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-extrabold uppercase tracking-wider text-emerald-400">
                FLAGSHIP BUILD
              </span>
              <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                {flagship.status}
              </span>
            </div>

            <h2 className="mt-2 text-xl sm:text-2xl font-black tracking-tight leading-snug drop-shadow-sm">
              LeadFlow NYC: Off-Market Property Intelligence
            </h2>
            <p className="mt-1 text-xs text-slate-300 leading-relaxed font-medium">
              Turns live NYC public municipal registries into ranked off-market deal reports pairing ACRIS deed recordings with 0–100 distress scoring.
            </p>

            {/* Micro Live Simulation Callout */}
            <div className="mt-3.5 rounded-2xl border border-white/15 bg-black/40 p-3 backdrop-blur-md">
              <div className="flex items-center justify-between text-[10px] pb-1.5 border-b border-white/10 text-emerald-400 font-bold uppercase tracking-wider">
                <span>Subject Parcel: 742 Evergreen (BBL: 3-03421)</span>
                <span className="text-slate-400 font-mono">Live NYC ACRIS</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center pt-2">
                <div className="rounded-xl bg-white/5 py-1.5 px-1">
                  <p className="text-[9px] uppercase text-slate-400 font-semibold">Deal Score</p>
                  <p className="text-sm font-black text-emerald-400">92 / 100</p>
                </div>
                <div className="rounded-xl bg-white/5 py-1.5 px-1">
                  <p className="text-[9px] uppercase text-slate-400 font-semibold">Equity Spread</p>
                  <p className="text-sm font-black text-cyan-400">$335k</p>
                </div>
                <div className="rounded-xl bg-white/5 py-1.5 px-1">
                  <p className="text-[9px] uppercase text-slate-400 font-semibold">Distress Pillar</p>
                  <p className="text-sm font-black text-emerald-400">Lis Pendens</p>
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
              <div className="min-w-0 pr-1">
                <p className="text-xs font-bold leading-tight text-white truncate">{flagship.title}</p>
                <p className="text-[10px] text-slate-300 truncate">Real Estate • Next.js 16 + Postgres</p>
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

      {/* 3. The Iconic Apple 3-Row Shelf: Verified GitHub Projects */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between px-0.5">
          <div>
            <h3 className="text-base font-black tracking-tight text-slate-900 dark:text-white">
              Featured Builds &amp; Tools
            </h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Full-stack web apps, data pipelines, and utilities
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
        <div className="rounded-[22px] border border-white/20 bg-white/70 p-2.5 shadow-md backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60 divide-y divide-slate-200/50 dark:divide-white/10">
          {utilities.slice(0, 4).map((app) => (
            <div
              key={app.id}
              onClick={() => onOpenSheet(app)}
              className="group flex cursor-pointer items-center justify-between py-2.5 px-1.5 transition-colors hover:bg-white/40 dark:hover:bg-white/5 rounded-xl"
            >
              <div className="flex items-center gap-2.5 min-w-0 pr-2">
                <SquircleIcon
                  iconName={app.iconName}
                  gradient={app.iconGradient}
                  size="md"
                />
                <div className="min-w-0">
                  <h4 className="text-xs font-bold tracking-tight text-slate-900 dark:text-white truncate">
                    {app.title}
                  </h4>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                    {app.subtitle}
                  </p>
                  <div className="mt-0.5 flex items-center gap-1.5 text-[9px] text-slate-400">
                    <span className="flex items-center gap-0.5 text-amber-500 font-semibold">
                      <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" /> 5.0
                    </span>
                    <span>•</span>
                    <span className="truncate">{app.category}</span>
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

      {/* 4. Second Editorial Story Card: Customer Inbox Triage */}
      {triageApp && (
        <div
          onClick={() => onOpenSheet(triageApp)}
          className="group relative cursor-pointer overflow-hidden rounded-[26px] border border-white/20 bg-gradient-to-br from-indigo-950 via-slate-950 to-purple-950 shadow-[0_16px_36px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] text-white"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
          <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-purple-500/25 blur-3xl" />

          <div className="p-4 sm:p-5 pb-3">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple-400">
              APP OF THE DAY • AI SYSTEMS
            </span>
            <h3 className="mt-1 text-xl sm:text-2xl font-black tracking-tight leading-snug">
              Customer Inbox Triage: AI SLA Router
            </h3>
            <p className="mt-1 text-xs text-purple-200/90 leading-relaxed font-medium">
              Uses Groq Llama 3.3 70B for zero-jailbreak message classification and deterministic impact-based urgency scoring (P0–P3 SLAs).
            </p>

            <div className="mt-3 rounded-2xl border border-purple-500/25 bg-black/50 p-3 font-mono text-[10px] text-purple-200">
              <span className="text-slate-400">// Groq LPU + Deterministic Urgency Scorer</span>
              <p className="mt-1 text-emerald-400 font-bold">✓ P0 Outage detected • 15 min SLA routing</p>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <SquircleIcon
                iconName={triageApp.iconName}
                gradient={triageApp.iconGradient}
                size="sm"
              />
              <div className="min-w-0 pr-1">
                <p className="text-xs font-bold leading-tight text-white truncate">{triageApp.title}</p>
                <p className="text-[10px] text-slate-300 truncate">AI Systems • Groq Llama 3.3 70B</p>
              </div>
            </div>

            <AppleGetButton
              isInstalled={installedAppIds.has(triageApp.id)}
              onToggle={(e) => onToggleInstall(triageApp.id, e)}
              accentColor={triageApp.accentColor}
            />
          </div>
        </div>
      )}

      {/* 5. In The Lab Spotlight Shelf */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between px-0.5">
          <div>
            <h3 className="text-base font-black tracking-tight text-slate-900 dark:text-white">
              In The Lab
            </h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Analytical models, utilities &amp; state engines
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

        <div className="rounded-[22px] border border-white/20 bg-white/70 p-2.5 shadow-md backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60 divide-y divide-slate-200/50 dark:divide-white/10">
          {labProjects.map((p) => (
            <div
              key={p.id}
              onClick={() => onOpenSheet(p)}
              className="flex cursor-pointer items-center justify-between py-2.5 px-1.5 transition-colors hover:bg-white/40 dark:hover:bg-white/5 rounded-xl"
            >
              <div className="flex items-center gap-2.5 min-w-0 pr-2">
                <SquircleIcon
                  iconName={p.iconName}
                  gradient={p.iconGradient}
                  size="md"
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-xs font-bold tracking-tight text-slate-900 dark:text-white truncate">
                      {p.title}
                    </h4>
                    <span className="rounded-full bg-purple-500/15 px-1.5 py-0.2 text-[8px] font-bold text-purple-600 dark:text-purple-300">
                      {p.status}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
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
