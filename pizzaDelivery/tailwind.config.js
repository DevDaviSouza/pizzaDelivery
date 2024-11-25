/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  theme: {
    extend: {
      spacing: {
        'midVh': '50vh',
        'midW': '50vw',
        '40vh': '40vh',
        '44vh': '44vh'
      }
    },
  },
  plugins: [],
}

