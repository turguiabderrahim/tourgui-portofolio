import { useTranslation } from 'react-i18next';
import "../css/Experience.css";

export default function Experience() {
  const { t } = useTranslation();

  const experienceData = [
    {
      company: t("experience.webhelp.company"),
      position: t("experience.webhelp.position"),
      type: t("experience.webhelp.type"),
      duration: t("experience.webhelp.duration"),
      location: t("experience.webhelp.location"),
      workType: t("experience.webhelp.workType"),
      description: t("experience.webhelp.description"),
      skills: ["Help Desk Support", "English", "Technical Support"]
    },
    {
      company: t("experience.newdev.company"),
      position: t("experience.newdev.position"),
      type: t("experience.newdev.type"),
      duration: t("experience.newdev.duration"),
      location: t("experience.newdev.location"),
      workType: t("experience.newdev.workType"),
      description: t("experience.newdev.description"),
      skills: ["MySQL", "C#", "Web Development"]
    },
    {
      company: t("experience.ai.company"),
      position: t("experience.ai.position"),
      type: t("experience.ai.type"),
      duration: t("experience.ai.duration"),
      location: t("experience.ai.location"),
      workType: t("experience.ai.workType"),
      description: t("experience.ai.description"),
      skills: ["Web Development", "AI Integration", "JavaScript"]
    },
    {
      company: t("experience.sudan.company"),
      position: t("experience.sudan.position"),
      type: t("experience.sudan.type"),
      duration: t("experience.sudan.duration"),
      location: t("experience.sudan.location"),
      workType: t("experience.sudan.workType"),
      description: t("experience.sudan.description"),
      skills: ["Web Development", "MySQL", "Backend Development"]
    },
    {
      company: t("experience.epsi.company"),
      position: t("experience.epsi.position"),
      type: t("experience.epsi.type"),
      duration: t("experience.epsi.duration"),
      location: t("experience.epsi.location"),
      workType: t("experience.epsi.workType"),
      description: t("experience.epsi.description"),
      skills: ["Analytics", "MySQL", "System Design"]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">{t("experience.title")}</h2>
        <div className="experience-timeline">
          {experienceData.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="timeline-marker"></div>
              <div className="experience-content">
                <div className="experience-header">
                  <div>
                    <h3>{exp.position}</h3>
                    <p className="company-name">{exp.company}</p>
                  </div>
                  <span className={`job-type ${exp.type.toLowerCase()}`}>{exp.type}</span>
                </div>

                <div className="experience-meta">
                  <span className="duration">📅 {exp.duration}</span>
                  <span className="location">📍 {exp.location}</span>
                  <span className="work-type">{exp.workType}</span>
                </div>

                <p className="experience-description">{exp.description}</p>

                <div className="skills-tags">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}