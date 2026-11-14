'use client';

import React, { useState } from 'react';
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
  // Bezel color styles matching Apple Titanium finishes
  const finishStyles = {
    natural: {
      chassis: 'border-[#2d2b28] bg-[#1a1917] shadow-[0_30px_100px_rgba(0,0,0,0.6),0_10px_30px_rgba(45,43,40,0.3)]',
      rim: 'border-[#43403a]/60',
      antenna: 'bg-[#43403a]',
    },
    desert: {
      chassis: 'border-[#42372f] bg-[#1c1815] shadow-[0_30px_100px_rgba(0,0,0,0.6),0_10px_30px_rgba(66,55,47,0.3)]',
      rim: 'border-[#635549]/60',
      antenna: 'bg-[#635549]',
    },
    black: {
      chassis: 'border-[#1a1b1d] bg-[#0c0d0e] shadow-[0_30px_100px_rgba(0,0,0,0.7),0_10px_30px_rgba(0,0,0,0.4)]',
      rim: 'border-[#2e3035]/60',
      antenna: 'bg-[#2e3035]',
    },
    silver: {
      chassis: 'border-[#3a3b3d] bg-[#1a1b1c] shadow-[0_30px_100px_rgba(0,0,0,0.55),0_10px_30px_rgba(58,59,61,0.25)]',
      rim: 'border-[#58595c]/60',
      antenna: 'bg-[#58595c]',
    },
  }[finish];

  return (
    <div className="relative mx-auto flex items-center justify-center p-2 sm:p-6 lg:p-8">
      {/* Outer ambient glow behind the phone */}
      <div className="pointer-events-none absolute h-[600px] w-[360px] rounded-[60px] bg-gradient-to-tr from-sky-500/20 via-emerald-500/15 to-purple-500/20 blur-3xl filter" />

      {/* The Physical Phone Mockup Container */}
      <div
        className={`relative w-full max-w-[410px] h-[844px] rounded-[55px] border-[11px] transition-colors duration-500 ${finishStyles.chassis}`}
      >
        {/* Specular outer metal reflection rim */}
        <div
          className={`pointer-events-none absolute -inset-[2px] rounded-[56px] border ${finishStyles.rim}`}
        />

        {/* Physical Buttons on Chassis */}
        {/* Left Side: Action Button */}
        <div className="pointer-events-none absolute -left-[14px] top-28 h-8 w-1 rounded-l-md bg-slate-600/80" />
        {/* Left Side: Volume Up */}
        <div className="pointer-events-none absolute -left-[14px] top-40 h-12 w-1 rounded-l-md bg-slate-600/80" />
        {/* Left Side: Volume Down */}
        <div className="pointer-events-none absolute -left-[14px] top-56 h-12 w-1 rounded-l-md bg-slate-600/80" />
        {/* Right Side: Power Button */}
        <div className="pointer-events-none absolute -right-[14px] top-44 h-16 w-1 rounded-r-md bg-slate-600/80" />

        {/* Antenna bands */}
        <div className={`pointer-events-none absolute -left-[11px] top-20 h-1 w-2.5 ${finishStyles.antenna}`} />
        <div className={`pointer-events-none absolute -right-[11px] top-20 h-1 w-2.5 ${finishStyles.antenna}`} />
        <div className={`pointer-events-none absolute -left-[11px] bottom-20 h-1 w-2.5 ${finishStyles.antenna}`} />
        <div className={`pointer-events-none absolute -right-[11px] bottom-20 h-1 w-2.5 ${finishStyles.antenna}`} />

        {/* Inner OLED Glass Screen */}
        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[44px] bg-[#070b14] text-slate-100 shadow-inner">
          {/* iOS Top Status Bar */}
          <div className="sticky top-0 z-40 flex items-center justify-between px-6 pt-3 pb-1 text-xs font-semibold text-white/90 bg-slate-950/40 backdrop-blur-md">
            {/* Time */}
            <span className="font-semibold tracking-tight text-xs pl-1">9:41</span>

            {/* Dynamic Island */}
            <div className="flex-1 max-w-[170px] -mt-1">
              <DynamicIsland onOpenProfile={onOpenProfile} />
            </div>

            {/* Icons: 5G, Wi-Fi, Battery */}
            <div className="flex items-center gap-1.5 text-white/90 pr-1">
              <Signal className="h-3 w-3" />
              <Wifi className="h-3 w-3" />
              <div className="flex items-center gap-0.5">
                <span className="text-[10px]">100%</span>
                <Battery className="h-3.5 w-3.5 fill-white" />
              </div>
            </div>
          </div>

          {/* Main App Store Screen Content */}
          <div className="relative flex-1 overflow-y-auto px-4 pt-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
