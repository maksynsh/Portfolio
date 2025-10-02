import { CSSProperties, FC, ReactNode } from 'react'

import { cn } from '@/lib/utils'
import {
  BorderGlowingEffect,
  BorderGlowingEffectProps,
} from './BorderGlowingEffect'

interface PaperProps {
  as?: 'div' | 'article' | 'section' | 'li'
  id?: string
  className?: string
  style?: CSSProperties
  borderGlowingEffect?: boolean
  borderGlowingEffectProps?: BorderGlowingEffectProps
  children?: ReactNode
}

export const Paper: FC<PaperProps> = ({
  id,
  className,
  style,
  borderGlowingEffect,
  borderGlowingEffectProps,
  children,
  as = 'div',
}) => {
  const Tag = as
  return (
    <Tag
      id={id}
      className={cn(
        `rounded-3xl hover:shadow-xl transition duration-200 shadow-input
        dark:shadow-none bg-white dark:card-dark-gradient border
        border-transparent dark:border-white/10`,
        className,
      )}
      style={style}
    >
      {borderGlowingEffect && (
        <BorderGlowingEffect
          spread={40}
          glow
          disabled={false}
          proximity={64}
          inactiveZone={0.2}
          borderWidth={2}
          movementDuration={1}
          {...borderGlowingEffectProps}
        />
      )}

      {children}
    </Tag>
  )
}
