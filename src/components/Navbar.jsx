import { useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function Navbar() {
  const navRef = useRef(null);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Why Us", href: "#why-us" },
    { name: "About", href: "#about" },
  ];



  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div
            className="flex items-center gap-2 cursor-pointer"
         
          >
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
              C
            </div>
            <span className="text-xl font-bold text-slate-900">Codexa</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
               
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <button
              
              className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-all"
            >
              Hire Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
