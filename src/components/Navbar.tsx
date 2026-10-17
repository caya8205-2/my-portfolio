import { useEffect, useState } from "react";
import { ArrowUpRight01Icon, Cancel01Icon, Menu01Icon } from "hugeicons-react";
import { PROFILE_DATA } from "../data/portfolioData";

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

const links = [
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "projects", label: "Works" },
  { id: "activity", label: "Activity" },
  { id: "contact", label: "Contact" },
];

export const Navbar = ({ onNavigate }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigate?.(sectionId);
  };

  const navLink = (id: string, label: string, mobile = false) => (
    <a
      key={id}
      href={`#${id}`}
      onClick={(event) => {
        event.preventDefault();
        handleNavClick(id);
      }}
      className={mobile
        ? "py-1 text-sm text-zinc-300 hover:text-white"
        : "shrink-0 whitespace-nowrap text-xs font-medium text-zinc-400 transition-colors hover:text-zinc-100"}
    >
      {label}
    </a>
  );

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-800/80 bg-zinc-950/85 py-3.5 shadow-lg shadow-black/20 backdrop-blur-md"
          : "border-b border-transparent bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6">
        <a
          href="#hero"
          onClick={(event) => {
            event.preventDefault();
            handleNavClick("hero");
          }}
          className="shrink-0 whitespace-nowrap text-sm font-bold uppercase tracking-tight text-zinc-100 transition-colors hover:text-white"
        >
          Heryana Romansyah
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map(({ id, label }) => navLink(id, label))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 md:flex">
          <a
            href={PROFILE_DATA.cvUrl}
            target="_blank"
            rel="noreferrer"
            download="CV-Heryana-Romansyah.pdf"
            className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-md bg-zinc-100 px-3.5 py-1.5 text-xs font-medium text-zinc-900 transition-colors hover:bg-white"
          >
            <span>Resume</span>
            <ArrowUpRight01Icon className="h-3.5 w-3.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="p-1.5 text-zinc-400 transition-colors hover:text-white md:hidden"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <Cancel01Icon className="h-5 w-5" /> : <Menu01Icon className="h-5 w-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="flex flex-col gap-3.5 border-b border-zinc-800/80 bg-zinc-950/95 px-6 py-4 md:hidden">
          {links.map(({ id, label }) => navLink(id, label, true))}
          <div className="border-t border-zinc-800 pt-2">
            <a
              href={PROFILE_DATA.cvUrl}
              target="_blank"
              rel="noreferrer"
              download="CV-Heryana-Romansyah.pdf"
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-zinc-100 px-3.5 py-2 text-xs font-medium text-zinc-900"
            >
              <span>Download Resume</span>
              <ArrowUpRight01Icon className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
