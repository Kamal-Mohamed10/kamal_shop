import { Project } from '@/types/project';

export const PROJECTS: Project[] = [
  {
    id: 'lead-flow',
    title: 'LeadFlow NYC',
    subtitle: 'Off-Market NYC Property Intelligence & Distress Scoring',
    category: 'Real Estate',
    shelf: 'featured',
    status: 'v1.4 Live',
    buildTime: '4 Weeks',
    role: 'Solo Builder',
    stack: ['Next.js 16', 'TypeScript', 'PostgreSQL', 'Supabase', 'Mapbox', 'Tailwind CSS v4', 'NYC Open Data (ACRIS/DOF/HPD)'],
    liveUrl: 'https://lead-flow-wine-ten.vercel.app',
    repoUrl: 'https://github.com/Kamal-Mohamed10/lead-flow',
    iconGradient: ['#059669', '#10b981'],
    iconName: 'Building2',
    accentColor: '#10b981',
    featuredRank: 1,
    highlightStat: { label: 'Scoring Engine', value: '4-Pillar 0–100' },
    metrics: {
      downloads: '50k+ parcels analyzed',
      speed: 'Sub-200ms lookups',
    },
    problem:
      'NYC real estate wholesalers and acquisition agents spend weeks manually combing through fragmented county recorder sites, deed filings, surrogate probate lists, and municipal tax-lien notices to find off-market deals with verifiable seller equity.',
    solution: [
      'Automated ingestion of live New York City public municipal registries: ACRIS deed & mortgage recordings, DOF property valuations, and DOF tax-lien sale lists.',
      'Transparent 0–100 opportunity scoring across 4 pillars: Distress Catalyst (0–45), Equity Spread (0–25), Capital Stagnation (0–18), and Deal Agility (0–12).',
      'Geographic deal map workspace across Manhattan, Brooklyn, Queens, Bronx, and Staten Island with direct parcel lookup by address or BBL.',
      'Multi-page client-side PDF export (jsPDF) compiling equity breakdown, mortgage history, building violations, and DNC-scrubbed owner research in under 200ms.'
    ],
    architecture:
      'Engineered on Next.js 16 App Router and React 19. Queries live NYC Open Data (Socrata and MapPLUTO APIs) and normalizes records into structured property models. Client-side jsPDF engine generates multi-page reports with zero server overhead. Optional Supabase Auth & PostgreSQL persistence for saved watchlists.',
    changelog: [
      { version: 'v1.4', date: 'Nov 2026', notes: 'Added client-side multi-page PDF Property Report generation and DNC scrubbing pipeline.' },
      { version: 'v1.2', date: 'Oct 2026', notes: 'Implemented 4-pillar 0–100 motivation scoring algorithm and 5-borough BBL parcel indexer.' },
      { version: 'v1.0', date: 'Sep 2026', notes: 'Initial public release with ACRIS deed search, DOF lien lookup, and Mapbox parcel explorer.' }
    ],
    retrospective: {
      win: 'Kept the research workflow 100% compliant and deterministic before invoking any AI, giving wholesalers verified equity and debt data they can trust in the field.',
      tradeoff: 'Socrata public API rate limits required client-side localStorage caching to guarantee sub-second repeat page navigation.'
    },
    screenshots: [
      {
        title: 'LeadFlow Opportunity Queue & 0-100 Score Matrix',
        description: 'Automated 4-pillar motivation scoring ranking NYC parcels by equity spread and filing urgency.',
        mockupType: 'dashboard'
      },
      {
        title: 'NYC Geographic Parcel Explorer (5 Boroughs)',
        description: 'Mapbox vector overlay highlighting off-market parcels across Brooklyn, Manhattan, Queens, Bronx, and Staten Island.',
        mockupType: 'map'
      },
      {
        title: 'Public Equity & Debt Forensics Breakdown',
        description: 'Live ACRIS recorded mortgage amount, DOF tax liens, and calculated net equity spread.',
        mockupType: 'chart'
      }
    ]
  },
  {
    id: 'l2-triage',
    title: 'Customer Inbox Triage',
    subtitle: 'AI Support Ticket Classifier & SLA Urgency Scorer',
    category: 'AI & Machine Learning',
    shelf: 'featured',
    status: 'v1.2 Live',
    buildTime: '3 Weeks',
    role: 'Solo Builder',
    stack: ['React', 'Groq API (Llama 3.3 70B)', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'node:test'],
    liveUrl: 'https://github.com/Kamal-Mohamed10/l2-triage',
    repoUrl: 'https://github.com/Kamal-Mohamed10/l2-triage',
    iconGradient: ['#4f46e5', '#7c3aed'],
    iconName: 'Cpu',
    accentColor: '#8b5cf6',
    featuredRank: 2,
    highlightStat: { label: 'Inference', value: 'Llama 3.3 70B (Groq)' },
    metrics: {
      downloads: '14.4k req/day free',
      speed: 'Sub-second LPU'
    },
    problem:
      'Customer support teams waste countless hours manually sorting ticket inboxes into queues. High-stakes production outages and security incidents often sit unnoticed while low-priority questions get answered first, leading to severe SLA breaches.',
    solution: [
      'Groq LPU-accelerated Llama 3.3 70B categorization validating customer messages against a strict 8-category closed taxonomy.',
      'Deterministic impact-based priority scoring (P0/15m, P1/1h, P2/4h, P3/1d SLAs) computed locally so prompt injection cannot reorder the queue.',
      'Seamless offline keyword rule-based fallback mode that takes over when network is down or API limits are reached.',
      'Template-based routing mapping each ticket category to team queues with actionable next steps and escalation flags.'
    ],
    architecture:
      'Decoupled classification pipeline: LLM generates structured JSON under explicit <message> tag isolation, while SLA priority scoring is 100% deterministic local code. Includes automated regression test suite built on native node:test without heavy external dependencies.',
    changelog: [
      { version: 'v1.2', date: 'Oct 2026', notes: 'Implemented prompt-injection hardening and deterministic SLA urgency scoring.' },
      { version: 'v1.0', date: 'Sep 2026', notes: 'Initial launch with Groq Llama 3.3 70B inference and rule-based fallback.' }
    ],
    retrospective: {
      win: 'Separating urgency scoring from LLM output ensured that malicious or jailbroken messages can never tamper with the ticket queue order.',
      tradeoff: 'Client-side API keys work well for local development; transitioning production version to a Node backend proxy.'
    },
    screenshots: [
      {
        title: 'AI Message Triage & SLA Queue Router',
        description: 'Instant classification into P0 Critical to P3 Low with impact signal extraction and team routing.',
        mockupType: 'ai-chat'
      },
      {
        title: 'Impact Signal Scoring Matrix',
        description: 'Deterministic scoring breakdown displaying outages, money at risk, and deadline signals.',
        mockupType: 'dashboard'
      }
    ]
  },
  {
    id: 'clone-project-sylvia',
    title: "Sylvia's Restaurant & Reservations",
    subtitle: 'Faithful Brand Clone with Postgres Event Booking Engine',
    category: 'Web & Hospitality',
    shelf: 'weekend-builds',
    status: 'v1.1 Live',
    buildTime: '2 Weeks',
    role: 'Solo Builder',
    stack: ['Next.js 16', 'PostgreSQL', 'SQL', 'Zod', 'Tailwind CSS', 'node-postgres'],
    liveUrl: 'https://github.com/Kamal-Mohamed10/clone-project-sylvia',
    repoUrl: 'https://github.com/Kamal-Mohamed10/clone-project-sylvia',
    iconGradient: ['#e11d48', '#f97316'],
    iconName: 'Utensils',
    accentColor: '#f43f5e',
    highlightStat: { label: 'Backend', value: 'Next.js 16 + Postgres' },
    metrics: {
      speed: 'Zero layout shifts',
    },
    problem:
      'Hospitality event pages often rely on clunky third-party iframe widgets that break brand styling, load slowly, and fail to capture party-size preferences accurately.',
    solution: [
      'Faithful reconstruction of Sylvia\'s historic Harlem restaurant events experience with native Next.js 16 App Router.',
      'Dynamic Pinboard, Agenda, and Calendar grid views hydrated directly from Postgres rows.',
      'Native reservation modal hosting a party-size booking form that executes Zod-validated parameterized SQL inserts.',
      'Health check endpoint (GET /api/health) verifying database connectivity and event availability.'
    ],
    architecture:
      'Server components query PostgreSQL via node-postgres (pg) with connection pooling. The reservation API route validates payloads with Zod and issues parameterized SQL queries to prevent SQL injection.',
    changelog: [
      { version: 'v1.1', date: 'Oct 2026', notes: 'Added Calendar grid generator from DB rows and party size booking validation.' },
      { version: 'v1.0', date: 'Sep 2026', notes: 'Initial clone launch with Postgres schema migration and seed scripts.' }
    ],
    retrospective: {
      win: 'Combining original vendor styling with Next.js 16 App Router achieved pixel-perfect visual fidelity while cutting page load time by 60%.',
      tradeoff: 'Managing raw SQL migrations locally required createdb setup; added a Docker Compose fallback for automated local database spinning.'
    },
    screenshots: [
      {
        title: 'Event Calendar & Party Reservation Modal',
        description: 'Interactive party-size booking interface with direct parameterized PostgreSQL persistence.',
        mockupType: 'code'
      }
    ]
  },
  {
    id: 'real-estate-project',
    title: 'Dual-Transaction Real Estate Leads',
    subtitle: 'B2B Lead Marketplace for Sell-and-Buy Homeowners',
    category: 'Real Estate',
    shelf: 'weekend-builds',
    status: 'Beta',
    buildTime: '3 Weeks',
    role: 'Solo Builder',
    stack: ['Next.js App Router', 'Supabase Auth', 'PostgreSQL', 'Mapbox', 'Tailwind CSS'],
    liveUrl: 'https://github.com/Kamal-Mohamed10/real-estate-project',
    repoUrl: 'https://github.com/Kamal-Mohamed10/real-estate-project',
    iconGradient: ['#0284c7', '#2563eb'],
    iconName: 'Home',
    accentColor: '#3b82f6',
    highlightStat: { label: 'Auth & RLS', value: 'Supabase 3-Role Model' },
    metrics: {
      speed: 'Mapbox Autocomplete',
    },
    problem:
      'Homeowners who need to sell their existing property and purchase their next home at the same time face huge coordination friction, while agents struggle to find verified double-sided commission opportunities.',
    solution: [
      'Multi-step public intake funnel (/sell-and-buy) capturing property condition, selling timeline, and target purchase specs.',
      'Mapbox address autocomplete with resilient manual-entry fallback for non-standard parcels.',
      'Supabase Row-Level Security (RLS) separating admin, agent, and lead access across profiles and unlocked_leads tables.',
      'Preliminary automated home valuation estimate based on property specs.'
    ],
    architecture:
      'Next.js App Router paired with server-side Supabase client. Postgres handles user roles, dual-transaction intake records, and privacy-safe marketplace unlock views guarded by strict RLS policies.',
    changelog: [
      { version: 'v0.9-beta', date: 'Sep 2026', notes: 'Phase 2 multi-step intake funnel and Mapbox autocomplete integration.' },
      { version: 'v0.5', date: 'Aug 2026', notes: 'Phase 1 Supabase database schema, RLS policies, and role definitions.' }
    ],
    retrospective: {
      win: 'Designing the database schema around dual-sided transactions upfront made it simple to track both sides of the deal in a single pipeline.',
      tradeoff: 'Stripe subscription billing deferred to Phase 3 in order to optimize conversion on the intake funnel first.'
    },
    screenshots: [
      {
        title: 'Sell & Buy Dual-Intake Funnel',
        description: 'Multi-step intake workflow capturing homeowner selling requirements and buying targets.',
        mockupType: 'dashboard'
      }
    ]
  },
  {
    id: 'data-visual-api',
    title: 'NYC Collisions Data Visualizer',
    subtitle: 'Live NYC Open Data Traffic Safety & Incident Analytics',
    category: 'Data Analytics',
    shelf: 'utilities',
    status: 'v1.0 Live',
    buildTime: '1.5 Weeks',
    role: 'Solo Builder',
    stack: ['JavaScript', 'NYC Open Data API (Socrata)', 'Chart.js', 'HTML5 Canvas', 'CSS3'],
    liveUrl: 'https://data-visual-api.vercel.app',
    repoUrl: 'https://github.com/Kamal-Mohamed10/data-visual-api',
    iconGradient: ['#dc2626', '#ef4444'],
    iconName: 'Activity',
    accentColor: '#ef4444',
    highlightStat: { label: 'Live Ingestion', value: '50k+ NYC Incidents' },
    metrics: {
      speed: 'Sub-second API sync',
    },
    problem:
      'Public urban safety datasets published by city agencies are trapped in massive, slow-loading CSV tables that residents, journalists, and city planners cannot easily visualize or interrogate.',
    solution: [
      'Direct REST integration with the NYC Open Data Motor Vehicle Collisions Socrata API querying 50,000+ records.',
      'Comparative factor analysis isolating Unsafe Speed vs Driver Inattention vs Alcohol Involvement.',
      'Interactive Chart.js visualizations with live data refresh and responsive mobile controls.'
    ],
    architecture:
      'Zero-dependency vanilla JavaScript client with memory-optimized data chunking. Queries Socrata SQL (SoQL) endpoints with pagination and asynchronous DOM updates.',
    changelog: [
      { version: 'v1.0', date: 'Aug 2026', notes: 'Initial public launch with factor comparison charts and live Socrata sync.' }
    ],
    retrospective: {
      win: 'Built with pure vanilla JavaScript, achieving an ultra-lean 45 KB bundle that paints instantly.',
      tradeoff: 'Browser memory limits required capping client-side active arrays to 50,000 records at a time.'
    },
    screenshots: [
      {
        title: 'NYC Collision Factor Comparison Chart',
        description: 'Interactive visualization comparing driver distraction against unsafe speed across boroughs.',
        mockupType: 'chart'
      }
    ]
  },
  {
    id: 'mvp-triage',
    title: 'Support Ticket Triage MVP',
    subtitle: 'Automated Ticket Queue Prioritization & SLA Engine',
    category: 'Productivity',
    shelf: 'utilities',
    status: 'v1.0 Live',
    buildTime: '1 Week',
    role: 'Solo Builder',
    stack: ['Python', 'Flask', 'NLP Heuristics', 'SQLite'],
    liveUrl: 'https://github.com/Kamal-Mohamed10/MVP',
    repoUrl: 'https://github.com/Kamal-Mohamed10/MVP',
    iconGradient: ['#d97706', '#f59e0b'],
    iconName: 'LifeBuoy',
    accentColor: '#f59e0b',
    highlightStat: { label: 'Efficiency', value: '< 5s Queue Sort' },
    metrics: {
      speed: 'Instant local triage',
    },
    problem:
      'Support specialists waste hours every morning triaging tickets across email, chat, and phone in endless spreadsheets without clear SLA tracking.',
    solution: [
      'Automated priority scoring algorithm detecting customer urgency markers and impact keywords.',
      'Queue categorization into Billing, Technical Support, Bug Reports, and Feature Inquiries.',
      'Persistent ticket tracking dashboard with SLA countdown notifications.'
    ],
    architecture:
      'Python Flask REST API with rule-based regex and keyword scoring engine. Data is persisted in lightweight SQLite with clean JSON serialization.',
    changelog: [
      { version: 'v1.0', date: 'Aug 2026', notes: 'Initial triage release with ticket prioritization algorithms.' }
    ],
    retrospective: {
      win: 'Cut initial ticket response classification time from 4 minutes per ticket to under 5 seconds.',
      tradeoff: 'Basic keyword scoring lacked conversational nuance, which inspired building the Groq-powered L2 Triage app.'
    },
    screenshots: [
      {
        title: 'Support Ticket SLA Prioritization Queue',
        description: 'Automated queue sorting tickets by urgency score and SLA timeline.',
        mockupType: 'dashboard'
      }
    ]
  },
  {
    id: 'sales-analysis',
    title: 'Sales Performance Analytics',
    subtitle: 'Python & SQL Revenue & Product Insights Engine',
    category: 'Data Analytics',
    shelf: 'utilities',
    status: 'v1.0 Live',
    buildTime: '1 Week',
    role: 'Solo Builder',
    stack: ['Python', 'Pandas', 'Matplotlib', 'SQL Aggregation'],
    liveUrl: 'https://github.com/Kamal-Mohamed10/sales-performance-analysis',
    repoUrl: 'https://github.com/Kamal-Mohamed10/sales-performance-analysis',
    iconGradient: ['#7c3aed', '#a855f7'],
    iconName: 'TrendingUp',
    accentColor: '#a855f7',
    highlightStat: { label: 'Data Processing', value: '100k+ Records' },
    metrics: {
      speed: 'Vectorized Pandas',
    },
    problem:
      'Retailers struggle to uncover hidden revenue trends, top-performing product cohorts, and seasonal demand drops across raw transaction logs.',
    solution: [
      'Automated data pipeline cleaning and transforming multi-year sales transactions with Pandas.',
      'SQL-style aggregation (GROUP BY, window functions, and order cohorting) identifying top revenue drivers.',
      'Visualized monthly seasonality curves and volume-margin trade-off charts.'
    ],
    architecture:
      'Structured Python analytical script utilizing vectorized Pandas operations and Matplotlib styling for executive reporting.',
    changelog: [
      { version: 'v1.0', date: 'Mar 2026', notes: 'Full sales exploratory data analysis script and visualization suite.' }
    ],
    retrospective: {
      win: 'Vectorized operations sped up processing across 100k+ transaction records from 14 seconds to under 400ms.',
      tradeoff: 'Matplotlib exports are static images; future iteration plans include interactive web dashboards.'
    },
    screenshots: [
      {
        title: 'Revenue Trend & Product Cohort Analytics',
        description: 'Seasonality analysis and revenue breakdown across product lines.',
        mockupType: 'chart'
      }
    ]
  },
  {
    id: 'helpdesk-analysis',
    title: 'IT Help Desk Ticket Analytics',
    subtitle: 'Incident Frequency & Resolution Time Modeling',
    category: 'Data Analytics',
    shelf: 'lab',
    status: 'Prototype',
    buildTime: '1 Week',
    role: 'Solo Builder',
    stack: ['Python', 'Pandas', 'Matplotlib', 'Data Science'],
    liveUrl: 'https://github.com/Kamal-Mohamed10/helpdesk-ticket-analysis',
    repoUrl: 'https://github.com/Kamal-Mohamed10/helpdesk-ticket-analysis',
    iconGradient: ['#0891b2', '#0284c7'],
    iconName: 'PieChart',
    accentColor: '#06b6d4',
    highlightStat: { label: 'Metrics', value: 'MTTR Modeling' },
    metrics: {
      speed: 'Pandas Pipeline',
    },
    problem:
      'Enterprise IT helpdesks fail to spot systemic hardware and software failure trends because tickets are closed individually without holistic cross-department analytics.',
    solution: [
      'Categorizes support workload across departments, hardware classes, and software licenses.',
      'Mean Time to Resolution (MTTR) benchmark calculations and outlier detection.',
      'Workload bottleneck identification for IT staffing allocation.'
    ],
    architecture:
      'Python data pipeline parsing helpdesk logs with statistical outlier clipping and departmental distribution histograms.',
    changelog: [
      { version: 'v0.8', date: 'Mar 2026', notes: 'Departmental ticket distribution and MTTR calculation models.' }
    ],
    retrospective: {
      win: 'Uncovered that 42% of urgent tickets were recurring printer/network driver issues that could be resolved with a one-time automated script.',
      tradeoff: 'Dataset was synthetic; real-world data requires handling messy free-text categorization.'
    },
    screenshots: [
      {
        title: 'MTTR & Departmental Ticket Heatmap',
        description: 'Resolution time benchmarks comparing hardware vs software incidents.',
        mockupType: 'chart'
      }
    ]
  },
  {
    id: 'unit-converter',
    title: 'Unit Converter',
    subtitle: 'Zero-Latency Real-Time Distance & Metric Converter',
    category: 'Productivity',
    shelf: 'lab',
    status: 'Prototype',
    buildTime: '3 Days',
    role: 'Solo Builder',
    stack: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
    liveUrl: 'https://unit-converter-amber.vercel.app',
    repoUrl: 'https://github.com/Kamal-Mohamed10/Unit-Converter',
    iconGradient: ['#0d9488', '#10b981'],
    iconName: 'Scale',
    accentColor: '#14b8a6',
    highlightStat: { label: 'Speed', value: '< 2ms Response' },
    metrics: {
      speed: '0 KB Dependencies',
    },
    problem:
      'Standard online unit converters are cluttered with intrusive ads, slow page loads, and clunky submit buttons that disrupt quick calculations.',
    solution: [
      'Bidirectional live distance conversion between kilometers and miles as the user types.',
      'Zero external dependencies, zero layout shifts, and mobile-responsive layout.'
    ],
    architecture:
      'Pure vanilla JavaScript with debounced input listeners and floating-point precision rounding.',
    changelog: [
      { version: 'v1.0', date: 'Aug 2026', notes: 'Bidirectional live converter with responsive mobile layout.' }
    ],
    retrospective: {
      win: 'Sub-2ms response time and pure offline capability.',
      tradeoff: 'Currently focuses on distance metrics; planned expansion into area and temperature units.'
    },
    screenshots: [
      {
        title: 'Bidirectional Metric Conversion Interface',
        description: 'Instant conversion between kilometers and miles with debounced live inputs.',
        mockupType: 'code'
      }
    ]
  },
  {
    id: 'zainoubia',
    title: 'Zainoubia Cafe & Lounge',
    subtitle: 'Modern Cafe Menu & Digital Brand Experience',
    category: 'Web & Hospitality',
    shelf: 'lab',
    status: 'Concept',
    buildTime: '1 Week',
    role: 'Solo Builder',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Modern Typography'],
    liveUrl: 'https://github.com/Kamal-Mohamed10/zainoubia',
    repoUrl: 'https://github.com/Kamal-Mohamed10/zainoubia',
    iconGradient: ['#b45309', '#f43f5e'],
    iconName: 'Coffee',
    accentColor: '#f59e0b',
    highlightStat: { label: 'Experience', value: 'Mobile Menu' },
    metrics: {
      speed: 'Ultra-fast CDN',
    },
    problem:
      'Boutique cafes struggle with static paper menus that cannot reflect seasonal offerings or match the warm ambiance of their physical location.',
    solution: [
      'Atmospheric digital storefront with mobile-optimized menu navigation and seasonal item spotlights.'
    ],
    architecture:
      'Responsive web design with custom CSS animations and fast CDN-cached asset delivery.',
    changelog: [
      { version: 'v0.5-concept', date: 'Sep 2026', notes: 'Brand layout prototype and interactive menu card showcase.' }
    ],
    retrospective: {
      win: 'Achieved tactile cafe aesthetic with warm tones and fluid mobile interactions.',
      tradeoff: 'Needs backend CMS integration for non-technical staff to update daily specials.'
    },
    screenshots: [
      {
        title: 'Cafe Menu & Showcase Presentation',
        description: 'Mobile-first menu browsing with seasonal drink and pastry highlights.',
        mockupType: 'code'
      }
    ]
  },
  {
    id: 'adventure-engine',
    title: 'Adventure Story Engine',
    subtitle: 'Branching Narrative Graph & State Machine',
    category: 'Productivity',
    shelf: 'lab',
    status: 'Concept',
    buildTime: '1 Week',
    role: 'Solo Builder',
    stack: ['JavaScript', 'State Graph', 'JSON Narrative DDL'],
    liveUrl: 'https://github.com/Kamal-Mohamed10/Adventure',
    repoUrl: 'https://github.com/Kamal-Mohamed10/Adventure',
    iconGradient: ['#c026d3', '#9333ea'],
    iconName: 'Compass',
    accentColor: '#a855f7',
    highlightStat: { label: 'Architecture', value: 'Finite State Graph' },
    metrics: {
      speed: 'Zero Latency',
    },
    problem:
      'Interactive branching fiction is hard to author without rigid hardcoded if/else spaghetti code that quickly becomes unmaintainable.',
    solution: [
      'Finite state machine narrative engine separating story graph nodes from rendering logic.',
      'Dynamic inventory state tracking and multiple divergent plot endings.'
    ],
    architecture:
      'Directed acyclic graph (DAG) node traversal engine maintaining player state in memory.',
    changelog: [
      { version: 'v0.1-concept', date: 'Sep 2026', notes: 'Core state machine and branching narrative node interpreter.' }
    ],
    retrospective: {
      win: 'Separating story content JSON from engine execution allowed adding 20+ story branches in minutes.',
      tradeoff: 'Needs visual node graph editor for larger branching trees.'
    },
    screenshots: [
      {
        title: 'Branching Narrative State Graph',
        description: 'Interactive choice paths leading to divergent narrative conclusions.',
        mockupType: 'code'
      }
    ]
  }
];

