'use client'

import * as React from 'react'
import ReactMarkdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { cn } from '@/lib/utils'

const markdownComponents: Components = {
  p: ({ className, ...props }) => (
    <p className={cn('mb-2 leading-relaxed last:mb-0', className)} {...props} />
  ),
  a: ({ className, children, ...props }) => (
    <a
      className={cn('underline underline-offset-2', className)}
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      {children}
    </a>
  ),
  ul: ({ className, ...props }) => (
    <ul className={cn('mb-2 list-disc pl-5', className)} {...props} />
  ),
  ol: ({ className, ...props }) => (
    <ol className={cn('mb-2 list-decimal pl-5', className)} {...props} />
  ),
  li: ({ className, ...props }) => (
    <li className={cn('mb-1', className)} {...props} />
  ),
  h1: ({ className, children, ...props }) => (
    <h1 className={cn('text-h3 font-display mt-3 mb-2', className)} {...props}>
      {children}
    </h1>
  ),
  h2: ({ className, children, ...props }) => (
    <h2 className={cn('text-h4 font-display mt-3 mb-2', className)} {...props}>
      {children}
    </h2>
  ),
  h3: ({ className, children, ...props }) => (
    <h3
      className={cn('text-lead font-display mt-3 mb-2', className)}
      {...props}
    >
      {children}
    </h3>
  ),
  code: ({ className, ...props }) => {
    // Inline code (block code goes through <pre>)
    return (
      <code
        className={cn(
          'bg-card border-border rounded border px-1 py-0.5 font-mono text-[0.9em]',
          className
        )}
        {...props}
      />
    )
  },
  pre: ({ className, ...props }) => (
    <pre
      className={cn(
        'bg-card border-border text-body-sm my-2 overflow-x-auto rounded border p-3 font-mono',
        className
      )}
      {...props}
    />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn(
        'border-border my-2 border-l-2 pl-3 italic opacity-90',
        className
      )}
      {...props}
    />
  ),
  table: ({ className, ...props }) => (
    <div className="my-2 overflow-x-auto">
      <table
        className={cn('border-border w-full border-collapse border', className)}
        {...props}
      />
    </div>
  ),
  th: ({ className, ...props }) => (
    <th
      className={cn(
        'border-border bg-card border px-2 py-1 text-left font-medium',
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td
      className={cn('border-border border px-2 py-1', className)}
      {...props}
    />
  ),
  hr: ({ className, ...props }) => (
    <hr className={cn('border-border my-3', className)} {...props} />
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
 * Renders streaming markdown text from an AI SDK `text` part. Supports GFM
 * (tables, strikethrough, task lists). Inline code, fenced code, blockquotes,
 * lists, and links are all themed with Engrate design tokens.
 */
export function MarkdownText({
  children,
  className,
  ...props
}: MarkdownTextProps) {
  return (
    <div className={cn('text-small leading-relaxed', className)} {...props}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={markdownComponents}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}
