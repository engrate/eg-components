import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const dividerVariants: (props?: ({
    orientation?: "horizontal" | "vertical" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface DividerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof dividerVariants> {
    /**
     * Whether the divider is decorative only.
     * When true, the divider will be hidden from screen readers.
     * @default true
     */
    decorative?: boolean;
}
/**
 * Divider component for visually separating content.
 * Supports both horizontal and vertical orientations.
 *
 * @example
 * ```tsx
 * // Horizontal divider (default)
 * <Divider />
 *
 * // Vertical divider
 * <Divider orientation="vertical" />
 *
 * // With custom styling
 * <Divider className="my-4" />
 * ```
 */
declare const Divider: React.ForwardRefExoticComponent<DividerProps & React.RefAttributes<HTMLDivElement>>;
export { Divider, dividerVariants };
export type { DividerProps };
