"use client"
import { useTheme } from "../context/ThemeProvider";

function Notice() {
  const { theme } = useTheme();

  return (
    <p
      className={`${
        theme === "dark" ? "text-white" : "text-black"
      } text-lg p-5`}
    >
      *Services vary due to my class schedule.* For additional information or
      questions, please reach out via my Contacts page*
    </p>
  );
}

export default Notice
