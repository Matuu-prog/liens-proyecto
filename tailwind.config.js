/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'liens-cafe': '#4A3728',
        'liens-oro': '#D4AF37',
        'liens-crema': '#F5F5DC',
      }
    },
  },
  plugins: [],
}
