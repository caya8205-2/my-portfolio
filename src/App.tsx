import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import GitActivity from "./sections/GitActivity";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Cursor from "./components/Cursor";
import Preloader from "./components/Preloader";
import { Analytics } from "@vercel/analytics/react"

export default function App() {
  return (
    <>
      <Preloader />
      <Analytics />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GitActivity />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
