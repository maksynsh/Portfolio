'use client'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

import { cn } from '@/utils'

import { Confetti } from '../ui'

const images = [
  { src: '/images/icons/pixel-fox-icon.webp', alt: 'Pixel fox' },
  { src: '/images/icons/pixel-man-icon.webp', alt: 'Pixel man' },
  { src: '/images/icons/pixel-guitar-icon.webp', alt: 'Pixel guitar' },
]

export const PortfolioIcon = () => {
  const lottieRef = useRef<any>(null)
  const [index, setIndex] = useState<number>(0)

  const toNextImage = () => {
    setIndex(prev => (images[prev + 1] ? prev + 1 : 0))
    if (lottieRef.current) {
      lottieRef.current.stop()
      lottieRef.current.play()
    }
  }

  return (
    <Confetti
      className="w-fit select-none pointer-events-auto"
      positionClassName="-right-9 -bottom-9 size-24 saturate-0 rotate-12 translate-y-0 *:pointer-events-none"
      ref={lottieRef}
      speed={1.6}
      options={{
        autoplay: false,
        loop: false,
      }}
    >
      <motion.div
        whileTap={{
          scale: 0.9,
          rotate: 7,
          animationDuration: '300ms',
          type: 'spring',
        }}
        whileHover={{
          scale: 1.02,
          animationDuration: '100ms',
          type: 'spring',
        }}
        className="relative z-10 size-12 shadow-lg border-[3px] rounded-md
          overflow-hidden border-slate-900 dark:border-purple cursor-pointer"
        onClick={toNextImage}
        aria-label="Max Sharinov - Web Engineer"
      >
        {images.map(({ src, alt }, i) => (
          <img
            key={src}
            className={cn(
              index !== i && 'hidden',
              'size-full object-cover object-center',
            )}
            src={src}
            alt={alt}
            width={64}
            height={64}
            fetchPriority="high"
            loading={index !== i ? 'lazy' : 'eager'}
          />
        ))}
      </motion.div>
    </Confetti>
  )
}
