import * as React from 'react';
export interface CodeBlockProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
    /** Source code to render. Trailing newlines are trimmed. */
    children: string;
    /** Prism language id. Accepts `ts`, `language-ts`, etc. Falls back to plain
     * monospace when the language is unknown. */
    language?: string;
    /** Show a copy-to-clipboard button in the top-right (visible on hover).
     * @default true */
    showCopy?: boolean;
}
/**
 * Syntax-highlighted code block themed for the Engrate palette. Keeps the
 * 10/90 rule — most tokens stay gray, with sparing warm-purple for strings
 * and deep-blue for numbers/builtins. Pair with `MarkdownText` for fenced
 * code in chat surfaces.
 */
export declare const CodeBlock: React.ForwardRefExoticComponent<CodeBlockProps & React.RefAttributes<HTMLDivElement>>;
