/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 0.5px 3px 0px rgba(0, 0, 0, 0.75)',
      }
    },
  },
  plugins: [],
}

