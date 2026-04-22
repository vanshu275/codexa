'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const teamRef = useRef([]);

  const team = [
    {
      name: 'Vansh Upadhyay',
      role: 'Creative Director',
      bio: 'Leads our creative vision with 8 years of design expertise.',
    },
    {
      name: 'Dileep Kumawat',
      role: 'Lead Developer',
      bio: 'Builds scalable solutions with 10 years of development experience.',
    },
    {
      name: 'Lakshay Kumar',
      role: 'Strategy Lead',
      bio: 'Drives strategic initiatives with 7 years of business acumen.',
    },
  
  ];


 

  return (
    <section ref={containerRef} className="py-20 px-4 bg-slate-50 items-center text-center">
      <div className="max-w-7xl mx-auto">
        <div
          ref={contentRef}
          className="max-w-3xl mb-16  m-auto"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 text-balance">
            About Our Agency
          </h2>
          <p className="text-lg text-slate-600 mb-4 leading-relaxed">
            Founded in 2019, we&apos;ve grown from a small creative team to a full-service digital agency. Our mission is to empower businesses through innovative digital solutions.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            We believe in collaboration, creativity, and delivering measurable results. Every project is an opportunity to make a meaningful impact on our clients&apos; businesses and their customers.
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-slate-900 mb-12">Our Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 ">
            {team.map((member, index) => (
              <div
                key={index}
                ref={(el) => (teamRef.current[index] = el)}
                className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-full h-32 bg-linear-to-br from-slate-200 to-slate-300 rounded-lg mb-4"></div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">
                  {member.name}
                </h4>
                <p className="text-sm font-semibold text-slate-600 mb-3">
                  {member.role}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
