'use client'

import * as LabelPrimitive from '@radix-ui/react-label'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const labelVariants = cva(
  'text-tertiary font-sans font-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
  {
    variants: {
      size: {
        default: 'text-small',
        sm: 'text-label',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

interface LabelProps
  extends
    React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {}

/**
 * Form label component following Engrate brand guidelines.
 * Uses text-tertiary color and Work Sans font.
 *
 * @example
 * ```tsx
 * <Label htmlFor="email">Email address</Label>
 * <Label size="sm">Small label</Label>
 * ```
 */
const Label = React.forwardRef<
  React.ComponentRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, size, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants({ size }), className)}
    {...props}
  />
))
Label.displayName = 'Label'

export { Label, labelVariants }
export type { LabelProps }
