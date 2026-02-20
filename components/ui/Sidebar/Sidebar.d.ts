import { VariantProps } from 'class-variance-authority';
import { EngrateLogoProps } from '../EngrateLogo';
import * as React from 'react';
interface SidebarContextValue {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
    collapsible: boolean;
}
declare function useSidebarContext(): SidebarContextValue;
declare const sidebarVariants: (props?: ({
    variant?: "default" | "bordered" | null | undefined;
    width?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface SidebarProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof sidebarVariants> {
    /** Whether the sidebar is in collapsed state */
    defaultCollapsed?: boolean;
    /** Controlled collapsed state */
    collapsed?: boolean;
    /** Callback when collapsed state changes */
    onCollapsedChange?: (collapsed: boolean) => void;
    /** Whether the sidebar is collapsible */
    collapsible?: boolean;
    /** Automatically collapse on mobile screens (default: true) */
    autoCollapseMobile?: boolean;
}
/**
 * Sidebar component for application navigation.
 * Supports collapsible behavior, navigation items with icons, and sections.
 *
 * @example
 * ```tsx
 * <Sidebar>
 *   <SidebarHeader>
 *     <SidebarLogo />
 *   </SidebarHeader>
 *   <SidebarContent>
 *     <SidebarGroup>
 *       <SidebarGroupLabel>Navigation</SidebarGroupLabel>
 *       <SidebarItem icon={<HomeIcon />} active>Home</SidebarItem>
 *       <SidebarItem icon={<SettingsIcon />}>Settings</SidebarItem>
 *     </SidebarGroup>
 *   </SidebarContent>
 *   <SidebarFooter>
 *     <SidebarTrigger />
 *   </SidebarFooter>
 * </Sidebar>
 * ```
 */
declare const Sidebar: React.ForwardRefExoticComponent<SidebarProps & React.RefAttributes<HTMLElement>>;
interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare const SidebarHeader: React.ForwardRefExoticComponent<SidebarHeaderProps & React.RefAttributes<HTMLDivElement>>;
interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare const SidebarContent: React.ForwardRefExoticComponent<SidebarContentProps & React.RefAttributes<HTMLDivElement>>;
interface SidebarFooterProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare const SidebarFooter: React.ForwardRefExoticComponent<SidebarFooterProps & React.RefAttributes<HTMLDivElement>>;
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare const SidebarGroup: React.ForwardRefExoticComponent<SidebarGroupProps & React.RefAttributes<HTMLDivElement>>;
interface SidebarGroupLabelProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare const SidebarGroupLabel: React.ForwardRefExoticComponent<SidebarGroupLabelProps & React.RefAttributes<HTMLDivElement>>;
declare const sidebarItemVariants: (props?: ({
    active?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface SidebarItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof sidebarItemVariants> {
    /** Icon to display before the label */
    icon?: React.ReactNode;
    /** Render as a child component (for use with Next.js Link, etc.) */
    asChild?: boolean;
}
declare const SidebarItem: React.ForwardRefExoticComponent<SidebarItemProps & React.RefAttributes<HTMLButtonElement>>;
interface SidebarTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}
declare const SidebarTrigger: React.ForwardRefExoticComponent<SidebarTriggerProps & React.RefAttributes<HTMLButtonElement>>;
interface SidebarSeparatorProps extends React.HTMLAttributes<HTMLHRElement> {
}
declare const SidebarSeparator: React.ForwardRefExoticComponent<SidebarSeparatorProps & React.RefAttributes<HTMLHRElement>>;
interface SidebarLogoProps extends Omit<EngrateLogoProps, 'compact'> {
}
/**
 * SidebarLogo component that automatically syncs the EngrateLogo compact state
 * with the Sidebar's collapsed state. Shows the full logo when expanded and
 * the compact icon-only version when collapsed.
 *
 * Must be used within a Sidebar component.
 *
 * @example
 * ```tsx
 * <Sidebar>
 *   <SidebarHeader>
 *     <SidebarLogo />
 *   </SidebarHeader>
 *   ...
 * </Sidebar>
 * ```
 */
declare function SidebarLogo({ ...props }: SidebarLogoProps): import("react/jsx-runtime").JSX.Element | null;
declare namespace SidebarLogo {
    var displayName: string;
}
interface SidebarSubContextValue {
    open: boolean;
    setOpen: (open: boolean) => void;
}
declare function useSidebarSubContext(): SidebarSubContextValue;
interface SidebarSubProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Whether the sub-items are open by default */
    defaultOpen?: boolean;
    /** Controlled open state */
    open?: boolean;
    /** Callback when open state changes */
    onOpenChange?: (open: boolean) => void;
}
/**
 * Wraps a SidebarSubTrigger and SidebarSubContent to create an expandable
 * navigation item with sub-items.
 *
 * When the sidebar is expanded the sub-items collapse/expand inline.
 * When the sidebar is collapsed they appear in a popover on hover.
 *
 * @example
 * ```tsx
 * <SidebarSub>
 *   <SidebarSubTrigger icon={<Zap />}>Power Tariffs</SidebarSubTrigger>
 *   <SidebarSubContent>
 *     <SidebarItem>Spot Prices</SidebarItem>
 *     <SidebarItem>Forward Prices</SidebarItem>
 *   </SidebarSubContent>
 * </SidebarSub>
 * ```
 */
declare const SidebarSub: React.ForwardRefExoticComponent<SidebarSubProps & React.RefAttributes<HTMLDivElement>>;
interface SidebarSubTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof sidebarItemVariants> {
    /** Icon to display before the label */
    icon?: React.ReactNode;
}
declare const SidebarSubTrigger: React.ForwardRefExoticComponent<SidebarSubTriggerProps & React.RefAttributes<HTMLButtonElement>>;
interface SidebarSubContentProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare const SidebarSubContent: React.ForwardRefExoticComponent<SidebarSubContentProps & React.RefAttributes<HTMLDivElement>>;
export { Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarItem, SidebarTrigger, SidebarSeparator, SidebarLogo, SidebarSub, SidebarSubTrigger, SidebarSubContent, sidebarVariants, sidebarItemVariants, useSidebarContext, useSidebarSubContext, };
export type { SidebarProps, SidebarHeaderProps, SidebarContentProps, SidebarFooterProps, SidebarGroupProps, SidebarGroupLabelProps, SidebarItemProps, SidebarTriggerProps, SidebarSeparatorProps, SidebarLogoProps, SidebarSubProps, SidebarSubTriggerProps, SidebarSubContentProps, };
