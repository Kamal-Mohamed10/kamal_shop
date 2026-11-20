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
  Briefcase, 
  Layers, 
  ExternalLink,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

interface DeveloperProfileViewProps {
  onOpenResumeModal: () => void;
}

export default function DeveloperProfileView({ onOpenResumeModal }: DeveloperProfileViewProps) {
  return (
    <div className="space-y-4 pb-8 text-slate-900 dark:text-white">
      {/* iOS Developer Profile Header */}
      <div className="pt-1">
        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          ACCOUNT &amp; DEVELOPER
        </p>
        <h1 className="text-[34px] font-black tracking-tight leading-none">
          Developer
        </h1>
      </div>

      {/* iOS Apple ID Style Profile Card */}
      <div className="rounded-[24px] border border-white/20 bg-white/70 p-4 shadow-md backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60">
        <div className="flex items-center gap-3.5">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-sky-500 via-indigo-600 to-purple-600 shadow-md text-white font-black text-xl ring-2 ring-white/50 dark:ring-white/10">
            KM
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-black tracking-tight truncate">
                {DEVELOPER_PROFILE.name}
              </h2>
              <span className="flex h-2 w-2 rounded-full bg-emerald-500" title="Available for hire" />
            </div>
            <p className="text-xs text-sky-500 font-semibold truncate">
              {DEVELOPER_PROFILE.title}
            </p>
            <p className="text-[11px] text-slate-400 truncate mt-0.5">
              {DEVELOPER_PROFILE.location} • {DEVELOPER_PROFILE.email}
            </p>
          </div>
        </div>

        {/* Bio callout */}
        <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300 border-t border-slate-200/50 dark:border-white/10 pt-2.5">
          {DEVELOPER_PROFILE.bio}
        </p>

        {/* Quick Action Buttons */}
        <div className="mt-3.5 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={onOpenResumeModal}
            className="flex items-center justify-center gap-1.5 rounded-full bg-[#007AFF] py-2 text-xs font-bold text-white hover:bg-[#0062cc] active:scale-95 transition-all shadow-xs"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Resume (PDF)</span>
          </button>

          <a
            href={DEVELOPER_PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 rounded-full border border-slate-300/80 bg-white/80 py-2 text-xs font-bold text-slate-800 dark:border-white/10 dark:bg-white/10 dark:text-white hover:bg-white dark:hover:bg-white/15 active:scale-95 transition-all"
          >
            <GithubIcon className="h-3.5 w-3.5" />
            <span>GitHub Profile</span>
          </a>
        </div>
      </div>

      {/* iOS Grouped Table: Core Proficiencies */}
      <div className="space-y-1">
        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-1">
          TECHNICAL PROFICIENCIES
        </p>
        <div className="rounded-[20px] border border-white/20 bg-white/70 p-3 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60 divide-y divide-slate-200/50 dark:divide-white/10">
          {DEVELOPER_PROFILE.coreSkills.map((cat) => (
            <div key={cat.category} className="py-2.5 first:pt-1 last:pb-1">
              <span className="text-xs font-bold text-slate-900 dark:text-white">{cat.category}</span>
              <div className="mt-1 flex flex-wrap gap-1">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-slate-100/90 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 px-2 py-0.5 text-[10px] font-medium text-slate-700 dark:text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* iOS Grouped Table: Experience */}
      <div className="space-y-1">
        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-1">
          WORK EXPERIENCE
        </p>
        <div className="rounded-[20px] border border-white/20 bg-white/70 p-3 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60 divide-y divide-slate-200/50 dark:divide-white/10">
          {DEVELOPER_PROFILE.experience.map((exp, i) => (
            <div key={i} className="py-2.5 first:pt-1 last:pb-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900 dark:text-white">{exp.role}</span>
                <span className="text-[10px] font-semibold text-sky-500">{exp.period}</span>
              </div>
              <p className="text-[11px] text-slate-400">{exp.company}</p>
              <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
