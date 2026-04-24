import { useReveal } from "../hooks/useReveal";
import "./Projects.css";

const projects = [
  {
    num: "01",
    name: "Planify",
    desc: "AI-powered project documentation system — a full-stack web app that generates structured software docs (PRD, SRS, user flow, architecture diagrams) using LLMs. Features a modular AI prompt system supporting multiple domains, coin-based usage system, PDF export, and scalable backend architecture.",
    tags: ["Node.js", "PNPM", "TypeScript", "Supabase", "LLM APIs", "REST API", "PDF Generation", "Markdown Generation"],
    status: "Team Project",
    year: "2025",
  },
  {
    num: "02",
    name: "Discord Bot",
    desc: "AI-powered Discord bot designed for interactive conversations and automation. Supports multi-server deployment with persistent memory, enabling contextual responses and improved user engagement. Built with a modular system for scalability and flexible feature expansion.",
    tags: ["Node.js", "Discord.js", "LLM API", "fs"],
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
            <span>03</span>
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
