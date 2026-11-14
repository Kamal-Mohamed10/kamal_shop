'use client';

import React, { useState, useEffect } from 'react';
import { Project } from '@/types/project';
import SquircleIcon from './SquircleIcon';
import InteractiveMockup from './InteractiveMockup';
import GithubIcon from './GithubIcon';
import { 
  X, 
  ExternalLink, 
  Calendar, 
  Clock, 
  User, 
  Layers, 
  CheckCircle2, 
  AlertCircle, 
  Trophy, 
  Scale, 
  ChevronRight,
  Sparkles,
  Share2,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface AppModalProps {
  project: Project | null;
  onClose: () => void;
  isInstalled: boolean;
  onToggleInstall: (id: string) => void;
}

export default function AppModal({
  project,
  onClose,
  isInstalled,
  onToggleInstall,
}: AppModalProps) {
  const [activeTab, setActiveTab] = useState<'study' | 'changelog' | 'retrospective'>('study');
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  // Keyboard navigation: Esc to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const handleInstallClick = () => {
    onToggleInstall(project.id);
    if (!isInstalled) {
      // Trigger festive celebration confetti
      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.6 },
          colors: [project.accentColor, '#38bdf8', '#ffffff'],
        });
      } catch (e) {
        // Safe fallback
      }
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="app-sheet-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/60 backdrop-blur-md animate-in fade-in duration-200"
    >
      {/* Backdrop click to dismiss */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Surface - Liquid Glass Container */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[32px] border border-white/20 bg-white/80 p-6 md:p-8 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/90 dark:text-slate-100">
        {/* Specular Top Rim */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent dark:via-white/30" />

        {/* Close & Share Button Bar */}
        <div className="flex items-center justify-between pb-4">
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              {project.category}
            </span>
            <span
              className="rounded-full px-2.5 py-0.5 text-xs font-medium"
              style={{
                backgroundColor: `${project.accentColor}20`,
                color: project.accentColor,
              }}
            >
              {project.status}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleShare}
              title="Copy share link"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/60 text-slate-600 transition-colors hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10"
            >
              {copiedLink ? <Check className="h-4 w-4 text-emerald-500" /> : <Share2 className="h-4 w-4" />}
            </button>
            <button
              type="button"
              onClick={onClose}
              title="Close sheet (Esc)"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/60 text-slate-600 transition-colors hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* 1. Header Block */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b border-slate-200/60 pb-6 dark:border-white/10">
          <div className="flex items-start sm:items-center gap-5">
            <SquircleIcon
              iconName={project.iconName}
              gradient={project.iconGradient}
              size="xl"
            />
            <div>
              <h2
                id="app-sheet-title"
                className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white"
              >
                {project.title}
              </h2>
              <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">
                {project.subtitle}
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                In-app Purchase: None • Designed for Web & Desktop
              </p>
            </div>
          </div>

          {/* Solid CTAs & Interactive Get */}
          <div className="flex w-full sm:w-auto flex-wrap sm:flex-nowrap items-center gap-3">
            <button
              type="button"
              onClick={handleInstallClick}
              className={`flex-1 sm:flex-initial rounded-full px-6 py-2.5 text-sm font-bold shadow-md transition-all active:scale-95 ${
                isInstalled
                  ? 'border border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                  : 'bg-emerald-500 text-white hover:bg-emerald-600'
              }`}
            >
              {isInstalled ? 'INSTALLED ✓' : 'GET PRODUCT'}
            </button>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:bg-slate-800 active:scale-95 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
            >
              <span>Open Live</span>
              <ExternalLink className="h-4 w-4" />
            </a>

            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white/70 px-4 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
            >
              <GithubIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Source</span>
            </a>
          </div>
        </div>

        {/* 2. Metadata Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-b border-slate-200/60 dark:border-white/10 text-xs">
          <div className="flex flex-col">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Status</span>
            <span className="mt-0.5 font-bold text-slate-900 dark:text-white">{project.status}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Builder Role</span>
            <span className="mt-0.5 font-bold text-slate-900 dark:text-white">{project.role}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Build Time</span>
            <span className="mt-0.5 font-bold text-slate-900 dark:text-white">{project.buildTime}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Key Metric</span>
            <span className="mt-0.5 font-bold text-emerald-600 dark:text-emerald-400">
              {project.highlightStat?.value || 'Sub-120ms'}
            </span>
          </div>
        </div>

        {/* Core Stack Pills */}
        <div className="flex flex-wrap items-center gap-1.5 py-3 border-b border-slate-200/60 dark:border-white/10">
          <span className="text-xs font-semibold text-slate-500 mr-1">Tech Stack:</span>
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-slate-200/80 bg-slate-100/70 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 3. Media Carousel & Interactive Previews */}
        <div className="my-6 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Interactive Product Walkthrough
            </h3>
            {project.screenshots.length > 1 && (
              <div className="flex gap-1.5">
                {project.screenshots.map((s, idx) => (
                  <button
                    key={s.title}
                    type="button"
                    onClick={() => setActiveMediaIndex(idx)}
                    className={`rounded-full px-2.5 py-1 text-xs font-medium transition-all ${
                      activeMediaIndex === idx
                        ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950'
                        : 'bg-slate-100 text-slate-600 dark:bg-white/5 dark:text-slate-400'
                    }`}
                  >
                    {s.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Active Interactive Preview */}
          <div className="overflow-hidden rounded-2xl">
            <InteractiveMockup
              type={project.screenshots[activeMediaIndex]?.mockupType || 'dashboard'}
              accentColor={project.accentColor}
            />
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 text-center italic">
            {project.screenshots[activeMediaIndex]?.description}
          </p>
        </div>

        {/* 4. Tabbed Case Study / Changelog / Retrospective */}
        <div className="border-b border-slate-200/60 dark:border-white/10">
          <div className="flex gap-6 text-sm font-bold">
            <button
              type="button"
              onClick={() => setActiveTab('study')}
              className={`pb-3 transition-colors border-b-2 ${
                activeTab === 'study'
                  ? 'border-emerald-500 text-slate-900 dark:text-white'
                  : 'border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
              }`}
            >
              Case Study & Architecture
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('changelog')}
              className={`pb-3 transition-colors border-b-2 ${
                activeTab === 'changelog'
                  ? 'border-emerald-500 text-slate-900 dark:text-white'
                  : 'border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
              }`}
            >
              What&apos;s New ({project.changelog.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('retrospective')}
              className={`pb-3 transition-colors border-b-2 ${
                activeTab === 'retrospective'
                  ? 'border-emerald-500 text-slate-900 dark:text-white'
                  : 'border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
              }`}
            >
              Builder&apos;s Retrospective
            </button>
          </div>
        </div>

        <div className="pt-6">
          {activeTab === 'study' && (
            <div className="space-y-6 text-sm">
              {/* Problem Statement */}
              <div className="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-4.5 dark:bg-rose-950/10">
                <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-xs uppercase tracking-wider">
                  <AlertCircle className="h-4 w-4" />
                  <span>The Real-World Friction</span>
                </div>
                <p className="mt-2 text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* Solution Highlights */}
              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4.5 dark:bg-emerald-950/10">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>The Engineered Solution & Outcomes</span>
                </div>
                <ul className="mt-3 space-y-2">
                  {project.solution.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Under the Hood */}
              <div className="rounded-2xl border border-sky-500/20 bg-sky-500/5 p-4.5 dark:bg-sky-950/10">
                <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-bold text-xs uppercase tracking-wider">
                  <Layers className="h-4 w-4" />
                  <span>Under the Hood: Technical Architecture</span>
                </div>
                <p className="mt-2 text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                  {project.architecture}
                </p>
              </div>
            </div>
          )}

          {activeTab === 'changelog' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Tracked release history demonstrating post-launch user iteration and feature velocity.
              </p>
              <div className="relative pl-6 space-y-6 before:absolute before:bottom-0 before:left-2 before:top-2 before:w-0.5 before:bg-slate-200 dark:before:bg-white/10">
                {project.changelog.map((c) => (
                  <div key={c.version} className="relative">
                    <span className="absolute -left-6 top-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500 dark:border-slate-900" />
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-slate-900 dark:text-white">{c.version}</span>
                      <span className="text-xs text-slate-400">• {c.date}</span>
                    </div>
                    <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">{c.notes}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'retrospective' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4.5 dark:bg-amber-950/10">
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-xs uppercase tracking-wider">
                  <Trophy className="h-4 w-4" />
                  <span>Major Architectural Win</span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                  {project.retrospective.win}
                </p>
              </div>

              <div className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-4.5 dark:bg-purple-950/10">
                <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-xs uppercase tracking-wider">
                  <Scale className="h-4 w-4" />
                  <span>Key Constraint & Engineering Trade-Off</span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                  {project.retrospective.tradeoff}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="mt-8 flex items-center justify-between border-t border-slate-200/60 pt-4 dark:border-white/10 text-xs text-slate-400">
          <span>Kamal&apos;s Personal App Store • Certified Build</span>
          <button
            type="button"
            onClick={onClose}
            className="font-bold text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
