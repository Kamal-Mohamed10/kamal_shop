'use client';

import React, { useEffect, useRef } from 'react';

export type RippleMode = 'calm' | 'active' | 'raindrop' | 'off';

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  strength: number;
  opacity: number;
  color: string;
  speed: number;
}

interface WaterRippleCanvasProps {
  mode: RippleMode;
  glassClearness?: 'clear' | 'frosted' | 'ultra';
}

export default function WaterRippleCanvas({
  mode,
  glassClearness = 'frosted',
}: WaterRippleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ripplesRef = useRef<Ripple[]>([]);
  const lastSpawnRef = useRef<number>(0);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Respect user prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches || mode === 'off') {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const spawnRipple = (x: number, y: number, strength = 1, isClick = false) => {
      // Cap active ripples <= 25 as specified in PRD
      if (ripplesRef.current.length >= 25) {
        ripplesRef.current.shift();
      }

      const maxR = isClick ? 180 : 110;
      const speed = isClick ? 2.4 : 1.8;

      ripplesRef.current.push({
        x,
        y,
        radius: 0,
        maxRadius: maxR,
        strength: strength * (mode === 'calm' ? 0.6 : 1.0),
        opacity: isClick ? 0.45 : 0.28,
        color: 'rgba(186, 230, 253, ', // soft azure/cyan glass specular
        speed,
      });
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (mode === 'calm') return;
      const now = performance.now();
      // Throttle pointer spawn rate (min 90ms gap)
      if (now - lastSpawnRef.current > (mode === 'active' ? 90 : 160)) {
        lastSpawnRef.current = now;
        spawnRipple(e.clientX, e.clientY, 0.7, false);
      }
    };

    const handlePointerDown = (e: PointerEvent) => {
      spawnRipple(e.clientX, e.clientY, 1.4, true);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerdown', handlePointerDown);

    // Raindrop mode ambient ripple generation
    let raindropInterval: NodeJS.Timeout | null = null;
    if (mode === 'raindrop' || mode === 'calm') {
      const intervalMs = mode === 'raindrop' ? 450 : 1600;
      raindropInterval = setInterval(() => {
        const rx = Math.random() * window.innerWidth;
        const ry = Math.random() * window.innerHeight;
        spawnRipple(rx, ry, mode === 'raindrop' ? 0.8 : 0.4, false);
      }, intervalMs);
    }

    let lastTime = performance.now();

    const render = (time: number) => {
      // 60fps delta cap
      const dt = Math.min((time - lastTime) / 16.67, 2);
      lastTime = time;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = ripplesRef.current.length - 1; i >= 0; i--) {
        const r = ripplesRef.current[i];
        r.radius += r.speed * dt;
        r.opacity -= 0.007 * dt;

        if (r.radius >= r.maxRadius || r.opacity <= 0.01) {
          ripplesRef.current.splice(i, 1);
          continue;
        }

        // Concentric primary wave
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.lineWidth = Math.max(1, 2.5 * (1 - r.radius / r.maxRadius));
        ctx.strokeStyle = `${r.color}${Math.max(0, r.opacity * 0.75)})`;
        ctx.shadowColor = 'rgba(56, 189, 248, 0.4)';
        ctx.shadowBlur = 6;
        ctx.stroke();

        // Secondary subtle inner refraction wave
        if (r.radius > 15) {
          ctx.beginPath();
          ctx.arc(r.x, r.y, Math.max(0, r.radius - 12), 0, Math.PI * 2);
          ctx.lineWidth = Math.max(0.6, 1.2 * (1 - r.radius / r.maxRadius));
          ctx.strokeStyle = `rgba(255, 255, 255, ${Math.max(0, r.opacity * 0.45)})`;
          ctx.shadowBlur = 0;
          ctx.stroke();
        }
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      if (raindropInterval) clearInterval(raindropInterval);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [mode, glassClearness]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
      style={{
        opacity: glassClearness === 'clear' ? 0.85 : glassClearness === 'ultra' ? 0.95 : 0.7,
      }}
      aria-hidden="true"
    />
  );
}
