import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/LanguageToggle.css';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'de' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="language-toggle"
      aria-label="Toggle language"
    >
      <span className="language-icon">
        {i18n.language === 'en' ? '🇩🇪' : '🇺🇸'}
      </span>
      <span className="language-text">
        {i18n.language === 'en' ? 'DE' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageToggle;