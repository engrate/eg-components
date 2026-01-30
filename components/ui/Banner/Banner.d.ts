import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const bannerVariants: (props?: ({
    variant?: "error" | "info" | "success" | "warning" | "neutral" | null | undefined;
    align?: "left" | "center" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface BannerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof bannerVariants> {
    /** Render as a child component (for use with custom wrappers) */
    asChild?: boolean;
    /** Optional icon to display before the content */
    icon?: React.ReactNode;
    /** Optional action element (button, link, etc.) to display at the end */
    action?: React.ReactNode;
    /** Called when the dismiss button is clicked */
    onDismiss?: () => void;
}
/**
 * Banner component for displaying important messages, announcements, or alerts.
 * Typically used at the top of a page or section to convey critical information.
 *
 * @example
 * ```tsx
 * <Banner variant="info">New feature available!</Banner>
 * <Banner variant="success" onDismiss={() => {}}>Your changes have been saved.</Banner>
 * <Banner variant="warning" icon={<WarningIcon />}>Please review your settings.</Banner>
 * <Banner variant="error" action={<Button size="sm">Retry</Button>}>Connection failed.</Banner>
 * ```
 */
declare const Banner: React.ForwardRefExoticComponent<BannerProps & React.RefAttributes<HTMLDivElement>>;
export { Banner, bannerVariants };
export type { BannerProps };
