/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        indigo: {
          950: '#141B33',
          900: '#1B2A4A',
          800: '#233460',
          700: '#2E4278',
        },
        brass: {
          400: '#D9BB5C',
          500: '#C9A227',
          600: '#A9821B',
        },
        ivory: '#F7F4EC',
        emerald: {
          700: '#0F5132',
          600: '#136640',
        },
        clay: '#B5533C',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['"Work Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        'adire-line': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='none' stroke='%23C9A227' stroke-width='1.2' opacity='0.5'%3E%3Ccircle cx='40' cy='40' r='26'/%3E%3Ccircle cx='40' cy='40' r='14'/%3E%3Cpath d='M40 4v12M40 64v12M4 40h12M64 40h12M14.7 14.7l8.5 8.5M56.8 56.8l8.5 8.5M14.7 65.3l8.5-8.5M56.8 23.2l8.5-8.5'/%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
