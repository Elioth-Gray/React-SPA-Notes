import PropTypes from "prop-types";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  FiToggleLeft,
  FiToggleRight,
  FiLogOut,
  FiMoon,
  FiSun,
} from "react-icons/fi";
import LocaleContext from "../Contexts/LocaleContext";
import ThemeContext from "../Contexts/ThemeContext";

const Navigation = ({ user, logout }) => {
  const { locale, toggleLocale } = useContext(LocaleContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="navigation">
      {user === null ? (
        <>
          <ul>
            <li>
              <Link to="/" className="">
                {locale === "id" ? "Masuk" : "Login"}
              </Link>
            </li>
            <li>
              <Link to="/register" className="">
                {locale === "id" ? "Daftar" : "Register"}
              </Link>
            </li>
          </ul>
          <button
            className="toggle-locale"
            type="button"
            onClick={toggleLocale}
          >
            {locale === "id" ? "id" : "en"}
          </button>
          <button className="toggle-locale" type="button" onClick={toggleTheme}>
            {theme === "dark" ? <FiMoon /> : <FiSun />}
          </button>
        </>
      ) : (
        <>
          <ul>
            <li>
              <Link to="/" className="nav-link">
                {locale === "id" ? "Beranda" : "Home"}
              </Link>
            </li>
            <li>
              <Link to="/add" className="nav-link">
                {locale === "id" ? "Tambah Catatan" : "Add Note"}
              </Link>
            </li>
            <li>
              <Link to="/archive" className="nav-link">
                {locale === "id" ? "Arsip" : "Archive"}
              </Link>
            </li>
          </ul>
          <button
            className="toggle-locale"
            type="button"
            onClick={toggleLocale}
          >
            {locale === "id" ? <FiToggleLeft /> : <FiToggleRight />}
          </button>
          <button className="toggle-theme" type="button" onClick={toggleTheme}>
            {theme === "dark" ? <FiMoon /> : <FiSun />}
          </button>
          <button className="button-logout" type="button" onClick={logout}>
            <FiLogOut />
          </button>
        </>
      )}
    </div>
  );
};

Navigation.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.oneOf([null])]),
  logout: PropTypes.func.isRequired,
};

export default Navigation;
