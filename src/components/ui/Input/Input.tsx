import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const inputVariants = cva(
  'flex h-10 w-full rounded-md border bg-bg-card px-3 py-2 font-sans text-body text-text-primary transition-colors placeholder:text-text-tertiary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-border focus-visible:ring-sunflower',
        error: 'border-error focus-visible:ring-error',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

interface InputProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {}

/**
 * Text input component following Engrate brand guidelines.
 * Features rounded corners, subtle background, and sunflower focus ring.
 *
 * @example
 * ```tsx
 * <Input placeholder="Enter your email" />
 * <Input variant="error" placeholder="Invalid input" />
 * ```
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, type = 'text', ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input, inputVariants }
export type { InputProps }
