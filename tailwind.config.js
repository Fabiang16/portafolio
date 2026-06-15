/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // I added our custom color palette
      colors: {
        brand: {
          dark: '#0f172a',    // Main fund
          card: '#1e293b',    //  Background for project cards
          primary: '#06b6d4', // Accent color (cyan)
          text: '#f8fafc',    // Main text
          muted: '#cbd5e1',   // Secondary text
        }
      },
      // I added the variables from the sources
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-fira-code)', 'monospace'],
      },
    },
  },
  plugins: [],
}
