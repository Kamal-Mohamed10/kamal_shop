'use client';

import React, { useState, useEffect } from 'react';
import { PROJECTS } from '@/data/projects';
import { Project } from '@/types/project';
import WaterRippleCanvas, { RippleMode } from '@/components/WaterRippleCanvas';
import PhoneFrame, { PhoneFinish } from '@/components/PhoneFrame';
import PhoneEnvironmentControls from '@/components/PhoneEnvironmentControls';
import IOSTabBar from '@/components/IOSTabBar';
import IOSAppStoreDiscover from '@/components/IOSAppStoreDiscover';
import IOSProductSheet from '@/components/IOSProductSheet';
import AllAppsView from '@/components/AllAppsView';
import InTheLabView from '@/components/InTheLabView';
import DeveloperProfileView from '@/components/DeveloperProfileView';
import CommandPalette from '@/components/CommandPalette';
import ResumeModal from '@/components/ResumeModal';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'today' | 'apps' | 'lab' | 'profile'>('today');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [phoneFinish, setPhoneFinish] = useState<PhoneFinish>('natural');
  const [rippleMode, setRippleMode] = useState<RippleMode>('active');
  const [installedAppIds, setInstalledAppIds] = useState<Set<string>>(new Set(['propscope']));

  // Ensure dark mode class is applied to html
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

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
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#050811] text-slate-100 font-sans selection:bg-sky-500/30 selection:text-sky-300">
      {/* 1. Ambient Fluid Gradient Substrate */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-24 -top-24 h-[650px] w-[650px] rounded-full bg-cyan-500/12 blur-[130px]" />
        <div className="absolute -left-20 top-1/3 h-[550px] w-[550px] rounded-full bg-emerald-500/10 blur-[130px]" />
        <div className="absolute bottom-10 right-1/4 h-[500px] w-[500px] rounded-full bg-purple-600/12 blur-[140px]" />
      </div>

      {/* 2. Water Ripple & Specular Caustics Canvas in the Background */}
      <WaterRippleCanvas mode={rippleMode} glassClearness="frosted" />

      {/* 3. Top Desktop Control Bar (Finish, Search, Resume) */}
      <div className="relative z-20">
        <PhoneEnvironmentControls
          finish={phoneFinish}
          onSelectFinish={setPhoneFinish}
          rippleMode={rippleMode}
          onSelectRippleMode={setRippleMode}
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
          installedCount={installedAppIds.size}
        />
      </div>

      {/* 4. Centerpiece: The Realistic Liquid Glass iPhone Device */}
      <div className="relative z-10 flex items-center justify-center py-4 sm:py-8">
        <PhoneFrame
          finish={phoneFinish}
          onOpenProfile={() => setActiveTab('profile')}
        >
          {/* Active View inside the Phone */}
          {activeTab === 'today' && (
            <IOSAppStoreDiscover
              projects={PROJECTS}
              onOpenSheet={setSelectedProject}
              installedAppIds={installedAppIds}
              onToggleInstall={handleToggleInstall}
              onOpenProfile={() => setActiveTab('profile')}
              onNavigateTab={setActiveTab}
            />
          )}

          {activeTab === 'apps' && (
            <div className="pb-6">
              <AllAppsView
                projects={PROJECTS}
                onOpenSheet={setSelectedProject}
                installedAppIds={installedAppIds}
                onToggleInstall={handleToggleInstall}
              />
            </div>
          )}

          {activeTab === 'lab' && (
            <div className="pb-6">
              <InTheLabView
                projects={PROJECTS}
                onOpenSheet={setSelectedProject}
              />
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="pb-6">
              <DeveloperProfileView
                onOpenResumeModal={() => setIsResumeOpen(true)}
              />
            </div>
          )}

          {/* Floating Native iOS Tab Bar inside Phone */}
          <IOSTabBar
            activeTab={activeTab}
            onSelectTab={setActiveTab}
            installedCount={installedAppIds.size}
          />

          {/* Native iOS App Store Product Sheet (Slides up inside Phone) */}
          <IOSProductSheet
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            isInstalled={selectedProject ? installedAppIds.has(selectedProject.id) : false}
            onToggleInstall={(id) => handleToggleInstall(id)}
          />
        </PhoneFrame>
      </div>

      {/* 5. ⌘K Global Command Palette Dialog */}
      <CommandPalette
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        projects={PROJECTS}
        onSelectProject={(project) => {
          setSelectedProject(project);
        }}
        onNavigateView={(view) => {
          if (view === 'discover') setActiveTab('today');
          else if (view === 'apps') setActiveTab('apps');
          else if (view === 'lab') setActiveTab('lab');
          else if (view === 'profile') setActiveTab('profile');
        }}
      />

      {/* 6. Printable / PDF Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
