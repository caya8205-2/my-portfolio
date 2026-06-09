import { useReveal } from "../hooks/useReveal";
import "./Contact.css";

const links = [
  { label: "GitHub", handle: "@caya8205-2", href: "https://github.com/caya8205-2" },
  { label: "Email", handle: "yannz.2005@gmail.com", href: "mailto:yannz.2005@gmail.com" },
  { label: "Instagram", handle: "@ryannotfound404", href: "https://instagram.com/ryannotfound404" },
  { label: "Whatsapp", handle: "081287110249", href: "https://wa.me/6281287110249" },
];

export default function Contact() {
  const ref = useReveal();

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div ref={ref} className="contact-inner reveal">
          <div className="contact-label">
            <span>06</span>
            <span>Contact</span>
          </div>

          <div className="contact-body">
            <h2 className="contact-heading">
              Let's build<br />
              <em>something together.</em>
            </h2>

            <p className="contact-sub">
              Have a project in mind, or just want to talk?<br />
              My inbox is always open.
            </p>

            <div className="contact-links">
              {links.map((l) => (
                <a key={l.label} href={l.href} className="contact-link" target="_blank" rel="noreferrer" data-cursor>
                  <span className="link-label">{l.label}</span>
                  <span className="link-handle">{l.handle}</span>
                  <span className="link-arrow">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
