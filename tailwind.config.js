module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        doz: {
          title: "#0E4F7F",
          primary: "#596A7D",
          secondary: "#5B5E6D",
          dark: "#323648",
          gray: "#D8D8D8",
          darkBlue: "#0E4F7F",
        },
      },
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      lighterBlue: "#20BCE0",
      lightBlue: "#239AC3",
      blue: "#136EAF",
      darkBlue: "#0E4F7F",
      darkestBlue: "#08082E",
    }),
  },
  variants: {},
  plugins: [],
};
