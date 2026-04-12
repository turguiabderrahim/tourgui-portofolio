import bewerbungsfoto from "../img/Bewerbungsfoto.jpg";
import "../css/About.css";

export default function About() {
    return (
        <section id="about" className="about-section">
            {/* The Animated Background */}
            <div className="dynamic-bg"></div>
            
            <div className="about-container">
                <div className="profile-wrapper">
                    <div className="image-border-glow"></div>
                    <div className="about-image">
                        <img src={bewerbungsfoto} alt="Abderrahim Tourgui" />
                    </div>
                </div>

                <div className="about-content">
                    <div className="status-badge">SYSTEM: ACTIVE</div>
                    <h2>About Me</h2>
                    <p>
                        I’m a motivated student at <strong>Vytautas Magnus University (VMU)</strong> in the Faculty of Informatics, 
                        pursuing a Bachelor’s degree in <strong>Information Systems</strong>.
                    </p>
                    <p>
                        I’m passionate about technology, problem-solving, and continuous learning. 
                        My previous studies at IFMOTICA gave me a solid foundation in digital and communication skills.
                    </p>
                    <div className="tech-pills">
                        <span>System Integration</span>
                        <span>IT Support</span>
                        <span>Software engenring</span>
                    </div>
                </div>
            </div>
        </section>
    );
}