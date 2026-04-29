import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Why Us", href: "#why-us" },
  { name: "About", href: "#about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <nav className="navbar z-50 h-[10vh]">
        <div className="container h-full">
          <div className="nav-wrapper h-full flex items-center justify-between">
            <a href="#hero" className="logo select-none z-50 relative">
              <span className="font-bold text-cyan-400">P</span>ortion
              <span className="font-bold text-cyan-400">D</span>ev
            </a>

            {/* Desktop Navigation */}
            <ul className="nav-links hidden md:flex items-center m-0 p-0">
              {NAV_LINKS.map(({ name, href }) => (
                <li key={name}>
                  <a href={href}>
                    {name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="hidden md:block z-50 relative nav-actions">
              <a href="#contact">
                <button className="btn-outline">Let's Talk</button>
              </a>
            </div>

            {/* Mobile Hamburger Icon */}
            <button 
              className="md:hidden z-50 p-2 text-white/70 hover:text-cyan-400 transition-colors relative cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#050505]/98 backdrop-blur-2xl z-40 transition-transform duration-500 ease-in-out flex flex-col justify-center items-center gap-8 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className="nav-links flex flex-col items-center gap-8 text-2xl m-0 p-0">
          {NAV_LINKS.map(({ name, href }) => (
            <li key={name}>
              <a 
                href={href} 
                onClick={() => setIsOpen(false)}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" onClick={() => setIsOpen(false)}>
          <button className="btn-outline mt-4 px-8 py-3 text-lg">Let's Talk</button>
        </a>
      </div>
    </>
  );
}