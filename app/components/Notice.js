"use client";

import { useTheme } from "../context/ThemeProvider";

function Notice() {
  const { theme } = useTheme();

  return (
    <p
      aria-live="polite"
      className={`text-lg sm:text-base p-5 ${
        theme === "dark" ? "text-white" : "text-black"
      } flex justify-center`}
    >
      <em>
        Services vary due to my class schedule. For additional information or
        questions, please reach out via my Contacts page.
      </em>
    </p>
  );
}

export default Notice;
