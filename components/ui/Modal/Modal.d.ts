import { VariantProps } from 'class-variance-authority';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as React from 'react';
interface ModalProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root> {
}
declare const Modal: {
    ({ open: controlledOpen, defaultOpen, onOpenChange, children, ...props }: ModalProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const ModalTrigger: React.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const ModalPortal: React.FC<DialogPrimitive.DialogPortalProps>;
declare const ModalClose: React.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;
interface ModalOverlayProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> {
}
declare const ModalOverlay: React.ForwardRefExoticComponent<ModalOverlayProps & React.RefAttributes<HTMLDivElement>>;
declare const modalContentVariants: (props?: ({
    size?: "default" | "sm" | "lg" | "full" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface ModalContentProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>, VariantProps<typeof modalContentVariants> {
    /** Whether to show the default close button in the top-right corner */
    showCloseButton?: boolean;
}
declare const ModalContent: React.ForwardRefExoticComponent<ModalContentProps & React.RefAttributes<HTMLDivElement>>;
interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare const ModalHeader: React.ForwardRefExoticComponent<ModalHeaderProps & React.RefAttributes<HTMLDivElement>>;
interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare const ModalFooter: React.ForwardRefExoticComponent<ModalFooterProps & React.RefAttributes<HTMLDivElement>>;
interface ModalTitleProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title> {
}
declare const ModalTitle: React.ForwardRefExoticComponent<ModalTitleProps & React.RefAttributes<HTMLHeadingElement>>;
interface ModalDescriptionProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description> {
}
declare const ModalDescription: React.ForwardRefExoticComponent<ModalDescriptionProps & React.RefAttributes<HTMLParagraphElement>>;
export { Modal, ModalTrigger, ModalPortal, ModalOverlay, ModalContent, ModalClose, ModalHeader, ModalFooter, ModalTitle, ModalDescription, modalContentVariants, };
export type { ModalOverlayProps, ModalContentProps, ModalHeaderProps, ModalFooterProps, ModalTitleProps, ModalDescriptionProps, };
