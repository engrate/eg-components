import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { cva, type VariantProps } from 'class-variance-authority'
import { X } from 'lucide-react'

import { cn } from '@/lib/utils'

/* -------------------------------------------------------------------------------------------------
 * Modal (Root)
 * -----------------------------------------------------------------------------------------------*/

const Modal = DialogPrimitive.Root

/* -------------------------------------------------------------------------------------------------
 * ModalTrigger
 * -----------------------------------------------------------------------------------------------*/

const ModalTrigger = DialogPrimitive.Trigger

/* -------------------------------------------------------------------------------------------------
 * ModalPortal
 * -----------------------------------------------------------------------------------------------*/

const ModalPortal = DialogPrimitive.Portal

/* -------------------------------------------------------------------------------------------------
 * ModalClose
 * -----------------------------------------------------------------------------------------------*/

const ModalClose = DialogPrimitive.Close

/* -------------------------------------------------------------------------------------------------
 * ModalOverlay
 * -----------------------------------------------------------------------------------------------*/

interface ModalOverlayProps extends React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Overlay
> {}

const ModalOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  ModalOverlayProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-black/50',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )}
    {...props}
  />
))
ModalOverlay.displayName = 'ModalOverlay'

/* -------------------------------------------------------------------------------------------------
 * ModalContent
 * -----------------------------------------------------------------------------------------------*/

const modalContentVariants = cva(
  [
    'fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2',
    'grid w-full gap-4 bg-main p-6 shadow-lg',
    'max-h-[85vh] overflow-y-auto',
    'rounded-lg border border-border',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-sunflower focus-visible:ring-offset-2',
    'data-[state=open]:animate-in data-[state=closed]:animate-out',
    'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
    'data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]',
    'data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
    'duration-200',
  ],
  {
    variants: {
      size: {
        sm: 'max-w-[400px]',
        default: 'max-w-[500px]',
        lg: 'max-w-[640px]',
        full: 'max-w-[95vw]',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

interface ModalContentProps
  extends
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof modalContentVariants> {
  /** Whether to show the default close button in the top-right corner */
  showCloseButton?: boolean
}

const ModalContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  ModalContentProps
>(({ className, children, size, showCloseButton = true, ...props }, ref) => (
  <ModalPortal>
    <ModalOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(modalContentVariants({ size }), className)}
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close
          className={cn(
            'absolute right-4 top-4 rounded-sm opacity-70',
            'ring-offset-bg-main transition-opacity',
            'hover:opacity-100',
            'focus:outline-none focus:ring-2 focus:ring-sunflower focus:ring-offset-2',
            'disabled:pointer-events-none',
            'data-[state=open]:bg-bg-alt data-[state=open]:text-text-secondary'
          )}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      )}
    </DialogPrimitive.Content>
  </ModalPortal>
))
ModalContent.displayName = 'ModalContent'

/* -------------------------------------------------------------------------------------------------
 * ModalHeader
 * -----------------------------------------------------------------------------------------------*/

interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const ModalHeader = React.forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex flex-col space-y-1.5 text-center sm:text-left',
        className
      )}
      {...props}
    />
  )
)
ModalHeader.displayName = 'ModalHeader'

/* -------------------------------------------------------------------------------------------------
 * ModalFooter
 * -----------------------------------------------------------------------------------------------*/

interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const ModalFooter = React.forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
        className
      )}
      {...props}
    />
  )
)
ModalFooter.displayName = 'ModalFooter'

/* -------------------------------------------------------------------------------------------------
 * ModalTitle
 * -----------------------------------------------------------------------------------------------*/

interface ModalTitleProps extends React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Title
> {}

const ModalTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  ModalTitleProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      'text-text-primary text-lg font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
))
ModalTitle.displayName = 'ModalTitle'

/* -------------------------------------------------------------------------------------------------
 * ModalDescription
 * -----------------------------------------------------------------------------------------------*/

interface ModalDescriptionProps extends React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Description
> {}

const ModalDescription = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Description>,
  ModalDescriptionProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-text-secondary text-sm', className)}
    {...props}
  />
))
ModalDescription.displayName = 'ModalDescription'

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/

export {
  Modal,
  ModalTrigger,
  ModalPortal,
  ModalOverlay,
  ModalContent,
  ModalClose,
  ModalHeader,
  ModalFooter,
  ModalTitle,
  ModalDescription,
  modalContentVariants,
}

export type {
  ModalOverlayProps,
  ModalContentProps,
  ModalHeaderProps,
  ModalFooterProps,
  ModalTitleProps,
  ModalDescriptionProps,
}
