import { useReveal } from "../hooks/useReveal";
import "./About.css";

export default function About() {
  const ref = useReveal();

  return (
    <section className="about" id="about">
      <div className="container">
        <div ref={ref} className="about-inner reveal-scale">
          <div className="about-label">
            <span>01</span>
            <span>About</span>
          </div>

          <div className="about-body">
            <h2 className="about-heading">
              I build things<br />
              <em>for the web</em><br />
              and beyond.
            </h2>

            <div className="about-text">
              <p>
                Hi, I'm Ryan, a developer based in Yogyakarta with a passion
                for building clean, functional, and well-crafted software.
              </p>
              <p>
                When not writing code, you'll find me tinkering with AI tools,
                playing games, or obsessing over the details that most people
                won't notice, but will definitely feel.
              </p>
            </div>

            <div className="about-stats">
              {[
                { num: "2+", label: "Years building" },
                { num: "5+", label: "Projects" },
                { num: "∞", label: "Cups of coffee" },
              ].map((s) => (
                <div key={s.label} className="stat">
                  <span className="stat-num">{s.num}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
