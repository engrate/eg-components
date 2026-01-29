import { engrateTheme } from './src/theme.ts'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: engrateTheme,
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-animate')],
}
