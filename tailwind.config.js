
module.exports = {
  purge: false,
  darkMode: false,
  theme: {
    extend: {
      colors: {
        light: {
          100: "#EBEBEB",
          200: "#CECECE",
          300: "#B0B0B0"
        },
        dark: {
          100: "#0F2A45",
          200: "#092038",
          300: "#06182C"
        }
      },
      fontSize: {
        "10xl": ["10rem", "1"]
      },
      borderRadius: {
        'none': '0',
        'hs': '3px',
        'hm': '6px',
        'hl': '9px',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
