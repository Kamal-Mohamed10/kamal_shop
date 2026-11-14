import { Project } from '@/types/project';

export const PROJECTS: Project[] = [
  {
    id: 'propscope',
    title: 'PropScope',
    subtitle: 'Automated Real Estate Deal & Cash-Flow Analyzer',
    category: 'Real Estate',
    shelf: 'featured',
    status: 'v1.4 Live',
    buildTime: '4 Weeks',
    role: 'Solo Builder',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'PostGIS', 'Mapbox', 'Tailwind CSS'],
    liveUrl: 'https://propscope.demo.app',
    repoUrl: 'https://github.com/Kamal-Mohamed10/propscope',
    iconGradient: ['#059669', '#10b981'],
    iconName: 'Building2',
    accentColor: '#10b981',
    featuredRank: 1,
    highlightStat: { label: 'Analysis Speed', value: '< 120ms' },
    metrics: {
      downloads: '1.2k deals run',
      speed: 'Sub-120ms query',
    },
    problem:
      'Real estate investors spend hours manually cross-referencing county tax assessors, rent comps, and rehabilitation estimates across disconnected spreadsheets with prone human error.',
    solution: [
      'Instant Cap-Rate, Cash-on-Cash Return, and DSCR (Debt Service Coverage Ratio) calculation from any US address.',
      'Interactive Mapbox vector overlays comparing neighborhood rent percentiles and historical zoning records.',
      'One-click PDF investment memo generation configured for private lenders and syndication partners.',
      'Automated 30-year amortization schedule with tax-depreciation forecasting.'
    ],
    architecture:
      'Engineered with Next.js App Router and server actions streaming financial calculations. Spatial querying is powered by PostGIS geo-indexes querying over 50,000 parcel bounds under 120ms. Aggregated data is cached in edge key-value stores with stale-while-revalidate invalidation.',
    changelog: [
      { version: 'v1.4', date: 'Oct 2026', notes: 'Added PDF investment memo export and multi-family unit mix underwriting.' },
      { version: 'v1.2', date: 'Sep 2026', notes: 'Integrated Mapbox 3D terrain and polygon lot boundary visualizer.' },
      { version: 'v1.0', date: 'Aug 2026', notes: 'Initial public launch with automated comp scoring & cash flow calculator.' }
    ],
    retrospective: {
      win: 'Prioritized calculation speed and client-side reactive sliders over complex custom UI early on; modular underwriting schema saved weeks when rolling out multi-family support.',
      tradeoff: 'Initially relied on client-side map clustering which degraded mobile frame rates; migrated clustering into PostGIS spatial SQL queries to regain smooth 60fps pans.'
    },
    screenshots: [
      {
        title: 'Interactive Underwriting Dashboard',
        description: 'Instant cap rate, NOI, and cash-on-cash sensitivity matrix with real-time slider adjustments.',
        mockupType: 'dashboard'
      },
      {
        title: 'Spatial Neighborhood Comp Layer',
        description: 'Mapbox visual overlays highlighting rental yield deviations and recent comparable sales.',
        mockupType: 'map'
      },
      {
        title: '30-Year Cash Flow Projection',
        description: 'Detailed debt schedule with principal paydown, appreciation curves, and equity multiples.',
        mockupType: 'chart'
      }
    ]
  },
  {
    id: 'neuraldraft',
    title: 'NeuralDraft',
    subtitle: 'AI-Native Technical Spec & Architecture Generator',
    category: 'AI & Machine Learning',
    shelf: 'featured',
    status: 'v1.2 Live',
    buildTime: '3 Weeks',
    role: 'Solo Builder',
    stack: ['Next.js', 'AI SDK', 'TypeScript', 'OpenAI', 'Tailwind CSS', 'Supabase'],
    liveUrl: 'https://neuraldraft.demo.app',
    repoUrl: 'https://github.com/Kamal-Mohamed10/neuraldraft',
    iconGradient: ['#6366f1', '#a855f7'],
    iconName: 'Cpu',
    accentColor: '#8b5cf6',
    featuredRank: 2,
    highlightStat: { label: 'Spec Time', value: '5 min vs 6 hrs' },
    metrics: {
      downloads: '3.4k specs',
      speed: 'Streaming LLM'
    },
    problem:
      'Engineering teams and founders waste dozens of hours drafting repetitive technical specifications, database schemas, and API contracts from scratch before writing a single line of code.',
    solution: [
      'Interactive conversational interview engine that diagnoses edge cases, scale requirements, and auth constraints.',
      'Deterministic output generating Mermaid sequence diagrams, PostgreSQL schema DDL, and REST/gRPC endpoints.',
      'Markdown export compatible with Linear, Jira, and GitHub issues with automated task breakdown.'
    ],
    architecture:
      'Utilizes Vercel AI SDK with custom streaming tool calling. Multi-step reasoning pipeline decomposes prompts into Domain Model -> State Machine -> Security Review -> DDL Generation. Edge runtime handles sub-second token delivery.',
    changelog: [
      { version: 'v1.2', date: 'Sep 2026', notes: 'Added automatic Mermaid diagram rendering and Prisma schema generation.' },
      { version: 'v1.0', date: 'Jul 2026', notes: 'Launched with basic PRD generation and markdown sync.' }
    ],
    retrospective: {
      win: 'Enforced strict JSON schema validation for intermediate model outputs, eliminating 99% of hallucinated API types.',
      tradeoff: 'Token limits required aggressive prompt compression strategies which occasionally shortened nuance in edge case notes.'
    },
    screenshots: [
      {
        title: 'Interactive Spec Generator',
        description: 'Multi-turn requirement refinement with live streaming architectural artifacts.',
        mockupType: 'ai-chat'
      },
      {
        title: 'Live Mermaid & Schema Preview',
        description: 'Auto-rendered entity relationship diagrams and copyable TypeScript interfaces.',
        mockupType: 'code'
      }
    ]
  },
  {
    id: 'cloudpulse',
    title: 'CloudPulse',
    subtitle: 'Light-speed Microservice Observability & Incident Radar',
    category: 'DevTools & Infra',
    shelf: 'weekend-builds',
    status: 'v1.0 Live',
    buildTime: '2 Weeks',
    role: 'Solo Builder',
    stack: ['Go', 'React', 'WebSockets', 'ClickHouse', 'Tailwind CSS', 'Docker'],
    liveUrl: 'https://cloudpulse.demo.app',
    repoUrl: 'https://github.com/Kamal-Mohamed10/cloudpulse',
    iconGradient: ['#0284c7', '#38bdf8'],
    iconName: 'Activity',
    accentColor: '#38bdf8',
    highlightStat: { label: 'Throughput', value: '250k events/sec' },
    problem:
      'Commercial APM dashboards are prohibitively expensive for early-stage teams and suffer from multi-minute ingestion delays during live production fire drills.',
    solution: [
      'Sub-second telemetry ingestion and streaming over persistent WebSockets.',
      'Automatic anomaly detection flagging 99th-percentile latency spikes and error rate outliers.',
      'Zero-configuration eBPF probe agent with minimal CPU overhead (< 1.2%).'
    ],
    architecture:
      'High-throughput ingest proxy written in Go writing to columnar ClickHouse storage. React frontend subscribes to delta streams using binary WebSockets for 60fps graph updates without browser GC spikes.',
    changelog: [
      { version: 'v1.0', date: 'Jun 2026', notes: 'Initial release with ClickHouse columnar logging and live cluster heatmaps.' }
    ],
    retrospective: {
      win: 'Choosing Go and ClickHouse enabled ingest of over 250,000 events/sec on a single $20/mo VPS.',
      tradeoff: 'Binary protocol made debugging WebSocket frames trickier than JSON during initial local development.'
    },
    screenshots: [
      {
        title: 'Live Service Mesh Heatmap',
        description: 'Real-time throughput and p99 latency status across all distributed worker nodes.',
        mockupType: 'dashboard'
      }
    ]
  },
  {
    id: 'devsnap',
    title: 'DevSnap',
    subtitle: 'Terminal & Snippet Vault with Instant AST Indexing',
    category: 'Productivity',
    shelf: 'weekend-builds',
    status: 'v1.2 Live',
    buildTime: '10 Days',
    role: 'Solo Builder',
    stack: ['Rust', 'Next.js', 'TypeScript', 'SQLite', 'Tauri', 'Tailwind CSS'],
    liveUrl: 'https://devsnap.demo.app',
    repoUrl: 'https://github.com/Kamal-Mohamed10/devsnap',
    iconGradient: ['#ea580c', '#fb923c'],
    iconName: 'Terminal',
    accentColor: '#f97316',
    highlightStat: { label: 'Search Latency', value: '< 4ms' },
    problem:
      'Engineers lose crucial shell one-liners, regex recipes, and Docker commands across uncommitted scratchpad notes and fragmented browser bookmarks.',
    solution: [
      'Global ⌥Space spotlight launcher that pastes syntax-highlighted snippets directly into active terminals.',
      'Tree-sitter AST indexing that lets you search by programming language, function signature, or parameter.',
      'End-to-end encrypted sync across devices using local SQLite databases.'
    ],
    architecture:
      'Built with a Rust core using tree-sitter parsers and SQLite with FTS5 full-text indexing. Frontend uses Next.js with Tailwind and framer-motion wrapped in a native Tauri shell.',
    changelog: [
      { version: 'v1.2', date: 'Aug 2026', notes: 'Added syntax highlighting for 40+ languages and quick terminal pipe integration.' },
      { version: 'v1.0', date: 'May 2026', notes: 'Initial macOS desktop build.' }
    ],
    retrospective: {
      win: 'Local-first architecture meant zero server hosting fees and instantaneous sub-5ms search responsiveness.',
      tradeoff: 'Cross-compiling Tauri for Linux and Windows required dedicated CI workflow configurations.'
    },
    screenshots: [
      {
        title: 'Spotlight Snippet Search',
        description: 'Instant fuzzy and AST search across terminal commands, regex snippets, and shell scripts.',
        mockupType: 'code'
      }
    ]
  },
  {
    id: 'finflow',
    title: 'FinFlow',
    subtitle: 'SaaS Runway & Unit Economics Monte-Carlo Simulator',
    category: 'FinTech',
    shelf: 'utilities',
    status: 'v1.0 Live',
    buildTime: '1 Week',
    role: 'Solo Builder',
    stack: ['Next.js', 'Python', 'FastAPI', 'Chart.js', 'Tailwind CSS'],
    liveUrl: 'https://finflow.demo.app',
    repoUrl: 'https://github.com/Kamal-Mohamed10/finflow',
    iconGradient: ['#0d9488', '#14b8a6'],
    iconName: 'PieChart',
    accentColor: '#14b8a6',
    highlightStat: { label: 'Simulations', value: '10,000 paths' },
    problem:
      'Founders struggle to forecast runway when hiring or testing ad spend because simple spreadsheet formulas fail to account for variance and churn volatility.',
    solution: [
      '10,000-iteration Monte Carlo simulation calculating probability of runway exhaustion.',
      'Interactive hiring planner showing break-even MRR timelines.',
      'Stripe webhook integration for automatic churn and CAC calculation.'
    ],
    architecture:
      'Next.js client interface with a lightweight FastAPI microservice computing vectorized NumPy simulations in parallel. Results are cached and rendered using responsive SVG charts.',
    changelog: [
      { version: 'v1.0', date: 'Jul 2026', notes: 'First public release with Monte Carlo simulation engine and Stripe sync.' }
    ],
    retrospective: {
      win: 'Offloading math to Python NumPy kept complex probability calculations under 200ms.',
      tradeoff: 'Hosting two separate runtimes (Next.js + FastAPI) increased deployment complexity compared to pure TypeScript.'
    },
    screenshots: [
      {
        title: 'Monte Carlo Runway Fan Chart',
        description: 'Probabilistic modeling of cash reserves across optimistic, baseline, and stress-tested trajectories.',
        mockupType: 'chart'
      }
    ]
  },
  {
    id: 'voxelcanvas',
    title: 'VoxelCanvas',
    subtitle: 'Collaborative WebGL Spatial Canvas for Architects',
    category: 'Spatial & Graphics',
    shelf: 'lab',
    status: 'Prototype',
    buildTime: 'In Exploration',
    role: 'Solo Builder',
    stack: ['Three.js', 'WebGL', 'TypeScript', 'WebRTC', 'Tailwind CSS'],
    liveUrl: 'https://voxelcanvas.demo.app',
    repoUrl: 'https://github.com/Kamal-Mohamed10/voxelcanvas',
    iconGradient: ['#d946ef', '#ec4899'],
    iconName: 'Box',
    accentColor: '#ec4899',
    problem:
      'Architectural review tools require heavy desktop installations that are difficult for remote clients to inspect or markup in real time.',
    solution: [
      'Browser-based 60fps voxel block modeling with realistic volumetric lighting and shadows.',
      'Multiplayer peer-to-peer cursor presence and spatial voice via WebRTC data channels.',
      'Direct OBJ and GLTF export for CAD importing.'
    ],
    architecture:
      'Custom Three.js instanced mesh rendering pipeline with chunk-based frustum culling. WebRTC mesh network handles state synchronization without central server relay overhead.',
    changelog: [
      { version: 'v0.3-alpha', date: 'Nov 2026', notes: 'Added instanced voxel rendering and WebRTC presence.' }
    ],
    retrospective: {
      win: 'Instanced meshes reduced draw calls from 14,000 to just 12, maintaining 60fps on integrated GPUs.',
      tradeoff: 'P2P WebRTC becomes bandwidth-heavy beyond 8 concurrent collaborators.'
    },
    screenshots: [
      {
        title: 'Spatial 3D Voxel Studio',
        description: 'Multi-user block modeling with procedural lighting and real-time shadows.',
        mockupType: 'canvas'
      }
    ]
  },
  {
    id: 'agentkernel',
    title: 'AgentKernel',
    subtitle: 'Local-First Autonomous Agent Runtime for macOS',
    category: 'AI & Machine Learning',
    shelf: 'lab',
    status: 'In Progress',
    buildTime: 'Active R&D',
    role: 'Solo Builder',
    stack: ['Rust', 'Swift', 'Llama.cpp', 'Metal', 'Tailwind CSS'],
    liveUrl: 'https://agentkernel.demo.app',
    repoUrl: 'https://github.com/Kamal-Mohamed10/agentkernel',
    iconGradient: ['#f43f5e', '#fb7185'],
    iconName: 'Bot',
    accentColor: '#f43f5e',
    problem:
      'Cloud-based autonomous AI agents send sensitive local files and credentials across external APIs, creating major security hazards for private codebases.',
    solution: [
      '100% offline agent loop executing local open-source LLMs accelerated with Apple Metal GPU.',
      'Deterministic sandbox with user-approved permissions for file system and network actions.',
      'Interactive execution visualizer with state rollback.'
    ],
    architecture:
      'Rust core integrating llama.cpp Metal bindings with Swift native UI bridges for macOS system events and notification handlers.',
    changelog: [
      { version: 'v0.1-wip', date: 'Nov 2026', notes: 'Implemented tool-calling runtime with local Qwen2.5 and Llama 3.2.' }
    ],
    retrospective: {
      win: 'Direct Metal optimization yields 48 tokens/sec on Apple Silicon M-series without warming up fans.',
      tradeoff: 'Memory footprint for 8B models requires at least 16GB unified RAM for comfortable operation.'
    },
    screenshots: [
      {
        title: 'Local Agent Execution Graph',
        description: 'Visual step inspection and sandboxed terminal tool execution running fully on-device.',
        mockupType: 'ai-chat'
      }
    ]
  },
  {
    id: 'fluidsound',
    title: 'FluidSound',
    subtitle: 'Circadian Ambient Soundscape Synthesizer',
    category: 'Productivity',
    shelf: 'lab',
    status: 'Concept',
    buildTime: 'Concept Phase',
    role: 'Solo Builder',
    stack: ['Web Audio API', 'TypeScript', 'Canvas', 'Tailwind CSS'],
    liveUrl: 'https://fluidsound.demo.app',
    repoUrl: 'https://github.com/Kamal-Mohamed10/fluidsound',
    iconGradient: ['#06b6d4', '#3b82f6'],
    iconName: 'Waves',
    accentColor: '#06b6d4',
    problem:
      'Static looping white noise playlists cause cognitive fatigue after 45 minutes of deep focus work.',
    solution: [
      'Procedural binaural audio synthesis that adapts tone, pitch, and tempo according to local sunset times.',
      'Zero audio sample assets—pure Web Audio API oscillator nodes generating brown noise, rain caustics, and wind filters.',
      'Synesthesia visualizer matching sound frequencies to soft liquid light caustics.'
    ],
    architecture:
      'Node graph built on AudioContext with custom BiquadFilterNodes and StereoPannerNodes. Visualizer reads Float32Array frequency bins to drive Canvas shaders.',
    changelog: [
      { version: 'v0.1-concept', date: 'Nov 2026', notes: 'Initial audio graph prototype with brown noise filter modulation.' }
    ],
    retrospective: {
      win: '0 KB audio downloads means the app loads instantly even on poor mobile connections.',
      tradeoff: 'Web Audio API auto-play policy requires an initial user interaction gesture before audio context starts.'
    },
    screenshots: [
      {
        title: 'Generative Sound Waveform',
        description: 'Interactive harmonic frequencies adapting to circadian rhythm and deep work intervals.',
        mockupType: 'audio'
      }
    ]
  }
];

