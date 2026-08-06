import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const descriptionListVariants: (props?: ({
    orientation?: "inline" | "stacked" | null | undefined;
    divided?: boolean | null | undefined;
    size?: "default" | "compact" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const descriptionListItemVariants: (props?: ({
    orientation?: "inline" | "stacked" | null | undefined;
    divided?: boolean | null | undefined;
    size?: "default" | "compact" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
/** A single label/value pair for the declarative `items` API. */
interface DescriptionListItemData {
    /** React key for the item; falls back to the array index. */
    key?: React.Key;
    /** The term / label (rendered in a `<dt>`). */
    label: React.ReactNode;
    /** The description / value (rendered in a `<dd>`). */
    value: React.ReactNode;
}
interface DescriptionListProps extends React.HTMLAttributes<HTMLDListElement>, VariantProps<typeof descriptionListVariants> {
    /**
     * Render items declaratively instead of composing `DescriptionListItem` /
     * `DescriptionListTerm` / `DescriptionListDetails` as children.
     */
    items?: DescriptionListItemData[];
}
/**
 * DescriptionList renders a list of label/value pairs (e.g. "Name: Jane Doe")
 * using semantic `<dl>` / `<dt>` / `<dd>` elements.
 *
 * @example
 * ```tsx
 * <DescriptionList
 *   items={[
 *     { label: 'Name', value: 'Jane Doe' },
 *     { label: 'Phone number', value: '+1 (555) 123-4567' },
 *   ]}
 * />
 *
 * <DescriptionList orientation="inline" divided>
 *   <DescriptionListItem>
 *     <DescriptionListTerm>Name</DescriptionListTerm>
 *     <DescriptionListDetails>Jane Doe</DescriptionListDetails>
 *   </DescriptionListItem>
 * </DescriptionList>
 *
 * <DescriptionList size="compact" items={items} />
 * ```
 */
declare const DescriptionList: React.ForwardRefExoticComponent<DescriptionListProps & React.RefAttributes<HTMLDListElement>>;
interface DescriptionListItemProps extends React.HTMLAttributes<HTMLDivElement> {
}
/**
 * Wraps a single `DescriptionListTerm` / `DescriptionListDetails` pair.
 * Layout (stacked vs. inline) is inherited from the parent `DescriptionList`.
 */
declare const DescriptionListItem: React.ForwardRefExoticComponent<DescriptionListItemProps & React.RefAttributes<HTMLDivElement>>;
interface DescriptionListTermProps extends React.HTMLAttributes<HTMLElement> {
}
/** The label half of a pair, rendered as a `<dt>`. */
declare const DescriptionListTerm: React.ForwardRefExoticComponent<DescriptionListTermProps & React.RefAttributes<HTMLElement>>;
interface DescriptionListDetailsProps extends React.HTMLAttributes<HTMLElement> {
}
/** The value half of a pair, rendered as a `<dd>`. */
declare const DescriptionListDetails: React.ForwardRefExoticComponent<DescriptionListDetailsProps & React.RefAttributes<HTMLElement>>;
export { DescriptionList, DescriptionListItem, DescriptionListTerm, DescriptionListDetails, descriptionListVariants, descriptionListItemVariants, };
export type { DescriptionListProps, DescriptionListItemProps, DescriptionListTermProps, DescriptionListDetailsProps, DescriptionListItemData, };
