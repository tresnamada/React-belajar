/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0371b7",
        secondary: "#A66E38",
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "3rem",
        }
      },
    },
  },
  plugins: [],
}

