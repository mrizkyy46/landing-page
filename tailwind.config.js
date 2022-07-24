/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        neue: 'Bebas Neue',
      },
      backgroundImage: {
        'background-page1': "url('/dist/assets/main-bg.jpg')",
        'background-page2': "url('/dist/assets/the-games-bg.jpg')",
        'background-page3': "url('/dist/assets/features.jpg')",
        'background-page4': "url('/dist/assets/requirements.png')",
        'background-page5': "url('/dist/assets/top-score-bg.png')",
      },
      spacing: {
        '2.8': '0.8rem',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
