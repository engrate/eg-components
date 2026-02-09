'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface PaginationDotsContextValue {
  value: number
  onValueChange?: (index: number) => void
  size: 'sm' | 'default' | 'lg'
}

const PaginationDotsContext =
  React.createContext<PaginationDotsContextValue | null>(null)

function usePaginationDotsContext() {
  const context = React.useContext(PaginationDotsContext)
  if (!context) {
    throw new Error(
      'PaginationDot must be used within a PaginationDots component'
    )
  }
  return context
}

// ---------------------------------------------------------------------------
// PaginationDots (container)
// ---------------------------------------------------------------------------

const paginationDotsVariants = cva(
  'inline-flex items-center justify-center font-sans',
  {
    variants: {
      size: {
        sm: 'gap-1.5',
        default: 'gap-2',
        lg: 'gap-2.5',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

interface PaginationDotsProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof paginationDotsVariants> {
  /** The index of the currently active dot (zero-based) */
  value: number
  /** Callback fired when a dot is clicked */
  onValueChange?: (index: number) => void
}

/**
 * A dot indicator for switching between content panels (e.g. carousels).
 * The active dot smoothly morphs into a wider pill shape.
 *
 * @example
 * ```tsx
 * <PaginationDots value={active} onValueChange={setActive}>
 *   <PaginationDot index={0} />
 *   <PaginationDot index={1} />
 *   <PaginationDot index={2} />
 * </PaginationDots>
 * ```
 */
const PaginationDots = React.forwardRef<HTMLDivElement, PaginationDotsProps>(
  (
    { className, value, onValueChange, size = 'default', children, ...props },
    ref
  ) => {
    return (
      <PaginationDotsContext.Provider
        value={{ value, onValueChange, size: size ?? 'default' }}
      >
        <div
          ref={ref}
          role="group"
          aria-label="Content navigation"
          className={cn(paginationDotsVariants({ size }), className)}
          {...props}
        >
          {children}
        </div>
      </PaginationDotsContext.Provider>
    )
  }
)
PaginationDots.displayName = 'PaginationDots'

// ---------------------------------------------------------------------------
// PaginationDot (individual dot)
// ---------------------------------------------------------------------------

const paginationDotVariants = cva(
  'focus-visible:ring-sunflower rounded-full transition-all duration-300 ease-out focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
  {
    variants: {
      size: {
        sm: 'h-1.5',
        default: 'h-2',
        lg: 'h-2.5',
      },
      active: {
        true: 'bg-sunflower',
        false: 'bg-border hover:bg-quaternary',
      },
    },
    compoundVariants: [
      // Inactive: square → circle
      { size: 'sm', active: false, class: 'w-1.5' },
      { size: 'default', active: false, class: 'w-2' },
      { size: 'lg', active: false, class: 'w-2.5' },
      // Active: wider pill
      { size: 'sm', active: true, class: 'w-4' },
      { size: 'default', active: true, class: 'w-6' },
      { size: 'lg', active: true, class: 'w-8' },
    ],
    defaultVariants: {
      size: 'default',
      active: false,
    },
  }
)

interface PaginationDotProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
> {
  /** Zero-based index of this dot */
  index: number
}

/**
 * An individual dot within a PaginationDots group.
 * Renders as a clickable button that morphs into a pill shape when active.
 */
const PaginationDot = React.forwardRef<HTMLButtonElement, PaginationDotProps>(
  ({ className, index, ...props }, ref) => {
    const { value, onValueChange, size } = usePaginationDotsContext()
    const isActive = index === value

    return (
      <button
        ref={ref}
        type="button"
        aria-label={`Go to slide ${index + 1}`}
        aria-current={isActive ? 'true' : undefined}
        onClick={() => onValueChange?.(index)}
        className={cn(
          paginationDotVariants({ size, active: isActive }),
          className
        )}
        {...props}
      />
    )
  }
)
PaginationDot.displayName = 'PaginationDot'

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  PaginationDots,
  PaginationDot,
  paginationDotsVariants,
  paginationDotVariants,
}
export type { PaginationDotsProps, PaginationDotProps }
