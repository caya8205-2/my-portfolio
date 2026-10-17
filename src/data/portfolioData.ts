export interface ProjectLink {
  website?: string;
  github?: string;
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
    { value: "4", label: "Flagship Systems", detail: "Noctune, innertube-rs, ERP & AVPull" }
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
  { name: "Python 3", category: "languages", role: "Generative AI pipelines, ComfyUI custom nodes, PyTorch & LoRA training", highlight: true, logoUrl: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "JavaScript", category: "languages", role: "Web standards, DOM APIs, and Node/Bun runtime scripting", logoUrl: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "PHP", category: "languages", role: "Enterprise backend services and multi-company Laravel platform", logoUrl: "https://cdn.simpleicons.org/php/777BB4" },
  { name: "SQL", category: "languages", role: "Relational modeling, complex queries, and ACID migrations", logoUrl: "https://cdn.simpleicons.org/mysql/4479A1" },
  { name: "Bash", category: "languages", role: "System automation scripts, CLI pipes, and deployment routines", logoUrl: "https://cdn.simpleicons.org/gnubash/white" },
  
  // Frameworks & Runtimes
  { name: "React", category: "frameworks", role: "Interactive component architecture and reactive web views", highlight: true, logoUrl: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Fastify", category: "frameworks", role: "Low-overhead, high-throughput asynchronous REST microservices", highlight: true, logoUrl: "https://cdn.simpleicons.org/fastify/white" },
  { name: "Tauri", category: "frameworks", role: "Lightweight native desktop runtime powered by Rust and web UI", highlight: true, logoUrl: "https://cdn.simpleicons.org/tauri/24C8D8" },
  { name: "Node.js", category: "frameworks", role: "Full-stack server runtimes, build scripts, and CLI utilities", logoUrl: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
  { name: "Bun", category: "frameworks", role: "Ultra-fast JavaScript/TypeScript runtime, bundler, and package execution", logoUrl: "https://cdn.simpleicons.org/bun/FBF0DF" },
  { name: "Tailwind CSS", category: "frameworks", role: "Utility-first design systems and OKLCH color palettes", logoUrl: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Laravel", category: "frameworks", role: "Multi-tenant enterprise ERP framework with strict permissions", logoUrl: "https://cdn.simpleicons.org/laravel/FF2D20" },
  
  // AI, Agents & Generative AI
  { name: "ComfyUI", category: "ai-agents", role: "Node-based visual workflow automation for advanced image diffusion", highlight: true, logoUrl: "https://cdn.simpleicons.org/diagramsdotnet/F08705" },
  { name: "SDXL / Illustrious", category: "ai-agents", role: "Latent diffusion model fine-tuning, checkpoint evaluation & styling", highlight: true, logoUrl: "https://cdn.simpleicons.org/stabilityai/white" },
  { name: "LoRA Training", category: "ai-agents", role: "Dataset curation, caption tagging, and LoRA weight training on Google Colab", highlight: true, logoUrl: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
  { name: "MCP Protocol", category: "ai-agents", role: "Model Context Protocol servers exposing structured tool APIs to agents", highlight: true, logoUrl: "https://cdn.simpleicons.org/anthropic/white" },
  { name: "Hermes Agent", category: "ai-agents", role: "Autonomous execution layer & Hermes agent harness by Nous Research", highlight: true, logoUrl: "/hermes-logo.svg" },
  { name: "LLM Gateways", category: "ai-agents", role: "Multi-provider streaming for Groq, Anthropic, Gemini, and OpenAI", logoUrl: "https://cdn.simpleicons.org/groq/F55036" },
  { name: "Prompt Engineering", category: "ai-agents", role: "Structured JSON schema enforcement and system prompt architecture", logoUrl: "https://cdn.simpleicons.org/json/white" },

  // Data & ORM
  { name: "PostgreSQL", category: "databases", role: "Relational persistence, multi-tenant isolation, and integrity", logoUrl: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "SQLite", category: "databases", role: "Embedded local-first storage with zero latency and instant start", highlight: true, logoUrl: "https://cdn.simpleicons.org/sqlite/003B57" },
  { name: "Prisma", category: "databases", role: "Type-safe database ORM, schema modeling, and migrations", highlight: true, logoUrl: "https://cdn.simpleicons.org/prisma/white" },
  { name: "pgvector", category: "databases", role: "Vector embeddings and semantic retrieval for agent memory", logoUrl: "https://cdn.simpleicons.org/postgresql/4169E1" },

  // DevOps & Tooling
  { name: "Google Colab", category: "devops", role: "Cloud GPU environment for PyTorch, Kohya, and LoRA model fine-tuning", highlight: true, logoUrl: "https://cdn.simpleicons.org/googlecolab/F9AB00" },
  { name: "Git", category: "devops", role: "Distributed version control, branching strategies, and CI workflows", logoUrl: "https://cdn.simpleicons.org/git/F05032" },
  { name: "FFmpeg", category: "devops", role: "Audio/video stream extraction, format transcoding, and batch remuxing", highlight: true, logoUrl: "https://cdn.simpleicons.org/ffmpeg/007808" },
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
    desc: "Local-first desktop music player combining Spotify metadata discovery, YouTube stream resolution, synced lyrics, autoqueue intelligence, and background audio prefetching in a native Tauri + Rust app.",
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
    desc: "Asynchronous pure Rust port of YouTube.js (InnerTube client). Eliminates heavy Node.js sidecars and yt-dlp subprocesses, providing native format resolution, signature deciphering, and async Tokio streams.",
    tags: ["Rust", "Tokio", "Reqwest", "Cipher Decipher", "Async Streams", "Open Source"],
    status: "Featured Production System",
    year: "2026",
    links: {
      github: "https://github.com/caya8205-2/innertube-rs"
    },
    caseStudy: "innertube-rs",
    bentoSpan: "wide",
    metrics: { label: "Flagship", value: "Zero Subprocess Overhead" },
    isFeatured: true
  },
  // 3. Featured Flagship: ERP Tumbuh
  {
    id: "erp-tumbuh",
    num: "03",
    name: "ERP Tumbuh",
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
  // 4. Featured Flagship: AVPull
  {
    id: "avpull",
    num: "04",
    name: "AVPull",
    category: "cli-tools",
    categoryLabel: "CLI Media Transcoder",
    desc: "Open-source CLI for downloading and transcoding YouTube audio/video into MP3, WAV, MP4, and WebM. Bundles FFmpeg with interactive command prompts, batch downloads, and npm distribution.",
    tags: ["TypeScript", "Node.js", "Bun", "CLI", "FFmpeg", "youtubei.js", "npm Package"],
    status: "Featured Production System",
    year: "2026",
    links: {
      website: "https://caya8205-2.github.io/avpull",
      github: "https://github.com/caya8205-2/avpull"
    },
    caseStudy: "avpull",
    previewImage: "/avpull/avpull-help.webp",
    bentoSpan: "wide",
    metrics: { label: "Flagship", value: "CLI & Bundled FFmpeg" },
    isFeatured: true
  },
  // 5. ferrum-scan
  {
    id: "ferrum-scan",
    num: "05",
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
    bentoSpan: "standard",
    metrics: { label: "Performance", value: "Parallel Rayon Scan" }
  },
  // 6. Pockt
  {
    id: "pockt",
    num: "06",
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
    bentoSpan: "standard",
    metrics: { label: "Protocol", value: "MCP Agent Adapter" }
  },
  // 7. nara
  {
    id: "nara",
    num: "07",
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
  // 8. crewctl
  {
    id: "crewctl",
    num: "08",
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
  // 9. Planify
  {
    id: "planify",
    num: "09",
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
    bentoSpan: "standard",
    metrics: { label: "Output", value: "PRD & Architecture Specs" }
  },
  // 10. ai-platform
  {
    id: "ai-platform",
    num: "10",
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
  // 11. capcay-llm
  {
    id: "capcay-llm",
    num: "11",
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
  // 12. Discord Bot (Ditos)
  {
    id: "discord-bot",
    num: "12",
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
  "noctune": {
    slug: "noctune",
    name: "Noctune",
    eyebrow: "Featured Production System / Desktop Audio / 2026",
    year: "2026",
    summary: "A local-first desktop music player crafted for uninterrupted listening: discover with Spotify, stream through YouTube, and keep the upcoming audio buffer ready before the current track finishes.",
    role: "Product architect, systems engineering, and UI design",
    stack: ["TypeScript", "Tauri", "Rust", "React", "Fastify", "SQLite", "Spotify Web API", "youtubei.js"],
    challenge: "Streaming playback frequently stumbles across fragmented boundaries: audio discovery, resolving streaming source URLs, queue logic, and local caching are treated as disjointed problems. Users encounter micro-buffering, cold audio playback starts, and high memory footprints in traditional Electron-based audio apps.",
    approach: "Designed Noctune with a hybrid Tauri + Rust architecture. The desktop shell remains lightweight and responsive, while an internal Fastify service handles streaming resolution, automated background prefetch, cache learning, and synced LRC lyrics. Spotify provides structured metadata while YouTube serves as the delivery pipeline, eliminating subscription walled-gardens.",
    outcome: "A native, highly responsive desktop workspace with near-instant track switching, offline-cached favorite tracks, and an intuitive listening interface that hides underlying playback complexities.",
    architectureHighlights: [
      { title: "Predictive Prefetch", detail: "Background worker downloads and decodes next 2 tracks into an encrypted temp buffer before previous finishes." },
      { title: "Local-First Cache Learning", detail: "Tracks frequently played are retained in SQLite cache with heuristic eviction algorithms." },
      { title: "Tauri Native Shell", detail: "Zero-bloat memory footprint (<85MB RAM vs 600MB+ in Electron competitors)." }
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
    summary: "An asynchronous, pure Rust port of YouTube.js (InnerTube internal API client), built to eliminate heavy Node.js runtimes and CLI subprocesses across desktop media tools.",
    role: "Port author and maintainer",
    stack: ["Rust", "Tokio", "Reqwest", "Serde", "Cipher Decipher", "Async Streaming"],
    challenge: "Personal media software like Noctune and AVPull previously relied on heavy external yt-dlp binaries or Node.js sidecars, causing cold start delays and multi-hundred-megabyte bundle sizes.",
    approach: "Reverse-engineered and ported the core InnerTube request pipeline into idiomatic async Rust using Tokio and Reqwest. Built strongly typed response parsers, signature deciphering logic, and stream multiplexers directly into an embeddable crate.",
    outcome: "A standalone, blazingly fast Rust library powering internal media tools with sub-second stream resolution and zero external runtime dependencies.",
    architectureHighlights: [
      { title: "Pure Native Rust", detail: "Zero reliance on external Python, Node.js or yt-dlp binaries." },
      { title: "Async Tokio Architecture", detail: "Non-blocking format resolution and segmented chunk streaming." },
      { title: "Embedded in Noctune", detail: "Powers local desktop playback engine seamlessly." }
    ],
    images: [],
    links: [
      { label: "View Source on GitHub ↗", href: "https://github.com/caya8205-2/innertube-rs" }
    ]
  },
  "erp-tumbuh": {
    slug: "erp-tumbuh",
    name: "ERP Tumbuh",
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
      { title: "End-to-End Workflow Pipeline", detail: "Automated progression from price quotation to delivery logistics and formal invoicing." },
      { title: "Auditing & Traceability", detail: "Every state transition and permission change is recorded in immutable audit logs." }
    ],
    images: [],
    showcases: [
      {
        title: "Setup Dashboard",
        description: "Operational launchpad tracking company configuration, quick actions, and setup status.",
        images: [{ src: "/erp-tumbuh/erp-setup-dashboard.webp", alt: "ERP setup dashboard" }],
        featured: true
      },
      {
        title: "Go Live & Financial Books",
        description: "Guided go-live flow establishing fiscal years, ledger boundaries, and account charts.",
        images: [
          { src: "/erp-tumbuh/erp-golive.webp", alt: "ERP go live setup" },
          { src: "/erp-tumbuh/erp-financial-book.webp", alt: "ERP financial book setup" }
        ]
      },
      {
        title: "Business Identity Setup",
        description: "Multi-step configuration capturing corporate legal names, tax IDs, and branch locations.",
        images: [{ src: "/erp-tumbuh/erp-identitas-bisnis.webp", alt: "ERP business identity setup" }]
      },
      {
        title: "Supplier Quotation (SPH)",
        description: "Structured workflow creating supplier price quotations with real-time tax calculations.",
        images: [
          { src: "/erp-tumbuh/erp-create-sph.webp", alt: "ERP create supplier price quotation" },
          { src: "/erp-tumbuh/erp-sph-draft.webp", alt: "ERP supplier price quotation list" },
          { src: "/erp-tumbuh/erp-sph-preview.webp", alt: "ERP supplier price quotation print preview" }
        ]
      },
      {
        title: "Sales & Delivery Orders",
        description: "Seamless progression from confirmed sales order to warehouse packaging and shipment manifest.",
        images: [
          { src: "/erp-tumbuh/erp-create-so.webp", alt: "ERP create sales order" },
          { src: "/erp-tumbuh/erp-create-do.webp", alt: "ERP create delivery order" },
          { src: "/erp-tumbuh/erp-do-preview.webp", alt: "ERP delivery order print preview" }
        ]
      },
      {
        title: "Commercial Invoicing",
        description: "Multi-step invoice generation with accounting integration and printable tax receipts.",
        images: [
          { src: "/erp-tumbuh/erp-create-invoice.webp", alt: "ERP create invoice step 1" },
          { src: "/erp-tumbuh/erp-create-invoice-2.webp", alt: "ERP create invoice step 2" },
          { src: "/erp-tumbuh/erp-invoice-preview.webp", alt: "ERP customer invoice print preview" }
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
    summary: "A compact command-line tool for pulling audio or video into the exact format and bitrate needed without requiring external downloader binaries.",
    role: "Creator and maintainer",
    stack: ["TypeScript", "Node.js", "Bun", "Commander.js", "youtubei.js", "FFmpeg", "npm Package"],
    challenge: "Downloading and transcoding media usually involves juggling fragile web scripts or complex command-line syntax with disparate tools.",
    approach: "Engineered an all-in-one CLI leveraging youtubei.js for fast InnerTube stream extraction and bundled FFmpeg for automatic conversion to MP3, WAV, MP4, and WebM. Included interactive prompts for casual users and batch flags for power users.",
    outcome: "Published on npm with an interactive landing page and single-command installation across macOS, Linux, and Windows.",
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
