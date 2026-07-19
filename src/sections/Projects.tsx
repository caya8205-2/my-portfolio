import { useReveal } from "../hooks/useReveal";
import "./Projects.css";

const projects = [
  {
    num: "01",
    name: "Noctune",
    desc: "Local-first desktop music player that combines Spotify discovery, YouTube stream playback, synced lyrics, personalized Nightly Mix recommendations, smart autoqueue, cache learning, and background prefetch in a polished Tauri app.",
    tags: ["Typescript", "React", "Vite", "Tailwind", "Node.js", "Fastify", "Rust", "Tauri", "SQLite", "youtubei.js", "yt-dlp", "Spotify Web API", "LRClib", "Music Player", "Prefetch", "Smart Autoqueue", "Cache Learning", "Software Engineering"],
    status: "Personal",
    year: "2026",
    links: {
      website: "https://noctune.web.id",
      github: "https://github.com/caya8205-2/noctune",
      playstore: "",
      appstore: "",
    },
    caseStudy: "/projects/noctune",
  },
  {
    num: "02",
    name: "ERP Tumbuh",
    desc: "Internal multi-company ERP platform for managing companies, branches, users, permissions, inventory, purchasing, accounts payable, payment flows, and accounting foundations. Built with financial-book isolation, audit trails, security hardening, and a modular architecture ready for operational business modules.",
    tags: ["Laravel", "PHP", "MySQL", "Blade", "Tailwind CSS", "Alpine.js", "Vite", "Multi-company", "Inventory", "Purchasing", "Accounting", "Role-based Access"],
    status: "Internal / Team Project",
    year: "2026",
    caseStudy: "/projects/erp-tumbuh",
  },
  {
    num: "03",
    name: "AVPull",
    desc: "Open-source Node.js and Bun CLI for downloading YouTube audio or video and converting it to formats such as MP3, WAV, MP4, and WebM. Bundles FFmpeg, supports batch downloads and interactive prompts, and is published as an npm package.",
    tags: ["Node.js", "Bun", "CLI", "npm Package", "youtubei.js", "FFmpeg", "Media Processing", "Open Source"],
    status: "Personal",
    year: "2026",
    links: {
      website: "https://caya8205-2.github.io/avpull",
      github: "https://github.com/caya8205-2/avpull",
      playstore: "",
      appstore: "",
    },
    caseStudy: "/projects/avpull",
  },
  {
    num: "04",
    name: "nara",
    desc: "Local-first operational assistant for task management, scheduling, reporting, and business workflow automation. It pairs a self-hosted TypeScript backend with mobile and desktop clients, plus an OpenClaw-powered agent layer and a simulation harness for safely testing natural-language task flows.",
    tags: ["Agent", "Personal Assistant", "OpenClaw", "Whatsapp / Baileys", "TypeScript", "shadcn", "Tailwind", "PostgreSQL", "Redis", "Fastify", "BullMQ", "pgvector"],
    status: "Personal / Work Project",
    year: "2026",
    links: {
      website: "",
      github: "https://github.com/caya8205-2/nara",
      playstore: "",
      appstore: "",
    }
  },
  {
    num: "05",
    name: "Planify",
    desc: "AI-powered project documentation system — a full-stack web app that generates structured software docs (PRD, SRS, user flow, architecture diagrams) using LLMs. Features a modular AI prompt system supporting multiple domains, coin-based usage system, PDF export, and scalable backend architecture.",
    tags: ["Node.js", "PNPM", "TypeScript", "Supabase", "LLM APIs", "REST API", "PDF Generation", "Markdown Generation"],
    status: "Team Project",
    year: "2025",
    links: {
      website: "",
      github: "https://github.com/yudha556/planify",
      playstore: "",
      appstore: "",
    }
  },
  {
    num: "06",
    name: "crewctl",
    desc: "State-driven orchestration engine for software engineering agents. Coordinates planner, implementer, auditor, and QC workflows through deterministic state transitions, structured artifacts, quality gates, OpenClaw-compatible runtime adapters, and an MCP server for agent-tool integration.",
    tags: ["Agentic Automation", "AI Orchestration", "OpenClaw", "Coding Agent", "Skills", "Prompt Engineering", "Javascript", "Markdown", "CLI"],
    status: "Personal",
    year: "2026",
    links: {
      website: "",
      github: "https://github.com/caya8205-2/crewctl",
      playstore: "",
      appstore: "",
    }
  },
  {
    num: "07",
    name: "ai-platform",
    desc: "Unified LLM gateway and developer platform — a monorepo providing a standardized interface for Groq, Anthropic, and OpenAI. Features a persistent chat playground with session management, BullMQ-based async automation, and a real-time analytics dashboard for monitoring token usage and latency.",
    tags: ["Node.js", "TypeScript", "Express", "BullMQ", "Redis", "React", "Vite", "Recharts"],
    status: "Personal",
    year: "2026",
    links: {
      website: "",
      github: "https://github.com/caya8205-2/ai-platform",
      playstore: "",
      appstore: "",
    }
  },
  {
    num: "08",
    name: "capcay-llm",
    desc: "Lightweight LLM client package extracted from the ai-platform monorepo, specifically the @ai-platform/core layer. Provides one TypeScript interface for Groq, Anthropic, and OpenAI, with chat, streaming responses, environment-based defaults, configurable generation options, and provider-aware error handling.",
    tags: ["TypeScript", "Node.js", "npm Package", "Groq", "Anthropic", "OpenAI", "Streaming", "LLM SDK"],
    status: "Personal",
    year: "2026",
    links: {
      website: "",
      github: "https://github.com/caya8205-2/capcay-llm",
      playstore: "",
      appstore: "",
    }
  },
  {
    num: "09",
    name: "Discord Bot",
    desc: "Modular multi-purpose Discord bot refactored from a 5.4k-line monolith. Features an AI persona with persistent memory, a conversation-data pipeline for LoRA/Unsloth fine-tuning, and a resilient Spotify-enabled music player with cache safeguards for reliable YouTube playback.",
    tags: ["Node.js", "Discord.js", "Fine-tuning", "Unsloth", "LoRA", "Groq API", "Gemini Vision", "Spotify API", "yt-dlp"],
    status: "Personal",
    year: "2024",
    links: {
      website: "",
      github: "https://github.com/caya8205-2/bot-ditos",
      playstore: "",
      appstore: "",
    }
  },
];

