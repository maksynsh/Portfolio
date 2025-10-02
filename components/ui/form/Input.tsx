'use client'
import { cn } from '@/lib/utils'
import { useMotionTemplate, useMotionValue, motion } from 'framer-motion'
import { Label } from './Label'
import { forwardRef, useState } from 'react'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  label?: string
  error?: string
}

const radius = 100

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, id, label, error, ...props }, ref) => {
    const [visible, setVisible] = useState(false)

    let mouseX = useMotionValue(0)
    let mouseY = useMotionValue(0)

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect()

      mouseX.set(clientX - left)
      mouseY.set(clientY - top)
    }
    return (
      <div className={cn('flex w-full flex-col space-y-1.5')}>
        {label && (
          <Label htmlFor={id} required={props.required}>
            {label}
          </Label>
        )}
        <motion.div
          style={{
            background: useMotionTemplate`
            radial-gradient(
              ${visible ? radius + 'px' : '0px'} circle at ${mouseX}px ${mouseY}px,
              #8b5cf6,
              transparent 80%
              )
              `,
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
          className="group/input rounded-lg p-0.5 transition duration-300"
        >
          <input
            type={type}
            className={cn(
              `shadow-input dark:placeholder-text-neutral-600 flex h-10 w-full
              rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black
              transition duration-400 group-hover/input:shadow-none
              file:border-0 file:bg-transparent file:text-sm file:font-medium
              placeholder:text-neutral-400 focus-visible:ring-[2px]
              focus-visible:ring-slate-400 focus-visible:outline-none
              disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-950
              dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] `,
              className,
            )}
            ref={ref}
            id={id}
            {...props}
          />
        </motion.div>
        {error && (
          <p role="alert" className="text-red-700 text-xs mt-1">
            {error}
          </p>
        )}
      </div>
    )
  },
)
