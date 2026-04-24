import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
// Yahan apna hero image import karle agar pehle se hai, warna line 17 check kar
// import heroImage from "./assets/hero-bg.png"; 

export default function App() {
  return (
    <main>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <Projects />
        <WhyUs />
        <About />
        <Contact />
        <Footer />
      </div>
    </main> 
  );
}