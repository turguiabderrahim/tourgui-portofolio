import "../css/Skills.css";

const skillsData = [
  { name: "HTML", level: "Advanced" },
  { name: "CSS", level: "Advanced" },
  { name: "JavaScript", level: "Advanced" },
  { name: "React", level: "Intermediate" },
  { name: "Node.js", level: "Intermediate" },
  { name: "Git", level: "Intermediate" },
  { name: "PHP", level: "Intermediate" },
  { name: "MySQL", level: "Intermediate" },
  { name: "MongoDB", level: "Basic" },
  { name: "Python", level: "Medium" },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <h2>Skills</h2>
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
