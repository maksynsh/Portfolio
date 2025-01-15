import { cn } from '@/utils'

import { Paper } from './Paper'

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        `grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl
        mx-auto `,
        className,
      )}
    >
      {children}
    </div>
  )
}

export interface BentoGridItemProps {
  id: string
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
  imgClassName?: string
  titleClassName?: string
  img?: string
  spareImg?: string
}

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  header,
  icon,
}: BentoGridItemProps) => {
  return (
    <Paper
      id={id}
      className={cn(
        'relative row-span-1 group/bento flex flex-col justify-between gap-4',
        className,
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div
          className="font-sans font-bold text-neutral-600 dark:text-neutral-200
            mb-2 mt-2"
        >
          {title}
        </div>
        <div
          className="font-sans font-normal text-neutral-600 text-xs
            dark:text-neutral-300"
        >
          {description}
        </div>
      </div>
    </Paper>
  )
}
