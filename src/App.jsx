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
    <main className="min-h-screen relative overflow-x-hidden bg-[#050505]">
      {/* Global Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl pointer-events-none opacity-70 z-0">
        {/* Agar heroImage nahi hai toh is <img> tag ko temporary comment kar dena */}
        {/* <img src={heroImage} alt="" className="w-full h-auto" /> */}
      </div>

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
    </main> // Yahan pehle <main/> tha jo galat tha
  );
}