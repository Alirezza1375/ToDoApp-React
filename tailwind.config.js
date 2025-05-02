export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust based on your file structure
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Default font (optional)
        "single-day": ['"Single Day"', "cursive"], // Your custom font
      },
    },
  },
  plugins: [],
};
