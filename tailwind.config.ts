import type { Config } from "tailwindcss";

const safelist = [
  ...[2, 3, 4].map((n) => `grid-cols-${n}`),
  ...[1, 2, 3, 4].map((n) => `gap-${n}`),
  'auto-cols-max',
  'grid-cols-none',
];

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxWidth: {
        "a4": "216mm"
      }
    },
  },
  plugins: [],
  safelist,
};
export default config;
