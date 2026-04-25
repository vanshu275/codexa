
const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Why Us", href: "#why-us" },
  { name: "About", href: "#about" },
];

export default function Navbar() {


  return (
    <nav className="navbar z-40 h-[10vh]  ">
      <div className="container">
        <div className="nav-wrapper">
          <a href="#hero" className="logo select-none">
            <span className="font-bold">C</span>odexa
          </a>

          <ul className="nav-links">
            {NAV_LINKS.map(({ name, href }) => (
              <li key={name}>
                <a href={href}>
                  {name}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <a href="#contact">
              <button className="btn-outline">Let's Talk</button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}