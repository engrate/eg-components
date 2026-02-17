import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const datePickerTriggerVariants: (props?: ({
    variant?: "default" | "error" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface DatePickerProps extends VariantProps<typeof datePickerTriggerVariants> {
    /** The currently selected date */
    value?: Date | null;
    /** Callback when the date changes */
    onChange?: (date: Date | null) => void;
    /** Placeholder text when no date is selected */
    placeholder?: string;
    /** Date format string (supports MM, dd, yyyy) */
    format?: string;
    /** Minimum selectable date */
    minDate?: Date;
    /** Maximum selectable date */
    maxDate?: Date;
    /** Whether the date picker is disabled */
    disabled?: boolean;
    /** Additional class name for the trigger */
    className?: string;
    /** ID for the trigger element */
    id?: string;
    /** Name attribute for form integration */
    name?: string;
    /** aria-label for accessibility */
    'aria-label'?: string;
    /** aria-describedby for accessibility */
    'aria-describedby'?: string;
}
/**
 * DatePicker component following Engrate brand guidelines.
 * Features a calendar popup with month/year navigation and accessible keyboard controls.
 *
 * @example
 * ```tsx
 * const [date, setDate] = useState<Date | null>(null)
 * <DatePicker value={date} onChange={setDate} placeholder="Select a date" />
 * ```
 */
declare const DatePicker: React.ForwardRefExoticComponent<DatePickerProps & React.RefAttributes<HTMLButtonElement>>;
export { DatePicker, datePickerTriggerVariants };
export type { DatePickerProps };
