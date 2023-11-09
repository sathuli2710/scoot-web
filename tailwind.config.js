/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        yellow: "#FCB72B",
        darknavy: "#495567",
        dimgrey: "#939CAA",
        lightgrey: "#E5ECF4",
        snow: "#F2F5F9",
        lightyellow: "#FFF4DF",
      },
      fontFamily: {
        bodyfont: ["Lexend Deca", "sans-serif"],
        headfont: ["Space Mono", "monospace"],
      },
      zIndex: {
        999: 999,
      },
    },
  },
  plugins: [],
};
