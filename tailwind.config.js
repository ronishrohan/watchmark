/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'background' : "var(--background)",
        'background-alt' : "var(--background-alt)",

        'accent' : "var(--accent)",
        'accent-active' : "var(--accent-active)",
        'text' : "var(--text)",
        'text-invert' : "var(--text-invert)",
        'border' : "var(--border)"
      },
      fontFamily: {
        'instrument': ['Instrument Serif', 'serif'],
        'geist': ['Geist', 'serif']
      }
    },
  },
  plugins: [],
}

