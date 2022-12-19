/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#1B1C1E',
        text: '#736c59'
      },
      animation: {
        'pulse-slow': 'pulse 0.75s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'pulse-slow': {
          
            '0%, 100%': {
              opacity: '1'
            },
            '50%': {
              opacity: '.5'
          }
        }
      }
    },
  },
  plugins: [],
}
