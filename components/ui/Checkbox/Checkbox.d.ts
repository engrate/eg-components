import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as React from 'react';
interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
}
/**
 * Checkbox component following Engrate brand guidelines.
 * Built on Radix UI Checkbox for accessibility.
 * Features sunflower accent when checked.
 *
 * @example
 * ```tsx
 * <Checkbox id="terms" />
 * <Checkbox checked disabled />
 * ```
 */
declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLButtonElement>>;
export { Checkbox };
export type { CheckboxProps };
