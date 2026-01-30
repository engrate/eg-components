'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const spinnerVariants = cva(
  'inline-block animate-spin rounded-full border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]',
  {
    variants: {
      variant: {
        default: 'text-sunflower',
        muted: 'text-secondary',
        inverted: 'text-white',
      },
      size: {
        sm: 'h-4 w-4 border-2',
        default: 'h-6 w-6 border-2',
        lg: 'h-8 w-8 border-3',
        xl: 'h-12 w-12 border-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

interface SpinnerProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof spinnerVariants> {
  /** Accessible label for screen readers */
  label?: string
}

/**
 * Loading spinner component following Engrate brand guidelines.
 * Uses Sunflower yellow as the default color.
 *
 * @example
 * ```tsx
 * <Spinner />
 * <Spinner size="lg" variant="muted" />
 * <Spinner label="Loading data..." />
 * ```
 */
const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ className, variant, size, label = 'Loading', ...props }, ref) => {
    return (
      <span
        ref={ref}
        role="status"
        aria-label={label}
        className={cn(spinnerVariants({ variant, size, className }))}
        {...props}
      >
        <span className="sr-only">{label}</span>
      </span>
    )
  }
)
Spinner.displayName = 'Spinner'

export { Spinner, spinnerVariants }
export type { SpinnerProps }
