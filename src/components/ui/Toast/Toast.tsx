import * as React from 'react'
import * as ToastPrimitives from '@radix-ui/react-toast'
import { cva, type VariantProps } from 'class-variance-authority'
import { X } from 'lucide-react'

import { cn } from '@/lib/utils'

/* -------------------------------------------------------------------------------------------------
 * ToastProvider
 * -----------------------------------------------------------------------------------------------*/

const ToastProvider = ToastPrimitives.Provider

/* -------------------------------------------------------------------------------------------------
 * ToastViewport
 * -----------------------------------------------------------------------------------------------*/

interface ToastViewportProps extends React.ComponentPropsWithoutRef<
  typeof ToastPrimitives.Viewport
> {}

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  ToastViewportProps
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = 'ToastViewport'

/* -------------------------------------------------------------------------------------------------
 * Toast
 * -----------------------------------------------------------------------------------------------*/

const toastVariants = cva(
  [
    'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-lg border p-4 shadow-lg transition-all',
    'data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none',
    'data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out',
    'data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
  ],
  {
    variants: {
      variant: {
        default: 'border-border bg-main text-primary',
        success:
          'border-sunflower/30 bg-eggshell text-primary [&>svg]:text-sunflower',
        error: 'border-error/30 bg-main text-primary [&>svg]:text-error',
        warning:
          'border-sunflower/50 bg-vanilla text-primary [&>svg]:text-sunflower',
        info: 'border-electric-blue/30 bg-main text-primary [&>svg]:text-electric-blue',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

interface ToastProps
  extends
    React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root>,
    VariantProps<typeof toastVariants> {}

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  ToastProps
>(({ className, variant, ...props }, ref) => (
  <ToastPrimitives.Root
    ref={ref}
    className={cn(toastVariants({ variant }), className)}
    {...props}
  />
))
Toast.displayName = 'Toast'

/* -------------------------------------------------------------------------------------------------
 * ToastAction
 * -----------------------------------------------------------------------------------------------*/

interface ToastActionProps extends React.ComponentPropsWithoutRef<
  typeof ToastPrimitives.Action
> {}

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  ToastActionProps
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      'rounded-pill border-border inline-flex h-8 shrink-0 items-center justify-center border bg-transparent px-3 text-sm font-medium',
      'ring-offset-main transition-colors',
      'hover:bg-alt',
      'focus:ring-sunflower focus:outline-none focus:ring-2 focus:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      'group-[.error]:border-error/30 group-[.error]:hover:border-error/50 group-[.error]:hover:bg-error/10 group-[.error]:focus:ring-error',
      className
    )}
    {...props}
  />
))
ToastAction.displayName = 'ToastAction'

/* -------------------------------------------------------------------------------------------------
 * ToastClose
 * -----------------------------------------------------------------------------------------------*/

interface ToastCloseProps extends React.ComponentPropsWithoutRef<
  typeof ToastPrimitives.Close
> {}

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  ToastCloseProps
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      'text-secondary absolute right-2 top-2 rounded-sm p-1 opacity-0 transition-opacity',
      'hover:text-primary',
      'focus:ring-sunflower focus:opacity-100 focus:outline-none focus:ring-2',
      'group-hover:opacity-100',
      'group-[.error]:text-error/70 group-[.error]:hover:text-error group-[.error]:focus:ring-error group-[.error]:focus:ring-offset-error',
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
    <span className="sr-only">Close</span>
  </ToastPrimitives.Close>
))
ToastClose.displayName = 'ToastClose'

/* -------------------------------------------------------------------------------------------------
 * ToastTitle
 * -----------------------------------------------------------------------------------------------*/

interface ToastTitleProps extends React.ComponentPropsWithoutRef<
  typeof ToastPrimitives.Title
> {}

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  ToastTitleProps
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn('text-sm font-semibold', className)}
    {...props}
  />
))
ToastTitle.displayName = 'ToastTitle'

/* -------------------------------------------------------------------------------------------------
 * ToastDescription
 * -----------------------------------------------------------------------------------------------*/

interface ToastDescriptionProps extends React.ComponentPropsWithoutRef<
  typeof ToastPrimitives.Description
> {}

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  ToastDescriptionProps
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn('text-secondary text-sm', className)}
    {...props}
  />
))
ToastDescription.displayName = 'ToastDescription'

export {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  toastVariants,
}
export type {
  ToastActionProps,
  ToastCloseProps,
  ToastDescriptionProps,
  ToastProps,
  ToastTitleProps,
  ToastViewportProps,
}
