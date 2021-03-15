
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
        "10xl": ["11rem", "1"]
      },
      width: {
        "card-target-large": "28rem"
      },
      height: {
        "footer": "25rem",
        "sm-section": "35rem",
        "section": "60rem",
        "card-target": "30rem",
        "card-target-large": "36rem"
      },
      borderRadius: {
        'none': '0',
        'hs': '3px',
        'hm': '6px',
        'hl': '9px',
        'hxl': '12px',
        'h2xl': '15px',
        'h3xl': '18px'
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
