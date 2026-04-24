import { useReveal } from "../hooks/useReveal";
import "./Skills.css";

const skills = {
  "Frontend": ["React", "TypeScript", "Vite", "CSS / Tailwind", "Svelte"],
  "Backend": ["Node.js", "Express", "REST APIs", "PostgreSQL"],
  "Tooling": ["Git", "Linux", "Rust / Tauri", "Figma"],
  "Currently learning": ["Rust", "WebAssembly", "Three.js"],
};

export default function Skills() {
  const ref = useReveal();

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills-inner">
          <div className="skills-label">
            <span>02</span>
            <span>Skills</span>
          </div>

          <div className="skills-body">
            <h2 className="skills-heading">
              Tools &amp; technologies<br />I work with.
            </h2>

            <div className="skills-grid stagger-children reveal" ref={ref}>
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="skill-group">
                  <h3 className="skill-category">{category}</h3>
                  <ul className="skill-list">
                    {items.map((s) => (
                      <li key={s} className="skill-item">
                        <span className="skill-bullet">—</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
