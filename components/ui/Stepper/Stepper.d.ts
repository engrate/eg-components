import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const stepperVariants: (props?: ({
    orientation?: "horizontal" | "vertical" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const miniStepperVariants: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const miniStepperIndicatorVariants: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const miniStepperSeparatorVariants: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface StepperProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof stepperVariants> {
    /** Visual style — `"default"` for compound component, `"mini"` for inline compact stepper */
    variant?: 'default' | 'mini';
    /** The current active step (1-indexed) */
    activeStep?: number;
    /** Orientation of the stepper (default variant only) */
    orientation?: 'horizontal' | 'vertical';
    /** Total number of steps (mini variant only) */
    totalSteps?: number;
    /** Indicator size (mini variant only) */
    size?: 'sm' | 'default' | 'lg' | null;
    /** Labels for each step, used as aria-label (mini variant only) */
    labels?: string[];
    /** Callback when a step indicator is clicked (mini variant only) */
    onStepClick?: (step: number) => void;
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
declare const Stepper: React.ForwardRefExoticComponent<StepperProps & React.RefAttributes<HTMLDivElement>>;
declare const stepperItemVariants: (props?: ({
    orientation?: "horizontal" | "vertical" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface StepperItemProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Step number (1-indexed) */
    step: number;
}
/**
 * Individual step item. Wraps the trigger, separator, and any content.
 */
declare const StepperItem: React.ForwardRefExoticComponent<StepperItemProps & React.RefAttributes<HTMLDivElement>>;
declare const stepperTriggerVariants: (props?: ({
    orientation?: "horizontal" | "vertical" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface StepperTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}
/**
 * Clickable trigger for a step. Contains the indicator and labels.
 */
declare const StepperTrigger: React.ForwardRefExoticComponent<StepperTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const stepperIndicatorVariants: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface StepperIndicatorProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof stepperIndicatorVariants> {
}
/**
 * Visual indicator showing the step number or completion state.
 * Automatically shows a check icon for completed steps.
 */
declare const StepperIndicator: React.ForwardRefExoticComponent<StepperIndicatorProps & React.RefAttributes<HTMLSpanElement>>;
interface StepperTitleProps extends React.HTMLAttributes<HTMLSpanElement> {
}
/**
 * Title text for a step.
 */
declare const StepperTitle: React.ForwardRefExoticComponent<StepperTitleProps & React.RefAttributes<HTMLSpanElement>>;
interface StepperDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
}
/**
 * Description text for a step.
 */
declare const StepperDescription: React.ForwardRefExoticComponent<StepperDescriptionProps & React.RefAttributes<HTMLParagraphElement>>;
declare const stepperSeparatorVariants: (props?: ({
    orientation?: "horizontal" | "vertical" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface StepperSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
}
/**
 * Separator line between steps. Indicates completion status.
 */
declare const StepperSeparator: React.ForwardRefExoticComponent<StepperSeparatorProps & React.RefAttributes<HTMLDivElement>>;
export { Stepper, stepperVariants, miniStepperVariants, miniStepperIndicatorVariants, miniStepperSeparatorVariants, StepperItem, stepperItemVariants, StepperTrigger, stepperTriggerVariants, StepperIndicator, stepperIndicatorVariants, StepperTitle, StepperDescription, StepperSeparator, stepperSeparatorVariants, };
export type { StepperProps, StepperItemProps, StepperTriggerProps, StepperIndicatorProps, StepperTitleProps, StepperDescriptionProps, StepperSeparatorProps, };
