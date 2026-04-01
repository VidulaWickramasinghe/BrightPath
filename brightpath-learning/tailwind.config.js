/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#5DA9E9",
          yellow: "#FFD166",
          coral: "#FF8A80",
          mint: "#7BDCB5",
          lavender: "#B8A1FF",
          slate: "#25324A",
          bg: "#F8FAFC",
        }
      },
      fontFamily: {
        sans: ['var(--font-nunito)', 'sans-serif'],
        heading: ['var(--font-poppins)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}