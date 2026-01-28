import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const linkVariants = cva(
  'inline-flex items-center font-sans transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunflower focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'text-primary underline underline-offset-4 hover:text-secondary',
        muted: 'text-secondary underline underline-offset-4 hover:text-primary',
        nav: 'text-primary no-underline hover:text-secondary hover:underline hover:underline-offset-4',
      },
      size: {
        sm: 'text-small',
        default: 'text-body',
        lg: 'text-body font-medium',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

interface LinkProps
  extends
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  /** Render as a child component (for use with Next.js Link, etc.) */
  asChild?: boolean
}

/**
 * Link component for navigation following Engrate brand guidelines.
 * Supports multiple variants for different use cases.
 *
 * @example
 * ```tsx
 * <Link href="/about">About us</Link>
 * <Link href="/docs" variant="nav">Documentation</Link>
 * <Link asChild><NextLink href="/page">Next.js Link</NextLink></Link>
 * ```
 */
const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'a'
    return (
      <Comp
        className={cn(linkVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Link.displayName = 'Link'

export { Link, linkVariants }
export type { LinkProps }
