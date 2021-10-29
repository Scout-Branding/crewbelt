const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    fontFamily: {
      sans: ["Mulish", ...fontFamily.sans],
      display: ["neusa-next-std-compact", ...fontFamily.sans],
    },
    extend: {
      colors: {
        brand: {
          primary: "#4164ff",
          primaryFaded: "#afc8ff",
          secondary: "#32328c",
          black: "#323232",
          highlight: {
            contractor: "#ffb90a",
            manager: "#e62d37",
          },
          gray: {
            100: "#fafafa",
            200: "#e6e6e6",
          },
        },
      },
    },
  },
  plugins: [],
}
