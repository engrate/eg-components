import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const cardVariants = cva(
  'rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunflower focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border border-border',
        elevated: 'shadow-lg',
        ghost: '',
      },
      padding: {
        none: 'p-0',
        sm: 'p-4',
        default: 'p-6',
        lg: 'p-8',
      },
      bg: {
        // Default backgrounds
        card: 'bg-card',
        main: 'bg-main',
        alt: 'bg-alt',
        contrast: 'bg-contrast',
        transparent: 'bg-transparent',
        // Brand colors
        sunflower: 'border-none bg-sunflower',
        'sunflower-hover': 'border-none bg-sunflower-hover',
        'lemon-meringue': 'border-none bg-lemon-meringue',
        vanilla: 'border-none bg-vanilla',
        eggshell: 'border-none bg-eggshell',
        // Complementary colors
        'warm-purple': 'border-none bg-warm-purple',
        'cool-purple': 'border-none bg-cool-purple',
        'electric-blue': 'border-none bg-electric-blue',
        'deep-blue': 'border-none bg-deep-blue',
        // Semantic
        error: 'border-none bg-error',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'default',
      bg: 'card',
    },
  }
)

interface CardProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  /** Render as a child component */
  asChild?: boolean
  /** Background color from Engrate design tokens */
  bg?: VariantProps<typeof cardVariants>['bg']
}

/**
 * Card component for displaying content in a contained area.
 * Follows Engrate design system with support for variants, padding, and background colors.
 *
 * @example
 * ```tsx
 * <Card>
 *   <Heading>Title</Heading>
 *   <Text>Content goes here</Text>
 * </Card>
 * <Card variant="elevated" padding="lg">Elevated card</Card>
 * <Card bg="sunflower">Highlighted card</Card>
 * ```
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, bg, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div'
    return (
      <Comp
        className={cn(cardVariants({ variant, padding, bg, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Card.displayName = 'Card'

export { Card, cardVariants, type CardProps }
