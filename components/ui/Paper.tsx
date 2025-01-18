import { CSSProperties, FC, ReactNode } from 'react'

import { cn } from '@/utils'

interface PaperProps {
  as?: 'div' | 'article' | 'section'
  id?: string
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

export const Paper: FC<PaperProps> = ({
  id,
  className,
  style,
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
      {children}
    </Tag>
  )
}
