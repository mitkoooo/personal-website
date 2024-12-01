import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "formal-grey": "#E5E7EB",
        "darkmode-dark": "#282828",
        "darkmode-active": "#494949",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
} satisfies Config;
