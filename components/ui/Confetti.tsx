'use client'

import { ReactNode } from 'react'
import Lottie, { Options } from 'react-lottie'

import animationData from '@/data/mini-confetti.json'
import { cn } from '@/utils'

interface ConfettiProps {
  className?: string
  options: Pick<Options, 'loop' | 'autoplay'>
  children?: ReactNode
}

export const Confetti = ({ className, options, children }: ConfettiProps) => {
  return (
    <div className={cn('relative', className)}>
      <div className="absolute bottom-0 translate-y-1/2 right-0">
        <Lottie
          options={{
            ...options,
            animationData,
            rendererSettings: { preserveAspectRatio: 'xMidYMid slice' },
          }}
        />
      </div>

      {children}
    </div>
  )
}
