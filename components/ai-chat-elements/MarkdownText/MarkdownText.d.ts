import * as React from 'react';
export interface MarkdownTextProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
    /** Raw markdown text. Streaming-safe — partial markdown will render
     * incrementally as new tokens arrive. */
    children: string;
}
/**
 * Renders streaming markdown text from an AI SDK `text` part. Each markdown
 * node is mapped to an Engrate primitive (Heading, Link, Table, CodeBlock,
 * Divider) so a model-authored table or code block looks identical to the
 * same content rendered anywhere else in the app.
 */
export declare function MarkdownText({ children, className, ...props }: MarkdownTextProps): import("react/jsx-runtime").JSX.Element;
