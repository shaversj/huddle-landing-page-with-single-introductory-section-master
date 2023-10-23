/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-bg": "url('/src/assets/images/bg-mobile.svg')",
        "desktop-bg": "url('/src/assets/images/bg-desktop.svg')"
      },
      screens: {
        "sm": "375px",
        "lg": "1440px",
      },
      colors: {
        "violet": "hsl(257, 40%, 49%)",
        "soft-magenta": "hsl(300, 69%, 71%)"
      },
      fontFamily: {
        "Poppins": ['Poppins', "sans-serif"],
        "Open-Sans": ['Open Sans', "sans-serif"]
      }
    },
  },
  plugins: [],
}