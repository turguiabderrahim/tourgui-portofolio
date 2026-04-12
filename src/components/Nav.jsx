import { useState } from "react";
import "../css/nav.css";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar-custom">
      <div className="nav-inner-container">
        <h2 id="hero-logo" onClick={() => window.scrollTo(0,0)}>
          Tourgui abderrahim
        </h2>

        {/* Futuristic Toggle Button */}
        <button 
          className={`nav-toggle ${isMenuOpen ? "is-active" : ""}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="nav-bar"></span>
          <span className="nav-bar"></span>
          <span className="nav-bar"></span>
        </button>

        <div className={`nav-links-wrapper ${isMenuOpen ? "is-open" : ""}`}>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
          <a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
          <a href="#education" onClick={() => setIsMenuOpen(false)}>Education</a>
        </div>
      </div>
    </nav>
  );
}