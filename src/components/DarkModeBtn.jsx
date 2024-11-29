import { useThemeContext } from "../lib/context";

export default function DarkModeBtn() {
   const { theme, setTheme } = useThemeContext();

  const toggle = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  return (
    <button className={`dark_mode ${theme}`} onClick={toggle}>
      {" "}
      Toggle {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}
