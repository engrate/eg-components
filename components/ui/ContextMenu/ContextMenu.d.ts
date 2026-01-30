import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import * as React from 'react';
declare const ContextMenu: React.FC<ContextMenuPrimitive.ContextMenuProps>;
declare const ContextMenuTrigger: React.ForwardRefExoticComponent<ContextMenuPrimitive.ContextMenuTriggerProps & React.RefAttributes<HTMLSpanElement>>;
declare const ContextMenuGroup: React.ForwardRefExoticComponent<ContextMenuPrimitive.ContextMenuGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const ContextMenuPortal: React.FC<ContextMenuPrimitive.ContextMenuPortalProps>;
declare const ContextMenuSub: React.FC<ContextMenuPrimitive.ContextMenuSubProps>;
declare const ContextMenuRadioGroup: React.ForwardRefExoticComponent<ContextMenuPrimitive.ContextMenuRadioGroupProps & React.RefAttributes<HTMLDivElement>>;
interface ContextMenuSubTriggerProps extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> {
    inset?: boolean;
}
declare const ContextMenuSubTrigger: React.ForwardRefExoticComponent<ContextMenuSubTriggerProps & React.RefAttributes<HTMLDivElement>>;
interface ContextMenuSubContentProps extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent> {
}
declare const ContextMenuSubContent: React.ForwardRefExoticComponent<ContextMenuSubContentProps & React.RefAttributes<HTMLDivElement>>;
interface ContextMenuContentProps extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content> {
}
declare const ContextMenuContent: React.ForwardRefExoticComponent<ContextMenuContentProps & React.RefAttributes<HTMLDivElement>>;
interface ContextMenuItemProps extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> {
    inset?: boolean;
}
declare const ContextMenuItem: React.ForwardRefExoticComponent<ContextMenuItemProps & React.RefAttributes<HTMLDivElement>>;
interface ContextMenuCheckboxItemProps extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem> {
}
declare const ContextMenuCheckboxItem: React.ForwardRefExoticComponent<ContextMenuCheckboxItemProps & React.RefAttributes<HTMLDivElement>>;
interface ContextMenuRadioItemProps extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem> {
}
declare const ContextMenuRadioItem: React.ForwardRefExoticComponent<ContextMenuRadioItemProps & React.RefAttributes<HTMLDivElement>>;
interface ContextMenuLabelProps extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> {
    inset?: boolean;
}
declare const ContextMenuLabel: React.ForwardRefExoticComponent<ContextMenuLabelProps & React.RefAttributes<HTMLDivElement>>;
interface ContextMenuSeparatorProps extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator> {
}
declare const ContextMenuSeparator: React.ForwardRefExoticComponent<ContextMenuSeparatorProps & React.RefAttributes<HTMLDivElement>>;
interface ContextMenuShortcutProps extends React.HTMLAttributes<HTMLSpanElement> {
}
declare const ContextMenuShortcut: React.ForwardRefExoticComponent<ContextMenuShortcutProps & React.RefAttributes<HTMLSpanElement>>;
export { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuCheckboxItem, ContextMenuRadioItem, ContextMenuLabel, ContextMenuSeparator, ContextMenuShortcut, ContextMenuGroup, ContextMenuPortal, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuRadioGroup, };
export type { ContextMenuContentProps, ContextMenuItemProps, ContextMenuCheckboxItemProps, ContextMenuRadioItemProps, ContextMenuLabelProps, ContextMenuSeparatorProps, ContextMenuShortcutProps, ContextMenuSubTriggerProps, ContextMenuSubContentProps, };
