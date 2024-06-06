import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme : {
    extend: {
      colors: {
        green: {
          50: "#17e2a3",
          500: "#076351"
        },
        yellow: {
          50: "#f4a811",
          500: "#c4a672"
        },
        blue: {
          50: "#9abef4",
          500: "#0a0aa0"
        }
      },
      backgroundImage: {
        'river': "url('/images/bg_riviere_2.png')",
      }
    }
  }

};
export default config;
