'use client';

import React from 'react';
import * as Icons from 'lucide-react';

interface SquircleIconProps {
  iconName: string;
  gradient: [string, string];
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export default function SquircleIcon({
  iconName,
  gradient,
  size = 'md',
  className = '',
}: SquircleIconProps) {
  // Safe dynamic icon resolution
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[
    iconName
  ] || Icons.Sparkles;

  const sizeClasses = {
    sm: 'w-10 h-10 rounded-[12px] p-2',
    md: 'w-14 h-14 rounded-[16px] p-2.5',
    lg: 'w-20 h-20 rounded-[22px] p-4',
    xl: 'w-24 h-24 rounded-[26px] p-5',
  };

  const iconSizes = {
    sm: 'w-5 h-5',
    md: 'w-7 h-7',
    lg: 'w-10 h-10',
    xl: 'w-12 h-12',
  };

  return (
    <div
      className={`relative flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95 ${sizeClasses[size]} ${className}`}
      style={{
        background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`,
      }}
    >
      {/* Specular inner glass reflection rim */}
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]" />

      {/* Subtle glossy sheen */}
      <div className="pointer-events-none absolute -inset-full bg-gradient-to-tr from-transparent via-white/10 to-transparent rotate-45 transform" />

      <IconComponent className={`${iconSizes[size]} text-white drop-shadow-md`} />
    </div>
  );
}
