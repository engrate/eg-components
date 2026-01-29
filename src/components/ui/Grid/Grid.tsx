import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const gridVariants = cva('grid', {
  variants: {
    cols: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
      12: 'grid-cols-12',
    },
    gap: {
      none: 'gap-0',
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
      '2xl': 'gap-12',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
      baseline: 'items-baseline',
    },
    justify: {
      start: 'justify-items-start',
      center: 'justify-items-center',
      end: 'justify-items-end',
      stretch: 'justify-items-stretch',
    },
  },
  defaultVariants: {
    cols: 1,
    gap: 'md',
    align: 'stretch',
    justify: 'stretch',
  },
})

interface GridProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariants> {
  /** Render as a child component using Slot */
  asChild?: boolean
}

/**
 * Grid component for consistent layout structures.
 * Provides a flexible grid system with configurable columns, gaps, and alignment.
 *
 * @example
 * ```tsx
 * <Grid cols={3} gap="lg">
 *   <Card>Item 1</Card>
 *   <Card>Item 2</Card>
 *   <Card>Item 3</Card>
 * </Grid>
 * ```
 */
const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (
    { className, cols, gap, align, justify, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'div'
    return (
      <Comp
        className={cn(gridVariants({ cols, gap, align, justify, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Grid.displayName = 'Grid'

/* ---------------------------------- */
/* GridItem                           */
/* ---------------------------------- */

const gridItemVariants = cva('', {
  variants: {
    colSpan: {
      1: 'col-span-1',
      2: 'col-span-2',
      3: 'col-span-3',
      4: 'col-span-4',
      5: 'col-span-5',
      6: 'col-span-6',
      7: 'col-span-7',
      8: 'col-span-8',
      9: 'col-span-9',
      10: 'col-span-10',
      11: 'col-span-11',
      12: 'col-span-12',
      full: 'col-span-full',
    },
    rowSpan: {
      1: 'row-span-1',
      2: 'row-span-2',
      3: 'row-span-3',
      4: 'row-span-4',
      5: 'row-span-5',
      6: 'row-span-6',
      full: 'row-span-full',
    },
    colStart: {
      1: 'col-start-1',
      2: 'col-start-2',
      3: 'col-start-3',
      4: 'col-start-4',
      5: 'col-start-5',
      6: 'col-start-6',
      7: 'col-start-7',
      8: 'col-start-8',
      9: 'col-start-9',
      10: 'col-start-10',
      11: 'col-start-11',
      12: 'col-start-12',
      auto: 'col-start-auto',
    },
  },
  defaultVariants: {},
})

interface GridItemProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridItemVariants> {
  /** Render as a child component using Slot */
  asChild?: boolean
}

/**
 * GridItem component for controlling individual item placement within a Grid.
 *
 * @example
 * ```tsx
 * <Grid cols={12}>
 *   <GridItem colSpan={8}>Main content</GridItem>
 *   <GridItem colSpan={4}>Sidebar</GridItem>
 * </Grid>
 * ```
 */
const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(
  (
    { className, colSpan, rowSpan, colStart, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'div'
    return (
      <Comp
        className={cn(
          gridItemVariants({ colSpan, rowSpan, colStart, className })
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
GridItem.displayName = 'GridItem'

export { Grid, gridVariants, GridItem, gridItemVariants }
export type { GridProps, GridItemProps }
