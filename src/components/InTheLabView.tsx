'use client';

import React from 'react';
import { Project } from '@/types/project';
import SquircleIcon from './SquircleIcon';
import { FlaskConical, Sparkles, Terminal, ArrowUpRight, Cpu, GitBranch, Layers } from 'lucide-react';

interface InTheLabViewProps {
  projects: Project[];
  onOpenSheet: (project: Project) => void;
}

export default function InTheLabView({ projects, onOpenSheet }: InTheLabViewProps) {
  const labProjects = projects.filter((p) => p.shelf === 'lab');

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-transparent p-6 md:p-8 backdrop-blur-xl dark:border-white/10 dark:from-purple-950/30 dark:via-pink-950/20">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
          <FlaskConical className="h-4 w-4" />
          <span>Experimental Research & Prototypes</span>
        </div>
        <h1 className="mt-2 text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          In The Lab
        </h1>
        <p className="mt-2 max-w-2xl text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          Where new architectural bets, spatial interfaces, local AI runtimes, and creative algorithms are tested before production rollout.
        </p>
      </div>

      {/* Lab Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {labProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => onOpenSheet(project)}
            className="group relative flex cursor-pointer flex-col justify-between rounded-3xl border border-white/20 bg-white/40 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-white/60 hover:shadow-xl dark:border-white/10 dark:bg-slate-900/40 dark:hover:border-purple-400/30 dark:hover:bg-slate-900/60"
          >
            <div>
              {/* Status Pill & Shelf Tag */}
              <div className="flex items-center justify-between pb-4">
                <span className="flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-0.5 text-[11px] font-bold text-purple-600 dark:text-purple-300">
                  <span className="h-1.5 w-1.5 animate-ping rounded-full bg-purple-500" />
                  {project.status}
                </span>
                <span className="text-[11px] font-medium text-slate-400">
                  {project.buildTime}
                </span>
              </div>

              {/* Icon & Title */}
              <div className="flex items-start gap-4">
                <SquircleIcon
                  iconName={project.iconName}
                  gradient={project.iconGradient}
                  size="md"
                />
                <div>
                  <h3 className="font-bold text-slate-900 group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Problem / Experiment Focus */}
              <div className="mt-4 rounded-xl border border-white/30 bg-white/30 p-3 text-xs text-slate-700 dark:border-white/5 dark:bg-white/5 dark:text-slate-300">
                <p className="font-semibold text-slate-900 dark:text-white mb-1">Thesis:</p>
                <p className="line-clamp-2">{project.problem}</p>
              </div>

              {/* Tech stack */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-slate-200/60 bg-slate-100/60 px-2 py-0.5 text-[10px] font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom action */}
            <div className="mt-6 flex items-center justify-between border-t border-slate-200/50 pt-3 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400">
              <span>Inspect Lab Spec</span>
              <div className="flex items-center gap-1 font-bold text-purple-600 dark:text-purple-400 group-hover:translate-x-1 transition-transform">
                <span>View Sheet</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
