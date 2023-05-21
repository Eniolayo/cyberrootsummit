/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brightNavyBlue: "#146BDF",
        aliceBlue: "#F0F7FF",
        jordyBlue: "#89B5EF",
        tuftsBlue: "#3B84E4",
        sapphire: "#1159BA",
        yaleBlue: "#0D4795",
        gray: "#7B7B7B",
        brightGray: "#EDEDED",
        philippineGray: "#8D8D8D",
        chineseSilver: "#C9C9C9",
        lightSilver: "#D9D9D9",
        darkSilver: "#717171",
        spanishGray: "#9E9E9E",
        azureishWhite: "#D9E8FD",
        ghostWhite: "#F8F9FB",
        ateneoBlue: "#0A3670",
        oxfordBlue: "#07244A",
        maastrichtBlue: "#04152D",
        cornflowerBlue: "#629CEA",
        paleCornflowerBlue: "#B1CEF4",
      },
      screens: {
        s: "500px",
        sm: "640px",
        md: "768px",
        m: "890px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      lineHeight: {
        tight: "1.12rem",
        s: "1.52rem",
        m: "1.8rem",
        l: "3.5rem",
      },
      letterSpacing: {
        m: "2px",
        l: "5px",
        xl: "10px",
        "2xl": "20px",
        "3xl": "30px",
        "4xl": "40px",
      },
      backgroundImage: {
        "gradient-primary": `linear-gradient(230deg, rgba(49,61,232,1) 59%, rgba(57,143,207,1) 100%)`,
      },
      dropShadow: {
        "6xl": "5px 7px 11px 0px #000000",
      },

      fontFamily: {
        product: ["var(--productSans-font)", ...fontFamily.sans],
      },
      backgroundImage: {
        "summit-bg": "url('/summit-bg.png')",
        "summit-gallery-bg": "url('/summit-gallery-bg.png')",
        "cyber-summit-bg": "url('/cyber-summit-bg.png')",
        "demo-summit-bg1": "url('/demo-summit-bg1.png')",
        "demo-summit-bg2": "url('/demo-summit-bg2.png')",
        "demo-summit-bg3": "url('/demo-summit-bg3.png')",
      },
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      m: "0.30rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "50px",
    },
  },
  plugins: [],
};
