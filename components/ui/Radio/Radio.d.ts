import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as React from 'react';
/**
 * Radio group container component.
 * Built on Radix UI RadioGroup for accessibility.
 *
 * @example
 * ```tsx
 * <RadioGroup defaultValue="option1">
 *   <RadioGroupItem value="option1" id="option1" />
 *   <RadioGroupItem value="option2" id="option2" />
 * </RadioGroup>
 * ```
 */
declare const RadioGroup: React.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
interface RadioGroupItemProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
}
/**
 * Radio group item component following Engrate brand guidelines.
 * Features sunflower accent when selected.
 *
 * @example
 * ```tsx
 * <RadioGroupItem value="option1" id="option1" />
 * ```
 */
declare const RadioGroupItem: React.ForwardRefExoticComponent<RadioGroupItemProps & React.RefAttributes<HTMLButtonElement>>;
export { RadioGroup, RadioGroupItem };
export type { RadioGroupItemProps };
