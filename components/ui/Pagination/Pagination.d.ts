import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const paginationVariants: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const paginationItemVariants: (props?: ({
    variant?: "default" | "active" | "ellipsis" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface PaginationProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof paginationVariants> {
    /** Current page number (1-indexed) */
    page: number;
    /** Total number of pages */
    totalPages: number;
    /** Callback when page changes */
    onPageChange?: (page: number) => void;
    /** Number of sibling pages to show on each side of current page */
    siblingCount?: number;
}
interface PaginationItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof paginationItemVariants> {
}
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
declare const Pagination: React.ForwardRefExoticComponent<PaginationProps & React.RefAttributes<HTMLElement>>;
declare const PaginationItem: React.ForwardRefExoticComponent<PaginationItemProps & React.RefAttributes<HTMLButtonElement>>;
export { Pagination, paginationVariants, paginationItemVariants, PaginationItem, };
export type { PaginationProps, PaginationItemProps };
