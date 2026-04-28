'use client'

import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

export interface ChatErrorProps {
  /** The error to display. Either an Error instance or a plain string. */
  error: Error | string
  /** Extra classes for the alignment row. */
  className?: string
}

/**
 * Inline error banner for chat surfaces. Renders a centered red-themed pill.
 * Use when the chat stream itself has failed (network, model error, etc.).
 */
export function ChatError({ error, className }: ChatErrorProps) {
  const message = typeof error === 'string' ? error : error.message
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn('flex justify-center', className)}
    >
      <div className="border-error/40 bg-error/5 rounded-2xl border px-4 py-3">
        <p className="text-error text-body-sm">Error: {message}</p>
      </div>
    </motion.div>
  )
}
