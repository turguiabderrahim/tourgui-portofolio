import "../css/Projects.css";

const projectData = [
  {
    title: "Python RPG: Titan Trials",
    description: "A modular text-based RPG featuring complex logic and combat systems.",
    tech: ["Python", "Logic"],
    link: "#"
  },
  {
    title: "Pomodoro Timer",
    description: "A productivity app built with React, featuring custom intervals and local storage.",
    tech: ["ReactJS", "CSS3"],
    link: "#"
  },
  {
    title: "Data Analysis Dashboard",
    description: "Visualizing complex datasets using Pandas and modern charting libraries.",
    tech: ["Python", "Pandas"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Work</h2>
        <div className="projects-grid">
          {projectData.map((project, index) => (
            <div key={index} className="project-card">
              <div className="card-content">
                <span className="tech-badge">{project.tech[0]}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="card-footer">
                  <div className="tech-stack">
                    {project.tech.map((t, i) => <span key={i}>{t}</span>)}
                  </div>
                  <a href={project.link} className="project-link">View Project →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}