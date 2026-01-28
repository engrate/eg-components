/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        sunflower: {
          DEFAULT: '#FFBE26',
          hover: '#E5AB22',
        },
        'lemon-meringue': '#FFF8A2',
        vanilla: '#FFFCD0',
        eggshell: '#FFFDE8',

        // Grayscale palette
        'text-primary': '#1A1A1A',
        'text-secondary': '#4A4A4A',
        'text-tertiary': '#6A6A6A',
        'bg-main': '#FAFAFA',
        'bg-alt': '#F5F5F5',
        'bg-card': '#F9F9F9',
        'bg-contrast': '#EFEFEF',
        border: '#E5E5E5',

        // Complementary colors (use sparingly)
        'warm-purple': '#721B5D',
        'cool-purple': '#9B4ED8',
        'electric-blue': '#0080FF',
        'deep-blue': '#002FA7',
      },
      fontFamily: {
        display: ['Libre Baskerville', 'serif'],
        sans: ['Work Sans', 'sans-serif'],
      },
      fontSize: {
        // Typography scale based on brand guidelines
        hero: ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }], // 60pt hero
        h1: ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }], // 40pt
        h2: ['1.875rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }], // 30pt
        h3: ['1.5625rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }], // 25pt
        body: ['1rem', { lineHeight: '1.5', letterSpacing: '0' }],
        small: ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        label: ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.02em' }],
      },
      borderRadius: {
        pill: '9999px',
      },
      spacing: {
        // Button padding based on brand guidelines
        'btn-x': '2.5rem', // 40px
        'btn-y': '1rem', // 16px
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
