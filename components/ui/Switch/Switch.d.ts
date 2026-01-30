import * as SwitchPrimitive from '@radix-ui/react-switch';
import * as React from 'react';
interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
}
/**
 * Switch component following Engrate brand guidelines.
 * Built on Radix UI Switch for accessibility.
 * Features sunflower background when on.
 *
 * @example
 * ```tsx
 * <Switch id="notifications" />
 * <Switch defaultChecked />
 * ```
 */
declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLButtonElement>>;
export { Switch };
export type { SwitchProps };
