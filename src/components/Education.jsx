import "../css/Education.css";

const educationData = [
  {
    school: "Faculty of Informatics @ Vytautas Magnus University",
    degree: "Bachelor's degree",
    field: "Informatics",
    period: "Aug 2025 – Present",
    status: "Ongoing"
  },
  {
    school: "IFMOTICA (Institut de Formation aux Métiers de l'Offshoring et audio visuel)",
    degree: "Technicien spécialisé",
    field: "Développement Informatique, Technologies de l'Information",
    period: "2019 – 2020",
    status: "Completed"
  },
  {
    school: "Lycée Al Khawarismi",
    degree: "Baccalauréat",
    field: "Sciences Vie et Terre",
    period: "Jun 2018 – Sep 2019",
    status: "Completed"
  }
];

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {educationData.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-icon">🎓</div>
              <div className="education-content">
                <div className="education-header">
                  <h3>{edu.degree}</h3>
                  <span className={`status ${edu.status.toLowerCase()}`}>
                    {edu.status}
                  </span>
                </div>
                <p className="school-name">{edu.school}</p>
                <p className="field">{edu.field}</p>
                <p className="period">📅 {edu.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
