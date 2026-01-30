import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const linkVariants: (props?: ({
    variant?: "default" | "nav" | "muted" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof linkVariants> {
    /** Render as a child component (for use with Next.js Link, etc.) */
    asChild?: boolean;
}
/**
 * Link component for navigation following Engrate brand guidelines.
 * Supports multiple variants for different use cases.
 *
 * @example
 * ```tsx
 * <Link href="/about">About us</Link>
 * <Link href="/docs" variant="nav">Documentation</Link>
 * <Link asChild><NextLink href="/page">Next.js Link</NextLink></Link>
 * ```
 */
declare const Link: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>;
export { Link, linkVariants };
export type { LinkProps };
