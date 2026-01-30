import * as React from 'react';
interface FormMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {
    /** The type of message to display */
    variant?: 'default' | 'error';
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
declare const FormMessage: React.ForwardRefExoticComponent<FormMessageProps & React.RefAttributes<HTMLParagraphElement>>;
export { FormMessage };
export type { FormMessageProps };
