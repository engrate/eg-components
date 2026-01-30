import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const headingVariants: (props?: ({
    level?: "hero" | "h1" | "h2" | "h3" | "h4" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
    /**
     * Render as a different element using Radix Slot
     */
    asChild?: boolean;
    /**
     * Override the default HTML element for semantic flexibility
     * @default Matches the level prop (hero renders as h1)
     */
    as?: HeadingElement;
}
declare const Heading: React.ForwardRefExoticComponent<HeadingProps & React.RefAttributes<HTMLHeadingElement>>;
export { Heading, headingVariants };
export type { HeadingProps };
