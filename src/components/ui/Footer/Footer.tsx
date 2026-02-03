'use client'

import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const footerVariants = cva('w-full font-sans', {
  variants: {
    variant: {
      default: 'border-border border-t bg-white',
      filled: 'bg-main border-border border-t',
      dark: 'bg-primary text-white',
    },
    size: {
      sm: 'px-4 py-6',
      default: 'px-6 py-10',
      lg: 'px-8 py-16',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

interface FooterProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof footerVariants> {
  /** Render as a child component */
  asChild?: boolean
}

/**
 * Footer component for page footer content.
 * Supports multiple variants and sizes for different use cases.
 *
 * @example
 * ```tsx
 * <Footer>
 *   <FooterContent>
 *     <FooterSection>
 *       <FooterHeading>Company</FooterHeading>
 *       <FooterLinks>
 *         <Link href="/about">About</Link>
 *         <Link href="/careers">Careers</Link>
 *       </FooterLinks>
 *     </FooterSection>
 *   </FooterContent>
 *   <FooterBottom>
 *     <FooterCopyright>© 2026 Engrate</FooterCopyright>
 *   </FooterBottom>
 * </Footer>
 * ```
 */
const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'footer'
    return (
      <Comp
        ref={ref}
        className={cn(footerVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)
Footer.displayName = 'Footer'

/* -------------------------------------------------------------------------------------------------
 * FooterContent
 * -----------------------------------------------------------------------------------------------*/

interface FooterContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Render as a child component */
  asChild?: boolean
}

/**
 * Main content container for footer sections.
 * Provides a responsive grid layout for footer columns.
 */
const FooterContent = React.forwardRef<HTMLDivElement, FooterContentProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div'
    return (
      <Comp
        ref={ref}
        className={cn(
          'grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4',
          className
        )}
        {...props}
      />
    )
  }
)
FooterContent.displayName = 'FooterContent'

/* -------------------------------------------------------------------------------------------------
 * FooterSection
 * -----------------------------------------------------------------------------------------------*/

interface FooterSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Render as a child component */
  asChild?: boolean
}

/**
 * A section/column within the footer content.
 * Typically contains a heading and a list of links.
 */
const FooterSection = React.forwardRef<HTMLDivElement, FooterSectionProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div'
    return (
      <Comp
        ref={ref}
        className={cn('flex flex-col gap-3', className)}
        {...props}
      />
    )
  }
)
FooterSection.displayName = 'FooterSection'

/* -------------------------------------------------------------------------------------------------
 * FooterHeading
 * -----------------------------------------------------------------------------------------------*/

interface FooterHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Render as a child component */
  asChild?: boolean
}

/**
 * Heading for a footer section.
 */
const FooterHeading = React.forwardRef<HTMLHeadingElement, FooterHeadingProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'h3'
    return (
      <Comp
        ref={ref}
        className={cn('text-small font-medium', className)}
        {...props}
      />
    )
  }
)
FooterHeading.displayName = 'FooterHeading'

/* -------------------------------------------------------------------------------------------------
 * FooterLinks
 * -----------------------------------------------------------------------------------------------*/

interface FooterLinksProps extends React.HTMLAttributes<HTMLElement> {
  /** Render as a child component */
  asChild?: boolean
}

/**
 * Container for navigation links within a footer section.
 */
const FooterLinks = React.forwardRef<HTMLElement, FooterLinksProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'nav'
    return (
      <Comp
        ref={ref}
        className={cn(
          'text-small text-secondary flex flex-col gap-2',
          className
        )}
        {...props}
      />
    )
  }
)
FooterLinks.displayName = 'FooterLinks'

/* -------------------------------------------------------------------------------------------------
 * FooterBottom
 * -----------------------------------------------------------------------------------------------*/

interface FooterBottomProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Render as a child component */
  asChild?: boolean
}

/**
 * Bottom section of the footer.
 * Typically contains copyright text and legal links.
 */
const FooterBottom = React.forwardRef<HTMLDivElement, FooterBottomProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div'
    return (
      <Comp
        ref={ref}
        className={cn(
          'border-border mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row',
          className
        )}
        {...props}
      />
    )
  }
)
FooterBottom.displayName = 'FooterBottom'

/* -------------------------------------------------------------------------------------------------
 * FooterCopyright
 * -----------------------------------------------------------------------------------------------*/

interface FooterCopyrightProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /** Render as a child component */
  asChild?: boolean
}

/**
 * Copyright text component for the footer.
 */
const FooterCopyright = React.forwardRef<
  HTMLParagraphElement,
  FooterCopyrightProps
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'p'
  return (
    <Comp
      ref={ref}
      className={cn('text-small text-secondary', className)}
      {...props}
    />
  )
})
FooterCopyright.displayName = 'FooterCopyright'

export {
  Footer,
  footerVariants,
  FooterContent,
  FooterSection,
  FooterHeading,
  FooterLinks,
  FooterBottom,
  FooterCopyright,
}
export type {
  FooterProps,
  FooterContentProps,
  FooterSectionProps,
  FooterHeadingProps,
  FooterLinksProps,
  FooterBottomProps,
  FooterCopyrightProps,
}
