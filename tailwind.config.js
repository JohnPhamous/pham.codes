/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/index.tsx'],
  theme: {
    extend: {
      animation: {
        fade: 'fadeIn 1s ease-in-out forwards',
      },

      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
