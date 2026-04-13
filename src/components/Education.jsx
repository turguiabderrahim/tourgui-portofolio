import { useTranslation } from 'react-i18next';
import "../css/Education.css";

export default function Education() {
  const { t } = useTranslation();

  const educationData = [
    {
      school: t("education.vmu.school"),
      degree: t("education.vmu.degree"),
      field: t("education.vmu.field"),
      period: t("education.vmu.period"),
      status: t("education.vmu.status")
    },
    {
      school: t("education.ifmotica.school"),
      degree: t("education.ifmotica.degree"),
      field: t("education.ifmotica.field"),
      period: t("education.ifmotica.period"),
      status: t("education.ifmotica.status")
    },
    {
      school: t("education.lycee.school"),
      degree: t("education.lycee.degree"),
      field: t("education.lycee.field"),
      period: t("education.lycee.period"),
      status: t("education.lycee.status")
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">{t("education.title")}</h2>
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
