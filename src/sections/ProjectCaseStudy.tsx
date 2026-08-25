import { useEffect, useRef, useState } from "react";
import "./ProjectCaseStudy.css";

type Screenshot = { src: string; alt: string };
type Preview = { images: Screenshot[]; index: number };

type Showcase = {
  title: string;
  description: string;
  images: Screenshot[];
  featured?: boolean;
};

type CaseStudy = {
  name: string;
  eyebrow: string;
  year: string;
  summary: string;
  role: string;
  stack: string[];
  challenge: string;
  approach: string;
  outcome: string;
  images: { src: string; alt: string; caption: string }[];
  showcases?: Showcase[];
  links?: { label: string; href: string }[];
};

export const caseStudies: Record<string, CaseStudy> = {
  "innertube-rs": {
    name: "innertube-rs",
    eyebrow: "High-performance Rust InnerTube engine / 2026",
    year: "2026",
    summary: "A pure Rust asynchronous client and reverse-engineered engine for YouTube's internal InnerTube API, built to replace bloated Node.js sidecars and heavy subprocesses across native desktop and CLI media tooling.",
    role: "Creator, architecture, and systems engineer",
    stack: ["Rust", "Tokio", "Reqwest", "Serde", "Protobuf", "Crypto / Decipher", "YouTube InnerTube", "Open Source"],
    challenge: "Existing media tools in the workspace like Noctune (desktop player) and AVPull (CLI downloader) previously relied on youtubei.js (Node.js runtime overhead) or yt-dlp subprocesses (3+ seconds latency and high memory footprint). Additionally, third-party Rust crates frequently break due to YouTube's constantly evolving obfuscation, n-token transforms, and signature cipher algorithms.",
    approach: "Engineered a zero-bloat, asynchronous native Rust InnerTube client from scratch. Mapped all 574 legacy renderer classes into a strongly typed polymorphic AST parser, implemented full cryptographic decipher logic (signature deciphering, n-token transforms, visitor data, protobuf parameter encoding), built robust OAuth/cookie session management, and designed streaming primitives for format selection, segmented playback, and downloads.",
    outcome: "A blazing fast native engine delivering sub-5ms scraping, zero Node.js runtime overhead, 85+ deterministic contract and fixture test suites, and 100% typed parity with YouTube.js — serving as the high-performance media backbone for Noctune and AVPull.",
    images: [],
    links: [
      { label: "View source ↗", href: "https://github.com/caya8205-2/innertube-rs" },
    ],
  },
  noctune: {
    name: "Noctune",
    eyebrow: "Desktop music system / 2026",
    year: "2026",
    summary: "A local-first desktop music player made for uninterrupted listening: discover with Spotify, play through YouTube, and keep the next track ready before the current one ends.",
    role: "Product, engineering, and interaction design",
    stack: ["React", "TypeScript", "Tauri", "Rust", "Fastify", "SQLite", "Spotify Web API", "youtubei.js"],
    challenge: "Streaming playback often fails at the seams: discovery, resolving a playable source, queueing, and caching are usually handled as separate problems. Noctune treats them as one continuous listening experience.",
    approach: "The app combines local persistence with background prefetch, cache learning, smart autoqueue, lyrics, and a diversified Nightly Mix. The desktop shell keeps the experience quick and native while the backend handles resolution and playback intelligence.",
    outcome: "A deliberate, personal music workspace that makes the technical complexity behind playback almost invisible.",
    images: [
      { src: "/noctune/noctune-full-player.webp", alt: "Noctune full player view", caption: "The listening surface — playback, queue, and context in one focused view." },
      { src: "/noctune/noctune-wrapped.webp", alt: "Noctune Wrapped listening statistics", caption: "Wrapped turns listening history into a focused personal listening recap — plays, hours, artists, tracks, and daily activity." },
      { src: "/noctune/noctune-matcher-debug.webp", alt: "Noctune Matcher Debug match cache", caption: "Matcher Debug makes resolution behavior inspectable, with a searchable cache of source matches and their quality signals." },
      { src: "/noctune/noctune-discover-weekly.webp", alt: "Noctune Discover Weekly smart playlist", caption: "Discover Weekly keeps fresh finds in a dedicated smart playlist, with the current track and playback context always in view." },
      { src: "/noctune/noctune-cache-settings.webp", alt: "Noctune cache settings", caption: "Playback settings expose the system's local-first behavior without making it feel technical." },
    ],
    links: [
      { label: "Visit Noctune ↗", href: "https://noctune.web.id" },
      { label: "View source ↗", href: "https://github.com/caya8205-2/noctune" },
    ],
  },
  "erp-tumbuh": {
    name: "ERP Tumbuh",
    eyebrow: "Internal operational platform / 2026",
    year: "2026",
    summary: "A multi-company ERP foundation for the work that must be correct: permissions, inventory movement, purchasing, accounts payable, payments, and accounting records.",
    role: "Full-stack contributor",
    stack: ["Laravel", "PHP", "MySQL", "Blade", "Tailwind CSS", "Alpine.js", "Vite", "Spatie Permission"],
    challenge: "Operational systems need strict boundaries. A company, financial book, and user role cannot be allowed to leak into another context — while the application must remain flexible enough to grow into new business modules.",
    approach: "The ERP is built around multi-company context, financial-book isolation, audit logging, reusable services, and role-based guards. Inventory, purchasing, AP, payments, and accounting all build on the same controlled foundation, reinforced by security and data-integrity testing.",
    outcome: "A durable internal platform designed to evolve safely from core master data into end-to-end operations.",
    images: [],
    showcases: [
      {
        title: "Setup Dashboard",
        description: "A clear operational starting point: essential setup status, shortcuts, and the next actions to take before the system goes live.",
        images: [{ src: "/erp-tumbuh/erp-setup-dashboard.webp", alt: "ERP setup dashboard" }],
        featured: true,
      },
      {
        title: "Go Live & Financial Books",
        description: "A guided go-live flow paired with financial-book setup, keeping the business workspace and financial boundaries explicit from day one.",
        images: [
          { src: "/erp-tumbuh/erp-golive.webp", alt: "ERP go live setup" },
          { src: "/erp-tumbuh/erp-financial-book.webp", alt: "ERP financial book setup" },
        ],
      },
      {
        title: "Business Identity",
        description: "Business details are collected as a lightweight, step-by-step setup flow that makes a dense configuration task approachable.",
        images: [
          { src: "/erp-tumbuh/erp-identitas-bisnis.webp", alt: "ERP business identity setup" }
        ],
      },
      {
        title: "Create SPH",
        description: "A structured purchasing flow for creating a supplier price quotation while preserving readable line-item detail and review context.",
        images: [
          { src: "/erp-tumbuh/erp-create-sph.webp", alt: "ERP create supplier price quotation" },
          { src: "/erp-tumbuh/erp-sph-draft.webp", alt: "ERP supplier price quotation list" },
          { src: "/erp-tumbuh/erp-sph-preview.webp", alt: "ERP supplier price quotation print preview" },
        ],
      },
      {
        title: "Sales Order",
        description: "A sales-order flow that turns an approved quotation into a confirmed order, carrying the commercial context forward without repeating setup work.",
        images: [
          { src: "/erp-tumbuh/erp-so-draft.webp", alt: "ERP sales order draft" },
          { src: "/erp-tumbuh/erp-create-so.webp", alt: "ERP create sales order" },
        ],
      },
      {
        title: "Delivery Order",
        description: "A delivery workflow that prepares a confirmed sales order for shipment, captures delivery details, and produces a clear document preview.",
        images: [
          { src: "/erp-tumbuh/erp-do-draft.webp", alt: "ERP delivery order draft" },
          { src: "/erp-tumbuh/erp-create-do.webp", alt: "ERP create delivery order" },
          { src: "/erp-tumbuh/erp-do-preview.webp", alt: "ERP delivery order print preview" },
        ],
      },
      {
        title: "Create Invoice",
        description: "An invoice workflow that moves from a clear draft state into a focused creation form without losing the financial context.",
        images: [
          { src: "/erp-tumbuh/erp-create-invoice.webp", alt: "ERP create invoice step 1" },
          { src: "/erp-tumbuh/erp-create-invoice-2.webp", alt: "ERP create invoice step 2" },
          { src: "/erp-tumbuh/erp-create-invoice-3.webp", alt: "ERP create invoice step 3" },
          { src: "/erp-tumbuh/erp-invoice-draft.webp", alt: "ERP invoice draft" },
          { src: "/erp-tumbuh/erp-invoice-preview.webp", alt: "ERP customer invoice print preview" },
        ],
      },
    ],
  },
  avpull: {
    name: "AVPull",
    eyebrow: "Open-source CLI / 2026",
    year: "2026",
    summary: "A compact command-line tool for pulling YouTube audio or video into the format you need — without relying on external downloader binaries.",
    role: "Product and engineering",
    stack: ["Node.js", "Bun", "Commander.js", "youtubei.js", "FFmpeg", "npm"],
    challenge: "Media download tools often require fragile external setup. AVPull keeps installation simple while still supporting formats, quality controls, batch jobs, and conversion.",
    approach: "The CLI uses youtubei.js for media discovery and bundles FFmpeg for processing. It offers direct commands for fast users, interactive prompts for occasional users, and an npm distribution for a low-friction install path.",
    outcome: "A focused open-source utility that turns a tedious media workflow into one dependable command.",
    images: [
      { src: "/avpull/avpull-help.webp", alt: "AVPull help command in terminal", caption: "The primary command surface makes formats, quality, output folders, and batch downloads immediately discoverable." },
      { src: "/avpull/avpull-download-success.webp", alt: "AVPull completed download in terminal", caption: "A clear completion state confirms the downloaded media and keeps the workflow reliable from command to file." },
      { src: "/avpull/avpull-landing-page.webp", alt: "AVPull landing page download options", caption: "The landing page provides a low-friction entry point for installing AVPull and choosing the right download workflow." },
    ],
    links: [
      { label: "Visit landing page ↗", href: "https://avpull.caya.web.id" },
      { label: "View source ↗", href: "https://github.com/caya8205-2/avpull" },
    ],
  },
  pockt: {
    name: "Pockt",
    eyebrow: "Personal finance & agentic system / 2026",
    year: "2026",
    summary: "A high-performance, self-hosted personal finance tracker and disposable income engine with a dedicated MCP server — enabling AI agents (Hermes, Claude Code, Codex, Antigravity, Copilot, Cursor etc.) to manage and track your personal finances.",
    role: "Architecture, full-stack engineering, and interaction design",
    stack: ["SvelteKit 5", "TypeScript", "Fastify", "MCP Server SDK", "Drizzle ORM", "SQLite", "Tailwind CSS v4", "Turborepo", "Vitest", "Playwright"],
    challenge: "Traditional finance apps lack interoperability with modern AI workflows and are often cluttered with complex ledgers. Personal money management needs immediate disposable income visibility plus seamless integration with AI coding and assistant agents.",
    approach: "Built as a clean Turborepo monorepo pairing SvelteKit 5 and Fastify with Drizzle ORM and SQLite. Alongside single-owner auth, bilingual support (ID/EN), Hallmark OKLCH dual theme system, and payday allocation, it includes an MCP server exposing finance tools (dashboard, incomes, expenses, bills, debts, backups) so any MCP-compliant agent can query and record transactions directly.",
    outcome: "A self-hosted financial companion and agentic hub that makes everyday cash flow tracking and automated AI finance management fast, private, and effortless.",
    images: [],
    showcases: [
      {
        title: "Free-to-Spend Dashboard",
        description: "Instant visibility into net disposable income, monthly cash flow stats, and live financial timeline.",
        images: [
          { src: "/pockt/dashboard-dark.webp", alt: "Pockt dashboard dark theme" },
          { src: "/pockt/dashboard-light.webp", alt: "Pockt dashboard light theme" },
        ],
        featured: true,
      },
      {
        title: "Authentication & Login",
        description: "Secure single-owner access with session-based tokens, cookie protection, and rate limiting.",
        images: [
          { src: "/pockt/login-dark.webp", alt: "Pockt login dark theme" },
          { src: "/pockt/login-light.webp", alt: "Pockt login light theme" },
        ],
      },
      {
        title: "Owner Registration Setup",
        description: "Streamlined first-time initialization to configure the single owner credentials safely.",
        images: [
          { src: "/pockt/register-dark.webp", alt: "Pockt register dark theme" },
          { src: "/pockt/register-light.webp", alt: "Pockt register light theme" },
        ],
      },
      {
        title: "Payday Allocation",
        description: "Planning matrix balancing incoming salary against upcoming commitments, bills, and debt repayments.",
        images: [
          { src: "/pockt/payday-dark.webp", alt: "Pockt payday allocation dark theme" },
          { src: "/pockt/payday-light.webp", alt: "Pockt payday allocation light theme" },
        ],
      },
      {
        title: "Income Tracking",
        description: "Fast transaction recording for salaries, freelance projects, and secondary income sources.",
        images: [
          { src: "/pockt/incomes-dark.webp", alt: "Pockt incomes dark theme" },
          { src: "/pockt/incomes-light.webp", alt: "Pockt incomes light theme" },
        ],
      },
    ],
    links: [
      { label: "Visit website ↗", href: "https://pockt.caya.web.id" },
      { label: "View source ↗", href: "https://github.com/caya8205-2/pockt" },
    ],
  },
  "ferrum-scan": {
    name: "ferrum-scan",
    eyebrow: "High-performance CLI / 2026",
    year: "2026",
    summary: "An ultra-fast multithreaded repository scanner and health inspector CLI tool built in Rust to analyze codebases in milliseconds.",
    role: "Creator and developer",
    stack: ["Rust", "Rayon", "Clap", "ignore", "comfy-table", "Git"],
    challenge: "Inspecting repository health, code metrics, storage breakdown, and duplicate files across large codebases often requires slow, fragmented tools. ferrum-scan delivers instant insights without external heavy dependencies.",
    approach: "Built in Rust with rayon and ignore for parallel traversal that respects .gitignore. It computes lines of code (LOC), calculates storage breakdown, finds duplicate files via fast parallel content hashing, and inspects Git health metrics with formatted terminal tables or markdown/JSON exports.",
    outcome: "A blazing fast binary capable of scanning tens of thousands of files and millions of lines of code in milliseconds with zero setup.",
    images: [
      {
        src: "/ferrum-scan/ferrum-scan-demo.webp",
        alt: "Ferrum-scan repository scan output and LOC metrics in terminal",
        caption: "Parallel directory scan showcasing ultra-fast performance, total files scanned, and detailed Lines of Code (LOC) breakdown by language.",
      },
      {
        src: "/ferrum-scan/ferrum-scan-health.webp",
        alt: "Ferrum-scan duplicate files detector, storage breakdown, and repository health rating",
        caption: "In-depth health inspector showing duplicate file detection with parallel content hashing, directory storage analysis, and Git health metrics.",
      },
      {
        src: "/ferrum-scan/ferrum-scan-help.webp",
        alt: "Ferrum-scan CLI help output with available options and flags",
        caption: "Clean command-line interface with flags for storage breakdown (-s), duplicate detection (-d), full scans (--full), and markdown/JSON export.",
      },
    ],
    links: [
      { label: "View source ↗", href: "https://github.com/caya8205-2/ferrum-scan" },
    ],
  },
};

