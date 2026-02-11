'use client'

import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const textVariants = cva('font-sans', {
  variants: {
    variant: {
      lead: 'text-lead text-primary',
      'semi-lead': 'text-semi-lead text-secondary',
      'body-lg': 'text-body-lg text-secondary',
      body: 'text-body text-secondary',
      'body-sm': 'text-body-sm text-secondary',
      descriptive: 'text-descriptive text-secondary',
      label: 'text-label text-tertiary',
      'label-sm': 'text-label-sm text-tertiary',
    },
    weight: {
      regular: 'font-normal',
      medium: 'font-medium',
    },
  },
  defaultVariants: {
    variant: 'body',
    weight: 'regular',
  },
})

type TextElement = 'p' | 'span' | 'div' | 'label'

interface TextProps
  extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof textVariants> {
  /**
   * Render as a different element using Radix Slot
   */
  asChild?: boolean
  /**
   * Override the default HTML element
   * @default 'p'
   */
  as?: TextElement
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      className,
      variant = 'body',
      weight = 'regular',
      as = 'p',
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : as

    return (
      <Comp
        className={cn(textVariants({ variant, weight, className }))}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        {...props}
      />
    )
  }
)
Text.displayName = 'Text'

export { Text, textVariants }
export type { TextProps }
