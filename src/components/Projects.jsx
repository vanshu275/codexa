'use client';

import {  useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef(null);
  const projectsRef = useRef([]);

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Modern e-commerce solution with seamless checkout.',
    },
    {
      title: 'SaaS Dashboard',
      category: 'Web App',
      description: 'Real-time analytics and management dashboard.',
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile App',
      description: 'Secure and intuitive mobile banking experience.',
    },
    {
      title: 'Brand Identity',
      category: 'Branding',
      description: 'Complete brand guidelines and visual identity.',
    },
    {
      title: 'Content Management',
      category: 'Web Development',
      description: 'Flexible CMS for managing digital content.',
    },
    {
      title: 'Digital Agency',
      category: 'Web Design',
      description: 'Portfolio website showcasing creative work.',
    },
  ];



  return (
    <section id='projects' ref={containerRef} className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 text-balance">
            Recent Projects
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto text-balance">
            Explore our portfolio of successful digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectsRef.current[index] = el)}
              className="group overflow-hidden rounded-lg bg-white border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 group-hover:from-slate-300 group-hover:to-slate-400 transition-all duration-300"></div>
              <div className="p-6">
                <span className="inline-block text-sm font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
