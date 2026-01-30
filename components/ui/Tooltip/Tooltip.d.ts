import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
declare const TooltipProvider: React.FC<TooltipPrimitive.TooltipProviderProps>;
declare const Tooltip: React.FC<TooltipPrimitive.TooltipProps>;
declare const TooltipTrigger: React.ForwardRefExoticComponent<TooltipPrimitive.TooltipTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const TooltipPortal: React.FC<TooltipPrimitive.TooltipPortalProps>;
interface TooltipArrowProps extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Arrow> {
}
declare const TooltipArrow: React.ForwardRefExoticComponent<TooltipArrowProps & React.RefAttributes<SVGSVGElement>>;
declare const tooltipContentVariants: (props?: ({
    variant?: "default" | "light" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface TooltipContentProps extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>, VariantProps<typeof tooltipContentVariants> {
    /** Whether to show an arrow pointing to the trigger */
    showArrow?: boolean;
}
/**
 * Tooltip content component that displays contextual information.
 * Follows Engrate brand guidelines with dark background by default.
 *
 * @example
 * ```tsx
 * <TooltipProvider>
 *   <Tooltip>
 *     <TooltipTrigger>Hover me</TooltipTrigger>
 *     <TooltipContent>Helpful information</TooltipContent>
 *   </Tooltip>
 * </TooltipProvider>
 * ```
 */
declare const TooltipContent: React.ForwardRefExoticComponent<TooltipContentProps & React.RefAttributes<HTMLDivElement>>;
export { Tooltip, TooltipArrow, TooltipContent, tooltipContentVariants, TooltipPortal, TooltipProvider, TooltipTrigger, };
export type { TooltipArrowProps, TooltipContentProps };
