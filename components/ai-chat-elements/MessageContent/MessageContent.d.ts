import { DynamicToolUIPart, ReasoningUIPart, TextUIPart, ToolUIPart, UIDataTypes, UIMessagePart, UITools } from 'ai';
import { ToolCallLabel } from '../ToolCall';
import * as React from 'react';
type AnyPart = UIMessagePart<UIDataTypes, UITools>;
type AnyToolPart = DynamicToolUIPart | ToolUIPart;
export interface MessageContentProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
    /** Parts array from a `UIMessage` (typically `message.parts`). */
    parts: readonly AnyPart[];
    /** Override how a `text` part is rendered. Defaults to `<MarkdownText>`. */
    renderText?: (part: TextUIPart, key: string) => React.ReactNode;
    /** Override how a tool call is rendered. Defaults to `<ToolCall>` with the
     * `toolLabelMap`, `renderToolOutput`, and `smartToolOutput` props applied.
     * Return `undefined` to fall back to the default `<ToolCall>` for this part
     * (useful when only some tool calls should get a custom renderer). */
    renderTool?: (part: AnyToolPart, key: string) => React.ReactNode | undefined;
    /** Override how a reasoning part is rendered. Defaults to a dimmed
     * blockquote. Once we add a real `<Reasoning>` component, point this at it. */
    renderReasoning?: (part: ReasoningUIPart, key: string) => React.ReactNode;
    /** Render parts that this dispatcher does not understand. By default they
     * are silently dropped. */
    renderUnknown?: (part: AnyPart, key: string) => React.ReactNode;
    /** Friendly per-tool labels passed to the default `<ToolCall>` renderer.
     * Ignored when `renderTool` is overridden. */
    toolLabelMap?: Record<string, ToolCallLabel>;
    /** Custom output renderer passed to the default `<ToolCall>` renderer.
     * Receives the tool name and raw output, returns a React node or `null` to
     * fall back to the smart renderer. Ignored when `renderTool` is overridden. */
    renderToolOutput?: (toolName: string, output: unknown) => React.ReactNode | null;
    /** Forwarded to the default `<ToolCall>` renderer. Disable to always show
     * raw JSON regardless of output shape. Ignored when `renderTool` is
     * overridden.
     * @default true */
    smartToolOutput?: boolean;
}
/**
 * Dispatcher that walks an AI SDK `UIMessage.parts` array and renders each
 * part with the matching child component. Handles `text` and tool parts
 * (both static and MCP-loaded dynamic) out of the box. `reasoning`, `file`,
 * sources, and data parts can be customized via the render-* props.
 */
export declare function MessageContent({ parts, renderText, renderTool, renderReasoning, renderUnknown, toolLabelMap, renderToolOutput, smartToolOutput, className, ...props }: MessageContentProps): import("react/jsx-runtime").JSX.Element;
export {};
