import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);

  return (
    <section
    id='hero'
      ref={containerRef}
      className="min-h-screen flex items-center justify-center px-4 pt-20 pb-20 relative"
    >
      <div className="container text-center relative z-10">
        <h1
          ref={headingRef}
          className="text-5xl sm:text-6xl lg:text-8xl mb-6 leading-tight"
        >
          We Build Digital <span className="gradient-text">Experiences</span> That Matter
        </h1>

        <p
          ref={subRef}
          className="text-lg sm:text-xl muted-text mb-10 max-w-2xl mx-auto leading-relaxed text-balance"
        >
          Creative solutions tailored to elevate your brand and drive results.
          Let&apos;s transform your vision into reality.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="btn-primary text-lg">
            Start Your Project
          </button>
          <button className="btn-outline text-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
