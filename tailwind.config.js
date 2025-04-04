module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        shake: "shake 0.5s ease-in-out",
        zoomIn: "zoomIn 0.6s ease-in-out",
        bounce: "bounce 0.3s ease-in-out",
      },
      keyframes: {
        shake: {
          "0%": { transform: "translateX(-5px)" },
          "25%": { transform: "translateX(5px)" },
          "50%": { transform: "translateX(-5px)" },
          "75%": { transform: "translateX(5px)" },
          "100%": { transform: "translateX(0)" },
        },
        zoomIn: {
          "0%": { transform: "scale(0.3)", opacity: "0" },
          "50%": { transform: "scale(1.1)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        bounce: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
