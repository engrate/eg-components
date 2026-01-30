import { ClassValue } from 'clsx';
/**
 * Merge Tailwind CSS classes with proper precedence handling.
 * Combines clsx for conditional classes with tailwind-merge for deduplication.
 *
 * @example
 * ```tsx
 * cn('px-4 py-2', isLarge && 'px-6 py-3', className)
 * ```
 */
export declare function cn(...inputs: ClassValue[]): string;
