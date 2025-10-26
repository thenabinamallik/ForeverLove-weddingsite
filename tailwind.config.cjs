/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // <- this enables class-based dark mode
  theme: {
    extend: {
      colors: {
        rose: {
          50: '#fff1f2',
          600: '#ef4444',
        },
      },
    },
  },
  plugins: [],
}
