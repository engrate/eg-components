import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const messageBubbleVariants: (props?: ({
    from?: "user" | "assistant" | "system" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface MessageProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'role'>, VariantProps<typeof messageBubbleVariants> {
    /** Display name shown above the message body. Omit to hide the header. */
    name?: string;
    /** Override the row class (alignment wrapper). */
    rowClassName?: string;
}
/**
 * Layout primitive for a single chat message bubble. Aligns left/right based
 * on `from`, renders a small name header, and slots `children` for the
 * actual content. Pair with `<MessageContent>` to render typed parts from
 * the AI SDK.
 */
export declare function Message({ from, name, className, rowClassName, children, ...props }: MessageProps): import("react/jsx-runtime").JSX.Element;
export {};
