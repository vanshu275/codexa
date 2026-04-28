import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 
import "swiper/css";

// 2. Register Plugin
gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef(null);

  const services = [
    { title: "Web Design", description: "Crafting visually stunning, user-centric designs that turn visitors into loyal customers.", icon: "🎨" },
    { title: "Custom Dev", description: "High-performance applications built with MERN stack and smooth GSAP animations.", icon: "⚙️" },
    { title: "Brand Identity", description: "Unique brand strategies that resonate with your audience and stand out.", icon: "🎯" },
    { title: "SEO Growth", description: "Data-driven SEO strategies to ensure maximum visibility and organic growth.", icon: "🔍" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-title", {
        y: 100,
        opacity: 0,
        duration: .4,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%", 
          toggleActions: "play none none reverse", 
        }
      });

      
      gsap.from(".swiper-container-wrapper", {
        x: 200,
        opacity: 0,
        duration: .8,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
        }
      });
    }, sectionRef);

    return () => ctx.revert(); 
  }, []);

  const onSlideChange = (swiper) => {
    const activeSlide = swiper.slides[swiper.activeIndex];
    const elements = activeSlide.querySelectorAll(".animate-me");

    gsap.fromTo(elements, 
      { y: 40, opacity: 0, scale: 0.8 }, 
      { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: "back.out(1.7)" }
    );
  };

  return (
    <section ref={sectionRef} className="py-24  overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="text-center mb-16 px-4">
        <h2 className="service-title text-5xl md:text-8xl font-black text-white mb-4 tracking-tighter">
          OUR <span className="text-transparent bg-clip-text bg-linear-to-r from-[#3B82F6] to-[#7C3AED]">SERVICES</span>
        </h2>
        <p className="service-title text-slate-500 text-lg md:text-xl font-medium">
          Innovation meets execution. Swipe to see more.
        </p>
      </div>

      <div className="swiper-container-wrapper w-full px-4">
        <Swiper
          spaceBetween={40}
          slidesPerView={1.2}
          centeredSlides={true}
          speed={1000}
          onSlideChange={onSlideChange}
          breakpoints={{
            1024: { slidesPerView: 2.5 }
          }}
          className="w-full cursor-grab active:cursor-grabbing"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="relative group flex flex-col justify-center items-center h-[55vh] px-8 md:px-14 rounded-[2.5rem] 
                            border-l border-r border-white/5 backdrop-blur-3xl bg-white/[0.02] 
                            transition-all duration-700 hover:bg-white/[0.05] hover:border-white/20">
                
                {/* Background Glow for Depth */}
                <div className="absolute -z-10 w-60 h-60 bg-blue-600/10 blur-[120px] rounded-full group-hover:bg-purple-600/20 transition-all duration-700" />

                <div className="animate-me text-8xl mb-8 filter drop-shadow-lg group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                
                <h3 className="animate-me text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight">
                  {service.title}
                </h3>
                
                <p className="animate-me text-slate-400 text-center text-lg leading-relaxed max-w-md opacity-80 group-hover:opacity-100 transition-opacity">
                  {service.description}
                </p>

                <div className="animate-me w-24 h-1 bg-linear-to-r from-[#3B82F6] to-[#7C3AED] mt-12 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.4)]" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}