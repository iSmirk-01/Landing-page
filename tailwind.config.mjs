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
        Charcoal: "#36454F",
        Yellow: "#FFD966",
        MutedTeal: "#3B9D9D",
        SoftSageGreen: "#88B04B,",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
