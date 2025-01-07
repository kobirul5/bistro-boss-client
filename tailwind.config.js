/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dashboard-primary': '#D1A054',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}