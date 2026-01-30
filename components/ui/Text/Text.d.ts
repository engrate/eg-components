import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const textVariants: (props?: ({
    variant?: "lead" | "semi-lead" | "body-lg" | "body" | "descriptive" | "label" | "label-sm" | null | undefined;
    weight?: "medium" | "regular" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type TextElement = 'p' | 'span' | 'div' | 'label';
interface TextProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof textVariants> {
    /**
     * Render as a different element using Radix Slot
     */
    asChild?: boolean;
    /**
     * Override the default HTML element
     * @default 'p'
     */
    as?: TextElement;
}
declare const Text: React.ForwardRefExoticComponent<TextProps & React.RefAttributes<HTMLElement>>;
export { Text, textVariants };
export type { TextProps };
