/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        torus: ["Torus", "Helvetica Neue", "sans-serif"],
      },
      colors: {
        "light-blue": "#6cabe9",
        "dark-blue": "#1a66b3",
        "hover-blue": "#79b5f1",
        "light-green": "#BAD097",
        "dark-green": "#2E4012",
      },
    },
  },
  plugins: [],
};
