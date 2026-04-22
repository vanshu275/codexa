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
    <main className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <WhyUs />

      <About />
      <Contact />

      <Footer /> 
      
    </main>
  );
}
