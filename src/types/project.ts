export type ProjectCategory = 
  | 'Real Estate'
  | 'AI & Machine Learning'
  | 'DevTools & Infra'
  | 'Productivity'
  | 'FinTech'
  | 'Spatial & Graphics';

export type ProjectShelf = 'featured' | 'weekend-builds' | 'utilities' | 'lab';

export type ProjectStatus = 
  | 'v1.4 Live'
  | 'v1.2 Live'
  | 'v1.0 Live'
  | 'Beta'
  | 'In Progress'
  | 'Prototype'
  | 'Concept';

export interface ChangelogItem {
  version: string;
  date: string;
  notes: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  shelf: ProjectShelf;
  status: ProjectStatus;
  buildTime: string;
  role: string;
  stack: string[];
  liveUrl: string;
  repoUrl: string;
  iconGradient: [string, string];
  iconName: string; // Lucide icon identifier
  accentColor: string;
  featuredRank?: number;
  highlightStat?: { label: string; value: string };
  problem: string;
  solution: string[];
  architecture: string;
  changelog: ChangelogItem[];
  retrospective: {
    win: string;
    tradeoff: string;
  };
  metrics?: {
    stars?: number;
    downloads?: string;
    speed?: string;
  };
  screenshots: {
    title: string;
    description: string;
    mockupType: 'map' | 'ai-chat' | 'dashboard' | 'code' | 'chart' | 'canvas' | 'audio';
  }[];
}
