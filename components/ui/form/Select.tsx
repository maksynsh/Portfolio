'use client'
import { cn } from '@/lib/utils'
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  AnimatePresence,
} from 'framer-motion'
import { Label } from './Label'
import { useEffect, useRef, useState } from 'react'
import { Button } from '../Button'
import { IoChevronDown } from 'react-icons/io5'
import { ChangeHandler } from 'react-hook-form'

export interface SelectOption {
  value: string
  label: string
}

export interface SelectProps {
  className?: string
  id: string
  label?: string
  placeholder?: string
  disabled?: boolean
  value?: string
  options: SelectOption[]
  error?: string
  required?: boolean
  onSelect?: (value: string) => void
  onChange?: ChangeHandler
}

const radius = 100

export const Select = ({
  className,
  id,
  label,
  value,
  options,
  placeholder,
  error,
  disabled,
  required,
  onSelect,
  onChange,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [visible, setVisible] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const selectedOption = options.find(option => option.value === value)
  const displayText = selectedOption?.label || placeholder || 'Select an option'

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (optionValue: string) => {
    onSelect?.(optionValue)
    onChange?.({ target: { value: optionValue } })
    setIsOpen(false)
  }

  return (
    <div
      className={cn('relative flex w-full flex-col space-y-1.5', className)}
      ref={containerRef}
    >
      {label && (
        <Label htmlFor={id} required={required} className="text-sm font-medium">
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
        <button
          type="button"
          className={cn(
            `flex h-10 w-full items-center justify-between rounded-md bg-gray-50
            px-3 py-2 text-sm text-black transition duration-400
            group-hover/input:shadow-none focus-visible:ring-[2px]
            focus-visible:ring-slate-400 focus-visible:outline-none
            disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-950
            dark:text-white dark:shadow-[0px_0px_1px_1px_#404040]`,
            isOpen && 'ring-[2px] ring-slate-400 outline-none',
          )}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          aria-expanded={isOpen}
          aria-controls={`${id}-dropdown`}
          aria-label={label || 'Select option'}
        >
          <span className={value ? '' : 'text-neutral-400'}>{displayText}</span>
          <IoChevronDown
            className={cn(
              'h-4 w-4 transition-transform',
              isOpen && 'rotate-180',
            )}
          />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 z-30 w-full mt-1.5 rounded-md border
                border-gray-200 bg-white shadow-lg dark:border-zinc-700
                dark:bg-gray-950"
              id={`${id}-dropdown`}
            >
              <div className="max-h-60 overflow-y-auto p-1">
                {options.map(option => (
                  <Button
                    key={option.value}
                    variant="ghost"
                    className={cn(
                      'w-full justify-start px-4 py-2 text-sm',
                      option.value === value && 'bg-gray-100 dark:bg-gray-900',
                    )}
                    onClick={() => handleSelect(option.value)}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      {error && (
        <p role="alert" className="text-red-700 text-xs mt-1">
          {error}
        </p>
      )}
    </div>
  )
}
