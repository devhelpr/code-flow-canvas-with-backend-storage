/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "node_modules/@devhelpr/**/*!(*.stories|*.spec).{js,ts,tsx,html}",
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
