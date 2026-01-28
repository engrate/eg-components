import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap font-sans font-normal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunflower focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        sunflower: 'bg-sunflower text-primary',
        'lemon-meringue': 'bg-lemon-meringue text-primary',
        vanilla: 'bg-vanilla text-primary',
        eggshell: 'bg-eggshell text-primary',
        'warm-purple': 'bg-warm-purple text-white',
        'cool-purple': 'bg-cool-purple text-white',
        'electric-blue': 'bg-electric-blue text-white',
        'deep-blue': 'bg-deep-blue text-white',
        error: 'bg-error text-white',
        secondary: 'border border-border bg-alt text-secondary',
      },
      size: {
        xs: 'rounded-pill px-1.5 py-0.5 text-xs',
        sm: 'rounded-pill px-2 py-0.5 text-xs',
        md: 'rounded-pill px-2.5 py-1 text-sm',
        lg: 'rounded-pill px-3.5 py-1 text-body',
        xl: 'rounded-pill px-4 py-1.5 text-body',
      },
    },
    defaultVariants: {
      variant: 'sunflower',
      size: 'md',
    },
  }
)

interface BadgeProps
  extends
    Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'>,
    VariantProps<typeof badgeVariants> {
  /** Render as a child component (for use with links, etc.) */
  asChild?: boolean
}

/**
 * Badge component for displaying status, labels, or counts.
 * Features pill-shaped design with various Engrate brand colors.
 *
 * @example
 * ```tsx
 * <Badge variant="sunflower">New</Badge>
 * <Badge variant="error" size="sm">Alert</Badge>
 * <Badge variant="deep-blue" size="lg">Premium</Badge>
 * ```
 */
const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'span'
    return (
      <Comp
        className={cn(badgeVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Badge.displayName = 'Badge'

export { Badge, badgeVariants }
export type { BadgeProps }
