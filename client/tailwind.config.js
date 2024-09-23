/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'forge-darkGreen' : '#003E35',
        'forge-lightGreen' : '#66D899',
        'forge-midGreen' : '#1DBA6B'
      }
    },
  },
  plugins: [],
}

