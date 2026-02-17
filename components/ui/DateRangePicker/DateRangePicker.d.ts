import { VariantProps } from 'class-variance-authority';
import { DateRange } from 'react-day-picker';
import * as React from 'react';
declare const dateRangePickerTriggerVariants: (props?: ({
    variant?: "default" | "error" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface DateRangePickerProps extends VariantProps<typeof dateRangePickerTriggerVariants> {
    /** The currently selected date range */
    value?: DateRange;
    /** Callback when the date range changes */
    onChange?: (range: DateRange | undefined) => void;
    /** Placeholder text when no date range is selected */
    placeholder?: string;
    /** Date format string (supports MM, dd, yyyy) */
    format?: string;
    /** Minimum selectable date */
    minDate?: Date;
    /** Maximum selectable date */
    maxDate?: Date;
    /** Whether the date range picker is disabled */
    disabled?: boolean;
    /** Number of months to display side by side (default: 2) */
    numberOfMonths?: number;
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
 * DateRangePicker component following Engrate brand guidelines.
 * Features a two-month calendar popup for selecting a date range with accessible keyboard controls.
 *
 * @example
 * ```tsx
 * const [range, setRange] = useState<DateRange | undefined>()
 * <DateRangePicker value={range} onChange={setRange} placeholder="Select date range" />
 * ```
 */
declare const DateRangePicker: React.ForwardRefExoticComponent<DateRangePickerProps & React.RefAttributes<HTMLButtonElement>>;
export { DateRangePicker, dateRangePickerTriggerVariants };
export type { DateRangePickerProps, DateRange };
