// quasar.conf.js

module.exports = function (/* ctx */) {
  return {
    // ...
    css: {
      loaderOptions: {
        postcss: {
          // Override the default postcss options to use Tailwind CSS
          postcssOptions: {
            plugins: [
              require('tailwindcss'),
              require('autoprefixer'),
            ],
          },
        },
      },
    },
    // ...
  }
}
