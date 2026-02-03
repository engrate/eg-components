'use client'

import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const headerVariants = cva(
  'flex w-full items-center justify-between font-sans',
  {
    variants: {
      variant: {
        default: 'border-border border-b bg-white',
        transparent: 'bg-transparent',
        filled: 'bg-main border-border border-b',
      },
      size: {
        sm: 'h-12 px-4',
        default: 'h-16 px-6',
        lg: 'h-20 px-8',
      },
      sticky: {
        true: 'sticky top-0 z-50',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      sticky: false,
    },
  }
)

interface HeaderProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof headerVariants> {
  /** Render as a child component */
  asChild?: boolean
}

/**
 * Header component for page navigation and branding.
 * Supports multiple variants and sticky positioning.
 *
 * @example
 * ```tsx
 * <Header>
 *   <HeaderLogo>
 *     <EngrateLogo />
 *   </HeaderLogo>
 *   <HeaderNav>
 *     <Link variant="nav" href="/about">About</Link>
 *   </HeaderNav>
 *   <HeaderActions>
 *     <Button>Sign In</Button>
 *   </HeaderActions>
 * </Header>
 * ```
 */
const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({ className, variant, size, sticky, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'header'
    return (
      <Comp
        ref={ref}
        className={cn(headerVariants({ variant, size, sticky, className }))}
        {...props}
      />
    )
  }
)
Header.displayName = 'Header'

/* -------------------------------------------------------------------------------------------------
 * HeaderLogo
 * -----------------------------------------------------------------------------------------------*/

interface HeaderLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Render as a child component */
  asChild?: boolean
}

/**
 * Container for the logo within the Header.
 * Typically wraps an EngrateLogo or custom logo component.
 */
const HeaderLogo = React.forwardRef<HTMLDivElement, HeaderLogoProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div'
    return (
      <Comp
        ref={ref}
        className={cn('flex shrink-0 items-center', className)}
        {...props}
      />
    )
  }
)
HeaderLogo.displayName = 'HeaderLogo'

/* -------------------------------------------------------------------------------------------------
 * HeaderNav
 * -----------------------------------------------------------------------------------------------*/

interface HeaderNavProps extends React.HTMLAttributes<HTMLElement> {
  /** Render as a child component */
  asChild?: boolean
}

/**
 * Navigation container within the Header.
 * Wraps navigation links in a flex container.
 */
const HeaderNav = React.forwardRef<HTMLElement, HeaderNavProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'nav'
    return (
      <Comp
        ref={ref}
        className={cn('flex items-center gap-6', className)}
        {...props}
      />
    )
  }
)
HeaderNav.displayName = 'HeaderNav'

/* -------------------------------------------------------------------------------------------------
 * HeaderActions
 * -----------------------------------------------------------------------------------------------*/

interface HeaderActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Render as a child component */
  asChild?: boolean
}

/**
 * Container for action buttons/links in the Header.
 * Typically contains CTAs like "Sign In" or "Get Started".
 */
const HeaderActions = React.forwardRef<HTMLDivElement, HeaderActionsProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div'
    return (
      <Comp
        ref={ref}
        className={cn('flex shrink-0 items-center gap-3', className)}
        {...props}
      />
    )
  }
)
HeaderActions.displayName = 'HeaderActions'

export { Header, headerVariants, HeaderLogo, HeaderNav, HeaderActions }
export type { HeaderProps, HeaderLogoProps, HeaderNavProps, HeaderActionsProps }
