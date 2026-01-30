'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const textareaVariants = cva(
  'bg-card text-body text-primary placeholder:text-tertiary flex min-h-[80px] w-full rounded-md border px-3 py-2 font-sans transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-border focus-visible:ring-sunflower',
        error: 'border-error focus-visible:ring-error',
      },
      resize: {
        none: 'resize-none',
        vertical: 'resize-y',
        horizontal: 'resize-x',
        both: 'resize',
      },
    },
    defaultVariants: {
      variant: 'default',
      resize: 'vertical',
    },
  }
)

interface TextareaProps
  extends
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

/**
 * Textarea component following Engrate brand guidelines.
 * Features rounded corners, subtle background, and sunflower focus ring.
 *
 * @example
 * ```tsx
 * <Textarea placeholder="Enter your message" />
 * <Textarea variant="error" placeholder="Invalid input" />
 * <Textarea resize="none" placeholder="Fixed size" />
 * ```
 */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, resize, ...props }, ref) => {
    return (
      <textarea
        className={cn(textareaVariants({ variant, resize }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea, textareaVariants }
export type { TextareaProps }
