'use client';

import React from 'react';
import GithubIcon from './GithubIcon';
import { 
  Compass, 
  FolderKanban, 
  FlaskConical, 
  User, 
  ExternalLink, 
  FileText, 
  Building2, 
  Sparkles, 
  Code2 
} from 'lucide-react';

interface SidebarProps {
  activeView: 'discover' | 'apps' | 'lab' | 'profile';
  onSelectView: (view: 'discover' | 'apps' | 'lab' | 'profile') => void;
  installedCount: number;
  onOpenResumeModal: () => void;
}

export default function Sidebar({
  activeView,
  onSelectView,
  installedCount,
  onOpenResumeModal,
}: SidebarProps) {
  const navItems = [
    {
      id: 'discover' as const,
      label: 'Discover',
      subtitle: 'Featured & Top Shelves',
      icon: Compass,
    },
    {
      id: 'apps' as const,
      label: 'All Apps',
      subtitle: 'Full Project Directory',
      icon: FolderKanban,
    },
    {
      id: 'lab' as const,
      label: 'In The Lab',
      subtitle: 'Prototypes & Concepts',
      icon: FlaskConical,
      badge: '3 Active',
    },
    {
      id: 'profile' as const,
      label: 'Developer Profile',
      subtitle: 'Bio, Skills & Experience',
      icon: User,
    },
  ];

  return (
    <aside className="hidden lg:flex w-64 flex-col justify-between shrink-0 p-4 border-r border-white/20 bg-white/30 backdrop-blur-2xl transition-colors dark:border-white/10 dark:bg-slate-950/30">
      {/* Specular right rim */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-white/50 to-transparent dark:via-white/20" />

      {/* Primary Navigation Links */}
      <div className="space-y-6">
        <div>
          <p className="px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Storefront
          </p>
          <nav className="mt-2 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectView(item.id)}
                  className={`group flex w-full items-center justify-between rounded-2xl px-3.5 py-3 text-left transition-all ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-md dark:bg-white dark:text-slate-950'
                      : 'text-slate-700 hover:bg-white/60 dark:text-slate-300 dark:hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      className={`h-5 w-5 transition-transform group-hover:scale-110 ${
                        isActive
                          ? 'text-sky-400 dark:text-sky-600'
                          : 'text-slate-500 dark:text-slate-400'
                      }`}
                    />
                    <div>
                      <p className="text-sm font-bold leading-tight">{item.label}</p>
                      <p
                        className={`text-[10px] ${
                          isActive
                            ? 'text-slate-300 dark:text-slate-600'
                            : 'text-slate-400 dark:text-slate-500'
                        }`}
                      >
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  {item.badge && (
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                        isActive
                          ? 'bg-white/20 text-white dark:bg-slate-900/20 dark:text-slate-900'
                          : 'border border-sky-500/30 bg-sky-500/10 text-sky-500 dark:text-sky-400'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Quick Shelf Categories */}
        <div className="rounded-2xl border border-white/20 bg-white/40 p-3.5 backdrop-blur-md dark:border-white/5 dark:bg-white/5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
            Installed Apps
          </p>
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-600 dark:text-slate-300">Installed in Session</span>
            <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 font-bold text-emerald-600 dark:text-emerald-400">
              {installedCount} builds
            </span>
          </div>
        </div>
      </div>

      {/* Developer Card & Actions */}
      <div className="space-y-3 pt-4 border-t border-slate-200/60 dark:border-white/10">
        <button
          type="button"
          onClick={onOpenResumeModal}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200/80 bg-white/70 py-2.5 text-xs font-bold text-slate-800 shadow-sm backdrop-blur-md transition-all hover:bg-white active:scale-98 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
        >
          <FileText className="h-4 w-4 text-emerald-500" />
          <span>View Resume (PDF)</span>
        </button>

        <a
          href="https://github.com/Kamal-Mohamed10/kamal_shop"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-between rounded-xl p-2 text-xs text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
        >
          <span className="flex items-center gap-2">
            <GithubIcon className="h-4 w-4" />
            <span>Storefront Repo</span>
          </span>
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </aside>
  );
}
