import * as React from 'react';
export interface TypingIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Optional eyebrow label rendered above the dots — usually only when this
     * is the first chunk of an assistant turn. Most callers can omit it,
     * since streaming text reveal is itself the primary indicator and dots
     * are a fallback for tool-call pauses. */
    eyebrow?: React.ReactNode;
}
/**
 * Three bouncing dots, no bubble. Use as a fallback indicator when the
 * assistant is busy but no streaming text has arrived yet — for example,
 * a tool call that takes several seconds before a response begins. For
 * actively streaming text, the token reveal is its own indicator.
 */
export declare function TypingIndicator({ eyebrow, className, ...props }: TypingIndicatorProps): import("react/jsx-runtime").JSX.Element;
