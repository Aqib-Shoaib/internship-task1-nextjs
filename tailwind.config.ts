import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "sub-heading": "#0F172A",
        "sub-nav": "#334155",
        "sub-nav-active": "#993AE2",
        primary: "#181D27",
        tertiary: "#535862",
      },
    },
  },
  plugins: [],
} satisfies Config;
