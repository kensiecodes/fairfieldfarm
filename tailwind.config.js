const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        babyblue: "#a4c9c8",
        darkblue: "#08848e",
        sand: "#d9824f",
        burntorange: "#c76c18",
        terracotta: "#94483b",
        twilight: "#745a5d",
      },
      fontFamily: {
        sans: ['"Source Sans Pro"', ...defaultTheme.fontFamily.sans],
        serif: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#98ccfd",
          secondary: "#4787c7",
          accent: "#517485",
          neutral: "#1b262c",
          "base-100": "#FFFFFF",
          info: "#98ccfd",
          success: "#86efac",
          warning: "#fef08a",
          error: "#f43f5e",
        },
      },
    ],
  },
};
