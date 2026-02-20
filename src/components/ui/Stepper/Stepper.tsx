'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import { Check } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'

/* -------------------------------------------------------------------------------------------------
 * Stepper Context
 * -----------------------------------------------------------------------------------------------*/

interface StepperContextValue {
  activeStep: number
  orientation: 'horizontal' | 'vertical'
  totalSteps: number
  setTotalSteps: React.Dispatch<React.SetStateAction<number>>
}

const StepperContext = React.createContext<StepperContextValue | null>(null)

function useStepperContext() {
  const context = React.useContext(StepperContext)
  if (!context) {
    throw new Error('Stepper components must be used within a Stepper')
  }
  return context
}

/* -------------------------------------------------------------------------------------------------
 * StepperItem Context
 * -----------------------------------------------------------------------------------------------*/

interface StepperItemContextValue {
  step: number
  state: 'completed' | 'active' | 'inactive'
  isLastStep: boolean
}

const StepperItemContext = React.createContext<StepperItemContextValue | null>(
  null
)

function useStepperItemContext() {
  const context = React.useContext(StepperItemContext)
  if (!context) {
    throw new Error(
      'StepperItem child components must be used within a StepperItem'
    )
  }
  return context
}

/* -------------------------------------------------------------------------------------------------
 * Stepper (Root)
 * -----------------------------------------------------------------------------------------------*/

