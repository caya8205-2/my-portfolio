import "./Footer.css";

const links = ["about", "skills", "projects", "contact"];
const social = [
  { label: "GitHub", href: "https://github.com/caya8205-2" },
  { label: "Email", href: "mailto:yannz.2005@gmail.com" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#hero" onClick={scrollToTop} className="footer-logo">HR<span>.</span></a>
            <p className="footer-desc">Crafting interfaces and systems that actually work.</p>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h4>Navigation</h4>
              <ul>
                {links.map(l => (
                  <li key={l}><a href={`#${l}`} data-cursor>{l}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>Connect</h4>
              <ul>
                {social.map(s => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noreferrer" data-cursor>{s.label} ↗</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Heryana Romansyah P. Built with React + Vite.</p>
          <button onClick={scrollToTop} className="footer-to-top" data-cursor>Back to top ↑</button>
        </div>
      </div>
    </footer>
  );
}
