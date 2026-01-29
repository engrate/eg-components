import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const progressIndicatorVariants = cva(
  'bg-border relative w-full overflow-hidden rounded-full',
  {
    variants: {
      size: {
        sm: 'h-1',
        default: 'h-2',
        lg: 'h-3',
        xl: 'h-4',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

const progressBarVariants = cva('h-full transition-all duration-300 ease-out', {
  variants: {
    variant: {
      default: 'bg-sunflower',
      muted: 'bg-secondary',
      success: 'bg-electric-blue',
    },
    animated: {
      true: 'animate-pulse',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    animated: false,
  },
})

interface ProgressIndicatorProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressIndicatorVariants>,
    VariantProps<typeof progressBarVariants> {
  /** Current progress value (0-100) */
  value?: number
  /** Maximum progress value */
  max?: number
  /** Accessible label for screen readers */
  label?: string
  /** Whether to show indeterminate loading state */
  indeterminate?: boolean
}

/**
 * Progress indicator component following Engrate brand guidelines.
 * Uses Sunflower yellow as the default color for the progress bar.
 *
 * @example
 * ```tsx
 * <ProgressIndicator value={50} />
 * <ProgressIndicator value={75} size="lg" variant="success" />
 * <ProgressIndicator indeterminate label="Loading..." />
 * ```
 */
const ProgressIndicator = React.forwardRef<
  HTMLDivElement,
  ProgressIndicatorProps
>(
  (
    {
      className,
      value = 0,
      max = 100,
      size,
      variant,
      animated,
      label = 'Progress',
      indeterminate = false,
      ...props
    },
    ref
  ) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label}
        className={cn(progressIndicatorVariants({ size, className }))}
        {...props}
      >
        <div
          className={cn(
            progressBarVariants({ variant, animated }),
            indeterminate && 'animate-progress-indeterminate'
          )}
          style={{
            width: indeterminate ? '50%' : `${percentage}%`,
          }}
        />
      </div>
    )
  }
)
ProgressIndicator.displayName = 'ProgressIndicator'

export { ProgressIndicator, progressIndicatorVariants, progressBarVariants }
export type { ProgressIndicatorProps }
