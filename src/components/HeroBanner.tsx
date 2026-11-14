'use client';

import React from 'react';
import { Project } from '@/types/project';
import SquircleIcon from './SquircleIcon';
import GithubIcon from './GithubIcon';
import { ArrowUpRight, Sparkles, Zap, ShieldCheck } from 'lucide-react';

interface HeroBannerProps {
  project: Project;
  onOpenSheet: (project: Project) => void;
}

export default function HeroBanner({ project, onOpenSheet }: HeroBannerProps) {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/30 bg-gradient-to-br from-white/70 via-white/40 to-emerald-500/10 p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] backdrop-blur-2xl dark:border-white/10 dark:from-slate-900/80 dark:via-slate-900/50 dark:to-emerald-950/20">
      {/* Specular rim illumination */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent dark:via-white/30" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl filter" />

      <div className="relative z-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
        <div className="max-w-xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <Sparkles className="h-3.5 w-3.5" />
              FLAGSHIP RELEASE • {project.category.toUpperCase()}
            </span>
            <span className="rounded-full border border-slate-200/60 bg-white/50 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              {project.status}
            </span>
          </div>

          <div className="flex items-start gap-4">
            <SquircleIcon
              iconName={project.iconName}
              gradient={project.iconGradient}
              size="lg"
            />
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {project.title}
              </h2>
              <p className="mt-1 text-sm md:text-base font-medium text-slate-600 dark:text-slate-300">
                {project.subtitle}
              </p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {project.problem}
          </p>

          {/* Quick Metrics Strip */}
          <div className="flex flex-wrap gap-3 pt-1">
            <div className="flex items-center gap-1.5 rounded-xl border border-white/40 bg-white/50 px-3 py-1.5 text-xs font-medium text-slate-800 backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
              <Zap className="h-3.5 w-3.5 text-amber-500" />
              <span>Speed: {project.highlightStat?.value || '< 120ms'}</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-xl border border-white/40 bg-white/50 px-3 py-1.5 text-xs font-medium text-slate-800 backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
              <span>Role: {project.role}</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-xl border border-white/40 bg-white/50 px-3 py-1.5 text-xs font-medium text-slate-800 backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
              <span>Stack: {project.stack.slice(0, 3).join(', ')}</span>
            </div>
          </div>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => onOpenSheet(project)}
              className="flex items-center gap-2 rounded-full bg-slate-900 px-6 py-2.5 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
            >
              <span>View Product Sheet</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>

            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/40 bg-white/50 px-5 py-2.5 text-sm font-semibold text-slate-800 backdrop-blur-md transition-colors hover:bg-white/80 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
            >
              <GithubIcon className="h-4 w-4" />
              <span>Source Code</span>
            </a>
          </div>
        </div>

        {/* Visual Product Showcase Pill / Underwrite Callout */}
        <div className="w-full lg:w-96 rounded-2xl border border-white/30 bg-slate-950/80 p-4 text-white shadow-2xl backdrop-blur-xl">
          <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2 text-xs">
            <span className="font-semibold text-emerald-400">PropScope Live Underwriting</span>
            <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[10px] text-emerald-300">
              Interactive
            </span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-400">Parcel Lot:</span>
              <span className="font-mono font-medium">412 Oakwood Ave</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Target NOI:</span>
              <span className="font-mono font-medium text-emerald-400">$38,400 / yr</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Cap Rate:</span>
              <span className="font-mono font-medium text-emerald-400">8.42%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Cash-on-Cash:</span>
              <span className="font-mono font-medium text-cyan-400">11.8%</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onOpenSheet(project)}
            className="mt-4 w-full rounded-xl border border-emerald-500/30 bg-emerald-500/20 py-2 text-center text-xs font-bold text-emerald-300 transition-colors hover:bg-emerald-500/30"
          >
            Launch Live Simulation & Case Study →
          </button>
        </div>
      </div>
    </div>
  );
}
