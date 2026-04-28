import { DynamicToolUIPart, ReasoningUIPart, TextUIPart, ToolUIPart, UIDataTypes, UIMessagePart, UITools } from 'ai';
import * as React from 'react';
type AnyPart = UIMessagePart<UIDataTypes, UITools>;
export interface MessageContentProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
    /** Parts array from a `UIMessage` (typically `message.parts`). */
    parts: readonly AnyPart[];
    /** Override how a `text` part is rendered. Defaults to `<MarkdownText>`. */
    renderText?: (part: TextUIPart, key: string) => React.ReactNode;
    /** Override how a tool call is rendered. Defaults to `<ToolCall>`. */
    renderTool?: (part: DynamicToolUIPart | ToolUIPart, key: string) => React.ReactNode;
    /** Override how a reasoning part is rendered. Defaults to a dimmed
     * blockquote. Once we add a real `<Reasoning>` component, point this at it. */
    renderReasoning?: (part: ReasoningUIPart, key: string) => React.ReactNode;
    /** Render parts that this dispatcher does not understand. By default they
     * are silently dropped. */
    renderUnknown?: (part: AnyPart, key: string) => React.ReactNode;
}
/**
 * Dispatcher that walks an AI SDK `UIMessage.parts` array and renders each
 * part with the matching child component. Handles `text` and tool parts
 * (both static and MCP-loaded dynamic) out of the box. `reasoning`, `file`,
 * sources, and data parts can be customized via the render-* props.
 */
export declare function MessageContent({ parts, renderText, renderTool, renderReasoning, renderUnknown, className, ...props }: MessageContentProps): import("react/jsx-runtime").JSX.Element;
export {};
