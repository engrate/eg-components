export interface ChatErrorProps {
    /** The error to display. Either an Error instance or a plain string. */
    error: Error | string;
    /** Extra classes for the alignment row. */
    className?: string;
}
/**
 * Inline error banner for chat surfaces. Renders a centered red-themed pill.
 * Use when the chat stream itself has failed (network, model error, etc.).
 */
export declare function ChatError({ error, className }: ChatErrorProps): import("react/jsx-runtime").JSX.Element;
