/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'background' : "var(--background)"
      },
      fontFamily: {
        'instrument': ['Instrument Serif', 'serif'],
        'geist': ['Geist', 'serif']
      }
    },
  },
  plugins: [],
}

