import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const stackVariants: (props?: ({
    direction?: "horizontal" | "vertical" | null | undefined;
    gap?: "sm" | "lg" | "none" | "md" | "xl" | "xs" | "2xl" | null | undefined;
    align?: "end" | "start" | "center" | "stretch" | "baseline" | null | undefined;
    justify?: "end" | "start" | "center" | "between" | "around" | "evenly" | null | undefined;
    wrap?: "wrap" | "nowrap" | "wrap-reverse" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface StackProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof stackVariants> {
    /** Render as a child component using Slot */
    asChild?: boolean;
}
/**
 * Stack component for arranging elements in a vertical or horizontal stack.
 * Provides a flexible layout system with configurable direction, gaps, and alignment.
 *
 * @example
 * ```tsx
 * // Vertical stack (default)
 * <Stack gap="lg">
 *   <Card>Item 1</Card>
 *   <Card>Item 2</Card>
 *   <Card>Item 3</Card>
 * </Stack>
 *
 * // Horizontal stack
 * <Stack direction="horizontal" gap="md" align="center">
 *   <Button>Action 1</Button>
 *   <Button>Action 2</Button>
 * </Stack>
 * ```
 */
declare const Stack: React.ForwardRefExoticComponent<StackProps & React.RefAttributes<HTMLDivElement>>;
export { Stack, stackVariants };
export type { StackProps };
