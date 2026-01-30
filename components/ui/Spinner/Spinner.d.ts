import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const spinnerVariants: (props?: ({
    variant?: "default" | "muted" | "inverted" | null | undefined;
    size?: "default" | "sm" | "lg" | "xl" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof spinnerVariants> {
    /** Accessible label for screen readers */
    label?: string;
}
/**
 * Loading spinner component following Engrate brand guidelines.
 * Uses Sunflower yellow as the default color.
 *
 * @example
 * ```tsx
 * <Spinner />
 * <Spinner size="lg" variant="muted" />
 * <Spinner label="Loading data..." />
 * ```
 */
declare const Spinner: React.ForwardRefExoticComponent<SpinnerProps & React.RefAttributes<HTMLSpanElement>>;
export { Spinner, spinnerVariants };
export type { SpinnerProps };
