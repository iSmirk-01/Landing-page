"use client";

import { useTheme } from "../context/ThemeProvider";

const Service = ({ header, details, label, button }) => {
  const { theme } = useTheme(); // Get the current theme

  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-gray-700 text-white border-cyan-300 border"
          : "bg-gray-200 text-black border-black border"
      } flex flex-col gap-5 text-lg p-5 rounded-lg shadow-md`}
    >
      <header className="flex justify-center">
        <h1 className="text-3xl font-semibold">{header}</h1>
      </header>
      <main>
        <p className="font-medium">{details}</p>
      </main>
      <footer className="flex flex-col gap-2 justify-center">
        <h3 className="font-semibold flex justify-center">{label}</h3>
        <button
          className={`${
            theme === "dark"
              ? "bg-blue-700 hover:bg-blue-600 text-white"
              : "bg-blue-600 hover:bg-blue-500 text-white"
          } rounded-md p-2`}
        >
          {button || "Details and Pricing"}
        </button>
      </footer>
    </div>
  );
};

export default Service;
