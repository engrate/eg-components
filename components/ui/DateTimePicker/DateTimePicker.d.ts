import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const dateTimePickerTriggerVariants: (props?: ({
    variant?: "default" | "error" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const calendarDayVariants: (props?: ({
    state?: "default" | "disabled" | "selected" | "today" | "outside" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface DateTimePickerProps extends VariantProps<typeof dateTimePickerTriggerVariants> {
    /** The currently selected date and time */
    value?: Date | null;
    /** Callback when the date/time changes */
    onChange?: (date: Date | null) => void;
    /** Placeholder text when no date is selected */
    placeholder?: string;
    /** Date/time format string (supports MM, dd, yyyy, HH, hh, mm, a) */
    format?: string;
    /** Minimum selectable date */
    minDate?: Date;
    /** Maximum selectable date */
    maxDate?: Date;
    /** Whether the date time picker is disabled */
    disabled?: boolean;
    /** Additional class name for the trigger */
    className?: string;
    /** ID for the trigger element */
    id?: string;
    /** Name attribute for form integration */
    name?: string;
    /** Use 24-hour format for time (default: true) */
    use24Hour?: boolean;
    /** Step for minutes (default: 1) */
    minuteStep?: number;
    /** aria-label for accessibility */
    'aria-label'?: string;
    /** aria-describedby for accessibility */
    'aria-describedby'?: string;
}
/**
 * DateTimePicker component following Engrate brand guidelines.
 * Features a calendar popup with time selection and accessible keyboard controls.
 *
 * @example
 * ```tsx
 * const [dateTime, setDateTime] = useState<Date | null>(null)
 * <DateTimePicker value={dateTime} onChange={setDateTime} placeholder="Select date and time" />
 * ```
 */
declare const DateTimePicker: React.ForwardRefExoticComponent<DateTimePickerProps & React.RefAttributes<HTMLButtonElement>>;
export { DateTimePicker, dateTimePickerTriggerVariants, calendarDayVariants as dateTimePickerCalendarDayVariants, };
export type { DateTimePickerProps };
