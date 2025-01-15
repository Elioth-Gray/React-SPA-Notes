import React, { useEffect, useState, useMemo } from "react";
import Navigation from "./Components/Navigation";
import { Route, Routes } from "react-router-dom";
import ArchivedPage from "./pages/ArchivedPage";
import DetailPage from "./pages/DetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { getUserLogged, putAccessToken } from "./utils/api";
import LocaleContext from "./Contexts/LocaleContext";
import ThemeContext from "./Contexts/ThemeContext";

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [locale, setLocale] = useState("id");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const onAuth = async () => {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
    };
    onAuth();
    if (localStorage.getItem("locale") === null) {
      localStorage.setItem("locale", "id");
      setLocale("id");
    } else {
      setLocale(localStorage.getItem("locale"));
    }
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      setTheme(localStorage.getItem("theme"));
    }
  }, []);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  };

  const onLogout = async () => {
    setAuthedUser(null);
    putAccessToken("");
  };

  const toggleLocale = () => {
    const newLocale = locale === "id" ? "en" : "id";
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    // Apply the theme to the document
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const localeContextValue = useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);

  const themeContext = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <LocaleContext.Provider value={localeContextValue}>
        <ThemeContext.Provider value={themeContext}>
          <div className="app-container">
            <header>
              <h1>{locale === "id" ? "Aplikasi Catatan" : "Notes App"}</h1>
              <Navigation logout={onLogout} user={authedUser} />
            </header>
            <main>
              <Routes>
                <Route
                  path="/*"
                  element={<LoginPage loginSuccess={onLoginSuccess} />}
                />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </main>
          </div>
        </ThemeContext.Provider>
      </LocaleContext.Provider>
    );
  }

  return (
    <LocaleContext.Provider value={localeContextValue}>
      <ThemeContext.Provider value={themeContext}>
        <div className="app-container">
          <header>
            <h1>{locale === "id" ? "Aplikasi Catatan" : "Notes App"}</h1>
            <Navigation logout={onLogout} user={authedUser} />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/add" element={<AddPage />} />
              <Route path="/details/:noteId" element={<DetailPage />} />
              <Route path="/archive" element={<ArchivedPage />} />
              <Route path="/*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </div>
      </ThemeContext.Provider>
    </LocaleContext.Provider>
  );
}

export default App;
