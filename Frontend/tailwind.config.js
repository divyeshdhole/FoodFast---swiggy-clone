/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        arial: ["Arial", "sans-serif"],
        // Add more custom font families as needed
      }
    },
  },
  plugins: [],
}

