import "./css/App.css";
import Nav from "./components/Nav.jsx";
import AnimatedText from "./components/AnimatedText.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="container">
      <Nav />

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="hero-label">Hi, I’m Tourgui Abderrahim</p>
            <AnimatedText />
            <p className="hero-description">
              I build modern web apps with clean UI, reliable performance, and strong fundamentals.
            </p>
            <a href="#projects" className="hero-button">
              View My Work
            </a>
          </div>
        </section>

        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
      </main>

      <Footer />
    </div>
  );
}