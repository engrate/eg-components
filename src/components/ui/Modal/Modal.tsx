'use client'

import * as DialogPrimitive from '@radix-ui/react-dialog'
import { cva, type VariantProps } from 'class-variance-authority'
import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import * as React from 'react'

import { cn } from '@/lib/utils'

/* -------------------------------------------------------------------------------------------------
 * ModalContext (tracks open state for AnimatePresence)
 * -----------------------------------------------------------------------------------------------*/

const ModalContext = React.createContext(false)

/* -------------------------------------------------------------------------------------------------
 * Modal (Root) — wraps Radix Root to track open state
 * -----------------------------------------------------------------------------------------------*/

interface ModalProps extends React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Root
> {}

const Modal = ({
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  children,
  ...props
}: ModalProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen)
  const isControlled = controlledOpen !== undefined
  const isOpen = isControlled ? controlledOpen : uncontrolledOpen

  const handleOpenChange = React.useCallback(
    (value: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(value)
      }
      onOpenChange?.(value)
    },
    [isControlled, onOpenChange]
  )

  return (
    <ModalContext.Provider value={isOpen}>
      <DialogPrimitive.Root
        open={isOpen}
        onOpenChange={handleOpenChange}
        {...props}
      >
        {children}
      </DialogPrimitive.Root>
    </ModalContext.Provider>
  )
}
Modal.displayName = 'Modal'

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
  React.ComponentRef<typeof DialogPrimitive.Overlay>,
  ModalOverlayProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay ref={ref} forceMount asChild {...props}>
    <motion.div
      initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
      animate={{ opacity: 1, backdropFilter: 'blur(4px)' }}
      exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
      transition={{ duration: 0.2 }}
      className={cn('fixed inset-0 z-50 bg-black/20', className)}
    />
  </DialogPrimitive.Overlay>
))
ModalOverlay.displayName = 'ModalOverlay'

/* -------------------------------------------------------------------------------------------------
 * ModalContent
 * -----------------------------------------------------------------------------------------------*/

const modalContentVariants = cva(
  [
    'fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2',
    'bg-main grid w-full gap-4 p-6 shadow-lg',
    'max-h-[85vh] overflow-y-auto',
    'border-border rounded-lg border',
    'focus-visible:ring-sunflower focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
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
  React.ComponentRef<typeof DialogPrimitive.Content>,
  ModalContentProps
>(({ className, children, size, showCloseButton = true, ...props }, ref) => {
  const isOpen = React.useContext(ModalContext)

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalPortal forceMount>
          <ModalOverlay />
          <DialogPrimitive.Content ref={ref} forceMount asChild {...props}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={cn(modalContentVariants({ size }), className)}
            >
              {children}
              {showCloseButton && (
                <DialogPrimitive.Close
                  className={cn(
                    'absolute top-4 right-4 rounded-sm opacity-70',
                    'ring-offset-main transition-opacity',
                    'hover:opacity-100',
                    'focus:ring-sunflower focus:ring-2 focus:ring-offset-2 focus:outline-none',
                    'disabled:pointer-events-none',
                    'data-[state=open]:bg-alt data-[state=open]:text-secondary'
                  )}
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </DialogPrimitive.Close>
              )}
            </motion.div>
          </DialogPrimitive.Content>
        </ModalPortal>
      )}
    </AnimatePresence>
  )
})
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
  React.ComponentRef<typeof DialogPrimitive.Title>,
  ModalTitleProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      'text-primary text-lg leading-none tracking-tight',
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
    className={cn('text-secondary text-sm', className)}
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
