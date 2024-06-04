/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.html', './src/**/*.js' ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/bg-buildings.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      dropShadow: {
        'text' : "0px 0px 3px white"
      }
    },
  },
  plugins: [],
}

