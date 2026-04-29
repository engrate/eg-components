'use client'

import { motion, useReducedMotion } from 'motion/react'
import * as React from 'react'

import { cn } from '@/lib/utils'

export interface EllieMarkProps extends Omit<
  React.SVGAttributes<SVGSVGElement>,
  | 'children'
  | 'values'
  | 'onAnimationStart'
  | 'onAnimationEnd'
  | 'onAnimationIteration'
  | 'onDrag'
  | 'onDragStart'
  | 'onDragEnd'
> {
  /** Diameter in pixels.
   * @default 32 */
  size?: number
}

/**
 * Brand mark for Ellie — Engrate's chat assistant. WALL-E-style binocular
 * visor: two sunflower goggle barrels bridged at the top, each with a
 * metallic rim, dark glass, and an upper-left reflection. The visor briefly
 * narrows on a random interval for a robotic "blink" matching the cadence
 * of `ellie-alive.mp4`. Respects `prefers-reduced-motion`.
 */
export const EllieMark = React.forwardRef<SVGSVGElement, EllieMarkProps>(
  ({ size = 32, className, ...props }: EllieMarkProps, ref) => {
    const reduceMotion = useReducedMotion()
    const [visorClosed, setVisorClosed] = React.useState(false)

    React.useEffect(() => {
      if (reduceMotion) return
      let blinkTimeout: number | undefined
      const scheduleBlink = () => {
        const delay = 3500 + Math.random() * 5500
        blinkTimeout = window.setTimeout(() => {
          setVisorClosed(true)
          window.setTimeout(() => {
            setVisorClosed(false)
            scheduleBlink()
          }, 130)
        }, delay)
      }
      scheduleBlink()
      return () => {
        if (blinkTimeout !== undefined) window.clearTimeout(blinkTimeout)
      }
    }, [reduceMotion])

    return (
      <motion.svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('inline-block shrink-0', className)}
        animate={reduceMotion ? undefined : { scale: [1, 1.025, 1] }}
        transition={{
          duration: 4.4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        aria-hidden="true"
        {...props}
      >
        <motion.g
          animate={{ scaleY: visorClosed ? 0.16 : 1 }}
          transition={{ duration: 0.12, ease: 'easeOut' }}
          style={{ transformOrigin: '16px 16px' }}
        >
          {/* Bridge bar between the two barrels — fuses them into one unit. */}
          <rect
            x="12.5"
            y="11"
            width="7"
            height="6"
            fill="var(--color-sunflower)"
          />
          {/* Left barrel: sunflower housing → metallic rim → glass → highlight. */}
          <circle cx="9.5" cy="16" r="7.5" fill="var(--color-sunflower)" />
          <circle cx="9.5" cy="16" r="6.1" fill="var(--color-quaternary)" />
          <circle cx="9.5" cy="16" r="5" fill="#0a0a0a" />
          <circle cx="7.9" cy="14.4" r="1.4" fill="#ffffff" opacity="0.95" />
          {/* Right barrel. */}
          <circle cx="22.5" cy="16" r="7.5" fill="var(--color-sunflower)" />
          <circle cx="22.5" cy="16" r="6.1" fill="var(--color-quaternary)" />
          <circle cx="22.5" cy="16" r="5" fill="#0a0a0a" />
          <circle cx="20.9" cy="14.4" r="1.4" fill="#ffffff" opacity="0.95" />
          {/* Subtle weathering — a thin darker rim along the bottom of each
              barrel for depth, no head silhouette. */}
          <path
            d="M 2 16.5 a 7.5 7.5 0 0 0 15 0"
            fill="none"
            stroke="#000000"
            strokeOpacity="0.18"
            strokeWidth="0.5"
          />
          <path
            d="M 15 16.5 a 7.5 7.5 0 0 0 15 0"
            fill="none"
            stroke="#000000"
            strokeOpacity="0.18"
            strokeWidth="0.5"
          />
        </motion.g>
      </motion.svg>
    )
  }
)
EllieMark.displayName = 'EllieMark'
