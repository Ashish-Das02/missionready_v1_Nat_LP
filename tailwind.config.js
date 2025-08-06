/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'brand-orange': '#FF8C00',
        'brand-dark': '#2F1D1D',
        'brand-beige': '#FBE3D6',
        'brand-gray': '#7F7F7F',
        'brand-white': '#FFFFFF',
        'brand-black': '#000000',
      },
    },
  },
  plugins: [],
};
