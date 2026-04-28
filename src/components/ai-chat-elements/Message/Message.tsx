'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const messageRowVariants = cva('flex w-full', {
  variants: {
    from: {
      user: 'justify-end',
      assistant: 'justify-start',
      system: 'justify-center',
    },
  },
  defaultVariants: {
    from: 'assistant',
  },
})

const messageBubbleVariants = cva(
  'max-w-[85%] rounded-2xl px-4 py-3 text-small',
  {
    variants: {
      from: {
        user: 'bg-sunflower text-gray-900',
        assistant: 'bg-alt text-gray-900',
        system: 'bg-card text-secondary border-border border italic',
      },
    },
    defaultVariants: {
      from: 'assistant',
    },
  },
)

export interface MessageProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'role'>,
    VariantProps<typeof messageBubbleVariants> {
  /** Display name shown above the message body. Omit to hide the header. */
  name?: string
  /** Override the row class (alignment wrapper). */
  rowClassName?: string
}

/**
 * Layout primitive for a single chat message bubble. Aligns left/right based
 * on `from`, renders a small name header, and slots `children` for the
 * actual content. Pair with `<MessageContent>` to render typed parts from
 * the AI SDK.
 */
export function Message({
  from = 'assistant',
  name,
  className,
  rowClassName,
  children,
  ...props
}: MessageProps) {
  return (
    <div className={cn(messageRowVariants({ from }), rowClassName)}>
      <div className={cn(messageBubbleVariants({ from }), className)} {...props}>
        {name ? (
          <div className="text-label-sm mb-1 font-medium opacity-70">{name}</div>
        ) : null}
        {children}
      </div>
    </div>
  )
}
