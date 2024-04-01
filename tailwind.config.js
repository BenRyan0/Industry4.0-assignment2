/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#02DD02",
        secondary: "#64748b",
        neutral: "#f3f4f6",
        vercel: "#0284c7",
        netlify: "#2563eb",
        github: "#57534e",
        coffee: "#d97706",
        kofi: "#db2777",
        dark: "#0f172a",
        blog01Main: "#715EB7",
      },
      screens: {
        xl: "1320px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
