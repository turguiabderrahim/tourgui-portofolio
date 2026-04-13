import { useState } from "react";
import { useTranslation } from 'react-i18next';
import "../css/nav.css";
import LanguageToggle from "./LanguageToggle.jsx";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

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
          <a href="#about" onClick={() => setIsMenuOpen(false)}>{t('nav.about')}</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>{t('nav.projects')}</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>{t('nav.skills')}</a>
          <a href="#experience" onClick={() => setIsMenuOpen(false)}>{t('nav.experience')}</a>
          <a href="#education" onClick={() => setIsMenuOpen(false)}>{t('nav.education')}</a>
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
}