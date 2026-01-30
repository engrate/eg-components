'use client'

import * as React from 'react'

import { FormMessage } from '../FormMessage'
import { Label } from '../Label'

import { cn } from '@/lib/utils'

interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The label for the field */
  label?: string
  /** The size of the label */
  labelSize?: 'default' | 'sm'
  /** An optional hint message */
  hint?: string
  /** An optional error message */
  error?: string
  /** The id for the form control (used for htmlFor on label) */
  htmlFor?: string
}

/**
 * Form field wrapper component for consistent form layouts.
 * Composes Label, children (form control), and FormMessage.
 * Simple presentational wrapper following Engrate brand guidelines.
 *
 * @example
 * ```tsx
 * <FormField label="Email" htmlFor="email" hint="We'll never share your email.">
 *   <Input id="email" placeholder="you@example.com" />
 * </FormField>
 *
 * <FormField label="Password" htmlFor="password" error="Password is required">
 *   <Input id="password" type="password" variant="error" />
 * </FormField>
 * ```
 */
const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  (
    { className, label, labelSize, hint, error, htmlFor, children, ...props },
    ref
  ) => {
    const messageId = htmlFor ? `${htmlFor}-message` : undefined

    return (
      <div
        ref={ref}
        className={cn('flex flex-col gap-1.5', className)}
        {...props}
      >
        {label && (
          <Label htmlFor={htmlFor} size={labelSize}>
            {label}
          </Label>
        )}
        {children}
        {(hint || error) && (
          <FormMessage
            id={messageId}
            variant={error ? 'error' : 'default'}
            role={error ? 'alert' : undefined}
          >
            {error || hint}
          </FormMessage>
        )}
      </div>
    )
  }
)
FormField.displayName = 'FormField'

export { FormField }
export type { FormFieldProps }
