/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand_color': '#C51605',
      },
    },
    container: {
      center: true,
      // padding: '2rem',
      padding: {
        // DEFAULT: '1rem',
        // sm: '2rem',
        // lg: '4rem',
        xl: '177px',
        // '2xl': '177px',
      },
    },
    fontFamily: {
      'inter': [ "Inter", 'sans-serif'],
     
    }
  },
  plugins: [],
}