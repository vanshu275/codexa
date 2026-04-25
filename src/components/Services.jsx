
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";

import "swiper/css";

export default function Services() {
  const containerRef = useRef(null);

  const services = [
    {
      title: "Web Design",
      description: "Crafting visually stunning, user-centric designs that turn visitors into loyal customers. We focus on modern aesthetics and seamless UX.",
      icon: "🎨",
    },
    {
      title: "Custom Development",
      description: "Building high-performance, scalable web applications using the MERN stack, GSAP, and cutting-edge frontend technologies.",
      icon: "⚙️",
    },
    {
      title: "Brand Identity",
      description: "Defining your digital presence with unique brand strategies that resonate with your target audience and stand out in the market.",
      icon: "🎯",
    },
    {
      title: "SEO Excellence",
      description: "Ranking your business where it matters. Our data-driven SEO strategies ensure maximum visibility and organic growth.",
      icon: "🔍",
    },
    {
      title: "Digital Growth",
      description: "Scaling your impact with strategic marketing funnels and high-converting campaigns designed for modern businesses.",
      icon: "📊",
    },
  ];

  return (
    <section
      id="services"
      ref={containerRef}
      className="py-25 max-w-[90%] mx-auto overflow-hidden " 
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
          Our <span className="text-blue-500">Expertise</span>
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          We combine technical precision with creative excellence to deliver 
          impactful digital solutions for your business.
        </p>
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={1.2}
        centeredSlides={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 2.5 },
        }}
        onSlideChange={() => console.log("slide change")}
        className="h-[50vh]"
      >
        {services.map((service, index) => (
          <SwiperSlide 
            key={index} 
            className="flex flex-col justify-center items-center px-15 py-16 rounded-3xl 
                       border-l border-r border-slate-700/50 backdrop-blur-md 
                      bg-gradient-to-r from-[#1f4686] to-[#7C3AED]text-center transition-all duration-500 hover:bg-slate-900/50"
          >
            <div className="text-6xl mb-6 drop-shadow-lg">
              {service.icon}
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {service.title}
            </h3>
            
            <p className="text-slate-400 text-base md:text-lg max-w-md mx-auto leading-relaxed text-balance">
              {service.description}
            </p>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}