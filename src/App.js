import "./css/App.css";
import Footer from "./components/Footer.jsx";
import AnimatedText from "./components/AnimatedText.jsx";
import Skills from "./components/Skills.jsx";
import { useEffect } from "react";
import bewerbungsfoto from "./img/Bewerbungsfoto.jpg";

export default function App() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.7 }
    );

    // Observe all sections, cards, and form
    const elements = document.querySelectorAll(
      ".section, .section h2, .section p, .card, .contact-form"
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container">
      <nav className="navbar">
        <h2 id="hero">Tourgui abderrahim</h2>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <AnimatedText />
        <p>I build web applications using modern technologies.</p>
        <button>View My Work</button>
      </section>

      <section id="about" className="section">
        <div className="about-container">
          <div className="about-image">
            <img src={bewerbungsfoto} alt="Profile" />
          </div>
          <div className="about-content">
            <h2>About Me</h2>
            <p>I am a developer focused on building clean and scalable web apps.</p>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="grid">
          <div className="card">Project 1</div>
          <div className="card">Project 2</div>
          <div className="card">Project 3</div>
        </div>
      </section>

      <Skills />

      <section id="contact" className="section">
        <h2>Contact</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      <Footer/>
    </div>
  );
}