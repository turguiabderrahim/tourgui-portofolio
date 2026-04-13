import React, { Suspense, lazy } from "react";
import { useTranslation } from 'react-i18next';
import "./css/App.css";

// 1. Critical components (Load immediately)
import Nav from "./components/Nav.jsx";
import AIChatBot from "./components/AIChatBot.jsx";

// 2. Lazy load non-critical sections (Improves initial load speed)
const AnimatedText = lazy(() => import("./components/AnimatedText.jsx"));
const About = lazy(() => import("./components/About.jsx"));
const Projects = lazy(() => import("./components/Projects.jsx"));
const Skills = lazy(() => import("./components/Skills.jsx"));
const Experience = lazy(() => import("./components/Experience.jsx"));
const Education = lazy(() => import("./components/Education.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));
const Languages = lazy(() => import("./components/Languages.jsx"));
// Loading fallback (Futuristic loader)
const SectionLoader = () => (
  <div className="section-loading" style={{ color: '#facc15', padding: '20px' }}>
    _loading_module...
  </div>
);

export default function App() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <Nav />
      
      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="hero-label">{t('hero.greeting')}</p>
            <Suspense fallback={<span>...</span>}>
              <AnimatedText />
            </Suspense>
            <p className="hero-description">
              {t('hero.description')}
            </p>
            <a href="#projects" className="hero-button">
              {t('hero.button')}
            </a>
          </div>
        </section>

        {/* 3. Wrap lazy components in Suspense */}
        <Suspense fallback={<SectionLoader />}>
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Languages />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      
      <AIChatBot />
    </div>
  );
}