export default function ProjectCaseStudy({ slug, onBack }: { slug: string; onBack?: () => void }) {
  const project = caseStudies[slug];
  const [preview, setPreview] = useState<Preview | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const openPreview = (images: Screenshot[], index: number) => setPreview({ images, index });
  const movePreview = (direction: number) => setPreview((current) => {
    if (!current) return current;
    return { ...current, index: (current.index + direction + current.images.length) % current.images.length };
  });

  useEffect(() => {
    if (!preview) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPreview(null);
      if (event.key === "ArrowLeft" && preview.images.length > 1) movePreview(-1);
      if (event.key === "ArrowRight" && preview.images.length > 1) movePreview(1);
    };

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [preview]);

  useEffect(() => {
    previewRef.current?.scrollTo({ top: 0, left: 0 });
  }, [preview?.index]);

  const handleBack = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!onBack) return;
    event.preventDefault();
    onBack();
  };

  if (!project) {
    return (
      <main className="case-study case-study-missing">
        <p className="case-kicker">404 / Case study</p>
        <h1>That project is not in the archive.</h1>
        <a href="/#projects" className="case-button" onClick={handleBack}>Back to projects</a>
      </main>
    );
  }

  return (
    <main className="case-study">
      <div className="case-study-inner">
        <a href="/#projects" className="case-back" onClick={handleBack}>← All projects</a>

        <header className="case-hero">
          <p className="case-kicker">{project.eyebrow}</p>
          <h1>{project.name}</h1>
          <p className="case-summary">{project.summary}</p>
          <div className="case-facts">
            <div><span>Contribution</span><strong>{project.role}</strong></div>
            <div><span>Released</span><strong>{project.year}</strong></div>
          </div>
        </header>

        {project.showcases ? (
          <ShowcaseGallery showcases={project.showcases} onPreview={openPreview} />
        ) : project.images && project.images.length > 0 ? (
          <section className="case-images" aria-label={`${project.name} screenshots`}>
            {project.images.map((image, index) => (
              <figure key={image.src} className={index === 0 ? "case-image case-image-featured" : "case-image"}>
                <button className="case-image-open" onClick={() => openPreview(project.images, index)} aria-label={`Open full preview: ${image.alt}`}>
                  <img src={image.src} alt={image.alt} />
                  <span>View full preview ↗</span>
                </button>
                <figcaption><span>0{index + 1}</span>{image.caption}</figcaption>
              </figure>
            ))}
          </section>
        ) : null}

        <section className="case-notes">
          <article><span>01 / The problem</span><p>{project.challenge}</p></article>
          <article><span>02 / The system</span><p>{project.approach}</p></article>
          <article><span>03 / The result</span><p>{project.outcome}</p></article>
        </section>

        <section className="case-stack">
          <p className="case-kicker">Built with</p>
          <div>{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        </section>

        {project.links && (
          <div className="case-actions">
            {project.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="case-button">{link.label}</a>)}
          </div>
        )}
      </div>
      {preview && (
        <div ref={previewRef} className="preview-lightbox" role="dialog" aria-modal="true" aria-label={preview.images[preview.index].alt} onClick={() => setPreview(null)}>
          <button className="preview-lightbox-close" onClick={() => setPreview(null)} aria-label="Close full preview">×</button>
          {preview.images.length > 1 && <button className="preview-lightbox-arrow preview-lightbox-prev" onClick={(event) => { event.stopPropagation(); movePreview(-1); }} aria-label="Previous preview">←</button>}
          <img src={preview.images[preview.index].src} alt={preview.images[preview.index].alt} onClick={(event) => event.stopPropagation()} />
          {preview.images.length > 1 && <button className="preview-lightbox-arrow preview-lightbox-next" onClick={(event) => { event.stopPropagation(); movePreview(1); }} aria-label="Next preview">→</button>}
        </div>
      )}
    </main>
  );
}

