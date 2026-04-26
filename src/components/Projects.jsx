import { useRef, useEffect, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import thumbSpotify from '../assets/project-video-thumbnail/Spotify-but-better.webp';
import thumbGame from '../assets/project-video-thumbnail/game-showcase.webp';
import thumbMeta from '../assets/project-video-thumbnail/metaverse-web3.webp';
import thumbMusic from '../assets/project-video-thumbnail/music-streaming-with-ai.webp';
import thumbPortfolio from '../assets/project-video-thumbnail/portfolio-website.webp';
import vidSpotify from '../assets/project-video/Spotify-but-better.webm';
import vidGame from '../assets/project-video/game-showcase.webm';
import vidMeta from '../assets/project-video/metaverse-web3.webm';
import vidMusic from '../assets/project-video/music-streaming-with-ai.webm';
import vidPortfolio from '../assets/project-video/portfolio-website.webm';

const projects = [
  {
    title: 'Spotify — But Better',
    description: 'A reimagined music streaming experience with superior UI, social features, and real-time collaborative playlists that redefine how people discover music.',
    tech: ['React', 'Node.js', 'MongoDB', 'Rest API', 'JWT', 'Zustand', 'TailwindCSS', 'Spline'],
    thumbnail: thumbSpotify, video: vidSpotify, cta: 'View Project',
  },
  {
    title: 'Game Showcase Platform',
    description: 'An immersive game discovery platform featuring cinematic trailers, community reviews, and personalized recommendation engine powered by machine learning.',
    tech: ['Next.js', 'TailwindCSS', 'JavaScript'],
    thumbnail: thumbGame, video: vidGame, cta: 'View Project',
  },
  {
    title: 'Metaverse Web3 Portal',
    description: 'A decentralized gateway to virtual worlds — featuring wallet integration, NFT galleries, and real-time multiplayer environments on the blockchain.',
    tech: ['Solidity', 'React', 'TailwindCSS',],
    thumbnail: thumbMeta, video: vidMeta, cta: 'View Project',
  },
  {
    title: 'AI Music Streaming',
    description: 'Next-generation streaming service with AI-curated playlists, mood detection, and adaptive audio quality that learns your listening preferences.',
    tech: ['Python', 'TensorFlow', 'React', 'AWS', 'TailwindCSS'],
    thumbnail: thumbMusic, video: vidMusic, cta: 'View Project',
  },
  {
    title: 'Portfolio Website',
    description: 'A stunning creative portfolio with 3D interactions, scroll-driven storytelling, and seamless animations that showcase work with cinematic flair.',
    tech: ['React', 'GSAP', 'TailwindCSS', 'JavaScript'],
    thumbnail: thumbPortfolio, video: vidPortfolio, cta: 'View Project',
  },
];

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

/* ── Animate split words helper ── */
function animateSplitWords(container, triggerEl, delay = 0) {
  if (!container) return;
  const words = container.querySelectorAll('.split-word');
  if (!words.length) return;
  gsap.fromTo(words,
    { y: '110%', opacity: 0, rotateX: 40 },
    {
      y: '0%', opacity: 1, rotateX: 0,
      duration: 0.8, stagger: 0.04, delay,
      ease: 'power4.out',
      scrollTrigger: { trigger: triggerEl, start: 'top 78%', toggleActions: 'play none none none' },
    }
  );
}

/* ══════ VIDEO MODAL ══════ */
function VideoModal({ project, onClose }) {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const tl = gsap.timeline();
    tl.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.35, ease: 'power2.out' });
    tl.fromTo(contentRef.current, { opacity: 0, scale: 0.92, y: 40 }, { opacity: 1, scale: 1, y: 0, duration: 0.45, ease: 'power3.out' }, '-=0.15');
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleClose = useCallback(() => {
    const tl = gsap.timeline({ onComplete: onClose });
    tl.to(contentRef.current, { opacity: 0, scale: 0.92, y: 30, duration: 0.3, ease: 'power2.in' });
    tl.to(overlayRef.current, { opacity: 0, duration: 0.25, ease: 'power2.in' }, '-=0.15');
  }, [onClose]);

  return (
    <div ref={overlayRef} onClick={handleClose} className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8"
      style={{ background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(12px)' }}>
      <div ref={contentRef} onClick={e => e.stopPropagation()} className="relative w-full max-w-5xl">
        <button onClick={handleClose}
          className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors text-sm tracking-widest uppercase flex items-center gap-2 cursor-pointer">
          Close
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
        </button>
        <div className="relative rounded-2xl overflow-hidden"
          style={{ border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 0 80px rgba(0,229,255,0.08), 0 25px 60px rgba(0,0,0,0.6)' }}>
          <video src={project.video} controls autoPlay className="w-full aspect-video bg-black" />
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div>
            <h3 className="text-white text-xl font-semibold tracking-tight">{project.title}</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tech.map(t => (
                <span key={t} className="text-xs tracking-wider uppercase px-3 py-1 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.06)' }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════ CARD INNER (shared) ══════ */
function CardInner({ project, imageRef, titleRef, descRef, techRef, ctaRef, onPlay }) {
  return (
    <div className="rounded-2xl overflow-hidden transition-all duration-500"
      style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.06)', boxShadow: '0 4px 40px rgba(0,0,0,0.4)' }}>
      {/* Thumbnail */}
      <div ref={imageRef} className="relative overflow-hidden cursor-pointer" onClick={() => onPlay(project)}>
        <img src={project.thumbnail} alt={project.title}
          className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all duration-500">
          <div className="w-14 h-14 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100"
            style={{ background: 'rgba(0,229,255,0.15)', border: '1px solid rgba(0,229,255,0.4)', backdropFilter: 'blur(8px)' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#00e5ff"><path d="M8 5v14l11-7z" /></svg>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16" style={{ background: 'linear-gradient(to top, #0a0a0a, transparent)' }} />
      </div>

      {/* Text Content with split word animation refs */}
      <div className="p-5 sm:p-6 pt-3">
        <h3 ref={titleRef} className="text-lg sm:text-xl font-bold tracking-tight mb-2" style={{ color: '#f0f0f0', perspective: '600px' }}>
          <SplitWords text={project.title} />
        </h3>

        <div ref={descRef} style={{ overflow: 'hidden', perspective: '600px' }}>
          <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, clipPath: 'inset(0 0 0 0)' }}>
            {project.description}
          </p>
        </div>

        <div ref={techRef} className="flex flex-wrap gap-2 mb-5">
          {project.tech.map(t => (
            <span key={t} className="tech-tag text-[11px] tracking-wider uppercase px-3 py-1 rounded-full"
              style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(0,229,255,0.7)', border: '1px solid rgba(0,229,255,0.1)' }}>{t}</span>
          ))}
        </div>

        <div ref={ctaRef}>
          <button onClick={() => onPlay(project)}
            className="inline-flex items-center gap-2 text-sm font-medium tracking-wide cursor-pointer transition-all duration-300 group/cta"
            style={{ color: '#00e5ff' }}>
            <span className="group-hover/cta:tracking-widest transition-all duration-300">{project.cta}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              className="transition-transform duration-300 group-hover/cta:translate-x-1"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

/* ══════ PREMIUM TEXT ANIMATION HOOK ══════ */
function useCardTextAnimation(cardRef, titleRef, descRef, techRef, ctaRef, imageRef, deps = []) {
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const ctx = gsap.context(() => {
      // Image clipPath reveal
      if (imageRef?.current) {
        gsap.fromTo(imageRef.current,
          { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
          {
            clipPath: 'inset(0 0% 0 0)', opacity: 1,
            duration: 1.1, ease: 'power3.inOut',
            scrollTrigger: { trigger: card, start: 'top 82%', toggleActions: 'play none none none' },
          }
        );
      }

      // Title — word-by-word 3D reveal
      animateSplitWords(titleRef?.current, card, 0.15);

      // Description — slide up with clipPath
      if (descRef?.current) {
        gsap.fromTo(descRef.current,
          { y: 30, opacity: 0, clipPath: 'inset(100% 0 0 0)' },
          {
            y: 0, opacity: 1, clipPath: 'inset(0% 0 0 0)',
            duration: 0.9, delay: 0.35, ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 78%', toggleActions: 'play none none none' },
          }
        );
      }

      // Tech tags — stagger pop in
      if (techRef?.current) {
        const tags = techRef.current.querySelectorAll('.tech-tag');
        gsap.fromTo(tags,
          { scale: 0, opacity: 0, y: 10 },
          {
            scale: 1, opacity: 1, y: 0,
            duration: 0.5, stagger: 0.08, delay: 0.5, ease: 'back.out(2)',
            scrollTrigger: { trigger: card, start: 'top 78%', toggleActions: 'play none none none' },
          }
        );
      }

      // CTA — slide from left
      if (ctaRef?.current) {
        gsap.fromTo(ctaRef.current,
          { x: -30, opacity: 0 },
          {
            x: 0, opacity: 1,
            duration: 0.7, delay: 0.65, ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 78%', toggleActions: 'play none none none' },
          }
        );
      }
    });

    return () => ctx.revert();
  }, deps);
}

/* ══════ DESKTOP TIMELINE CARD ══════ */
function ProjectCard({ project, index, onPlay }) {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const techRef = useRef(null);
  const ctaRef = useRef(null);
  const lineRef = useRef(null);
  const isLeft = index % 2 === 0;

  // Card slide-in + connector
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(card,
        { opacity: 0, x: isLeft ? -80 : 80, y: 40 },
        {
          opacity: 1, x: 0, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 82%', end: 'top 55%', toggleActions: 'play none none none' }
        }
      );
      if (lineRef.current) {
        gsap.fromTo(lineRef.current, { scaleX: 0 },
          {
            scaleX: 1, duration: 0.8, ease: 'power2.out',
            scrollTrigger: { trigger: card, start: 'top 78%', toggleActions: 'play none none none' }
          });
      }
    });
    return () => ctx.revert();
  }, [isLeft]);

  // Premium text animations
  useCardTextAnimation(cardRef, titleRef, descRef, techRef, ctaRef, imageRef, [isLeft]);

  return (
    <div className="projects-timeline-item"
      style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: 0, minHeight: 340 }}>
      <div className={isLeft ? 'flex justify-end' : ''}>
        {isLeft && (
          <div ref={cardRef} className="projects-card group" style={{ maxWidth: 520, width: '100%' }}>
            <CardInner project={project} imageRef={imageRef} titleRef={titleRef} descRef={descRef} techRef={techRef} ctaRef={ctaRef} onPlay={onPlay} />
          </div>
        )}
      </div>
      <div className="flex flex-col items-center relative" style={{ width: 60 }}>
        <div ref={lineRef} className="absolute top-1/2 -translate-y-1/2"
          style={{ width: 60, height: 1, background: 'rgba(255,255,255,0.12)', transformOrigin: isLeft ? 'right' : 'left' }} />
        <div className="relative z-10"
          style={{ width: 10, height: 10, borderRadius: '50%', background: '#00e5ff', boxShadow: '0 0 14px rgba(0,229,255,0.5)' }} />
      </div>
      <div>
        {!isLeft && (
          <div ref={cardRef} className="projects-card group" style={{ maxWidth: 520, width: '100%' }}>
            <CardInner project={project} imageRef={imageRef} titleRef={titleRef} descRef={descRef} techRef={techRef} ctaRef={ctaRef} onPlay={onPlay} />
          </div>
        )}
      </div>
    </div>
  );
}

/* ══════ TABLET TIMELINE CARD (offset layout) ══════ */
function TabletProjectCard({ project, index, onPlay }) {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const techRef = useRef(null);
  const ctaRef = useRef(null);
  const dotRef = useRef(null);
  const isLeft = index % 2 === 0;

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(card,
        { opacity: 0, x: isLeft ? -50 : 50, y: 30 },
        {
          opacity: 1, x: 0, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none none' }
        }
      );
      if (dotRef.current) {
        gsap.fromTo(dotRef.current, { scale: 0 },
          {
            scale: 1, duration: 0.5, ease: 'back.out(3)',
            scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none none' }
          });
      }
    });
    return () => ctx.revert();
  }, [isLeft]);

  useCardTextAnimation(cardRef, titleRef, descRef, techRef, ctaRef, imageRef, []);

  return (
    <div className="relative flex items-start gap-4" style={{ paddingLeft: 28 }}>
      {/* Timeline dot */}
      <div ref={dotRef} className="absolute left-0 top-8 z-10"
        style={{ width: 10, height: 10, borderRadius: '50%', background: '#00e5ff', boxShadow: '0 0 14px rgba(0,229,255,0.5)' }} />
      {/* Card */}
      <div ref={cardRef} className="projects-card group flex-1" style={{ maxWidth: 600 }}>
        <CardInner project={project} imageRef={imageRef} titleRef={titleRef} descRef={descRef} techRef={techRef} ctaRef={ctaRef} onPlay={onPlay} />
      </div>
    </div>
  );
}

