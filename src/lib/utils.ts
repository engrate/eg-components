import { type ClassValue, clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

/**
 * Configure tailwind-merge to recognize custom Engrate design tokens.
 * This ensures proper merging of custom font sizes and colors.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        {
          text: [
            'hero',
            'h1',
            'h2',
            'h3',
            'h4',
            'lead',
            'semi-lead',
            'body-lg',
            'body',
            'descriptive',
            'small',
            'label',
            'label-sm',
          ],
        },
      ],
    },
  },
})

/**
 * Merge Tailwind CSS classes with proper precedence handling.
 * Combines clsx for conditional classes with tailwind-merge for deduplication.
 *
 * @example
 * ```tsx
 * cn('px-4 py-2', isLarge && 'px-6 py-3', className)
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
