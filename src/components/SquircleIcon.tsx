'use client';

import React from 'react';
import { 
  Building2, 
  Cpu, 
  Activity, 
  Terminal, 
  PieChart, 
  Box, 
  Bot, 
  Waves, 
  Sparkles,
  TrendingUp,
  Layers,
  Code2
} from 'lucide-react';

interface SquircleIconProps {
  iconName: string;
  gradient?: [string, string];
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  id?: string;
}

export default function SquircleIcon({
  iconName,
  gradient = ['#059669', '#10b981'],
  size = 'md',
  className = '',
  id,
}: SquircleIconProps) {
  // Apple App Store icon dimensions & corner radii
  const sizeMap = {
    xs: { box: 'w-7 h-7', radius: 'rounded-[7px]', icon: 'w-3.5 h-3.5', innerBorder: 'inset 0 0 0 0.5px rgba(255,255,255,0.25)' },
    sm: { box: 'w-10 h-10', radius: 'rounded-[10px]', icon: 'w-5 h-5', innerBorder: 'inset 0 0 0 0.75px rgba(255,255,255,0.25)' },
    md: { box: 'w-[58px] h-[58px]', radius: 'rounded-[14px]', icon: 'w-7 h-7', innerBorder: 'inset 0 0 0 1px rgba(255,255,255,0.2)' },
    lg: { box: 'w-20 h-20', radius: 'rounded-[19px]', icon: 'w-10 h-10', innerBorder: 'inset 0 0 0 1.25px rgba(255,255,255,0.25)' },
    xl: { box: 'w-[104px] h-[104px]', radius: 'rounded-[24px]', icon: 'w-12 h-12', innerBorder: 'inset 0 0 0 1.5px rgba(255,255,255,0.3)' },
  };

  const currentSize = sizeMap[size];

  // Bespoke Apple-grade icon visual graphics per app
  const renderIconGraphic = () => {
    switch (iconName) {
      case 'Building2': // PropScope (Real Estate Underwriter)
        return (
          <div className="relative flex items-center justify-center w-full h-full">
            {/* Architectural grid background */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.75px,transparent_0.75px)] [background-size:6px_6px] opacity-25" />
            {/* Financial surge wave */}
            <svg className="absolute inset-0 w-full h-full stroke-emerald-200/40" viewBox="0 0 58 58" fill="none">
              <path d="M4 42 Q 20 40, 32 24 T 54 12" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <Building2 className={`${currentSize.icon} text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] z-10`} />
          </div>
        );

      case 'Cpu': // NeuralDraft (AI Spec Generator)
        return (
          <div className="relative flex items-center justify-center w-full h-full">
            {/* Circuit traces */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0,transparent_70%)]" />
            <svg className="absolute inset-0 w-full h-full stroke-purple-200/30" viewBox="0 0 58 58" fill="none">
              <circle cx="29" cy="29" r="18" strokeWidth="1" strokeDasharray="3 3" />
            </svg>
            <Cpu className={`${currentSize.icon} text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] z-10`} />
          </div>
        );

      case 'Activity': // CloudPulse (Observability Radar)
        return (
          <div className="relative flex items-center justify-center w-full h-full">
            {/* Radar concentric rings */}
            <div className="absolute h-4/5 w-4/5 rounded-full border border-sky-200/25" />
            <div className="absolute h-1/2 w-1/2 rounded-full border border-sky-200/35" />
            <Activity className={`${currentSize.icon} text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] z-10`} />
          </div>
        );

      case 'Terminal': // DevSnap (AST Snippet Vault)
        return (
          <div className="relative flex items-center justify-center w-full h-full">
            <div className="absolute inset-x-2 top-2 h-1 bg-white/20 rounded-full" />
            <Terminal className={`${currentSize.icon} text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] z-10`} />
          </div>
        );

      case 'PieChart': // FinFlow (Monte Carlo Simulator)
        return (
          <div className="relative flex items-center justify-center w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent" />
            <PieChart className={`${currentSize.icon} text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] z-10`} />
          </div>
        );

      case 'Box': // VoxelCanvas (3D Spatial Canvas)
        return (
          <div className="relative flex items-center justify-center w-full h-full">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:8px_8px]" />
            <Box className={`${currentSize.icon} text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] z-10`} />
          </div>
        );

      case 'Bot': // AgentKernel (Local Agent Runtime)
        return (
          <div className="relative flex items-center justify-center w-full h-full">
            <div className="absolute h-2 w-8 bg-white/30 rounded-full blur-[1px] top-3" />
            <Bot className={`${currentSize.icon} text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] z-10`} />
          </div>
        );

      case 'Waves': // FluidSound (Circadian Synthesizer)
        return (
          <div className="relative flex items-center justify-center w-full h-full">
            <svg className="absolute inset-0 w-full h-full stroke-cyan-200/40" viewBox="0 0 58 58" fill="none">
              <path d="M 6 29 Q 18 10, 29 29 T 52 29" strokeWidth="2" />
            </svg>
            <Waves className={`${currentSize.icon} text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] z-10`} />
          </div>
        );

      default:
        return <Sparkles className={`${currentSize.icon} text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] z-10`} />;
    }
  };

  return (
    <div
      className={`relative shrink-0 flex items-center justify-center overflow-hidden transition-all duration-200 ${currentSize.box} ${currentSize.radius} ${className}`}
      style={{
        background: `linear-gradient(145deg, ${gradient[0]}, ${gradient[1]})`,
        boxShadow: `
          0 4px 12px -1px rgba(0, 0, 0, 0.28),
          0 2px 5px -1px rgba(0, 0, 0, 0.16),
          ${currentSize.innerBorder}
        `,
      }}
    >
      {/* Specular gloss top highlight (Apple signature bevel reflection) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/35 via-white/10 to-transparent" />

      {/* Inner ambient bottom shadow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-black/25 to-transparent" />

      {/* App Graphic Visual */}
      {renderIconGraphic()}
    </div>
  );
}
