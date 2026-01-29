import type { Config } from 'tailwindcss'

/**
 * Engrate design tokens - shared theme configuration.
 * This is the single source of truth for all design tokens.
 */
export const engrateTheme: Config['theme'] = {
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
      primary: '#1A1A1A',
      secondary: '#4A4A4A',
      tertiary: '#6A6A6A',
      white: '#FFFFFF',
      main: '#FAFAFA',
      alt: '#F5F5F5',
      card: '#F9F9F9',
      contrast: '#EFEFEF',
      border: '#E5E5E5',

      // Complementary colors (use sparingly)
      'warm-purple': '#721B5D',
      'cool-purple': '#9B4ED8',
      'electric-blue': '#0080FF',
      'deep-blue': '#002FA7',

      // Semantic colors
      error: '#DC2626',
    },
    fontFamily: {
      display: ['Libre Baskerville', 'serif'],
      sans: ['Work Sans', 'sans-serif'],
      mono: ['IBM Plex Mono', 'monospace'],
    },
    fontSize: {
      // Hero heading (Libre Baskerville only, 60pt+)
      hero: ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      // Headings (Work Sans)
      h1: ['2.5rem', { lineHeight: '1.025', letterSpacing: '-0.04em' }],
      h2: ['1.875rem', { lineHeight: '1.067', letterSpacing: '-0.03em' }],
      h3: ['1.5625rem', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
      h4: ['1.5625rem', { lineHeight: '1.08', letterSpacing: '-0.01em' }],
      // Body text (Work Sans)
      lead: ['1.25rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      'semi-lead': ['0.9375rem', { lineHeight: '1.6', letterSpacing: '0' }],
      'body-lg': ['0.875rem', { lineHeight: '1.25', letterSpacing: '0.01em' }],
      body: ['1rem', { lineHeight: '1.5', letterSpacing: '0' }],
      descriptive: ['0.75rem', { lineHeight: '1.75', letterSpacing: '0.04em' }],
      // Labels (Work Sans)
      small: ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
      label: ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.02em' }],
      'label-sm': ['0.625rem', { lineHeight: '2.4', letterSpacing: '0.14em' }],
    },
    borderRadius: {
      pill: '9999px',
    },
    spacing: {
      'btn-x': '2.5rem',
      'btn-y': '1rem',
    },
  },
}
