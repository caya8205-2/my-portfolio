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
      { src: "/noctune/noctune-full-player.png", alt: "Noctune full player view", caption: "The listening surface — playback, queue, and context in one focused view." },
      { src: "/noctune/noctune-wrapped.png", alt: "Noctune Wrapped listening statistics", caption: "Wrapped turns listening history into a focused personal listening recap — plays, hours, artists, tracks, and daily activity." },
      { src: "/noctune/noctune-matcher-debug.png", alt: "Noctune Matcher Debug match cache", caption: "Matcher Debug makes resolution behavior inspectable, with a searchable cache of source matches and their quality signals." },
      { src: "/noctune/noctune-discover-weekly.png", alt: "Noctune Discover Weekly smart playlist", caption: "Discover Weekly keeps fresh finds in a dedicated smart playlist, with the current track and playback context always in view." },
      { src: "/noctune/noctune-cache-settings.png", alt: "Noctune cache settings", caption: "Playback settings expose the system's local-first behavior without making it feel technical." },
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
        images: [{ src: "/erp-tumbuh/erp-setup-dashboard.png", alt: "ERP setup dashboard" }],
        featured: true,
      },
      {
        title: "Go Live & Financial Books",
        description: "A guided go-live flow paired with financial-book setup, keeping the business workspace and financial boundaries explicit from day one.",
        images: [
          { src: "/erp-tumbuh/erp-golive.png", alt: "ERP go live setup" },
          { src: "/erp-tumbuh/erp-financial-book.png", alt: "ERP financial book setup" },
        ],
      },
      {
        title: "Business Identity",
        description: "Business details are collected as a lightweight, step-by-step setup flow that makes a dense configuration task approachable.",
        images: [
          { src: "/erp-tumbuh/erp-identitas-bisnis.png", alt: "ERP business identity setup" }
        ],
      },
      {
        title: "Create SPH",
        description: "A structured purchasing flow for creating a supplier price quotation while preserving readable line-item detail and review context.",
        images: [
          { src: "/erp-tumbuh/erp-create-sph.png", alt: "ERP create supplier price quotation" },
          { src: "/erp-tumbuh/erp-sph-draft.png", alt: "ERP supplier price quotation list" },
          { src: "/erp-tumbuh/erp-sph-preview.webp", alt: "ERP supplier price quotation print preview" },
        ],
      },
      {
        title: "Sales Order",
        description: "A sales-order flow that turns an approved quotation into a confirmed order, carrying the commercial context forward without repeating setup work.",
        images: [
          { src: "/erp-tumbuh/erp-so-draft.png", alt: "ERP sales order draft" },
          { src: "/erp-tumbuh/erp-create-so.png", alt: "ERP create sales order" },
        ],
      },
      {
        title: "Delivery Order",
        description: "A delivery workflow that prepares a confirmed sales order for shipment, captures delivery details, and produces a clear document preview.",
        images: [
          { src: "/erp-tumbuh/erp-do-draft.png", alt: "ERP delivery order draft" },
          { src: "/erp-tumbuh/erp-create-do.png", alt: "ERP create delivery order" },
          { src: "/erp-tumbuh/erp-do-preview.png", alt: "ERP delivery order print preview" },
        ],
      },
      {
        title: "Create Invoice",
        description: "An invoice workflow that moves from a clear draft state into a focused creation form without losing the financial context.",
        images: [
          { src: "/erp-tumbuh/erp-create-invoice.png", alt: "ERP create invoice step 1" },
          { src: "/erp-tumbuh/erp-create-invoice 2.png", alt: "ERP create invoice step 2" },
          { src: "/erp-tumbuh/erp-create-invoice 3.png", alt: "ERP create invoice step 3" },
          { src: "/erp-tumbuh/erp-invoice-draft.png", alt: "ERP invoice draft" },
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
      { src: "/avpull/avpull-help.png", alt: "AVPull help command in terminal", caption: "The primary command surface makes formats, quality, output folders, and batch downloads immediately discoverable." },
      { src: "/avpull/avpull-download-success.png", alt: "AVPull completed download in terminal", caption: "A clear completion state confirms the downloaded media and keeps the workflow reliable from command to file." },
      { src: "/avpull/avpull-landing-page.png", alt: "AVPull landing page download options", caption: "The landing page provides a low-friction entry point for installing AVPull and choosing the right download workflow." },
    ],
    links: [
      { label: "Visit landing page ↗", href: "https://caya8205-2.github.io/avpull" },
      { label: "View source ↗", href: "https://github.com/caya8205-2/avpull" },
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
        ) : (
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
        )}

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
