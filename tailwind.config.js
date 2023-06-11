/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens:{
      'sm': '300px',
      'md': '500px',
      'lg': '1024px'
    },
    colors:{
      'burgundy': '#611818',
      'tan': '#a36754',
      'white': '#ffffff'
    }
  },
  plugins: [],
}

