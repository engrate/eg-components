import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const paginationDotsVariants: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface PaginationDotsProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof paginationDotsVariants> {
    /** The index of the currently active dot (zero-based) */
    value: number;
    /** Callback fired when a dot is clicked */
    onValueChange?: (index: number) => void;
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
declare const PaginationDots: React.ForwardRefExoticComponent<PaginationDotsProps & React.RefAttributes<HTMLDivElement>>;
declare const paginationDotVariants: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
    active?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface PaginationDotProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
    /** Zero-based index of this dot */
    index: number;
}
/**
 * An individual dot within a PaginationDots group.
 * Renders as a clickable button that morphs into a pill shape when active.
 */
declare const PaginationDot: React.ForwardRefExoticComponent<PaginationDotProps & React.RefAttributes<HTMLButtonElement>>;
export { PaginationDots, PaginationDot, paginationDotsVariants, paginationDotVariants, };
export type { PaginationDotsProps, PaginationDotProps };
