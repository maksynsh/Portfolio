'use client'

import { motion } from 'framer-motion'
import { ReactNode, useEffect, useRef, useState } from 'react'

import { cn } from '@/utils'

import { Button } from './Button'

type Tab = {
  title: string
  value: string
  url?: string
  icon?: ReactNode
}

export const Tabs = ({
  tabs: propTabs,
  defaultTab,
  containerClassName,
  activeTabClassName,
  tabClassName,
  onlyIconsOnMobile,
}: {
  tabs: Tab[]
  defaultTab?: Tab
  containerClassName?: string
  activeTabClassName?: string
  tabClassName?: string
  onlyIconsOnMobile?: boolean
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
      const activeButton: HTMLElement | null =
        containerRef.current.querySelectorAll('a')[activeIndex]
      const glowIndicator: HTMLElement | null =
        document.querySelector('#glow-indicator')

      if (activeButton && glowIndicator) {
        const { offsetLeft, offsetWidth } = activeButton
        setIndicatorStyle({
          left: offsetLeft + offsetWidth / 2 - glowIndicator.offsetWidth / 2,
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
        className="h-1 w-2 md:w-6 bg-gray-100 rounded absolute -top-0.5"
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
            key={tab.value}
            aria-label={tab.title}
            href={tab.url}
            size="sm"
            variant="ghost"
            onClick={() => {
              selectTab(idx)
            }}
            className={cn(
              `relative rounded-full focus:ring-0 focus:ring-offset-0
              outline-none overflow-visible`,
              onlyIconsOnMobile && tab.icon
                ? 'size-9 p-0 md:min-w-20'
                : 'min-w-20',
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

            <span
              className={onlyIconsOnMobile && tab.icon ? 'hidden md:block' : ''}
            >
              {tab.title}
            </span>
            <span
              className={
                onlyIconsOnMobile && tab.icon ? 'block md:hidden' : 'hidden'
              }
            >
              {tab.icon}
            </span>
          </Button>
        ))}
      </div>
    </div>
  )
}
