import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const socials = [
  { app: "Dribble", link: "https://dribbble.com/portion275" },
  { app: "LinkedIn", link: "https://www.linkedin.com/company/portiondev/" }, // Spelling fixed
  { app: "Instagram", link: "https://www.instagram.com/portion.dev/" },
];

const Footer = () => {
  const footerRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        if (!circleRef.current) return;
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
      className="relative w-full z-10 bg-transparent text-white overflow-hidden pt-20 md:pt-32 pb-8 md:pb-12"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-[5vw]">
        
        {/* Main Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-20 md:mb-32 relative gap-12 lg:gap-0">
          
          <div className="max-w-4xl text-center lg:text-left">
            <h2 className="text-[14vw] sm:text-[12vw] lg:text-[8.5vw] font-extrabold brightness-200 leading-[0.9] lg:leading-[0.85] tracking-tighter mb-6 md:mb-8">
              <span className="inline-block">HAVE A</span> <br />
              <span className="inline-block gradient-text italic">PROJECT?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-md mx-auto lg:mx-0 font-light leading-relaxed">
              Transforming complex ideas into seamless digital realities.
              PortionDev is where innovation meets execution.
            </p>
          </div>

          {/* Magnetic Button */}
          <div className="flex justify-center items-center">
            <div
              ref={circleRef}
              className="w-40 h-40 md:w-64 md:h-64 rounded-full border border-white/20 flex items-center justify-center cursor-pointer relative group overflow-hidden transition-colors duration-500 hover:border-blue-500"
            >
              <a href="#contact" className="w-full h-full flex items-center justify-center">
                <div className="absolute inset-0 bg-blue-600 scale-0 group-hover:scale-100 transition-transform duration-700 rounded-full origin-center"></div>
                <span className="relative z-10 text-base md:text-lg uppercase tracking-widest font-bold group-hover:text-white transition-colors duration-300">
                  Contact Us
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col-reverse md:flex-row justify-between items-center gap-6 md:gap-8">
          
          <div className="text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.4em] uppercase text-white/30 text-center">
            © 2026 PortionDev Creative Studio • All Rights Reserved
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {socials.map((social) => (
              <a
                key={social.app}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] md:text-xs font-bold tracking-widest hover:text-blue-500 transition-colors relative group"
              >
                {social.app}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute -bottom-1/2 -left-1/4 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
    </footer>
  );
};

export default Footer;