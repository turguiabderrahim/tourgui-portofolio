import "../css/nav.css";

export default function Nav(){
    return(
        <nav className="navbar">
        <h2 id="hero">Tourgui abderrahim</h2>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
        </div>
      </nav>
    );
}