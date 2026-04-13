import { useTranslation } from 'react-i18next';
import "../css/Skills.css";

export default function Skills() {
  const { t } = useTranslation();

  const skillsData = [
    { name: "HTML", level: t("skills.advanced") },
    { name: "CSS", level: t("skills.advanced") },
    { name: "JavaScript", level: t("skills.advanced") },
    { name: "React", level: t("skills.intermediate") },
    { name: "Node.js", level: t("skills.intermediate") },
    { name: "Git", level: t("skills.intermediate") },
    { name: "PHP", level: t("skills.intermediate") },
    { name: "MySQL", level: t("skills.intermediate") },
    { name: "MongoDB", level: t("skills.basic") },
    { name: "Python", level: t("skills.medium") },
    { name: "C#", level: t("skills.medium") },
  ];

  return (
    <section id="skills" className="section skills-section">
      <h2>{t("skills.title")}</h2>
      <div className="skills-list">
        {skillsData.map((skill) => (
          <div key={skill.name} className="skill-item">
            <div className="skill-name">
              <span>{skill.name}</span>
              <small>{skill.level}</small>
            </div>
            <div className="skill-bar">
              <div className={`skill-progress skill-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
