'use client';

import React, { useState } from 'react';
import { Project } from '@/types/project';
import SquircleIcon from './SquircleIcon';
import AppleGetButton from './AppleGetButton';
import { Search, Star, X, Filter } from 'lucide-react';

interface AllAppsViewProps {
  projects: Project[];
  onOpenSheet: (project: Project) => void;
  installedAppIds: Set<string>;
  onToggleInstall: (id: string, e: React.MouseEvent) => void;
}

export default function AllAppsView({
  projects,
  onOpenSheet,
  installedAppIds,
  onToggleInstall,
}: AllAppsViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStack, setSelectedStack] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Real Estate',
    'AI & Machine Learning',
    'DevTools & Infra',
    'Productivity',
    'FinTech',
    'Spatial & Graphics',
  ];

  // All unique stack tags
  const allStackTags = Array.from(new Set(projects.flatMap((p) => p.stack))).sort();

  // Filtered projects
  const filtered = projects.filter((p) => {
    if (selectedCategory !== 'All' && p.category !== selectedCategory) return false;
    if (selectedStack && !p.stack.includes(selectedStack)) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchesTitle = p.title.toLowerCase().includes(q);
      const matchesSubtitle = p.subtitle.toLowerCase().includes(q);
      const matchesProblem = p.problem.toLowerCase().includes(q);
      const matchesStack = p.stack.some((s) => s.toLowerCase().includes(q));
      if (!matchesTitle && !matchesSubtitle && !matchesProblem && !matchesStack) {
        return false;
      }
    }
    return true;
  });

  return (
    <div className="space-y-4 pb-8 text-slate-900 dark:text-white">
      {/* 1. iOS Apps Header */}
      <div className="pt-1">
        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          EXPLORE DIRECTORY
        </p>
        <h1 className="text-[34px] font-black tracking-tight leading-none">
          Apps
        </h1>
      </div>

      {/* 2. Authentic iOS App Store Search Bar */}
      <div className="relative">
        <div className="flex items-center rounded-[12px] bg-slate-200/80 px-3 py-2 text-xs backdrop-blur-md dark:bg-white/10 transition-colors focus-within:bg-slate-200 dark:focus-within:bg-white/15">
          <Search className="h-4 w-4 text-slate-400 shrink-0 mr-2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title, stack, or keywords..."
            className="w-full bg-transparent text-xs text-slate-900 placeholder:text-slate-400 outline-none dark:text-white font-medium"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="text-slate-400 hover:text-slate-600 p-0.5"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* 3. iOS Category Horizontal Pill Strip */}
      <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-bold transition-all ${
              selectedCategory === cat
                ? 'bg-[#007AFF] text-white shadow-xs dark:bg-white dark:text-slate-950'
                : 'bg-slate-200/80 text-slate-600 hover:bg-slate-300 dark:bg-white/10 dark:text-slate-300 dark:hover:bg-white/15'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 4. Tech Stack Quick Sub-filters */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[10px]">
        <span className="text-slate-400 font-bold uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
          <Filter className="h-3 w-3" /> Stack:
        </span>
        {selectedStack && (
          <button
            type="button"
            onClick={() => setSelectedStack(null)}
            className="shrink-0 flex items-center gap-1 rounded-md bg-sky-500 px-2 py-0.5 font-bold text-white shadow-xs"
          >
            <span>{selectedStack}</span>
            <X className="h-2.5 w-2.5" />
          </button>
        )}
        {allStackTags.slice(0, 7).map((tech) => {
          if (tech === selectedStack) return null;
          return (
            <button
              key={tech}
              type="button"
              onClick={() => setSelectedStack(tech)}
              className="shrink-0 rounded-md border border-slate-300/70 bg-white/50 px-2 py-0.5 text-slate-600 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-400"
            >
              {tech}
            </button>
          );
        })}
      </div>

      {/* 5. iOS App Store Grouped List */}
      <div className="space-y-1">
        <div className="flex items-center justify-between text-[11px] text-slate-400 px-1 pb-1">
          <span>{filtered.length} Applications</span>
          {(selectedCategory !== 'All' || selectedStack || searchQuery) && (
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSelectedStack(null);
                setSearchQuery('');
              }}
              className="font-bold text-[#007AFF] hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        <div className="rounded-[24px] border border-white/20 bg-white/70 p-3 shadow-md backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60 divide-y divide-slate-200/50 dark:divide-white/10">
          {filtered.map((app, index) => (
            <div
              key={app.id}
              onClick={() => onOpenSheet(app)}
              className="group flex cursor-pointer items-center justify-between py-2.5 px-1.5 transition-colors hover:bg-white/40 dark:hover:bg-white/5 rounded-xl"
            >
              <div className="flex items-center gap-3 min-w-0 pr-2">
                {/* Ranking number */}
                <span className="font-mono text-xs font-bold text-slate-400 w-4 text-center shrink-0">
                  {index + 1}
                </span>

                {/* 58px Apple Squircle icon */}
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

          {filtered.length === 0 && (
            <div className="py-8 text-center text-slate-400 text-xs">
              <p>No apps found matching &ldquo;{searchQuery}&rdquo;</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedStack(null);
                  setSearchQuery('');
                }}
                className="mt-2 font-bold text-[#007AFF]"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
