import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Magnetic Circle Interaction
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const rect = circleRef.current.getBoundingClientRect();
        const x = clientX - (rect.left + rect.width / 2);
        const y = clientY - (rect.top + rect.height / 2);

        gsap.to(circleRef.current, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.5,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(circleRef.current, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)",
        });
      };

      const circleArea = circleRef.current;
      circleArea.addEventListener("mousemove", handleMouseMove);
      circleArea.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        circleArea.removeEventListener("mousemove", handleMouseMove);
        circleArea.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative w-full z-10 bg-transparent h-[90vh] text-white overflow-hidden pt-10 pb-10"
    >
      {/* 
          1. h-full: Takki container footer ki 90vh height le sake.
          2. flex flex-col justify-between: Isse top aur bottom section ke beech gap maintain hoga.
      */}
      <div className="max-w-7xl mx-auto px-[5vw] h-full flex flex-col justify-between">
        {/* Main Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end text-center md:text-left pt-10">
          <div className="max-w-4xl flex flex-col items-center md:items-start">
            <h2 className="text-[12vw] md:text-[10vw] lg:text-[8.5vw] font-extrabold brightness-200 leading-[0.85] tracking-tighter mb-5 overflow-hidden">
              <span className="inline-block">HAVE A</span> <br />
              <span className="inline-block gradient-text italic">
                PROJECT?
              </span>
            </h2>
            <p className="text-base md:text-xl text-gray-400 max-w-md font-light leading-relaxed reveal-text">
              Transforming complex ideas into seamless digital realities.
              PortionDev is where innovation meets execution.
            </p>
          </div>

          <div className="mt-10 md:mt-0 flex justify-center items-center">
            <div
              ref={circleRef}
              className="w-48 h-48 md:w-64 md:h-64 rounded-full border border-white/20 flex items-center justify-center cursor-pointer relative group overflow-hidden transition-colors duration-500 hover:border-blue-500"
            >
              <a href="#contact" className="z-10">
                <span className="text-lg uppercase tracking-widest font-bold group-hover:text-blue-400 transition-colors duration-300">
                  Contact Us
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Ab ye automatically bottom par stick ho jayega */}
        <div className="pb-10 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] tracking-[0.2em] md:tracking-[0.4em] uppercase text-white/30 text-center leading-relaxed">
            © 2026 PortionDev Creative Studio
            <br className="block md:hidden" /> • All Rights Reserved
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {["X", "LinkedIn", "Github", "Dribbble"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs font-bold tracking-widest hover:text-blue-500 transition-colors relative group"
              >
                {social}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
