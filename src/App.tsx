import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import { Analytics } from "@vercel/analytics/react"

export default function App() {
  return (
    <>
      <Analytics />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
