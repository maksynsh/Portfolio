import { FC, ReactNode } from 'react'

import { cn } from '@/utils'

interface PaperProps {
  id?: string
  className?: string
  children?: ReactNode
}

export const Paper: FC<PaperProps> = ({ id, className, children }) => {
  return (
    <div
      id={id}
      className={cn(
        `rounded-3xl hover:shadow-xl transition duration-200 shadow-input
        dark:shadow-none p-4 bg-white dark:bg-black border border-transparent
        dark:border-white/20`,
        className,
      )}
    >
      {children}
    </div>
  )
}
