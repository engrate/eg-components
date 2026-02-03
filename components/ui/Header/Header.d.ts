import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const headerVariants: (props?: ({
    variant?: "default" | "transparent" | "filled" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
    sticky?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface HeaderProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof headerVariants> {
    /** Render as a child component */
    asChild?: boolean;
}
/**
 * Header component for page navigation and branding.
 * Supports multiple variants and sticky positioning.
 *
 * @example
 * ```tsx
 * <Header>
 *   <HeaderLogo>
 *     <EngrateLogo />
 *   </HeaderLogo>
 *   <HeaderNav>
 *     <Link variant="nav" href="/about">About</Link>
 *   </HeaderNav>
 *   <HeaderActions>
 *     <Button>Sign In</Button>
 *   </HeaderActions>
 * </Header>
 * ```
 */
declare const Header: React.ForwardRefExoticComponent<HeaderProps & React.RefAttributes<HTMLElement>>;
interface HeaderLogoProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Render as a child component */
    asChild?: boolean;
}
/**
 * Container for the logo within the Header.
 * Typically wraps an EngrateLogo or custom logo component.
 */
declare const HeaderLogo: React.ForwardRefExoticComponent<HeaderLogoProps & React.RefAttributes<HTMLDivElement>>;
interface HeaderNavProps extends React.HTMLAttributes<HTMLElement> {
    /** Render as a child component */
    asChild?: boolean;
}
/**
 * Navigation container within the Header.
 * Wraps navigation links in a flex container.
 */
declare const HeaderNav: React.ForwardRefExoticComponent<HeaderNavProps & React.RefAttributes<HTMLElement>>;
interface HeaderActionsProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Render as a child component */
    asChild?: boolean;
}
/**
 * Container for action buttons/links in the Header.
 * Typically contains CTAs like "Sign In" or "Get Started".
 */
declare const HeaderActions: React.ForwardRefExoticComponent<HeaderActionsProps & React.RefAttributes<HTMLDivElement>>;
export { Header, headerVariants, HeaderLogo, HeaderNav, HeaderActions };
export type { HeaderProps, HeaderLogoProps, HeaderNavProps, HeaderActionsProps };
