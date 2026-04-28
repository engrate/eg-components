import * as React from 'react';
type ToolCallState = 'input-streaming' | 'input-available' | 'approval-requested' | 'approval-responded' | 'output-available' | 'output-error' | 'output-denied';
export interface ToolCallProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Tool name (e.g. `me_user_info`). */
    toolName: string;
    /** Lifecycle state from the AI SDK `DynamicToolUIPart`. */
    state: ToolCallState;
    /** Tool input as sent to the server. Rendered as JSON when expanded. */
    input?: unknown;
    /** Tool output (or part of it, while streaming). */
    output?: unknown;
    /** Error text when `state === 'output-error'`. */
    errorText?: string;
    /** Show a collapsible details section with the input/output JSON.
     * @default true */
    showDetails?: boolean;
}
/**
 * Pill rendering for an MCP / AI tool invocation. Shows the tool name and
 * lifecycle phase, with an optional collapsible details panel for the input
 * and output JSON. Designed to be driven directly from an AI SDK
 * `DynamicToolUIPart`.
 */
export declare function ToolCall({ toolName, state, input, output, errorText, showDetails, className, ...props }: ToolCallProps): import("react/jsx-runtime").JSX.Element;
export {};
