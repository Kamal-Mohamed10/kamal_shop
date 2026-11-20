# kPhone 16 Pro • KamalOS App Store — Personal Portfolio

> An interactive iPhone showcase running **KamalOS 18** with a translucent **Liquid Glass** material system and water-ripple physics. The device fits 100% within the viewport with zero outer window scrolling, allowing users to surf through end-to-end builds (flagship products, developer utilities, and experimental systems) just like holding an actual iPhone.

![Liquid Glass App Store Showcase](https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80)

---

## 🌟 Overview & Product Philosophy

Traditional developer portfolios list static links and GitHub repositories that fail to communicate product thinking, architectural trade-offs, and shipping velocity. **Kamal's App Store** reframes side projects into polished, installable-feeling applications:

1. **Demonstrate Product Intuition:** Every build features clear problem statements, target user personas, versioned changelogs, and live interactive underwriting & simulation models.
2. **Flagship Visual Craft:** Completely translucent **Liquid Glass material system** with specular rim lighting, ambient light caustics, and an interactive HTML5 Canvas water-ripple engine (with `Calm`, `Active`, and `Raindrop` modes, plus automatic `prefers-reduced-motion` detection).
3. **Zero-Friction Maintenance:** Structured, decoupled TypeScript project data (`/src/data/projects.ts`) allows adding new projects in under 2 minutes without altering UI components.

---

## 🚀 Featured Products

