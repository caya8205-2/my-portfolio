export interface ProjectLink {
  website?: string;
  github?: string;
  crates?: string;
  npm?: string;
  playstore?: string;
  appstore?: string;
}

export type ProjectCategory = 'all' | 'ai-agents' | 'systems-rust' | 'web-apps' | 'cli-tools';

export interface Project {
  id: string;
  num: string;
  name: string;
  category: 'ai-agents' | 'systems-rust' | 'web-apps' | 'cli-tools';
  categoryLabel: string;
  desc: string;
  tags: string[];
  status: string;
  year: string;
  links: ProjectLink;
  caseStudy?: string;
  previewImage?: string;
  bentoSpan?: 'hero' | 'wide' | 'tall' | 'standard';
  metrics?: { label: string; value: string };
  isFeatured?: boolean;
  featuredLabel?: string;
}

export interface Screenshot {
  src: string;
  alt: string;
  caption?: string;
}

export interface Showcase {
  title: string;
  description: string;
  images: Screenshot[];
  featured?: boolean;
}

export interface CaseStudy {
  slug: string;
  name: string;
  eyebrow: string;
  year: string;
  summary: string;
  role: string;
  status?: string;
  stack: string[];
  challenge: string;
  approach: string;
  outcome: string;
  architectureHighlights?: { title: string; detail: string }[];
  images: { src: string; alt: string; caption: string }[];
  showcases?: Showcase[];
  links?: { label: string; href: string }[];
}

export interface TechItem {
  name: string;
  category: 'languages' | 'frameworks' | 'ai-agents' | 'databases' | 'devops';
  role: string;
  highlight?: boolean;
  logoUrl?: string;
  badgeUrl?: string;
}

export const PROFILE_DATA = {
  name: "Heryana Romansyah P.",
  title: "Software Engineer — R&D",
  company: "Banyumedia Digital",
  location: "Yogyakarta, ID",
  timezone: "WIB (UTC+7)",
  openToRemote: true,
  email: "yannz.2005@gmail.com",
  github: "https://github.com/caya8205-2",
  cvUrl: "/CV-Heryana-Romansyah.pdf",
  bioHeadline: "Crafting resilient systems, autonomous AI agents & high-throughput software.",
  bioSub: "Full-stack engineer specializing in TypeScript, Rust systems, generative AI pipelines (ComfyUI, SDXL, LoRA), and agentic automation (MCP, Hermes) with low-latency architectures.",
  stats: [
    { value: "3+", label: "Years Engineering", detail: "R&D and production systems" },
    { value: "12+", label: "Shipped Projects", detail: "Apps, CLI tools & crates" },
    { value: "100%", label: "Strictly Typed", detail: "TypeScript & Rust type-safety" },
    { value: "5", label: "Flagship Systems", detail: "Noctune, innertube-rs, Agentic BOS, ERP & AVPull" }
  ],
  principles: [
    {
      number: "01",
      title: "Local-First & Low Latency",
      description: "Software should feel instantaneous and continue working without internet dependencies. Persistence, SQLite, and smart caching layers are designed for zero friction."
    },
    {
      number: "02",
      title: "Deterministic AI Agents & GenAI",
      description: "Integrating LLMs and diffusion models requires rigid protocol boundaries. Using MCP servers, Hermes agent harnesses, and automated ComfyUI/LoRA workflows produces reliable outputs."
    },
    {
      number: "03",
      title: "Zero-Overhead Systems",
      description: "Leveraging Rust and Tokio for high-throughput I/O eliminates heavy subprocess overhead and resource bloat across desktop and CLI environments."
    }
  ]
};

export const TECH_CATEGORIES = [
  { id: 'all', label: 'All Technologies' },
  { id: 'languages', label: 'Languages' },
  { id: 'frameworks', label: 'Frameworks & Runtimes' },
  { id: 'ai-agents', label: 'AI, Agents & GenAI' },
  { id: 'databases', label: 'Data & ORM' },
  { id: 'devops', label: 'DevOps & Tooling' }
] as const;

