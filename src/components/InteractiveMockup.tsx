'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Sparkles, 
  Check, 
  Code2, 
  Copy, 
  Sliders, 
  TrendingUp, 
  Cpu, 
  AlertTriangle,
  ShieldCheck,
  Zap,
  ArrowRight
} from 'lucide-react';

interface InteractiveMockupProps {
  type: 'map' | 'ai-chat' | 'dashboard' | 'code' | 'chart' | 'canvas' | 'audio';
  accentColor?: string;
}

export default function InteractiveMockup({
  type,
  accentColor = '#10b981',
}: InteractiveMockupProps) {
  // LeadFlow NYC interactive valuation & distress scoring state
  const [marketValue, setMarketValue] = useState(750000);
  const [mortgageDebt, setMortgageDebt] = useState(380000);
  const [taxLiens, setTaxLiens] = useState(35000);
  const [urgencyPillar, setUrgencyPillar] = useState<'lis_pendens' | 'probate' | 'tax_lien' | 'vacant'>('lis_pendens');

  // AI Triage test message state
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);

  const scenarios = [
    {
      label: 'Production Outage',
      message: 'Our production database is unreachable and all agent logins are failing across NYC.',
      tier: 'P0',
      sla: '15 min (24/7)',
      queue: 'Infrastructure / SRE',
      category: 'System Outage',
      score: 95,
      signals: ['Production Down', 'All Logins Blocked', 'Critical Incident'],
      badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
    },
    {
      label: 'Billing Blocked',
      message: 'My payment failed and now my wholesalers cannot download property reports before the auction.',
      tier: 'P1',
      sla: '1 hour',
      queue: 'Billing & Subscriptions',
      category: 'Payment Failure',
      score: 75,
      signals: ['Payment Failed', 'Feature Blocked', 'High Business Impact'],
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    },
    {
      label: 'General Inquiry',
      message: 'No rush at all! Just wondering how to export a custom CSV of the Brooklyn parcels whenever you have time.',
      tier: 'P3',
      sla: '1 business day',
      queue: 'General Support',
      category: 'Product Feedback',
      score: 18,
      signals: ['Explicit No Rush', 'Feature How-To', 'Non-blocking'],
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    },
  ];

  // LeadFlow calculated metrics
  const totalDebt = mortgageDebt + taxLiens;
  const netEquity = Math.max(0, marketValue - totalDebt);
  const equitySpreadPct = ((netEquity / marketValue) * 100).toFixed(1);
  
  // 4-pillar score calculation
  const distressPoints = urgencyPillar === 'lis_pendens' ? 42 : urgencyPillar === 'tax_lien' ? 38 : urgencyPillar === 'probate' ? 34 : 28;
  const equityPoints = Number(equitySpreadPct) > 40 ? 25 : Number(equitySpreadPct) > 20 ? 18 : 10;
  const capitalStagnationPoints = 15;
  const agilityPoints = 10;
  const totalOpportunityScore = Math.min(100, distressPoints + equityPoints + capitalStagnationPoints + agilityPoints);

  if (type === 'dashboard') {
    return (
      <div className="w-full rounded-2xl border border-white/20 bg-slate-950/70 p-4 text-slate-100 shadow-2xl backdrop-blur-xl">
        <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2.5">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
              <Building2 className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                LeadFlow NYC Opportunity Engine
              </p>
              <h4 className="text-xs font-bold text-white">742 Evergreen Ave, Brooklyn (BBL: 3-03421-0012)</h4>
            </div>
          </div>
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
            Live Math Engine
          </span>
        </div>

        {/* Sliders */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="space-y-1 rounded-xl border border-white/5 bg-white/5 p-2.5">
            <div className="flex justify-between text-[11px]">
              <span className="text-slate-400">NYC DOF Market Value</span>
              <span className="font-semibold text-white">${marketValue.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="300000"
              max="2000000"
              step="25000"
              value={marketValue}
              onChange={(e) => setMarketValue(Number(e.target.value))}
              className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-700 accent-emerald-400"
            />
          </div>

          <div className="space-y-1 rounded-xl border border-white/5 bg-white/5 p-2.5">
            <div className="flex justify-between text-[11px]">
              <span className="text-slate-400">ACRIS Recorded Mortgage</span>
              <span className="font-semibold text-white">${mortgageDebt.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1500000"
              step="20000"
              value={mortgageDebt}
              onChange={(e) => setMortgageDebt(Number(e.target.value))}
              className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-700 accent-emerald-400"
            />
          </div>

          <div className="space-y-1 rounded-xl border border-white/5 bg-white/5 p-2.5">
            <div className="flex justify-between text-[11px]">
              <span className="text-slate-400">DOF Municipal Tax Liens</span>
              <span className="font-semibold text-white">${taxLiens.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="0"
              max="200000"
              step="5000"
              value={taxLiens}
              onChange={(e) => setTaxLiens(Number(e.target.value))}
              className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-700 accent-emerald-400"
            />
          </div>

          <div className="space-y-1 rounded-xl border border-white/5 bg-white/5 p-2.5">
            <div className="flex justify-between text-[11px]">
              <span className="text-slate-400">Distress Urgency Catalyst</span>
              <span className="font-semibold text-emerald-400 capitalize">{urgencyPillar.replace('_', ' ')}</span>
            </div>
            <div className="grid grid-cols-4 gap-1 pt-1">
              {(['lis_pendens', 'tax_lien', 'probate', 'vacant'] as const).map((u) => (
                <button
                  key={u}
                  type="button"
                  onClick={() => setUrgencyPillar(u)}
                  className={`rounded py-0.5 text-[9px] font-bold uppercase transition-all ${
                    urgencyPillar === u
                      ? 'bg-emerald-500 text-white shadow-xs'
                      : 'bg-white/5 text-slate-400 hover:text-white'
                  }`}
                >
                  {u.split('_')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Calculated Output Cards */}
        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-2.5 text-center">
            <p className="text-[9px] font-bold uppercase text-slate-400">Opportunity Score</p>
            <p className="mt-0.5 text-base font-black text-emerald-400">{totalOpportunityScore} / 100</p>
            <p className="text-[9px] text-emerald-300 font-medium">Rank #1 Target</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-slate-900/80 p-2.5 text-center">
            <p className="text-[9px] font-bold uppercase text-slate-400">Net Equity</p>
            <p className="mt-0.5 text-base font-black text-cyan-400">${(netEquity / 1000).toFixed(0)}k</p>
            <p className="text-[9px] text-slate-400">{equitySpreadPct}% Spread</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-slate-900/80 p-2.5 text-center">
            <p className="text-[9px] font-bold uppercase text-slate-400">Total Recorded Debt</p>
            <p className="mt-0.5 text-base font-black text-slate-200">${(totalDebt / 1000).toFixed(0)}k</p>
            <p className="text-[9px] text-slate-400">ACRIS + Liens</p>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'ai-chat') {
    const current = scenarios[selectedScenarioIndex];

    return (
      <div className="w-full rounded-2xl border border-white/20 bg-slate-950/70 p-4 text-slate-100 shadow-2xl backdrop-blur-xl">
        <div className="mb-2.5 flex items-center justify-between border-b border-white/10 pb-2.5">
          <div className="flex items-center gap-2">
            <Cpu className="h-4 w-4 text-purple-400" />
            <span className="text-xs font-bold text-purple-300">Customer Inbox Triage • Groq AI</span>
          </div>
          <span className="rounded-full bg-purple-500/20 px-2 py-0.5 text-[9px] font-bold text-purple-300 border border-purple-500/30">
            Llama 3.3 70B
          </span>
        </div>

        {/* Scenario Switcher */}
        <div className="mb-2 flex items-center gap-1.5">
          <span className="text-[10px] text-slate-400 font-bold uppercase">Test Ticket:</span>
          {scenarios.map((s, idx) => (
            <button
              key={s.label}
              type="button"
              onClick={() => setSelectedScenarioIndex(idx)}
              className={`rounded-full px-2 py-0.5 text-[10px] font-bold transition-all ${
                selectedScenarioIndex === idx
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'bg-white/5 text-slate-400 hover:text-white'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Incoming Customer Message Box */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-xs">
          <p className="text-[10px] font-semibold text-slate-400 uppercase">Incoming Message:</p>
          <p className="mt-0.5 text-[11px] text-slate-200 font-medium leading-snug">
            &ldquo;{current.message}&rdquo;
          </p>
        </div>

        {/* Triage Decision Card */}
        <div className="mt-2.5 rounded-xl border border-purple-500/30 bg-purple-950/20 p-3 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className={`rounded-md border px-2 py-0.5 text-xs font-black ${current.badgeColor}`}>
                {current.tier} • {current.sla}
              </span>
              <span className="text-xs font-bold text-white">{current.category}</span>
            </div>
            <span className="text-[10px] font-mono text-purple-300 font-bold">
              Score: {current.score}/100
            </span>
          </div>

          <div className="flex items-center justify-between text-[10px] border-t border-purple-500/20 pt-1.5">
            <span className="text-slate-400">Assigned Queue:</span>
            <span className="font-bold text-slate-200">{current.queue}</span>
          </div>

          <div className="flex flex-wrap gap-1 pt-0.5">
            {current.signals.map((sig) => (
              <span key={sig} className="rounded bg-white/10 px-1.5 py-0.5 text-[9px] text-purple-200 font-medium">
                ✓ {sig}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === 'map') {
    return (
      <div className="relative h-60 w-full overflow-hidden rounded-2xl border border-white/20 bg-slate-900 shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

        {/* Map roads/parcels SVG mock */}
        <svg className="absolute inset-0 h-full w-full stroke-slate-700/60" xmlns="http://www.w3.org/2000/svg">
          <line x1="20" y1="50" x2="450" y2="80" strokeWidth="3" />
          <line x1="120" y1="10" x2="160" y2="240" strokeWidth="4" />
          <line x1="280" y1="20" x2="310" y2="250" strokeWidth="3" />
          <line x1="40" y1="180" x2="480" y2="170" strokeWidth="2" />
          <rect x="180" y="70" width="85" height="60" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" strokeWidth="1.5" />
          <rect x="70" y="90" width="40" height="50" fill="rgba(56, 189, 248, 0.1)" stroke="#38bdf8" strokeWidth="1" />
          <rect x="330" y="95" width="70" height="55" fill="rgba(56, 189, 248, 0.1)" stroke="#38bdf8" strokeWidth="1" />
        </svg>

        {/* Parcel target pin */}
        <div className="absolute left-[200px] top-[75px] z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
          <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/50 bg-slate-950/90 px-3 py-1 text-xs font-bold text-emerald-300 shadow-xl backdrop-blur-md">
            <span className="h-2 w-2 animate-ping rounded-full bg-emerald-400" />
            742 Evergreen • Score 92
          </div>
          <MapPin className="h-6 w-6 text-emerald-400 drop-shadow-[0_4px_8px_rgba(16,185,129,0.5)]" />
        </div>

        {/* Overlay metrics badge */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/80 px-3 py-1.5 text-xs backdrop-blur-md">
          <span className="text-slate-300 text-[10px]">NYC 5-Borough Registry: 50,000+ Parcels</span>
          <span className="font-bold text-emerald-400 text-[10px]">ACRIS + DOF Linked</span>
        </div>
      </div>
    );
  }

  // Code / Generic Fallback
  return (
    <div className="flex h-56 w-full flex-col justify-center rounded-2xl border border-white/20 bg-slate-950/80 p-5 text-slate-200 backdrop-blur-xl">
      <div className="mb-2 flex items-center gap-2 text-sky-400">
        <Sparkles className="h-4 w-4" />
        <span className="text-xs font-bold uppercase tracking-wider">Engineered Architecture</span>
      </div>
      <p className="text-sm font-bold text-white">Full-Stack Execution & System Polish</p>
      <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
        Engineered with clean separation of concerns, high-concurrency data models, and sub-second user responsiveness.
      </p>
      <div className="mt-3.5 flex flex-wrap gap-2">
        <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-mono text-slate-300">
          Clean TypeScript / Python
        </span>
        <span className="rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-mono text-emerald-300">
          Verified Production Code
        </span>
      </div>
    </div>
  );
}
