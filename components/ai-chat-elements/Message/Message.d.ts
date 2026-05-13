import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const messageBubbleVariants: (props?: ({
    from?: "assistant" | "user" | "system" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface MessageProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'role'>, VariantProps<typeof messageBubbleVariants> {
    /** Role label rendered above the content as a small eyebrow. Pass only
     * for the first message of a turn-streak; consecutive messages from the
     * same speaker should omit it. */
    eyebrow?: React.ReactNode;
}
/**
 * A single conversation turn. Assistant messages are unstyled prose on the
 * page background; user messages are right-aligned sunflower-tinted bubbles;
 * system notes are inline italics. The optional `eyebrow` labels the speaker
 * — pass it once per turn-streak.
 */
export declare function Message({ from, eyebrow, className, children, ...props }: MessageProps): import("react/jsx-runtime").JSX.Element;
export {};
