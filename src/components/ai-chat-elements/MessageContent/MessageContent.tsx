'use client'

import {
  getToolName,
  isReasoningUIPart,
  isTextUIPart,
  isToolUIPart,
  type DynamicToolUIPart,
  type ReasoningUIPart,
  type TextUIPart,
  type ToolUIPart,
  type UIDataTypes,
  type UIMessagePart,
  type UITools,
} from 'ai'
import * as React from 'react'

import { cn } from '@/lib/utils'

import { MarkdownText } from '../MarkdownText'
import { ToolCall } from '../ToolCall'

type AnyPart = UIMessagePart<UIDataTypes, UITools>

export interface MessageContentProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'children'
> {
  /** Parts array from a `UIMessage` (typically `message.parts`). */
  parts: readonly AnyPart[]
  /** Override how a `text` part is rendered. Defaults to `<MarkdownText>`. */
  renderText?: (part: TextUIPart, key: string) => React.ReactNode
  /** Override how a tool call is rendered. Defaults to `<ToolCall>`. */
  renderTool?: (
    part: DynamicToolUIPart | ToolUIPart,
    key: string
  ) => React.ReactNode
  /** Override how a reasoning part is rendered. Defaults to a dimmed
   * blockquote. Once we add a real `<Reasoning>` component, point this at it. */
  renderReasoning?: (part: ReasoningUIPart, key: string) => React.ReactNode
  /** Render parts that this dispatcher does not understand. By default they
   * are silently dropped. */
  renderUnknown?: (part: AnyPart, key: string) => React.ReactNode
}

const defaultRenderText = (part: TextUIPart, key: string) => (
  <MarkdownText key={key}>{part.text}</MarkdownText>
)

const defaultRenderTool = (
  part: DynamicToolUIPart | ToolUIPart,
  key: string
) => {
  const toolName = getToolName(part)
  // Both static and dynamic tool parts expose the same lifecycle fields, just
  // under slightly different unions. Pull them as unknown — ToolCall does its
  // own JSON formatting.
  const p = part as DynamicToolUIPart
  return (
    <ToolCall
      key={key}
      toolName={toolName}
      state={p.state}
      input={p.input}
      output={p.state === 'output-available' ? p.output : undefined}
      errorText={p.state === 'output-error' ? p.errorText : undefined}
    />
  )
}

const defaultRenderReasoning = (part: ReasoningUIPart, key: string) => (
  <blockquote
    key={key}
    className="border-border text-secondary text-body-sm my-2 border-l-2 pl-3 italic opacity-80"
  >
    {part.text}
  </blockquote>
)

/**
 * Dispatcher that walks an AI SDK `UIMessage.parts` array and renders each
 * part with the matching child component. Handles `text` and tool parts
 * (both static and MCP-loaded dynamic) out of the box. `reasoning`, `file`,
 * sources, and data parts can be customized via the render-* props.
 */
export function MessageContent({
  parts,
  renderText = defaultRenderText,
  renderTool = defaultRenderTool,
  renderReasoning = defaultRenderReasoning,
  renderUnknown,
  className,
  ...props
}: MessageContentProps) {
  return (
    <div className={cn('flex flex-col gap-1', className)} {...props}>
      {parts.map((part, i) => {
        const key = `part-${i}`
        if (isTextUIPart(part)) return renderText(part, key)
        if (isToolUIPart(part)) return renderTool(part, key)
        if (isReasoningUIPart(part)) return renderReasoning(part, key)
        return renderUnknown ? renderUnknown(part, key) : null
      })}
    </div>
  )
}
