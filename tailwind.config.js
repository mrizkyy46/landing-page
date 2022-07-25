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
        'background-page1': "radial-gradient(175% 57.77% at 50% 40%, rgba(255, 180, 52, 0) 0%, rgba(55, 44, 33, 0.10) 70%,#08090A 103%),url('/dist/assets/main-bg.jpg')",
        'background-page2': "radial-gradient(175% 10% at 50% 75%, rgba(255, 180, 52, 0) 0%, rgba(55, 44, 33, 0.10) 70%,#08090A 800%),url('/dist/assets/the-games-bg.jpg')",
        'background-page3': "url('/dist/assets/features.jpg')",
        'background-page4': "radial-gradient(30% 75% at 65% 40%,rgba(0, 0, 52, 0) 0%,rgba(10, 10, 10, 0.50) 50%,#000 95%),url('/dist/assets/requirements.png')",
        'background-page5': "radial-gradient(175% 57.77% at 50% 40%, rgba(255, 180, 52, 0) 0%, rgba(55, 44, 33, 0.10) 70%,#08090A 103%),url('/dist/assets/top-score-bg.png')",
      },
      spacing: {
        '2.8': '0.8rem',
        '120': '34rem',
      },
      animation: {
        'scrolldown': 'scrollDown 1.2s infinite',
      },
      colors: {
        'regal-grey': '#080a0b',
        'card-grey': '#222831',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
