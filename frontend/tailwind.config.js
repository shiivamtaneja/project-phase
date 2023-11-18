/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'ev-banner': "url('/src/assets/Images/Banners/ev-banner.jpg')",
      }
    },
  },
  plugins: [],
}

