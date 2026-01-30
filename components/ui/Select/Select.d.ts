import * as SelectPrimitive from '@radix-ui/react-select';
import * as React from 'react';
declare const Select: React.FC<SelectPrimitive.SelectProps>;
declare const SelectGroup: React.ForwardRefExoticComponent<SelectPrimitive.SelectGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const SelectValue: React.ForwardRefExoticComponent<SelectPrimitive.SelectValueProps & React.RefAttributes<HTMLSpanElement>>;
interface SelectTriggerProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> {
    variant?: 'default' | 'error';
}
/**
 * Select trigger button following Engrate brand guidelines.
 * Features rounded corners, subtle background, and sunflower focus ring.
 */
declare const SelectTrigger: React.ForwardRefExoticComponent<SelectTriggerProps & React.RefAttributes<HTMLButtonElement>>;
/**
 * Scrollable upward button for Select content.
 */
declare const SelectScrollUpButton: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollUpButtonProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
/**
 * Scrollable downward button for Select content.
 */
declare const SelectScrollDownButton: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollDownButtonProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
/**
 * Select dropdown content following Engrate brand guidelines.
 */
declare const SelectContent: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
/**
 * Select label for grouping items.
 */
declare const SelectLabel: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
/**
 * Individual select option following Engrate brand guidelines.
 */
declare const SelectItem: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
/**
 * Separator between select items.
 */
declare const SelectSeparator: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export { Select, SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectLabel, SelectItem, SelectSeparator, SelectScrollUpButton, SelectScrollDownButton, };
export type { SelectTriggerProps };
