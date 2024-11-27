import { useEffect, useState } from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";
import { createContext } from "react";

export const ThemeProvider = createContext(null);

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  
  const toggle = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme); 
      return newTheme;
    });
  };
  useEffect(() => {
    document.body.style.backgroundColor =
      theme === "light" ? "#f7f7f7" : "#010101";
    document.body.style.color = theme === "light" ? "#010101" : "#f7f7f7";
  }, [theme]);
  return (
    <ThemeProvider.Provider value={{ theme }}>
      <button onClick={toggle}>
        {" "}
        Toggle {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      {theme == "dark" && (
        <input
          max={255}
          onChange={(e) => {
            console.log("target", e.target.value);
            document.documentElement.style.setProperty("--hue", e.target.value);
          }}
          type="range"
        />
      )}
      <Routes>
        <Route path="index" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider.Provider>
  );
}
