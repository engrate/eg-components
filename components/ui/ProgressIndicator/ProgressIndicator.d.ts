import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const progressIndicatorVariants: (props?: ({
    size?: "sm" | "default" | "lg" | "xl" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const progressBarVariants: (props?: ({
    variant?: "default" | "muted" | "success" | null | undefined;
    animated?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface ProgressIndicatorProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof progressIndicatorVariants>, VariantProps<typeof progressBarVariants> {
    /** Current progress value (0-100) */
    value?: number;
    /** Maximum progress value */
    max?: number;
    /** Accessible label for screen readers */
    label?: string;
    /** Whether to show indeterminate loading state */
    indeterminate?: boolean;
}
/**
 * Progress indicator component following Engrate brand guidelines.
 * Uses Sunflower yellow as the default color for the progress bar.
 *
 * @example
 * ```tsx
 * <ProgressIndicator value={50} />
 * <ProgressIndicator value={75} size="lg" variant="success" />
 * <ProgressIndicator indeterminate label="Loading..." />
 * ```
 */
declare const ProgressIndicator: React.ForwardRefExoticComponent<ProgressIndicatorProps & React.RefAttributes<HTMLDivElement>>;
export { ProgressIndicator, progressIndicatorVariants, progressBarVariants };
export type { ProgressIndicatorProps };
