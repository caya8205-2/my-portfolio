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
    eyebrow: "Rust InnerTube client library / 2026",
    year: "2026",
    summary: "A strict, full 1:1 Rust port of YouTube.js' InnerTube client, created to advance Noctune's roadmap toward a fully Rust app by moving its primary playback backend into Rust.",
    role: "Port author and maintainer",
    stack: ["Rust", "Tokio", "Reqwest", "Serde", "Protobuf", "YouTube.js", "InnerTube API"],
    challenge: "At the time, most Rust YouTube client libraries I found were outdated and could not serve as a dependable base for Noctune's planned Rust backend. Since YouTube.js already powered Noctune's primary playback path, I chose to port that client directly, preserving its behavior and API coverage one to one.",
    approach: "Ported YouTube.js directly to Rust with strict 1:1 parity: each supported behavior is carried across one to one, with no symlink shortcuts and no tolerated differences from the reference. Tokio and Reqwest provide asynchronous execution.",
    outcome: "A Rust InnerTube client that provides the implementation path for Noctune's backend migration while preserving YouTube.js behavior. The goal is to move toward a fully Rust app and improve execution speed.",
    images: [],
    links: [
      { label: "View source ↗", href: "https://github.com/caya8205-2/innertube-rs" },
    ],
  },
  noctune: {
    name: "Noctune",
    eyebrow: "Desktop music system / 2026",
    year: "2026",
    summary: "Noctune began with a personal constraint: I wanted to game on a RAM-limited PC while listening to Neuro-sama karaoke clips—mostly found on YouTube—without adding another browser window to my always-open tabs. It grew into a local-first desktop player that pairs Spotify metadata with YouTube playback.",
    role: "Product, engineering, and interaction design",
    stack: ["React", "TypeScript", "Tauri", "Rust", "Fastify", "SQLite", "Spotify Web API", "youtubei.js"],
    challenge: "My browser already had many tabs kept open, leaving less memory for games; adding browser-based music playback made that worse. Ads on Spotify and YouTube interrupted listening, while the Neuro-sama karaoke clips I wanted were on YouTube rather than Spotify. Spotify's Playback SDK also required Premium and limited free playback to 30-second previews, which did not fit the experience I wanted to build.",
    approach: "Noctune uses Spotify Web API for rich track metadata and discovery, then matches tracks to YouTube search results and resolves playback there. This brings official songs and YouTube-only karaoke clips into one queue without relying on Spotify playback. A Tauri desktop shell, local caching, background prefetch, synced lyrics, and smart autoqueue keep the experience out of a tab-heavy browser. Spotify API access began tightening in February 2026 and reached my long-standing app registration in March; I maintained Premium and the app's configured API access so listeners could use the metadata features without each needing their own Premium plan.",
    outcome: "A desktop player shaped around the original need: keep the browser closed, leave more memory for gaming, and listen to both Spotify-discovered tracks and YouTube-only karaoke clips from one place.",
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
    name: "ERP Prime",
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
    summary: "AVPull grew from a practical annoyance: downloading a YouTube video meant navigating pop-up ads and redirect chains on online download sites. Noctune already had a YouTube download feature, so I turned that workflow into a standalone CLI. It started with YouTube and later expanded to support multiple websites.",
    role: "Product and engineering",
    stack: ["Node.js", "Bun", "Commander.js", "youtubei.js", "FFmpeg", "npm"],
    challenge: "Every YouTube download started with a trip to a website crowded with pop-up ads and redirect chains. Noctune already handled YouTube playback and downloads, but that capability was tied to the music app instead of being available as a direct, reusable tool.",
    approach: "Built AVPull as a standalone CLI from the YouTube download workflow already used in Noctune. The first version supported YouTube; the tool later grew to handle media from multiple websites, with interactive prompts, batch commands, and conversion to common formats.",
    outcome: "What began as a cleaner way to download YouTube videos became a multi-site media CLI, published on npm for use across macOS, Linux, and Windows.",
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
    <section className="showcase-grid" aria-label="ERP Prime product showcase">
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
