/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'cadet': '#122752',
        'lion': '#C49c6D',
        'eerie': '#1a1a1a',
        'platinum': '#e0e0e0',
        'cream': '#ffffd9'
      },
      fontFamily: {
        sans: ['Pridi', 'serif'],
      },
    },
  },
  plugins: [require('daisyui')],
};
