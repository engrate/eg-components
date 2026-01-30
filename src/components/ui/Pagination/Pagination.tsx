'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'

const paginationVariants = cva(
  'flex items-center justify-center gap-1 font-sans',
  {
    variants: {
      size: {
        sm: 'text-small',
        default: 'text-body',
        lg: 'text-lead',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

const paginationItemVariants = cva(
  'focus-visible:ring-sunflower inline-flex items-center justify-center font-sans font-normal transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'text-primary hover:bg-alt active:bg-contrast rounded-full',
        active:
          'bg-sunflower text-primary hover:bg-sunflower-hover rounded-full',
        ellipsis: 'text-tertiary cursor-default',
      },
      size: {
        sm: 'text-small h-7 w-7',
        default: 'text-small h-9 w-9',
        lg: 'text-body h-11 w-11',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

interface PaginationProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof paginationVariants> {
  /** Current page number (1-indexed) */
  page: number
  /** Total number of pages */
  totalPages: number
  /** Callback when page changes */
  onPageChange?: (page: number) => void
  /** Number of sibling pages to show on each side of current page */
  siblingCount?: number
}

interface PaginationItemProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof paginationItemVariants> {}

/**
 * Navigation component for paginated content.
 * Features numbered page buttons with ellipsis for large page counts.
 *
 * @example
 * ```tsx
 * <Pagination
 *   page={currentPage}
 *   totalPages={10}
 *   onPageChange={setCurrentPage}
 * />
 * ```
 */
const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  (
    {
      className,
      size,
      page,
      totalPages,
      onPageChange,
      siblingCount = 1,
      ...props
    },
    ref
  ) => {
    const range = React.useMemo(() => {
      const totalPageNumbers = siblingCount * 2 + 3 // siblings + current + first + last
      const totalBlocks = totalPageNumbers + 2 // + 2 for ellipsis

      if (totalPages <= totalBlocks) {
        return Array.from({ length: totalPages }, (_, i) => i + 1)
      }

      const leftSiblingIndex = Math.max(page - siblingCount, 1)
      const rightSiblingIndex = Math.min(page + siblingCount, totalPages)

      const shouldShowLeftEllipsis = leftSiblingIndex > 2
      const shouldShowRightEllipsis = rightSiblingIndex < totalPages - 1

      if (!shouldShowLeftEllipsis && shouldShowRightEllipsis) {
        const leftItemCount = 3 + 2 * siblingCount
        const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1)
        return [...leftRange, 'ellipsis-right', totalPages]
      }

      if (shouldShowLeftEllipsis && !shouldShowRightEllipsis) {
        const rightItemCount = 3 + 2 * siblingCount
        const rightRange = Array.from(
          { length: rightItemCount },
          (_, i) => totalPages - rightItemCount + i + 1
        )
        return [1, 'ellipsis-left', ...rightRange]
      }

      if (shouldShowLeftEllipsis && shouldShowRightEllipsis) {
        const middleRange = Array.from(
          { length: siblingCount * 2 + 1 },
          (_, i) => leftSiblingIndex + i
        )
        return [
          1,
          'ellipsis-left',
          ...middleRange,
          'ellipsis-right',
          totalPages,
        ]
      }

      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }, [page, totalPages, siblingCount])

    const handlePageChange = (newPage: number) => {
      if (newPage >= 1 && newPage <= totalPages && newPage !== page) {
        onPageChange?.(newPage)
      }
    }

    return (
      <nav
        ref={ref}
        role="navigation"
        aria-label="Pagination"
        className={cn(paginationVariants({ size, className }))}
        {...props}
      >
        <PaginationItem
          size={size}
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          aria-label="Go to previous page"
        >
          <ChevronLeft className="h-4 w-4" />
        </PaginationItem>

        {range.map((pageNumber) => {
          if (typeof pageNumber === 'string') {
            return (
              <PaginationItem
                key={pageNumber}
                size={size}
                variant="ellipsis"
                disabled
                aria-hidden
              >
                <MoreHorizontal className="h-4 w-4" />
              </PaginationItem>
            )
          }

          return (
            <PaginationItem
              key={pageNumber}
              size={size}
              variant={pageNumber === page ? 'active' : 'default'}
              onClick={() => handlePageChange(pageNumber)}
              aria-label={`Go to page ${pageNumber}`}
              aria-current={pageNumber === page ? 'page' : undefined}
            >
              {pageNumber}
            </PaginationItem>
          )
        })}

        <PaginationItem
          size={size}
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
          aria-label="Go to next page"
        >
          <ChevronRight className="h-4 w-4" />
        </PaginationItem>
      </nav>
    )
  }
)
Pagination.displayName = 'Pagination'

const PaginationItem = React.forwardRef<HTMLButtonElement, PaginationItemProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn(paginationItemVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)
PaginationItem.displayName = 'PaginationItem'

export {
  Pagination,
  paginationVariants,
  paginationItemVariants,
  PaginationItem,
}
export type { PaginationProps, PaginationItemProps }
