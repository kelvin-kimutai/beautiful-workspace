module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // screens: {
    //   md: "800px",
    // },
    extend: {
      colors: {
        darkGreen: "#3a484f",
        fadedGreen: "#a8b2ba",
        swatch: {
          one: "#dee2e5",
          two: "#ebedef",
          three: "#5b636a",
          four: "#13181b",
          five: "#747e89",
        },
      },
      fontFamily: {
        body: ["Nunito"],
        title: ["Montserrat"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
