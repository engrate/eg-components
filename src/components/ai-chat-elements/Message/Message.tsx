'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { Eyebrow } from '@/components/ui/Eyebrow'
import { cn } from '@/lib/utils'

// Row wrapper drives alignment. User turns are right-aligned to preserve the
// chat-conversation metaphor; assistant + system flow full-width as prose.
const messageRowVariants = cva('flex w-full', {
  variants: {
    from: {
      assistant: 'block',
      user: 'justify-end',
      system: 'block',
    },
  },
  defaultVariants: {
    from: 'assistant',
  },
})

const messageBubbleVariants = cva('', {
  variants: {
    from: {
      // Assistant turns sit on the page like prose — no container, the
      // background is the bubble.
      assistant: 'text-primary w-full',
      // User turns are right-aligned bubbles tinted with sunflower so the
      // brand color is clearly present without going full SMS-bubble.
      user: 'bg-sunflower text-primary max-w-[75%] rounded-2xl px-4 py-3',
      // System notes live as marginal italics, almost a footnote.
      system: 'text-tertiary text-body-sm w-full italic',
    },
  },
  defaultVariants: {
    from: 'assistant',
  },
})

export interface MessageProps
  extends
    Omit<React.HTMLAttributes<HTMLDivElement>, 'role'>,
    VariantProps<typeof messageBubbleVariants> {
  /** Role label rendered above the content as a small eyebrow. Pass only
   * for the first message of a turn-streak; consecutive messages from the
   * same speaker should omit it. */
  eyebrow?: React.ReactNode
}

/**
 * A single conversation turn. Assistant messages are unstyled prose on the
 * page background; user messages are right-aligned sunflower-tinted bubbles;
 * system notes are inline italics. The optional `eyebrow` labels the speaker
 * — pass it once per turn-streak.
 */
export function Message({
  from = 'assistant',
  eyebrow,
  className,
  children,
  ...props
}: MessageProps) {
  return (
    <div className={cn(messageRowVariants({ from }))}>
      <div
        className={cn(messageBubbleVariants({ from }), className)}
        {...props}
      >
        {eyebrow ? (
          <Eyebrow size="sm" className="text-tertiary mb-1.5 block">
            {eyebrow}
          </Eyebrow>
        ) : null}
        {children}
      </div>
    </div>
  )
}
