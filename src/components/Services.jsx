import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const services = [
    {
      title: "Web Design",
      description:
        "Beautiful, responsive websites tailored to your brand identity and user needs.",
      icon: "🎨",
    },
    {
      title: "Web Development",
      description:
        "Robust, scalable web applications built with modern technologies and best practices.",
      icon: "⚙️",
    },
    {
      title: "Brand Strategy",
      description:
        "Strategic branding solutions that help your business stand out and connect with audiences.",
      icon: "🎯",
    },
    {
      title: "SEO Optimization",
      description:
        "Comprehensive SEO strategies to improve visibility and drive organic traffic.",
      icon: "🔍",
    },
    {
      title: "Digital Marketing",
      description:
        "Data-driven marketing campaigns that reach your target audience effectively.",
      icon: "📊",
    },
  ];

  return (
    <section 
    id="services"
    ref={containerRef} className="py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive solutions to help your business grow and thrive.
          </p>
        </div>

        {/* Flex ki jagah Grid use kar rahe hain */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition-all duration-300 group bg-slate-50/50"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
