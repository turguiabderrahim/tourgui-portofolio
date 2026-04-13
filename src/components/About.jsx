import bewerbungsfoto from "../img/Bewerbungsfoto.jpg";
import "../css/About.css";
import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();

    return (
        <section id="about" className="about-section">
            {/* The Animated Background */}
            <div className="dynamic-bg"></div>
            
            <div className="about-container">
                <div className="profile-wrapper">
                    <div className="image-border-glow"></div>
                    <div className="about-image">
                        <img src={bewerbungsfoto} alt="Abderrahim Tourgui" />
                    </div>
                </div>

                <div className="about-content">
                    <div className="status-badge">{t('about.status')}</div>
                    <h2>{t('about.title')}</h2>
                    <p dangerouslySetInnerHTML={{ __html: t('about.text1') }}></p>
                    <p>
                        {t('about.text2')}
                    </p>
                    <div className="tech-pills">
                        <span>{t('about.skill1')}</span>
                        <span>{t('about.skill2')}</span>
                        <span>{t('about.skill3')}</span>
                    </div>

                    {/* CV Download Section */}
                    <div className="cv-download-section">
                        <h3>{t('cv.title')}</h3>
                        <p>{t('cv.subtitle')}</p>
                        <div className="cv-buttons">
                            <a href="/cv/CV_English.pdf" download="Tourgui_Abderrhim_CV_English.pdf" className="cv-download-btn">
                                <span className="cv-icon">📄</span>
                                <span className="cv-text">
                                    <strong>{t('cv.english')}</strong>
                                    <small>{t('cv.english.download')}</small>
                                </span>
                            </a>
                            <a href="/cv/CV_French.pdf" download="Tourgui_Abderrhim_CV_French.pdf" className="cv-download-btn">
                                <span className="cv-icon">📄</span>
                                <span className="cv-text">
                                    <strong>{t('cv.french')}</strong>
                                    <small>{t('cv.french.download')}</small>
                                </span>
                            </a>
                            <a href="/cv/CV_German.pdf" download="Tourgui_Abderrhim_CV_German.pdf" className="cv-download-btn">
                                <span className="cv-icon">📄</span>
                                <span className="cv-text">
                                    <strong>{t('cv.german')}</strong>
                                    <small>{t('cv.german.download')}</small>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}