import { useEffect, useState } from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Approach from "./sections/Approach";
import Projects from "./sections/Projects";
import ProjectCaseStudy from "./sections/ProjectCaseStudy";
import GitActivity from "./sections/GitActivity";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Cursor from "./components/Cursor";
import Preloader from "./components/Preloader";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

export default function App() {
  const getCaseStudySlug = () => window.location.pathname.match(/^\/projects\/([^/]+)\/?$/)?.[1];
  const [caseStudySlug, setCaseStudySlug] = useState(getCaseStudySlug);
  const [showPreloader] = useState(() => {
    const seenKey = "portfolio-preloader-seen";
    const hasSeenPreloader = sessionStorage.getItem(seenKey) === "true";
    sessionStorage.setItem(seenKey, "true");
    return !hasSeenPreloader && !getCaseStudySlug();
  });

  useEffect(() => {
    const onPopState = () => setCaseStudySlug(getCaseStudySlug());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const returnToProjects = () => {
    window.history.pushState({}, "", "/#projects");
    setCaseStudySlug(undefined);
    requestAnimationFrame(() => document.getElementById("projects")?.scrollIntoView());
  };

  const openCaseStudy = (path: string) => {
    window.history.pushState({}, "", path);
    setCaseStudySlug(getCaseStudySlug());
    window.scrollTo({ top: 0 });
  };

  if (caseStudySlug) {
    return (
      <>
        {showPreloader && <Preloader />}
        <Cursor />
        <Navbar />
        <ProjectCaseStudy slug={caseStudySlug} onBack={returnToProjects} />
        <BackToTop />
      </>
    );
  }

  return (
    <>
      {showPreloader && <Preloader />}
      <Analytics />
      <SpeedInsights />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Approach />
        <Projects onCaseStudy={openCaseStudy} />
        <GitActivity />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
