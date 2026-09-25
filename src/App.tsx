import { useEffect, useState } from "react";
import Lenis from "lenis";

import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Experience from "./sections/Experience/Experience";
import Contact from "./sections/Contact/Contact";
import Footer from "./components/Footer/Footer";
import TechStack from "./sections/TechStack/TechStack";
import Education from "./sections/Education/Education";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080808] bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.12),transparent_35%),linear-gradient(180deg,#090909_0%,#050505_100%)] text-white antialiased">
      {loading && <Loader onComplete={() => setLoading(false)} />}

      <CustomCursor />

      <Navbar />

      <Hero isReady={!loading} />
      <About />
      <Skills />
      <Projects />
      <TechStack />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
