import { useRef } from "react";
import Aurora from "./ui/Aurora";

export default function Hero() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="hero-section relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Aurora
          colorStops={["#3B82F6", "#7C3AED", "#06B6D4", "#A855F7"]}
          amplitude={0.4}
          blend={0.85}
        />
      </div>

      <div className="hero-content container text-center relative z-10 flex flex-col items-center gap-6">
        <h1
          ref={headingRef}
          className="text-5xl sm:text-6xl lg:text-7xl leading-tight font-bold"
        >
          We Build Digital <span className="gradient-text">Experiences</span>{" "}
          That Matter
        </h1>

        <p ref={subRef} className="text-lg sm:text-xl muted-text max-w-2xl mx-auto">
          Creative solutions tailored to elevate your brand and drive results.
          Let&apos;s transform your vision into reality.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="#contact">
            <button className="btn-primary text-lg">Start Your Project</button>
          </a>
          <a href="#why-us">
            <button className="btn-outline text-lg">Learn More</button>
          </a>
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-10 relative z-10">
        <div className="w-[500px] h-[500px]">
          <iframe
            src="https://my.spline.design/circularsolarcopycopy-6eFpQwrEvBeFbEphs3DHhUAL-r0s/"
            frameBorder="0"
            className="w-full h-full border-none"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
