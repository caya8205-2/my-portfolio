import { useEffect, useRef } from "react";
import "./Hero.css";

export default function Hero() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!lineRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      lineRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="hero" id="hero">
      <div ref={lineRef} className="hero-lines" aria-hidden>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="hero-line" style={{ animationDelay: `${i * 0.15}s` }} />
        ))}
      </div>

      <div className="hero-content container">
        <div className="hero-tag">
          <span className="tag-dot" />
          available for work
        </div>

        <h1 className="hero-name">
          <span className="name-first">HERYANA</span>
          <span className="name-last">ROMANSYAH P<span className="name-dot">.</span></span>
        </h1>

        <div className="hero-sub">
          <p className="hero-role">
            <em>Full-stack developer</em> — crafting interfaces<br />
            and systems that actually work.
          </p>
          <div className="hero-scroll">
            <div className="scroll-line" />
            <span>scroll</span>
          </div>
        </div>

        <div className="hero-meta">
          <span>Based in <strong>Yogyakarta, ID</strong></span>
          <span className="meta-sep">—</span>
          <span>Open to remote</span>
          <span className="meta-sep">—</span>
          <a
            href="/CV-Heryana-Romansyah.pdf"
            download="CV-Heryana-Romansyah.pdf"
            className="hero-cv-link"
            target="_blank"
            rel="noreferrer"
            data-cursor>Download CV ↗</a>
        </div>
      </div>
    </section>
  );
}
