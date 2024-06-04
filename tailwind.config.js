/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/index.tsx'],
  theme: {
    extend: {
      animation: {
        fade: 'fadeIn 1.5s ease forwards',
        textFade: 'textFadeIn 0.4s ease both',
      },

      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        textFadeIn: {
          from: { opacity: 0, transform: `translateY(-1lh)` },
          to: { opacity: 1, transform: `translateY(0lh)` },
        },
      },
    },
  },
  plugins: [],
};
