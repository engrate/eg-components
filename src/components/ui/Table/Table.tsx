'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { Text } from '@/components/ui/Text'
import { cn } from '@/lib/utils'

const tableVariants = cva(
  'text-body w-full caption-bottom border-collapse border-separate border-spacing-0 font-sans',
  {
    variants: {
      size: {
        default: '',
        compact: '',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

const tableHeaderVariants = cva(
  'border-primary border-b [&_tr:hover]:bg-transparent',
  {
    variants: {},
    defaultVariants: {},
  }
)

const tableBodyVariants = cva('', {
  variants: {},
  defaultVariants: {},
})

const tableRowVariants = cva(
  'border-border hover:bg-alt border-b transition-colors',
  {
    variants: {},
    defaultVariants: {},
  }
)

const tableHeadVariants = cva(
  'text-label text-tertiary text-left align-middle font-sans font-normal uppercase [&:has([role=checkbox])]:pr-0',
  {
    variants: {
      sortable: {
        true: 'focus-visible:ring-sunflower cursor-pointer select-none focus-visible:ring-1 focus-visible:outline-none',
        false: '',
      },
      size: {
        default: 'h-12 px-4',
        compact: 'h-8 px-2',
      },
    },
    defaultVariants: {
      sortable: false,
      size: 'default',
    },
  }
)

const tableCellVariants = cva(
  'text-secondary align-middle [&:has([role=checkbox])]:pr-0',
  {
    variants: {
      size: {
        default: 'p-4',
        compact: 'p-2',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

// Context for size and bordered props
const TableContext = React.createContext<{
  size: 'default' | 'compact'
  bordered: boolean
  rowHover: boolean
  padding: boolean
}>({
  size: 'default',
  bordered: false,
  rowHover: false,
  padding: true,
})

interface TableProps
  extends
    React.HTMLAttributes<HTMLTableElement>,
    VariantProps<typeof tableVariants> {
  /** Add visible horizontal borders between table rows */
  bordered?: boolean
  /** Toggle background color change on row hover */
  rowHover?: boolean
  /** Toggle left padding on header and body cells */
  padding?: boolean
}

/**
 * Table root component following Engrate brand guidelines.
 * Features light gray backgrounds and subtle borders.
 *
 * @example
 * ```tsx
 * <Table>
 *   <TableHeader>
 *     <TableRow>
 *       <TableHead>Name</TableHead>
 *     </TableRow>
 *   </TableHeader>
 *   <TableBody>
 *     <TableRow>
 *       <TableCell>John Doe</TableCell>
 *     </TableRow>
 *   </TableBody>
 * </Table>
 * ```
 */
const Table = React.forwardRef<HTMLTableElement, TableProps>(
  (
    {
      className,
      size = 'default',
      bordered = false,
      rowHover = false,
      padding = true,
      ...props
    },
    ref
  ) => (
    <TableContext.Provider
      value={{ size: size ?? 'default', bordered, rowHover, padding }}
    >
      <div className="relative w-full overflow-auto">
        <table
          ref={ref}
          className={cn(tableVariants({ size }), className)}
          {...props}
        />
      </div>
    </TableContext.Provider>
  )
)
Table.displayName = 'Table'

interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

const TableHeader = React.forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ className, ...props }, ref) => (
    <thead
      ref={ref}
      className={cn(tableHeaderVariants(), className)}
      {...props}
    />
  )
)
TableHeader.displayName = 'TableHeader'

interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className, ...props }, ref) => (
    <tbody
      ref={ref}
      className={cn(
        tableBodyVariants(),
        '[&>tr:last-child>td]:border-b-0',
        className
      )}
      {...props}
    />
  )
)
TableBody.displayName = 'TableBody'

interface TableFooterProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

const TableFooter = React.forwardRef<HTMLTableSectionElement, TableFooterProps>(
  ({ className, ...props }, ref) => (
    <tfoot
      ref={ref}
      className={cn('border-border border-t bg-transparent', className)}
      {...props}
    />
  )
)
TableFooter.displayName = 'TableFooter'

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {}

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, ...props }, ref) => {
    const { rowHover } = React.useContext(TableContext)

    return (
      <tr
        ref={ref}
        className={cn(
          tableRowVariants(),
          !rowHover && 'hover:bg-transparent',
          className
        )}
        {...props}
      />
    )
  }
)
TableRow.displayName = 'TableRow'

type SortDirection = 'asc' | 'desc' | null

// TableHead wraps its children in a flex container (to lay out the sort
// icon alongside the label), which means a `text-right`/`text-center`
// class on the `th` has no effect on the content's position, since
// `text-align` doesn't apply to flex children. Mirror the alignment as a
// `justify-*` class on the inner wrapper instead.
function getHeadJustifyClass(className?: string) {
  const classes = className?.split(/\s+/) ?? []
  if (classes.includes('text-right')) return 'justify-end'
  if (classes.includes('text-center')) return 'justify-center'
  return undefined
}

interface TableHeadProps
  extends
    React.ThHTMLAttributes<HTMLTableCellElement>,
    Omit<VariantProps<typeof tableHeadVariants>, 'size'> {
  /** Enable sorting for this column */
  sortable?: boolean
  /** Current sort direction */
  sortDirection?: SortDirection
  /** Callback when sort is triggered */
  onSort?: () => void
}

