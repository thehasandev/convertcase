/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ["Bebas Neue"],
        'oswald': ["Oswald"],
        'pop': ["Poppins"],
      }
    },
    daisyui: {
      themes: ["dark", "light"],
    },
  },
  plugins: [require("daisyui")],

}

