'use client';

import React, { useState } from 'react';
import { DEVELOPER_PROFILE } from '@/data/projects';
import { X, Printer, Download, Copy, Check, Mail, MapPin, ExternalLink, Briefcase, GraduationCap, Code } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = () => {
    const textResume = `
${DEVELOPER_PROFILE.name} - ${DEVELOPER_PROFILE.title}
Location: ${DEVELOPER_PROFILE.location} | GitHub: ${DEVELOPER_PROFILE.github}

SUMMARY:
${DEVELOPER_PROFILE.bio}

CORE SKILLS:
- Frontend: Next.js, React, TypeScript, Tailwind CSS, WebGL
- Backend & Data: Node.js, Go, Python/FastAPI, PostgreSQL/PostGIS, ClickHouse, Redis
- Systems & AI: Vercel AI SDK, Distributed Systems, WebSockets, Docker, Local LLMs

FLAGSHIP PROJECTS:
1. LeadFlow NYC: Off-Market Property Intelligence & Distress Scoring (Next.js 16, TypeScript, Supabase, Mapbox, ACRIS/DOF)
   - Pairs live NYC municipal registries with transparent 0-100 opportunity scoring and multi-page client-side PDF export.
2. Customer Inbox Triage: AI Support Ticket Classifier & SLA Urgency Scorer (React, Groq Llama 3.3 70B, Tailwind, node:test)
   - Dual-stage classification isolating prompts against injection with deterministic SLA priority scoring (P0-P3).
3. Sylvia's Restaurant & Reservations: Faithful Brand Clone with Postgres Booking Engine (Next.js 16, PostgreSQL, Zod, SQL)
   - Full event booking calendar and reservation modal executing Zod-validated parameterized SQL inserts.

EXPERIENCE:
- Full-Stack Product Engineer | Independent Engineering & Products (2024 - Present)
- Software Engineer | Product & Tech Solutions (2022 - 2024)
    `.trim();

    if (navigator.clipboard) {
      navigator.clipboard.writeText(textResume);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative z-10 w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl border border-white/20 bg-white p-6 sm:p-8 shadow-2xl dark:bg-slate-900 dark:border-white/10 dark:text-slate-100">
        {/* Top Action Bar */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 dark:border-white/10 print:hidden">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              Curriculum Vitae / Resume
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="flex items-center gap-1.5 rounded-full bg-slate-900 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="mt-6 space-y-6 text-slate-900 dark:text-slate-100">
          {/* Header */}
          <div className="border-b border-slate-200 pb-5 dark:border-white/10">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {DEVELOPER_PROFILE.name}
            </h2>
            <p className="mt-1 text-sm font-semibold text-sky-600 dark:text-sky-400">
              {DEVELOPER_PROFILE.title}
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                {DEVELOPER_PROFILE.location}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="h-3.5 w-3.5" />
                {DEVELOPER_PROFILE.email}
              </span>
              <a
                href={DEVELOPER_PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-white"
              >
                <span>GitHub</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Bio */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Professional Summary
            </h3>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {DEVELOPER_PROFILE.bio}
            </p>
          </div>

          {/* Core Technical Stacks */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Technical Proficiencies
            </h3>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {DEVELOPER_PROFILE.coreSkills.map((cat) => (
                <div key={cat.category} className="rounded-xl border border-slate-200 p-3 dark:border-white/10">
                  <p className="text-xs font-bold text-slate-900 dark:text-white">{cat.category}</p>
                  <p className="mt-1 text-[11px] leading-relaxed text-slate-600 dark:text-slate-400">
                    {cat.items.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Flagship Projects */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Flagship Production Projects
            </h3>
            <div className="mt-3 space-y-3">
              <div className="rounded-xl border border-slate-200 p-3.5 dark:border-white/10">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    LeadFlow NYC — Off-Market Property Intelligence &amp; Distress Scoring
                  </p>
                  <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                    Next.js 16 • Supabase • Mapbox • ACRIS
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                  Ingests live NYC public municipal registries (ACRIS, DOF, HPD) with transparent 4-pillar 0–100 distress scoring. Includes multi-page client-side PDF export and DNC-scrubbed owner intelligence.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 p-3.5 dark:border-white/10">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    Customer Inbox Triage — AI Ticket Classifier &amp; SLA Urgency Scorer
                  </p>
                  <span className="text-[11px] font-mono text-purple-600 dark:text-purple-400">
                    React • Groq Llama 3.3 70B • node:test
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                  Dual-stage triage pipeline categorizing incoming messages with Groq Llama 3.3 70B while computing SLA urgency (P0 to P3) deterministically to prevent prompt injection jailbreaks.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 p-3.5 dark:border-white/10">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    Sylvia&apos;s Restaurant &amp; Reservations — Faithful Brand Clone &amp; SQL Engine
                  </p>
                  <span className="text-[11px] font-mono text-rose-600 dark:text-rose-400">
                    Next.js 16 • PostgreSQL • Zod • SQL
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                  Faithful Harlem restaurant clone featuring dynamic Pinboard, Agenda, and Calendar views hydrated from Postgres with party-size booking modal executing parameterized SQL inserts.
                </p>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Work Experience
            </h3>
            <div className="mt-3 space-y-3">
              {DEVELOPER_PROFILE.experience.map((exp, i) => (
                <div key={i} className="rounded-xl border border-slate-200 p-3.5 dark:border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white">{exp.role}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{exp.company}</p>
                    </div>
                    <span className="text-xs font-semibold text-slate-400">{exp.period}</span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
