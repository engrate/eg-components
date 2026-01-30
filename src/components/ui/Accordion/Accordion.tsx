'use client'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { cva, type VariantProps } from 'class-variance-authority'
import { ChevronDown } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'

/* -------------------------------------------------------------------------------------------------
 * Accordion (Root)
 * -----------------------------------------------------------------------------------------------*/

const accordionVariants = cva('w-full', {
  variants: {
    variant: {
      default: '',
      bordered: 'border-border rounded-lg border',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

type AccordionSingleProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Root
> &
  VariantProps<typeof accordionVariants> & {
    type: 'single'
    collapsible?: boolean
  }

type AccordionMultipleProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Root
> &
  VariantProps<typeof accordionVariants> & {
    type: 'multiple'
  }

type AccordionProps = AccordionSingleProps | AccordionMultipleProps

const Accordion = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>(({ className, variant, ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    className={cn(accordionVariants({ variant }), className)}
    {...props}
  />
))
Accordion.displayName = 'Accordion'

/* -------------------------------------------------------------------------------------------------
 * AccordionItem
 * -----------------------------------------------------------------------------------------------*/

interface AccordionItemProps extends React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Item
> {}

const AccordionItem = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Item>,
  AccordionItemProps
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('border-border border-b last:border-b-0', className)}
    {...props}
  />
))
AccordionItem.displayName = 'AccordionItem'

/* -------------------------------------------------------------------------------------------------
 * AccordionTrigger
 * -----------------------------------------------------------------------------------------------*/

const accordionTriggerVariants = cva(
  [
    'flex flex-1 items-center justify-between py-4 text-left font-sans font-medium transition-all',
    'text-primary hover:underline',
    'focus-visible:ring-sunflower focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
    '[&[data-state=open]>svg]:rotate-180',
  ],
  {
    variants: {
      size: {
        sm: 'text-small py-3',
        default: 'text-body py-4',
        lg: 'text-lead py-5',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

interface AccordionTriggerProps
  extends
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>,
    VariantProps<typeof accordionTriggerVariants> {}

const AccordionTrigger = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ className, children, size, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(accordionTriggerVariants({ size }), className)}
      {...props}
    >
      {children}
      <ChevronDown className="text-secondary h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = 'AccordionTrigger'

/* -------------------------------------------------------------------------------------------------
 * AccordionContent
 * -----------------------------------------------------------------------------------------------*/

interface AccordionContentProps extends React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Content
> {}

const AccordionContent = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Content>,
  AccordionContentProps
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
    {...props}
  >
    <div className={cn('text-secondary pt-0 pb-4', className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = 'AccordionContent'

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  accordionVariants,
  accordionTriggerVariants,
}

export type {
  AccordionProps,
  AccordionItemProps,
  AccordionTriggerProps,
  AccordionContentProps,
}