export const TECH_STACK: TechItem[] = [
  // Languages
  { name: "TypeScript", category: "languages", role: "Primary language for full-stack apps, MCP servers, and strict SDKs", highlight: true, logoUrl: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "Rust", category: "languages", role: "CLI tools, native crates, and low-latency Tauri backend", highlight: true, logoUrl: "https://cdn.simpleicons.org/rust/DEA584" },
  { name: "Python 3", category: "languages", role: "Generative AI pipelines, ComfyUI custom nodes, PyTorch & LoRA training", logoUrl: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "JavaScript", category: "languages", role: "Web standards, DOM APIs, and Node/Bun runtime scripting", highlight: true, logoUrl: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "PHP", category: "languages", role: "Enterprise backend services and multi-company Laravel platform", logoUrl: "https://cdn.simpleicons.org/php/777BB4" },
  { name: "SQL", category: "languages", role: "Relational modeling, complex queries, and ACID migrations", logoUrl: "https://cdn.simpleicons.org/mysql/4479A1" },
  { name: "Bash", category: "languages", role: "System automation scripts, CLI pipes, and deployment routines", logoUrl: "https://cdn.simpleicons.org/gnubash/white" },
  
  // Frameworks & Runtimes
  { name: "React", category: "frameworks", role: "Interactive component architecture and reactive web views", highlight: true, logoUrl: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Fastify", category: "frameworks", role: "Low-overhead, high-throughput asynchronous REST microservices", logoUrl: "https://cdn.simpleicons.org/fastify/white" },
  { name: "Tauri", category: "frameworks", role: "Lightweight native desktop runtime powered by Rust and web UI", highlight: true, logoUrl: "https://cdn.simpleicons.org/tauri/24C8D8" },
  { name: "Node.js", category: "frameworks", role: "Full-stack server runtimes, build scripts, and CLI utilities", logoUrl: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
  { name: "Bun", category: "frameworks", role: "Ultra-fast JavaScript/TypeScript runtime, bundler, and package execution", highlight: true, logoUrl: "https://cdn.simpleicons.org/bun/FBF0DF" },
  { name: "Tailwind CSS", category: "frameworks", role: "Utility-first design systems and OKLCH color palettes", logoUrl: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Laravel", category: "frameworks", role: "Multi-tenant enterprise ERP framework with strict permissions", logoUrl: "https://cdn.simpleicons.org/laravel/FF2D20" },
  
  // AI, Agents & Generative AI
  { name: "ComfyUI", category: "ai-agents", role: "Node-based visual workflow automation for advanced image diffusion", highlight: true, logoUrl: "https://cdn.simpleicons.org/diagramsdotnet/F08705" },
  { name: "SDXL / Illustrious", category: "ai-agents", role: "Latent diffusion model fine-tuning, checkpoint evaluation & styling", highlight: true, logoUrl: "https://cdn.simpleicons.org/stabilityai/white" },
  { name: "LoRA Training", category: "ai-agents", role: "Dataset curation, caption tagging, and LoRA weight training on Google Colab", highlight: true, logoUrl: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
  { name: "MCP Protocol", category: "ai-agents", role: "Model Context Protocol servers exposing structured tool APIs to agents", highlight: true, logoUrl: "https://cdn.simpleicons.org/anthropic/white" },
  { name: "Hermes Agent", category: "ai-agents", role: "Autonomous execution layer & Hermes agent harness by Nous Research", highlight: true, logoUrl: "/hermes-logo.svg" },

  // Data & ORM
  { name: "PostgreSQL", category: "databases", role: "Relational persistence, multi-tenant isolation, and integrity", logoUrl: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "SQLite", category: "databases", role: "Embedded local-first storage with zero latency and instant start", highlight: true, logoUrl: "https://cdn.simpleicons.org/sqlite/003B57" },
  { name: "Prisma", category: "databases", role: "Type-safe database ORM, schema modeling, and migrations", logoUrl: "https://cdn.simpleicons.org/prisma/white" },
  { name: "pgvector", category: "databases", role: "Vector embeddings and semantic retrieval for agent memory", logoUrl: "https://cdn.simpleicons.org/postgresql/4169E1" },

  // DevOps & Tooling
  { name: "Google Colab", category: "devops", role: "Cloud GPU environment for PyTorch, Kohya, and LoRA model fine-tuning", highlight: true, logoUrl: "https://cdn.simpleicons.org/googlecolab/F9AB00" },
  { name: "Git", category: "devops", role: "Distributed version control, branching strategies, and CI workflows", highlight: true, logoUrl: "https://cdn.simpleicons.org/git/F05032" },
  { name: "Docker", category: "devops", role: "Containerized reproducible development and testing environments", logoUrl: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "Turborepo", category: "devops", role: "High-performance monorepo build caching and task pipelines", logoUrl: "https://cdn.simpleicons.org/turborepo/EF4444" },
  { name: "Vitest", category: "devops", role: "Fast unit and integration test runner for TypeScript codebases", logoUrl: "https://cdn.simpleicons.org/vitest/6E9F18" }
];

export const PROJECTS: Project[] = [
  // 1. Featured Flagship: Noctune
  {
    id: "noctune",
    num: "01",
    name: "Noctune",
    category: "systems-rust",
    categoryLabel: "Desktop System & Music",
    desc: "A local-first desktop player born from a simple goal: game on a RAM-limited PC while listening to Neuro-sama karaoke clips without adding another browser window. Noctune pairs Spotify metadata with YouTube playback in a native Tauri app.",
    tags: ["Tauri", "Rust", "TypeScript", "React", "Fastify", "SQLite", "Spotify API"],
    status: "Featured Production System",
    year: "2026",
    links: {
      website: "https://noctune.web.id",
      github: "https://github.com/caya8205-2/noctune"
    },
    caseStudy: "noctune",
    previewImage: "/noctune/noctune-full-player.webp",
    bentoSpan: "hero",
    metrics: { label: "Flagship", value: "Tauri + Rust + SQLite" },
    isFeatured: true
  },
  // 2. Featured Flagship: innertube-rs
  {
    id: "innertube-rs",
    num: "02",
    name: "innertube-rs",
    category: "systems-rust",
    categoryLabel: "Rust Core Crate",
    desc: "A strict 1:1 Rust port of YouTube.js' InnerTube client, built for Noctune's roadmap to move its primary playback backend into Rust, with performance as a goal. It preserves the source library's behavior.",
    tags: ["Rust", "Tokio", "Reqwest", "Cipher Decipher", "Async Streams", "Open Source"],
    status: "Featured Production System",
    year: "2026",
    links: {
      github: "https://github.com/caya8205-2/innertube-rs",
      crates: "https://crates.io/crates/innertube-rs"
    },
    caseStudy: "innertube-rs",
    bentoSpan: "standard",
    metrics: { label: "Porting Goal", value: "1:1 YouTube.js Parity" },
    isFeatured: true
  },
  // 3. Featured Project: Agentic BOS
  {
    id: "agentic-bos",
    num: "03",
    name: "Agentic BOS",
    category: "web-apps",
    categoryLabel: "Business Platform",
    desc: "An in-development business platform that adapts workflows to different companies while keeping their data and access separate. It is also being built to connect Hermes agents to business tools each company has approved.",
    tags: ["Node.js", "Express 5", "React", "TypeScript", "Multi-company", "Hermes"],
    status: "In Development",
    featuredLabel: "Featured Project · In Development",
    year: "2026",
    links: {},
    caseStudy: "agentic-bos",
    bentoSpan: "wide",
    isFeatured: true
  },
  // 4. Featured Flagship: ERP Prime
  {
    id: "erp-tumbuh",
    num: "04",
    name: "ERP Prime",
    category: "web-apps",
    categoryLabel: "Enterprise Platform",
    desc: "Internal multi-company ERP foundation with strict financial-book isolation, role-based access control, purchasing cycles, inventory movement tracking, accounts payable, and auditing.",
    tags: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Alpine.js", "Multi-Company"],
    status: "Featured Production System",
    year: "2026",
    links: {},
    caseStudy: "erp-tumbuh",
    previewImage: "/erp-tumbuh/erp-setup-dashboard.webp",
    bentoSpan: "wide",
    metrics: { label: "Flagship", value: "Multi-Company & Books" },
    isFeatured: true
  },
  // 5. Featured Flagship: AVPull
  {
    id: "avpull",
    num: "05",
    name: "AVPull",
    category: "cli-tools",
    categoryLabel: "CLI Media Transcoder",
    desc: "Open-source CLI for downloading and transcoding YouTube audio/video into MP3, WAV, MP4, and WebM. Bundles FFmpeg with interactive command prompts, batch downloads, and npm distribution.",
    tags: ["TypeScript", "Node.js", "Bun", "CLI", "FFmpeg", "youtubei.js", "npm Package"],
    status: "Featured Production System",
    year: "2026",
    links: {
      website: "https://caya8205-2.github.io/avpull",
      npm: "https://www.npmjs.com/package/avpull",
      github: "https://github.com/caya8205-2/avpull"
    },
    caseStudy: "avpull",
    previewImage: "/avpull/avpull-help.webp",
    bentoSpan: "wide",
    metrics: { label: "Flagship", value: "CLI & Bundled FFmpeg" },
    isFeatured: true
  },
  // 6. ferrum-scan
  {
    id: "ferrum-scan",
    num: "06",
    name: "ferrum-scan",
    category: "cli-tools",
    categoryLabel: "Rust Inspector CLI",
    desc: "Ultra-fast multithreaded repository scanner and health inspector built in Rust using Rayon. Inspects directories in milliseconds, detects duplicate files via SHA hashing, and reports Git health metrics.",
    tags: ["Rust", "CLI", "Rayon", "Multi-threading", "Git Analytics", "Open Source"],
    status: "Personal / Open Source",
    year: "2026",
    links: {
      github: "https://github.com/caya8205-2/ferrum-scan"
    },
    caseStudy: "ferrum-scan",
    previewImage: "/ferrum-scan/ferrum-scan-demo.webp",
    bentoSpan: "wide",
    metrics: { label: "Performance", value: "Parallel Rayon Scan" }
  },
  // 7. Pockt
  {
    id: "pockt",
    num: "07",
    name: "Pockt",
    category: "ai-agents",
    categoryLabel: "Agentic Finance",
    desc: "High-performance disposable income companion with single-owner auth, Hallmark OKLCH dual theme system, and a dedicated MCP Server adapter allowing AI agents (Hermes, Claude Code, Antigravity) to manage personal finances autonomously.",
    tags: ["TypeScript", "MCP Server", "Fastify", "Prisma", "SQLite", "Tailwind CSS"],
    status: "Personal / Open Source",
    year: "2026",
    links: {
      github: "https://github.com/caya8205-2/pockt"
    },
    caseStudy: "pockt",
    previewImage: "/pockt/dashboard-dark.webp",
    bentoSpan: "hero",
    metrics: { label: "Protocol", value: "MCP Agent Adapter" }
  },
  // 8. nara
  {
    id: "nara",
    num: "08",
    name: "nara",
    category: "ai-agents",
    categoryLabel: "Local-First Agent",
    desc: "Operational assistant for task management, automated scheduling, reporting, and workflow automation. Pairs a self-hosted TypeScript backend with mobile clients and a Hermes-powered agent simulation harness.",
    tags: ["Hermes Agent", "AI Agent", "TypeScript", "PostgreSQL", "Fastify", "pgvector"],
    status: "Personal / R&D",
    year: "2026",
    links: {
      github: "https://github.com/caya8205-2/nara"
    },
    bentoSpan: "standard",
    metrics: { label: "Architecture", value: "Hermes + pgvector" }
  },
  // 9. crewctl
  {
    id: "crewctl",
    num: "09",
    name: "crewctl",
    category: "ai-agents",
    categoryLabel: "Agent Orchestration",
    desc: "State-driven orchestration engine for software engineering agents. Coordinates planner, implementer, auditor, and QC workflows through deterministic state transitions and an MCP server interface.",
    tags: ["AI Orchestration", "Coding Agents", "Hermes", "TypeScript", "State Machine", "MCP Server"],
    status: "Personal / Open Source",
    year: "2026",
    links: {
      github: "https://github.com/caya8205-2/crewctl"
    },
    bentoSpan: "standard",
    metrics: { label: "Coordination", value: "State-Driven Engine" }
  },
  // 10. Planify
  {
    id: "planify",
    num: "10",
    name: "Planify",
    category: "ai-agents",
    categoryLabel: "Software Spec AI",
    desc: "AI-powered project documentation platform generating structured PRD, SRS, user flows, and architecture diagrams using modular LLM prompt engineering, coin quota system, and PDF exporter.",
    tags: ["TypeScript", "Supabase", "LLM APIs", "Markdown Engine", "PDF Generation"],
    status: "Team Project",
    year: "2025",
    links: {
      github: "https://github.com/yudha556/planify"
    },
    bentoSpan: "hero",
    metrics: { label: "Output", value: "PRD & Architecture Specs" }
  },
  // 11. ai-platform
  {
    id: "ai-platform",
    num: "11",
    name: "ai-platform",
    category: "ai-agents",
    categoryLabel: "LLM Gateway",
    desc: "Unified LLM gateway monorepo providing standardized interfaces for Groq, Anthropic, and OpenAI. Features persistent chat playground, async tasks, and real-time token telemetry dashboard.",
    tags: ["TypeScript", "Express", "React", "Recharts", "LLM Gateway"],
    status: "Personal",
    year: "2026",
    links: {
      github: "https://github.com/caya8205-2/ai-platform"
    },
    bentoSpan: "standard",
    metrics: { label: "Telemetry", value: "Unified LLM Gateway" }
  },
  // 12. capcay-llm
  {
    id: "capcay-llm",
    num: "12",
    name: "capcay-llm",
    category: "ai-agents",
    categoryLabel: "NPM Package",
    desc: "Lightweight isomorphic LLM client package providing a single TypeScript interface for Groq, Anthropic, and OpenAI with streaming, provider-aware error handling, and robust retry logic.",
    tags: ["TypeScript", "npm Package", "Streaming", "Groq", "Anthropic", "OpenAI"],
    status: "Personal / Open Source",
    year: "2026",
    links: {
      github: "https://github.com/caya8205-2/capcay-llm"
    },
    bentoSpan: "standard",
    metrics: { label: "Distribution", value: "Published TypeScript SDK" }
  },
  // 13. Discord Bot (Ditos)
  {
    id: "discord-bot",
    num: "13",
    name: "Discord Bot (Ditos)",
    category: "ai-agents",
    categoryLabel: "AI Persona & LoRA",
    desc: "Modular Discord bot with an AI persona, persistent conversational memory, automated dataset pipeline for LoRA fine-tuning in Google Colab, and resilient Spotify-enabled music playback.",
    tags: ["TypeScript", "Python", "Google Colab", "LoRA", "Unsloth", "Discord.js", "Spotify API"],
    status: "Personal",
    year: "2024",
    links: {
      github: "https://github.com/caya8205-2/bot-ditos"
    },
    bentoSpan: "standard",
    metrics: { label: "Fine-tuning", value: "Colab LoRA Pipeline" }
  }
];

export const CASE_STUDIES: Record<string, CaseStudy> = {
  "agentic-bos": {
    slug: "agentic-bos",
    name: "Agentic BOS",
    eyebrow: "Featured Business Platform / In Development / 2026",
    year: "2026",
    status: "In Development",
    summary: "A business operations platform in development. Each company can enable the workflows it needs while company-specific access rules keep its data separate. The platform is also being built to let Hermes agents use only the business tools each company has approved.",
    role: "Full-stack Engineer → Lead Developer",
    stack: ["Node.js", "Express 5", "React", "TypeScript", "Tailwind CSS v4", "Prisma", "Hermes"],
    challenge: "Different businesses need different workflows, but separate software for every industry is costly to maintain. The platform also needs to keep each company's records and permissions within its own boundaries.",
    approach: "Built the platform around business presets that enable capabilities as data, with company-scoped records and role-based access. The Hermes integration exposes approved business tools through authenticated, company-scoped routes.",
    outcome: "A shared foundation for configurable business workflows, with company boundaries carried through both the application and its agent integration. The project is still in development.",
    architectureHighlights: [
      { title: "Workflows that adapt", detail: "Business presets configure available capabilities without creating a separate application for each industry." },
      { title: "Separate company data", detail: "Business records and permissions stay scoped to the company that owns them." },
      { title: "Controlled agent access", detail: "Hermes agents reach business tools through authenticated routes scoped to each company." }
    ],
    images: [],
    links: []
  },
  "noctune": {
    slug: "noctune",
    name: "Noctune",
    eyebrow: "Featured Production System / Desktop Audio / 2026",
    year: "2026",
    summary: "Noctune began with a personal constraint: I wanted to game on a RAM-limited PC while listening to Neuro-sama karaoke clips—mostly found on YouTube—without adding another browser window to my always-open tabs. It grew into a local-first desktop player that pairs Spotify metadata with YouTube playback.",
    role: "Product architect, systems engineering, and UI design",
    stack: ["TypeScript", "Tauri", "Rust", "React", "Fastify", "SQLite", "Spotify Web API", "youtubei.js"],
    challenge: "My browser already had many tabs kept open, leaving less memory for games; adding browser-based music playback made that worse. Ads on Spotify and YouTube interrupted listening, while the Neuro-sama karaoke clips I wanted were on YouTube rather than Spotify. Spotify's Playback SDK also required Premium and limited free playback to 30-second previews, which did not fit the experience I wanted to build.",
    approach: "Noctune uses Spotify Web API for rich track metadata and discovery, then matches tracks to YouTube search results and resolves playback there. This brings official songs and YouTube-only karaoke clips into one queue without relying on Spotify playback. A Tauri desktop shell, local caching, background prefetch, synced lyrics, and smart autoqueue keep the experience out of a tab-heavy browser. Spotify API access began tightening in February 2026 and reached my long-standing app registration in March; I maintained Premium and the app's configured API access so listeners could use the metadata features without each needing their own Premium plan.",
    outcome: "A desktop player shaped around the original need: keep the browser closed, leave more memory for gaming, and listen to both Spotify-discovered tracks and YouTube-only karaoke clips from one place.",
    architectureHighlights: [
      { title: "Spotify Discovery, YouTube Playback", detail: "Spotify metadata helps identify tracks; YouTube provides the playable stream, including karaoke clips absent from Spotify." },
      { title: "Desktop Listening", detail: "A dedicated Tauri app keeps music playback separate from the user's tab-heavy browser session." },
      { title: "Keep the Queue Moving", detail: "Local caching and background prefetch help prepare upcoming tracks while the current one plays." }
    ],
    images: [
      { src: "/noctune/noctune-full-player.webp", alt: "Noctune full player view", caption: "The primary listening surface: seamless player controls, active queue, and album art." },
      { src: "/noctune/noctune-wrapped.webp", alt: "Noctune Wrapped listening statistics", caption: "Personalized recap: play count, top artists, listening hours, and weekday habits." },
      { src: "/noctune/noctune-matcher-debug.webp", alt: "Noctune Matcher Debug match cache", caption: "Debug surface showing source match accuracy, duration tolerances, and fallback candidates." },
      { src: "/noctune/noctune-discover-weekly.webp", alt: "Noctune Discover Weekly smart playlist", caption: "Smart playlist curation keeping fresh recommendations seamlessly integrated with player context." },
      { src: "/noctune/noctune-cache-settings.webp", alt: "Noctune cache settings", caption: "Transparent cache controls allowing users to configure cache limits and eviction strategies." }
    ],
    links: [
      { label: "Visit Noctune ↗", href: "https://noctune.web.id" },
      { label: "View Source on GitHub ↗", href: "https://github.com/caya8205-2/noctune" }
    ]
  },
  "innertube-rs": {
    slug: "innertube-rs",
    name: "innertube-rs",
    eyebrow: "Featured Production System / Rust Crate / 2026",
    year: "2026",
    summary: "A strict, full 1:1 Rust port of YouTube.js' InnerTube client. It was started to continue Noctune's roadmap toward a fully Rust app by moving its primary playback backend from YouTube.js into Rust, with performance as a goal.",
    role: "Port author and maintainer",
    stack: ["Rust", "Tokio", "Reqwest", "Serde", "Cipher Decipher", "Async Streaming"],
    challenge: "At the time, most Rust YouTube client libraries I found were outdated and could not serve as a dependable base for Noctune's planned Rust backend. Since YouTube.js already powered Noctune's primary playback path, I chose to port that client directly, preserving its behavior and API coverage one to one.",
    approach: "Ported YouTube.js directly to Rust with strict 1:1 parity: each supported behavior is carried across one to one, with no symlink shortcuts and no tolerated differences from the reference. Tokio and Reqwest provide asynchronous execution.",
    outcome: "A Rust InnerTube client forming the basis of Noctune's backend migration plan: preserve YouTube.js behavior while moving execution toward Rust and pursuing better performance.",
    architectureHighlights: [
      { title: "Strict 1:1 Parity", detail: "Carries YouTube.js behavior across one to one, with no tolerated differences from the reference." },
      { title: "Noctune Rust Roadmap", detail: "Moves the primary playback backend toward Rust as part of the plan for a fully Rust app." },
      { title: "Asynchronous Rust", detail: "Tokio and Reqwest provide asynchronous execution for the native client." }
    ],
    images: [],
    links: [
      { label: "View Source on GitHub ↗", href: "https://github.com/caya8205-2/innertube-rs" },
      { label: "View on crates.io ↗", href: "https://crates.io/crates/innertube-rs" }
    ]
  },
  "erp-tumbuh": {
    slug: "erp-tumbuh",
    name: "ERP Prime",
    eyebrow: "Featured Production System / Enterprise Platform / 2026",
    year: "2026",
    summary: "A robust multi-company Enterprise Resource Planning (ERP) platform built with financial-book isolation, audit trails, purchasing pipelines, inventory movements, and accounting foundations.",
    role: "Full-stack contributor, domain modeling & security hardening",
    stack: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Alpine.js", "Vite", "Spatie Permission"],
    challenge: "Enterprise multi-company environments require zero data leakage between business entities and financial books, while maintaining high modularity to support sales quotations, delivery orders, invoicing, and tax calculations.",
    approach: "Designed a multi-tenant isolation layer that scopes all queries, financial books, and roles strictly to the active company context. Created reusable service classes for document transitions (SPH Quotation -> Sales Order -> Delivery Order -> Tax Invoice) with immutable audit logging and print-ready previews.",
    outcome: "A hardened, production-ready internal platform that powers day-to-day enterprise operations with reliable accounting ledger integrity.",
    architectureHighlights: [
      { title: "Financial-Book Isolation", detail: "Strict database scoping ensures books and journal entries never cross company boundaries." },
      { title: "Controlled Sales Workflow", detail: "Sales quotations, orders, delivery documents, and invoices move through explicit user actions." },
      { title: "Auditing & Traceability", detail: "Activity records make important operational changes easier to trace." },
      { title: "Chat-Based ERP Operations", detail: "Users can manage supported business workflows through chat with the Hermes agent. It accesses ERP through the dedicated MCP adapter under the linked user's account, so available actions follow that account's role, permissions, and enabled capabilities." }
    ],
    images: [],
    showcases: [
      {
        title: "Setup Dashboard & Go-Live",
        description: "Track setup readiness from the dashboard and complete the guided checks before launch.",
        images: [
          { src: "/erp-prime/prime-setup-dashboard.webp", alt: "ERP Prime setup dashboard" },
          { src: "/erp-prime/prime-golive.webp", alt: "ERP Prime go-live setup" }
        ],
        featured: true
      },
      {
        title: "Financial Book & Bank Account",
        description: "Set up the financial book and connect a bank account for the company’s finance operations.",
        images: [
          { src: "/erp-prime/prime-financial-book.webp", alt: "ERP Prime financial book setup" },
          { src: "/erp-prime/prime-create-bank-account.webp", alt: "ERP Prime bank account setup" }
        ]
      },
      {
        title: "Business Identity",
        description: "Configure the business identity used across customer-facing documents and enabled operations.",
        images: [{ src: "/erp-prime/prime-create-business-identity.webp", alt: "ERP Prime business identity setup" }]
      },
      {
        title: "Sales Quotation (SPH)",
        description: "Prepare a customer-facing price offer, review its draft, and check the print preview before sending.",
        images: [
          { src: "/erp-prime/prime-SPH-create.webp", alt: "ERP Prime create a sales quotation" },
          { src: "/erp-prime/prime-SPH-draft.webp", alt: "ERP Prime sales quotation draft" },
          { src: "/erp-prime/prime-SPH-preview.webp", alt: "ERP Prime sales quotation preview" }
        ]
      },
      {
        title: "Sales & Delivery Orders",
        description: "Prepare sales and delivery order documents to carry customer and item details through fulfillment.",
        images: [
          { src: "/erp-prime/prime-SO-create.webp", alt: "ERP Prime create a sales order" },
          { src: "/erp-prime/prime-SO-draft.webp", alt: "ERP Prime sales order draft" },
          { src: "/erp-prime/prime-DO-create.webp", alt: "ERP Prime create a delivery order" },
          { src: "/erp-prime/prime-DO-draft.webp", alt: "ERP Prime delivery order draft" }
        ]
      },
      {
        title: "Customer Invoice",
        description: "Prepare and review a customer invoice before issuing the final billing document.",
        images: [
          { src: "/erp-prime/prime-INV-create.webp", alt: "ERP Prime create a customer invoice" },
          { src: "/erp-prime/prime-INV-draft.webp", alt: "ERP Prime customer invoice draft" }
        ]
      },
      {
        title: "Agent Onboarding",
        description: "The invitation link opens the ERP bot chat and passes its onboarding token to the agent. Through ERP's dedicated MCP adapter, the agent guides setup and provisions the workspace after the owner reviews and confirms. Existing users can pair manually by entering the bot's one-time code in their ERP profile.",
        images: [
          { src: "/erp-prime/prime-agent-onboard-setup.webp", alt: "ERP Prime agent onboarding invitations and setup workbench" }
        ]
      }
    ],
    links: []
  },
  "avpull": {
    slug: "avpull",
    name: "AVPull",
    eyebrow: "Featured Production System / CLI Tool / 2026",
    year: "2026",
    summary: "AVPull grew from a practical annoyance: downloading a YouTube video meant navigating pop-up ads and redirect chains on online download sites. Noctune already had a YouTube download feature, so I turned that workflow into a standalone CLI. It started with YouTube and later expanded to support multiple websites.",
    role: "Creator and maintainer",
    stack: ["TypeScript", "Node.js", "Bun", "Commander.js", "youtubei.js", "FFmpeg", "npm Package"],
    challenge: "Every YouTube download started with a trip to a website crowded with pop-up ads and redirect chains. Noctune already handled YouTube playback and downloads, but that capability was tied to the music app instead of being available as a direct, reusable tool.",
    approach: "Built AVPull as a standalone CLI from the YouTube download workflow already used in Noctune. The first version supported YouTube; the tool later grew to handle media from multiple websites, with interactive prompts, batch commands, and conversion to common formats.",
    outcome: "What began as a cleaner way to download YouTube videos became a multi-site media CLI, published on npm for use across macOS, Linux, and Windows.",
    architectureHighlights: [
      { title: "Bundled FFmpeg", detail: "Automatic cross-platform binary resolution without manual system path setup." },
      { title: "Dual Mode", detail: "Supports interactive inquirer prompts and fully scripted CI batch arguments." },
      { title: "Low-Friction Install", detail: "Available instantly via 'npm install -g avpull' or 'bun install -g avpull'." }
    ],
    images: [
      { src: "/avpull/avpull-help.webp", alt: "AVPull help menu", caption: "Clear terminal interface explaining formats, audio bitrates, and output directories." },
      { src: "/avpull/avpull-download-success.webp", alt: "AVPull successful download", caption: "Real-time download progress bar and clean completion summary." },
      { src: "/avpull/avpull-landing-page.webp", alt: "AVPull web landing page", caption: "Minimalist landing page with documentation and one-line copy commands." }
    ],
    links: [
      { label: "Visit Landing Page ↗", href: "https://caya8205-2.github.io/avpull" },
      { label: "View on npm ↗", href: "https://www.npmjs.com/package/avpull" },
      { label: "View Source on GitHub ↗", href: "https://github.com/caya8205-2/avpull" }
    ]
  },
  "pockt": {
    slug: "pockt",
    name: "Pockt",
    eyebrow: "Personal Finance & Agentic MCP System / 2026",
    year: "2026",
    summary: "A high-performance, self-hosted disposable income engine and personal finance hub with an integrated Model Context Protocol (MCP) server that empowers AI agents to monitor and execute financial tracking autonomously.",
    role: "System architecture, full-stack development, MCP server design",
    stack: ["TypeScript", "Fastify", "MCP Server SDK", "Prisma", "SQLite", "Tailwind CSS"],
    challenge: "Traditional personal finance software is bloated with complex double-entry bookkeeping that overwhelms individual users, while offering zero programmatic access for modern AI agents.",
    approach: "Architected a disposable income calculation engine in TypeScript and Fastify with Prisma on SQLite. Developed a first-class Model Context Protocol (MCP) server adapter exposing structured JSON tools so autonomous AI agents (like Hermes, Claude Code, Antigravity) connect via stdio to log transactions.",
    outcome: "An ultra-fast, privacy-first personal finance platform with single-owner security, bilingual ID/EN localization, and agent-ready autonomous capability.",
    architectureHighlights: [
      { title: "First-Class MCP Adapter", detail: "Exposes 12+ structured financial tool schemas for LLM agent function calling." },
      { title: "Disposable Income Engine", detail: "Dynamically factors pending bills, paycheck cadences, and debt amortizations in real time." },
      { title: "Strict TypeScript Safety", detail: "End-to-end typed contracts between Fastify routes and MCP tool invocations." }
    ],
    images: [],
    showcases: [
      {
        title: "Free-to-Spend Dashboard",
        description: "Instant clarity on disposable cash, monthly burn rate, and projected timeline.",
        images: [
          { src: "/pockt/dashboard-dark.webp", alt: "Pockt dashboard dark theme" },
          { src: "/pockt/dashboard-light.webp", alt: "Pockt dashboard light theme" }
        ],
        featured: true
      },
      {
        title: "Single-Owner Authentication",
        description: "Encrypted cookie session management with strict rate-limiting guards.",
        images: [
          { src: "/pockt/login-dark.webp", alt: "Pockt login dark theme" },
          { src: "/pockt/login-light.webp", alt: "Pockt login light theme" }
        ]
      },
      {
        title: "Payday Allocation Matrix",
        description: "Intelligent incoming salary allocation matrix balancing upcoming obligations.",
        images: [
          { src: "/pockt/payday-dark.webp", alt: "Pockt payday allocation dark theme" },
          { src: "/pockt/payday-light.webp", alt: "Pockt payday allocation light theme" }
        ]
      },
      {
        title: "Incomes Stream Tracking",
        description: "Granular breakdown of primary income streams, freelance revenues, and recurrences.",
        images: [
          { src: "/pockt/incomes-dark.webp", alt: "Pockt incomes dark theme" },
          { src: "/pockt/incomes-light.webp", alt: "Pockt incomes light theme" }
        ]
      }
    ],
    links: [
      { label: "View Source on GitHub ↗", href: "https://github.com/caya8205-2/pockt" }
    ]
  },
  "ferrum-scan": {
    slug: "ferrum-scan",
    name: "ferrum-scan",
    eyebrow: "Rust Performance CLI / 2026",
    year: "2026",
    summary: "Ultra-fast multithreaded repository scanner and health inspector built in Rust using Rayon. Inspects directory trees in milliseconds, pinpoints duplicate files via content hashing, and outputs Git health telemetry.",
    role: "Sole author and maintainer",
    stack: ["Rust", "Rayon", "Clap", "Walkdir", "Git2", "Chrono", "Serde"],
    challenge: "Scanning large monorepos with hundreds of thousands of files in Python or Node.js scripts takes tens of seconds and strains memory, frustrating engineers who need rapid pre-commit health checks.",
    approach: "Utilized Rust's zero-cost abstractions and Rayon's parallel work-stealing threadpool to traverse file trees, calculate streaming content hashes for duplicate detection, compute language LOC distributions, and inspect git commit churn.",
    outcome: "Achieved sub-100ms scans on repositories with over 50,000 files, delivering immediate terminal reports and clean Markdown/JSON outputs.",
    architectureHighlights: [
      { title: "Rayon Parallel Work-Stealing", detail: "Spreads directory traversal and hashing tasks evenly across all CPU cores." },
      { title: "Streaming SHA Hashing", detail: "Identifies duplicate assets with minimal RAM overhead without buffering whole files." },
      { title: "Multi-Format Export", detail: "Outputs beautiful terminal tables, CI-friendly JSON, or GitHub-ready Markdown summaries." }
    ],
    images: [
      { src: "/ferrum-scan/ferrum-scan-demo.webp", alt: "Ferrum-scan demo run", caption: "Lightning fast scan completion with full LOC distribution and language metrics." },
      { src: "/ferrum-scan/ferrum-scan-health.webp", alt: "Ferrum-scan health inspector", caption: "Storage distribution and duplicate file detector identifying redundant assets." },
      { src: "/ferrum-scan/ferrum-scan-help.webp", alt: "Ferrum-scan CLI help menu", caption: "Intuitive command-line flags for full scans, custom ignore patterns, and JSON reports." }
    ],
    links: [
      { label: "View Source on GitHub ↗", href: "https://github.com/caya8205-2/ferrum-scan" }
    ]
  }
};
