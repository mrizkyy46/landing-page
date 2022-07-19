/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        'background-page1': "url('/dist/assets/main-bg.jpg')",
        'background-page2': "url('/dist/assets/the-games-bg.jpg')",
        'background-page3': "url('/dist/assets/features.jpg')",
        'background-page4': "url('/dist/assets/requirements.png')",
        'background-page5': "url('/dist/assets/top-score-bg.png')",
      },
      backgroundSize: {
        '100': "100% 100%",
      }
    },
  },
  plugins: [],
}
