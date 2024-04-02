/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        primaryShadow: '0 4px 0 0 #cf0374',
        primaryHover: '0 4px 0 0 #b9036f',
        primaryActive: '0 0 0 0 #b9036f',
        secondaryActive: '0 2px 0 0 #cbd5e1',
        secondaryActiveDark: '0 2px 0 0 #384a61',
        secondaryShadow: '0 4px 0 0 #cbd5e1',
        secondaryHover: '0 4px 0 0 #94a3b8',
        secondaryShadowDark: '0 4px 0 0 #4a6382',
        secondaryHoverDark: '0 4px 0 0 #384a61',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        unbounded: ['Unbounded', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: '#fce5f0',
          100: '#f9bddb',
          200: '#f791c3',
          300: '#f763aa',
          400: '#f73d95',
          500: '#f8007f',
          600: '#e6007b',
          700: '#cf0374',
          800: '#b9036f',
          900: '#920266',
        },
        moon: {
          50: 'rgb(223, 229, 236)',
          100: 'rgb(190, 203, 218)',
          200: 'rgb(158, 176, 199)',
          300: 'rgb(125, 150, 181)',
          400: 'rgb(93, 124, 162)',
          500: 'rgb(74, 99, 130)',
          600: 'rgb(56, 74, 97)',
          700: 'rgb(33, 45, 59)',
          800: 'rgb(27, 35, 45)',
          900: 'rgb(13, 18, 23)',
        },
      },
    },
  },
  plugins: [],
};
