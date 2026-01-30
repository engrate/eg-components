'use client'

import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const bannerVariants = cva(
  'text-small relative flex w-full items-center gap-3 px-4 py-3 font-sans transition-colors',
  {
    variants: {
      variant: {
        info: 'bg-electric-blue text-white',
        success: 'bg-sunflower text-primary',
        warning: 'bg-lemon-meringue text-primary',
        error: 'bg-error text-white',
        neutral: 'bg-alt text-primary border-border border',
      },
      align: {
        left: 'justify-start text-left',
        center: 'justify-center text-center',
      },
    },
    defaultVariants: {
      variant: 'info',
      align: 'center',
    },
  }
)

interface BannerProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bannerVariants> {
  /** Render as a child component (for use with custom wrappers) */
  asChild?: boolean
  /** Optional icon to display before the content */
  icon?: React.ReactNode
  /** Optional action element (button, link, etc.) to display at the end */
  action?: React.ReactNode
  /** Called when the dismiss button is clicked */
  onDismiss?: () => void
}

/**
 * Banner component for displaying important messages, announcements, or alerts.
 * Typically used at the top of a page or section to convey critical information.
 *
 * @example
 * ```tsx
 * <Banner variant="info">New feature available!</Banner>
 * <Banner variant="success" onDismiss={() => {}}>Your changes have been saved.</Banner>
 * <Banner variant="warning" icon={<WarningIcon />}>Please review your settings.</Banner>
 * <Banner variant="error" action={<Button size="sm">Retry</Button>}>Connection failed.</Banner>
 * ```
 */
const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  (
    {
      className,
      variant,
      align,
      asChild = false,
      icon,
      action,
      onDismiss,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'div'
    return (
      <Comp
        role="alert"
        className={cn(bannerVariants({ variant, align, className }))}
        ref={ref}
        {...props}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        <span className="flex-1">{children}</span>
        {action && <span className="shrink-0">{action}</span>}
        {onDismiss && (
          <button
            type="button"
            onClick={onDismiss}
            className="hover:bg-primary/10 focus-visible:ring-sunflower -mr-1 shrink-0 rounded p-1 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            aria-label="Dismiss banner"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        )}
      </Comp>
    )
  }
)
Banner.displayName = 'Banner'

export { Banner, bannerVariants }
export type { BannerProps }
