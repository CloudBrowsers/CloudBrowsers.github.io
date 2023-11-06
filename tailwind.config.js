/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // colors: {
      // },
      backgroundColor: {
        "primary-btn-color": "var(--primary-btn-color)",
        "secondary-btn-color": "var(--secondary-btn-color)",
        "secondary-page-color": "var(--secondary-page-color)",
        "count-section-bg-color": "var(--count-section-bg-color)",
        "offering-list-bg-color": "var(--offering-list-bg-color)",
      },
    },
  },
  plugins: [],
};
