import "./css/App.css";
import Footer from "./components/Footer.jsx";
import AnimatedText from "./components/AnimatedText.jsx";
import Skills from "./components/Skills.jsx";
import { useEffect } from "react";
import bewerbungsfoto from "./img/Bewerbungsfoto.jpg";
import Nav from "./components/Nav.jsx"; 
import Section from "./components/Projects.jsx"
import Experience from "./components/Experience.jsx";
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
      
      <Nav/>

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
            <p>I’m a motivated student at Vytautas Magnus University (VMU) in the Faculty of Informatics, pursuing a Bachelor’s degree in Information Systems.I’m passionate about technology, problem-solving, and continuous learning. My previous studies at IFMOTICA (Institute of Training in Offshoring and Audiovisual Professions) gave me a solid foundation in digital and communication skills.</p>
          </div>
        </div>
      </section>
      
      <Section/>

      <Skills />
      <Experience/>
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