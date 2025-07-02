'use client'

import { motion } from 'framer-motion'
import { ReactNode, useEffect, useRef, useState } from 'react'

import { cn } from '@/utils'

import { Button } from './Button'

export type Tab = {
  title: string
  value: string
  url?: string
  icon?: ReactNode
}

interface TabsProps {
  id: string
  tabs: Tab[]
  activeTab?: Tab
  defaultTab?: Tab
  containerClassName?: string
  activeTabClassName?: string
  tabClassName?: string
  onlyIconsOnMobile?: boolean
  onTabChange?: (tab: Tab) => void
}

const DARK_BOX_SHADOW =
  '0 0 17px 6px rgba(255, 255, 255, 0.45), 0 0 34px 12px rgba(255, 255, 255, 0.3)'
const LIGHT_BOX_SHADOW =
  '0 0 17px 6px rgba(203, 172, 249, 0.75), 0 0 34px 12px rgba(203, 172, 249, 0.58)'

export const Tabs = ({
  id,
  tabs: propTabs,
  activeTab,
  defaultTab,
  containerClassName,
  activeTabClassName,
  tabClassName,
  onlyIconsOnMobile,
  onTabChange,
}: TabsProps) => {
  const [active, setActive] = useState<Tab | undefined>(activeTab ?? defaultTab)
  const containerRef = useRef<HTMLDivElement>(null)
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    boxShadow: DARK_BOX_SHADOW,
  })

  const glowIndicatorId = `glow-indicator__${id}`
  const activeTabHighlightId = `active-tab__${id}`

  const selectTab = (idx: number) => {
    setActive(propTabs[idx])
  }

  useEffect(() => {
    setIndicatorStyle(prev => ({
      ...prev,
      boxShadow: document.documentElement.classList.contains('dark')
        ? DARK_BOX_SHADOW
        : LIGHT_BOX_SHADOW,
    }))
  }, [])

  useEffect(() => {
    setActive(activeTab)
  }, [activeTab])

  useEffect(() => {
    if (containerRef.current && active) {
      if (onTabChange) onTabChange(active)
      const activeIndex = propTabs.findIndex(tab => tab.value === active.value)
      const activeButton: HTMLElement | null =
        containerRef.current.querySelectorAll('a')[activeIndex]
      const glowIndicator: HTMLElement | null =
        containerRef.current.querySelector(`#${glowIndicatorId}`)

      if (activeButton && glowIndicator) {
        const { offsetLeft, offsetWidth } = activeButton
        setIndicatorStyle(prev => ({
          ...prev,
          left: offsetLeft + offsetWidth / 2 - glowIndicator.offsetWidth / 2,
        }))
      }
    }
  }, [active, propTabs])

  return (
    <div className="relative" ref={containerRef}>
      <motion.div
        id={glowIndicatorId}
        className={cn(
          indicatorStyle.left < 1 || !active ? '!opacity-0' : 'opacity-100',
          `transition-opacity duration-[.35s] h-1 w-2 md:w-6 bg-gray-100 rounded
          absolute -top-0.5`,
        )}
        style={{
          boxShadow: indicatorStyle.boxShadow,
        }}
        layoutId={glowIndicatorId}
        animate={{ left: indicatorStyle.left }}
        transition={{
          type: 'spring',
          bounce: 0.3,
          duration: 0.6,
        }}
      />
      <div
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
                layoutId={activeTabHighlightId}
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
