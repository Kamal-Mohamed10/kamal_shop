'use client';

import React from 'react';
import { Project } from '@/types/project';
import SquircleIcon from './SquircleIcon';
import { FlaskConical, ArrowRight, Sparkles, Cpu, Layers } from 'lucide-react';

interface InTheLabViewProps {
  projects: Project[];
  onOpenSheet: (project: Project) => void;
}

export default function InTheLabView({ projects, onOpenSheet }: InTheLabViewProps) {
  const labProjects = projects.filter((p) => p.shelf === 'lab');

  return (
    <div className="space-y-5 pb-8 text-slate-900 dark:text-white">
      {/* iOS Lab Header */}
      <div className="pt-1">
        <p className="text-[11px] font-bold uppercase tracking-wider text-purple-500">
          EXPERIMENTAL SYSTEMS
        </p>
        <h1 className="text-[34px] font-black tracking-tight leading-none">
          In The Lab
        </h1>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          Spatial 3D canvases, local Apple Silicon LLM runtimes, and circadian audio synthesis.
        </p>
      </div>

      {/* Lab Cards */}
      <div className="space-y-3">
        {labProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => onOpenSheet(project)}
            className="group cursor-pointer rounded-[24px] border border-white/20 bg-white/70 p-4 shadow-md backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60 transition-all hover:scale-[1.01] active:scale-[0.99]"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <SquircleIcon
                  iconName={project.iconName}
                  gradient={project.iconGradient}
                  size="md"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-purple-500 transition-colors">
                      {project.title}
                    </h3>
                    <span className="rounded-full bg-purple-500/15 px-2 py-0.5 text-[9px] font-bold text-purple-600 dark:text-purple-300">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {project.subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Thesis callout */}
            <div className="mt-3 rounded-xl border border-purple-500/15 bg-purple-500/5 p-2.5 text-xs text-slate-700 dark:text-slate-300">
              <span className="font-bold text-purple-600 dark:text-purple-400">Thesis: </span>
              <span>{project.problem}</span>
            </div>

            <div className="mt-3 flex items-center justify-between text-xs pt-2 border-t border-slate-200/50 dark:border-white/10">
              <div className="flex gap-1.5 flex-wrap">
                {project.stack.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-slate-100 dark:bg-white/5 px-2 py-0.5 text-[10px] text-slate-600 dark:text-slate-400 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <span className="text-xs font-bold text-purple-500 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                Inspect Spec →
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
