import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const dividerVariants = cva('bg-border shrink-0', {
  variants: {
    orientation: {
      horizontal: 'h-px w-full',
      vertical: 'h-full w-px',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})

interface DividerProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerVariants> {
  /**
   * Whether the divider is decorative only.
   * When true, the divider will be hidden from screen readers.
   * @default true
   */
  decorative?: boolean
}

/**
 * Divider component for visually separating content.
 * Supports both horizontal and vertical orientations.
 *
 * @example
 * ```tsx
 * // Horizontal divider (default)
 * <Divider />
 *
 * // Vertical divider
 * <Divider orientation="vertical" />
 *
 * // With custom styling
 * <Divider className="my-4" />
 * ```
 */
const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  (
    { className, orientation = 'horizontal', decorative = true, ...props },
    ref
  ) => {
    const resolvedOrientation = orientation ?? 'horizontal'
    return (
      <div
        ref={ref}
        role={decorative ? 'none' : 'separator'}
        aria-orientation={decorative ? undefined : resolvedOrientation}
        className={cn(
          dividerVariants({ orientation: resolvedOrientation, className })
        )}
        {...props}
      />
    )
  }
)
Divider.displayName = 'Divider'

export { Divider, dividerVariants }
export type { DividerProps }
