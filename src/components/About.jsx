'use client';

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import team images
import imgVansh from '../assets/Team/Vansh.webp';
import imgDeepak from '../assets/Team/Deepak.webp';
import imgLakshay from '../assets/Team/Lakshay.webp';

gsap.registerPlugin(ScrollTrigger);

/* ── Word-by-word split text component ── */
function SplitWords({ text, className, style, refCallback }) {
  return (
    <span className={className} style={{ ...style, display: 'inline' }} ref={refCallback}>
      {text.split(' ').map((word, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top' }}>
          <span className="split-word" style={{ display: 'inline-block', willChange: 'transform, opacity' }}>
            {word}
          </span>
          {i < text.split(' ').length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const teamHeadingRef = useRef(null);
  const cardsRef = useRef([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate agency heading
      if (headingRef.current) {
        const words = headingRef.current.querySelectorAll('.split-word');
        gsap.fromTo(words,
          { y: '120%', opacity: 0, rotateX: 50 },
          {
            y: '0%', opacity: 1, rotateX: 0, duration: 1, stagger: 0.06, ease: 'power4.out',
            scrollTrigger: { trigger: headingRef.current, start: 'top 85%', toggleActions: 'play none none none' }
          }
        );
      }

      // Animate agency text lines
      if (textRef.current) {
        const lines = textRef.current.children;
        gsap.fromTo(lines,
          { opacity: 0, y: 30, clipPath: 'inset(100% 0 0 0)' },
          {
            opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)', duration: 0.9, stagger: 0.15, ease: 'power3.out',
            scrollTrigger: { trigger: textRef.current, start: 'top 80%', toggleActions: 'play none none none' }
          }
        );
      }

      // Animate team heading
      if (teamHeadingRef.current) {
        const words = teamHeadingRef.current.querySelectorAll('.split-word');
        gsap.fromTo(words,
          { y: '120%', opacity: 0, rotateX: 50 },
          {
            y: '0%', opacity: 1, rotateX: 0, duration: 1, stagger: 0.06, ease: 'power4.out',
            scrollTrigger: { trigger: teamHeadingRef.current, start: 'top 85%', toggleActions: 'play none none none' }
          }
        );
      }

      // Animate team cards (bento box)
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1, y: 0, scale: 1, duration: 0.8, delay: i * 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none none' }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const team = [
    {
      name: 'Vansh Upadhyay',
      role: 'Creative Director',
      bio: 'Leads our creative vision with 2 years of design expertise.',
      image: imgVansh,
      span: 'md:col-span-2',
      glow: 'rgba(255, 0, 50, 0.15)', // Subtle Red
      hoverGlow: 'rgba(255, 0, 80, 0.65)', // Vibrant Red
    },
    {
      name: 'Dileep Kumawat',
      role: 'Lead Developer',
      bio: 'Builds scalable solutions with 2 years of development experience.',
      image: imgDeepak,
      span: 'md:col-span-1',
      glow: 'rgba(168, 85, 247, 0.15)', // Subtle Purple
      hoverGlow: 'rgba(168, 85, 247, 0.65)', // Vibrant Purple
    },
    {
      name: 'Lakshay Kumar',
      role: 'Strategy Lead',
      bio: 'Drives strategic initiatives with 2 years of business acumen.',
      image: imgLakshay,
      span: 'md:col-span-1',
      glow: 'rgba(59, 130, 246, 0.15)', // Subtle Blue
      hoverGlow: 'rgba(59, 130, 246, 0.65)', // Vibrant Blue
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 sm:py-32 relative overflow-hidden" style={{ background: '#050505' }}>
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full pointer-events-none opacity-40">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] right-[20%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Agency Section */}
        <div className="max-w-4xl mx-auto text-center mb-24 sm:mb-32">
          <span className="inline-block text-xs tracking-[0.3em] uppercase mb-5 px-4 py-1.5 rounded-full"
            style={{ color: '#00e5ff', border: '1px solid rgba(0,229,255,0.15)', background: 'rgba(0,229,255,0.04)' }}>
            Who We Are
          </span>
          <h2 ref={headingRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8" style={{ perspective: '800px' }}>
            <SplitWords text="About Our Agency" />
          </h2>

          <div ref={textRef} className="flex flex-col gap-6 text-lg sm:text-xl text-white/50 font-light leading-relaxed max-w-3xl mx-auto">
            <p>
              Founded in 2019, we&apos;ve grown from a small creative team to a full-service digital agency. Our mission is to empower businesses through innovative, futuristic digital solutions.
            </p>
            <p>
              We believe in collaboration, creativity, and delivering measurable results. Every project is an opportunity to make a meaningful, cinematic impact on our clients&apos; businesses and their customers.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center mb-16">
            <h3 ref={teamHeadingRef} className="text-3xl sm:text-4xl font-bold tracking-tight text-white" style={{ perspective: '800px' }}>
              <SplitWords text="Our Team" />
            </h3>
          </div>

          <div className="flex flex-col md:flex-row gap-6 h-auto md:h-[500px]">
            {team.map((member, index) => {
              const isHovered = hoveredIndex === index;
              const isAnyHovered = hoveredIndex !== null;

              let widthClass = 'md:w-[25%]';
              if (isHovered) {
                widthClass = 'md:w-[50%]';
              } else if (!isAnyHovered && index === 0) {
                widthClass = 'md:w-[50%]';
              }

              return (
                <div
                  key={member.name}
                  ref={el => cardsRef.current[index] = el}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`group relative rounded-3xl overflow-hidden flex flex-col justify-end min-h-[400px] md:min-h-full border border-white/5 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${widthClass} hover:z-10 hover:shadow-2xl w-full`}
                  style={{ background: 'rgba(10, 10, 10, 0.6)', backdropFilter: 'blur(20px)' }}
                >
                  {/* Subtle Inner Glow */}
                  <div className="absolute inset-0 transition-opacity duration-700 opacity-100 group-hover:opacity-0"
                    style={{ background: `radial-gradient(circle at center, ${member.glow} 0%, transparent 70%)` }} />

                  {/* Vibrant Hover Glow */}
                  <div className="absolute inset-0 transition-opacity duration-700 opacity-0 group-hover:opacity-100"
                    style={{ background: `radial-gradient(circle at center, ${member.hoverGlow} 0%, transparent 80%)` }} />

                  {/* Top gradient for depth */}
                  <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent h-1/3 opacity-20" />

                  {/* Team Member Image */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[85%] flex items-end justify-center pointer-events-none">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-auto object-contain object-bottom transition-transform duration-700 group-hover:scale-105"
                      style={{ filter: 'drop-shadow(0 -10px 30px rgba(0,0,0,0.5))' }}
                    />
                  </div>

                  {/* Bottom Text Content Area */}
                  <div className="relative z-10 p-6 sm:p-8 w-full transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 bg-linear-to-t from-[#050505] via-[#050505]/90 to-transparent pt-24">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                      <div className="whitespace-nowrap transition-all duration-500">
                        <h4 className="text-2xl font-bold text-white mb-1 tracking-tight">
                          {member.name}
                        </h4>
                        <p className="text-sm font-medium tracking-wide uppercase" style={{ color: '#00e5ff' }}>
                          {member.role}
                        </p>
                      </div>
                      {/* Bio only shows nicely on the hovered card (expanding) */}
                      <div className={`overflow-hidden transition-all duration-500 hidden md:block ${isHovered ? 'max-w-[250px] opacity-100 delay-100' : 'max-w-0 opacity-0'}`}>
                        <p className="text-sm text-white/50 min-w-[200px]">
                          {member.bio}
                        </p>
                      </div>
                    </div>
                    {/* Mobile bio */}
                    <p className="text-sm text-white/50 mt-4 md:hidden">
                      {member.bio}
                    </p>
                  </div>

                  {/* Border highlight effect on hover */}
                  <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-3xl transition-colors duration-500 pointer-events-none" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
