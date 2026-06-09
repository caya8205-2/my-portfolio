import { useReveal } from "../hooks/useReveal";
import "./Projects.css";

const projects = [
  {
    num: "01",
    name: "Noctune",
    desc: "Local-first desktop music player with Spotify discovery, YouTube stream playback, smart autoqueue, cache learning, and background prefetch.",
    tags: ["Typescript", "React", "Vite", "Tailwind", "Node.js", "Fastify", "Rust", "Tauri", "SQLite", "youtubei.js", "yt-dlp", "Spotify Web API", "LRClib", "Music Player", "Prefetch", "Smart Autoqueue", "Cache Learning", "Software Engineering"],
    status: "Personal",
    year: "2026",
  },
  {
    num: "02",
    name: "nara",
    desc: "Local-first operational assistant platform designed for task management, scheduling, reporting, and business workflow automation. Built around a self-hosted TypeScript backend, mobile and desktop clients, and an OpenClaw-powered agent layer that coordinates tools and services while keeping business data under local control.",
    tags: ["Agent", "Personal Assistant", "OpenClaw", "Whatsapp / Baileys", "TypeScript", "shadcn", "Tailwind", "PostgreSQL", "Redis", "Fastify", "BullMQ", "pgvector"],
    status: "Personal / Work Project",
    year: "2026",
  },
  {
    num: "03",
    name: "Planify",
    desc: "AI-powered project documentation system — a full-stack web app that generates structured software docs (PRD, SRS, user flow, architecture diagrams) using LLMs. Features a modular AI prompt system supporting multiple domains, coin-based usage system, PDF export, and scalable backend architecture.",
    tags: ["Node.js", "PNPM", "TypeScript", "Supabase", "LLM APIs", "REST API", "PDF Generation", "Markdown Generation"],
    status: "Team Project",
    year: "2025",
  },
  {
    num: "04",
    name: "crewctl",
    desc: "State-driven orchestration engine for software engineering agents. Coordinates planner, implementer, auditor, and QC workflows through deterministic state transitions, structured artifacts, quality gates, and OpenClaw-compatible runtime adapters.",
    tags: ["Agentic Automation", "AI Orchestration", "OpenClaw", "Coding Agent", "Skills", "Prompt Engineering", "Javascript", "Markdown", "CLI"],
    status: "Personal",
    year: "2026",
  },
  {
    num: "05",
    name: "ai-platform",
    desc: "Unified LLM gateway and developer platform — a monorepo providing a standardized interface for Groq, Anthropic, and OpenAI. Features a persistent chat playground with session management, BullMQ-based async automation, and a real-time analytics dashboard for monitoring token usage and latency.",
    tags: ["Node.js", "TypeScript", "Express", "BullMQ", "Redis", "React", "Vite", "Recharts"],
    status: "Personal",
    year: "2026",
  },
  {
    num: "06",
    name: "capcay-llm",
    desc: "Lightweight LLM client package extracted from the ai-platform monorepo, specifically the @ai-platform/core layer. Provides one TypeScript interface for Groq, Anthropic, and OpenAI, with chat, streaming responses, environment-based defaults, configurable generation options, and provider-aware error handling.",
    tags: ["TypeScript", "Node.js", "npm Package", "Groq", "Anthropic", "OpenAI", "Streaming", "LLM SDK"],
    status: "Personal",
    year: "2026",
  },
  {
    num: "07",
    name: "Discord Bot",
    desc: "Modular multi-purpose Discord bot — a sophisticated system refactored from a 5.4k line monolithic script. Features an AI persona with persistent memory and a custom data pipeline for LLM fine-tuning (LoRA/Unsloth) using conversation logs. Includes a high-quality music player with Spotify support and robust state management.",
    tags: ["Node.js", "Discord.js", "Fine-tuning", "Unsloth", "LoRA", "Groq API", "Gemini Vision", "Spotify API", "yt-dlp"],
    status: "Personal",
    year: "2024",
  },
];

export default function Projects() {
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
