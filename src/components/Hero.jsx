import {  useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);



  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center justify-center px-4 pt-20 pb-20 bg-linear-to-br from-slate-50 to-slate-100"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1
          ref={headingRef}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight text-balance"
        >
          We Build Digital Experiences That Matter
        </h1>

        <p
          ref={subRef}
          className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed text-balance"
        >
          Creative solutions tailored to elevate your brand and drive results.
          Let&apos;s transform your vision into reality.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors duration-200 text-lg">
            Start Your Project
          </button>
          <button className="px-8 py-4 border-2 border-slate-900 text-slate-900 rounded-lg font-semibold hover:bg-slate-50 transition-colors duration-200 text-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
