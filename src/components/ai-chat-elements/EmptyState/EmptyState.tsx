'use client'

import { motion } from 'motion/react'
import * as React from 'react'

import { cn } from '@/lib/utils'

export interface EmptyStateProps {
  /** Headline shown to the user. */
  title?: React.ReactNode
  /** Compact mode for inline placement (smaller vertical padding). */
  compact?: boolean
  /** Extra classes for the wrapper. */
  className?: string
  /** Slot below the title — typically a `<Suggestions>` grid. */
  children?: React.ReactNode
}

/**
 * Landing copy shown in an empty chat thread, before the user has sent
 * anything. Render `<Suggestion>` chips as children to give them a starting
 * point.
 */
export function EmptyState({
  title = 'Ask me anything…',
  compact = false,
  className,
  children,
}: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className={cn(
        'text-center',
        compact ? 'py-4' : 'py-12',
        className,
      )}
    >
      <p className="text-secondary text-body">{title}</p>
      {children ? <div className="mt-6">{children}</div> : null}
    </motion.div>
  )
}
