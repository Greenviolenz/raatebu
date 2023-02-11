/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './icons/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#372525',
        grey: '#C2BABA',
        footer: '#2B2B2B',
      },
      fontSize: {
        h1: '56px',
        h2: '48px',
        h3: '32px',
        h4: '24px',
        h5: '20px',
        h6: '18px',
        body1: '16px',
      },
    },
  },
  plugins: [],
}
