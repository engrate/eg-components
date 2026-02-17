import { DayPickerProps } from 'react-day-picker';
type CalendarProps = DayPickerProps & {
    /** Additional class name for the calendar root */
    className?: string;
};
/**
 * Calendar component built on react-day-picker, styled with Engrate design tokens.
 * Supports single date selection, range selection, and multiple date selection.
 *
 * @example
 * ```tsx
 * // Single date
 * <Calendar mode="single" selected={date} onSelect={setDate} />
 *
 * // Date range
 * <Calendar mode="range" selected={range} onSelect={setRange} />
 * ```
 */
declare function Calendar({ className, classNames, components, ...props }: CalendarProps): import("react/jsx-runtime").JSX.Element;
declare namespace Calendar {
    var displayName: string;
}
export { Calendar };
export type { CalendarProps };
