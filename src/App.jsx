import Aurora from "./components/ui/Aurora";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

export default function App() {
  return (
    <main className="relative min-h-screen bg-[#050505]">
      <Navbar />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Aurora
          colorStops={["#3B82F6", "#7C3AED", "#06B6D4", "#A855F7"]}
          amplitude={0.3}
          blend={1}
        />
      </div>

      <div className="relative z-10 mb-[5vh]">
        <Hero />
        <Services />
        <Projects />
        <WhyUs />
        <About />
        <Contact />
      </div>
      <div className="relative bottom-0 z-0 w-screen">
        <Footer />
      </div>
    </main>
  );
}
