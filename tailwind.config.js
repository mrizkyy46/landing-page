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
      fontSize: {
        '5.5xl': ['54px', '62px'],
      },
      backgroundImage: {
        'background-page1': "radial-gradient(175% 57.77% at 50% 40%, rgba(255, 180, 52, 0) 0%, rgba(55, 44, 33, 0.10) 70%,#08090A 100%),url('/dist/assets/main-bg.jpg')",
        'background-page2': "radial-gradient(175% 10% at 50% 75%, rgba(255, 180, 52, 0) 0%, rgba(55, 44, 33, 0.10) 70%,#08090A 800%),url('/dist/assets/the-games-bg.jpg')",
        'background-page3': "url('/dist/assets/features.jpg')",
        'background-page4': "url('/dist/assets/requirements.png')",
        'background-page5': "url('/dist/assets/top-score-bg.png')",
      },
      spacing: {
        '2.8': '0.8rem',
        '120': '34rem',
      },
      animation: {
        'scrolldown': 'scrollDown 1.2s infinite',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
