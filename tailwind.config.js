const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./helpers/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./modals/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      clGray: "#A0A0A0",
      clPurple: "#8447E9",
      clRed: "#FF013E",
      clLightPurple: "#B9A0CA",
      clBlue: "#3671E9",
      clLightGray: "#FCFAFF",
      clGray: "#919191",
      clShadow: "#00000069",
      clDarkPurple: "#4C0082",
      clProgress: "#5BA0CA",
      clSuccess: "#47C085",
      clSky: "#5BA0CA",
      clBlack: "#242424",
      clDarkBlue: "#081F32",
      clPink: "#FF725E",
      clLgPurple: "#F8F3FF",
      clLgGrey: "#959595",
      clDBlue: "#00000E",
      clLBlue: "#11111e",
      clDGray: "#222222",
      clGray500: "#505050",
      clGray200: "#929292",
    },
    fontFamily: {
      mont: ["Montserrat", "sans-serif"],
    },
    screens: {
      mobile: "400px",
      mobileLg: "515px",
      ...defaultTheme.screens,
    },
    extend: {
      maxWidth: {
        clContainerLg: "1440px",
        clContainer: "1390px",
        clContainerSm: "1158px",
        clContainerXs: "995px",
      },
      fontSize: {
        clH1: "3.875rem",
        clH2: "3rem",
        clH3: "2rem",
        clH4: "1.5rem",
        clH5: "1.25rem",
        clH6: "1.125rem",
        clBody1: "1rem",
        clBody2: "0.875rem",
        clCaption: "0.75rem",
        clCaption2: "0.625rem",
      },
    },
    variants: {
      extend: {},
    },
  },
  plugins: [],
};
