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
    <main className="min-h-screen bg-[#080808] text-white">
      {loading && <Loader onComplete={() => setLoading(false)} />}

      <CustomCursor />

      <Navbar />

      <Hero isReady={!loading} />
      <About />
      <Skills />
      <Projects />
      <TechStack />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
