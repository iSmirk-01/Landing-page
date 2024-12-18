"use client";

import { useTheme } from "../context/ThemeProvider";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
      } px-4 py-2 rounded`}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeToggle;
