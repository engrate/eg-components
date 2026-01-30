import * as React from 'react';
interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The label for the field */
    label?: string;
    /** The size of the label */
    labelSize?: 'default' | 'sm';
    /** An optional hint message */
    hint?: string;
    /** An optional error message */
    error?: string;
    /** The id for the form control (used for htmlFor on label) */
    htmlFor?: string;
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
declare const FormField: React.ForwardRefExoticComponent<FormFieldProps & React.RefAttributes<HTMLDivElement>>;
export { FormField };
export type { FormFieldProps };
