import * as React from 'react';
export interface MarkdownTextProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
    /** Raw markdown text. Streaming-safe — partial markdown will render
     * incrementally as new tokens arrive. */
    children: string;
}
/**
 * Renders streaming markdown text from an AI SDK `text` part. Supports GFM
 * (tables, strikethrough, task lists). Inline code, fenced code, blockquotes,
 * lists, and links are all themed with Engrate design tokens.
 */
export declare function MarkdownText({ children, className, ...props }: MarkdownTextProps): import("react/jsx-runtime").JSX.Element;
