import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 
import "swiper/css";
import "swiper/css/effect-coverflow";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef(null);

  const services = [
    { title: "Web Design", description: "Crafting visually stunning, user-centric designs that turn visitors into loyal customers.", icon: "🎨" },
    { title: "Custom Dev", description: "High-performance applications built with MERN stack and smooth GSAP animations.", icon: "⚙️" },
    { title: "Brand Identity", description: "Unique brand strategies that resonate with your audience and stand out.", icon: "🎯" },
    { title: "SEO Growth", description: "Data-driven SEO strategies to ensure maximum visibility and organic growth.", icon: "🔍" },
    { title: "3D Experiences", description: "Immersive WebGL and Three.js environments that elevate your brand's digital presence.", icon: "🧊" }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate titles
      gsap.from(".service-title", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%", 
        }
      });

      // Animate slider entrance
      gsap.from(".swiper-container-wrapper", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".swiper-container-wrapper",
          start: "top 75%",
        }
      });
    }, sectionRef);

    return () => ctx.revert(); 
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 overflow-hidden min-h-screen flex flex-col justify-center relative">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="text-center mb-16 px-4 relative z-10">
        <h2 className="service-title text-5xl md:text-8xl font-black text-white mb-4 tracking-tighter">
          OUR <span className="text-transparent bg-clip-text bg-linear-to-r from-[#3B82F6] to-[#7C3AED]">SERVICES</span>
        </h2>
        <p className="service-title text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto">
          We combine cutting-edge technology with premium design to deliver experiences that leave a lasting impression.
        </p>
      </div>

      <div className="swiper-container-wrapper w-full px-4 relative z-10">
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.2}
          speed={800}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="w-full py-10!"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div className={`relative group flex flex-col h-[450px] md:h-[500px] p-8 md:p-10 rounded-[2rem] 
                              bg-[#0a0a0a] border transition-all duration-700 overflow-hidden
                              ${isActive ? 'border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.1)]' : 'border-white/5 opacity-50 scale-90'}`}>
                  
                  {/* Animated Background Gradient */}
                  <div className={`absolute inset-0 bg-linear-to-b from-blue-600/10 via-transparent to-transparent transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`} />

                  {/* Number Indicator */}
                  <div className="absolute top-6 right-8 text-5xl font-black text-white/5 group-hover:text-white/10 transition-colors">
                    0{index + 1}
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon Container */}
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-auto
                                  bg-white/5 border border-white/10 transition-all duration-500
                                  ${isActive ? 'scale-110 shadow-[0_0_20px_rgba(59,130,246,0.2)] border-blue-500/30' : ''}`}>
                      {service.icon}
                    </div>
                    
                    <div className="mt-8">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Bottom Line Indicator */}
                    <div className={`h-1 rounded-full mt-8 transition-all duration-700
                                  ${isActive ? 'w-full bg-linear-to-r from-blue-500 to-purple-500' : 'w-12 bg-white/10'}`} />
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}