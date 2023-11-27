/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*/.{html,js}"


  ],
  theme: {
  extend: {
    container: {
      center: true,
      padding: '2rem',
    },
  },
  },
  plugins: [],
}

