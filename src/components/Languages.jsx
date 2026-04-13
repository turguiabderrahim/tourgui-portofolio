import "../css/Languages.css";
import { useTranslation } from 'react-i18next';

const languages = [
  { name: "Arabic", level: "Native", percentage: 100 },
  { name: "English", level: "B2 - Upper Intermediate", percentage: 75 },
  { name: "German", level: "C1 - Advanced", percentage: 90 },
  { name: "Lithuanian", level: "A1 - Beginner", percentage: 25 },
];

export default function Languages() {
  const { t } = useTranslation();

  const getTranslatedLevel = (level) => {
    switch(level) {
      case "Native": return t('languages.native');
      case "B2 - Upper Intermediate": return t('languages.upper_intermediate');
      case "C1 - Advanced": return t('languages.advanced');
      case "A1 - Beginner": return t('languages.beginner');
      default: return level;
    }
  };

  return (
    <section id="languages" className="languages-section">
      <h2>{t('languages.title')}</h2>
      <div className="languages-grid">
        {languages.map((lang, index) => (
          <div key={index} className="language-card">
            <h3>{lang.name}</h3>
            <p>{getTranslatedLevel(lang.level)}</p>
            {/* Optional: Simple logical progress bar */}
            <div className="progress-bar">
              <div className="progress" style={{ width: `${lang.percentage}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}