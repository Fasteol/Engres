module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  daisyui: {
    themes: [],
  },
  theme: {
    extend: {},
    fontFamily: {
      poppins: ["Poppins", "Sans-serif"],
    },
  },

  variants: {
    extend: {},
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar")],
};
