"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyUs() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef();

  const highlights = [
    {
      number: "Modern",
      label: "Future-Ready Tech",
      description:
        "We build high-performance interfaces using React, GSAP, and Framer Motion for a seamless feel.",
    },
    {
      number: "24/7",
      label: "Global Support",
      description:
        "Our team is awake when you are. Real-time updates and round-the-clock technical assistance.",
    },
    {
      number: "Responsive",
      label: "Every Screen Matters",
      description:
        "From 4K monitors to the smallest smartphones, your brand will look flawless everywhere.",
    },
    {
      number: "Fast",
      label: "Ultra-Speed Delivery",
      description:
        "Optimized workflows allow us to ship production-ready code faster than the competition.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".char-reveal", {
        y: 120,
        skewY: 16,
        opacity: 0,
        duration: .7, 
        stagger: 0.4,
        ease: "power4.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 50%",
        },
      });

      gsap.from(cardsRef.current, {
        y: 100,
        skewY :23 ,
        opacity: 0,
        duration: .9,
        stagger: 0.2, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cards-grid",
          start: "top 50%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
    id="why-us"
      ref={containerRef}
      className="py-16 md:py-24 px-4 md:px-6 text-white overflow-hidden"
    >
      <div className="max-w-full md:max-w-[95%] mx-auto">
        <div className="mb-16 md:mb-24" ref={titleRef}>
          <div className="overflow-hidden py-2">
            <h2 className="char-reveal text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none">
              CRAFTING THE <br />
              <span className="text-blue-600">NEXT GENERATION.</span>
            </h2>
          </div>

          <div className="overflow-hidden mt-4 md:mt-6">
            <p className="char-reveal text-lg md:text-xl text-slate-400 max-w-2xl font-light leading-relaxed">
              We are a modern digital agency focused on building high-end,
              responsive websites that turn users into loyal customers.
            </p>
          </div>
        </div>

        <div
          ref={cardsRef}
          className="cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 md:p-10 h-[300px] md:h-[350px] flex flex-col justify-end rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-blue-600/50 transition-all duration-700 overflow-hidden"
            >
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-blue-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Index Number Top Left */}
              <div className="text-[100px] md:text-[120px] leading-none font-black absolute top-2 left-4 md:top-4 md:left-6 text-white/5 group-hover:text-blue-600/10 transition-colors duration-700 z-0 pointer-events-none">
                0{index + 1}
              </div>

              <div className="relative z-10">
                <div className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 tracking-tighter group-hover:-translate-y-2 transition-transform duration-500">
                  {item.number}
                </div>
                <h3 className="text-sm md:text-lg font-bold uppercase tracking-widest text-blue-500 mb-2">
                  {item.label}
                </h3>
                <p className="text-slate-400 text-sm font-medium leading-relaxed group-hover:text-slate-200 transition-colors">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
