'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'

const NEAR_BOTTOM_THRESHOLD_PX = 32
const EDGE_FADE_PX = 24

const fadeMaskStyle = {
  WebkitMaskImage: `linear-gradient(to bottom, transparent 0, #000 ${EDGE_FADE_PX}px, #000 calc(100% - ${EDGE_FADE_PX}px), transparent 100%)`,
  maskImage: `linear-gradient(to bottom, transparent 0, #000 ${EDGE_FADE_PX}px, #000 calc(100% - ${EDGE_FADE_PX}px), transparent 100%)`,
} as const

export interface MessageListProps extends React.HTMLAttributes<HTMLDivElement> {
  /** When the user is already at the bottom, automatically scroll new
   * messages into view. When the user has scrolled up, leave them be.
   * @default true */
  stickToBottom?: boolean
  /** Apply a soft mask at the top and bottom so messages fade into the
   * scroll edges. Subtle, ~24px on each side.
   * @default false */
  fadeEdges?: boolean
}

/**
 * Scrollable chat message container with smart auto-scroll behavior. Stays
 * pinned to the bottom while the user is reading the latest message; once
 * they scroll up to revisit history, new messages no longer yank them away.
 */
export const MessageList = React.forwardRef<HTMLDivElement, MessageListProps>(
  (
    {
      stickToBottom = true,
      fadeEdges = false,
      className,
      style,
      children,
      onScroll,
      ...props
    }: MessageListProps,
    forwardedRef
  ) => {
    const innerRef = React.useRef<HTMLDivElement | null>(null)

    const setRefs = React.useCallback(
      (node: HTMLDivElement | null) => {
        innerRef.current = node
        if (typeof forwardedRef === 'function') {
          forwardedRef(node)
        } else if (forwardedRef) {
          forwardedRef.current = node
        }
      },
      [forwardedRef]
    )

    const isAtBottomRef = React.useRef(true)
    const lastChildrenRef = React.useRef(children)

    const handleScroll = React.useCallback(
      (event: React.UIEvent<HTMLDivElement>) => {
        const el = event.currentTarget
        const distance = el.scrollHeight - el.scrollTop - el.clientHeight
        isAtBottomRef.current = distance <= NEAR_BOTTOM_THRESHOLD_PX
        onScroll?.(event)
      },
      [onScroll]
    )

    React.useEffect(() => {
      if (!stickToBottom) return
      if (children === lastChildrenRef.current) return
      lastChildrenRef.current = children
      const el = innerRef.current
      if (!el) return
      if (!isAtBottomRef.current) return
      el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
    }, [children, stickToBottom])

    // Initial mount: jump to bottom without animation so the freshest
    // message is in view from the first render.
    React.useEffect(() => {
      const el = innerRef.current
      if (!el) return
      el.scrollTop = el.scrollHeight
    }, [])

    return (
      <div
        ref={setRefs}
        onScroll={handleScroll}
        className={cn('flex-1 overflow-y-auto', className)}
        style={fadeEdges ? { ...fadeMaskStyle, ...style } : style}
        {...props}
      >
        {children}
      </div>
    )
  }
)
MessageList.displayName = 'MessageList'
