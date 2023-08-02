/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/*.{js,jsx,ts,tsx}"],
  theme: {
    
    extend: {
      fontFamily: {
        custom: ["Lexend", "sans-serif"],
        extend: {},
      },
      colors: {
        royal:"#150F28",
        honey:"#C0A615",
        sand:"#CBBBA0",
        latte:"#F7F5F3",
  
        white: "#FFFFFF",
        black: "#000000",
        transparent: "transparent",
      },
      backgroundImage: {
        'welcome-img': "url('/wlcm.png')",
        'about-us-img': "url('/aboutUs.png')",
      }
    }
  },
  plugins: [],
};
