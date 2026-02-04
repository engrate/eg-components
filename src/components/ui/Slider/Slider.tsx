'use client'

import * as SliderPrimitive from '@radix-ui/react-slider'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const sliderVariants = cva(
  'relative flex w-full touch-none items-center select-none',
  {
    variants: {
      size: {
        sm: '[--slider-thumb-size:theme(spacing.3)] [--slider-track-height:theme(spacing.1)]',
        default:
          '[--slider-thumb-size:theme(spacing.4)] [--slider-track-height:theme(spacing.2)]',
        lg: '[--slider-thumb-size:theme(spacing.5)] [--slider-track-height:theme(spacing.3)]',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

interface SliderProps
  extends
    React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
    VariantProps<typeof sliderVariants> {}

/**
 * Slider component following Engrate brand guidelines.
 * Built on Radix UI Slider for accessibility.
 * Features sunflower fill for the active range.
 *
 * @example
 * ```tsx
 * <Slider defaultValue={[50]} max={100} />
 * <Slider defaultValue={[25, 75]} max={100} /> // Range slider
 * <Slider size="lg" step={10} />
 * ```
 */
const Slider = React.forwardRef<
  React.ComponentRef<typeof SliderPrimitive.Root>,
  SliderProps
>(
  (
    {
      className,
      size,
      defaultValue = [0],
      value,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
      ...props
    },
    ref
  ) => {
    // Determine number of thumbs based on value or defaultValue
    const thumbCount = value?.length ?? defaultValue?.length ?? 1

    return (
      <SliderPrimitive.Root
        ref={ref}
        defaultValue={defaultValue}
        value={value}
        className={cn(sliderVariants({ size }), className)}
        {...props}
      >
        <SliderPrimitive.Track
          className={cn(
            'bg-border relative h-[var(--slider-track-height)] w-full grow overflow-hidden rounded-full'
          )}
        >
          <SliderPrimitive.Range className="bg-sunflower absolute h-full" />
        </SliderPrimitive.Track>
        {Array.from({ length: thumbCount }).map((_, index) => (
          <SliderPrimitive.Thumb
            key={index}
            aria-label={ariaLabel}
            aria-labelledby={ariaLabelledby}
            className={cn(
              'border-sunflower block h-[var(--slider-thumb-size)] w-[var(--slider-thumb-size)] rounded-full border-2 bg-white shadow-md transition-colors',
              'focus-visible:ring-sunflower focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
              'disabled:pointer-events-none disabled:opacity-50',
              'hover:border-sunflower-hover'
            )}
          />
        ))}
      </SliderPrimitive.Root>
    )
  }
)
Slider.displayName = 'Slider'

export { Slider, sliderVariants }
export type { SliderProps }
