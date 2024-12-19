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
  plugins: [],
};