/* ══════ MOBILE CARD ══════ */
function MobileProjectCard({ project, index, onPlay }) {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const techRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(card, { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none none' }
        });
    });
    return () => ctx.revert();
  }, []);

  useCardTextAnimation(cardRef, titleRef, descRef, techRef, ctaRef, imageRef, []);

  return (
    <div ref={cardRef} className="projects-card group">
      <CardInner project={project} imageRef={imageRef} titleRef={titleRef} descRef={descRef} techRef={techRef} ctaRef={ctaRef} onPlay={onPlay} />
    </div>
  );
}

/* ══════ MAIN PROJECTS SECTION ══════ */
export default function Projects() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const timelineTrackRef = useRef(null);
  const tabletTrackRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section heading — word-by-word
      if (headingRef.current) {
        const headingWords = headingRef.current.querySelectorAll('.split-word');
        gsap.fromTo(headingWords,
          { y: '120%', opacity: 0, rotateX: 50 },
          {
            y: '0%', opacity: 1, rotateX: 0, duration: 1, stagger: 0.06, ease: 'power4.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' }
          }
        );
      }

      // Badge
      const badge = sectionRef.current?.querySelector('.projects-badge');
      if (badge) {
        gsap.fromTo(badge, { y: 20, opacity: 0, scale: 0.9 },
          {
            y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 82%', toggleActions: 'play none none none' }
          });
      }

      // Subtitle — clipPath reveal
      if (subRef.current) {
        gsap.fromTo(subRef.current,
          { opacity: 0, y: 20, clipPath: 'inset(100% 0 0 0)' },
          {
            opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)', duration: 0.9, delay: 0.4, ease: 'power3.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' }
          });
      }

      // Desktop timeline track
      if (timelineTrackRef.current) {
        gsap.fromTo(timelineTrackRef.current, { scaleY: 0 },
          {
            scaleY: 1, ease: 'none',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 60%', end: 'bottom 40%', scrub: 1 }
          });
      }

      // Tablet timeline track
      if (tabletTrackRef.current) {
        gsap.fromTo(tabletTrackRef.current, { scaleY: 0 },
          {
            scaleY: 1, ease: 'none',
            scrollTrigger: { trigger: tabletTrackRef.current.parentElement, start: 'top 60%', end: 'bottom 40%', scrub: 1 }
          });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section id="projects" ref={sectionRef} className="relative overflow-hidden"
        style={{ paddingTop: 120, paddingBottom: 120, background: '#050505' }}>
        {/* Ambient glow */}
        <div className="absolute pointer-events-none"
          style={{
            top: '10%', left: '50%', transform: 'translateX(-50%)', width: 800, height: 800, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,229,255,0.03) 0%, transparent 70%)'
          }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-20 sm:mb-28">
            <div>
              <span className="projects-badge inline-block text-xs tracking-[0.3em] uppercase mb-5 px-4 py-1.5 rounded-full"
                style={{ color: '#00e5ff', border: '1px solid rgba(0,229,255,0.15)', background: 'rgba(0,229,255,0.04)' }}>
                Selected Work
              </span>
              <h2 ref={headingRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
                style={{ color: '#ffffff', perspective: '800px' }}>
                <SplitWords text="Projects" />
              </h2>
            </div>
            <p ref={subRef} className="mt-5 text-base sm:text-lg max-w-xl mx-auto"
              style={{ color: 'rgba(255,255,255,0.35)' }}>
              A curated showcase of digital products we've designed, developed, and delivered.
            </p>
          </div>

          {/* Desktop Timeline (lg+) */}
          <div className="hidden lg:block relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0" style={{ width: 1 }}>
              <div ref={timelineTrackRef} className="w-full h-full origin-top"
                style={{ background: 'linear-gradient(to bottom, rgba(0,229,255,0.25), rgba(124,58,237,0.15), rgba(255,255,255,0.05))' }} />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 -top-2"
              style={{ width: 8, height: 8, borderRadius: '50%', background: '#00e5ff', boxShadow: '0 0 16px rgba(0,229,255,0.6)' }} />
            <div className="flex flex-col gap-16">
              {projects.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} onPlay={setActiveProject} />
              ))}
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-2"
              style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', boxShadow: '0 0 10px rgba(255,255,255,0.1)' }} />
          </div>

          {/* Tablet Layout (md only) — left-aligned timeline */}
          <div className="hidden md:block lg:hidden relative">
            <div className="absolute left-[4px] top-0 bottom-0" style={{ width: 1 }}>
              <div ref={tabletTrackRef} className="w-full h-full origin-top"
                style={{ background: 'linear-gradient(to bottom, rgba(0,229,255,0.25), rgba(124,58,237,0.15), rgba(255,255,255,0.05))' }} />
            </div>
            <div className="flex flex-col gap-12">
              {projects.map((project, i) => (
                <TabletProjectCard key={project.title} project={project} index={i} onPlay={setActiveProject} />
              ))}
            </div>
          </div>

          {/* Mobile Layout (below md) */}
          <div className="md:hidden flex flex-col gap-10">
            {projects.map((project, i) => (
              <MobileProjectCard key={project.title} project={project} index={i} onPlay={setActiveProject} />
            ))}
          </div>
        </div>
      </section>

      {activeProject && <VideoModal project={activeProject} onClose={() => setActiveProject(null)} />}
    </>
  );
}
