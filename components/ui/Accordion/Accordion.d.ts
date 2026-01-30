import { VariantProps } from 'class-variance-authority';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as React from 'react';
declare const accordionVariants: (props?: ({
    variant?: "default" | "bordered" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type AccordionSingleProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & VariantProps<typeof accordionVariants> & {
    type: 'single';
    collapsible?: boolean;
};
type AccordionMultipleProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & VariantProps<typeof accordionVariants> & {
    type: 'multiple';
};
type AccordionProps = AccordionSingleProps | AccordionMultipleProps;
declare const Accordion: React.ForwardRefExoticComponent<((Omit<AccordionPrimitive.AccordionSingleProps & React.RefAttributes<HTMLDivElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "bordered" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string> & {
    type: "single";
    collapsible?: boolean;
}) | (Omit<AccordionPrimitive.AccordionMultipleProps & React.RefAttributes<HTMLDivElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "bordered" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string> & {
    type: "multiple";
})) & React.RefAttributes<HTMLDivElement>>;
interface AccordionItemProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {
}
declare const AccordionItem: React.ForwardRefExoticComponent<AccordionItemProps & React.RefAttributes<HTMLDivElement>>;
declare const accordionTriggerVariants: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface AccordionTriggerProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>, VariantProps<typeof accordionTriggerVariants> {
}
declare const AccordionTrigger: React.ForwardRefExoticComponent<AccordionTriggerProps & React.RefAttributes<HTMLButtonElement>>;
interface AccordionContentProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {
}
declare const AccordionContent: React.ForwardRefExoticComponent<AccordionContentProps & React.RefAttributes<HTMLDivElement>>;
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent, accordionVariants, accordionTriggerVariants, };
export type { AccordionProps, AccordionItemProps, AccordionTriggerProps, AccordionContentProps, };
