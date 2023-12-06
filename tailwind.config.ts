import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme.js";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "silver-tree": "#70BD91",
      acadia: "#392F2D",
      bombay: "#AEAEAE",
      "orange-red": "#FD4802",
      "fire-engine-red": "#C52425",
      "pastel-magenta": "#FF9DBF",
      supernova: "#FAC900",
      "spanish-green": "#008A52",
      "scotch-mist": "#EFE9CB",
      "nile-blue": "#243853",
      "black-pearl": "#071126",
      "turquoise-green": "#A0CCB7",
      padua: "#B1E3CC",
      "vista-blue": "#94D1B4",
      "silver-tree-dark": "#70BD91",
      black: "#000000",
      white: "#FFFFFF",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
