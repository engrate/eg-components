'use client'

import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

export interface TypingIndicatorProps {
  /** Optional name shown above the dots (e.g. "Ellie"). Omit to hide. */
  name?: string
  /** Extra classes for the alignment row. */
  className?: string
}

/**
 * Three bouncing dots in an assistant-styled bubble. Show while the model is
 * generating a response, before the first message part arrives.
 */
export function TypingIndicator({ name, className }: TypingIndicatorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={cn('flex justify-start', className)}
    >
      <div className="bg-alt rounded-2xl px-4 py-3">
        {name ? (
          <div className="text-label-sm mb-1 font-medium opacity-70">{name}</div>
        ) : null}
        <div className="flex items-center gap-1">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="bg-tertiary h-2 w-2 rounded-full"
              animate={{
                y: [0, -6, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.15,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
