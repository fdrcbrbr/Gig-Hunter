// tailwind.config.cjs
const animate = require('tailwindcss-animate');

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: 'var(--color-cream)',
        yellow: 'var(--color-yellow)',
        orange: 'var(--color-orange)',
        'orange-dark': 'var(--color-orange-dark)',
      },
    },
  },
  plugins: [
    animate,
  ],
};
