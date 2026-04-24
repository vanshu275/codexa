import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text Reveal Animation
      gsap.from(".reveal-text", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
        },
      });

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
      className="relative w-full bg-[#080808] text-white overflow-hidden pt-32 pb-12"
    >
     
      <div className="max-w-400 mx-auto px-[5vw]">
        {/* Main Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-32 relative">
          <div className="max-w-4xl">
            <h2 className="text-[10vw] lg:text-[8.5vw] font-bold leading-[0.85] tracking-tighter mb-8 overflow-hidden">
              <span className="reveal-text inline-block">HAVE A</span> <br />
              <span className="reveal-text inline-block gradient-text italic">
                PROJECT?
              </span>
            </h2>
            <p className="text-xl text-gray-40  max-w-md font-light leading-relaxed reveal-text">
              Transforming complex ideas into seamless digital realities. Codexa
              is where innovation meets execution.
            </p>
          </div>

          <div className="mt-16 lg:mt-0 flex justify-center items-center w-full lg:w-auto">
            <div
              ref={circleRef}
              className="w-48 h-48 md:w-64 md:h-64 rounded-full border border-white/20 flex items-center justify-center cursor-pointer relative group overflow-hidden transition-colors duration-500 hover:border-blue-500"
            >
              <a href="#contact">
                <div className="absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-700 rounded-full origin-center"></div>
                <span className="relative z-10 text-lg uppercase tracking-widest font-bold group-hover:text-[gradient-text] transition-colors duration-300">
                  Contact Us
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] tracking-[0.4em] uppercase text-white/30">
            © 2026 Codexa Creative Studio • All Rights Reserved
          </div>
          <div className="flex gap-10">
            {["X", "LinkedIn", "Github", "Dribbble"].map((social) => (
              <a
                key={social}
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
      <div className="absolute -bottom-1/2 -left-1/4 w-200 h-200 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
