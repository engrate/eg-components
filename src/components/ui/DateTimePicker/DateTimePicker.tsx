'use client'

import * as PopoverPrimitive from '@radix-ui/react-popover'
import { cva, type VariantProps } from 'class-variance-authority'
import { Calendar as CalendarIcon, Clock } from 'lucide-react'
import * as React from 'react'

import { Calendar } from '@/components/ui/Calendar'
import { cn } from '@/lib/utils'

/* -------------------------------------------------------------------------------------------------
 * Helper Functions
 * -----------------------------------------------------------------------------------------------*/

function formatDateTime(
  date: Date | null,
  format = 'yyyy-MM-dd',
  use24Hour = true
): string {
  if (!date) return ''
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const year = date.getFullYear()
  const hours24 = date.getHours()
  const hours12 = hours24 % 12 || 12
  const hours = use24Hour
    ? String(hours24).padStart(2, '0')
    : String(hours12).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const ampm = hours24 >= 12 ? 'PM' : 'AM'

  return format
    .replace('yyyy', String(year))
    .replace('MM', month)
    .replace('dd', day)
    .replace('HH', String(hours24).padStart(2, '0'))
    .replace('hh', hours)
    .replace('mm', minutes)
    .replace('a', ampm)
}

function parseTimeString(timeStr: string): { hours: number; minutes: number } {
  const match = timeStr.match(/^(\d{1,2}):(\d{2})$/)
  if (match && match[1] && match[2]) {
    return {
      hours: Math.min(23, Math.max(0, parseInt(match[1], 10))),
      minutes: Math.min(59, Math.max(0, parseInt(match[2], 10))),
    }
  }
  return { hours: 0, minutes: 0 }
}

/* -------------------------------------------------------------------------------------------------
 * DateTimePicker Variants
 * -----------------------------------------------------------------------------------------------*/

const dateTimePickerTriggerVariants = cva(
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
 * DateTimePicker
 * -----------------------------------------------------------------------------------------------*/

interface DateTimePickerProps extends VariantProps<
  typeof dateTimePickerTriggerVariants
> {
  /** The currently selected date and time */
  value?: Date | null
  /** Callback when the date/time changes */
  onChange?: (date: Date | null) => void
  /** Placeholder text when no date is selected */
  placeholder?: string
  /** Date/time format string (supports MM, dd, yyyy, HH, hh, mm, a) */
  format?: string
  /** Minimum selectable date */
  minDate?: Date
  /** Maximum selectable date */
  maxDate?: Date
  /** Whether the date time picker is disabled */
  disabled?: boolean
  /** Additional class name for the trigger */
  className?: string
  /** ID for the trigger element */
  id?: string
  /** Name attribute for form integration */
  name?: string
  /** Use 24-hour format for time (default: true) */
  use24Hour?: boolean
  /** Step for minutes (default: 1) */
  minuteStep?: number
  /** aria-label for accessibility */
  'aria-label'?: string
  /** aria-describedby for accessibility */
  'aria-describedby'?: string
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
const DateTimePicker = React.forwardRef<HTMLButtonElement, DateTimePickerProps>(
  (
    {
      value,
      onChange,
      placeholder = 'Select date and time',
      format = 'yyyy-MM-dd HH:mm',
      minDate,
      maxDate,
      disabled = false,
      variant,
      className,
      id,
      name,
      use24Hour = true,
      minuteStep = 1,
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedBy,
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false)
    const [month, setMonth] = React.useState<Date>(value || new Date())
    const [timeValue, setTimeValue] = React.useState(() => {
      if (value) {
        return `${String(value.getHours()).padStart(2, '0')}:${String(value.getMinutes()).padStart(2, '0')}`
      }
      return '12:00'
    })

    // Build disabled matchers for min/max dates
    const disabledMatchers = React.useMemo(() => {
      const matchers: ({ before: Date } | { after: Date })[] = []
      if (minDate) matchers.push({ before: minDate })
      if (maxDate) matchers.push({ after: maxDate })
      return matchers.length > 0 ? matchers : undefined
    }, [minDate, maxDate])

    const handleDateSelect = (date: Date | undefined) => {
      if (!date) return
      const { hours, minutes } = parseTimeString(timeValue)
      const newDateTime = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        hours,
        minutes
      )
      onChange?.(newDateTime)
    }

    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newTime = e.target.value
      setTimeValue(newTime)

      if (value) {
        const { hours, minutes } = parseTimeString(newTime)
        const newDateTime = new Date(value)
        newDateTime.setHours(hours, minutes)
        onChange?.(newDateTime)
      }
    }

    const handleNow = () => {
      const now = new Date()
      setTimeValue(
        `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`
      )
      onChange?.(now)
      setOpen(false)
    }

    // Update view month and time when value changes
    React.useEffect(() => {
      if (value) {
        setMonth(value)
        setTimeValue(
          `${String(value.getHours()).padStart(2, '0')}:${String(value.getMinutes()).padStart(2, '0')}`
        )
      }
    }, [value])

    return (
      <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
        <PopoverPrimitive.Trigger asChild>
          <button
            ref={ref}
            id={id}
            type="button"
            disabled={disabled}
            className={cn(
              dateTimePickerTriggerVariants({ variant }),
              className
            )}
            aria-label={ariaLabel || 'Choose date and time'}
            aria-describedby={ariaDescribedBy}
            aria-haspopup="dialog"
            aria-expanded={open}
          >
            <span className={cn('truncate', !value && 'text-tertiary')}>
              {value ? formatDateTime(value, format, use24Hour) : placeholder}
            </span>
            <div className="flex items-center gap-1">
              <Clock className="text-tertiary h-4 w-4 shrink-0" />
              <CalendarIcon className="text-tertiary h-4 w-4 shrink-0" />
            </div>
            {name && (
              <input
                type="hidden"
                name={name}
                value={value ? value.toISOString() : ''}
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
              mode="single"
              selected={value ?? undefined}
              onSelect={handleDateSelect}
              month={month}
              onMonthChange={setMonth}
              disabled={disabledMatchers}
            />

            {/* Time Picker */}
            <div className="border-border mt-4 border-t pt-4">
              <div className="flex items-center gap-3">
                <label
                  htmlFor="time-input"
                  className="text-secondary text-sm font-medium"
                >
                  Time
                </label>
                <input
                  id="time-input"
                  type="time"
                  value={timeValue}
                  onChange={handleTimeChange}
                  step={minuteStep * 60}
                  className={cn(
                    'bg-card text-body-sm text-primary placeholder:text-body-sm border-border rounded-md border px-2 py-1',
                    'focus-visible:ring-sunflower focus-visible:ring-2 focus-visible:outline-none'
                  )}
                  aria-label="Select time"
                />
              </div>
            </div>

            {/* Now Button */}
            <div className="border-border mt-4 border-t pt-4">
              <button
                type="button"
                onClick={handleNow}
                className={cn(
                  'text-sunflower hover:text-sunflower-hover w-full text-center text-sm font-medium',
                  'transition-colors focus-visible:underline focus-visible:outline-none'
                )}
              >
                Now
              </button>
            </div>
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    )
  }
)
DateTimePicker.displayName = 'DateTimePicker'

export { DateTimePicker, dateTimePickerTriggerVariants }
export type { DateTimePickerProps }
