/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'social': '0 4px 4px 0px rgba(0, 0, 0, 10%)',
      }
    },
  },
  plugins: [],
}
