/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        black: "#10020A",
        accent: "#F042AD",
        subdued: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