const stepperVariants = cva('flex', {
  variants: {
    orientation: {
      horizontal: 'flex-row items-start',
      vertical: 'flex-col',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})

/* -------------------------------------------------------------------------------------------------
 * Mini variant styles
 * -----------------------------------------------------------------------------------------------*/

const miniStepperVariants = cva('inline-flex items-center font-sans', {
  variants: {
    size: {
      sm: 'gap-1',
      default: 'gap-1.5',
      lg: 'gap-2',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

const miniStepperIndicatorVariants = cva(
  'inline-flex shrink-0 items-center justify-center rounded-full transition-colors',
  {
    variants: {
      size: {
        sm: 'h-5 w-5 text-[10px]',
        default: 'h-6 w-6 text-[11px]',
        lg: 'h-7 w-7 text-xs',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

const miniStepperSeparatorVariants = cva('transition-colors', {
  variants: {
    size: {
      sm: 'h-0.5 w-3',
      default: 'h-0.5 w-4',
      lg: 'h-0.5 w-5',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

interface StepperProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stepperVariants> {
  /** Visual style — `"default"` for compound component, `"mini"` for inline compact stepper */
  variant?: 'default' | 'mini'
  /** The current active step (1-indexed) */
  activeStep?: number
  /** Orientation of the stepper (default variant only) */
  orientation?: 'horizontal' | 'vertical'
  /** Total number of steps (mini variant only) */
  totalSteps?: number
  /** Indicator size (mini variant only) */
  size?: 'sm' | 'default' | 'lg' | null
  /** Labels for each step, used as aria-label (mini variant only) */
  labels?: string[]
  /** Callback when a step indicator is clicked (mini variant only) */
  onStepClick?: (step: number) => void
}

/**
 * Root container for the stepper component.
 * Displays progress through a multi-step process.
 *
 * Use `variant="default"` (or omit) for a compound component with titles/descriptions.
 * Use `variant="mini"` for a compact inline stepper with numbered dots and connectors.
 *
 * @example
 * ```tsx
 * // Default — compound component
 * <Stepper activeStep={2}>
 *   <StepperItem step={1}>
 *     <StepperTrigger>
 *       <StepperIndicator />
 *       <StepperTitle>Step 1</StepperTitle>
 *     </StepperTrigger>
 *     <StepperSeparator />
 *   </StepperItem>
 *   <StepperItem step={2}>
 *     <StepperTrigger>
 *       <StepperIndicator />
 *       <StepperTitle>Step 2</StepperTitle>
 *     </StepperTrigger>
 *   </StepperItem>
 * </Stepper>
 *
 * // Mini — compact inline
 * <Stepper variant="mini" totalSteps={4} activeStep={2} />
 * <Stepper variant="mini" totalSteps={3} activeStep={2} size="sm" labels={['A','B','C']} />
 * ```
 */
const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  (
    {
      className,
      variant = 'default',
      activeStep = 1,
      orientation = 'horizontal',
      totalSteps: totalStepsProp,
      size,
      labels,
      onStepClick,
      children,
      ...props
    },
    ref
  ) => {
    // Hooks must be called unconditionally (rules of hooks)
    const [totalSteps, setTotalSteps] = React.useState(0)

    const contextValue = React.useMemo(
      () => ({ activeStep, orientation, totalSteps, setTotalSteps }),
      [activeStep, orientation, totalSteps]
    )

    /* ---- Mini variant ---- */
    if (variant === 'mini') {
      const count = totalStepsProp ?? 0
      const steps = Array.from({ length: count }, (_, i) => i + 1)

      return (
        <div
          ref={ref}
          role="group"
          aria-label="Progress"
          className={cn(miniStepperVariants({ size }), className)}
          {...props}
        >
          {steps.map((step) => {
            const state: 'completed' | 'active' | 'inactive' =
              step < activeStep
                ? 'completed'
                : step === activeStep
                  ? 'active'
                  : 'inactive'

            const label = labels?.[step - 1] ?? `Step ${step}`
            const isLast = step === count

            return (
              <React.Fragment key={step}>
                <button
                  type="button"
                  aria-current={state === 'active' ? 'step' : undefined}
                  aria-label={label}
                  data-state={state}
                  disabled={!onStepClick}
                  onClick={() => onStepClick?.(step)}
                  className={cn(
                    miniStepperIndicatorVariants({ size }),
                    'focus-visible:ring-sunflower focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
                    onStepClick
                      ? 'cursor-pointer'
                      : 'cursor-default disabled:opacity-100',
                    state === 'completed' && 'bg-sunflower text-primary',
                    state === 'active' &&
                      'border-sunflower text-primary border-2',
                    state === 'inactive' &&
                      'border-border text-tertiary border-2'
                  )}
                >
                  {state === 'completed' ? (
                    <Check
                      className={cn(
                        size === 'sm' && 'h-2.5 w-2.5',
                        size === 'lg' && 'h-3.5 w-3.5',
                        (!size || size === 'default') && 'h-3 w-3'
                      )}
                      strokeWidth={3}
                    />
                  ) : (
                    step
                  )}
                </button>
                {!isLast && (
                  <div
                    aria-hidden="true"
                    className={cn(
                      miniStepperSeparatorVariants({ size }),
                      step < activeStep ? 'bg-sunflower' : 'bg-border'
                    )}
                  />
                )}
              </React.Fragment>
            )
          })}
        </div>
      )
    }

    /* ---- Default variant (compound component) ---- */
    return (
      <StepperContext.Provider value={contextValue}>
        <div
          ref={ref}
          role="group"
          aria-label="Progress"
          data-orientation={orientation}
          className={cn('w-full', className)}
          {...props}
        >
          <div className={cn(stepperVariants({ orientation }))}>{children}</div>
          {orientation === 'horizontal' && totalSteps > 0 && (
            <div className="text-tertiary text-body-sm mt-4 text-center font-sans">
              Step {Math.min(activeStep, totalSteps)} of {totalSteps}
            </div>
          )}
        </div>
      </StepperContext.Provider>
    )
  }
)
Stepper.displayName = 'Stepper'

/* -------------------------------------------------------------------------------------------------
 * StepperItem
 * -----------------------------------------------------------------------------------------------*/

const stepperItemVariants = cva('group relative', {
  variants: {
    orientation: {
      horizontal: 'flex flex-1 flex-col items-center',
      vertical: 'flex flex-col',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})

interface StepperItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Step number (1-indexed) */
  step: number
}

/**
 * Individual step item. Wraps the trigger, separator, and any content.
 */
const StepperItem = React.forwardRef<HTMLDivElement, StepperItemProps>(
  ({ className, step, children, ...props }, ref) => {
    const { activeStep, orientation, totalSteps, setTotalSteps } =
      useStepperContext()

    const state: 'completed' | 'active' | 'inactive' =
      step < activeStep
        ? 'completed'
        : step === activeStep
          ? 'active'
          : 'inactive'

    // Register step count
    React.useEffect(() => {
      setTotalSteps((prev: number) => Math.max(prev, step))
    }, [step, setTotalSteps])

    const isLastStep = step === totalSteps

    const itemContext = React.useMemo(
      () => ({ step, state, isLastStep }),
      [step, state, isLastStep]
    )

    return (
      <StepperItemContext.Provider value={itemContext}>
        <div
          ref={ref}
          data-state={state}
          data-step={step}
          data-orientation={orientation}
          className={cn(stepperItemVariants({ orientation }), className)}
          {...props}
        >
          {children}
        </div>
      </StepperItemContext.Provider>
    )
  }
)
StepperItem.displayName = 'StepperItem'

/* -------------------------------------------------------------------------------------------------
 * StepperTrigger
 * -----------------------------------------------------------------------------------------------*/

const stepperTriggerVariants = cva(
  'focus-visible:ring-sunflower flex items-center gap-3 text-left font-sans transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      orientation: {
        horizontal: 'flex-col items-center gap-2 text-center',
        vertical: 'flex-row',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
    },
  }
)

interface StepperTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

/**
 * Clickable trigger for a step. Contains the indicator and labels.
 */
const StepperTrigger = React.forwardRef<HTMLButtonElement, StepperTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const { orientation } = useStepperContext()
    const { state } = useStepperItemContext()

    return (
      <button
        ref={ref}
        type="button"
        aria-current={state === 'active' ? 'step' : undefined}
        data-state={state}
        className={cn(stepperTriggerVariants({ orientation }), className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)
StepperTrigger.displayName = 'StepperTrigger'

/* -------------------------------------------------------------------------------------------------
 * StepperIndicator
 * -----------------------------------------------------------------------------------------------*/

const stepperIndicatorVariants = cva(
  'text-body-sm inline-flex shrink-0 items-center justify-center rounded-full font-sans transition-colors',
  {
    variants: {
      size: {
        sm: 'h-7 w-7',
        default: 'h-9 w-9',
        lg: 'h-11 w-11',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

interface StepperIndicatorProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof stepperIndicatorVariants> {}

/**
 * Visual indicator showing the step number or completion state.
 * Automatically shows a check icon for completed steps.
 */
const StepperIndicator = React.forwardRef<
  HTMLSpanElement,
  StepperIndicatorProps
>(({ className, size, children, ...props }, ref) => {
  const { state, step } = useStepperItemContext()

  return (
    <span
      ref={ref}
      data-state={state}
      className={cn(
        stepperIndicatorVariants({ size }),
        state === 'completed' && 'bg-sunflower text-primary',
        state === 'active' && 'border-sunflower text-primary border-2',
        state === 'inactive' && 'border-border text-tertiary border-2',
        className
      )}
      aria-hidden="true"
      {...props}
    >
      {state === 'completed' ? (
        <Check className="h-4 w-4" />
      ) : (
        (children ?? step)
      )}
    </span>
  )
})
StepperIndicator.displayName = 'StepperIndicator'

/* -------------------------------------------------------------------------------------------------
 * StepperTitle
 * -----------------------------------------------------------------------------------------------*/

interface StepperTitleProps extends React.HTMLAttributes<HTMLSpanElement> {}

/**
 * Title text for a step.
 */
const StepperTitle = React.forwardRef<HTMLSpanElement, StepperTitleProps>(
  ({ className, ...props }, ref) => {
    const { state } = useStepperItemContext()

    return (
      <span
        ref={ref}
        data-state={state}
        className={cn(
          'text-body-sm font-sans font-medium tracking-tight',
          state === 'inactive' ? 'text-tertiary' : 'text-primary',
          className
        )}
        {...props}
      />
    )
  }
)
StepperTitle.displayName = 'StepperTitle'

/* -------------------------------------------------------------------------------------------------
 * StepperDescription
 * -----------------------------------------------------------------------------------------------*/

interface StepperDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

/**
 * Description text for a step.
 */
const StepperDescription = React.forwardRef<
  HTMLParagraphElement,
  StepperDescriptionProps
>(({ className, ...props }, ref) => {
  const { state } = useStepperItemContext()

  return (
    <p
      ref={ref}
      data-state={state}
      className={cn(
        'text-small font-sans',
        state === 'inactive' ? 'text-quaternary' : 'text-secondary',
        className
      )}
      {...props}
    />
  )
})
StepperDescription.displayName = 'StepperDescription'

/* -------------------------------------------------------------------------------------------------
 * StepperSeparator
 * -----------------------------------------------------------------------------------------------*/

const stepperSeparatorVariants = cva('transition-colors', {
  variants: {
    orientation: {
      horizontal:
        'absolute top-[17px] right-[calc(-50%_+_24px)] left-[calc(50%_+_24px)] h-0.5',
      vertical: 'mt-1 mb-1 ml-4.5 min-h-8 w-0.5',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})

interface StepperSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * Separator line between steps. Indicates completion status.
 */
const StepperSeparator = React.forwardRef<
  HTMLDivElement,
  StepperSeparatorProps
>(({ className, ...props }, ref) => {
  const { orientation } = useStepperContext()
  const { state } = useStepperItemContext()

  return (
    <div
      ref={ref}
      role="separator"
      data-state={state}
      data-orientation={orientation}
      className={cn(
        stepperSeparatorVariants({ orientation }),
        state === 'completed' ? 'bg-sunflower' : 'bg-border',
        className
      )}
      aria-hidden="true"
      {...props}
    />
  )
})
StepperSeparator.displayName = 'StepperSeparator'

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/

export {
  Stepper,
  stepperVariants,
  miniStepperVariants,
  miniStepperIndicatorVariants,
  miniStepperSeparatorVariants,
  StepperItem,
  stepperItemVariants,
  StepperTrigger,
  stepperTriggerVariants,
  StepperIndicator,
  stepperIndicatorVariants,
  StepperTitle,
  StepperDescription,
  StepperSeparator,
  stepperSeparatorVariants,
}
export type {
  StepperProps,
  StepperItemProps,
  StepperTriggerProps,
  StepperIndicatorProps,
  StepperTitleProps,
  StepperDescriptionProps,
  StepperSeparatorProps,
}
