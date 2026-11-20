'use client';

import React, { useState, useEffect } from 'react';
import { Project } from '@/types/project';
import SquircleIcon from './SquircleIcon';
import InteractiveMockup from './InteractiveMockup';
import AppleGetButton from './AppleGetButton';
import GithubIcon from './GithubIcon';
import { 
  X, 
  ExternalLink, 
  Star, 
  Share2, 
  Check, 
  AlertCircle, 
  CheckCircle2, 
  Layers, 
  Trophy, 
  Scale, 
  ChevronRight,
  ShieldCheck 
} from 'lucide-react';

interface IOSProductSheetProps {
  project: Project | null;
  onClose: () => void;
  isInstalled: boolean;
  onToggleInstall: (id: string) => void;
}

export default function IOSProductSheet({
  project,
  onClose,
  isInstalled,
  onToggleInstall,
}: IOSProductSheetProps) {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeTab, setActiveTab] = useState<'study' | 'changelog' | 'retrospective'>('study');

  useEffect(() => {
    setActiveMediaIndex(0);
    setActiveTab('study');
  }, [project]);

  if (!project) return null;

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(project.liveUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="absolute inset-0 z-50 flex flex-col justify-end bg-black/65 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Backdrop tap to dismiss */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* iOS Modal Sheet Surface */}
      <div className="relative z-10 flex max-h-[94%] flex-col overflow-hidden rounded-t-[36px] border-t border-white/20 bg-white/95 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-[#121620] dark:text-slate-100 animate-in slide-in-from-bottom duration-300">
        {/* Specular top rim */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent dark:via-white/30" />

        {/* Grabber Handle & Close Header */}
        <div className="flex items-center justify-between px-5 pt-3 pb-1 shrink-0">
          <div className="w-8" />
          {/* iOS Grabber */}
          <div
            onClick={onClose}
            className="h-1.5 w-10 cursor-pointer rounded-full bg-slate-300 hover:bg-slate-400 dark:bg-white/20 dark:hover:bg-white/30 transition-colors"
          />
          <button
            type="button"
            onClick={onClose}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-200/80 text-slate-700 hover:bg-slate-300 dark:bg-white/10 dark:text-slate-300 dark:hover:bg-white/20 transition-colors"
            title="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Scrollable Sheet Content */}
        <div className="overflow-y-auto px-5 pb-8 space-y-5">
          {/* 1. Header Block: 104px Squircle + Title + GET + Actions */}
          <div className="flex items-start gap-4 pt-2">
            <SquircleIcon
              iconName={project.iconName}
              gradient={project.iconGradient}
              size="xl"
            />
            <div className="flex-1 min-w-0">
              <h2 className="text-xl font-black tracking-tight text-slate-900 dark:text-white truncate">
                {project.title}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-0.5 font-medium leading-snug">
                {project.subtitle}
              </p>

              <div className="mt-3.5 flex items-center gap-2">
                <AppleGetButton
                  isInstalled={isInstalled}
                  onToggle={() => onToggleInstall(project.id)}
                  accentColor={project.accentColor}
                  size="md"
                />

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 rounded-full bg-slate-900 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 transition-colors shadow-xs"
                >
                  <span>Demo</span>
                  <ExternalLink className="h-3 w-3" />
                </a>

                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-7 w-7 rounded-full border border-slate-200 bg-white/70 text-slate-800 dark:border-white/10 dark:bg-white/10 dark:text-white hover:scale-105 transition-transform"
                  title="Source Code"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                </a>

                <button
                  type="button"
                  onClick={handleShare}
                  className="flex items-center justify-center h-7 w-7 rounded-full border border-slate-200 bg-white/70 text-slate-800 dark:border-white/10 dark:bg-white/10 dark:text-white hover:scale-105 transition-transform"
                  title="Share App"
                >
                  {copiedLink ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Share2 className="h-3.5 w-3.5" />}
                </button>
              </div>
            </div>
          </div>

          {/* 2. Authentic iOS 5-Column Metadata Carousel with Hairline Dividers */}
          <div className="flex items-center justify-between border-y border-slate-200/60 py-3 text-center dark:border-white/10">
            <div className="flex-1 px-1">
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tight">120 RATINGS</p>
              <div className="mt-0.5 flex items-center justify-center gap-1 font-black text-sm">
                <span>5.0</span>
                <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
              </div>
              <p className="text-[9px] text-slate-400">★★★★★</p>
            </div>

            <div className="h-7 w-px bg-slate-200 dark:bg-white/10" />

            <div className="flex-1 px-1">
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tight">CHART</p>
              <p className="mt-0.5 font-black text-sm text-[#007AFF] dark:text-[#0A84FF]">#1</p>
              <p className="text-[9px] text-slate-400 truncate">{project.category}</p>
            </div>

            <div className="h-7 w-px bg-slate-200 dark:bg-white/10" />

            <div className="flex-1 px-1">
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tight">AGE</p>
              <p className="mt-0.5 font-black text-sm text-slate-900 dark:text-white">4+</p>
              <p className="text-[9px] text-slate-400">Years</p>
            </div>

            <div className="h-7 w-px bg-slate-200 dark:bg-white/10" />

            <div className="flex-1 px-1">
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tight">DEVELOPER</p>
              <p className="mt-0.5 font-bold text-xs text-slate-900 dark:text-white truncate">Kamal M.</p>
              <p className="text-[9px] text-slate-400">Solo</p>
            </div>
          </div>

          {/* 3. Tech Stack Chips */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mr-1">Stack:</span>
            {project.stack.map((t) => (
              <span
                key={t}
                className="rounded-md border border-slate-200/80 bg-slate-100/70 px-2 py-0.5 text-[10px] font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>

          {/* 4. Interactive Simulation / Screenshot Walkthrough */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Interactive Preview
              </h3>
              {project.screenshots.length > 1 && (
                <div className="flex gap-1">
                  {project.screenshots.map((s, idx) => (
                    <button
                      key={s.title}
                      type="button"
                      onClick={() => setActiveMediaIndex(idx)}
                      className={`h-1.5 rounded-full transition-all ${
                        activeMediaIndex === idx
                          ? 'w-4 bg-sky-500'
                          : 'w-1.5 bg-slate-300 dark:bg-white/20'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="overflow-hidden rounded-[20px] border border-white/20 shadow-md">
              <InteractiveMockup
                type={project.screenshots[activeMediaIndex]?.mockupType || 'dashboard'}
                accentColor={project.accentColor}
              />
            </div>
            <p className="text-[10px] text-center text-slate-500 dark:text-slate-400 italic">
              {project.screenshots[activeMediaIndex]?.description}
            </p>
          </div>

          {/* 5. Case Study Tabs (Study, Changelog, Retrospective) */}
          <div className="border-b border-slate-200/60 dark:border-white/10">
            <div className="flex gap-4 text-xs font-bold">
              <button
                type="button"
                onClick={() => setActiveTab('study')}
                className={`pb-2 transition-colors border-b-2 ${
                  activeTab === 'study'
                    ? 'border-[#007AFF] text-[#007AFF] dark:border-[#0A84FF] dark:text-[#0A84FF]'
                    : 'border-transparent text-slate-400 hover:text-slate-600'
                }`}
              >
                Case Study
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('changelog')}
                className={`pb-2 transition-colors border-b-2 ${
                  activeTab === 'changelog'
                    ? 'border-[#007AFF] text-[#007AFF] dark:border-[#0A84FF] dark:text-[#0A84FF]'
                    : 'border-transparent text-slate-400 hover:text-slate-600'
                }`}
              >
                What&apos;s New
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('retrospective')}
                className={`pb-2 transition-colors border-b-2 ${
                  activeTab === 'retrospective'
                    ? 'border-[#007AFF] text-[#007AFF] dark:border-[#0A84FF] dark:text-[#0A84FF]'
                    : 'border-transparent text-slate-400 hover:text-slate-600'
                }`}
              >
                Retrospective
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div>
            {activeTab === 'study' && (
              <div className="space-y-3.5 text-xs leading-relaxed">
                <div className="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-3.5 dark:bg-rose-950/15">
                  <div className="flex items-center gap-1.5 font-bold text-rose-500 text-[11px]">
                    <AlertCircle className="h-3.5 w-3.5" />
                    <span>The Real-World Problem</span>
                  </div>
                  <p className="mt-1 text-slate-700 dark:text-slate-300">{project.problem}</p>
                </div>

                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-3.5 dark:bg-emerald-950/15">
                  <div className="flex items-center gap-1.5 font-bold text-emerald-500 text-[11px]">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Engineered Solution</span>
                  </div>
                  <ul className="mt-2 space-y-1.5">
                    {project.solution.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-sky-500/20 bg-sky-500/5 p-3.5 dark:bg-sky-950/15">
                  <div className="flex items-center gap-1.5 font-bold text-sky-500 text-[11px]">
                    <Layers className="h-3.5 w-3.5" />
                    <span>Architecture &amp; Trade-offs</span>
                  </div>
                  <p className="mt-1 text-slate-700 dark:text-slate-300">{project.architecture}</p>
                </div>
              </div>
            )}

            {activeTab === 'changelog' && (
              <div className="space-y-3 pl-4 border-l-2 border-slate-200 dark:border-white/10 text-xs">
                {project.changelog.map((c) => (
                  <div key={c.version} className="relative">
                    <span className="absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#007AFF] dark:bg-[#0A84FF]" />
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 dark:text-white">{c.version}</span>
                      <span className="text-[10px] text-slate-400">• {c.date}</span>
                    </div>
                    <p className="mt-0.5 text-slate-600 dark:text-slate-300">{c.notes}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'retrospective' && (
              <div className="space-y-3 text-xs">
                <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-3.5">
                  <div className="flex items-center gap-1.5 font-bold text-amber-500 text-[11px]">
                    <Trophy className="h-3.5 w-3.5" />
                    <span>Key Architectural Win</span>
                  </div>
                  <p className="mt-1 text-slate-700 dark:text-slate-300">{project.retrospective.win}</p>
                </div>

                <div className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-3.5">
                  <div className="flex items-center gap-1.5 font-bold text-purple-500 text-[11px]">
                    <Scale className="h-3.5 w-3.5" />
                    <span>Key Constraint Faced</span>
                  </div>
                  <p className="mt-1 text-slate-700 dark:text-slate-300">{project.retrospective.tradeoff}</p>
                </div>
              </div>
            )}
          </div>

          {/* 6. iOS Information Table (Apple Settings Style) */}
          <div className="border-t border-slate-200/60 pt-4 dark:border-white/10 space-y-2 text-xs">
            <h4 className="font-bold text-slate-900 dark:text-white">Information</h4>
            <div className="divide-y divide-slate-100 dark:divide-white/5">
              <div className="flex justify-between py-2">
                <span className="text-slate-400">Provider</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">Kamal Mohamed</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-400">Size</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">18.4 MB</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-400">Category</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{project.category}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-400">Compatibility</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">Works on this iPhone</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-400">Languages</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">English, TypeScript, Rust, Go</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-400">Copyright</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">© 2026 Kamal Mohamed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
