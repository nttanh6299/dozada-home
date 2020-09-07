module.exports = {
  purge: {
    enabled: true,
    content: ['./dist/*.html'],
  },
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
      backgroundColor: {
        lighterBlue: "#20BCE0",
        lightBlue: "#239AC3",
        blue: "#136EAF",
        darkBlue: "#0E4F7F",
        darkestBlue: "#08082E",
      },
      fontSize: {
        70: "70px",
        60: "60px",
        46: "46px",
        32: "32px",
        26: "26px",
        25: "25px",
        22: "22px",
        18: "18px",
        15: "15px"
      },
      width: {
        "9/10": "90%"
      },
    }
  },
  variants: {},
  plugins: [],
};
