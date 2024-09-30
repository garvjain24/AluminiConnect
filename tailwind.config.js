module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        brown: {
          500: '#A52A2A', // Define your brown color here
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
