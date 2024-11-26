/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  theme: {
    extend: {
      spacing: {
        'midW': '50vw',
        '20vw': '20vw',
        '30vw': '30vw',
        '40vw': '40vw',
        'midVh': '50vh',
        '40vh': '40vh',
        '44vh': '44vh'
      }
    },
  },
  plugins: [],
}

