'use client'

import * as PopoverPrimitive from '@radix-ui/react-popover'
import { cva, type VariantProps } from 'class-variance-authority'
import { Calendar as CalendarIcon } from 'lucide-react'
import * as React from 'react'

import { Calendar } from '@/components/ui/Calendar'
import { cn } from '@/lib/utils'

/* -------------------------------------------------------------------------------------------------
 * Helper Functions
 * -----------------------------------------------------------------------------------------------*/

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
    const [month, setMonth] = React.useState<Date>(value || new Date())

    // Build disabled matchers for min/max dates
    const disabledMatchers = React.useMemo(() => {
      const matchers: ({ before: Date } | { after: Date })[] = []
      if (minDate) matchers.push({ before: minDate })
      if (maxDate) matchers.push({ after: maxDate })
      return matchers.length > 0 ? matchers : undefined
    }, [minDate, maxDate])

    const handleSelect = (date: Date | undefined) => {
      onChange?.(date ?? null)
      if (date) {
        setOpen(false)
      }
    }

    const handleTodayClick = () => {
      const today = new Date()
      onChange?.(today)
      setOpen(false)
    }

    // Update view month when value changes
    React.useEffect(() => {
      if (value) {
        setMonth(value)
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
            <span className={cn('truncate', !value && 'text-tertiary')}>
              {value ? formatDate(value, format) : placeholder}
            </span>
            <CalendarIcon className="text-tertiary h-4 w-4 shrink-0" />
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
            <Calendar
              mode="single"
              selected={value ?? undefined}
              onSelect={handleSelect}
              month={month}
              onMonthChange={setMonth}
              disabled={disabledMatchers}
            />

            {/* Today Button */}
            <div className="border-border mt-4 border-t pt-4">
              <button
                type="button"
                onClick={handleTodayClick}
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

export { DatePicker, datePickerTriggerVariants }
export type { DatePickerProps }
