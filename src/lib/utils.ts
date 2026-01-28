import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

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
