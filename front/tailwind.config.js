/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-green": "#9BB878",
        "bg-blue": "#668BD2",
        "bg-brown": "#AA9292",
        "bg-gray": "#F5F6F7",
        "gray-text": "#685D5D",
        "pink-bg": "#FFB8BC",
        "yellow-bg": "#FFD072",
        "type-card": "#F7F2EC",
        "hover-card": "#FFEFD8",
        "wave-btn": "#DE4837",
        "notWave-btn": "#668BD2",
        "start-btn": "#9CB979",
        "start-hover": "#FEA54B",
      },
    },
    fontFamily: {
      ibm: ["IBM Plex Sans Thai", "sans-serif"],
    },
  },
  plugins: [],
};