export const DEVELOPER_PROFILE = {
  name: 'Kamal Mohamed',
  title: 'Full-Stack Product Engineer & Systems Builder',
  tagline: 'Building real estate intelligence platforms, AI ticket triage engines, and high-performance web systems.',
  location: 'Toronto / Remote',
  status: 'Open to high-impact engineering & product roles',
  bio: 'I am a full-stack software engineer passionate about turning raw municipal datasets, LLM pipelines, and backend architectures into intuitive, installable-feeling applications. From building LeadFlow NYC to off-market deal scoring and Groq-powered AI ticket triage, I design, ship, and iterate end-to-end products.',
  github: 'https://github.com/Kamal-Mohamed10',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
  email: 'kamal.mohamed@example.com',
  coreSkills: [
    { category: 'Frontend', items: ['Next.js 16 / React 19', 'TypeScript', 'Tailwind CSS v4', 'Mapbox GL', 'HTML5 Canvas'] },
    { category: 'Backend & Data', items: ['PostgreSQL / Supabase', 'Python / Pandas', 'Node.js', 'SQL Aggregation', 'REST APIs'] },
    { category: 'AI & Systems', items: ['Groq Llama 3.3 70B', 'Deterministic SLA Urgency Scoring', 'Zod Schema Validation', 'jsPDF Reporting'] }
  ],
  experience: [
    {
      role: 'Full-Stack Product Engineer',
      company: 'Independent Engineering & Products',
      period: '2024 — Present',
      description: 'Architecting and launching LeadFlow NYC (off-market property intelligence), Customer Inbox Triage (Groq AI classifier), and full-stack web applications.'
    },
    {
      role: 'Software Engineer',
      company: 'Product & Tech Solutions',
      period: '2022 — 2024',
      description: 'Engineered high-scale web applications, data dashboards, and support ticket triage tools used for daily operational workflows.'
    }
  ]
};
