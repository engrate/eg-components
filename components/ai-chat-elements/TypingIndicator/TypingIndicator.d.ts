export interface TypingIndicatorProps {
    /** Optional name shown above the dots (e.g. "Ellie"). Omit to hide. */
    name?: string;
    /** Extra classes for the alignment row. */
    className?: string;
}
/**
 * Three bouncing dots in an assistant-styled bubble. Show while the model is
 * generating a response, before the first message part arrives.
 */
export declare function TypingIndicator({ name, className }: TypingIndicatorProps): import("react/jsx-runtime").JSX.Element;
