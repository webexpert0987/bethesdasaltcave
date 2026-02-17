/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // <-- App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // <-- if you have pages folder
    "./components/**/*.{js,ts,jsx,tsx}", // <-- your components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
