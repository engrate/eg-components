'use client'

import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const headingVariants = cva('text-primary font-normal', {
  variants: {
    level: {
      hero: 'font-display text-hero',
      h1: 'text-h1 font-sans font-normal',
      h2: 'text-h2 font-sans font-normal',
      h3: 'text-h3 font-sans font-normal',
      h4: 'text-h4 font-sans font-normal',
    },
  },
  defaultVariants: {
    level: 'h1',
  },
})

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface HeadingProps
  extends
    React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  /**
   * Render as a different element using Radix Slot
   */
  asChild?: boolean
  /**
   * Override the default HTML element for semantic flexibility
   * @default Matches the level prop (hero renders as h1)
   */
  as?: HeadingElement
}

const levelToElement: Record<
  NonNullable<HeadingProps['level']>,
  HeadingElement
> = {
  hero: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = 'h1', as, asChild = false, ...props }, ref) => {
    const Element = as ?? levelToElement[level ?? 'h1']
    const Comp = asChild ? Slot : Element

    return (
      <Comp
        className={cn(headingVariants({ level, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Heading.displayName = 'Heading'

export { Heading, headingVariants }
export type { HeadingProps }
