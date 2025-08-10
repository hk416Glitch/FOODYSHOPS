/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          500: "#ff6b6b",
          700: "#e24f4f"
        }
      }
    }
  },
  plugins: []
};
