'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Project } from '@/types/project';
import SquircleIcon from './SquircleIcon';
import { Search, Compass, FolderKanban, FlaskConical, User, ArrowRight, CornerDownLeft, X } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onNavigateView: (view: 'discover' | 'apps' | 'lab' | 'profile') => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  projects,
  onSelectProject,
  onNavigateView,
}: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Global keyboard shortcut ⌘K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled by parent or toggle
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Filter projects by query
  const q = query.toLowerCase().trim();
  const filteredProjects = projects.filter((p) => {
    if (!q) return true;
    return (
      p.title.toLowerCase().includes(q) ||
      p.subtitle.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.stack.some((tech) => tech.toLowerCase().includes(q)) ||
      p.problem.toLowerCase().includes(q)
    );
  });

  const navItems = [
    { id: 'discover', label: 'Discover Featured Apps', view: 'discover' as const, icon: Compass },
    { id: 'apps', label: 'Browse All Apps & Directory', view: 'apps' as const, icon: FolderKanban },
    { id: 'lab', label: 'Inspect In The Lab Prototypes', view: 'lab' as const, icon: FlaskConical },
    { id: 'profile', label: 'View Kamal\'s Developer Bio & Resume', view: 'profile' as const, icon: User },
  ].filter((item) => !q || item.label.toLowerCase().includes(q));

  const totalResults = filteredProjects.length + navItems.length;

  // Handle arrow key navigation
  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, totalResults));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + totalResults) % Math.max(1, totalResults));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex < filteredProjects.length) {
        const p = filteredProjects[selectedIndex];
        if (p) {
          onSelectProject(p);
          onClose();
        }
      } else {
        const nav = navItems[selectedIndex - filteredProjects.length];
        if (nav) {
          onNavigateView(nav.view);
          onClose();
        }
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24 bg-slate-950/60 backdrop-blur-md animate-in fade-in duration-150"
    >
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Palette Liquid Glass Surface */}
      <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-white/20 bg-white/85 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/90 dark:text-slate-100">
        {/* Specular Rim */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent dark:via-white/30" />

        {/* Search input header */}
        <div className="flex items-center gap-3 border-b border-slate-200/80 px-5 py-4 dark:border-white/10">
          <Search className="h-5 w-5 text-slate-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleInputKeyDown}
            placeholder="Search products, domains (Real Estate, AI), or stacks (PostGIS, Go)..."
            className="w-full bg-transparent text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
          />
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Search results list */}
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {filteredProjects.length > 0 && (
            <div className="mb-2">
              <p className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Products & Applications
              </p>
              {filteredProjects.map((p, idx) => {
                const isSelected = selectedIndex === idx;
                return (
                  <div
                    key={p.id}
                    onClick={() => {
                      onSelectProject(p);
                      onClose();
                    }}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`flex cursor-pointer items-center justify-between rounded-2xl px-3 py-2.5 transition-colors ${
                      isSelected
                        ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950'
                        : 'hover:bg-slate-100 dark:hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <SquircleIcon
                        iconName={p.iconName}
                        gradient={p.iconGradient}
                        size="sm"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm">{p.title}</span>
                          <span
                            className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                              isSelected
                                ? 'bg-white/20 text-white dark:bg-slate-900/20 dark:text-slate-900'
                                : 'bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-300'
                            }`}
                          >
                            {p.category}
                          </span>
                        </div>
                        <p
                          className={`line-clamp-1 text-xs ${
                            isSelected ? 'text-slate-200 dark:text-slate-700' : 'text-slate-500 dark:text-slate-400'
                          }`}
                        >
                          {p.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs opacity-80">
                      <span>{p.status}</span>
                      <CornerDownLeft className="h-3 w-3" />
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Navigation views */}
          {navItems.length > 0 && (
            <div>
              <p className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Storefront Views
              </p>
              {navItems.map((item, i) => {
                const itemIndex = filteredProjects.length + i;
                const isSelected = selectedIndex === itemIndex;
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      onNavigateView(item.view);
                      onClose();
                    }}
                    onMouseEnter={() => setSelectedIndex(itemIndex)}
                    className={`flex cursor-pointer items-center justify-between rounded-2xl px-3 py-2.5 transition-colors ${
                      isSelected
                        ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950'
                        : 'hover:bg-slate-100 dark:hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-xl ${
                          isSelected
                            ? 'bg-white/20 text-white dark:bg-slate-900/20 dark:text-slate-900'
                            : 'bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-300'
                        }`}
                      >
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-semibold">{item.label}</span>
                    </div>

                    <ArrowRight className="h-4 w-4 opacity-70" />
                  </div>
                );
              })}
            </div>
          )}

          {totalResults === 0 && (
            <div className="p-8 text-center text-slate-400">
              <p className="text-sm">No apps or commands match &ldquo;{query}&rdquo;</p>
              <p className="mt-1 text-xs">Try searching for &ldquo;Real Estate&rdquo;, &ldquo;Next.js&rdquo;, or &ldquo;PostgreSQL&rdquo;</p>
            </div>
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="flex items-center justify-between border-t border-slate-200/80 bg-slate-50/60 px-4 py-2.5 text-[11px] text-slate-500 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-400">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>Esc Close</span>
          </div>
          <span>Kamal&apos;s App Store Search</span>
        </div>
      </div>
    </div>
  );
}
