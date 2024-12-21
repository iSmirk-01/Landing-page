/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        dynamic: "clamp(1rem, 0.1vw + 1rem, 20rem)", // Dynamic font size
      },
      spacing: {
        dynamic: "clamp(1rem, 5vw + 2rem, 4rem)", // Dynamic width and height
      },
      maxWidth: {
        dynamic: "clamp(10rem, 20vw + 5rem, 40rem)", // Dynamic max-width
      },
      maxHeight: {
        dynamic: "clamp(5rem, 10vh + 10rem, 20rem)", // Dynamic max-height
      },
      padding: {
        dynamic: "clamp(1rem, 3vw + 1rem, 2rem)", // Dynamic padding
      },
      margin: {
        dynamic: "clamp(1rem, 3vw + 1rem, 4rem)", // Dynamic margin
      },
      colors: {
        //light theme
        LightThemeMainBlue: "#4A90E2",
        LightThemeLightBlue: "#A4C8FF",
        LightThemeAccentBlue: "#1D73B7",
        //dark theme
        DarkThemeMainBlue: "#2D72D9",
        DarkThemeLightBlue: "#6C8FF5",
        DarkThemeAccentBlue: "#1A4D7C",

        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
