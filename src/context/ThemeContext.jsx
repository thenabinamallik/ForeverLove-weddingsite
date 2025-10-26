import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      return saved === "dark" ? "dark" : "light"; // default light
    } catch (e) {
      return "light";
    }
  });

  useEffect(() => {
    try {
      // Remove any previous theme classes and add new
      document.documentElement.classList.remove("theme-light", "theme-dark");
      document.documentElement.classList.add(
        theme === "dark" ? "theme-dark" : "theme-light"
      );
      localStorage.setItem("theme", theme);
    } catch (e) {}
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// custom hook to consume theme
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return [ctx.theme, ctx.setTheme];
}
