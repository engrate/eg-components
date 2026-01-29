/**
 * Engrate design tokens as CSS custom properties.
 *
 * In Tailwind CSS v4, configuration is done via CSS using the @theme directive.
 * Consumers should import the styles.css from this package which includes all
 * the design tokens.
 *
 * @example
 * ```css
 * /* In your main CSS file *\/
 * @import '@engrate/components/styles.css';
 * ```
 *
 * For legacy compatibility, the theme tokens are exported here as well.
 */
export const engrateTheme = {
  colors: {
    sunflower: {
      DEFAULT: '#FFBE26',
      hover: '#E5AB22',
    },
    'lemon-meringue': '#FFF8A2',
    vanilla: '#FFFCD0',
    eggshell: '#FFFDE8',
    primary: '#1A1A1A',
    secondary: '#4A4A4A',
    tertiary: '#6A6A6A',
    white: '#FFFFFF',
    main: '#FAFAFA',
    alt: '#F5F5F5',
    card: '#F9F9F9',
    contrast: '#EFEFEF',
    border: '#E5E5E5',
    'warm-purple': '#721B5D',
    'cool-purple': '#9B4ED8',
    'electric-blue': '#0080FF',
    'deep-blue': '#002FA7',
    error: '#DC2626',
  },
  fontFamily: {
    display: ['Libre Baskerville', 'serif'],
    sans: ['Work Sans', 'sans-serif'],
    mono: ['IBM Plex Mono', 'monospace'],
  },
} as const

export { engrateTheme as egComponentsPreset }
export default engrateTheme
