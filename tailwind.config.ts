import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-besley)", "sans-serif"],
        body: ["var(--font-source-code-pro)", "sans-serif"],
      },
      colors: {
        "brand-white": "#f9f9f9",
        "brand-gray": "#a2a2a2",
        "brand-black": "#0c0f11",
      },
    },
  },
  plugins: [],
} satisfies Config;
