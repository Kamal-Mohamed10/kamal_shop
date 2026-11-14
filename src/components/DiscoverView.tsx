'use client';

import React from 'react';
import { Project } from '@/types/project';
import HeroBanner from './HeroBanner';
import AppCard from './AppCard';
import SquircleIcon from './SquircleIcon';
import { Sparkles, ArrowRight, Layers, Flame, Wrench, FlaskConical } from 'lucide-react';

interface DiscoverViewProps {
  projects: Project[];
  onOpenSheet: (project: Project) => void;
  installedAppIds: Set<string>;
  onToggleInstall: (id: string, e: React.MouseEvent) => void;
  onNavigateView: (view: 'discover' | 'apps' | 'lab' | 'profile') => void;
}

export default function DiscoverView({
  projects,
  onOpenSheet,
  installedAppIds,
  onToggleInstall,
  onNavigateView,
}: DiscoverViewProps) {
  // Flagship app (PropScope)
  const flagship = projects.find((p) => p.id === 'propscope') || projects[0];

  // Shelves
  const featured = projects.filter((p) => p.shelf === 'featured');
  const weekend = projects.filter((p) => p.shelf === 'weekend-builds' || p.shelf === 'utilities');
  const labSpotlight = projects.filter((p) => p.shelf === 'lab').slice(0, 3);

  return (
    <div className="space-y-10">
      {/* 1. Flagship Hero Banner */}
      {flagship && <HeroBanner project={flagship} onOpenSheet={onOpenSheet} />}

      {/* 2. Shelf: Featured Releases */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-amber-500" />
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Featured Releases
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                End-to-end production systems with live underwriting, streaming AI, and telemetry.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onNavigateView('apps')}
            className="flex items-center gap-1 text-xs font-bold text-sky-500 hover:text-sky-600 dark:text-sky-400"
          >
            <span>See All</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <AppCard
              key={p.id}
              project={p}
              onOpenSheet={onOpenSheet}
              installed={installedAppIds.has(p.id)}
              onToggleInstall={onToggleInstall}
            />
          ))}
        </div>
      </section>

      {/* 3. Shelf: Weekend Builds & High-Performance Utilities */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wrench className="h-5 w-5 text-sky-500" />
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Weekend Builds & Utilities
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Light-speed developer tools, local snippet vaults, and financial simulators.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onNavigateView('apps')}
            className="flex items-center gap-1 text-xs font-bold text-sky-500 hover:text-sky-600 dark:text-sky-400"
          >
            <span>See All</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {weekend.map((p) => (
            <AppCard
              key={p.id}
              project={p}
              onOpenSheet={onOpenSheet}
              installed={installedAppIds.has(p.id)}
              onToggleInstall={onToggleInstall}
            />
          ))}
        </div>
      </section>

      {/* 4. Shelf: In The Lab Preview Banner */}
      <section className="relative overflow-hidden rounded-[32px] border border-white/20 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-indigo-500/10 p-6 md:p-8 backdrop-blur-xl dark:border-white/10 dark:from-purple-950/30 dark:via-pink-950/20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              <FlaskConical className="h-4 w-4" />
              <span>In The Lab • Active R&D</span>
            </div>
            <h3 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
              Experimental Spatial & Autonomous Systems
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Explore 3D WebGL spatial canvases, local Apple Silicon agent kernels, and circadian generative audio.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigateView('lab')}
            className="rounded-full bg-purple-600 px-5 py-2.5 text-xs font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95 hover:bg-purple-700"
          >
            Enter The Lab →
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {labSpotlight.map((p) => (
            <div
              key={p.id}
              onClick={() => onOpenSheet(p)}
              className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/20 bg-white/40 p-3 backdrop-blur-md transition-all hover:bg-white/70 dark:border-white/5 dark:bg-white/5 dark:hover:bg-white/10"
            >
              <SquircleIcon
                iconName={p.iconName}
                gradient={p.iconGradient}
                size="sm"
              />
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white">{p.title}</p>
                <p className="text-[10px] text-purple-600 dark:text-purple-400 font-semibold">{p.status}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
