import { useRef } from "react";

export default function Navbar() {
  const navRef = useRef(null);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Why Us", href: "#why-us" },
    { name: "About", href: "#about" },
  ];



  return (
    <nav ref={navRef} className="navbar">
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <span>C</span>odexa
          </div>

          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button className="btn-outline">Let's Talk</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
