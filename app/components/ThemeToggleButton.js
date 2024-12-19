"use client";

import { useTheme } from "../context/ThemeProvider";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`${
        theme === "dark" ? "bg-slate-300 text-black" : "bg-gray-800 text-white"
      } px-4 py-2 rounded`}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeToggle;
