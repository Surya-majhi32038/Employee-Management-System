module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust based on your file structure
    "./public/index.html",
  ],
  theme: {
    extend: {
      screens: {
        ph: { max: "650px" }, // Custom breakpoint for phones below 375px
      },
    },
  },
  plugins: [],
};


