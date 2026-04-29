'use client'

import * as Collapsible from '@radix-ui/react-collapsible'
import {
  ChevronRight,
  CircleAlert,
  CircleCheck,
  CircleSlash,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import { motion } from 'motion/react'
import * as React from 'react'

import { Button } from '@/components/ui/Button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/Table'
import { cn } from '@/lib/utils'

import { MarkdownText } from '../MarkdownText'

export type ToolCallState =
  | 'input-streaming'
  | 'input-available'
  | 'approval-requested'
  | 'approval-responded'
  | 'output-available'
  | 'output-error'
  | 'output-denied'

export interface ToolCallLabel {
  /** Verb form rendered while the tool is in flight, e.g. "Looking up your
   * profile". When omitted, falls back to `description`. */
  running?: string
  /** Verb form rendered after the tool completes, e.g. "Looked up your
   * profile". When omitted, falls back to `description`. */
  done?: string
  /** Single neutral phrase used for both states when running/done aren't
   * provided. Often sourced from the MCP tool's `description` field — this
   * lets consumers pass `Object.fromEntries(mcpTools.map(t => [t.name, {
   * description: t.description }]))` and skip hand-tuning every verb. */
  description?: string
  /** Optional icon override. Defaults to a sunflower-tinted Sparkles. */
  icon?: LucideIcon
}

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
  /** Per-tool friendly labels. Falls back to a humanized tool name when a
   * tool is missing from the map. */
  labelMap?: Record<string, ToolCallLabel>
  /** Render the output yourself when you know its shape. Return `null` (or
   * omit) to fall back to the smart/JSON renderer. */
  renderOutput?: (toolName: string, output: unknown) => React.ReactNode | null
  /** Auto-detect array-of-objects → Table and markdown-y strings → MarkdownText.
   * Disable to always render output as raw JSON.
   * @default true */
  smartOutput?: boolean
  /** Wired when `state === 'approval-requested'`. */
  onApprove?: () => void
  /** Wired when `state === 'approval-requested'`. */
  onDeny?: () => void
}

const titleCase = (raw: string): string =>
  raw
    .replace(/[_-]+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase())

const isPendingState = (state: ToolCallState): boolean =>
  state === 'input-streaming' ||
  state === 'input-available' ||
  state === 'approval-requested'

const formatJson = (value: unknown): string => {
  try {
    return JSON.stringify(value, null, 2)
  } catch {
    return String(value)
  }
}

