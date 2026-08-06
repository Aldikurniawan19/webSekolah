/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface": "#f7fafe",
        "surface-container-low": "#f1f4f8",
        "surface-variant": "#e0e3e7",
        "on-surface": "#181c1f",
        "on-surface-variant": "#434752",
        "inverse-surface": "#2d3134",
        "primary": "#003883",
        "primary-container": "#1e4fa3",
        "primary-fixed-dim": "#afc6ff",
        "on-primary-fixed": "#001944",
        "tertiary-fixed-dim": "#f6bf22",
        "on-tertiary-fixed": "#251a00",
        "body-gray": "#4B5563",
        "outline": "#737783",
        "overlay-navy": "rgba(11, 42, 91, 0.55)",
      },
      spacing: {
        "container-max": "1280px",
        "section-v-padding": "96px",
        "gutter": "24px",
        "margin-x": "40px",
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        "lg": "1rem",
      },
    },
  },
  plugins: [],
}

