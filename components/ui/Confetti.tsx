'use client'

import dynamic from 'next/dynamic'
import { ReactNode, Ref } from 'react'
import type { LottieProps, Options } from 'react-lottie'

import animationData from '@/lib/data/mini-confetti.json'
import { cn } from '@/lib/utils'

const Lottie = dynamic(() => import('react-lottie'), {
  ssr: false,
})

interface ConfettiProps extends Omit<LottieProps, 'options'> {
  ref?: Ref<any>
  className?: string
  positionClassName?: string
  options: Pick<Options, 'loop' | 'autoplay'>
  children?: ReactNode
}

export const Confetti = ({
  className,
  positionClassName,
  options,
  children,
  ...lottieProps
}: ConfettiProps) => {
  return (
    <div className={cn('relative', className)}>
      <div
        className={cn(
          'absolute bottom-0 translate-y-1/2 right-0',
          positionClassName,
        )}
      >
        <Lottie
          {...lottieProps}
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
