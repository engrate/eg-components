import type { Config } from 'tailwindcss'

import { engrateTheme } from './theme'

/**
 * Engrate design tokens as a Tailwind preset.
 * Consumers can extend their Tailwind config with this preset:
 *
 * @example
 * ```js
 * // tailwind.config.js
 * import { egComponentsPreset } from 'eg-components/tailwind.preset'
 *
 * export default {
 *   presets: [egComponentsPreset],
 *   content: [
 *     './src/**\/*.{js,ts,jsx,tsx}',
 *     './node_modules/eg-components/dist/**\/*.js',
 *   ],
 * }
 * ```
 */
export const egComponentsPreset: Config = {
  content: [],
  theme: engrateTheme,
  plugins: [],
}

export default egComponentsPreset
