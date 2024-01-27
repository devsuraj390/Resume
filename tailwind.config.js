/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'body': ['"Source Sans 3"']
      },
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5'
        }
      }
    },
  },
  plugins: [],
}

