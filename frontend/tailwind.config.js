/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./frontend/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        background_light: 'var(--background-light)',
        card: 'var(--card)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        text_primary: 'var(--text-primary)',
        text_secondary: 'var(--text-secondary)',
      }
    },
  },
  plugins: [],
}
