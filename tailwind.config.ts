import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F7F3EA",
        ink: "#151515",
        "olive-grey": "#88958D",
        "deep-olive": "#606D5D",
        blush: "#FCBFB7",
      },
      fontFamily: {
        handwriting: ['KiraHandwriting', 'cursive'],
      },
    },
  },
  plugins: [],
};
export default config;
