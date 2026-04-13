import { useTranslation } from 'react-i18next';
import "../css/Projects.css";

export default function Projects() {
  const { t } = useTranslation();

  const projectData = [
    {
      title: t("projects.python_rpg.title"),
      description: t("projects.python_rpg.description"),
      tech: ["Python", "Logic"],
      link: "#"
    },
    {
      title: t("projects.pomodoro.title"),
      description: t("projects.pomodoro.description"),
      tech: ["ReactJS", "CSS3"],
      link: "#"
    },
    {
      title: t("projects.dashboard.title"),
      description: t("projects.dashboard.description"),
      tech: ["Python", "Pandas"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">{t("projects.title")}</h2>
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