'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import { cn } from '@/utils'

import { MovingBorder } from './MovingBorder'

export const Card = ({
  title,
  description,
  img,
  tag,
  className,
  children,
}: {
  title: string
  description: string
  img: string
  tag?: string
  className?: string
  children?: React.ReactNode
}) => {
  const [hovered, setHovered] = useState(false)
  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        `border border-black/[0.2] group/canvas-card flex items-center
        justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4
        relative h-60 md:h-120`,
        className,
      )}
    >
      <Icon
        className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black"
      />
      <Icon
        className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white
          text-black"
      />
      <Icon
        className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black"
      />
      <Icon
        className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white
          text-black"
      />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <img
        src={img}
        alt={title}
        className="text-center group-hover/canvas-card:-translate-y-4
          group-hover/canvas-card:opacity-0 transition duration-200
          max-md:hidden size-32 absolute top-24 left-1/2 -translate-x-1/2"
      />

      <div
        className="max-md:group-hover/canvas-card:opacity-0
          group-hover/canvas-card:-translate-y-36 transition-all duration-200
          w-fit absolute top-24 md:top-1/2 left-1/2 -translate-x-1/2"
      >
        {tag && (
          <MovingBorder
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: 'rgb(4,7,29)',
              backgroundColor:
                'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 w-32 py-2 border-neutral-200 dark:border-slate-800
              transition-all text-white/30 group-hover/canvas-card:text-white/70
              text-lg font-semibold uppercase"
          >
            {tag}
          </MovingBorder>
        )}
      </div>

      <div className="relative z-20">
        <div
          className="opacity-0 group-hover/canvas-card:opacity-100 relative z-10
            mt-4 group-hover/canvas-card:text-white
            group-hover/canvas-card:-translate-y-5 transition duration-200
            text-center space-y-2"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-glow">{title}</h3>
          <p className="text-gray-700 dark:text-blue-100 text-sm md:text-base">
            {description}
          </p>
        </div>
      </div>
    </article>
  )
}

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  )
}
