import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { useThemeContext } from "./lib/context";
import DarkModeBtn from "./components/DarkModeBtn";

export default function App() {
  const { theme } = useThemeContext();

  return (
    <div>
      <DarkModeBtn />
      {theme === "dark" && <HueChanger />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

function HueChanger() {
  return (
    <input
      max={255}
      onChange={(e) => {
        document.documentElement.style.setProperty("--hue", e.target.value);
      }}
      type="range"
    />
  );
}
