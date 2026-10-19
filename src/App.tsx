import { useEffect, useRef, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { About } from "./components/About";
import { CaseStudyModal } from "./components/CaseStudyModal";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { GitActivity } from "./components/GitActivity";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ProjectsBento } from "./components/ProjectsBento";
import { TechStack } from "./components/TechStack";
import BackToTop from "./components/BackToTop";
import Preloader from "./components/Preloader";
import { CASE_STUDIES } from "./data/portfolioData";

function getInitialSlug(): string | null {
  const pathSlug = window.location.pathname.match(/^\/projects\/([^/]+)\/?$/)?.[1];
  if (pathSlug && CASE_STUDIES[pathSlug]) return pathSlug;

  const hashSlug = window.location.hash.match(/^#case-study-([a-z0-9-]+)$/)?.[1];
  return hashSlug && CASE_STUDIES[hashSlug] ? hashSlug : null;
}

export default function App() {
  const [caseStudySlug, setCaseStudySlug] = useState<string | null>(getInitialSlug);
  const projectScrollY = useRef<number | null>(null);
  const [showPreloader] = useState(() => {
    const seenKey = "portfolio-preloader-seen";
    const hasSeenPreloader = sessionStorage.getItem(seenKey) === "true";
    sessionStorage.setItem(seenKey, "true");
    return !hasSeenPreloader && !getInitialSlug();
  });

  useEffect(() => {
    const handleHistoryChange = () => setCaseStudySlug(getInitialSlug());
    window.addEventListener("popstate", handleHistoryChange);
    window.addEventListener("hashchange", handleHistoryChange);
    return () => {
      window.removeEventListener("popstate", handleHistoryChange);
      window.removeEventListener("hashchange", handleHistoryChange);
    };
  }, []);

  const openCaseStudy = (slug: string) => {
    projectScrollY.current = window.scrollY;
    window.history.pushState({}, "", `/projects/${slug}`);
    setCaseStudySlug(slug);
  };

  const closeCaseStudy = () => {
    const previousScrollY = projectScrollY.current;
    projectScrollY.current = null;
    window.history.pushState({}, "", "/#projects");
    setCaseStudySlug(null);
    requestAnimationFrame(() => {
      if (previousScrollY === null) {
        document.getElementById("projects")?.scrollIntoView();
      } else {
        window.scrollTo({ top: previousScrollY, behavior: "instant" });
      }
    });
  };

  const navigateToSection = (sectionId: string) => {
    if (caseStudySlug) {
      window.history.pushState({}, "", `/#${sectionId}`);
      setCaseStudySlug(null);
    }
    requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    });
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-white selection:text-zinc-950 font-sans antialiased">
      {showPreloader && <Preloader />}
      <Analytics />
      <SpeedInsights />
      <Navbar onNavigate={navigateToSection} />
      <main>
        <Hero />
        <About />
        <TechStack />
        <ProjectsBento onOpenCaseStudy={openCaseStudy} />
        <GitActivity />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      {caseStudySlug && (
        <CaseStudyModal slug={caseStudySlug} onClose={closeCaseStudy} />
      )}
    </div>
  );
}
