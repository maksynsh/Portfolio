'use client'
import { motion, stagger, useAnimate } from 'framer-motion'
import { useEffect, useMemo } from 'react'

import { cn } from '@/lib/utils'

interface TextRevealEffectProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
  words: string
  className?: string
  filter?: boolean
  duration?: number
  paintedWordsIndexes?: number[]
  paintedWordsVariant?: 'purple' | 'purpleGradient'
  defaultWordsClassName?: string
}

export const TextRevealEffect = ({
  as = 'p',
  words,
  className,
  filter = true,
  duration = 0.5,
  paintedWordsIndexes,
  paintedWordsVariant,
  defaultWordsClassName,
}: TextRevealEffectProps) => {
  const [scope, animate] = useAnimate()
  const wordsArray = words.split(' ')
  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
        filter: filter ? 'blur(0px)' : 'none',
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      },
    )
  }, [scope.current])

  const paintedWordsClass = useMemo(() => {
    switch (paintedWordsVariant) {
      case 'purple':
        return 'text-purple'
      case 'purpleGradient':
        return 'bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500'
      default:
        return 'text-purple'
    }
  }, [paintedWordsVariant])

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={cn(
                'opacity-0',
                paintedWordsIndexes?.includes(idx)
                  ? paintedWordsClass
                  : defaultWordsClassName,
              )}
              style={{
                filter: filter ? 'blur(10px)' : 'none',
              }}
            >
              {word}{' '}
            </motion.span>
          )
        })}
      </motion.div>
    )
  }

  const Tag = as

  return (
    <Tag
      className={cn('font-bold leading-snug tracking-wide', className)}
      aria-description={words}
    >
      {renderWords()}

      {/* For SEO */}
      <noscript>
        <span className="hidden" aria-hidden={false}>
          {words}
        </span>
      </noscript>
    </Tag>
  )
}
