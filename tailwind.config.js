/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-gold": "#f0d192",
        "primary-bg": "#000000",
        // "primary-red-button-hover": "#B23800",
        // "primary-gray": "#FCFBFA",
      },
    },
  },
  plugins: [],
}

