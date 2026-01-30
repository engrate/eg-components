import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
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

type ColsValue = 1 | 2 | 3 | 4 | 5 | 6 | 12
type GapValue = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
type AlignValue = 'start' | 'center' | 'end' | 'stretch' | 'baseline'
type JustifyValue = 'start' | 'center' | 'end' | 'stretch'

type ResponsiveValue<T> =
  | T
  | {
      base?: T
      sm?: T
      md?: T
      lg?: T
      xl?: T
      '2xl'?: T
    }

const colsClassMap: Record<ColsValue, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  12: 'grid-cols-12',
}

const gapClassMap: Record<GapValue, string> = {
  none: 'gap-0',
  xs: 'gap-1',
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8',
  '2xl': 'gap-12',
}

const alignClassMap: Record<AlignValue, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
  baseline: 'items-baseline',
}

const justifyClassMap: Record<JustifyValue, string> = {
  start: 'justify-items-start',
  center: 'justify-items-center',
  end: 'justify-items-end',
  stretch: 'justify-items-stretch',
}

function getResponsiveClasses<T extends string | number>(
  value: ResponsiveValue<T> | undefined,
  classMap: Record<T, string>,
  defaultValue?: T
): string {
  if (!value) {
    return defaultValue ? classMap[defaultValue] : ''
  }

  if (typeof value === 'object') {
    const classes: string[] = []

    if (value.base !== undefined) {
      classes.push(classMap[value.base])
    } else if (defaultValue) {
      classes.push(classMap[defaultValue])
    }

    if (value.sm !== undefined) {
      classes.push(`sm:${classMap[value.sm].split(':').pop()}`)
    }
    if (value.md !== undefined) {
      classes.push(`md:${classMap[value.md].split(':').pop()}`)
    }
    if (value.lg !== undefined) {
      classes.push(`lg:${classMap[value.lg].split(':').pop()}`)
    }
    if (value.xl !== undefined) {
      classes.push(`xl:${classMap[value.xl].split(':').pop()}`)
    }
    if (value['2xl'] !== undefined) {
      classes.push(`2xl:${classMap[value['2xl']].split(':').pop()}`)
    }

    return classes.join(' ')
  }

  return classMap[value]
}

interface GridProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'cols'> {
  /** Number of columns in the grid. Supports responsive values. */
  cols?: ResponsiveValue<ColsValue>
  /** Gap between grid items. Supports responsive values. */
  gap?: ResponsiveValue<GapValue>
  /** Vertical alignment of items. Supports responsive values. */
  align?: ResponsiveValue<AlignValue>
  /** Horizontal alignment of items. Supports responsive values. */
  justify?: ResponsiveValue<JustifyValue>
  /** Render as a child component using Slot */
  asChild?: boolean
}

/**
 * Grid component for consistent layout structures.
 * Provides a flexible grid system with configurable columns, gaps, and alignment.
 * Supports responsive values for mobile-first responsive layouts.
 *
 * @example
 * ```tsx
 * // Simple usage
 * <Grid cols={3} gap="lg">
 *   <Card>Item 1</Card>
 *   <Card>Item 2</Card>
 *   <Card>Item 3</Card>
 * </Grid>
 *
 * // Responsive usage
 * <Grid cols={{ base: 1, md: 2, lg: 3 }} gap={{ base: 'md', lg: 'xl' }}>
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

    const colsClasses = getResponsiveClasses(cols, colsClassMap, 1)
    const gapClasses = getResponsiveClasses(gap, gapClassMap, 'md')
    const alignClasses = getResponsiveClasses(align, alignClassMap, 'stretch')
    const justifyClasses = getResponsiveClasses(
      justify,
      justifyClassMap,
      'stretch'
    )

    return (
      <Comp
        className={cn(
          'grid',
          colsClasses,
          gapClasses,
          alignClasses,
          justifyClasses,
          className
        )}
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

type ColSpanValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'full'
type RowSpanValue = 1 | 2 | 3 | 4 | 5 | 6 | 'full'
type ColStartValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto'

const colSpanClassMap: Record<ColSpanValue, string> = {
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
}

const rowSpanClassMap: Record<RowSpanValue, string> = {
  1: 'row-span-1',
  2: 'row-span-2',
  3: 'row-span-3',
  4: 'row-span-4',
  5: 'row-span-5',
  6: 'row-span-6',
  full: 'row-span-full',
}

const colStartClassMap: Record<ColStartValue, string> = {
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
}

interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Column span for the item. Supports responsive values. */
  colSpan?: ResponsiveValue<ColSpanValue>
  /** Row span for the item. Supports responsive values. */
  rowSpan?: ResponsiveValue<RowSpanValue>
  /** Column start position for the item. Supports responsive values. */
  colStart?: ResponsiveValue<ColStartValue>
  /** Render as a child component using Slot */
  asChild?: boolean
}

/**
 * GridItem component for controlling individual item placement within a Grid.
 * Supports responsive values for mobile-first responsive layouts.
 *
 * @example
 * ```tsx
 * // Simple usage
 * <Grid cols={12}>
 *   <GridItem colSpan={8}>Main content</GridItem>
 *   <GridItem colSpan={4}>Sidebar</GridItem>
 * </Grid>
 *
 * // Responsive usage
 * <Grid cols={{ base: 1, lg: 12 }}>
 *   <GridItem colSpan={{ base: 'full', lg: 8 }}>Main content</GridItem>
 *   <GridItem colSpan={{ base: 'full', lg: 4 }}>Sidebar</GridItem>
 * </Grid>
 * ```
 */
const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(
  (
    { className, colSpan, rowSpan, colStart, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'div'

    const colSpanClasses = getResponsiveClasses(colSpan, colSpanClassMap)
    const rowSpanClasses = getResponsiveClasses(rowSpan, rowSpanClassMap)
    const colStartClasses = getResponsiveClasses(colStart, colStartClassMap)

    return (
      <Comp
        className={cn(
          colSpanClasses,
          rowSpanClasses,
          colStartClasses,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
GridItem.displayName = 'GridItem'

export { Grid, gridVariants, GridItem, gridItemVariants }
export type { GridProps, GridItemProps, ResponsiveValue }
