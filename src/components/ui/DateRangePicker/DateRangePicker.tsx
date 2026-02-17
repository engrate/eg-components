'use client'

import * as PopoverPrimitive from '@radix-ui/react-popover'
import { cva, type VariantProps } from 'class-variance-authority'
import { Calendar as CalendarIcon } from 'lucide-react'
import * as React from 'react'
import type { DateRange } from 'react-day-picker'

import { Calendar } from '@/components/ui/Calendar'
import { cn } from '@/lib/utils'

/* -------------------------------------------------------------------------------------------------
 * Helper Functions
 * -----------------------------------------------------------------------------------------------*/

function formatDate(
  date: Date | null | undefined,
  format = 'yyyy-MM-dd'
): string {
  if (!date) return ''
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const year = date.getFullYear()

  return format
    .replace('yyyy', String(year))
    .replace('MM', month)
    .replace('dd', day)
}

function formatRange(range: DateRange | undefined, format: string): string {
  if (!range?.from) return ''
  const fromStr = formatDate(range.from, format)
  if (!range.to) return `${fromStr} – ...`
  const toStr = formatDate(range.to, format)
  return `${fromStr} – ${toStr}`
}

/* -------------------------------------------------------------------------------------------------
 * DateRangePicker Variants
 * -----------------------------------------------------------------------------------------------*/

const dateRangePickerTriggerVariants = cva(
  [
    'bg-card text-body-sm text-primary placeholder:text-tertiary',
    'flex h-8 w-full items-center justify-between rounded-md border px-3 py-1',
    'font-sans transition-colors',
    'focus-visible:ring-sunflower focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
    'disabled:cursor-not-allowed disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        default: 'border-border',
        error: 'border-error',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

/* -------------------------------------------------------------------------------------------------
 * DateRangePicker
 * -----------------------------------------------------------------------------------------------*/

interface DateRangePickerProps extends VariantProps<
  typeof dateRangePickerTriggerVariants
> {
  /** The currently selected date range */
  value?: DateRange
  /** Callback when the date range changes */
  onChange?: (range: DateRange | undefined) => void
  /** Placeholder text when no date range is selected */
  placeholder?: string
  /** Date format string (supports MM, dd, yyyy) */
  format?: string
  /** Minimum selectable date */
  minDate?: Date
  /** Maximum selectable date */
  maxDate?: Date
  /** Whether the date range picker is disabled */
  disabled?: boolean
  /** Number of months to display side by side (default: 2) */
  numberOfMonths?: number
  /** Additional class name for the trigger */
  className?: string
  /** ID for the trigger element */
  id?: string
  /** Name attribute for form integration */
  name?: string
  /** aria-label for accessibility */
  'aria-label'?: string
  /** aria-describedby for accessibility */
  'aria-describedby'?: string
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
const DateRangePicker = React.forwardRef<
  HTMLButtonElement,
  DateRangePickerProps
>(
  (
    {
      value,
      onChange,
      placeholder = 'Select date range',
      format = 'MM/dd/yyyy',
      minDate,
      maxDate,
      disabled = false,
      numberOfMonths = 2,
      variant,
      className,
      id,
      name,
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedBy,
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false)
    const [month, setMonth] = React.useState<Date>(value?.from || new Date())

    // Build disabled matchers for min/max dates
    const disabledMatchers = React.useMemo(() => {
      const matchers: ({ before: Date } | { after: Date })[] = []
      if (minDate) matchers.push({ before: minDate })
      if (maxDate) matchers.push({ after: maxDate })
      return matchers.length > 0 ? matchers : undefined
    }, [minDate, maxDate])

    const handleSelect = (range: DateRange | undefined) => {
      onChange?.(range)
    }

    const handleTodayClick = () => {
      const today = new Date()
      onChange?.({ from: today, to: today })
    }

    const handleClearClick = () => {
      onChange?.(undefined)
    }

    // Update view month when value changes
    React.useEffect(() => {
      if (value?.from) {
        setMonth(value.from)
      }
    }, [value?.from])

    return (
      <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
        <PopoverPrimitive.Trigger asChild>
          <button
            ref={ref}
            id={id}
            type="button"
            disabled={disabled}
            className={cn(
              dateRangePickerTriggerVariants({ variant }),
              className
            )}
            aria-label={ariaLabel || 'Choose date range'}
            aria-describedby={ariaDescribedBy}
            aria-haspopup="dialog"
            aria-expanded={open}
          >
            <span className={cn('truncate', !value?.from && 'text-tertiary')}>
              {value?.from ? formatRange(value, format) : placeholder}
            </span>
            <CalendarIcon className="text-tertiary h-4 w-4 shrink-0" />
            {name && (
              <input
                type="hidden"
                name={name}
                value={
                  value?.from
                    ? `${formatDate(value.from, 'yyyy-MM-dd')}/${formatDate(value.to, 'yyyy-MM-dd')}`
                    : ''
                }
              />
            )}
          </button>
        </PopoverPrimitive.Trigger>

        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            className={cn(
              'bg-main border-border z-50 w-auto rounded-lg border p-4 shadow-lg',
              'data-[state=open]:animate-in data-[state=closed]:animate-out',
              'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
              'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
              'data-[side=bottom]:slide-in-from-top-2',
              'data-[side=top]:slide-in-from-bottom-2'
            )}
            sideOffset={4}
            align="start"
          >
            <Calendar
              mode="range"
              selected={value}
              onSelect={handleSelect}
              month={month}
              onMonthChange={setMonth}
              numberOfMonths={numberOfMonths}
              disabled={disabledMatchers}
            />

            {/* Footer */}
            <div className="border-border mt-4 flex items-center justify-between border-t pt-4">
              <button
                type="button"
                onClick={handleClearClick}
                className={cn(
                  'text-tertiary hover:text-secondary text-sm',
                  'transition-colors focus-visible:underline focus-visible:outline-none'
                )}
              >
                Clear
              </button>
              <button
                type="button"
                onClick={handleTodayClick}
                className={cn(
                  'text-sunflower hover:text-sunflower-hover text-sm font-medium',
                  'transition-colors focus-visible:underline focus-visible:outline-none'
                )}
              >
                Today
              </button>
            </div>
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    )
  }
)
DateRangePicker.displayName = 'DateRangePicker'

export { DateRangePicker, dateRangePickerTriggerVariants }
export type { DateRangePickerProps, DateRange }
