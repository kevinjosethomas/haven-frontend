
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
        },
        blue: {
          350: "#77B2FB",
          450: "#4998F9"
        }
      },
      fontSize: {
        "10xl": ["10rem", "1"]
      }
    },
    borderRadius: {
      'none': '0',
      DEFAULT: '6px',
      'sm': '3px',
      'md': '6px',
      'lg': '9px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