const looksLikeMarkdown = (s: string): boolean =>
  /(^|\n)(#{1,6} |[-*] |\d+\. |> |```)/.test(s) || /\|.+\|/.test(s)

const isUniformObjectArray = (
  value: unknown
): value is readonly Record<string, unknown>[] => {
  if (!Array.isArray(value) || value.length === 0) return false
  const first = value[0]
  if (first === null || typeof first !== 'object' || Array.isArray(first)) {
    return false
  }
  const keys = Object.keys(first)
  if (keys.length === 0 || keys.length > 8) return false
  return value.every(
    (row) =>
      row !== null &&
      typeof row === 'object' &&
      !Array.isArray(row) &&
      keys.every((k) => k in (row as Record<string, unknown>))
  )
}

const formatCell = (value: unknown): string => {
  if (value === null || value === undefined) return ''
  if (typeof value === 'object') return JSON.stringify(value)
  return String(value)
}

const SmartOutput: React.FC<{ output: unknown }> = ({ output }) => {
  if (typeof output === 'string') {
    return looksLikeMarkdown(output) ? (
      <MarkdownText>{output}</MarkdownText>
    ) : (
      <pre className="bg-card text-body-sm overflow-x-auto rounded p-2 font-mono whitespace-pre-wrap">
        {output}
      </pre>
    )
  }
  if (isUniformObjectArray(output)) {
    const firstRow = output[0]
    if (!firstRow) return null
    const columns = Object.keys(firstRow)
    return (
      <Table size="compact" bordered>
        <TableHeader>
          <TableRow>
            {columns.map((key) => (
              <TableHead key={key}>{titleCase(key)}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {output.map((row, i) => (
            <TableRow key={i}>
              {columns.map((key) => (
                <TableCell key={key}>{formatCell(row[key])}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  return (
    <pre className="bg-card text-body-sm overflow-x-auto rounded p-2 font-mono">
      {formatJson(output)}
    </pre>
  )
}

const StatusIcon: React.FC<{ state: ToolCallState }> = ({ state }) => {
  const pending = isPendingState(state)
  if (pending) {
    return (
      <motion.span
        key="pending"
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.55, 1, 0.55],
        }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="bg-sunflower inline-block h-2 w-2 rounded-full"
        aria-hidden="true"
      />
    )
  }
  if (state === 'output-error') {
    return (
      <motion.span
        key="error"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="text-error inline-flex"
        aria-hidden="true"
      >
        <CircleAlert size={14} />
      </motion.span>
    )
  }
  if (state === 'output-denied') {
    return (
      <motion.span
        key="denied"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="text-tertiary inline-flex"
        aria-hidden="true"
      >
        <CircleSlash size={14} />
      </motion.span>
    )
  }
  // approval-responded, output-available
  return (
    <motion.span
      key="done"
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="text-tertiary inline-flex"
      aria-hidden="true"
    >
      <CircleCheck size={14} />
    </motion.span>
  )
}

const isCompletedState = (state: ToolCallState): boolean =>
  state === 'output-available' ||
  state === 'approval-responded' ||
  state === 'output-error' ||
  state === 'output-denied'

const buildPhraseLabel = (
  toolName: string,
  state: ToolCallState,
  labelMap?: Record<string, ToolCallLabel>
): { phrase: string; icon: LucideIcon } => {
  const entry = labelMap?.[toolName]
  const icon = entry?.icon ?? Sparkles

  // 1. Hand-tuned running/done verbs win.
  const verb = entry
    ? isCompletedState(state)
      ? entry.done
      : entry.running
    : null
  if (verb) return { phrase: verb, icon }

  // 2. Description fallback — same phrase regardless of state, status icon
  // disambiguates pending vs done. Often sourced from MCP tool descriptions.
  if (entry?.description) {
    const phrase =
      state === 'input-streaming' || state === 'input-available'
        ? `${entry.description}…`
        : entry.description
    return { phrase, icon }
  }

  // 3. Last resort: humanize the canonical tool name and prefix with a verb.
  const humanized = titleCase(toolName)
  switch (state) {
    case 'input-streaming':
    case 'input-available':
      return { phrase: `Running ${humanized}…`, icon }
    case 'approval-requested':
      return { phrase: `Awaiting approval — ${humanized}`, icon }
    case 'approval-responded':
      return { phrase: `Approved ${humanized}`, icon }
    case 'output-available':
      return { phrase: `Used ${humanized}`, icon }
    case 'output-error':
      return { phrase: `Failed ${humanized}`, icon }
    case 'output-denied':
      return { phrase: `Denied ${humanized}`, icon }
  }
}

/**
 * Inline rendering for an MCP / AI tool invocation. While pending, sits in
 * the message stream as a flowing sentence with a pulsing sunflower dot.
 * Once complete, becomes a collapsible pill with input/output details. The
 * output panel auto-detects table-like data and markdown strings; pass a
 * `renderOutput` for richer custom rendering.
 */
export function ToolCall({
  toolName,
  state,
  input,
  output,
  errorText,
  showDetails = true,
  labelMap,
  renderOutput,
  smartOutput = true,
  onApprove,
  onDeny,
  className,
  ...props
}: ToolCallProps) {
  const pending = isPendingState(state)
  const errored = state === 'output-error'
  const { phrase, icon: ToolIcon } = buildPhraseLabel(toolName, state, labelMap)
  const hasDetails =
    showDetails && (input !== undefined || output !== undefined || errorText)
  const showApproval = state === 'approval-requested'
  const [open, setOpen] = React.useState(false)

  // Pending state: live in the message flow as text, not a card. Reserves
  // the framed pill for completed invocations.
  if (pending && !showApproval) {
    return (
      <div
        className={cn(
          'text-label text-tertiary my-1 flex items-center gap-2',
          className
        )}
        {...props}
      >
        <StatusIcon state={state} />
        <ToolIcon size={12} className="text-tertiary" aria-hidden="true" />
        <span>{phrase}</span>
      </div>
    )
  }

  return (
    <Collapsible.Root
      open={open}
      onOpenChange={setOpen}
      className={cn('group my-2', className)}
      {...props}
    >
      <Collapsible.Trigger
        className={cn(
          'flex w-full items-center gap-2 text-left',
          hasDetails && 'cursor-pointer'
        )}
        disabled={!hasDetails}
        asChild
      >
        <button type="button">
          <StatusIcon state={state} />
          <span
            className={cn(
              'text-label-sm',
              errored ? 'text-error' : 'text-secondary'
            )}
          >
            {phrase}
          </span>
          {hasDetails ? (
            <motion.span
              className="text-tertiary ml-0.5 inline-flex opacity-0 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100 data-[state=open]:opacity-100"
              animate={{ rotate: open ? 90 : 0 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              data-state={open ? 'open' : 'closed'}
            >
              <ChevronRight size={12} aria-hidden="true" />
            </motion.span>
          ) : null}
        </button>
      </Collapsible.Trigger>
      {showApproval ? (
        <div className="mt-2 flex items-center gap-2">
          <Button
            type="button"
            size="sm"
            variant="primary"
            onClick={onApprove}
            disabled={!onApprove}
          >
            Approve
          </Button>
          <Button
            type="button"
            size="sm"
            variant="ghost"
            onClick={onDeny}
            disabled={!onDeny}
          >
            Deny
          </Button>
        </div>
      ) : null}
      {hasDetails ? (
        <Collapsible.Content forceMount asChild>
          <CollapsibleBody
            open={open}
            input={input}
            output={output}
            errorText={errorText}
            renderOutput={renderOutput}
            smartOutput={smartOutput}
            toolName={toolName}
          />
        </Collapsible.Content>
      ) : null}
    </Collapsible.Root>
  )
}

interface CollapsibleBodyProps {
  open: boolean
  input: unknown
  output: unknown
  errorText?: string
  renderOutput?: (toolName: string, output: unknown) => React.ReactNode | null
  smartOutput: boolean
  toolName: string
}

const CollapsibleBody = React.forwardRef<HTMLDivElement, CollapsibleBodyProps>(
  function CollapsibleBody(
    { open, input, output, errorText, renderOutput, smartOutput, toolName },
    ref
  ) {
    const customOutput =
      renderOutput && output !== undefined
        ? renderOutput(toolName, output)
        : null

    return (
      <motion.div
        ref={ref}
        initial={false}
        animate={open ? 'open' : 'closed'}
        variants={{
          closed: { height: 0, opacity: 0 },
          open: { height: 'auto', opacity: 1 },
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="overflow-hidden"
      >
        <div className="mt-2 space-y-3 pl-5">
          <div className="text-label-sm text-tertiary font-mono">
            <span className="opacity-60">tool </span>
            <code className="bg-card rounded px-1 py-0.5">{toolName}</code>
          </div>
          {input !== undefined ? (
            <div>
              <div className="text-label-sm text-tertiary mb-1 font-mono tracking-wider uppercase">
                Input
              </div>
              <pre className="bg-card text-body-sm overflow-x-auto rounded p-2 font-mono">
                {formatJson(input)}
              </pre>
            </div>
          ) : null}
          {output !== undefined ? (
            <div>
              <div className="text-label-sm text-tertiary mb-1 font-mono tracking-wider uppercase">
                Output
              </div>
              {customOutput ? (
                customOutput
              ) : smartOutput ? (
                <SmartOutput output={output} />
              ) : (
                <pre className="bg-card text-body-sm overflow-x-auto rounded p-2 font-mono">
                  {formatJson(output)}
                </pre>
              )}
            </div>
          ) : null}
          {errorText ? (
            <div>
              <div className="text-label-sm text-error mb-1 font-mono tracking-wider uppercase">
                Error
              </div>
              <pre className="bg-error/5 text-error text-body-sm overflow-x-auto rounded p-2 font-mono">
                {errorText}
              </pre>
            </div>
          ) : null}
        </div>
      </motion.div>
    )
  }
)
