'use client';

import React, { useState } from 'react';
import { Project, ProjectCategory } from '@/types/project';
import AppCard from './AppCard';
import { Search, Filter, Sparkles, X } from 'lucide-react';

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

  // Extract unique tech stack tags
  const allStackTags = Array.from(new Set(projects.flatMap((p) => p.stack))).sort();

  // Filtered projects
  const filtered = projects.filter((p) => {
    // Category match
    if (selectedCategory !== 'All' && p.category !== selectedCategory) return false;

    // Stack tag match
    if (selectedStack && !p.stack.includes(selectedStack)) return false;

    // Search query match
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
    <div className="space-y-6">
      {/* Title & Filter Bar */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            All Applications & Directory
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Every production build, side project, and open-source utility in one place.
          </p>
        </div>

        {/* In-view Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter by name or keyword..."
            className="w-full rounded-full border border-slate-200/80 bg-white/60 py-2 pl-9 pr-8 text-xs text-slate-900 outline-none backdrop-blur-md transition-all focus:border-sky-500 focus:bg-white dark:border-white/10 dark:bg-slate-900/60 dark:text-white dark:focus:border-sky-400"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Domain Category Filter Chips */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
              selectedCategory === cat
                ? 'bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-950'
                : 'border border-slate-200/70 bg-white/50 text-slate-600 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tech Stack Sub-Filter Chips */}
      <div className="flex flex-wrap items-center gap-1.5 text-xs">
        <span className="font-semibold text-slate-400 flex items-center gap-1 mr-1">
          <Filter className="h-3.5 w-3.5" /> Stack:
        </span>
        {selectedStack && (
          <button
            type="button"
            onClick={() => setSelectedStack(null)}
            className="flex items-center gap-1 rounded-lg bg-sky-500 px-2.5 py-1 text-[11px] font-bold text-white shadow-sm"
          >
            <span>{selectedStack}</span>
            <X className="h-3 w-3" />
          </button>
        )}
        {allStackTags.slice(0, 8).map((tech) => {
          if (tech === selectedStack) return null;
          return (
            <button
              key={tech}
              type="button"
              onClick={() => setSelectedStack(tech)}
              className="rounded-lg border border-slate-200/60 bg-white/40 px-2.5 py-1 text-[11px] text-slate-600 transition-colors hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:bg-white/10"
            >
              {tech}
            </button>
          );
        })}
      </div>

      {/* Results Count & Grid */}
      <div>
        <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
          <span>
            Showing <strong className="text-slate-700 dark:text-slate-200">{filtered.length}</strong> {filtered.length === 1 ? 'application' : 'applications'}
          </span>
          {(selectedCategory !== 'All' || selectedStack || searchQuery) && (
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSelectedStack(null);
                setSearchQuery('');
              }}
              className="font-semibold text-sky-500 hover:underline dark:text-sky-400"
            >
              Reset All Filters
            </button>
          )}
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((project) => (
              <AppCard
                key={project.id}
                project={project}
                onOpenSheet={onOpenSheet}
                installed={installedAppIds.has(project.id)}
                onToggleInstall={onToggleInstall}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 p-12 text-center dark:border-white/20">
            <Sparkles className="mx-auto h-8 w-8 text-slate-400" />
            <h3 className="mt-3 text-base font-bold text-slate-900 dark:text-white">
              No applications match this filter
            </h3>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Try choosing another tech stack tag or domain category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSelectedStack(null);
                setSearchQuery('');
              }}
              className="mt-4 rounded-full bg-slate-900 px-5 py-2 text-xs font-bold text-white dark:bg-white dark:text-slate-950"
            >
              Show All Apps
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
