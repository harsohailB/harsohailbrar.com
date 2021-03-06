module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        rest: "80vh",
      },
      fontFamily: {
        spartan: ["Spartan", "sans-serif"],
        playfair: ["Playfair Display", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
