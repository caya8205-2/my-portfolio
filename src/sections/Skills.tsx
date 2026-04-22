import { useReveal } from "../hooks/useReveal";
import "./Skills.css";

const skills = {
  "Frontend": ["React", "TypeScript", "Vite", "CSS / Tailwind", "Framer Motion"],
  "Backend": ["Node.js", "Express", "REST APIs", "WebSockets", "PostgreSQL"],
  "Tooling": ["Git", "Docker", "Linux", "Rust / Tauri", "Figma"],
  "Currently learning": ["Rust", "WebAssembly", "Three.js"],
};

export default function Skills() {
  const ref = useReveal();

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div ref={ref} className="skills-inner reveal">
          <div className="skills-label">
            <span>02</span>
            <span>Skills</span>
          </div>

          <div className="skills-body">
            <h2 className="skills-heading">
              Tools &amp; technologies<br />I work with.
            </h2>

            <div className="skills-grid">
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
