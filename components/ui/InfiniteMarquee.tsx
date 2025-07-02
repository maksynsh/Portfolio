'use client'

import { cn } from '@/utils'
import React, { ReactNode, useEffect } from 'react'

interface InfiniteMarqueeProps {
  children: ReactNode
  direction?: 'left' | 'right'
  speed?: 'fast' | 'normal' | 'slow'
  pauseOnHover?: boolean
  className?: string
  listClassName?: string
}

export const InfiniteMarquee = ({
  children,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
  listClassName,
}: InfiniteMarqueeProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null)

  // Convert children to array for duplication
  const childrenArray = React.Children.toArray(children)
  // Duplicate the array for seamless looping
  const marqueeItems = [...childrenArray, ...childrenArray]

  useEffect(() => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards',
        )
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse',
        )
      }
      switch (speed) {
        case 'fast':
          containerRef.current.style.setProperty('--animation-duration', '20s')
          break
        case 'normal':
          containerRef.current.style.setProperty('--animation-duration', '40s')
          break
        case 'slow':
          containerRef.current.style.setProperty('--animation-duration', '60s')
      }
    }
  }, [direction, speed])

  return (
    <div
      ref={containerRef}
      className={cn(
        `scroller relative z-20 max-w-7xl overflow-hidden
        [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]`,
        className,
      )}
    >
      <ul
        className={cn(
          `flex w-max min-w-full shrink-0 flex-nowrap gap-16 py-4
          animate-scroll`,
          pauseOnHover && 'hover:[animation-play-state:paused]',
          listClassName,
        )}
      >
        {marqueeItems}
      </ul>
    </div>
  )
}
