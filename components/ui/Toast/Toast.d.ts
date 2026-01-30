import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';
declare const ToastProvider: React.FC<ToastPrimitives.ToastProviderProps>;
interface ToastViewportProps extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport> {
}
declare const ToastViewport: React.ForwardRefExoticComponent<ToastViewportProps & React.RefAttributes<HTMLOListElement>>;
declare const toastVariants: (props?: ({
    variant?: "default" | "error" | "success" | "warning" | "info" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface ToastProps extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root>, VariantProps<typeof toastVariants> {
}
declare const Toast: React.ForwardRefExoticComponent<ToastProps & React.RefAttributes<HTMLLIElement>>;
interface ToastActionProps extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action> {
}
declare const ToastAction: React.ForwardRefExoticComponent<ToastActionProps & React.RefAttributes<HTMLButtonElement>>;
interface ToastCloseProps extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close> {
}
declare const ToastClose: React.ForwardRefExoticComponent<ToastCloseProps & React.RefAttributes<HTMLButtonElement>>;
interface ToastTitleProps extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title> {
}
declare const ToastTitle: React.ForwardRefExoticComponent<ToastTitleProps & React.RefAttributes<HTMLDivElement>>;
interface ToastDescriptionProps extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description> {
}
declare const ToastDescription: React.ForwardRefExoticComponent<ToastDescriptionProps & React.RefAttributes<HTMLDivElement>>;
export { Toast, ToastAction, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport, toastVariants, };
export type { ToastActionProps, ToastCloseProps, ToastDescriptionProps, ToastProps, ToastTitleProps, ToastViewportProps, };
