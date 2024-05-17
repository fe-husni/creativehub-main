/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        'creativehub-black': '#121212',
        'creativehub-grey': '#A0A0A0',
        'creativehub-light-grey': '#D0D0D0',
        'creativehub-dark-grey': '#414141',
        'creativehub-darker-grey': '#1E1E1E',
        'creativehub-dark-footer': '#181818'
      },
      fontFamily: {
        "poppins": "Poppins",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slideToR: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        slideToT: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)" },
        },
        slideToB: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}