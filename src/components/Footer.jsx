import "../css/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <h2>Tourgui Abderrahim</h2>
          <p>Building modern web applications.</p>
        </div>

        <div className="footer-center">
          <h3>Links</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
          </ul>
        </div>

        <div className="footer-right">
          <h3>Contact</h3>
          <p>Email: Tourguiabderrahim2000@gmail.com</p>
          <div className="socials">
            <a href="https://github.com/turguiabderrahim">GitHub</a>
            <a href="https://www.linkedin.com/in/tourgui-abderrahim-a95637211/">LinkedIn</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Tourgui Abderrahim. All rights reserved.</p>
      </div>
    </footer>
  );
}