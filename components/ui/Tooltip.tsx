'use client'

import React, { ReactNode, useState } from 'react'
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from 'framer-motion'

interface TooltipProps {
  title: string
  description?: string
  children: ReactNode
}

export const Tooltip = ({ title, description, children }: TooltipProps) => {
  const [hover, setHover] = useState<boolean>(false)
  const springConfig = { stiffness: 100, damping: 5 }
  const x = useMotionValue(0) // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig,
  )
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig,
  )
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2
    x.set(event.nativeEvent.offsetX - halfWidth) // set the x value, which is then used in transform and rotate
  }

  return (
    <div
      className="relative"
      style={{ position: 'relative' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <AnimatePresence mode="popLayout">
        {hover && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.6 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: 'spring',
                stiffness: 260,
                damping: 10,
              },
            }}
            exit={{ opacity: 0, y: 20, scale: 0.6 }}
            style={{
              translateX: translateX,
              rotate: rotate,
              whiteSpace: 'nowrap',
            }}
            className="absolute -top-16 left-1/2 z-50 flex -translate-x-1/2
              flex-col items-center justify-center rounded-md bg-black px-4 py-2
              text-xs shadow-xl"
          >
            <div
              className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%]
                bg-gradient-to-r from-transparent via-sky-600 to-transparent"
            />
            <div
              className="absolute -bottom-px left-10 z-30 h-px w-[40%]
                bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            />
            <div className="relative z-30 text-base font-bold text-white">
              {title}
            </div>
            <div className="text-xs text-white">{description}</div>
          </motion.div>
        )}
      </AnimatePresence>
      <div onMouseMove={handleMouseMove}>{children}</div>
    </div>
  )
}
