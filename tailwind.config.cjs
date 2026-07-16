/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        accent: '#e33d26',
        paper: '#f4f2ec',
        'paper-2': '#ece9dd',
        ink: '#16150f',
        muted: '#55534a',
        'muted-2': '#77756a',
        faint: '#9a988d',
        rule: '#d8d5c6',
        night: '#14130f',
        'night-2': '#1d1c16',
        'night-ink': '#e9e6d9',
        'night-muted': '#aaa79a',
        'night-muted-2': '#949184',
        'night-rule': '#35342b'
      },
      fontFamily: {
        display: ['Michroma', 'sans-serif'],
        heading: ['Chakra Petch', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
        sans: ['IBM Plex Sans', 'sans-serif']
      },
      animation: {
        'slide-in': 'slide-in 500ms ease both',
        blink: 'blink 2s steps(1) infinite'
      },
      keyframes: {
        'slide-in': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        blink: {
          '0%, 60%': { opacity: '1' },
          '61%, 100%': { opacity: '.22' }
        }
      }
    },
  },
  plugins: [],
}
