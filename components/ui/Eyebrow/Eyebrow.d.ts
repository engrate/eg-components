import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const eyebrowVariants: (props?: ({
    variant?: "default" | "primary" | "secondary" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof eyebrowVariants> {
    asChild?: boolean;
}
declare const Eyebrow: React.ForwardRefExoticComponent<EyebrowProps & React.RefAttributes<HTMLSpanElement>>;
export { Eyebrow, eyebrowVariants };
