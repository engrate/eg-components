'use client'

import { AppRenderer } from '@mcp-ui/client'
import type { CallToolResult } from '@modelcontextprotocol/sdk/types.js'
import * as React from 'react'

import { cn } from '@/lib/utils'

export interface UIResourceFetched {
  uri: string
  mimeType?: string
  text?: string
  blob?: string
}

export interface UIResourcePartProps {
  /** MCP tool name that produced this part — passed through to the iframe so
   * the guest UI can route on it. */
  toolName: string
  /** `ui://...` URI of the resource that holds the HTML shell. */
  resourceUri: string
  /** The `output` field of an AI SDK `DynamicToolUIPart` in `output-available`
   * state. Forwarded to the iframe as a CallToolResult so the guest UI can
   * render the payload. Shape may be `{ type: 'content', value: ContentBlock[] }`
   * (the @ai-sdk/mcp adapter shape) or any other JSON serialisable value;
   * unknown shapes fall back to an empty content array. */
  toolOutput: unknown
  /** Resource-fetch implementation. Injected so the host can route through a
   * server-side proxy (the browser cannot talk to MCP directly because MCP
   * needs a bearer token). */
  fetchResource: (uri: string) => Promise<UIResourceFetched>
  /** Where the sandbox proxy HTML is hosted. Defaults to
   * `/sandbox_proxy.html` on the current origin. */
  sandboxUrl?: URL
  /** Extra wrapper classes (the iframe itself fills the wrapper). */
  className?: string
}

/**
 * Renders an MCP App UI resource inline as an interactive widget in a chat
 * surface. Use this from a `<MessageContent>` `renderTool` override when a
 * tool result should display as a widget rather than as plain JSON.
 *
 * Wraps `@mcp-ui/client`'s `<AppRenderer>` and handles the resource-fetch
 * lifecycle. Pre-fetches the HTML body via `fetchResource` (typically a
 * server-side proxy that talks to MCP) and forwards the tool output to the
 * iframe via the standard MCP Apps postMessage handshake.
 *
 * Note: `@ai-sdk/mcp` strips `annotations.audience` from content blocks
 * before they reach the browser, so the guest UI must use a positional or
 * structural heuristic to pick the user-facing payload from `toolResult.content`.
 */
export function UIResourcePart({
  toolName,
  resourceUri,
  toolOutput,
  fetchResource,
  sandboxUrl,
  className,
}: UIResourcePartProps) {
  const [html, setHtml] = React.useState<string | null>(null)
  const [error, setError] = React.useState<Error | null>(null)

  const resolvedSandboxUrl = React.useMemo(
    () => sandboxUrl ?? new URL('/sandbox_proxy.html', window.location.origin),
    [sandboxUrl]
  )

  React.useEffect(() => {
    let cancelled = false
    setHtml(null)
    setError(null)
    fetchResource(resourceUri)
      .then((res) => {
        if (cancelled) return
        if (res.text) {
          setHtml(res.text)
        } else if (res.blob) {
          setHtml(atob(res.blob))
        } else {
          setError(new Error('Resource has no text or blob body'))
        }
      })
      .catch((err: unknown) => {
        if (cancelled) return
        setError(err instanceof Error ? err : new Error(String(err)))
      })
    return () => {
      cancelled = true
    }
  }, [resourceUri, fetchResource])

  const toolResult = React.useMemo(
    () => normalizeToolOutput(toolOutput),
    [toolOutput]
  )

  if (error) {
    return (
      <div
        className={cn(
          'border-destructive/40 bg-destructive/5 text-destructive text-body-sm rounded-md border px-3 py-2',
          className
        )}
      >
        Failed to load visualization: {error.message}
      </div>
    )
  }

  if (!html) {
    return (
      <div
        className={cn(
          'text-secondary text-body-sm px-3 py-2 italic',
          className
        )}
      >
        Loading visualization…
      </div>
    )
  }

  return (
    <div className={cn('overflow-hidden rounded-md', className)}>
      <AppRenderer
        sandbox={{ url: resolvedSandboxUrl }}
        toolName={toolName}
        html={html}
        toolResult={toolResult}
        onError={(err) => setError(err)}
      />
    </div>
  )
}

interface AiSdkContentOutput {
  type: 'content'
  value: readonly { type: string; text?: string }[]
}

function isCallToolResult(value: unknown): value is CallToolResult {
  return (
    typeof value === 'object' &&
    value !== null &&
    'content' in value &&
    Array.isArray((value as { content: unknown }).content)
  )
}

function isAiSdkContentOutput(value: unknown): value is AiSdkContentOutput {
  return (
    typeof value === 'object' &&
    value !== null &&
    'type' in value &&
    (value as { type: unknown }).type === 'content' &&
    'value' in value &&
    Array.isArray((value as { value: unknown }).value)
  )
}

// AI SDK's `DynamicToolUIPart.output` for MCP tools is the raw
// `CallToolResult` from the server (`{content, isError, ...}`) — the
// `mcpToModelOutput` conversion only runs when building messages for the LLM,
// not when streaming to the UI. mcp-ui's `<AppRenderer>` expects exactly that
// raw shape for `toolResult`, so pass it through. Fall back to wrapping if we
// somehow get the model-output shape (`{type, value}`) or a bare string.
function normalizeToolOutput(output: unknown): CallToolResult {
  if (isCallToolResult(output)) {
    return output
  }
  if (isAiSdkContentOutput(output)) {
    return {
      content: output.value
        .filter(
          (c): c is { type: string; text: string } => typeof c.text === 'string'
        )
        .map((c) => ({ type: 'text' as const, text: c.text })),
    }
  }
  if (typeof output === 'string') {
    return { content: [{ type: 'text', text: output }] }
  }
  return { content: [] }
}
