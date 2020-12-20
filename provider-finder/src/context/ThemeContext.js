import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function getInitialTheme() {
  const storedPrefs = window.localStorage.getItem("color-theme");

  if (typeof storedPrefs === "string") {
    if (storedPrefs === "light" || storedPrefs === "dark") {
      return storedPrefs;
    }
  }
  const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
  if (userMedia.matches) {
    return "dark";
  }
  return "light";
}

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const rawSetTheme = (theme) => {
    const isDark = theme === "dark";

    if (!isDark) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }

    localStorage.setItem("color-theme", theme);
  };

  useEffect(() => {
    setTheme(getInitialTheme());
  }, []);

  //listen for changes
  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
