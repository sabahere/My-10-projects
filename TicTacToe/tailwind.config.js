/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "custom-width": "352px",
      },
      backgroundImage: {
        "custom-gradient":
          "repeating-conic-gradient(#03001c 10deg 20deg, #301e67 20deg 30deg)",
      },
      colors: {
        customDBlue: "#03001c",
        customBlue1: "#301e67",
        customBlue2: "#5b85b9",
        customWhite: "#f6f1f1",
      },
    },
  },
  plugins: [],
};
