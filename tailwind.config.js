/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        openSans : ["Open Sans", "sans serif"]
      },
      colors: {
        darkBlue: "#0071BB",
        lightBlue: "#39A3E7",
        primary: "#F5F9FC",
        lightGray:"#D1E0E9"
      }
    },
  },
  plugins: [],
}