| Application | Domain | Status | Key Stack | Core Value Proposition |
| :--- | :--- | :--- | :--- | :--- |
| **[LeadFlow NYC](https://github.com/Kamal-Mohamed10/lead-flow)** | Real Estate | `v1.4 Live` | Next.js 16, Supabase, Mapbox, ACRIS/DOF | NYC off-market property intelligence pairing ACRIS deeds and DOF valuations with 0–100 distress scoring |
| **[Customer Inbox Triage](https://github.com/Kamal-Mohamed10/l2-triage)** | AI / Systems | `v1.2 Live` | React, Groq API (Llama 3.3 70B), node:test | Dual-stage ticket classification with deterministic SLA urgency scoring and prompt injection hardening |
| **[Sylvia's Restaurant Clone](https://github.com/Kamal-Mohamed10/clone-project-sylvia)** | Web & Hospitality | `v1.1 Live` | Next.js 16, PostgreSQL, Zod, SQL | Faithful Harlem restaurant clone with native Postgres event reservation booking engine |
| **[Real Estate Lead Marketplace](https://github.com/Kamal-Mohamed10/real-estate-project)** | Real Estate | `Beta` | Next.js, Supabase RLS, Mapbox | B2B lead marketplace MVP for homeowners selling and buying properties at the same time |
| **[NYC Collisions Visualizer](https://github.com/Kamal-Mohamed10/data-visual-api)** | Data Analytics | `v1.0 Live` | JavaScript, Chart.js, NYC Open Data | Live urban collision data exploration querying NYC Open Data Socrata APIs across 50,000+ records |
| **[Support Ticket Triage MVP](https://github.com/Kamal-Mohamed10/MVP)** | Productivity | `v1.0 Live` | Python, Flask, NLP Heuristics, SQLite | SLA-aware ticket queue prioritization cutting morning triage times from minutes to seconds |
| **[Sales Performance Analytics](https://github.com/Kamal-Mohamed10/sales-performance-analysis)** | Data Analytics | `v1.0 Live` | Python, Pandas, Matplotlib, SQL | Revenue trend and cohort analysis engine processing 100k+ transaction records |
| **[IT Help Desk Analytics](https://github.com/Kamal-Mohamed10/helpdesk-ticket-analysis)** | Data Analytics (Lab) | `Prototype` | Python, Pandas, Matplotlib | Mean Time to Resolution (MTTR) benchmark calculations and workload bottleneck modeling |
| **[Unit Converter](https://github.com/Kamal-Mohamed10/Unit-Converter)** | Productivity (Lab) | `Prototype` | JavaScript, HTML5, CSS3 | Instant bidirectional metric converter with zero dependencies and sub-2ms response time |
| **[Zainoubia Cafe](https://github.com/Kamal-Mohamed10/zainoubia)** | Web (Lab) | `Concept` | HTML5, CSS3, Modern Typography | Atmospheric cafe digital storefront with mobile-optimized menu navigation |
| **[Adventure Engine](https://github.com/Kamal-Mohamed10/Adventure)** | State Graph (Lab) | `Concept` | JavaScript, DAG Graph, State Machine | Finite state machine branching narrative engine with inventory state tracking |

---

## 🛠️ Key Architectural Features

### 1. Storefront Navigation & Shelves
- **Discover:** Curated landing page featuring the flagship **PropScope** hero banner, **Featured Releases**, and **Weekend Builds**.
- **All Apps:** Complete directory with domain category filters (`Real Estate`, `AI`, `DevTools`, `FinTech`, `Spatial`) and instant tech stack tag filters.
- **In The Lab:** Experimental staging ground for prototypes and works-in-progress with live status badges (`In Progress`, `Prototype`, `Concept`).
- **Developer Profile:** Full builder bio, proficiencies matrix, work history, and one-click printable/PDF resume view.

### 2. Standardized App Store Product Sheet
Clicking any card or `OPEN / GET` button opens an App Store product sheet:
- **Header Block:** Squircle app icon, title, value proposition, solid high-contrast `Open Live App ↗` CTA, and `Source Code` link.
- **Interactive Install:** Interactive `GET / OPEN` button with celebratory confetti animations and session persistence.
- **Metadata Strip:** Status, Role (`Solo Builder`), Core Stack, and Build Time.
- **Interactive Media Carousel:** Real estate underwriter with live reactive sliders (adjust purchase price, rent, interest rate, and down payment to see Cap Rate, NOI, and DSCR update in real-time).
- **Tabbed Case Study:** The Problem, The Solution & Outcomes, and Under the Hood architecture.
- **What's New (Changelog):** Versioned release notes demonstrating post-launch iteration velocity.
- **Builder's Retrospective:** Candid technical wins and architectural constraints.

### 3. Liquid Glass & Water Physics
- **HTML5 `<canvas>` Ripple Engine:** Custom mathematical concentric wave propagation with dampening and specular highlights.
- **Performance Budget:** 60fps capped loop with active ripples throttled to `max <= 25` to guarantee zero jank and high Lighthouse performance (> 90).
- **Interactive Controls:** Toggle between `Calm`, `Active`, `Raindrop`, or `Off` ripple intensities, alongside Light/Dark themes.

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js 18+ (tested on Node 20 / 22 / 26)
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/Kamal-Mohamed10/kamal_shop.git
cd kamal_shop

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to experience the App Store.

### Building for Production

```bash
npm run build
npm run start
```

---

## 📂 Project Structure

```
kamal_shop/
├── src/
│   ├── app/
│   │   ├── globals.css          # Liquid glass styles & scrollbars
│   │   ├── layout.tsx           # SEO metadata, typography, and theme provider
│   │   └── page.tsx             # Root storefront orchestrator
│   ├── components/
│   │   ├── AllAppsView.tsx       # Filterable app directory with stack pills
│   │   ├── AppCard.tsx           # App Store shelf card with squircle icon & GET CTA
│   │   ├── AppModal.tsx          # Standardized product sheet modal
│   │   ├── BottomTabBar.tsx      # Mobile glass navigation dock
│   │   ├── CommandPalette.tsx    # ⌘K instant search & shortcut palette
│   │   ├── DeveloperProfileView.tsx # Builder bio, skill matrix & experience
│   │   ├── DiscoverView.tsx      # Curated hero banner & featured shelves
│   │   ├── GithubIcon.tsx        # Crisp SVG GitHub icon
│   │   ├── Header.tsx            # Sticky liquid glass header with physics toggles
│   │   ├── HeroBanner.tsx        # Flagship hero spotlight card
│   │   ├── InTheLabView.tsx      # Experimental staging ground
│   │   ├── InteractiveMockup.tsx # Live interactive real estate underwriter & simulators
│   │   ├── ResumeModal.tsx       # Printable / PDF resume previewer
│   │   ├── Sidebar.tsx           # Desktop App Store sidebar
│   │   ├── SquircleIcon.tsx      # Apple-grade squircle icon with specular rim
│   │   └── WaterRippleCanvas.tsx # 60fps HTML5 Canvas water-ripple physics engine
│   ├── data/
│   │   └── projects.ts           # Decoupled project schema & developer profile
│   └── types/
│       └── project.ts            # TypeScript interfaces (Project, Shelf, Changelog)
├── package.json
└── tsconfig.json
```

---

## 📄 License

MIT © [Kamal Mohamed](https://github.com/Kamal-Mohamed10)
