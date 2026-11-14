'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Sparkles, 
  Check, 
  Code2, 
  Copy, 
  Play, 
  Sliders, 
  TrendingUp, 
  Cpu, 
  Terminal, 
  Volume2 
} from 'lucide-react';

interface InteractiveMockupProps {
  type: 'map' | 'ai-chat' | 'dashboard' | 'code' | 'chart' | 'canvas' | 'audio';
  accentColor?: string;
}

export default function InteractiveMockup({
  type,
  accentColor = '#10b981',
}: InteractiveMockupProps) {
  // PropScope interactive underwriting state
  const [purchasePrice, setPurchasePrice] = useState(485000);
  const [monthlyRent, setMonthlyRent] = useState(3800);
  const [interestRate, setInterestRate] = useState(6.5);
  const [downPaymentPct, setDownPaymentPct] = useState(25);

  // AI Chat streaming mock state
  const [specTopic, setSpecTopic] = useState('Auth + Stripe Billing');
  const [copied, setCopied] = useState(false);

  // Financial calculations
  const downPayment = (purchasePrice * downPaymentPct) / 100;
  const loanAmount = purchasePrice - downPayment;
  const monthlyInterest = interestRate / 100 / 12;
  const numPayments = 360;
  const monthlyMortgage =
    (loanAmount * (monthlyInterest * Math.pow(1 + monthlyInterest, numPayments))) /
    (Math.pow(1 + monthlyInterest, numPayments) - 1);

  const annualRent = monthlyRent * 12;
  const operatingExpenses = annualRent * 0.35; // 35% opex + vacancy
  const annualNOI = annualRent - operatingExpenses;
  const capRate = ((annualNOI / purchasePrice) * 100).toFixed(2);
  const annualDebtService = monthlyMortgage * 12;
  const annualCashFlow = annualNOI - annualDebtService;
  const cashOnCash = ((annualCashFlow / downPayment) * 100).toFixed(2);
  const dscr = (annualNOI / annualDebtService).toFixed(2);

  if (type === 'dashboard') {
    return (
      <div className="w-full rounded-2xl border border-white/20 bg-slate-950/60 p-5 text-slate-100 shadow-2xl backdrop-blur-xl">
        <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
              <Building2 className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Interactive Underwriter
              </p>
              <h4 className="text-sm font-bold text-white">412 Oakwood Ave, Atlanta GA</h4>
            </div>
          </div>
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300">
            Live Math Engine
          </span>
        </div>

        {/* Sliders */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-1.5 rounded-xl border border-white/5 bg-white/5 p-3">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Purchase Price</span>
              <span className="font-semibold text-white">
                ${purchasePrice.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min="200000"
              max="1200000"
              step="10000"
              value={purchasePrice}
              onChange={(e) => setPurchasePrice(Number(e.target.value))}
              className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-700 accent-emerald-400"
            />
          </div>

          <div className="space-y-1.5 rounded-xl border border-white/5 bg-white/5 p-3">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Monthly Gross Rent</span>
              <span className="font-semibold text-white">
                ${monthlyRent.toLocaleString()}/mo
              </span>
            </div>
            <input
              type="range"
              min="1500"
              max="9000"
              step="100"
              value={monthlyRent}
              onChange={(e) => setMonthlyRent(Number(e.target.value))}
              className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-700 accent-emerald-400"
            />
          </div>

          <div className="space-y-1.5 rounded-xl border border-white/5 bg-white/5 p-3">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Mortgage Interest Rate</span>
              <span className="font-semibold text-white">{interestRate}%</span>
            </div>
            <input
              type="range"
              min="4.0"
              max="10.0"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-700 accent-emerald-400"
            />
          </div>

          <div className="space-y-1.5 rounded-xl border border-white/5 bg-white/5 p-3">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Down Payment</span>
              <span className="font-semibold text-white">{downPaymentPct}% (${(downPayment / 1000).toFixed(0)}k)</span>
            </div>
            <input
              type="range"
              min="10"
              max="50"
              step="5"
              value={downPaymentPct}
              onChange={(e) => setDownPaymentPct(Number(e.target.value))}
              className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-700 accent-emerald-400"
            />
          </div>
        </div>

        {/* Calculated Output Cards */}
        <div className="mt-4 grid grid-cols-3 gap-2.5">
          <div className="rounded-xl border border-white/10 bg-slate-900/80 p-3 text-center">
            <p className="text-[10px] font-medium uppercase text-slate-400">Cap Rate</p>
            <p className={`mt-0.5 text-lg font-bold ${Number(capRate) >= 7 ? 'text-emerald-400' : 'text-amber-400'}`}>
              {capRate}%
            </p>
            <p className="text-[10px] text-slate-400">NOI: ${(annualNOI / 1000).toFixed(1)}k/yr</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-slate-900/80 p-3 text-center">
            <p className="text-[10px] font-medium uppercase text-slate-400">Cash-on-Cash</p>
            <p className={`mt-0.5 text-lg font-bold ${Number(cashOnCash) >= 8 ? 'text-emerald-400' : 'text-cyan-400'}`}>
              {cashOnCash}%
            </p>
            <p className="text-[10px] text-slate-400">${(annualCashFlow / 12).toFixed(0)}/mo net</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-slate-900/80 p-3 text-center">
            <p className="text-[10px] font-medium uppercase text-slate-400">DSCR Ratio</p>
            <p className={`mt-0.5 text-lg font-bold ${Number(dscr) >= 1.25 ? 'text-emerald-400' : 'text-rose-400'}`}>
              {dscr}x
            </p>
            <p className="text-[10px] text-slate-400">{Number(dscr) >= 1.25 ? 'Lender Approved' : 'Tight Coverage'}</p>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'ai-chat') {
    return (
      <div className="w-full rounded-2xl border border-white/20 bg-slate-950/70 p-5 text-slate-100 shadow-2xl backdrop-blur-xl">
        <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <Cpu className="h-4 w-4 text-purple-400" />
            <span className="text-xs font-semibold text-purple-300">NeuralDraft Engine Preview</span>
          </div>
          <span className="rounded-full bg-purple-500/20 px-2 py-0.5 text-[10px] text-purple-300">
            Streaming AST
          </span>
        </div>

        <div className="space-y-3 text-xs">
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <p className="text-[11px] text-slate-400">Architect Prompt:</p>
            <p className="mt-1 font-medium text-slate-200">
              Generate a high-throughput webhook handler with idempotency keys in PostgreSQL.
            </p>
          </div>

          <div className="rounded-xl border border-purple-500/30 bg-purple-950/30 p-3.5 font-mono text-[11px] leading-relaxed text-purple-200">
            <div className="mb-1 flex items-center justify-between text-[10px] text-purple-400">
              <span>GENERATED DDL & REST SPEC</span>
              <span className="flex items-center gap-1 text-emerald-400">
                <Check className="h-3 w-3" /> Validated
              </span>
            </div>
            <pre className="overflow-x-auto text-slate-300">
{`CREATE TABLE webhook_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  idempotency_key VARCHAR(128) UNIQUE NOT NULL,
  event_type VARCHAR(64) NOT NULL,
  payload JSONB NOT NULL,
  status VARCHAR(24) DEFAULT 'pending',
  processed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX idx_wh_idemp ON webhook_events(idempotency_key);`}
            </pre>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'map') {
    return (
      <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-white/20 bg-slate-900 shadow-2xl">
        {/* Stylized vector map grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

        {/* Map roads/parcels SVG mock */}
        <svg className="absolute inset-0 h-full w-full stroke-slate-700/60" xmlns="http://www.w3.org/2000/svg">
          <line x1="20" y1="50" x2="450" y2="80" strokeWidth="3" />
          <line x1="120" y1="10" x2="160" y2="240" strokeWidth="4" />
          <line x1="280" y1="20" x2="310" y2="250" strokeWidth="3" />
          <line x1="40" y1="180" x2="480" y2="170" strokeWidth="2" />
          {/* Parcel polygons */}
          <rect x="180" y="70" width="85" height="60" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" strokeWidth="1.5" />
          <rect x="70" y="90" width="40" height="50" fill="rgba(56, 189, 248, 0.1)" stroke="#38bdf8" strokeWidth="1" />
          <rect x="330" y="95" width="70" height="55" fill="rgba(56, 189, 248, 0.1)" stroke="#38bdf8" strokeWidth="1" />
        </svg>

        {/* Parcel target pin */}
        <div className="absolute left-[200px] top-[75px] z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
          <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/50 bg-slate-950/90 px-3 py-1 text-xs font-bold text-emerald-300 shadow-xl backdrop-blur-md">
            <span className="h-2 w-2 animate-ping rounded-full bg-emerald-400" />
            Subject: $485k (8.4% Cap)
          </div>
          <MapPin className="h-6 w-6 text-emerald-400 drop-shadow-[0_4px_8px_rgba(16,185,129,0.5)]" />
        </div>

        {/* Overlay metrics badge */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2 text-xs backdrop-blur-md">
          <span className="text-slate-300">Neighborhood 0.5-mi Comps: 18 Sold</span>
          <span className="font-semibold text-emerald-400">+14.2% Rent Premium vs County Avg</span>
        </div>
      </div>
    );
  }

  // Fallback / Generic Code & Chart
  return (
    <div className="flex h-56 w-full flex-col justify-center rounded-2xl border border-white/20 bg-slate-950/80 p-6 text-slate-200 backdrop-blur-xl">
      <div className="mb-2 flex items-center gap-2 text-sky-400">
        <Sparkles className="h-5 w-5" />
        <span className="text-xs font-bold uppercase tracking-wider">Engineered Architecture</span>
      </div>
      <p className="text-sm font-semibold text-white">Full-Stack Execution & System Polish</p>
      <p className="mt-2 text-xs text-slate-400">
        Engineered with clean separation of concerns, high-concurrency data models, and sub-second user responsiveness.
      </p>
      <div className="mt-4 flex gap-2">
        <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-mono text-slate-300">
          60fps Smooth Physics
        </span>
        <span className="rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-mono text-emerald-300">
          Zero Layout Shifts
        </span>
      </div>
    </div>
  );
}
