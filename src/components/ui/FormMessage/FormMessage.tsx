import * as React from 'react'

import { cn } from '@/lib/utils'

interface FormMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /** The type of message to display */
  variant?: 'default' | 'error'
}

/**
 * Form message component for displaying hints or error messages.
 * Following Engrate brand guidelines.
 *
 * @example
 * ```tsx
 * <FormMessage>This is a hint message</FormMessage>
 * <FormMessage variant="error">This field is required</FormMessage>
 * ```
 */
const FormMessage = React.forwardRef<HTMLParagraphElement, FormMessageProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    if (!children) {
      return null
    }

    return (
      <p
        ref={ref}
        className={cn(
          'text-descriptive font-sans text-sm',
          variant === 'default' ? 'text-text-tertiary' : 'text-error',
          className
        )}
        {...props}
      >
        {children}
      </p>
    )
  }
)
FormMessage.displayName = 'FormMessage'

export { FormMessage }
export type { FormMessageProps }
