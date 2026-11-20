'use client';

import React from 'react';
import DynamicIsland from './DynamicIsland';
import { Wifi, Signal } from 'lucide-react';

export type PhoneFinish = 'natural' | 'desert' | 'black' | 'silver';

interface PhoneFrameProps {
  children: React.ReactNode;
  bottomBar?: React.ReactNode;
  overlay?: React.ReactNode;
  onOpenProfile: () => void;
  finish?: PhoneFinish;
}

export default function PhoneFrame({
  children,
  bottomBar,
  overlay,
  onOpenProfile,
  finish = 'natural',
}: PhoneFrameProps) {
  // Bezel color styles matching Apple iPhone 16 Pro Titanium finishes
  const finishStyles = {
    natural: {
      outerBorder: 'border-[#33302a]',
      outerBg: 'bg-gradient-to-b from-[#423f38] via-[#292723] to-[#1c1b18]',
      outerRim: 'border-[#5c574e]/50',
      antenna: 'bg-[#43403a]',
      glow: 'from-amber-500/10 via-sky-500/10 to-emerald-500/10',
    },
    desert: {
      outerBorder: 'border-[#4a3d33]',
      outerBg: 'bg-gradient-to-b from-[#5c4d41] via-[#382d25] to-[#221b16]',
      outerRim: 'border-[#7d6958]/50',
      antenna: 'bg-[#635549]',
      glow: 'from-orange-500/10 via-amber-500/10 to-rose-500/10',
    },
    black: {
      outerBorder: 'border-[#1e1f21]',
      outerBg: 'bg-gradient-to-b from-[#2d2e32] via-[#1a1b1d] to-[#0e0f10]',
      outerRim: 'border-[#3d3f44]/50',
      antenna: 'bg-[#2e3035]',
      glow: 'from-slate-500/10 via-sky-500/10 to-indigo-500/10',
    },
    silver: {
      outerBorder: 'border-[#424448]',
      outerBg: 'bg-gradient-to-b from-[#606369] via-[#36383b] to-[#1f2022]',
      outerRim: 'border-[#7b7e85]/50',
      antenna: 'bg-[#58595c]',
      glow: 'from-cyan-500/10 via-slate-500/10 to-purple-500/10',
    },
  }[finish];

  return (
    <div className="relative flex h-full max-h-full items-center justify-center select-none">
      {/* Outer ambient glow behind the phone */}
      <div
        className={`pointer-events-none absolute h-[90%] w-[90%] max-w-[380px] rounded-[70px] bg-gradient-to-tr ${finishStyles.glow} blur-3xl filter transition-all duration-700`}
      />

      {/* The Physical kPhone 16 Pro Mockup Chassis */}
      <div
        className={`relative h-full max-h-[820px] aspect-[390/844] max-w-[calc(100vw-2rem)] w-auto rounded-[50px] sm:rounded-[54px] p-[2.5px] border-[8px] sm:border-[10px] shadow-[0_25px_70px_rgba(0,0,0,0.7),0_10px_25px_rgba(0,0,0,0.5)] transition-all duration-500 flex flex-col ${finishStyles.outerBorder} ${finishStyles.outerBg}`}
      >
        {/* Specular outer metal reflection chamfer */}
        <div
          className={`pointer-events-none absolute -inset-[2px] rounded-[52px] sm:rounded-[56px] border ${finishStyles.outerRim}`}
        />

        {/* Physical Titanium Hardware Buttons (proportional positioning) */}
        {/* Left Side: Action Button */}
        <div className="pointer-events-none absolute -left-[12px] top-[14%] h-[4%] w-1 rounded-l-md bg-slate-500/90 shadow-sm" />
        {/* Left Side: Volume Up */}
        <div className="pointer-events-none absolute -left-[12px] top-[20%] h-[6%] w-1 rounded-l-md bg-slate-500/90 shadow-sm" />
        {/* Left Side: Volume Down */}
        <div className="pointer-events-none absolute -left-[12px] top-[28%] h-[6%] w-1 rounded-l-md bg-slate-500/90 shadow-sm" />
        {/* Right Side: Power Button */}
        <div className="pointer-events-none absolute -right-[12px] top-[22%] h-[9%] w-1 rounded-r-md bg-slate-500/90 shadow-sm" />

        {/* Antenna bands */}
        <div className={`pointer-events-none absolute -left-[9px] top-[9%] h-1 w-2 ${finishStyles.antenna}`} />
        <div className={`pointer-events-none absolute -right-[9px] top-[9%] h-1 w-2 ${finishStyles.antenna}`} />
        <div className={`pointer-events-none absolute -left-[9px] bottom-[9%] h-1 w-2 ${finishStyles.antenna}`} />
        <div className={`pointer-events-none absolute -right-[9px] bottom-[9%] h-1 w-2 ${finishStyles.antenna}`} />

        {/* Inner OLED Glass Screen */}
        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[40px] sm:rounded-[44px] bg-[#000000] text-slate-100 shadow-[inset_0_0_8px_rgba(0,0,0,0.8)]">
          {/* iOS Top Status Bar */}
          <div className="relative shrink-0 z-40 flex items-center justify-between px-6 pt-3 pb-1 text-xs font-semibold text-white bg-black/60 backdrop-blur-md border-b border-white/5">
            {/* Time */}
            <span className="font-bold tracking-tight text-[13px] pl-1 font-sans">9:41</span>

            {/* Dynamic Island */}
            <div className="flex justify-center -my-1">
              <DynamicIsland onOpenProfile={onOpenProfile} />
            </div>

            {/* Status Icons: 5G, Wi-Fi, Battery */}
            <div className="flex items-center gap-1.5 text-white pr-1">
              <span className="text-[10px] font-bold text-slate-300">5G</span>
              <Signal className="h-3 w-3 stroke-[2.5]" />
              <Wifi className="h-3 w-3 stroke-[2.5]" />
              {/* iOS Battery Capsule */}
              <div className="flex items-center gap-0.5">
                <div className="relative flex h-[11px] w-[22px] items-center rounded-[3px] border border-white/80 p-[1.5px]">
                  <div className="h-full w-full rounded-[1px] bg-white" />
                  <div className="absolute -right-[3px] top-[3px] h-[3px] w-[1.5px] rounded-r-[1px] bg-white/80" />
                </div>
              </div>
            </div>
          </div>

          {/* Main App Store Screen Content (Scrolls smoothly!) */}
          <div className="relative flex-1 min-h-0 overflow-y-auto px-4 pt-1.5 pb-3 scrollbar-none">
            {children}
          </div>

          {/* Docked Native iOS Tab Bar */}
          {bottomBar && (
            <div className="shrink-0 z-40">
              {bottomBar}
            </div>
          )}

          {/* Full-Screen Overlay Modal (iOS Product Sheet) */}
          {overlay}
        </div>
      </div>
    </div>
  );
}
