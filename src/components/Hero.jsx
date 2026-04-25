import { useEffect, useRef } from "react";
import gsap from "gsap";
import Aurora from "./ui/Aurora";

export default function Hero() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const btnRef = useRef(null);
  const splineRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Initial load animations
    tl.fromTo(
      ".reveal-text",
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.2 },
    )
      .fromTo(
        btnRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8 },
        "-=0.6",
      )
      .fromTo(
        splineRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2 },
        "-=1",
      );
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
     
      className=" relative h-[90vh] mt-[10vh] flex items-center justify-center overflow-hidden bg-transparent "
    >
      {/* Spline Model - Integrated as Background element */}
      <div
        ref={splineRef}
        className="absolute inset-0 w-screen h-full opacity-40 pointer-events-none scale-125 md:scale-100"
      >
        <iframe
          src="https://my.spline.design/circularsolarcopycopy-6eFpQwrEvBeFbEphs3DHhUAL-r0s/"
          className="w-full h-full border-none"
        ></iframe>
      </div>

      {/* Content Layer */}
      <div className=" relative text-center px-6 h-[80vh] mt-[23vh]  ">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-8">
          <div className="overflow-hidden">
            <h1
              ref={headingRef}
              className="reveal-text text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-white"
            >
              WE BUILD DIGITAL <br />
              <span className="bg-linear-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent italic">
                EXPERIENCES
              </span>{" "}
              <br />
              THAT MATTER
            </h1>
          </div>

          <div className="overflow-hidden">
            <p
              ref={subRef}
              className="reveal-text text-lg sm:text-2xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed"
            >
              Codexa is a creative engineering studio focused on building
              high-performance web products with precision.
            </p>
          </div>

          <div ref={btnRef} className="flex flex-col sm:flex-row gap-5 mt-4">
            <a href="#contact" className="group relative">
              <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-500 flex items-center gap-2">
                Start Your Project
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </a>
            <a href="#why-us">
              <button className="px-8 py-4 border border-white/20 text-white font-medium rounded-full backdrop-blur-md hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Gradient Overlay for UX Depth */}
      <div className="absolute bottom-0 left-0 w-full h-[10vh] bg-black  z-10"></div>
    </section>
  );
}
