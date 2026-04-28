'use client'

import * as Collapsible from '@radix-ui/react-collapsible'
import { ChevronRight, CircleAlert, CircleCheck, Loader2 } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'

type ToolCallState =
  | 'input-streaming'
  | 'input-available'
  | 'approval-requested'
  | 'approval-responded'
  | 'output-available'
  | 'output-error'
  | 'output-denied'

export interface ToolCallProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Tool name (e.g. `me_user_info`). */
  toolName: string
  /** Lifecycle state from the AI SDK `DynamicToolUIPart`. */
  state: ToolCallState
  /** Tool input as sent to the server. Rendered as JSON when expanded. */
  input?: unknown
  /** Tool output (or part of it, while streaming). */
  output?: unknown
  /** Error text when `state === 'output-error'`. */
  errorText?: string
  /** Show a collapsible details section with the input/output JSON.
   * @default true */
  showDetails?: boolean
}

const phaseLabel = (state: ToolCallState): string => {
  switch (state) {
    case 'input-streaming':
    case 'input-available':
      return 'Running'
    case 'approval-requested':
      return 'Awaiting approval'
    case 'approval-responded':
      return 'Approved'
    case 'output-available':
      return 'Used'
    case 'output-error':
      return 'Failed'
    case 'output-denied':
      return 'Denied'
  }
}

const isPending = (state: ToolCallState): boolean =>
  state === 'input-streaming' ||
  state === 'input-available' ||
  state === 'approval-requested'

const isError = (state: ToolCallState): boolean => state === 'output-error'

const formatJson = (value: unknown): string => {
  try {
    return JSON.stringify(value, null, 2)
  } catch {
    return String(value)
  }
}

/**
 * Pill rendering for an MCP / AI tool invocation. Shows the tool name and
 * lifecycle phase, with an optional collapsible details panel for the input
 * and output JSON. Designed to be driven directly from an AI SDK
 * `DynamicToolUIPart`.
 */
export function ToolCall({
  toolName,
  state,
  input,
  output,
  errorText,
  showDetails = true,
  className,
  ...props
}: ToolCallProps) {
  const pending = isPending(state)
  const errored = isError(state)
  const label = phaseLabel(state)
  const hasDetails =
    showDetails && (input !== undefined || output !== undefined || errorText)

  const Icon = errored ? CircleAlert : pending ? Loader2 : CircleCheck

  return (
    <Collapsible.Root
      className={cn(
        'border-border bg-card my-2 overflow-hidden rounded-md border',
        errored && 'border-error/40',
        className,
      )}
      {...props}
    >
      <Collapsible.Trigger
        className={cn(
          'flex w-full items-center gap-2 px-3 py-2 text-left',
          hasDetails && 'hover:bg-alt cursor-pointer',
        )}
        disabled={!hasDetails}
        asChild
      >
        <button type="button">
          {hasDetails ? (
            <ChevronRight
              size={14}
              className="text-tertiary transition-transform data-[state=open]:rotate-90"
            />
          ) : (
            <span className="w-[14px]" aria-hidden="true" />
          )}
          <Icon
            size={14}
            className={cn(
              errored ? 'text-error' : 'text-tertiary',
              pending && 'animate-spin',
            )}
            aria-hidden="true"
          />
          <span className="text-label text-secondary font-medium">
            {label} tool: <span className="font-mono">{toolName}</span>
          </span>
        </button>
      </Collapsible.Trigger>
      {hasDetails ? (
        <Collapsible.Content className="border-border border-t px-3 py-2">
          {input !== undefined ? (
            <div className="mb-2 last:mb-0">
              <div className="text-label-sm text-tertiary mb-1 font-medium">
                Input
              </div>
              <pre className="bg-main border-border overflow-x-auto rounded border p-2 font-mono text-body-sm">
                {formatJson(input)}
              </pre>
            </div>
          ) : null}
          {output !== undefined ? (
            <div className="mb-2 last:mb-0">
              <div className="text-label-sm text-tertiary mb-1 font-medium">
                Output
              </div>
              <pre className="bg-main border-border overflow-x-auto rounded border p-2 font-mono text-body-sm">
                {formatJson(output)}
              </pre>
            </div>
          ) : null}
          {errorText ? (
            <div className="mb-2 last:mb-0">
              <div className="text-label-sm text-error mb-1 font-medium">
                Error
              </div>
              <pre className="bg-main border-error/40 overflow-x-auto rounded border p-2 font-mono text-body-sm">
                {errorText}
              </pre>
            </div>
          ) : null}
        </Collapsible.Content>
      ) : null}
    </Collapsible.Root>
  )
}
