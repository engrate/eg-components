import { VariantProps } from 'class-variance-authority';
import { buttonVariants } from '../Button';
import * as React from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
declare const AlertDialog: React.FC<AlertDialogPrimitive.AlertDialogProps>;
declare const AlertDialogTrigger: React.ForwardRefExoticComponent<AlertDialogPrimitive.AlertDialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const AlertDialogPortal: React.FC<AlertDialogPrimitive.AlertDialogPortalProps>;
interface AlertDialogOverlayProps extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay> {
}
declare const AlertDialogOverlay: React.ForwardRefExoticComponent<AlertDialogOverlayProps & React.RefAttributes<HTMLDivElement>>;
declare const alertDialogContentVariants: (props?: ({
    size?: "sm" | "default" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface AlertDialogContentProps extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>, VariantProps<typeof alertDialogContentVariants> {
}
declare const AlertDialogContent: React.ForwardRefExoticComponent<AlertDialogContentProps & React.RefAttributes<HTMLDivElement>>;
interface AlertDialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare const AlertDialogHeader: React.ForwardRefExoticComponent<AlertDialogHeaderProps & React.RefAttributes<HTMLDivElement>>;
interface AlertDialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare const AlertDialogFooter: React.ForwardRefExoticComponent<AlertDialogFooterProps & React.RefAttributes<HTMLDivElement>>;
interface AlertDialogTitleProps extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title> {
}
declare const AlertDialogTitle: React.ForwardRefExoticComponent<AlertDialogTitleProps & React.RefAttributes<HTMLHeadingElement>>;
interface AlertDialogDescriptionProps extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description> {
}
declare const AlertDialogDescription: React.ForwardRefExoticComponent<AlertDialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>>;
interface AlertDialogActionProps extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>, VariantProps<typeof buttonVariants> {
}
declare const AlertDialogAction: React.ForwardRefExoticComponent<AlertDialogActionProps & React.RefAttributes<HTMLButtonElement>>;
interface AlertDialogCancelProps extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>, VariantProps<typeof buttonVariants> {
}
declare const AlertDialogCancel: React.ForwardRefExoticComponent<AlertDialogCancelProps & React.RefAttributes<HTMLButtonElement>>;
export { AlertDialog, AlertDialogTrigger, AlertDialogPortal, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel, alertDialogContentVariants, };
export type { AlertDialogOverlayProps, AlertDialogContentProps, AlertDialogHeaderProps, AlertDialogFooterProps, AlertDialogTitleProps, AlertDialogDescriptionProps, AlertDialogActionProps, AlertDialogCancelProps, };
