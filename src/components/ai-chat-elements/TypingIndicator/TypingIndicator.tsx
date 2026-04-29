'use client'

import { motion } from 'motion/react'
import * as React from 'react'

import { Eyebrow } from '@/components/ui/Eyebrow'
import { cn } from '@/lib/utils'

export interface TypingIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional eyebrow label rendered above the dots — usually only when this
   * is the first chunk of an assistant turn. Most callers can omit it,
   * since streaming text reveal is itself the primary indicator and dots
   * are a fallback for tool-call pauses. */
  eyebrow?: React.ReactNode
}

/**
 * Three bouncing dots, no bubble. Use as a fallback indicator when the
 * assistant is busy but no streaming text has arrived yet — for example,
 * a tool call that takes several seconds before a response begins. For
 * actively streaming text, the token reveal is its own indicator.
 */
export function TypingIndicator({
  eyebrow,
  className,
  ...props
}: TypingIndicatorProps) {
  return (
    <div className={cn('w-full', className)} {...props}>
      {eyebrow ? (
        <Eyebrow size="sm" className="text-tertiary mb-1.5 block">
          {eyebrow}
        </Eyebrow>
      ) : null}
      <div className="flex items-center gap-1" aria-label="Working">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="bg-tertiary h-1.5 w-1.5 rounded-full"
            animate={{
              y: [0, -4, 0],
              opacity: [0.4, 1, 0.4],
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
  )
}
