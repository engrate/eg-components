import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const cardVariants: (props?: ({
    variant?: "ghost" | "default" | "elevated" | null | undefined;
    padding?: "sm" | "default" | "lg" | "none" | null | undefined;
    bg?: "contrast" | "main" | "sunflower" | "lemon-meringue" | "vanilla" | "eggshell" | "warm-purple" | "cool-purple" | "electric-blue" | "deep-blue" | "error" | "card" | "alt" | "transparent" | "sunflower-hover" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
    /** Render as a child component */
    asChild?: boolean;
    /** Background color from Engrate design tokens */
    bg?: VariantProps<typeof cardVariants>['bg'];
}
/**
 * Card component for displaying content in a contained area.
 * Follows Engrate design system with support for variants, padding, and background colors.
 *
 * @example
 * ```tsx
 * <Card>
 *   <Heading>Title</Heading>
 *   <Text>Content goes here</Text>
 * </Card>
 * <Card variant="elevated" padding="lg">Elevated card</Card>
 * <Card bg="sunflower">Highlighted card</Card>
 * ```
 */
declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
export { Card, cardVariants, type CardProps };
