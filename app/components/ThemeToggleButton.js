"use client";

import { useTheme } from "../context/ThemeProvider";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={toggleTheme}
        aria-label="Toggle Theme"
        className={`relative w-16 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${
          theme === "dark" ? "bg-gray-700" : "bg-yellow-400"
        }`}
      >
        <span
          className={`absolute inset-0 flex items-center justify-between px-2`}
        >
          {/* Moon Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className={`w-5 h-5 ${
              theme === "dark" ? "text-gray-300" : "text-transparent"
            }`}
          >
            <path d="M12 2a1 1 0 01.993.883L13 3v2a1 1 0 01-1.993.117L11 5V3a1 1 0 011-1zm6.364 3.05a1 1 0 01.074 1.32l-.083.094-1.414 1.414a1 1 0 01-1.498-1.32l.084-.094 1.414-1.414a1 1 0 011.423 0zM21 11a1 1 0 01.117 1.993L21 13h-2a1 1 0 01-.117-1.993L19 11h2zM4.222 5.636a1 1 0 011.32-.083l.094.083 1.414 1.414a1 1 0 01-1.32 1.498l-.094-.084-1.414-1.414a1 1 0 010-1.423zM12 15a3 3 0 110 6 3 3 0 010-6z" />
          </svg>
          {/* Sun Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className={`w-5 h-5 ${
              theme === "dark" ? "text-transparent" : "text-yellow-500"
            }`}
          >
            <path d="M17.657 16.243a6 6 0 11-8.486-8.486 6 6 0 018.486 8.486zm-1.414-1.414a4 4 0 10-5.656-5.656 4 4 0 005.656 5.656z" />
          </svg>
        </span>
        <span
          className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            theme === "dark" ? "translate-x-8" : "translate-x-0"
          }`}
        ></span>
      </button>
    </div>
  );
}

export default ThemeToggle;
