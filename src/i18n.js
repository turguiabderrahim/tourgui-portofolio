import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      "nav.home": "Home",
      "nav.about": "About",
      "nav.projects": "Projects",
      "nav.skills": "Skills",
      "nav.experience": "Experience",
      "nav.education": "Education",
      "nav.languages": "Languages",
      "nav.footer": "Footer",

      // Hero Section
      "hero.greeting": "Hi, I'm Tourgui Abderrahim",
      "hero.description": "Architecting high-performance web applications where refined design meets technical excellence.",
      "hero.button": "Explore My Projects",

      // About Section
      "about.title": "About Me",
      "about.status": "SYSTEM: ACTIVE",
      "about.text1": "I'm a motivated student at <strong>Vytautas Magnus University (VMU)</strong> in the Faculty of Informatics, pursuing a Bachelor's degree in <strong>Information Systems</strong>.",
      "about.text2": "I'm passionate about technology, problem-solving, and continuous learning. My previous studies at IFMOTICA gave me a solid foundation in digital and communication skills.",
      "about.skill1": "System Integration",
      "about.skill2": "IT Support",
      "about.skill3": "Software Engineering",

      // CV Download
      "cv.title": "Download My CV",
      "cv.subtitle": "Choose your preferred language:",
      "cv.english": "English CV",
      "cv.english.download": "Download PDF",
      "cv.french": "CV Français",
      "cv.french.download": "Télécharger PDF",
      "cv.german": "Lebenslauf",
      "cv.german.download": "PDF herunterladen",

      // Projects Section
      "projects.title": "Featured Work",
      "projects.python_rpg.title": "Python RPG: Titan Trials",
      "projects.python_rpg.description": "A modular text-based RPG featuring complex logic and combat systems.",
      "projects.pomodoro.title": "Pomodoro Timer",
      "projects.pomodoro.description": "A productivity app built with React, featuring custom intervals and local storage.",
      "projects.dashboard.title": "Data Analysis Dashboard",
      "projects.dashboard.description": "Visualizing complex datasets using Pandas and modern charting libraries.",

      // Skills Section
      "skills.title": "Skills",
      "skills.advanced": "Advanced",
      "skills.intermediate": "Intermediate",
      "skills.basic": "Basic",
      "skills.medium": "Medium",

      // Experience Section
      "experience.title": "Experience",
      "experience.webhelp.company": "Webhelp Enterprise",
      "experience.webhelp.position": "Telecommunications Specialist",
      "experience.webhelp.type": "Full-time",
      "experience.webhelp.duration": "Aug 2023 - Jun 2025",
      "experience.webhelp.location": "Meknes, Morocco",
      "experience.webhelp.workType": "On-site",
      "experience.webhelp.description": "Help Desk Support for a Moroccan ISP project",
      "experience.newdev.company": "NewDev MAROC",
      "experience.newdev.position": "Software Developer",
      "experience.newdev.type": "Internship",
      "experience.newdev.duration": "Mar 2023 - Jun 2023",
      "experience.newdev.location": "Fès-Meknès, Morocco",
      "experience.newdev.workType": "Hybrid",
      "experience.newdev.description": "Software development and database management",
      "experience.ai.company": "AI Marketing",
      "experience.ai.position": "Software Developer",
      "experience.ai.type": "Internship",
      "experience.ai.duration": "Aug 2022 - Jan 2023",
      "experience.ai.location": "Remote",
      "experience.ai.workType": "Remote",
      "experience.ai.description": "Web development and AI integration",
      "experience.sudan.company": "Sudan Soft",
      "experience.sudan.position": "Software Developer",
      "experience.sudan.type": "Full-time",
      "experience.sudan.duration": "Nov 2021 - May 2022",
      "experience.sudan.location": "Khartoum, Sudan",
      "experience.sudan.workType": "Remote",
      "experience.sudan.description": "Web development and database management",
      "experience.epsi.company": "EPSI Schule",
      "experience.epsi.position": "Software Developer",
      "experience.epsi.type": "Internship",
      "experience.epsi.duration": "May 2021 - Jul 2021",
      "experience.epsi.location": "Fez, Morocco",
      "experience.epsi.workType": "Hybrid",
      "experience.epsi.description": "Analytics and database development",

      // Education Section
      "education.title": "Education",
      "education.vmu.school": "Faculty of Informatics @ Vytautas Magnus University",
      "education.vmu.degree": "Bachelor's degree",
      "education.vmu.field": "Informatics",
      "education.vmu.period": "Aug 2025 – Present",
      "education.vmu.status": "Ongoing",
      "education.ifmotica.school": "IFMOTICA (Institut de Formation aux Métiers de l'Offshoring et audio visuel)",
      "education.ifmotica.degree": "Technicien spécialisé",
      "education.ifmotica.field": "Développement Informatique, Technologies de l'Information",
      "education.ifmotica.period": "2019 – 2020",
      "education.ifmotica.status": "Completed",
      "education.lycee.school": "Lycée Al Khawarismi",
      "education.lycee.degree": "Baccalauréat",
      "education.lycee.field": "Sciences Vie et Terre",
      "education.lycee.period": "Jun 2018 – Sep 2019",
      "education.lycee.status": "Completed",

      // Footer
      "footer.title": "Let's Connect",
      "footer.description": "I'm always open to discussing new opportunities and interesting projects.",
      "footer.contact": "Contact Me",
      "footer.copyright": "© 2024 Tourgui Abderrahim. All rights reserved.",

      // Languages Section
      "languages.title": "Spoken Languages",
      "languages.native": "Native",
      "languages.upper_intermediate": "B2 - Upper Intermediate",
      "languages.advanced": "C1 - Advanced",
      "languages.beginner": "A1 - Beginner"
    }
  },
  de: {
    translation: {
      // Navigation
      "nav.home": "Startseite",
      "nav.about": "Über mich",
      "nav.projects": "Projekte",
      "nav.skills": "Fähigkeiten",
      "nav.experience": "Erfahrung",
      "nav.education": "Ausbildung",
      "nav.languages": "Sprachen",
      "nav.footer": "Fußzeile",

      // Hero Section
      "hero.greeting": "Hallo, ich bin Tourgui Abderrahim",
      "hero.description": "Entwicklung von hochperformanten Webanwendungen, wo raffiniertes Design auf technische Exzellenz trifft.",
      "hero.button": "Meine Projekte erkunden",

      // About Section
      "about.title": "Über mich",
      "about.status": "SYSTEM: AKTIV",
      "about.text1": "Ich bin ein motivierter Student an der <strong>Vytautas Magnus University (VMU)</strong> in der Fakultät für Informatik und studiere <strong>Informationssysteme</strong>.",
      "about.text2": "Ich bin leidenschaftlich an Technologie, Problemlösung und kontinuierlichem Lernen interessiert. Meine vorherigen Studien an IFMOTICA haben mir eine solide Grundlage in digitalen und Kommunikationsfähigkeiten gegeben.",
      "about.skill1": "Systemintegration",
      "about.skill2": "IT-Support",
      "about.skill3": "Softwareentwicklung",

      // CV Download
      "cv.title": "Meinen Lebenslauf herunterladen",
      "cv.subtitle": "Wählen Sie Ihre bevorzugte Sprache:",
      "cv.english": "English CV",
      "cv.english.download": "PDF herunterladen",
      "cv.french": "CV Français",
      "cv.french.download": "PDF herunterladen",
      "cv.german": "Lebenslauf",
      "cv.german.download": "PDF herunterladen",

      // Projects Section
      "projects.title": "Ausgewählte Arbeiten",
      "projects.python_rpg.title": "Python RPG: Titan Trials",
      "projects.python_rpg.description": "Ein modulares textbasiertes RPG mit komplexer Logik und Kampfsystemen.",
      "projects.pomodoro.title": "Pomodoro Timer",
      "projects.pomodoro.description": "Eine Produktivitäts-App mit React, benutzerdefinierten Intervallen und lokalem Speicher.",
      "projects.dashboard.title": "Datenanalyse Dashboard",
      "projects.dashboard.description": "Visualisierung komplexer Datensätze mit Pandas und modernen Chart-Bibliotheken.",

      // Skills Section
      "skills.title": "Fähigkeiten",
      "skills.advanced": "Fortgeschritten",
      "skills.intermediate": "Mittel",
      "skills.basic": "Grundlagen",
      "skills.medium": "Mittel",

      // Experience Section
      "experience.title": "Erfahrung",
      "experience.webhelp.company": "Webhelp Enterprise",
      "experience.webhelp.position": "Telekommunikationsspezialist",
      "experience.webhelp.type": "Vollzeit",
      "experience.webhelp.duration": "Aug 2023 - Jun 2025",
      "experience.webhelp.location": "Meknes, Marokko",
      "experience.webhelp.workType": "Vor Ort",
      "experience.webhelp.description": "Help Desk Support für ein marokkanisches ISP-Projekt",
      "experience.newdev.company": "NewDev MAROC",
      "experience.newdev.position": "Softwareentwickler",
      "experience.newdev.type": "Praktikum",
      "experience.newdev.duration": "Mar 2023 - Jun 2023",
      "experience.newdev.location": "Fès-Meknès, Marokko",
      "experience.newdev.workType": "Hybrid",
      "experience.newdev.description": "Softwareentwicklung und Datenbankverwaltung",
      "experience.ai.company": "AI Marketing",
      "experience.ai.position": "Softwareentwickler",
      "experience.ai.type": "Praktikum",
      "experience.ai.duration": "Aug 2022 - Jan 2023",
      "experience.ai.location": "Remote",
      "experience.ai.workType": "Remote",
      "experience.ai.description": "Webentwicklung und KI-Integration",
      "experience.sudan.company": "Sudan Soft",
      "experience.sudan.position": "Softwareentwickler",
      "experience.sudan.type": "Vollzeit",
      "experience.sudan.duration": "Nov 2021 - May 2022",
      "experience.sudan.location": "Khartoum, Sudan",
      "experience.sudan.workType": "Remote",
      "experience.sudan.description": "Webentwicklung und Datenbankverwaltung",
      "experience.epsi.company": "EPSI Schule",
      "experience.epsi.position": "Softwareentwickler",
      "experience.epsi.type": "Praktikum",
      "experience.epsi.duration": "May 2021 - Jul 2021",
      "experience.epsi.location": "Fez, Marokko",
      "experience.epsi.workType": "Hybrid",
      "experience.epsi.description": "Analytics und Datenbankentwicklung",

      // Education Section
      "education.title": "Ausbildung",
      "education.vmu.school": "Fakultät für Informatik @ Vytautas Magnus University",
      "education.vmu.degree": "Bachelor-Abschluss",
      "education.vmu.field": "Informatik",
      "education.vmu.period": "Aug 2025 – Gegenwart",
      "education.vmu.status": "Laufend",
      "education.ifmotica.school": "IFMOTICA (Institut de Formation aux Métiers de l'Offshoring et audio visuel)",
      "education.ifmotica.degree": "Technischer Spezialist",
      "education.ifmotica.field": "Informatikentwicklung, Informationstechnologien",
      "education.ifmotica.period": "2019 – 2020",
      "education.ifmotica.status": "Abgeschlossen",
      "education.lycee.school": "Lycée Al Khawarismi",
      "education.lycee.degree": "Baccalauréat",
      "education.lycee.field": "Biologie und Geologie",
      "education.lycee.period": "Jun 2018 – Sep 2019",
      "education.lycee.status": "Abgeschlossen",

      // Footer
      "footer.title": "Lass uns verbinden",
      "footer.description": "Ich bin immer offen für neue Möglichkeiten und interessante Projekte.",
      "footer.contact": "Kontaktiere mich",
      "footer.copyright": "© 2024 Tourgui Abderrahim. Alle Rechte vorbehalten.",

      // Languages Section
      "languages.title": "Gesprochene Sprachen",
      "languages.native": "Muttersprache",
      "languages.upper_intermediate": "B2 - Oberes Mittel",
      "languages.advanced": "C1 - Fortgeschritten",
      "languages.beginner": "A1 - Anfänger"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,

    interpolation: {
      escapeValue: false, // React already does escaping
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;