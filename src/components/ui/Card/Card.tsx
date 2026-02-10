'use client'

import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const accentBase = [
  'relative',
  "before:content-['']",
  'before:absolute',
  'before:inset-y-0',
  'before:left-0',
  'before:w-[3px]',
  'before:z-20',
  'before:rounded-l',
  'before:bg-[linear-gradient(to_bottom,var(--card-accent-color)_0%,transparent_60%)]',
].join(' ')

const cardVariants = cva(
  'focus-visible:ring-sunflower rounded transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
  {
    variants: {
      variant: {
        default: '',
        elevated: 'shadow',
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
        sunflower: 'bg-sunflower',
        'sunflower-hover': 'bg-sunflower-hover',
        'lemon-meringue': 'bg-lemon-meringue',
        vanilla: 'bg-vanilla',
        eggshell: 'bg-eggshell',
        // Complementary colors
        'warm-purple': 'bg-warm-purple',
        'cool-purple': 'bg-cool-purple',
        'electric-blue': 'bg-electric-blue',
        'deep-blue': 'bg-deep-blue',
        // Semantic
        error: 'bg-error',
      },
      accent: {
        none: '',
        border: `${accentBase} [--card-accent-color:var(--color-border)]`,
        sunflower: `${accentBase} [--card-accent-color:var(--color-sunflower)]`,
        'warm-purple': `${accentBase} [--card-accent-color:var(--color-warm-purple)]`,
        'cool-purple': `${accentBase} [--card-accent-color:var(--color-cool-purple)]`,
        'electric-blue': `${accentBase} [--card-accent-color:var(--color-electric-blue)]`,
        'deep-blue': `${accentBase} [--card-accent-color:var(--color-deep-blue)]`,
        error: `${accentBase} [--card-accent-color:var(--color-error)]`,
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'default',
      bg: 'alt',
      accent: 'none',
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
  /** Left accent gradient stripe color */
  accent?: VariantProps<typeof cardVariants>['accent']
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
 * <Card accent="sunflower">Card with accent stripe</Card>
 * ```
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    { className, variant, padding, bg, accent, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'div'
    return (
      <Comp
        className={cn(
          cardVariants({ variant, padding, bg, accent, className })
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Card.displayName = 'Card'

export { Card, cardVariants, type CardProps }
