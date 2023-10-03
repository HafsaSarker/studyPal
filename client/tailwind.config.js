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
        "hover-light-green": "#506e20",
        "hover-light-green2": "#b4c992",
        "hover-dark-green": "#3b5218",
      },
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      md: "1.1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      h1: "2rem",
      h2: "1.5rem",
      h3: "1.17rem",
      h4: "1rem",
      h5: "0.83rem",
      h6: "0.67rem",
    },
  },
  plugins: [],
};
