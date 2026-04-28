import * as React from 'react';
export interface EmptyStateProps {
    /** Headline shown to the user. */
    title?: React.ReactNode;
    /** Compact mode for inline placement (smaller vertical padding). */
    compact?: boolean;
    /** Extra classes for the wrapper. */
    className?: string;
    /** Slot below the title — typically a `<Suggestions>` grid. */
    children?: React.ReactNode;
}
/**
 * Landing copy shown in an empty chat thread, before the user has sent
 * anything. Render `<Suggestion>` chips as children to give them a starting
 * point.
 */
export declare function EmptyState({ title, compact, className, children, }: EmptyStateProps): import("react/jsx-runtime").JSX.Element;
