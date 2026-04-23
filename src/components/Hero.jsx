import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="min-h-screen flex items-center justify-center px-4 pt-20 pb-20 relative"
    >
      <div className="container text-center relative z-10 flex flex-col gap-9">
        <h1
          ref={headingRef}
          className="text-5xl sm:text-6xl lg:text-8xl leading-23.75"
        >
          We Build Digital <span className="gradient-text">Experiences</span>{" "}
          That Matter
        </h1>

        <p ref={subRef} className="text-lg sm:text-xl muted-text ">
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
    </section>
  );
}
