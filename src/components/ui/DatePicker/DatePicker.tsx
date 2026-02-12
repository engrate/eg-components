'use client'

import * as PopoverPrimitive from '@radix-ui/react-popover'
import { cva, type VariantProps } from 'class-variance-authority'
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'

/* -------------------------------------------------------------------------------------------------
 * Calendar Helper Functions
 * -----------------------------------------------------------------------------------------------*/

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay()
}

function isSameDay(date1: Date | null, date2: Date): boolean {
  if (!date1) return false
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  )
}

function isToday(date: Date): boolean {
  return isSameDay(new Date(), date)
}

function formatDate(date: Date | null, format = 'yyyy-MM-dd'): string {
  if (!date) return ''
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const year = date.getFullYear()

  return format
    .replace('yyyy', String(year))
    .replace('MM', month)
    .replace('dd', day)
}

/* -------------------------------------------------------------------------------------------------
 * DatePicker Variants
 * -----------------------------------------------------------------------------------------------*/

const datePickerTriggerVariants = cva(
  [
    'bg-card text-body text-primary placeholder:text-tertiary',
    'flex h-10 w-full items-center justify-between rounded-md border px-3 py-2',
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

const calendarDayVariants = cva(
  [
    'inline-flex h-9 w-9 items-center justify-center rounded-full text-sm',
    'transition-colors focus-visible:outline-none',
    'focus-visible:ring-sunflower focus-visible:ring-2 focus-visible:ring-offset-1',
  ],
  {
    variants: {
      state: {
        default: 'hover:bg-sunflower text-primary',
        selected: 'bg-sunflower text-primary font-medium',
        today: 'hover:bg-sunflower border-sunflower text-primary border',
        disabled: 'text-tertiary cursor-not-allowed opacity-50',
        outside: 'text-tertiary opacity-50',
      },
    },
    defaultVariants: {
      state: 'default',
    },
  }
)

/* -------------------------------------------------------------------------------------------------
 * DatePicker
 * -----------------------------------------------------------------------------------------------*/

interface DatePickerProps extends VariantProps<
  typeof datePickerTriggerVariants
> {
  /** The currently selected date */
  value?: Date | null
  /** Callback when the date changes */
  onChange?: (date: Date | null) => void
  /** Placeholder text when no date is selected */
  placeholder?: string
  /** Date format string (supports MM, dd, yyyy) */
  format?: string
  /** Minimum selectable date */
  minDate?: Date
  /** Maximum selectable date */
  maxDate?: Date
  /** Whether the date picker is disabled */
  disabled?: boolean
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
 * DatePicker component following Engrate brand guidelines.
 * Features a calendar popup with month/year navigation and accessible keyboard controls.
 *
 * @example
 * ```tsx
 * const [date, setDate] = useState<Date | null>(null)
 * <DatePicker value={date} onChange={setDate} placeholder="Select a date" />
 * ```
 */
const DatePicker = React.forwardRef<HTMLButtonElement, DatePickerProps>(
  (
    {
      value,
      onChange,
      placeholder = 'Select a date',
      format = 'MM/dd/yyyy',
      minDate,
      maxDate,
      disabled = false,
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
    const [viewDate, setViewDate] = React.useState(() => value || new Date())

    const viewYear = viewDate.getFullYear()
    const viewMonth = viewDate.getMonth()
    const daysInMonth = getDaysInMonth(viewYear, viewMonth)
    const firstDayOfMonth = getFirstDayOfMonth(viewYear, viewMonth)

    // Generate calendar days
    const calendarDays = React.useMemo(() => {
      const days: { date: Date; isOutside: boolean }[] = []

      // Previous month days
      const prevMonth = viewMonth === 0 ? 11 : viewMonth - 1
      const prevYear = viewMonth === 0 ? viewYear - 1 : viewYear
      const daysInPrevMonth = getDaysInMonth(prevYear, prevMonth)

      for (let i = firstDayOfMonth - 1; i >= 0; i--) {
        days.push({
          date: new Date(prevYear, prevMonth, daysInPrevMonth - i),
          isOutside: true,
        })
      }

      // Current month days
      for (let day = 1; day <= daysInMonth; day++) {
        days.push({
          date: new Date(viewYear, viewMonth, day),
          isOutside: false,
        })
      }

      // Next month days
      const remainingDays = 42 - days.length // 6 rows * 7 days
      const nextMonth = viewMonth === 11 ? 0 : viewMonth + 1
      const nextYear = viewMonth === 11 ? viewYear + 1 : viewYear

      for (let day = 1; day <= remainingDays; day++) {
        days.push({
          date: new Date(nextYear, nextMonth, day),
          isOutside: true,
        })
      }

      return days
    }, [viewYear, viewMonth, daysInMonth, firstDayOfMonth])

    const handlePreviousMonth = () => {
      setViewDate(new Date(viewYear, viewMonth - 1, 1))
    }

    const handleNextMonth = () => {
      setViewDate(new Date(viewYear, viewMonth + 1, 1))
    }

    const handleDateSelect = (date: Date) => {
      onChange?.(date)
      setOpen(false)
    }

    const isDateDisabled = (date: Date): boolean => {
      if (minDate && date < new Date(minDate.setHours(0, 0, 0, 0))) {
        return true
      }
      if (maxDate && date > new Date(maxDate.setHours(23, 59, 59, 999))) {
        return true
      }
      return false
    }

    const getDayState = (
      date: Date,
      isOutside: boolean
    ): 'default' | 'selected' | 'today' | 'disabled' | 'outside' => {
      if (isDateDisabled(date)) return 'disabled'
      if (isOutside) return 'outside'
      if (value && isSameDay(value, date)) return 'selected'
      if (isToday(date)) return 'today'
      return 'default'
    }

    // Update view date when value changes
    React.useEffect(() => {
      if (value) {
        setViewDate(value)
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
            className={cn(datePickerTriggerVariants({ variant }), className)}
            aria-label={ariaLabel || 'Choose date'}
            aria-describedby={ariaDescribedBy}
            aria-haspopup="dialog"
            aria-expanded={open}
          >
            <span
              className={cn('truncate', !value && 'text-tertiary text-body-sm')}
            >
              {value ? formatDate(value, format) : placeholder}
            </span>
            <Calendar className="text-tertiary h-4 w-4 shrink-0" />
            {name && (
              <input
                type="hidden"
                name={name}
                value={value ? formatDate(value, 'yyyy-MM-dd') : ''}
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
            {/* Calendar Header */}
            <div className="mb-4 flex items-center justify-between">
              <button
                type="button"
                onClick={handlePreviousMonth}
                className={cn(
                  'hover:bg-alt focus-visible:ring-sunflower inline-flex h-8 w-8 items-center justify-center rounded-full',
                  'transition-colors focus-visible:ring-2 focus-visible:outline-none'
                )}
                aria-label="Previous month"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <span className="text-primary text-sm font-medium">
                {MONTHS[viewMonth]} {viewYear}
              </span>

              <button
                type="button"
                onClick={handleNextMonth}
                className={cn(
                  'hover:bg-alt focus-visible:ring-sunflower inline-flex h-8 w-8 items-center justify-center rounded-full',
                  'transition-colors focus-visible:ring-2 focus-visible:outline-none'
                )}
                aria-label="Next month"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            {/* Day of Week Headers */}
            <div className="mb-2 grid grid-cols-7 gap-1">
              {DAYS_OF_WEEK.map((day) => (
                <div
                  key={day}
                  className="text-tertiary text-center text-xs font-medium"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div
              className="grid grid-cols-7 gap-1"
              role="grid"
              aria-label={`${MONTHS[viewMonth]} ${viewYear}`}
            >
              {calendarDays.map(({ date, isOutside }, index) => {
                const state = getDayState(date, isOutside)
                const isDisabled = state === 'disabled'

                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => !isDisabled && handleDateSelect(date)}
                    disabled={isDisabled}
                    className={calendarDayVariants({ state })}
                    aria-label={date.toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                    aria-pressed={state === 'selected'}
                    tabIndex={isOutside ? -1 : 0}
                  >
                    {date.getDate()}
                  </button>
                )
              })}
            </div>

            {/* Today Button */}
            <div className="border-border mt-4 border-t pt-4">
              <button
                type="button"
                onClick={() => handleDateSelect(new Date())}
                className={cn(
                  'text-sunflower hover:text-sunflower-hover w-full text-center text-sm font-medium',
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
DatePicker.displayName = 'DatePicker'

export { DatePicker, datePickerTriggerVariants, calendarDayVariants }
export type { DatePickerProps }
