import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

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
        "formal-grey": "#f1f2f4",
        "darkmode-dark": "#282828",
        "darkmode-active": "#494949",
      },
    },
  },
  darkMode: "selector",
  plugins: [typography],
} satisfies Config;
