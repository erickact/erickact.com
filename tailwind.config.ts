import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

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
      textShadow: {
        DEFAULT:
          "0 0 30px #EC637B, 0 0 10px rgba(230, 161, 173, 0.41), 0 0 100px #E6A1AD, 0 0 500px #F36780, 5px 9px 5px rgba(0, 0, 0, 0.5)",
        off: "7px 7px 5px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
    }),
  ],
} satisfies Config;