export const DEVELOPER_PROFILE = {
  name: 'Kamal Mohamed',
  title: 'Full-Stack Product Engineer & Systems Builder',
  tagline: 'Bridging high-performance systems, intuitive interfaces, and AI products.',
  location: 'Toronto / Remote',
  status: 'Open to high-impact engineering & product roles',
  bio: 'I am a generalist software engineer who thrives at the intersection of technical architecture, user experience, and real-world problem solving. From building automated real estate underwriting engines to high-throughput observability tools and local AI agents, I design, ship, and iterate end-to-end products.',
  github: 'https://github.com/Kamal-Mohamed10',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
  email: 'kamal.mohamed@example.com',
  coreSkills: [
    { category: 'Frontend', items: ['Next.js / React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'WebGL / Three.js'] },
    { category: 'Backend & Data', items: ['Node.js', 'Go', 'Python / FastAPI', 'PostgreSQL / PostGIS', 'ClickHouse', 'Redis'] },
    { category: 'Architecture & AI', items: ['Vercel AI SDK', 'Distributed Systems', 'WebSockets', 'Docker / CI/CD', 'Local LLMs / llama.cpp'] }
  ],
  experience: [
    {
      role: 'Full-Stack Product Engineer',
      company: 'Independent Engineering & Products',
      period: '2024 — Present',
      description: 'Architecting and launching full-stack applications across Real Estate analytics, AI workflow automation, and distributed developer tooling.'
    },
    {
      role: 'Software Engineer',
      company: 'Product & Tech Solutions',
      period: '2022 — 2024',
      description: 'Engineered high-scale web applications, microservices, and reactive data dashboards used by thousands of daily active users.'
    }
  ]
};
