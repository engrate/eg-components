'use client'

import * as React from 'react'
import ReactMarkdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { CodeBlock } from '@/components/ui/CodeBlock'
import { Divider } from '@/components/ui/Divider'
import { Heading } from '@/components/ui/Heading'
import { Link } from '@/components/ui/Link'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/Table'
import { cn } from '@/lib/utils'

const extractCodeMeta = (
  child: React.ReactNode
): { code: string; language?: string } | null => {
  if (!React.isValidElement(child)) return null
  const props = child.props as {
    className?: string
    children?: React.ReactNode
  }
  const text =
    typeof props.children === 'string'
      ? props.children
      : Array.isArray(props.children)
        ? props.children.filter((c) => typeof c === 'string').join('')
        : null
  if (text === null) return null
  const langMatch = props.className?.match(/language-([\w-]+)/)
  return { code: text, language: langMatch?.[1] }
}

const markdownComponents: Components = {
  p: ({ className, ...props }) => (
    <p
      className={cn(
        'text-body-sm text-secondary mb-2 leading-relaxed last:mb-0',
        className
      )}
      {...props}
    />
  ),
  a: ({ className, children, href, ...props }) => (
    <Link
      href={href}
      variant="default"
      size="sm"
      className={cn('underline-offset-2', className)}
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      {children}
    </Link>
  ),
  ul: ({ className, ...props }) => (
    <ul
      className={cn(
        'text-body-sm text-secondary mb-2 list-disc space-y-1 pl-5 last:mb-0',
        className
      )}
      {...props}
    />
  ),
  ol: ({ className, ...props }) => (
    <ol
      className={cn(
        'text-body-sm text-secondary mb-2 list-decimal space-y-1 pl-5 last:mb-0',
        className
      )}
      {...props}
    />
  ),
  li: ({ className, ...props }) => (
    <li className={cn('leading-relaxed', className)} {...props} />
  ),
  h1: ({ className, children, ...props }) => (
    <Heading
      level="h3"
      as="h1"
      className={cn('mt-3 mb-2 first:mt-0', className)}
      {...props}
    >
      {children}
    </Heading>
  ),
  h2: ({ className, children, ...props }) => (
    <Heading
      level="h4"
      as="h2"
      className={cn('mt-3 mb-2 first:mt-0', className)}
      {...props}
    >
      {children}
    </Heading>
  ),
  h3: ({ className, children, ...props }) => (
    <Heading
      level="h4"
      as="h3"
      className={cn('text-lead mt-3 mb-2 first:mt-0', className)}
      {...props}
    >
      {children}
    </Heading>
  ),
  h4: ({ className, children, ...props }) => (
    <Heading
      level="h4"
      as="h4"
      className={cn('text-body mt-3 mb-2 first:mt-0', className)}
      {...props}
    >
      {children}
    </Heading>
  ),
  code: ({ className, children, ...props }) => (
    <code
      className={cn(
        'bg-card border-border text-primary rounded border px-1 py-0.5 font-mono text-[0.85em]',
        className
      )}
      {...props}
    >
      {children}
    </code>
  ),
  pre: ({ children }) => {
    // react-markdown wraps fenced code blocks as <pre><code class="language-ts">...
    // Pull the source + language back out and route to <CodeBlock>.
    const meta = extractCodeMeta(
      Array.isArray(children) ? children[0] : children
    )
    if (meta) {
      return <CodeBlock language={meta.language}>{meta.code}</CodeBlock>
    }
    return (
      <pre className="bg-card border-border text-body-sm my-2 overflow-x-auto rounded-md border p-3 font-mono">
        {children}
      </pre>
    )
  },
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn(
        'border-sunflower/50 text-secondary text-body-sm my-2 border-l-2 py-0.5 pl-3 italic',
        className
      )}
      {...props}
    />
  ),
  table: ({ children, className }) => (
    <div className={cn('my-3', className)}>
      <Table size="compact" bordered>
        {children}
      </Table>
    </div>
  ),
  thead: ({ children }) => <TableHeader>{children}</TableHeader>,
  tbody: ({ children }) => <TableBody>{children}</TableBody>,
  tr: ({ children }) => <TableRow>{children}</TableRow>,
  th: ({ children }) => <TableHead>{children}</TableHead>,
  td: ({ children }) => <TableCell>{children}</TableCell>,
  hr: ({ className, ...props }) => (
    <Divider className={cn('my-3', className)} {...props} />
  ),
  strong: ({ className, ...props }) => (
    <strong className={cn('text-primary font-medium', className)} {...props} />
  ),
  em: ({ className, ...props }) => (
    <em className={cn('italic', className)} {...props} />
  ),
}

export interface MarkdownTextProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'children'
> {
  /** Raw markdown text. Streaming-safe — partial markdown will render
   * incrementally as new tokens arrive. */
  children: string
}

/**
 * Renders streaming markdown text from an AI SDK `text` part. Each markdown
 * node is mapped to an Engrate primitive (Heading, Link, Table, CodeBlock,
 * Divider) so a model-authored table or code block looks identical to the
 * same content rendered anywhere else in the app.
 */
export function MarkdownText({
  children,
  className,
  ...props
}: MarkdownTextProps) {
  return (
    <div
      className={cn('text-body-sm text-secondary leading-relaxed', className)}
      {...props}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={markdownComponents}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}
