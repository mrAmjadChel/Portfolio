/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primaryTitle: '#127369',
        // primaryContent: '#4C5958',
        // primarySubcontent: '#8AA6A3',
        // primaryBase: '#a9bab8',
        // primaryAccent: '#10403B',
        // primaryBg: '#BFBFBF',
        primaryTitle: '#2c87d4',
        primaryContent: '#ffffff',
        primarySubcontent: '#0b1f5f',
        primaryBase: '#323232',
        primaryAccent: '#a4c8e1',
        primaryBg: '#000000',
      }
    },
  },
  plugins: [],
}

