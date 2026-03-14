/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ipeng-light': '#00d4ff',
        'ipeng-blue': '#0099cc',
        'ipeng-navy': '#003d5c',
        'ipeng-dark': '#001a2e',
      },
      transitionDelay: {
        '200': '200ms',
        '300': '300ms',
        '700': '700ms',
      },
    },
  },
  plugins: [],
};
