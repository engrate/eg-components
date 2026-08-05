'use client'

import { Check, Copy } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import * as React from 'react'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash'
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css'
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json'
import markup from 'react-syntax-highlighter/dist/esm/languages/prism/markup'
import python from 'react-syntax-highlighter/dist/esm/languages/prism/python'
import sql from 'react-syntax-highlighter/dist/esm/languages/prism/sql'
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx'
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript'
import yaml from 'react-syntax-highlighter/dist/esm/languages/prism/yaml'

import { cn } from '@/lib/utils'

SyntaxHighlighter.registerLanguage('bash', bash)
SyntaxHighlighter.registerLanguage('sh', bash)
SyntaxHighlighter.registerLanguage('shell', bash)
SyntaxHighlighter.registerLanguage('css', css)
SyntaxHighlighter.registerLanguage('html', markup)
SyntaxHighlighter.registerLanguage('xml', markup)
SyntaxHighlighter.registerLanguage('json', json)
SyntaxHighlighter.registerLanguage('python', python)
SyntaxHighlighter.registerLanguage('py', python)
SyntaxHighlighter.registerLanguage('sql', sql)
SyntaxHighlighter.registerLanguage('ts', typescript)
SyntaxHighlighter.registerLanguage('typescript', typescript)
SyntaxHighlighter.registerLanguage('tsx', tsx)
SyntaxHighlighter.registerLanguage('js', typescript)
SyntaxHighlighter.registerLanguage('javascript', typescript)
SyntaxHighlighter.registerLanguage('jsx', tsx)
SyntaxHighlighter.registerLanguage('yaml', yaml)
SyntaxHighlighter.registerLanguage('yml', yaml)

// Restrained Engrate theme: 90% gray, hints of warm-purple (strings) and
// deep-blue (numbers / builtins). No neon. Palette mirrors the design tokens
// in src/styles/index.css.
const engrateTheme: Record<string, React.CSSProperties> = {
  'code[class*="language-"]': {
    color: 'var(--color-secondary)',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8125rem',
    lineHeight: 1.6,
    background: 'transparent',
    direction: 'ltr',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    tabSize: 2,
    hyphens: 'none',
  },
  'pre[class*="language-"]': {
    color: 'var(--color-secondary)',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8125rem',
    lineHeight: 1.6,
    background: 'transparent',
    margin: 0,
    padding: 0,
    overflow: 'auto',
  },
  comment: { color: 'var(--color-tertiary)', fontStyle: 'italic' },
  prolog: { color: 'var(--color-tertiary)', fontStyle: 'italic' },
  doctype: { color: 'var(--color-tertiary)', fontStyle: 'italic' },
  cdata: { color: 'var(--color-tertiary)', fontStyle: 'italic' },
  punctuation: { color: 'var(--color-tertiary)' },
  property: { color: 'var(--color-deep-blue)' },
  tag: { color: 'var(--color-warm-purple)' },
  boolean: { color: 'var(--color-deep-blue)' },
  number: { color: 'var(--color-deep-blue)' },
  constant: { color: 'var(--color-deep-blue)' },
  symbol: { color: 'var(--color-deep-blue)' },
  selector: { color: 'var(--color-warm-purple)' },
  'attr-name': { color: 'var(--color-deep-blue)' },
  string: { color: 'var(--color-warm-purple)' },
  char: { color: 'var(--color-warm-purple)' },
  builtin: { color: 'var(--color-deep-blue)' },
  inserted: { color: 'var(--color-warm-purple)' },
  operator: { color: 'var(--color-tertiary)' },
  entity: { color: 'var(--color-primary)' },
  url: { color: 'var(--color-deep-blue)', textDecoration: 'underline' },
  '.language-css .token.string': { color: 'var(--color-warm-purple)' },
  '.style .token.string': { color: 'var(--color-warm-purple)' },
  atrule: { color: 'var(--color-primary)' },
  'attr-value': { color: 'var(--color-warm-purple)' },
  keyword: { color: 'var(--color-primary)' },
  function: { color: 'var(--color-primary)' },
  'class-name': { color: 'var(--color-primary)' },
  regex: { color: 'var(--color-warm-purple)' },
  important: { color: 'var(--color-primary)' },
  variable: { color: 'var(--color-secondary)' },
  bold: { fontWeight: 'normal' },
  italic: { fontStyle: 'italic' },
}

