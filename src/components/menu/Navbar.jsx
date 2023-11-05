import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = ({ t }) => {
  const location = useLocation();
  const { i18n } = useTranslation();

  // Function to change the language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="navbar">
      <Link to="/">
        <h1>{t("GVS")}</h1>
      </Link>
      <ul className="nav-links">
        <li>
          <button className="nav-button" onClick={() => changeLanguage("sr")}>
            {t("Serbian")}
          </button>
        </li>
        <li>
          <button className="nav-button" onClick={() => changeLanguage("en")}>
            {t("English")}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
