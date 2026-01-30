import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The default active tab value */
    defaultValue?: string;
    /** Controlled active tab value */
    value?: string;
    /** Callback when active tab changes */
    onValueChange?: (value: string) => void;
}
/**
 * Root container for the tabs component.
 * Manages the active tab state and provides context to child components.
 *
 * @example
 * ```tsx
 * <Tabs defaultValue="tab1">
 *   <TabList>
 *     <TabTrigger value="tab1">Tab 1</TabTrigger>
 *     <TabTrigger value="tab2">Tab 2</TabTrigger>
 *   </TabList>
 *   <TabContent value="tab1">Content 1</TabContent>
 *   <TabContent value="tab2">Content 2</TabContent>
 * </Tabs>
 * ```
 */
declare const Tabs: React.ForwardRefExoticComponent<TabsProps & React.RefAttributes<HTMLDivElement>>;
declare const tabListVariants: (props?: ({
    variant?: "default" | "pills" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface TabListProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof tabListVariants> {
}
/**
 * Container for tab triggers. Renders the row of clickable tabs.
 */
declare const TabList: React.ForwardRefExoticComponent<TabListProps & React.RefAttributes<HTMLDivElement>>;
declare const tabTriggerVariants: (props?: ({
    variant?: "default" | "pills" | null | undefined;
    size?: "sm" | "default" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface TabTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof tabTriggerVariants> {
    /** Unique value identifying this tab */
    value: string;
}
/**
 * Individual tab trigger button. Clicking activates the associated TabContent.
 */
declare const TabTrigger: React.ForwardRefExoticComponent<TabTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const tabContentVariants: (props?: ({
    size?: "sm" | "default" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface TabContentProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof tabContentVariants> {
    /** Value matching the TabTrigger this content belongs to */
    value: string;
}
/**
 * Content panel for a tab. Only visible when the matching tab is active.
 */
declare const TabContent: React.ForwardRefExoticComponent<TabContentProps & React.RefAttributes<HTMLDivElement>>;
export { Tabs, TabList, tabListVariants, TabTrigger, tabTriggerVariants, TabContent, tabContentVariants, };
export type { TabsProps, TabListProps, TabTriggerProps, TabContentProps };