const stripLanguagePrefix = (raw: string | undefined): string | undefined => {
  if (!raw) return undefined
  return raw.startsWith('language-') ? raw.slice('language-'.length) : raw
}

export interface CodeBlockProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'children'
> {
  /** Source code to render. Trailing newlines are trimmed. */
  children: string
  /** Prism language id. Accepts `ts`, `language-ts`, etc. Falls back to plain
   * monospace when the language is unknown. */
  language?: string
  /** Show a copy-to-clipboard button in the top-right (visible on hover).
   * @default true */
  showCopy?: boolean
}

/**
 * Syntax-highlighted code block themed for the Engrate palette. Keeps the
 * 10/90 rule — most tokens stay gray, with sparing warm-purple for strings
 * and deep-blue for numbers/builtins. Pair with `MarkdownText` for fenced
 * code in chat surfaces.
 */
export const CodeBlock = React.forwardRef<HTMLDivElement, CodeBlockProps>(
  (
    {
      children,
      language,
      showCopy = true,
      className,
      ...props
    }: CodeBlockProps,
    ref
  ) => {
    const [copied, setCopied] = React.useState(false)
    const resolvedLanguage = stripLanguagePrefix(language)
    const code = children.replace(/\n+$/, '')

    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(code)
        setCopied(true)
        window.setTimeout(() => setCopied(false), 1500)
      } catch {
        // Clipboard blocked (insecure context, etc.) — silently no-op.
      }
    }

    return (
      <div
        ref={ref}
        className={cn(
          'group bg-card border-border relative my-2 overflow-hidden rounded-md border',
          className
        )}
        {...props}
      >
        {resolvedLanguage ? (
          <span
            className={cn(
              'text-label-sm text-tertiary absolute top-2 left-3 z-[1] font-mono uppercase opacity-60'
            )}
            aria-hidden="true"
          >
            {resolvedLanguage}
          </span>
        ) : null}
        {showCopy ? (
          <button
            type="button"
            onClick={handleCopy}
            aria-label={copied ? 'Copied' : 'Copy code'}
            className={cn(
              'text-tertiary hover:bg-alt focus-visible:ring-sunflower absolute top-1.5 right-1.5 z-[1] inline-flex h-7 w-7 items-center justify-center rounded transition-opacity focus-visible:ring-2 focus-visible:outline-none',
              'opacity-0 group-hover:opacity-100 focus-visible:opacity-100'
            )}
          >
            <AnimatePresence initial={false} mode="wait">
              {copied ? (
                <motion.span
                  key="check"
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.6, opacity: 0 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  className="text-primary inline-flex"
                >
                  <Check size={14} aria-hidden="true" />
                </motion.span>
              ) : (
                <motion.span
                  key="copy"
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.6, opacity: 0 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  className="inline-flex"
                >
                  <Copy size={14} aria-hidden="true" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        ) : null}
        <div
          className={cn(
            'overflow-x-auto p-3',
            resolvedLanguage ? 'pt-7' : 'pt-3'
          )}
        >
          {resolvedLanguage ? (
            <SyntaxHighlighter
              language={resolvedLanguage}
              style={engrateTheme}
              PreTag="div"
              CodeTag="code"
              customStyle={{
                background: 'transparent',
                margin: 0,
                padding: 0,
              }}
            >
              {code}
            </SyntaxHighlighter>
          ) : (
            <div className="text-body-sm text-primary font-mono">
              <code className="whitespace-pre">{code}</code>
            </div>
          )}
        </div>
      </div>
    )
  }
)
CodeBlock.displayName = 'CodeBlock'
