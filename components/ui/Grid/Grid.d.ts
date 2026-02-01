import * as React from 'react';
declare const gridVariants: (props?: ({
    cols?: 1 | 2 | 3 | 4 | 5 | 12 | 6 | null | undefined;
    gap?: "none" | "sm" | "lg" | "md" | "xl" | "xs" | "2xl" | null | undefined;
    align?: "end" | "start" | "center" | "stretch" | "baseline" | null | undefined;
    justify?: "end" | "start" | "center" | "stretch" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type ColsValue = 1 | 2 | 3 | 4 | 5 | 6 | 12;
type GapValue = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type AlignValue = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
type JustifyValue = 'start' | 'center' | 'end' | 'stretch';
type ResponsiveValue<T> = T | {
    base?: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
    '2xl'?: T;
};
interface GridProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'cols'> {
    /** Number of columns in the grid. Supports responsive values. */
    cols?: ResponsiveValue<ColsValue>;
    /** Gap between grid items. Supports responsive values. */
    gap?: ResponsiveValue<GapValue>;
    /** Vertical alignment of items. Supports responsive values. */
    align?: ResponsiveValue<AlignValue>;
    /** Horizontal alignment of items. Supports responsive values. */
    justify?: ResponsiveValue<JustifyValue>;
    /** The HTML element to render as (e.g., 'section', 'main', 'nav') */
    as?: React.ElementType;
    /** Render as a child component using Slot */
    asChild?: boolean;
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
declare const Grid: React.ForwardRefExoticComponent<GridProps & React.RefAttributes<HTMLDivElement>>;
declare const gridItemVariants: (props?: ({
    colSpan?: 1 | 2 | 3 | 4 | 5 | 12 | 10 | 6 | 11 | "full" | 7 | 8 | 9 | null | undefined;
    rowSpan?: 1 | 2 | 3 | 4 | 5 | 6 | "full" | null | undefined;
    colStart?: 1 | "auto" | 2 | 3 | 4 | 5 | 12 | 10 | 6 | 11 | 7 | 8 | 9 | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type ColSpanValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'full';
type RowSpanValue = 1 | 2 | 3 | 4 | 5 | 6 | 'full';
type ColStartValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto';
interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Column span for the item. Supports responsive values. */
    colSpan?: ResponsiveValue<ColSpanValue>;
    /** Row span for the item. Supports responsive values. */
    rowSpan?: ResponsiveValue<RowSpanValue>;
    /** Column start position for the item. Supports responsive values. */
    colStart?: ResponsiveValue<ColStartValue>;
    /** The HTML element to render as (e.g., 'section', 'article', 'aside') */
    as?: React.ElementType;
    /** Render as a child component using Slot */
    asChild?: boolean;
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
declare const GridItem: React.ForwardRefExoticComponent<GridItemProps & React.RefAttributes<HTMLDivElement>>;
export { Grid, gridVariants, GridItem, gridItemVariants };
export type { GridProps, GridItemProps, ResponsiveValue };
