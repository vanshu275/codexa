import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const btnsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.5 } });

      tl.fromTo(
        ".hero-badge",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      )
      .fromTo(
        ".hero-title-line span",
        { y: 100, opacity: 0, rotateX: -40 },
        { y: 0, opacity: 1, rotateX: 0, stagger: 0.15 },
        "-=0.8"
      )
      .fromTo(
        textRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=1.2"
      )
      .fromTo(
        btnsRef.current.children,
        { y: 20, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, stagger: 0.1 },
        "-=1.2"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[90vh] mt-[10vh] flex items-center justify-center overflow-hidden bg-transparent"
    >
      {/* Sleek Code-Inspired Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Status Badge */}
        <div className="hero-badge mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-xs font-semibold text-slate-300 tracking-[0.2em] uppercase">
            Creative Engineering
          </span>
        </div>

        {/* Staggered 3D Heading */}
        <h1 ref={headingRef} className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] mb-6 perspective-[1000px]">
          <div className="hero-title-line overflow-hidden py-1">
            <span className="inline-block text-white origin-bottom">CRAFTING</span>
          </div>
          <div className="hero-title-line overflow-hidden py-1">
            <span className="inline-block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent origin-bottom">
              DIGITAL EXCELLENCE
            </span>
          </div>
          <div className="hero-title-line overflow-hidden py-1">
            <span className="inline-block text-white origin-bottom italic">WITH CODE</span>
          </div>
        </h1>

        {/* Subtitle */}
        <p ref={textRef} className="text-lg sm:text-xl text-slate-400 max-w-2xl mb-10 font-light leading-relaxed">
          We engineer high-performance, visually stunning web applications that push the boundaries of modern digital experiences.
        </p>

        {/* Action Buttons */}
        <div ref={btnsRef} className="flex flex-col sm:flex-row gap-5">
          <a href="#projects" className="group relative">
            <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all duration-500 flex items-center gap-2">
              View Our Work
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </a>
          <a href="#contact">
            <button className="px-8 py-4 border border-white/20 text-white font-medium rounded-full backdrop-blur-md hover:bg-white/10 hover:border-white/40 transition-all duration-300">
              Start a Project
            </button>
          </a>
        </div>
      </div>

      {/* Bottom Fade out matching your existing theme */}
      <div className="absolute bottom-0 left-0 w-full h-[10vh] bg-gradient-to-t from-[#050505] to-transparent z-10" />
    </section>
  );
}