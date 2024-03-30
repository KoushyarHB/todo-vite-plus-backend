/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./main.js", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6200E9",
        secondary: "#7927ED",
      },
    },
  },
  plugins: [],
};
