/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        base: ["Poppins", "san-serif"],
        krona: ["Krona One", "san-serif"],
      },
      colors: {
        dark: "#0C080B",
        green: "#1E3329",
        darkGrey: "#B8B8B8",
        lightGrey: "#ECECEC",
        light: "#FAFAFA",
        yellow: "#FFD470",
      },
    },
  },
  plugins: [],
};
