'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

import { cn } from '@/utils'

import { Button } from './Button'

type Tab = {
  title: string
  value: string
  url?: string
}

export const Tabs = ({
  tabs: propTabs,
  defaultTab,
  containerClassName,
  activeTabClassName,
  tabClassName,
}: {
  tabs: Tab[]
  defaultTab?: Tab
  containerClassName?: string
  activeTabClassName?: string
  tabClassName?: string
}) => {
  const [active, setActive] = useState<Tab | undefined>(defaultTab)
  const containerRef = useRef<HTMLDivElement>(null)
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0 })

  const selectTab = (idx: number) => {
    setActive(propTabs[idx])
  }

  useEffect(() => {
    if (containerRef.current && active) {
      const activeIndex = propTabs.findIndex(tab => tab.value === active.value)
      const activeButton =
        containerRef.current.querySelectorAll('a')[activeIndex]

      if (activeButton) {
        const { offsetLeft, offsetWidth } = activeButton as HTMLElement
        setIndicatorStyle({
          left: offsetLeft + offsetWidth / 2 - 12,
        })
      }
    }
  }, [active, propTabs])

  return (
    <div className="relative">
      {/* <div
        id="glow-indicator"
        className="h-1 w-3/5 -mb-0.5 bg-gray-100 rounded
          shadow-[0_3px_21px_3px_#fff] mx-auto"
      ></div> */}
      <motion.div
        id="glow-indicator"
        className="h-1 w-6 bg-gray-100 rounded shadow-[0_3px_21px_3px_#fff]
          absolute -top-0.5"
        style={{
          boxShadow:
            '0 0 17px 6px rgba(255, 255, 255, 0.45), 0 0 34px 12px rgba(255, 255, 255, 0.3)',
        }}
        layoutId="glowIndicator"
        animate={{ left: indicatorStyle.left }}
        transition={{
          type: 'spring',
          bounce: 0.3,
          duration: 0.6,
        }}
      />
      <div
        ref={containerRef}
        className={cn(
          `flex flex-row items-center justify-start [perspective:1000px]
          relative no-scrollbar max-w-full w-full`,
          containerClassName,
        )}
      >
        {propTabs.map((tab, idx) => (
          <Button
            key={tab.title}
            href={tab.url}
            size="sm"
            variant="ghost"
            onClick={() => {
              selectTab(idx)
            }}
            className={cn(
              `relative rounded-full min-w-20 focus:ring-0 focus:ring-offset-0
              outline-none hover:bg-gradient-to-r from-slate-300/5
              to-slate-500/5 overflow-visible`,
              tabClassName,
            )}
            style={{
              transformStyle: 'flat',
            }}
          >
            {active?.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
                className={cn(
                  'absolute inset-0 rounded-full',
                  activeTabClassName,
                )}
              />
            )}

            <span className="relative block text-black dark:text-white">
              {tab.title}
            </span>
          </Button>
        ))}
      </div>
    </div>
  )
}
