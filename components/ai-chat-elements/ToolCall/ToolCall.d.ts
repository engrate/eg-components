import { LucideIcon } from 'lucide-react';
import * as React from 'react';
export type ToolCallState = 'input-streaming' | 'input-available' | 'approval-requested' | 'approval-responded' | 'output-available' | 'output-error' | 'output-denied';
export interface ToolCallLabel {
    /** Verb form rendered while the tool is in flight, e.g. "Looking up your
     * profile". When omitted, falls back to `description`. */
    running?: string;
    /** Verb form rendered after the tool completes, e.g. "Looked up your
     * profile". When omitted, falls back to `description`. */
    done?: string;
    /** Single neutral phrase used for both states when running/done aren't
     * provided. Often sourced from the MCP tool's `description` field — this
     * lets consumers pass `Object.fromEntries(mcpTools.map(t => [t.name, {
     * description: t.description }]))` and skip hand-tuning every verb. */
    description?: string;
    /** Optional icon override. Defaults to a sunflower-tinted Sparkles. */
    icon?: LucideIcon;
}
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
    /** Per-tool friendly labels. Falls back to a humanized tool name when a
     * tool is missing from the map. */
    labelMap?: Record<string, ToolCallLabel>;
    /** Render the output yourself when you know its shape. Return `null` (or
     * omit) to fall back to the smart/JSON renderer. */
    renderOutput?: (toolName: string, output: unknown) => React.ReactNode | null;
    /** Auto-detect array-of-objects → Table and markdown-y strings → MarkdownText.
     * Disable to always render output as raw JSON.
     * @default true */
    smartOutput?: boolean;
    /** Wired when `state === 'approval-requested'`. */
    onApprove?: () => void;
    /** Wired when `state === 'approval-requested'`. */
    onDeny?: () => void;
}
/**
 * Inline rendering for an MCP / AI tool invocation. While pending, sits in
 * the message stream as a flowing sentence with a pulsing sunflower dot.
 * Once complete, becomes a collapsible pill with input/output details. The
 * output panel auto-detects table-like data and markdown strings; pass a
 * `renderOutput` for richer custom rendering.
 */
export declare function ToolCall({ toolName, state, input, output, errorText, showDetails, labelMap, renderOutput, smartOutput, onApprove, onDeny, className, ...props }: ToolCallProps): import("react/jsx-runtime").JSX.Element;
