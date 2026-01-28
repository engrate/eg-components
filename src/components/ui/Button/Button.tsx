import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap font-sans text-body font-normal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunflower focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-sunflower text-text-primary hover:bg-sunflower-hover active:bg-sunflower-hover',
        secondary:
          'border border-border bg-bg-card text-text-primary hover:bg-bg-alt active:bg-bg-contrast',
        ghost:
          'text-text-primary hover:bg-bg-alt active:bg-bg-contrast',
      },
      size: {
        sm: 'rounded-pill px-4 py-1.5 text-small',
        default: 'rounded-pill px-6 py-2 text-small',
        lg: 'rounded-pill px-btn-x py-btn-y text-body',
        icon: 'h-10 w-10 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Render as a child component (for use with Next.js Link, etc.) */
  asChild?: boolean
}

/**
 * Primary UI button component following Engrate brand guidelines.
 * Features pill-shaped design with Sunflower yellow as primary color.
 *
 * @example
 * ```tsx
 * <Button variant="primary">Click me</Button>
 * <Button variant="secondary" size="sm">Secondary</Button>
 * <Button asChild><a href="/link">Link Button</a></Button>
 * ```
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
export type { ButtonProps }
