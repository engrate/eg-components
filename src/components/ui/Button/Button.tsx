'use client'

import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'text-body focus-visible:ring-sunflower inline-flex items-center justify-center font-sans font-normal whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-sunflower text-primary hover:bg-sunflower-hover active:bg-sunflower-hover',
        secondary:
          'border-border bg-border text-primary active:bg-alt border hover:bg-white',
        ghost: 'text-primary hover:bg-alt active:bg-contrast',
      },
      size: {
        sm: 'rounded-pill text-small px-5 py-1',
        default: 'rounded-pill text-small px-8 py-1.5',
        lg: 'rounded-pill text-body px-12 py-2',
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
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
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