const TableHead = React.forwardRef<HTMLTableCellElement, TableHeadProps>(
  (
    {
      className,
      children,
      sortable = false,
      sortDirection = null,
      onSort,
      ...props
    },
    ref
  ) => {
    const { size, bordered, padding } = React.useContext(TableContext)

    const handleClick = () => {
      if (sortable && onSort) {
        onSort()
      }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (sortable && onSort && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault()
        onSort()
      }
    }

    return (
      <th
        ref={ref}
        className={cn(
          tableHeadVariants({ sortable, size }),
          !padding && 'pl-0',
          bordered && 'border-border border-b',
          className
        )}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={sortable ? 0 : undefined}
        role={sortable ? 'button' : undefined}
        aria-sort={
          sortDirection === 'asc'
            ? 'ascending'
            : sortDirection === 'desc'
              ? 'descending'
              : undefined
        }
        {...props}
      >
        <div
          className={cn(
            'flex items-center gap-2',
            getHeadJustifyClass(className)
          )}
        >
          {children}
          {sortable && (
            <span className="inline-flex flex-col" aria-hidden="true">
              <svg
                className={cn(
                  'h-3 w-3 transition-opacity',
                  sortDirection === 'asc' ? 'text-sunflower' : 'text-tertiary'
                )}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M7 15l5-5 5 5" />
              </svg>
              <svg
                className={cn(
                  '-mt-1 h-3 w-3 transition-opacity',
                  sortDirection === 'desc' ? 'text-sunflower' : 'text-tertiary'
                )}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M7 9l5 5 5-5" />
              </svg>
            </span>
          )}
        </div>
      </th>
    )
  }
)
TableHead.displayName = 'TableHead'

interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {}

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, children, ...props }, ref) => {
    const { size, bordered, padding } = React.useContext(TableContext)
    return (
      <td
        ref={ref}
        className={cn(
          tableCellVariants({ size }),
          !padding && 'pl-0',
          bordered && 'border-border border-b',
          className
        )}
        {...props}
      >
        <Text variant="body-sm" as="span">
          {children}
        </Text>
      </td>
    )
  }
)
TableCell.displayName = 'TableCell'

interface TableCaptionProps extends React.HTMLAttributes<HTMLTableCaptionElement> {}

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  TableCaptionProps
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn('text-small text-tertiary mt-4 text-left', className)}
    {...props}
  />
))
TableCaption.displayName = 'TableCaption'

// Hook for sorting functionality
interface UseSortableTableOptions<T> {
  data: T[]
  initialSortKey?: keyof T | null
  initialSortDirection?: 'asc' | 'desc'
}

interface UseSortableTableReturn<T> {
  sortedData: T[]
  sortKey: keyof T | null
  sortDirection: SortDirection
  handleSort: (key: keyof T) => void
}

function useSortableTable<T>({
  data,
  initialSortKey = null,
  initialSortDirection = 'asc',
}: UseSortableTableOptions<T>): UseSortableTableReturn<T> {
  const [sortState, setSortState] = React.useState<{
    key: keyof T | null
    direction: SortDirection
  }>({
    key: initialSortKey ?? null,
    direction: initialSortKey ? (initialSortDirection ?? 'asc') : null,
  })

  const handleSort = React.useCallback((key: keyof T) => {
    setSortState((prev) => {
      if (prev.key !== key) {
        return { key, direction: 'asc' }
      }
      if (prev.direction === 'asc') {
        return { key, direction: 'desc' }
      }
      if (prev.direction === 'desc') {
        return { key: null, direction: null }
      }
      return { key, direction: 'asc' }
    })
  }, [])

  const { key: sortKey, direction: sortDirection } = sortState

  const sortedData = React.useMemo(() => {
    if (!sortKey || !sortDirection) return data

    return [...data].sort((a, b) => {
      const aVal = a[sortKey]
      const bVal = b[sortKey]

      if (aVal === bVal) return 0

      let comparison = 0
      if (typeof aVal === 'string' && typeof bVal === 'string') {
        comparison = aVal.localeCompare(bVal)
      } else if (typeof aVal === 'number' && typeof bVal === 'number') {
        comparison = aVal - bVal
      } else {
        comparison = String(aVal).localeCompare(String(bVal))
      }

      return sortDirection === 'asc' ? comparison : -comparison
    })
  }, [data, sortKey, sortDirection])

  return { sortedData, sortKey, sortDirection, handleSort }
}

// Hook for filtering functionality
interface UseFilterableTableOptions<T> {
  data: T[]
  filterKeys?: (keyof T)[]
}

interface UseFilterableTableReturn<T> {
  filteredData: T[]
  filterValue: string
  setFilterValue: (value: string) => void
}

function useFilterableTable<T>({
  data,
  filterKeys,
}: UseFilterableTableOptions<T>): UseFilterableTableReturn<T> {
  const [filterValue, setFilterValue] = React.useState('')

  const filteredData = React.useMemo(() => {
    if (!filterValue.trim()) return data

    const searchTerm = filterValue.toLowerCase()

    return data.filter((item) => {
      if (filterKeys && filterKeys.length > 0) {
        return filterKeys.some((key) =>
          String(item[key]).toLowerCase().includes(searchTerm)
        )
      }

      return Object.values(item as Record<string, unknown>).some((value) =>
        String(value).toLowerCase().includes(searchTerm)
      )
    })
  }, [data, filterValue, filterKeys])

  return { filteredData, filterValue, setFilterValue }
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  tableVariants,
  useSortableTable,
  useFilterableTable,
}

export type { TableProps, TableHeadProps, SortDirection }
