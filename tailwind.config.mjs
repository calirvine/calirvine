/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      white: "#ffffff",
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        600: "#4b5563",
        700: "#374151",
        900: "#111827",
      },
      primary: "#445868", // Pantone 2189 U
      "primary-light": "#5a6d7f",
      "primary-dark": "#2d3a47",
      "primary-50": "#f0f2f4",
      "primary-100": "#e0e5eb",
      "primary-200": "#c1cbd6",
      "primary-300": "#a2b1c1",
    },
    fontFamily: {
      sans: ["system-ui", "sans-serif"],
      serif: ["Georgia", "serif"],
    },
  },
  plugins: [],
};
