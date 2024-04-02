/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        primaryShadow: '0 4px 0 0 #0078d7',
        primaryHover: '0 4px 0 0 #0067c5',
        primaryActive: '0 0 0 0 #0067c5',
        secondaryActive: '0 2px 0 0 #cbd5e1',
        secondaryActiveDark: '0 2px 0 0 #384a61',
        secondaryShadow: '0 4px 0 0 #cbd5e1',
        secondaryHover: '0 4px 0 0 #94a3b8',
        secondaryShadowDark: '0 4px 0 0 #4a6382',
        secondaryHoverDark: '0 4px 0 0 #384a61',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        manrope: ['Manrope', ...defaultTheme.fontFamily.sans],
      },

      colors: {
        secondary: {
          50: '#fef2e1',
          100: '#fcdeb5',
          200: '#fac886',
          300: '#f8b258',
          400: '#f6a13a',
          500: '#f49228',
          600: '#ef8726',
          700: '#e87824',
          800: '#e16a21',
          900: '#d7511c',
        },
        primary: {
          50: '#e2f2fd',
          100: '#b7dffc',
          200: '#88cbfb',
          300: '#52b6f9',
          400: '#12a6f9',
          500: '#0098f8',
          600: '#008aea',
          700: '#0078d7',
          800: '#0067c5',
          900: '#0049a7',
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
