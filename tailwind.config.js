/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Add all files that use Tailwind classes:
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust extensions as needed
    
    // If using other directories:
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}