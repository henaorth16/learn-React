import React, { useContext, createContext, useState, useEffect } from "react";

const Theme = createContext(null);

export function useThemeContext() {
  return useContext(Theme);
}

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.style.backgroundColor = theme === "light" ? "#f7f7f7" : "#010101";
    document.body.style.color = theme === "light" ? "#010101" : "#f7f7f7";
  }, [theme]);

  return (
    <Theme.Provider value={{ theme, setTheme }}>
      {children}
    </Theme.Provider>
  );
}
