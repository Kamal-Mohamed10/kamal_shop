'use client';

import React from 'react';
import { DEVELOPER_PROFILE } from '@/data/projects';
import GithubIcon from './GithubIcon';
import { 
  User, 
  MapPin, 
  Mail, 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  Briefcase, 
  Layers, 
  ExternalLink 
} from 'lucide-react';

interface DeveloperProfileViewProps {
  onOpenResumeModal: () => void;
}

export default function DeveloperProfileView({ onOpenResumeModal }: DeveloperProfileViewProps) {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Profile Hero Card - Liquid Glass */}
      <div className="relative overflow-hidden rounded-[32px] border border-white/30 bg-white/50 p-6 sm:p-8 shadow-xl backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/50">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent dark:via-white/30" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-5">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[24px] bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-600 shadow-xl text-white">
              <span className="text-2xl font-black tracking-wider">KM</span>
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  {DEVELOPER_PROFILE.name}
                </h1>
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                  Available for Hire
                </span>
              </div>
              <p className="mt-1 text-sm font-semibold text-sky-600 dark:text-sky-400">
                {DEVELOPER_PROFILE.title}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  {DEVELOPER_PROFILE.location}
                </span>
                <span>•</span>
                <span>{DEVELOPER_PROFILE.tagline}</span>
              </div>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={onOpenResumeModal}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-xs font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95 dark:bg-white dark:text-slate-950"
            >
              <FileText className="h-4 w-4" />
              <span>View Resume (PDF)</span>
            </button>

            <a
              href={DEVELOPER_PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white/70 px-4 py-2.5 text-xs font-bold text-slate-800 transition-colors hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-white"
            >
              <GithubIcon className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-6 rounded-2xl border border-white/40 bg-white/40 p-4.5 text-xs sm:text-sm leading-relaxed text-slate-700 backdrop-blur-md dark:border-white/5 dark:bg-white/5 dark:text-slate-300">
          <p>{DEVELOPER_PROFILE.bio}</p>
        </div>
      </div>

      {/* Key Architectural Philosophy & Metric Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-3xl border border-white/20 bg-white/40 p-5 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/40">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Engineering Philosophy</span>
          <p className="mt-1 text-base font-bold text-slate-900 dark:text-white">Product-Minded Systems</p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Prioritizing zero latency, ergonomic API design, and intuitive user micro-interactions from day zero.
          </p>
        </div>

        <div className="rounded-3xl border border-white/20 bg-white/40 p-5 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/40">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Shipped Portfolio</span>
          <p className="mt-1 text-base font-bold text-slate-900 dark:text-white">8 Full-Stack Builds</p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Spanning Real Estate analytics, AI streaming agents, microservice observability, and local desktop tools.
          </p>
        </div>

        <div className="rounded-3xl border border-white/20 bg-white/40 p-5 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/40">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Execution Velocity</span>
          <p className="mt-1 text-base font-bold text-slate-900 dark:text-white">Idea to Live in Days</p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Pragmatic architectural choices that eliminate boilerplate and compress time-to-market.
          </p>
        </div>
      </div>

      {/* Core Technical Stack Breakdown */}
      <div className="rounded-[32px] border border-white/20 bg-white/40 p-6 sm:p-8 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/40">
        <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">
          <Layers className="h-4 w-4 text-sky-500" />
          <span>Core Technical Proficiencies</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DEVELOPER_PROFILE.coreSkills.map((cat) => (
            <div key={cat.category} className="space-y-3">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-xl border border-slate-200/80 bg-white/60 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="rounded-[32px] border border-white/20 bg-white/40 p-6 sm:p-8 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/40">
        <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">
          <Briefcase className="h-4 w-4 text-emerald-500" />
          <span>Work Experience</span>
        </div>

        <div className="space-y-6">
          {DEVELOPER_PROFILE.experience.map((exp, i) => (
            <div key={i} className="relative pl-6 before:absolute before:left-2 before:top-2 before:bottom-0 before:w-0.5 before:bg-slate-200 dark:before:bg-white/10">
              <span className="absolute -left-0.5 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-sky-500 dark:border-slate-900" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {exp.role}
                  </h4>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {exp.company}
                  </p>
                </div>
                <span className="text-xs font-semibold text-sky-600 dark:text-sky-400">
                  {exp.period}
                </span>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
