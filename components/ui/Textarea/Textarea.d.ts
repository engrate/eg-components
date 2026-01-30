import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const textareaVariants: (props?: ({
    variant?: "default" | "error" | null | undefined;
    resize?: "none" | "horizontal" | "vertical" | "both" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof textareaVariants> {
}
/**
 * Textarea component following Engrate brand guidelines.
 * Features rounded corners, subtle background, and sunflower focus ring.
 *
 * @example
 * ```tsx
 * <Textarea placeholder="Enter your message" />
 * <Textarea variant="error" placeholder="Invalid input" />
 * <Textarea resize="none" placeholder="Fixed size" />
 * ```
 */
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
export { Textarea, textareaVariants };
export type { TextareaProps };