function ShowcaseGallery({ showcases, onPreview }: { showcases: Showcase[]; onPreview: (images: Screenshot[], index: number) => void }) {
  return (
    <section className="showcase-grid" aria-label="ERP Tumbuh product showcase">
      {showcases.map((showcase, index) => <ShowcaseCard key={showcase.title} showcase={showcase} number={index + 1} onPreview={onPreview} />)}
    </section>
  );
}

function ShowcaseCard({ showcase, number, onPreview }: { showcase: Showcase; number: number; onPreview: (images: Screenshot[], index: number) => void }) {
  const [active, setActive] = useState(0);
  const hasMultipleImages = showcase.images.length > 1;
  const image = showcase.images[active];
  const move = (direction: number) => setActive((current) => (current + direction + showcase.images.length) % showcase.images.length);

  return (
    <article className={`showcase-card ${showcase.featured ? "showcase-card-featured" : ""}`}>
      <div className={`showcase-carousel ${hasMultipleImages ? "showcase-carousel-multiple" : ""}`}>
        <button className="showcase-image-open" onClick={() => onPreview(showcase.images, active)} aria-label={`Open full preview: ${image.alt}`}>
          <img src={image.src} alt={image.alt} />
          <span>View full preview ↗</span>
        </button>
        {hasMultipleImages && (
          <>
            <button className="showcase-arrow showcase-arrow-prev" onClick={() => move(-1)} aria-label={`Previous ${showcase.title} screen`}>←</button>
            <button className="showcase-arrow showcase-arrow-next" onClick={() => move(1)} aria-label={`Next ${showcase.title} screen`}>→</button>
            <div className="showcase-dots" aria-label={`${showcase.title} screenshots`}>
              {showcase.images.map((shot, index) => (
                <button key={shot.src} onClick={() => setActive(index)} className={index === active ? "active" : ""} aria-label={`Show screen ${index + 1}`} />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="showcase-copy">
        <span>0{number}</span>
        <div><h2>{showcase.title}</h2><p>{showcase.description}</p></div>
        {hasMultipleImages && <small>{String(active + 1).padStart(2, "0")} / {String(showcase.images.length).padStart(2, "0")}</small>}
      </div>
    </article>
  );
}
