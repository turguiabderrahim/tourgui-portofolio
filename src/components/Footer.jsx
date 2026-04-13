import { useTranslation } from 'react-i18next';
import "../css/footer.css";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <h2>Tourgui Abderrahim</h2>
          <p>{t("footer.description")}</p>
        </div>

        <div className="footer-center">
          <h3>{t("footer.contact")}</h3>
          <ul>
            <li><a href="#about">{t("nav.about")}</a></li>
            <li><a href="#projects">{t("nav.projects")}</a></li>
            <li><a href="#skills">{t("nav.skills")}</a></li>
          </ul>
        </div>

        <div className="footer-right">
          <h3>{t("footer.title")}</h3>
          <p>Email: Tourguiabderrahim2000@gmail.com</p>
          <div className="socials">
            <a href="https://github.com/turguiabderrahim">GitHub</a>
            <a href="https://www.linkedin.com/in/tourgui-abderrahim-a95637211/">LinkedIn</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>{t("footer.copyright")}</p>
      </div>
    </footer>
  );
}