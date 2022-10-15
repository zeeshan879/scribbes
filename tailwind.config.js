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
        'signup': '0 4px 4px 0px rgba(0, 0, 0, 25%)',
        'sideBar': '0 7px 21px 0px rgba(0, 0, 0, 0.05)',
        'profile': '0 7px 21px 0px rgba(0, 0, 0, 7%)',

      },
      backgroundImage: {
   
      },
      fontFamily: {
        'sans': ['Space Mono', 'sans-serif'],
        'grotesk': ['Space Grotesk', 'sans-serif'],
        'DM': ['DM Sans', 'sans-serif'],
      
      },
      fontSize: {
        heading: '42px',
  
      },
      colors: {
        'action': '#1CAC19',
      },
    },
  },
  plugins: [],
}
