/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        FiraCode: "Fira Code",
        JetBrains: "JetBrains Mono",
      },
      colors: {
        PastelGreen: "#A5FFAF",
        BalticSea: "#2A2630",
        Blackish: "#18171F",
      },
    },
  },
  plugins: [],
};
