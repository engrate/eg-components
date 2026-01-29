import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const breadcrumbsVariants = cva('text-small flex items-center font-sans', {
  variants: {
    size: {
      sm: 'text-label gap-1.5',
      default: 'text-small gap-2',
      lg: 'text-body gap-2.5',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

const breadcrumbItemVariants = cva(
  'focus-visible:ring-sunflower inline-flex items-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
  {
    variants: {
      isCurrentPage: {
        true: 'text-primary cursor-default font-medium',
        false: 'text-secondary hover:text-primary',
      },
    },
    defaultVariants: {
      isCurrentPage: false,
    },
  }
)

interface BreadcrumbsProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof breadcrumbsVariants> {
  /** Custom separator between breadcrumb items */
  separator?: React.ReactNode
}

/**
 * Breadcrumbs navigation component following Engrate brand guidelines.
 * Provides a navigation trail showing the user's location within a hierarchy.
 *
 * @example
 * ```tsx
 * <Breadcrumbs>
 *   <BreadcrumbItem href="/">Home</BreadcrumbItem>
 *   <BreadcrumbItem href="/products">Products</BreadcrumbItem>
 *   <BreadcrumbItem isCurrentPage>Current Product</BreadcrumbItem>
 * </Breadcrumbs>
 * ```
 */
const Breadcrumbs = React.forwardRef<HTMLElement, BreadcrumbsProps>(
  (
    {
      className,
      size,
      separator = <BreadcrumbSeparator />,
      children,
      ...props
    },
    ref
  ) => {
    const items = React.Children.toArray(children).filter(React.isValidElement)

    return (
      <nav ref={ref} aria-label="Breadcrumb" {...props}>
        <ol className={cn(breadcrumbsVariants({ size, className }))}>
          {items.map((child, index) => (
            <li key={index} className="inline-flex items-center gap-2">
              {child}
              {index < items.length - 1 && separator}
            </li>
          ))}
        </ol>
      </nav>
    )
  }
)
Breadcrumbs.displayName = 'Breadcrumbs'

interface BreadcrumbItemProps
  extends
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof breadcrumbItemVariants> {
  /** Render as a child component (for use with Next.js Link, etc.) */
  asChild?: boolean
  /** Indicates this is the current page (should not be a link) */
  isCurrentPage?: boolean
}

/**
 * Individual breadcrumb item. Use href for links or isCurrentPage for the current location.
 */
const BreadcrumbItem = React.forwardRef<HTMLAnchorElement, BreadcrumbItemProps>(
  ({ className, asChild = false, isCurrentPage = false, ...props }, ref) => {
    if (isCurrentPage) {
      return (
        <span
          className={cn(
            breadcrumbItemVariants({ isCurrentPage: true, className })
          )}
          aria-current="page"
        >
          {props.children}
        </span>
      )
    }

    const Comp = asChild ? Slot : 'a'
    return (
      <Comp
        ref={ref}
        className={cn(
          breadcrumbItemVariants({ isCurrentPage: false, className })
        )}
        {...props}
      />
    )
  }
)
BreadcrumbItem.displayName = 'BreadcrumbItem'

interface BreadcrumbSeparatorProps extends React.HTMLAttributes<HTMLSpanElement> {}

/**
 * Separator between breadcrumb items. Defaults to a chevron icon.
 */
const BreadcrumbSeparator = React.forwardRef<
  HTMLSpanElement,
  BreadcrumbSeparatorProps
>(({ className, children, ...props }, ref) => (
  <span
    ref={ref}
    role="presentation"
    aria-hidden="true"
    className={cn('text-tertiary', className)}
    {...props}
  >
    {children ?? (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
      >
        <path
          d="M6 12L10 8L6 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )}
  </span>
))
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator'

export {
  Breadcrumbs,
  BreadcrumbItem,
  BreadcrumbSeparator,
  breadcrumbsVariants,
  breadcrumbItemVariants,
}
export type { BreadcrumbsProps, BreadcrumbItemProps, BreadcrumbSeparatorProps }
