import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const inputVariants: (props?: ({
    variant?: "default" | "error" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>, VariantProps<typeof inputVariants> {
}
/**
 * Text input component following Engrate brand guidelines.
 * Features rounded corners, subtle background, and sunflower focus ring.
 *
 * @example
 * ```tsx
 * <Input placeholder="Enter your email" />
 * <Input variant="error" placeholder="Invalid input" />
 * ```
 */
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export { Input, inputVariants };
export type { InputProps };
