import { useReveal } from "../hooks/useReveal";
import "./Approach.css";

const pillars = [
  {
    title: "Intentional scope",
    description:
      "I prefer to shape the work into clear milestones so the UI, API, and polish can grow together without losing direction.",
  },
  {
    title: "Clean handoff",
    description:
      "I keep structure readable, naming consistent, and interactions predictable so the next iteration is easy to continue.",
  },
  {
    title: "High-signal UI",
    description:
      "I focus on hierarchy, spacing, and motion that support the content instead of competing with it.",
  },
];

export default function Approach() {
  const ref = useReveal();

  return (
    <section className="approach" id="approach">
      <div className="container">
        <div className="approach-inner">
          <div className="approach-label">
            <span>03</span>
            <span>Approach</span>
          </div>

          <div className="approach-body">
            <h2 className="approach-heading">
              I like to keep the work <em>focused</em>,
              <br />
              <em>fast</em>, and maintainable.
            </h2>

            <div className="approach-copy">
              <p>
                Every build should feel considered from the first screen to the
                final handoff.
              </p>
              <p>
                I usually start with the smallest useful version, then iterate
                on structure, performance, and polish without losing the
                original intent.
              </p>
            </div>

            <div ref={ref} className="approach-grid stagger-children reveal">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="approach-card">
                  <h3 className="approach-card-title">{pillar.title}</h3>
                  <p className="approach-card-desc">{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
