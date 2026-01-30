import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const breadcrumbsVariants: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const breadcrumbItemVariants: (props?: ({
    isCurrentPage?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof breadcrumbsVariants> {
    /** Custom separator between breadcrumb items */
    separator?: React.ReactNode;
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
declare const Breadcrumbs: React.ForwardRefExoticComponent<BreadcrumbsProps & React.RefAttributes<HTMLElement>>;
interface BreadcrumbItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof breadcrumbItemVariants> {
    /** Render as a child component (for use with Next.js Link, etc.) */
    asChild?: boolean;
    /** Indicates this is the current page (should not be a link) */
    isCurrentPage?: boolean;
}
/**
 * Individual breadcrumb item. Use href for links or isCurrentPage for the current location.
 */
declare const BreadcrumbItem: React.ForwardRefExoticComponent<BreadcrumbItemProps & React.RefAttributes<HTMLAnchorElement>>;
interface BreadcrumbSeparatorProps extends React.HTMLAttributes<HTMLSpanElement> {
}
/**
 * Separator between breadcrumb items. Defaults to a chevron icon.
 */
declare const BreadcrumbSeparator: React.ForwardRefExoticComponent<BreadcrumbSeparatorProps & React.RefAttributes<HTMLSpanElement>>;
export { Breadcrumbs, BreadcrumbItem, BreadcrumbSeparator, breadcrumbsVariants, breadcrumbItemVariants, };
export type { BreadcrumbsProps, BreadcrumbItemProps, BreadcrumbSeparatorProps };
