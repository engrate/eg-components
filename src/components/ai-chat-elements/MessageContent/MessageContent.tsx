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
import { ToolCall, type ToolCallLabel } from '../ToolCall'

type AnyPart = UIMessagePart<UIDataTypes, UITools>
type AnyToolPart = DynamicToolUIPart | ToolUIPart

export interface MessageContentProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'children'
> {
  /** Parts array from a `UIMessage` (typically `message.parts`). */
  parts: readonly AnyPart[]
  /** Override how a `text` part is rendered. Defaults to `<MarkdownText>`. */
  renderText?: (part: TextUIPart, key: string) => React.ReactNode
  /** Override how a tool call is rendered. Defaults to `<ToolCall>` with the
   * `toolLabelMap`, `renderToolOutput`, and `smartToolOutput` props applied.
   * Return `undefined` to fall back to the default `<ToolCall>` for this part
   * (useful when only some tool calls should get a custom renderer). */
  renderTool?: (part: AnyToolPart, key: string) => React.ReactNode | undefined
  /** Override how a reasoning part is rendered. Defaults to a dimmed
   * blockquote. Once we add a real `<Reasoning>` component, point this at it. */
  renderReasoning?: (part: ReasoningUIPart, key: string) => React.ReactNode
  /** Render parts that this dispatcher does not understand. By default they
   * are silently dropped. */
  renderUnknown?: (part: AnyPart, key: string) => React.ReactNode
  /** Friendly per-tool labels passed to the default `<ToolCall>` renderer.
   * Ignored when `renderTool` is overridden. */
  toolLabelMap?: Record<string, ToolCallLabel>
  /** Custom output renderer passed to the default `<ToolCall>` renderer.
   * Receives the tool name and raw output, returns a React node or `null` to
   * fall back to the smart renderer. Ignored when `renderTool` is overridden. */
  renderToolOutput?: (
    toolName: string,
    output: unknown
  ) => React.ReactNode | null
  /** Forwarded to the default `<ToolCall>` renderer. Disable to always show
   * raw JSON regardless of output shape. Ignored when `renderTool` is
   * overridden.
   * @default true */
  smartToolOutput?: boolean
}

const defaultRenderText = (part: TextUIPart, key: string) => (
  <MarkdownText key={key}>{part.text}</MarkdownText>
)

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
  renderTool,
  renderReasoning = defaultRenderReasoning,
  renderUnknown,
  toolLabelMap,
  renderToolOutput,
  smartToolOutput = true,
  className,
  ...props
}: MessageContentProps) {
  const renderToolDefault = React.useCallback(
    (part: AnyToolPart, key: string) => {
      const toolName = getToolName(part)
      // Both static and dynamic tool parts expose the same lifecycle fields,
      // just under slightly different unions. ToolCall does its own JSON
      // formatting from the unknown values.
      const p = part as DynamicToolUIPart
      return (
        <ToolCall
          key={key}
          toolName={toolName}
          state={p.state}
          input={p.input}
          output={p.state === 'output-available' ? p.output : undefined}
          errorText={p.state === 'output-error' ? p.errorText : undefined}
          labelMap={toolLabelMap}
          renderOutput={renderToolOutput}
          smartOutput={smartToolOutput}
        />
      )
    },
    [toolLabelMap, renderToolOutput, smartToolOutput]
  )

  const renderToolFinal = React.useCallback(
    (part: AnyToolPart, key: string) => {
      if (renderTool) {
        const node = renderTool(part, key)
        if (node !== undefined) return node
      }
      return renderToolDefault(part, key)
    },
    [renderTool, renderToolDefault]
  )

  return (
    <div className={cn('flex flex-col gap-1', className)} {...props}>
      {parts.map((part, i) => {
        const key = `part-${i}`
        if (isTextUIPart(part)) return renderText(part, key)
        if (isToolUIPart(part)) return renderToolFinal(part, key)
        if (isReasoningUIPart(part)) return renderReasoning(part, key)
        return renderUnknown ? renderUnknown(part, key) : null
      })}
    </div>
  )
}
