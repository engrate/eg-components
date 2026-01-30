'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const skeletonVariants = cva('bg-contrast animate-pulse', {
  variants: {
    variant: {
      default: 'rounded-md',
      circular: 'rounded-full',
      text: 'rounded',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

interface SkeletonProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {
  /** Width of the skeleton (CSS value or Tailwind class) */
  width?: string | number
  /** Height of the skeleton (CSS value or Tailwind class) */
  height?: string | number
}

/**
 * Skeleton component for indicating loading states.
 * Displays a pulsing placeholder while content is loading.
 *
 * @example
 * ```tsx
 * <Skeleton width={200} height={20} />
 * <Skeleton variant="circular" width={40} height={40} />
 * <Skeleton variant="text" className="w-full h-4" />
 * ```
 */
const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant, width, height, style, ...props }, ref) => {
    const computedStyle: React.CSSProperties = {
      ...style,
      ...(width !== undefined && {
        width: typeof width === 'number' ? `${width}px` : width,
      }),
      ...(height !== undefined && {
        height: typeof height === 'number' ? `${height}px` : height,
      }),
    }

    return (
      <div
        ref={ref}
        aria-hidden="true"
        className={cn(skeletonVariants({ variant, className }))}
        style={computedStyle}
        {...props}
      />
    )
  }
)
Skeleton.displayName = 'Skeleton'

export { Skeleton, skeletonVariants }
export type { SkeletonProps }
