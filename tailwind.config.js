module.exports = {
  purge: {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
      "./node_modules/quasar/src/**/*.js"
    ],
  },
  theme: {
    colors: {
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
    },
    fontFamily: {
      'sans': ['Inter', 'Arial', 'sans-serif'],
    },
  },
  plugins: [],
}
