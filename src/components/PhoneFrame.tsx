'use client';

import React from 'react';
import DynamicIsland from './DynamicIsland';
import { Wifi, Battery, Signal } from 'lucide-react';

export type PhoneFinish = 'natural' | 'desert' | 'black' | 'silver';

interface PhoneFrameProps {
  children: React.ReactNode;
  onOpenProfile: () => void;
  finish?: PhoneFinish;
}

export default function PhoneFrame({
  children,
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
    <div className="relative mx-auto flex items-center justify-center p-2 sm:p-6 lg:p-8">
      {/* Outer ambient glow behind the phone */}
      <div
        className={`pointer-events-none absolute h-[720px] w-[390px] rounded-[70px] bg-gradient-to-tr ${finishStyles.glow} blur-3xl filter transition-all duration-700`}
      />

      {/* The Physical iPhone 16 Pro Mockup Chassis */}
      <div
        className={`relative w-full max-w-[400px] h-[844px] rounded-[55px] p-[3px] border-[10px] shadow-[0_35px_90px_rgba(0,0,0,0.65),0_15px_35px_rgba(0,0,0,0.4)] transition-all duration-500 ${finishStyles.outerBorder} ${finishStyles.outerBg}`}
      >
        {/* Specular outer metal reflection chamfer */}
        <div
          className={`pointer-events-none absolute -inset-[2px] rounded-[56px] border ${finishStyles.outerRim}`}
        />

        {/* Physical Titanium Hardware Buttons */}
        {/* Left Side: Action Button */}
        <div className="pointer-events-none absolute -left-[13px] top-[115px] h-8 w-1 rounded-l-md bg-slate-500/90 shadow-sm" />
        {/* Left Side: Volume Up */}
        <div className="pointer-events-none absolute -left-[13px] top-[165px] h-12 w-1 rounded-l-md bg-slate-500/90 shadow-sm" />
        {/* Left Side: Volume Down */}
        <div className="pointer-events-none absolute -left-[13px] top-[230px] h-12 w-1 rounded-l-md bg-slate-500/90 shadow-sm" />
        {/* Right Side: Power Button */}
        <div className="pointer-events-none absolute -right-[13px] top-[180px] h-18 w-1 rounded-r-md bg-slate-500/90 shadow-sm" />

        {/* Antenna bands */}
        <div className={`pointer-events-none absolute -left-[10px] top-20 h-1 w-2 ${finishStyles.antenna}`} />
        <div className={`pointer-events-none absolute -right-[10px] top-20 h-1 w-2 ${finishStyles.antenna}`} />
        <div className={`pointer-events-none absolute -left-[10px] bottom-20 h-1 w-2 ${finishStyles.antenna}`} />
        <div className={`pointer-events-none absolute -right-[10px] bottom-20 h-1 w-2 ${finishStyles.antenna}`} />

        {/* Inner OLED Glass Screen */}
        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[45px] bg-[#000000] text-slate-100 shadow-[inset_0_0_8px_rgba(0,0,0,0.8)]">
          {/* iOS Top Status Bar */}
          <div className="sticky top-0 z-40 flex items-center justify-between px-7 pt-3 pb-0.5 text-xs font-semibold text-white bg-black/40 backdrop-blur-md">
            {/* Time */}
            <span className="font-bold tracking-tight text-[13px] pl-1 font-sans">9:41</span>

            {/* Dynamic Island */}
            <div className="flex-1 max-w-[155px] -mt-1">
              <DynamicIsland onOpenProfile={onOpenProfile} />
            </div>

            {/* Status Icons: 5G, Wi-Fi, Battery */}
            <div className="flex items-center gap-1.5 text-white pr-1">
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

          {/* Main App Store Screen Content */}
          <div className="relative flex-1 overflow-y-auto px-4 pt-1 pb-2 scrollbar-none">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
