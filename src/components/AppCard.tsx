'use client';

import React from 'react';
import { Project } from '@/types/project';
import SquircleIcon from './SquircleIcon';
import { ExternalLink, ArrowRight, Sparkles } from 'lucide-react';

interface AppCardProps {
  project: Project;
  onOpenSheet: (project: Project) => void;
  installed?: boolean;
  onToggleInstall?: (id: string, e: React.MouseEvent) => void;
}

export default function AppCard({
  project,
  onOpenSheet,
  installed = false,
  onToggleInstall,
}: AppCardProps) {
  return (
    <div
      onClick={() => onOpenSheet(project)}
      className="group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border border-white/20 bg-white/40 p-5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/60 hover:shadow-[0_16px_40px_rgb(0,0,0,0.12)] dark:border-white/10 dark:bg-slate-900/40 dark:hover:border-white/20 dark:hover:bg-slate-900/60"
    >
      {/* Specular glass rim lighting */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent dark:via-white/20" />

      <div>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <SquircleIcon
              iconName={project.iconName}
              gradient={project.iconGradient}
              size="md"
            />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <span className="inline-flex items-center rounded-full border border-slate-200/80 bg-slate-100/80 px-2 py-0.5 text-[10px] font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                  {project.category}
                </span>
              </div>
              <p className="mt-1 line-clamp-2 text-xs text-slate-600 dark:text-slate-400">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Action solid button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              if (onToggleInstall) {
                onToggleInstall(project.id, e);
              } else {
                onOpenSheet(project);
              }
            }}
            className={`flex items-center justify-center rounded-full px-4 py-1.5 text-xs font-bold transition-all shadow-sm active:scale-95 ${
              installed
                ? 'border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                : 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100'
            }`}
          >
            {installed ? 'OPEN' : 'GET'}
          </button>
        </div>

        {/* Feature highlight or problem snippet */}
        <div className="mt-4 rounded-xl border border-white/30 bg-white/30 p-2.5 text-xs text-slate-700 backdrop-blur-md dark:border-white/5 dark:bg-white/5 dark:text-slate-300">
          <span className="font-semibold text-slate-900 dark:text-white">Core Impact: </span>
          <span className="line-clamp-1">{project.solution[0]}</span>
        </div>
      </div>

      {/* Footer metadata strip */}
      <div className="mt-4 flex items-center justify-between border-t border-slate-200/50 pt-3 text-[11px] text-slate-500 dark:border-white/10 dark:text-slate-400">
        <div className="flex items-center gap-1.5">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: project.accentColor }}
          />
          <span className="font-medium text-slate-700 dark:text-slate-300">
            {project.status}
          </span>
          <span>•</span>
          <span>{project.buildTime}</span>
        </div>

        <div className="flex items-center gap-1 font-medium text-slate-900 group-hover:translate-x-0.5 transition-transform dark:text-white">
          <span>Details</span>
          <ArrowRight className="h-3 w-3" />
        </div>
      </div>
    </div>
  );
}
