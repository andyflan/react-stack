/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
};