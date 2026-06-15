/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Enables dark mode toggling via a CSS class
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // Updated custom color palette to use dynamic CSS variables
      colors: {
        brand: {
          dark: 'var(--bg-main)',       // Main background
          card: 'var(--card-bg)',       // Background for cards
          primary: 'var(--primary-color)', // Accent color (Slate Blue)
          text: 'var(--text-main)',     // Main text
          muted: 'var(--text-muted)',   // Secondary text
        }
      },
      // Preserved your custom fonts
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-fira-code)', 'monospace'],
      },
    },
  },
  plugins: [],
}