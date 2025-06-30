'use client'

import { cn } from '@/utils'
import React, { ReactNode, useEffect, useState } from 'react'

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
  const scrollerRef = React.useRef<HTMLUListElement>(null)

  useEffect(() => {
    addAnimation()
  }, [])

  const [start, setStart] = useState(false)

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }
  const getDirection = () => {
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
    }
  }
  const getSpeed = () => {
    if (containerRef.current) {
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
  }
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
        ref={scrollerRef}
        className={cn(
          'flex w-max min-w-full shrink-0 flex-nowrap gap-16 py-4',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]',
          listClassName,
        )}
      >
        {children}
      </ul>
    </div>
  )
}