export default function Projects({ onCaseStudy }: { onCaseStudy: (path: string) => void }) {
  const ref = useReveal();

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div ref={ref} className="projects-inner reveal-left">
          <div className="projects-label">
            <span>04</span>
            <span>Projects</span>
          </div>

          <div className="projects-body">
            <h2 className="projects-heading">
              Selected work.
            </h2>

            <div className="projects-list">
              {projects.map((p) => (
                <div key={p.num} className="project-item" data-cursor>
                  <div className="project-header">
                    <span className="project-num">{p.num}</span>
                    <h3 className="project-name">{p.name}</h3>
                    <div className="project-meta">
                      <span className="project-status">{p.status}</span>
                      <span className="project-year">{p.year}</span>
                    </div>
                  </div>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-tags">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  {p.links && (p.links.website || p.links.github) && (
                    <div className="project-links">
                      {p.links.website && (
                        <a href={p.links.website} target="_blank" rel="noreferrer" className="project-link" data-cursor>
                          Website ↗
                        </a>
                      )}
                      {p.links.github && (
                        <a href={p.links.github} target="_blank" rel="noreferrer" className="project-link" data-cursor>
                          GitHub ↗
                        </a>
                      )}
                    </div>
                  )}
                  {p.caseStudy && (
                    <a href={p.caseStudy} className="project-case-study" data-cursor onClick={(event) => { event.preventDefault(); onCaseStudy(p.caseStudy); }}>
                      Read case study <span>↗</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
