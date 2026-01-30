import { VariantProps } from 'class-variance-authority';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as React from 'react';
declare const labelVariants: (props?: ({
    size?: "sm" | "default" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface LabelProps extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>, VariantProps<typeof labelVariants> {
}
/**
 * Form label component following Engrate brand guidelines.
 * Uses text-tertiary color and Work Sans font.
 *
 * @example
 * ```tsx
 * <Label htmlFor="email">Email address</Label>
 * <Label size="sm">Small label</Label>
 * ```
 */
declare const Label: React.ForwardRefExoticComponent<LabelProps & React.RefAttributes<HTMLLabelElement>>;
export { Label, labelVariants };
export type { LabelProps };
