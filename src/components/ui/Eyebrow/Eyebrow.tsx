'use client'

import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const eyebrowVariants = cva(
  'font-mono text-xs leading-5 font-normal tracking-[1.2px] uppercase',
  {
    variants: {
      variant: {
        default: 'text-primary',
        primary: 'text-primary',
        secondary: 'text-secondary',
      },
      size: {
        default: 'text-xs',
        sm: 'text-[10px]',
        lg: 'text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface EyebrowProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof eyebrowVariants> {
  asChild?: boolean
}

const Eyebrow = React.forwardRef<HTMLSpanElement, EyebrowProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'span'
    return (
      <Comp
        className={cn(eyebrowVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Eyebrow.displayName = 'Eyebrow'

export { Eyebrow, eyebrowVariants }
