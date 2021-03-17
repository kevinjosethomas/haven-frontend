
module.exports = {
  purge: false,
  darkMode: false,
  theme: {
    extend: {
      colors: {
        light: {
          100: "#EBEBEB",
          200: "#CECECE",
          300: "#B4B4B4",
          400: "#9E9E9E"
        },
        dark: {
          100: "#0F2A45",
          200: "#092038",
          300: "#06182C"
        }
      },
      screens: {
        "xl": "1440px",
        "2xl": "1920px"
      },
      fontSize: {
        "10xl": ["10rem", "1"],
        "11xl": ["11rem", "1"]
      },
      width: {
        "card-target-large": "28rem",
        "xl-illustration": "80rem"
      },
      height: {
        "footer": "25rem",
        "section": "60rem",
        "mini-section": "35rem",
        "section-lg": "40rem",
        "section-lg-alt": "50rem",
        "card-target": "30rem",
        "card-target-large": "36rem"
      },
      scale: {
        "103": "1.03"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
