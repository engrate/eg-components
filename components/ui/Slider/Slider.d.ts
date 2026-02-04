import { VariantProps } from 'class-variance-authority';
import * as SliderPrimitive from '@radix-ui/react-slider';
import * as React from 'react';
declare const sliderVariants: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>, VariantProps<typeof sliderVariants> {
}
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
declare const Slider: React.ForwardRefExoticComponent<SliderProps & React.RefAttributes<HTMLSpanElement>>;
export { Slider, sliderVariants };
export type { SliderProps };
