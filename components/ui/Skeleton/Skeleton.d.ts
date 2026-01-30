import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const skeletonVariants: (props?: ({
    variant?: "text" | "default" | "circular" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof skeletonVariants> {
    /** Width of the skeleton (CSS value or Tailwind class) */
    width?: string | number;
    /** Height of the skeleton (CSS value or Tailwind class) */
    height?: string | number;
}
/**
 * Skeleton component for indicating loading states.
 * Displays a pulsing placeholder while content is loading.
 *
 * @example
 * ```tsx
 * <Skeleton width={200} height={20} />
 * <Skeleton variant="circular" width={40} height={40} />
 * <Skeleton variant="text" className="w-full h-4" />
 * ```
 */
declare const Skeleton: React.ForwardRefExoticComponent<SkeletonProps & React.RefAttributes<HTMLDivElement>>;
export { Skeleton, skeletonVariants };
export type { SkeletonProps };
