'use client';

import {  useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhyUs() {
  const containerRef = useRef(null);
  const highlightsRef = useRef([]);

  const highlights = [
    {
      number: '5+',
      label: 'Years Experience',
      description: 'Proven track record of delivering excellence.',
    },
    {
      number: '150+',
      label: 'Projects Completed',
      description: 'Wide range of successful client projects.',
    },
    {
      number: '50+',
      label: 'Happy Clients',
      description: 'Long-term partnerships and satisfied customers.',
    },
    {
      number: '24/7',
      label: 'Support',
      description: 'Dedicated support throughout your project journey.',
    },
  ];


  return (
    <section id='why-us' ref={containerRef} className="py-20 px-4 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
            Why Choose Us
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto text-balance">
            We combine creativity, strategy, and technology to deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              ref={(el) => (highlightsRef.current[index] = el)}
              className="text-center p-6 rounded-lg border border-slate-700 hover:border-slate-500 hover:bg-slate-800/50 transition-all duration-300"
            >
              <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {highlight.number}
              </div>
              <h3 className="text-lg font-semibold mb-2">{highlight.label}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
