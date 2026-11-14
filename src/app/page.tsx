'use client';

import React, { useState, useEffect } from 'react';
import { PROJECTS } from '@/data/projects';
import { Project } from '@/types/project';
import WaterRippleCanvas, { RippleMode } from '@/components/WaterRippleCanvas';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import BottomTabBar from '@/components/BottomTabBar';
import DiscoverView from '@/components/DiscoverView';
import AllAppsView from '@/components/AllAppsView';
import InTheLabView from '@/components/InTheLabView';
import DeveloperProfileView from '@/components/DeveloperProfileView';
import AppModal from '@/components/AppModal';
import CommandPalette from '@/components/CommandPalette';
import ResumeModal from '@/components/ResumeModal';

export default function HomePage() {
  const [activeView, setActiveView] = useState<'discover' | 'apps' | 'lab' | 'profile'>('discover');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [rippleMode, setRippleMode] = useState<RippleMode>('active');
  const [glassClearness, setGlassClearness] = useState<'frosted' | 'clear' | 'ultra'>('frosted');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [installedAppIds, setInstalledAppIds] = useState<Set<string>>(new Set(['propscope']));

  // Synchronize dark mode class to <html>
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleToggleInstall = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setInstalledAppIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-[#070b14] dark:text-slate-100 font-sans">
      {/* 1. Ambient Fluid Gradient Substrate (Translucent refraction under glass) */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        {/* Top-right Cyan Orb */}
        <div className="absolute -right-24 -top-24 h-[550px] w-[550px] rounded-full bg-cyan-400/15 blur-[120px] dark:bg-cyan-500/12" />
        {/* Center-left Emerald Orb */}
        <div className="absolute -left-20 top-1/3 h-[500px] w-[500px] rounded-full bg-emerald-400/15 blur-[120px] dark:bg-emerald-500/10" />
        {/* Bottom-right Violet Orb */}
        <div className="absolute bottom-10 right-1/4 h-[450px] w-[450px] rounded-full bg-indigo-500/15 blur-[130px] dark:bg-purple-600/12" />
      </div>

      {/* 2. Interactive Water Ripple & Specular Caustics HTML5 Canvas */}
      <WaterRippleCanvas mode={rippleMode} glassClearness={glassClearness} />

      {/* 3. Global Sticky Liquid Glass Header */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        rippleMode={rippleMode}
        onSelectRippleMode={setRippleMode}
        glassClearness={glassClearness}
        onSelectGlassClearness={setGlassClearness}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        activeView={activeView}
        onSelectView={setActiveView}
      />

      {/* 4. Main App Store Frame */}
      <div className="relative z-10 mx-auto flex max-w-7xl min-h-[calc(100vh-65px)]">
        {/* Desktop Sidebar */}
        <Sidebar
          activeView={activeView}
          onSelectView={setActiveView}
          installedCount={installedAppIds.size}
          onOpenResumeModal={() => setIsResumeOpen(true)}
        />

        {/* Dynamic Viewport Content */}
        <main className="flex-1 p-4 pb-24 sm:p-6 sm:pb-28 lg:p-8 lg:pb-12">
          {activeView === 'discover' && (
            <DiscoverView
              projects={PROJECTS}
              onOpenSheet={setSelectedProject}
              installedAppIds={installedAppIds}
              onToggleInstall={handleToggleInstall}
              onNavigateView={setActiveView}
            />
          )}

          {activeView === 'apps' && (
            <AllAppsView
              projects={PROJECTS}
              onOpenSheet={setSelectedProject}
              installedAppIds={installedAppIds}
              onToggleInstall={handleToggleInstall}
            />
          )}

          {activeView === 'lab' && (
            <InTheLabView
              projects={PROJECTS}
              onOpenSheet={setSelectedProject}
            />
          )}

          {activeView === 'profile' && (
            <DeveloperProfileView
              onOpenResumeModal={() => setIsResumeOpen(true)}
            />
          )}
        </main>
      </div>

      {/* 5. Mobile Glass Bottom Tab Bar */}
      <BottomTabBar
        activeView={activeView}
        onSelectView={setActiveView}
        installedCount={installedAppIds.size}
      />

      {/* 6. Standardized App Store Product Sheet (Modal) */}
      <AppModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        isInstalled={selectedProject ? installedAppIds.has(selectedProject.id) : false}
        onToggleInstall={(id) => handleToggleInstall(id)}
      />

      {/* 7. ⌘K Global Command Palette */}
      <CommandPalette
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        projects={PROJECTS}
        onSelectProject={setSelectedProject}
        onNavigateView={setActiveView}
      />

      {/* 8. Printable / PDF Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
