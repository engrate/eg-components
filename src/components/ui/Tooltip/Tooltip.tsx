'use client'

import * as React from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

/* -------------------------------------------------------------------------------------------------
 * TooltipProvider
 * -----------------------------------------------------------------------------------------------*/

const TooltipProvider = TooltipPrimitive.Provider

/* -------------------------------------------------------------------------------------------------
 * Tooltip (Root)
 * -----------------------------------------------------------------------------------------------*/

const Tooltip = TooltipPrimitive.Root

/* -------------------------------------------------------------------------------------------------
 * TooltipTrigger
 * -----------------------------------------------------------------------------------------------*/

const TooltipTrigger = TooltipPrimitive.Trigger

/* -------------------------------------------------------------------------------------------------
 * TooltipPortal
 * -----------------------------------------------------------------------------------------------*/

const TooltipPortal = TooltipPrimitive.Portal

/* -------------------------------------------------------------------------------------------------
 * TooltipArrow
 * -----------------------------------------------------------------------------------------------*/

interface TooltipArrowProps extends React.ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Arrow
> {}

const TooltipArrow = React.forwardRef<
  React.ComponentRef<typeof TooltipPrimitive.Arrow>,
  TooltipArrowProps
>(({ className, ...props }, ref) => (
  <TooltipPrimitive.Arrow
    ref={ref}
    className={cn('fill-primary', className)}
    {...props}
  />
))
TooltipArrow.displayName = 'TooltipArrow'

/* -------------------------------------------------------------------------------------------------
 * TooltipContent
 * -----------------------------------------------------------------------------------------------*/

const tooltipContentVariants = cva(
  [
    'z-50 overflow-hidden rounded-md px-3 py-1.5 font-sans shadow-md',
    'animate-in fade-in-0 zoom-in-95',
    'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
    'data-[side=bottom]:slide-in-from-top-2',
    'data-[side=left]:slide-in-from-right-2',
    'data-[side=right]:slide-in-from-left-2',
    'data-[side=top]:slide-in-from-bottom-2',
  ],
  {
    variants: {
      variant: {
        default: 'bg-primary text-small text-white',
        light: 'bg-card text-primary text-small border-border border',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

interface TooltipContentProps
  extends
    React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>,
    VariantProps<typeof tooltipContentVariants> {
  /** Whether to show an arrow pointing to the trigger */
  showArrow?: boolean
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
const TooltipContent = React.forwardRef<
  React.ComponentRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(
  (
    {
      className,
      variant,
      sideOffset = 4,
      showArrow = false,
      children,
      ...props
    },
    ref
  ) => (
    <TooltipPortal>
      <TooltipPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(tooltipContentVariants({ variant, className }))}
        {...props}
      >
        {children}
        {showArrow && (
          <TooltipArrow
            className={variant === 'light' ? 'fill-card' : 'fill-primary'}
          />
        )}
      </TooltipPrimitive.Content>
    </TooltipPortal>
  )
)
TooltipContent.displayName = 'TooltipContent'

export {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  tooltipContentVariants,
  TooltipPortal,
  TooltipProvider,
  TooltipTrigger,
}
export type { TooltipArrowProps, TooltipContentProps }
