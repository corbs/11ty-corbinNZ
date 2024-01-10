/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_site/**/*.{html,liquid,js}"],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#FFCA2E',
          dark: '#F7BC28',
          darker: '#F7BC28',
          light: '#FFCE55',
        },
      },
    },
  },
  plugins: [],
}
