import { useEffect, useState } from "react";
import "./Navbar.css";

const links = ["about", "skills", "projects", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <a href="#hero" className="nav-logo">HR<span>.</span></a>
      <ul className="nav-links">
        {links.map((l) => (
          <li key={l}>
            <a href={`#${l}`}>{l}</a>
          </li>
        ))}
      </ul>
      <a href="#contact" className="nav-cta" data-cursor>
        hire me
      </a>
    </nav>
  );
}
