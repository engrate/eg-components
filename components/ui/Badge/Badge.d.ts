import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const badgeVariants: (props?: ({
    variant?: "secondary" | "sunflower" | "lemon-meringue" | "vanilla" | "eggshell" | "warm-purple" | "cool-purple" | "electric-blue" | "deep-blue" | "error" | null | undefined;
    size?: "sm" | "lg" | "md" | "xl" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface BadgeProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'>, VariantProps<typeof badgeVariants> {
    /** Render as a child component (for use with links, etc.) */
    asChild?: boolean;
}
/**
 * Badge component for displaying status, labels, or counts.
 * Features pill-shaped design with various Engrate brand colors.
 *
 * @example
 * ```tsx
 * <Badge variant="sunflower">New</Badge>
 * <Badge variant="error" size="sm">Alert</Badge>
 * <Badge variant="deep-blue" size="lg">Premium</Badge>
 * ```
 */
declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLSpanElement>>;
export { Badge, badgeVariants };
export type { BadgeProps };
