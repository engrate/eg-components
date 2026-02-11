import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const cardVariants: (props?: ({
    variant?: "default" | "ghost" | "elevated" | null | undefined;
    padding?: "default" | "none" | "sm" | "lg" | null | undefined;
    bg?: "contrast" | "default" | "main" | "sunflower" | "lemon-meringue" | "vanilla" | "eggshell" | "warm-purple" | "cool-purple" | "electric-blue" | "deep-blue" | "error" | "transparent" | "card" | "alt" | "sunflower-hover" | null | undefined;
    accent?: "none" | "sunflower" | "warm-purple" | "cool-purple" | "electric-blue" | "deep-blue" | "error" | "border" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
    /** Render as a child component */
    asChild?: boolean;
    /** Background color from Engrate design tokens */
    bg?: VariantProps<typeof cardVariants>['bg'];
    /** Left accent gradient stripe color */
    accent?: VariantProps<typeof cardVariants>['accent'];
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
 * <Card accent="sunflower">Card with accent stripe</Card>
 * ```
 */
declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
export { Card, cardVariants, type CardProps };
