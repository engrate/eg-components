'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  DayPicker,
  getDefaultClassNames,
  type DayPickerProps,
} from 'react-day-picker'

import { cn } from '@/lib/utils'

/* -------------------------------------------------------------------------------------------------
 * Calendar
 * -----------------------------------------------------------------------------------------------*/

type CalendarProps = DayPickerProps & {
  /** Additional class name for the calendar root */
  className?: string
}

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
function Calendar({
  className,
  classNames,
  components,
  ...props
}: CalendarProps) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays
      fixedWeeks
      className={cn('font-sans', className)}
      classNames={{
        root: cn(defaultClassNames.root),
        months: cn('relative flex flex-row gap-4', defaultClassNames.months),
        month: cn(defaultClassNames.month),
        month_caption: cn(
          'flex h-9 items-center justify-center',
          defaultClassNames.month_caption
        ),
        caption_label: cn(
          'text-primary text-sm font-medium',
          defaultClassNames.caption_label
        ),
        nav: cn(
          'absolute inset-x-0 top-0 z-10 flex h-9 items-center justify-between px-0.5'
        ),
        button_previous: cn(
          'hover:bg-alt focus-visible:ring-sunflower inline-flex h-7 w-7 items-center justify-center rounded-full',
          'transition-colors focus-visible:ring-2 focus-visible:outline-none'
        ),
        button_next: cn(
          'hover:bg-alt focus-visible:ring-sunflower inline-flex h-7 w-7 items-center justify-center rounded-full',
          'transition-colors focus-visible:ring-2 focus-visible:outline-none'
        ),
        weekday: cn(
          'text-tertiary w-9 text-center text-xs font-medium',
          defaultClassNames.weekday
        ),
        weekdays: cn(defaultClassNames.weekdays),
        week: cn(defaultClassNames.week),
        day: cn('relative p-0 text-center', defaultClassNames.day),
        day_button: cn(
          'inline-flex h-9 w-9 items-center justify-center rounded-full text-sm',
          'transition-colors focus-visible:outline-none',
          'focus-visible:ring-sunflower focus-visible:ring-2 focus-visible:ring-offset-1',
          'hover:bg-sunflower text-primary',
          defaultClassNames.day_button
        ),
        today: cn(
          '[&>button]:border-sunflower [&>button]:border',
          defaultClassNames.today
        ),
        selected: cn(
          '[&>button]:bg-sunflower [&>button]:text-primary [&>button]:hover:bg-sunflower [&>button]:font-medium',
          defaultClassNames.selected
        ),
        range_start: cn(
          '[&>button]:bg-sunflower [&>button]:text-primary [&>button]:rounded-full [&>button]:font-medium',
          'bg-lemon-meringue rounded-l-full',
          defaultClassNames.range_start
        ),
        range_middle: cn(
          'bg-lemon-meringue [&>button]:text-primary [&>button]:hover:bg-sunflower/30 [&>button]:rounded-none [&>button]:bg-transparent',
          'rounded-none',
          defaultClassNames.range_middle
        ),
        range_end: cn(
          '[&>button]:bg-sunflower [&>button]:text-primary [&>button]:rounded-full [&>button]:font-medium',
          'bg-lemon-meringue rounded-r-full',
          defaultClassNames.range_end
        ),
        outside: cn(
          '[&>button]:text-tertiary [&>button]:opacity-50',
          defaultClassNames.outside
        ),
        disabled: cn(
          '[&>button]:text-tertiary [&>button]:cursor-not-allowed [&>button]:opacity-50 [&>button]:hover:bg-transparent',
          defaultClassNames.disabled
        ),
        hidden: cn('invisible', defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation, ...chevronProps }) => {
          const Icon = orientation === 'left' ? ChevronLeft : ChevronRight
          return <Icon className="h-4 w-4" {...chevronProps} />
        },
        ...components,
      }}
      {...props}
    />
  )
}
Calendar.displayName = 'Calendar'

export { Calendar }
export type { CalendarProps }
